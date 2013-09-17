var request = require('request');

var pageRunApi = 'http://10.20.174.3/api/run'; //pageRun服务器API接口地址

var screenshot = false,
    timeout = 120000,
    plugins = {
		"htmlCheck": {
			"config":{
			    "doctype-first": true,
			    "spec-char-escape": true,
			    "tag-pair": true,
			    "id-unique": true,
			    "csslint": {
					"display-property-grouping": true,
					"known-properties": true,
					"selector-max": true,
					"vendor-prefix": true,
					"fallback-colors": true,
					"hack90": false,
					"expression": false
			    },
			    "jshint":{
					"bitwise"     : false,
					"debug"       : false,

					"asi"         : true,
					"boss"        : true,
					"browser"     : true,
					"camelcase"   : true,
					"couch"       : true,
					"curly"       : true,

					"devel"       : true,

					"dojo"        : true,
					"eqeqeq"      : false,
					"eqnull"      : true,
					"es5"         : true,
					"esnext"      : true,
					"evil"        : true,
					"expr"        : true,
					"forin"       : true,
					"funcscope"   : true,
					"globalstrict": true,

					"immed"       : true,
					"iterator"    : true,
					"jquery"      : true,
					"lastsemic"   : true,

					"latedef"     : true,
					"laxbreak"    : true,
					"laxcomma"    : true,
					"loopfunc"    : true,

					"mootools"    : true,
					"multistr"    : true,
					"newcap"      : true,
					"noarg"       : true,

					"node"        : true,

					"noempty"     : true,
					"nonew"       : true,
					"nonstandard" : true,

					"nomen"       : true,
					"onevar"      : true,

					"onecase"     : true,
					"passfail"    : false,
					"plusplus"    : true,
					"proto"       : true,
					"prototypejs" : true,

					"regexdash"   : true,

					"regexp"      : false,
					"rhino"       : true,
					"undef"       : false,
					"unused"      : true,
					"scripturl"   : true,
					"shadow"      : true,
					"smarttabs"   : true,

					"strict"      : true,
					"sub"         : true,
					"supernew"    : true,

					"trailing"    : true,
					"validthis"   : true,

					"withstmt"    : true,
					"white"       : false,
					"worker"      : true,
					"wsh"         : true,

					"yui"         : true,
					"maxerr"      : 9999
			    }
			}
		},
		"jsCheck": {
			"white": [
				"/beacon(_\\w+)?\\.js/i"
			],
			"config":{
				"bitwise"     : false,
				"debug"       : false,

				"asi"         : true,
				"boss"        : true,
				"browser"     : true,
				"camelcase"   : true,
				"couch"       : true,
				"curly"       : true,

				"devel"       : true,

				"dojo"        : true,
				"eqeqeq"      : false,
				"eqnull"      : true,
				"es5"         : true,
				"esnext"      : true,
				"evil"        : true,
				"expr"        : true,
				"forin"       : true,
				"funcscope"   : true,
				"globalstrict": true,

				"immed"       : true,
				"iterator"    : true,
				"jquery"      : true,
				"lastsemic"   : true,

				"latedef"     : true,
				"laxbreak"    : true,
				"laxcomma"    : true,
				"loopfunc"    : true,

				"mootools"    : true,
				"multistr"    : true,
				"newcap"      : true,
				"noarg"       : true,

				"node"        : true,

				"noempty"     : true,
				"nonew"       : true,
				"nonstandard" : true,

				"nomen"       : true,
				"onevar"      : true,

				"onecase"     : true,
				"passfail"    : false,
				"plusplus"    : true,
				"proto"       : true,
				"prototypejs" : true,

				"regexdash"   : true,

				"regexp"      : false,
				"rhino"       : true,
				"undef"       : false,
				"unused"      : true,
				"scripturl"   : true,
				"shadow"      : true,
				"smarttabs"   : true,

				"strict"      : true,
				"sub"         : true,
				"supernew"    : true,

				"trailing"    : true,
				"validthis"   : true,

				"withstmt"    : true,
				"white"       : false,
				"worker"      : true,
				"wsh"         : true,

				"yui"         : true,
				"maxerr"      : 9999
			}
		},
		"cssCheck": {
			"config":{
				"display-property-grouping": true,
				"known-properties": true,
				"selector-max": true,
				"vendor-prefix": true,
				"fallback-colors": true,
				"hack90": false,
				"expression": false
			}
		}
	};

var arrUrl = ['http://i.taobao.com/my_taobao.htm'],
    hosts = 'taobao.com taobao.comr\r\ntbcdn.cn tbcdn.cn',
    browserName = 'chrome',
    browserVersion = '',
    loginUrl = 'https://login.taobao.com/member/login.jhtml',
    loginPreClick = 'J_SafeLoginCheck',
    loginParams = {
        "TPL_username_1": "user",
        "TPL_password_1": "pass"
    },
    loginButton = 'J_SubmitStatic';
    
var pageRunOptions = {
    url: arrUrl,
    hosts: hosts,
    browser: {
        name: browserName,
        version: browserVersion
    },
    loginUrl: loginUrl,
    loginPreClick: loginPreClick,
    loginParams: loginParams,
    loginButton: loginButton,
    screenshot: screenshot,
    timeout: timeout,
    plugins: plugins
};
    
console.log(pageRunOptions.url + ' : run started.');
postPageRun(pageRunOptions, function(pageRunOptions, resData){
    if(resData !== false){
        console.log(pageRunOptions.url + ' : run successed.');
        if(resData.status === 0){
            console.log(pageRunOptions, resData.value);
        }
        else{
            console.log(resData.errorType, resData.errorMessage);
        }
    }
    else{
        console.log(pageRunOptions.url + ' : run failed.');
    }
});

function postPageRun(pageRunOptions, callback){
    request.post({
        url: pageRunApi,
        body: JSON.stringify(pageRunOptions)
    }, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var resData = JSON.parse(body.toString('utf-8'));
            callback(pageRunOptions, resData);
        }
        else{
            console.log(error);
            callback(pageRunOptions, false);
        }
    });
}