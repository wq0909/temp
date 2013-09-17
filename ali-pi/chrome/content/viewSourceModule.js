define([
    'firebug/lib/lib',
    'firebug/lib/trace'
],
function(FBL, FBTrace){
    Firebug.viewSourceModule = FBL.extend(Firebug.Module, {
        initialize: function(){
            this.cache = {};

            Firebug.Module.initialize.apply(this, arguments);
            //content.document.getElementsByTagName('body').appendChild();
        },

        shutdown: function(){
            Firebug.Module.shutdown.apply(this, arguments);
        },

        /**
         * 跳转到行
         * @param {string} obj.url 待查看源文件的页面
         * @param {string} obj.line 跳转的行号
         */
        goToLine: function(obj){
            var wm = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator);
            var win = wm.getMostRecentWindow('navigator:browser');

            if(!win){return;}

            var document = win.document;
            var gBrowser = win.gBrowser;
            
            if(!(document && gBrowser)){return;}

            //var aURI = gBrowser.contentDocument.URL;
            
            var scWin = win.openDialog('chrome://global/content/viewSource.xul', null, null, '', '', '', obj.line);
            scWin.focus();

            scWin.addEventListener('load', function(){
                this.viewSource(obj.url);
            });
        }
    });
    
    return Firebug.viewSourceModule;
});