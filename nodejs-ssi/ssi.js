var fs = require('fs'),
	path = require('path');

var INCLUDE_PATTERN = new RegExp('<!--#include file=[\"|\'](.*?\.html)[\"|\'] -->'),
	DIR_PATH = 'E:\\elppa work\\nodejs\\example';

module.exports = ssi;

function ssi( config ){

	this._tab = true;
	
	var filepath = path.resolve( DIR_PATH, 'test.html');
	readHtml.call(this, filepath, function( content ){
		var match = content.match( INCLUDE_PATTERN );
		if( match ){
			return {
				matchString : match[0],
				fileName : match[1]
			};
		}else{
			console.log(this.data);
			this.output = this.data;
			return null;
		}
	}.bind(this));
}

function readHtml( filepath, onload ){
	fs.readFile( filepath , function ( err , data ) {
		if (err) {
			if( this._matchObject ){
				var temp = [];
				!this._tab || temp.push('<!--'+this._matchObject.fileName+ ' start -->');
				temp.push('<!-- err '+this._matchObject.fileName+ ' end -->');
				!this._tab || temp.push('<!--'+this._matchObject.fileName+ ' end -->');
				this.data = this.data.replace( this._matchObject.matchString, temp.join('\r\n') );
			}
			onload(this.data);
		}
		else {
			if( this._matchObject ){
				var temp = [];
				!this._tab || temp.push('<!--'+this._matchObject.fileName+ ' start -->');
				temp.push(data.toString());
				!this._tab || temp.push('<!--'+this._matchObject.fileName+ ' end -->');
				this.data = this.data.replace( this._matchObject.matchString, temp.join('\r\n') );
			}else{
				this.data = data.toString();
			}
			var matchObj = onload( this.data );
			if( matchObj ){
				this._matchObject = matchObj;
				readHtml.call(this, path.resolve( DIR_PATH, matchObj.fileName), onload);
			}
		}
	}.bind(this));
}

new ssi();