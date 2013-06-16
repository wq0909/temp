$(function() {
	$( ".ui-button" ).button();
});

// wait for the DOM to be loaded 
(function($) {
	var form = $('#download-form'),
		formArray = Array,
		componentArea = $('div.download-builder-component'),
		sundryModArr = ['sundry', 'anchor', 'action', 'extend'],
		beaconModArr = ['beacon', 'user', 'nav'],
		searchbarModArr = ['searchbar', 'type', 'static', 'dynamic', 'advanced', 'related'];
	
	form.submit(builde);
	
	if ($.browser.msie) {
		$('input:radio').click(function () {
			this.blur();
			this.focus();
		});
	}
	
	form.change(function(){
		builde(true);
		buildeUrl();
	});
	function buildeUrl(){
		var conf = $.extend({
			apollo : apollo,
			framework : framework
		},headerConfig);
		location.hash = encodeURIComponent(O2S.toStr(conf));
	}
	$("input:radio[name=js-framework]").change(function() {
		setButtonState();
	});
	$("input:radio[name=apollo]").change(function() {
		setButtonState();
		apolloChange();
	});
	
	function setButtonState(){
		var fields = form.formToArray();
		apollo = fields.filter(function(item){ if(item.name==='apollo') return item.value; })[0].value,
		framework = fields.filter(function(item){ if(item.name==='js-framework') return item.value; })[0].value;
		if( apollo ==='myalibaba' || framework === 'atom' ){
			$('.btn-cms-code').hide();
			$('.btn-vm-code').show();
		}else{
			$('.btn-cms-code').show();
			$('.btn-vm-code').show();
		}
	}
	
	
	$('.btn-cms-code').on('click',function(){
		alert(printCMSConfig());
	});
	$('.btn-vm-code').on('click',function(){
		alert(printVMConfig());
	});
	
	function main(){
		fillData();
		setButtonState();
		apolloChange();
		builde();
	}
	function fillData(){
		var json = S2O.objectify( decodeURIComponent(location.hash.substr(1)) );
		if( json && !$.isEmptyObject(json) ){
			$.each(json,function(name,value){
				if( name === 'mod' ){
					$.each( value, function( subName,subValue){
						var modArr = [];
						switch(subName){
							case 'sundry':
								modArr = sundryModArr;
								break;
							case 'searchbar':
								modArr = searchbarModArr;
								break;
							case 'beacon':
								modArr = beaconModArr;
								break;
						}
						var findArr = $.map(modArr,function(item,index){
							if( index == 0 )
								return '[name='+item+']';
							else
								return '[name='+subName+'-'+item+']';
						});
						if( subValue === null ){
							$(findArr.join(',')).attr('checked',false);
						}else if( subValue === undefined ){
							$(findArr.join(',')).attr('checked',true);
						}else if( subValue.length === 0){
							$($.grep(findArr,function(item,index){return index>0;}).join(',')).attr('checked',false);
						}else{
							$($.map(modArr,function(item,index){
								if( index > 0 && subValue.indexOf(item) ===-1 )
									return '[name='+subName+'-'+item+']';
							}).join(',')).attr('checked',false);	
						}
					});
				}else if( name === 'framework' ){
					$('[name=js-framework][value='+value+']').attr('checked',true);
				}else if( name === 'apollo' ){
					$('[name=apollo][value='+value+']').attr('checked',true);
				}else if( $.type(value) ==='object' ){
					$.each( value, function( subName,subValue){
						if( $.type(subValue) === 'object' || $.type(subValue) === 'array' ){
							subValue = O2S.stringify(subValue);
						}
						$('[name='+name+'\\.'+subName+']').val(subValue);
					});
				}else if( $.isFunction(value) ){
					var codeArr = js_beautify(O2S.stringify(value)).split('\n');
					codeArr.pop();
					codeArr.shift();
					codeArr = $.map( codeArr, function(item,index){
						return $.trim( item );
					});
					$.each( codeArr,function( index,item ){
						try{
							var match = (new RegExp('^(.*?)\\(\'(.*?)\'\\)')).exec(item);
							if( match && match.length>2 ){
								var fieldName = name+'.'+match[1];
								$('[name='+fieldName.replace( /\./g, '\\.' )+']').val(match[2]);
							}
						}catch(e){
							
						}
						
					});
				}
			})
		}
	}
	function printVMConfig(){
		var output = [];
		
		if(!$.isEmptyObject(headerConfig)){
			output.push( '##在引用header之前加入以下代码');
		}
		debugger;
		if( framework === 'hoz' ){
			output.push(getHozHeaderConfig());
		}else if( framework ==='atom' ){
			output.push(getAtomHeaderConfig());
		}
		output.push( '##在vm加入共用模板');
		var codeString = '$control.setTemplate("header/header2012.vm").setParameter("headerView", $headerView)';
		
		if( apollo === 'myalibaba'){
			codeString = '$control.setTemplate("kinsoku:header.vm")';
		}else if(apollo === 'normal'){
			codeString += '.setParameter("apollo", "normal")';
		}
		
		if( framework === 'atom' ){
			codeString += '.setParameter("isAtom", true)';
		}
		output.push(codeString);
		return output.join('\n');
	}
	function printCMSConfig(){
		var output = [];
		output.push( '(1) 选择头模版');
		if(apollo=='normal'){
			output.push('"2012新版header normal"');
		}else{
			output.push('"2012新版header full"');
		}
		output.push('\n(2) body适当的位置加入以下代码');
		output.push(getHozHeaderConfig());
		output.push('#parse("$pageinfo.header")')
		return output.join('\n');
	}
	function getAtomHeaderConfig(){
		var output = [];
		if(!$.isEmptyObject(headerConfig)){
			output.push('<script>');
			var outputJs = [];
			outputJs.push('seajs.use("js/6v/lib/icbu/gdata/gdata.js", function(gdata){');
			outputJs.push('    gdata.define("sc-header-config", {{headerconfig}});');
			outputJs.push('});');
			output.push(js_beautify(outputJs.join('').replace('{{headerconfig}}',O2S.stringify(headerConfig))));
			output.push('</script>')
		}
		return output.join('\n'); 
	}
	function getHozHeaderConfig(){
		var output = [];
		if(!$.isEmptyObject(headerConfig)){
			output.push('<script>');
			var outputJs = [];
			outputJs.push('AE.define("common.header.config",function(){');
			outputJs.push('		return {{headerconfig}};');
			outputJs.push('});');
			output.push(js_beautify(outputJs.join('').replace('{{headerconfig}}',O2S.stringify(headerConfig))));
			output.push('</script>')
		}
		return output.join('\n'); 
	}
	function apolloChange(){
		formArray = form.formToArray();
	     if(getFieldByName('apollo').value === 'full'){
	     	$('input.ui-widget-content:checkbox').attr('checked','checked');
	     	$('input[name=initComplete\\.sundry\\.extend\\.html]').val('');
	     	componentArea.hide();
	     }else{
	     	componentArea.show();
	     }
	}
	
	function builde( reload ){
		headerConfig = {};
		formArray = form.formToArray();
		apollo = getFieldByName('apollo').value;
		if (getFieldByName('core') && getFieldByName('core').value !== 'on') {
			alert('empty');
		} else {
			buiderConfig();
		}
		var frame = getIframeDocument(frames['header-view-iframe']);
		if( apollo === 'myalibaba' ){
			frame.location.href = 'header-ma.html';
		}else{
			frame.location.href = 'header.html?hoz-debugger';
		}
		if( reload == null || reload == true ){
			//getIframeDocument(frames['header-view-iframe']).location.reload();
		}
		return false;
	}
	function getFieldByName(name){
		var resval = null;
		formArray.forEach(function(item,index){
			if( item.name === name ){
				resval = item;
			}
		});
		return resval;
	}
	function getIframeDocument(element) {  
		return  element.document || element.contentDocument || element.contentWindow.document;  
	}
	function getGroupFields(name) {
		var arr = $.grep(formArray,
			function(item, i) {
				return (item.value === 'on' && item.name.indexOf(name) > -1);
			});
		return arr; //arr.length === 0 ? null : arr;
	}
	function getGroupFieldObject(groupFields, keys) {
		var newArr = [],
			newGroupFields = $.map(groupFields,
				function(item, i) {
					item.data = (i > 0 ? item.name.replace(keys[0] + '-', '') : item.name);
					return item;
				}),
			arr = $.grep(newGroupFields,
				function(item, i) {
					return keys.indexOf(item.data) > -1;
				}),
			sonArr = [];
		arr.forEach(function(item, i) {
			newArr.push(item);
			if (i > 0) {
				sonArr.push(item.data);
			}
		});

		return {
			all: newArr,
			son: sonArr,
			count: newArr.length
		};
	}
	function getCustemFields(){
		var arr = $.grep(formArray,
			function(item, i) {
				//排除initComplete
				return ((item.type ==="text" || item.type==='textarea') && item.name.indexOf('initComplete') < 0);
			});
		return arr;
	}
	function getCustemFieldDataType( field ){
		var dataType = $('[name="'+field.name+'"]').data('type'),
			resType = null,
			typeConst = (new RegExp('\\w{(.*?)}')).exec(dataType);
		$.each(['string','int','float','enum','object','array'],function(){
			var item = this;
			if( dataType.indexOf(item) === 0 ){
				resType = {
					type :  item.toString(),
					const :  typeConst? typeConst[1].split(',') : null
				}
			}
		})
		return resType;
	}
	function buiderConfig() {
		addModConfig(sundryModArr);
		addModConfig(beaconModArr);
		addModConfig(searchbarModArr);
		
		addCustemConfig();
		
		addFunConfig();
		/*addConfig( 'initComplete', function(beacon, sundry, searchbar){
				sundry.extend.html('<h2>Extend</h2>');
				searchbar.addField('key0', 'val0');
			}.toString());*/
	}
	function addCustemConfig( ){
		var fieldArray = getCustemFields(),
			val = '',
			fieldType = null;
		fieldArray.forEach(function( item, index){
			val = item.value;
			fieldType = getCustemFieldDataType(item);
			if( val !== ''){
				switch(fieldType.type){
					case 'object':
                        val = S2O.objectify(val);
                    break;
					case 'array':
						val = S2O.objectify(val);
					break;
					case 'int':
						val = parseInt(val);
					break;
					case 'float':
						val = parseFloat(val)
					break;
					case 'string':
					break;
					case 'enum':
					break;
					default:;
				}
				addConfig(item.name, val);
			}
		});
	}
	function addModConfig(keys) {
		var groupName = keys[0],
		fields = getGroupFields(groupName),
		data = getGroupFieldObject(fields, keys);
		if (data.count === 0) {
            addConfig('mod.' + groupName, null);
        } else if (data.count === 1) {
			addConfig('mod.' + groupName, []);
		} else if (data.count > 1 && (keys.length - 1 !== data.son.length)) {
			addConfig('mod.' + groupName, data.son);
		}
	}
	function addFunConfig(){
		var arr = $.grep(formArray,
			function(item, i) {
				return (item.name.indexOf('initComplete') === 0);
			}),
			funBuilde = [];
		funBuilde.push('return function(beacon, sundry, searchbar){');
		arr.forEach(function(item,index){
			if( item.value !== ''){
				funBuilde.push(item.name.replace('initComplete.','')+'(\''+item.value+'\');');
			}
		});
		//funBuilde.push('alert(beacon);');
		funBuilde.push('};');
		if( funBuilde.length> 2 ){
			addConfig('initComplete',(new Function(funBuilde.join('')))());
		}
	}
	
	function addConfig(path, value) {
		var p = path.split('.'),
		count = p.length,
		o = headerConfig,
		item;
		for (var i = 0; i < count - 1; i++) {
			item = p[i];
			if (!o.hasOwnProperty(item)) {
				o[p[i]] = {};
				o = o[p[i]];
			} else {
				o = o[p[i]];
			}
		}
		o[p[i]] = value;
	}
	
	main();
})(jQuery);