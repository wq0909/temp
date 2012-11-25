var fs = require('fs'),
	path = require('path'),
	http = require('http');

var INCLUDE_PATTERN = new RegExp('<!--#include file=[\"|\'](.*?\.html)[\"|\'] -->');

module.exports = ssiCore;

function ssiCore( config, callback ){
	var config = this.config = marge.call( this, config, {
		'wwwroot' : '/',
		'filepath' : '',
		'tab' : true,
		'limit' : 500
	});
	this._layer = 0;
	this._callback = callback;
	
	readHtml.call(this, config['filepath'] , function( content ){
		var match = content.match( INCLUDE_PATTERN );
		if( match ){
			return {
				matchString : match[0],
				fileName : match[1]
			};
		}else{
			htmlOutput.call(this);
			return;
		}
	}.bind(this));
}

function readHtml( pathname, onload ){
	var config = this.config,
		tab = this.config['tab'],
		limit = this.config['limit'];
	
	var filepath = path.resolve( path.join(config['wwwroot'], pathname) );
	//console.log( config['wwwroot'],filepath,pathname);
	fs.readFile( filepath , function ( err , data ) {
		this._layer ++;
		
		if( this._layer > limit ){
			htmlError500.call( this );
			return;
		}
		
		if (err) {
			if( this._matchObject ){
				var temp = [];
				tab && temp.push('<!--'+this._matchObject.fileName+ ' start -->');
				temp.push('<!--err '+this._matchObject.fileName+ ' end -->');
				tab && temp.push('<!--'+this._matchObject.fileName+ ' end -->');
				this.data = this.data.replace( this._matchObject.matchString, temp.join('\r\n') );
			}
			this.data = this.data || '';
			if( this._layer === 1 && this.data === '' ){
				htmlError404.call( this );
			}else{
				onload( this.data );
			}
		}
		else {
			if( this._matchObject ){
				var temp = [];
				tab && temp.push('<!--'+this._matchObject.fileName+ ' start -->');
				temp.push(data.toString());
				tab && temp.push('<!--'+this._matchObject.fileName+ ' end -->');
				this.data = this.data.replace( this._matchObject.matchString, temp.join('\r\n') );
			}else{
				this.data = data.toString();
			}
			
			var matchObj = onload( this.data );
			
			if( matchObj ){
				this._matchObject = matchObj;
				readHtml.call(this, matchObj.fileName , onload);
			}
		}
	}.bind(this));
}
function htmlOutput(){
	if( this._callback ){
		this._callback({
			statusCode : 200,
			content : this.data
		});
	}else{
		console.log(this.data);
	}
}
function htmlError404(){
	if( this._callback ){
		this._callback({
			statusCode : 404
		});
	}else{
		console.log('404 Not Found\r\n');
	}
}
function htmlError500(){
	if( this._callback ){
		this._callback({
			statusCode : 500
		});
	}else{
		console.log('500 Internal Server Error\r\n');
	}
}
function marge(newObject, defObject) {
  for (var key in defObject) {
  	newObject[key] || (newObject[key] = defObject[key]);
  }
  return newObject;
}