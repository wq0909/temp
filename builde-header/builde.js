$(function() {
	$( ".ui-button" ).button();
});

// wait for the DOM to be loaded 
(function($) {
	var form = $('#download-form'),
		formArray = Array,
		componentArea = $('div.download-builder-component');
	form.submit(builde);
	
	if ($.browser.msie) {
		$('input:radio').click(function () {
			this.blur();
			this.focus();
		});
	}
	
	$("input:radio[name=layout]").change(function() {
		loyoutChange();
	});
	
	$('.btn-builde').on('click',function(){
		builde(true);
	});
	$('.btn-cms-code').on('click',function(){
		builde(false);
		alert(printConfig());
	});
	$('.btn-vm-code').on('click',function(){
		builde(false);
		alert('vm');
	});
	function main(){
		loyoutChange();
	}
	function printConfig(){
		
		var output = [];
		output.push( '选择头模版：');
		if(layout=='normal'){
			output.push('[common header normal]');
		}else{
			output.push('[common header full]');
		}
		output.push('\n<!--body适当的位置加入以下代码：-->');
		
		if(!$.isEmptyObject(headerConfig)){
			output.push('<script>');
			output.push('AE.define("common.header.config",function(){');
			output.push('\treturn ');
			output.push('{{headerconfig}}');
			output.push('});');
			output.push('</script>')
		}
		output.push('#parse(pageinfo.header)')
		return output.join('\n').replace('\n'+'{{headerconfig}}',O2S.stringify(headerConfig,1));
	}
	function loyoutChange(){
		formArray = form.formToArray();
	     console.log(getFieldByName('layout').value);
	     if(getFieldByName('layout').value === 'full'){
	     	$('input.ui-widget-content:checkbox').attr('checked','checked')
	     	componentArea.hide();
	     }else{
	     	componentArea.show();
	     }
	}
	
	function builde( reload ){
		headerConfig = {};
		formArray = form.formToArray();
		layout = getFieldByName('layout').value;
		if (getFieldByName('core') && getFieldByName('core').value !== 'on') {
			alert('empty');
		} else {
			buiderConfig();
		}
		//console.log(layout);
		//console.log(JSON.stringify(headerConfig, null, '\t'));
		//window.open(document.all.ifrmname.src,'header-view-iframe','')
		if( reload == null ||reload == true ){
			getIframeDocument(frames['header-view-iframe']).location.reload();
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
		return  element.contentDocument || element.contentWindow.document;  
	};  
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
			son = [];
		arr.forEach(function(item, i) {
			newArr.push(item);
			if (i > 0) {
				son.push(item.data);
			}
		});

		return {
			all: newArr,
			son: son,
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
		var dataType = $(field).data('type'),
			resType = null,
			typeConst = (new RegExp('\\w{(.*?)}')).exec(dataType);
		$.each(['string','int','float','enum','object','array'],function(){
			var item = this;
			if( dataType.indexOf(item) === 0 ){
				resType = {
					type :  item,
					const :  typeConst? typeConst.split(',') : null
				}
			}
		})
		return resType;
	}
	function buiderConfig() {
		addModConfig(['sundry', 'anchor', 'action', 'extend']);
		addModConfig(['beacon', 'user', 'nav']);
		addModConfig(['searchbar', 'type', 'static', 'dynamic', 'advanced', 'related']);
		
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
				switch(fieldType){
					case 'object':
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
		funBuilde.push('return function(beacon, sundry, searchbar){\n');
		arr.forEach(function(item,index){
			if( item.value !== ''){
				funBuilde.push('\t'+item.name.replace('initComplete.','')+'(\''+item.value+'\');\n');
			}
		});
		//funBuilde.push('alert(beacon);');
		funBuilde.push('};\n');
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