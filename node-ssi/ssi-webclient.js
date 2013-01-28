var fs = require('fs'),
	path = require('path'),
	http = require('http'),
	https = require('http');

var INCLUDE_PATTERN = new RegExp('<!--#include file=[\"|\'](.*?\.html)[\"|\'] -->'),
	IP_PATTERN = /^(?:\d+\.){3}\d+$/;

module.exports = ssiWebClient;

function ssiWebClient( config ){
	var config = this.config = marge.call( this, config, {
		request : null,
		response : null,
		tab : false,
		limit : 500,
		debug : true
	});
	this.layer = 0;
	//this.callback = callback;
	
	if( config.response.statusCode === 200 ){
		var ext = req.pathname.replace(/.*[\.\/]/, '').toLowerCase();
		if( ext === 'html' || ext === 'htm' ){
			var uri = url.parse(config.request.href);
			this.options = {
				hostname : uri.hostname,
				path : uri.path,
				post : uri.post
			}
			//this.options.headers.host = options.hostname;
			this.client = uri.protocol === 'https:' ? https : http;
			
			main.call(this);
		}
	}
}

function main(){
	send.call(this, this.options.path , function( content ){
		var m = content.match( INCLUDE_PATTERN );
		if( m ){
			return {
				tmpl : m[0],
				filepath : m[1]
			};
		}else{
			html200.call(this);
			return;
		}
	}.bind(this));
}

function send( filepath, onload ){
	var config = this.config,
		tab = this.config['tab'],
		limit = this.config['limit'],
		options = this.options,
		req;
	
	options.path = filepath;
	
	this.layer ++;
	if( this.layer > limit ){
		htmlError500.call( this );
		return;
	}
	
	req = client.request(options, function (response) {
			var status, 
				head,
				body = [];
			response.on('data', function (chunk) {
				body.push(chunk);
			});

			response.on('end', function () {
				//status = response.statusCode;
				//head = response.headers;
				body = Buffer.concat(body),
				tmplMatch = this.tmplMatch;
				
				if( tmplMatch ){
					var arr = [];
					tab && arr.push('<!--' + tmplMatch.filepath + ' start -->');
					arr.push(body.toString());
					tab && arr.push('<!--' + tmplMatch.filepath + ' end -->');
					this.data = this.data.replace( tmplMatch.tmpl, arr.join('\r\n') );
				}else{
					this.data = body.toString();
				}
				
				var m = onload( this.data );
				if( m ){
					this.tmplMatch = m;
					send.call(this, m.filepath , onload);
				}
			});
		}.bind(this));
	req.on('error', function(){
		if( this.tmplMatch ){
			var arr = [];
			tab && arr.push('<!--' + tmplMatch.filepath + ' start -->');
			arr.push(body.toString());
			tab && arr.push('<!--' + tmplMatch.filepath + ' end -->');
			this.data = this.data.replace( tmplMatch.tmpl, arr.join('\r\n') );
		}
		this.data = this.data || '';
		if( this.layer === 1 && this.data === '' ){
			htmlError404.call( this );
		}else{
			onload( this.data );
		}
	}.bind(this));
}
function html200(){
	output.call( this,{ 
			statusCode : 200,
			content : this.data
		});
}
function htmlError404(){
	output.call( this,{ 
			statusCode : 404,
			content : '404 Not Found'
		});
}
function htmlError500(){
	output.call( this,{ 
			statusCode : 500,
			content : '500 Internal Server Error'
		});
}
function output( obj ){
	var res = this.config.response;
	if( this.config.debug){
		console.dir( obj );
	}else{
		res.status(obj.status)
		//if( obj.statusCode === 200 ){
		res.clear();
		res.write(obj.content);
		//}
	}
}
function marge(newObject, defObject) {
  for (var key in defObject) {
  	newObject[key] || (newObject[key] = defObject[key]);
  }
  return newObject;
}