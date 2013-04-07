/*jshint jquery: true, browser: true */
;(function( $, undefined ) {

	var dependencies = {},
		dependents = {},
		downloadJqueryuiHost = $( "#download-builder" ).data( "download-jqueryui-host" ),
		allCustomText = $('#download-builder .ui-widget-custom'),
		customDependents = {};

	// rewrite form action for testing on staging
	if ( /^stage\./.test( location.host ) ) {
		$( "#download-builder form" ).attr( "action", function( index, href ) {
			return href.replace( /(download\.)/, "stage.$1" );
		});
		downloadJqueryuiHost = downloadJqueryuiHost.replace( /(download\.)/, "stage.$1" );
	}

	function allComponents() {
		return $( "#download-builder .component-group-list input[type=checkbox]" );
	}

	function allGroup( referenceElement ) {
		return $( referenceElement ).closest( ".component-group" ).find( ".component-group-list input[type=checkbox]" );
	}
	function _disable( elem, value ){
		elem.each( function(){
			var elem = $( this),
				name = elem.attr( 'name' ),
				deps = $(customDependents[name]);
			
			
			//console.log(name);
			//console.log(name,value);
			//console.dir(customDependents);
			if( deps ){
				deps.prop( 'disabled',value ? '':'disaled' );
				if(value){
					deps.removeClass('disbled');
				}else{
					deps.addClass('disbled');
				}
			}
		});
	}
	function _check( elem, value ) {
		//console.log(elem,value);
		elem.each(function() {
			var elem = $( this ),
				name = elem.attr( "name" );

			// Handle dependencies
			if ( value ) {
				if ( dependencies[ name ] ) {
					// Whenever a checkbox is activated, also activate all dependencies
					_check( dependencies[ name ], value );
				}
			} else if ( dependents[ name ] ) {
				// Whenever a checkbox is deactivated, also deactivate all dependents
				_check( dependents[ name ], value );
			}

			elem.prop( "checked", value );

			// Update toggle all
			if ( value ) {
				// Set group toggle all if all components of its group are checked
				if ( !allGroup( elem ).filter( ":not(:checked)" ).length ) {
					$( elem ).closest( ".component-group" ).find( ".toggle input[type=checkbox]" ).prop( "checked", true );
				}
				// Set toggle all if all components are checked
				if ( !allComponents().filter( ":not(:checked)" ).length ) {
					$( elem ).closest( ".components" ).prev().find( ".toggleAll input[type=checkbox]" ).prop( "checked", true );
				}
			} else {
				// Unset group toggle all if no components of its group are checked
				if ( !allGroup( elem ).filter( ":checked" ).length ) {
					$( elem ).closest( ".component-group" ).find( ".toggle input[type=checkbox]" ).prop( "checked", false );
				}
				// Unset toggle all if no components are checked
				if ( !allComponents().filter( ":checked" ).length ) {
					$( elem ).closest( ".components" ).prev().find( ".toggleAll input[type=checkbox]" ).prop( "checked", false);
				}
			}
		});
		downloadOnOff();
	}

	function check( event, elem, value ) {
		var consolidatedDependents, consolidatedNames;

		// Uncheck validations
		if ( !value ) {
			consolidatedDependents = $();
			consolidatedNames = [];
			elem.each(function() {
				var name = $( this ).attr( "name" );
				if ( dependents[ name ] && dependents[ name ].filter( ":checked" ).not( elem ).length > 0 ) {
					consolidatedNames.push( name );
					consolidatedDependents = consolidatedDependents.add( dependents[ name ].filter( ":checked" ).not( elem ) );
				}
			});

			// Validate if uncheck is allowed when it has dependents
			if ( consolidatedDependents.length > 0 ) {
				event.preventDefault();
				$( "<div>" )
					.attr( "title", "Remove " + consolidatedNames.join( ", " ) + "?" )
					.append(
						$( "<p>" ).html(
							"Are you sure you want to remove <b>" + consolidatedNames.join( ", " ) + "</b>? The following " + pluralize( consolidatedDependents.length, "component", "components" ) + " " + pluralize( consolidatedDependents.length, "depends", "depend" ) + " on it and will be removed: " + consolidatedDependents.map(function() {
								return "<b>" + this.name + "</b>";
							}).toArray().join( ", " ) + "."
						)
					)
					.dialog({
						modal: true,
						buttons: {
							"Remove": function() {
								_check( elem, value );
								$( this ).remove();
							},
							"Cancel": function() {
								$( this ).remove();
							}
						}
					})
					.dialog( "widget" ).addClass( "download-builder-dialog" );
			} else {
				_check( elem, value );
			}

		// Check validations (none)
		} else {
			_check( elem, value );
		}
		
		_disable( elem, value );
	}
	function validata(){
		function setValue( elem, value ){
			//var tagname = elem
			var nodename = elem.prop('nodeName');
			switch(nodename){
				case 'TEXTAREA':
					elem.attr('value',value);
					break;
				case 'INPUT':
					elem.attr('value',value);
					break;
				default:;
			}
		}
		function getValue( elem ){
			//var tagname = elem
			var nodename = elem.prop('nodeName'),
				retval = '';
			switch(nodename){
				case 'TEXTAREA':
					retval = elem.attr('value');
					break;
				case 'INPUT':
					retval = elem.attr('value');
					break;
				default:;
			}
			return retval;
		}
		allCustomText.on('blur',function( event ){
			//alert($(this).attr('name'));
			var elem = $(this),
				fieldType = elem.data('type'),
				target = $(event.target),
				targetValue = getValue(target);
			if(targetValue === ''){
				return;
			}
			
			switch(fieldType){
				case 'object':
					var obj = S2O.objectify( targetValue );
					if(obj){
						setValue( target, O2S.stringify(obj));
					}else{
						alert('类型有误');
					}
					break;
				default:;
					
			}
			
		});
	}
	validata();
	function downloadOnOff() {
		if ( !allComponents().filter( ":checked" ).length && $( "#theme" ).val() === "none" ) {
			$( "#download-builder input[type=submit]" ).prop( "disabled", true ).addClass( "ui-state-disabled" );
		} else {
			$( "#download-builder input[type=submit]" ).prop( "disabled", false ).removeClass( "ui-state-disabled" );
		}
	}

	function drawToggleAll( className ) {
		return $( "<label>" )
			.addClass( className )
			.text( " Toggle All" )
			.prepend(
				$( "<input type=checkbox>" )
					.prop( "checked", true )
					.addClass( "ui-widget-content" )
			);
	}

	function pluralize( count, singular, plural ) {
		return count === 1 ? singular : plural;
	}

	function hashClean(locStr){
		return locStr.replace( /%23/g, "" ).replace( /[\?#]+/g, "" );
	}

	function currSearch() {
		return hashClean( window.location.search );
	}

	function themeFetch( success, error ) {
		$.ajax( downloadJqueryuiHost + "/download/theme" + ( currSearch() ? "?" + currSearch() : "" ), {
			dataType: "jsonp",
			success: function( response ) {
				success( response );
			},
			error: error
		});
	}
	allCustomText.each(function(){
		var text = $( this ),
		    thisDependencies = text.data( 'dependencies' );
		    if(!thisDependencies){
		    	return;
		    }
		    thisDependencies = thisDependencies.split(',');
			$.each( thisDependencies,function(){
			    var dependecy = this,
			        dependecyElem = $( '[name='+this+']' );
			    if( !customDependents[ this ] ){
			    	customDependents[ this ] = $();
			    }
			    customDependents[ this ] = customDependents[ this ].add( text );
			});
	});
	
	// Initializes dependencies and dependents auxiliary variables.
	$( "#download-builder input[type=checkbox]" ).each(function() {
		var checkbox = $( this ),
			thisDependencies = checkbox.data( "dependencies" ),
			thisName = checkbox.attr( "name" );

		if ( !thisName || !thisDependencies ) {
			return;
		}
		thisDependencies = thisDependencies.split( "," );
		dependencies[ thisName ] = $();
		$.each( thisDependencies, function() {
			var dependecy = this,
				dependecyElem = $( "[name=" + this + "]" );
			dependencies[ thisName ] = dependencies[ thisName ].add( dependecyElem );
			if ( !dependents[ dependecy ] ) {
				dependents[ dependecy ] = $();
			}
			dependents[ dependecy ] = dependents[ dependecy ].add( checkbox );
		});
	});

	// Generating toggle all checkboxes
	$( "#download-builder .components" ).prev().find( "h2" ).after( drawToggleAll( "toggleAll" ) );
	$( "#download-builder .component-group h3" ).after( drawToggleAll( "toggle" ) );

	// binds click handlers on checkboxes
	$( "#download-builder input[type=checkbox]" ).click(function( event ) {
		var target = $( event.target );
		if ( target.parent().is( ".toggle" ) ) {
			check( event, allGroup( this ), $( this ).prop( "checked" ) );
		} else if ( target.parent().is( ".toggleAll" ) ) {
			check( event, allComponents(), $( this ).prop( "checked" ) );
		} else {
			check( event, $( this ), $( this ).prop( "checked" ) );
		}
	});
	//依赖说明文案
	$('input').add($('textarea')).each(function(){
		var input = $(this),
			idForInput = input.attr('id');
		if( idForInput ){
			var label = $('label[for='+idForInput+']'),
				descElem = label.children('.component-desc'),
				dependency = input.data('dependencies'),
				type = input.data('type');
			if(descElem.length>0 && dependency){
				descElem.html(descElem.html()+' #['+dependency+']' +(type?' @['+type+']':''));
			}else if(label.length>0 && dependency){
				label.html(label.html()+' #['+dependency+']' +(type?' @['+type+']':''));
			}
			
		}
	});
	// Loads theme section.
	themeFetch(function( themeSection ) {
		$( "#download-builder .components" ).after( themeSection );

		$( "#theme" ).on( "click change", function() {
			var selected = $( this ).find( "option:selected" ),
				folderName = selected.text().toLowerCase().replace( " ", "-" ),
				val = selected.val();
			$( this ).closest( ".download-builder-header" ).find( "a.themeroller-link" ).attr( "href", "/themeroller" + ( val && val !== "none" ? "#" + val : "" ) );
			$( "#theme-folder-name" ).val( folderName );
			downloadOnOff();
		});

		$( "#download-builder .advanced-settings input" ).each(function() {
			var content = $( this ).next().detach();
			$( this ).tooltip({
				items: "*",
				content: function() {
					return content;
				}
			});
		});

		$( "#scope" ).keyup(function() {
			if ( !$( "#theme-folder-name" ).data( "edited" ) ) {
				$( "#theme-folder-name" ).data( "suggestedEdit", true );
				$( "#theme-folder-name" ).val( $( this ).val().replace( /[ \/\\]/g, "-" ).replace( /[\.\#]/g, "" ) );
			}
		});

		$( "#theme-folder-name" ).keyup(function() {
			var val = $( this ).val(),
				escapedVal = val.replace( /[ \.\#\/\\]/g, "-" );
			$( this ).data( "edited", true );
			$( "#theme-folder-name" ).removeData( "suggestedEdit" );
			if ( escapedVal !== val ) {
				$( this ).val( escapedVal );
			}
		});

		$( "#theme-folder-name" ).blur(function() {
			if ( $( this ).val() === "" ) {
				$( "#theme-folder-name" ).removeData( "edited" );
			}
		});
	}, function( jqXHR, textStatus, errorThrown ) {
		console.log( "Failed loading theme section", textStatus, errorThrown );
	});


        
}( jQuery ));
