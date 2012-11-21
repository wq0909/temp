var ssiCore = require('./ssi-core');

new ssiCore({
	'wwwroot' : 'D:\\work\\html\\github\\temp\\node-ssi',
	'filepath' : '/test.html'
},function(object){
	console.log(object.statusCode);
});