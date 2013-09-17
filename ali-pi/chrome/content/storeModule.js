define([
    'firebug/lib/lib',
    'firebug/lib/trace',
],
function(FBL, FBTrace){
	var mtStore = function(){
		this.cache = {}
	}
	mtStore.prototype = {
		init: function(){
			var cache = this.cache;

			var url = "http://etosun.com";
		    var ios = Components.classes["@mozilla.org/network/io-service;1"]
		              .getService(Components.interfaces.nsIIOService);
		    var ssm = Components.classes["@mozilla.org/scriptsecuritymanager;1"]
		              .getService(Components.interfaces.nsIScriptSecurityManager);
		    var dsm = Components.classes["@mozilla.org/dom/storagemanager;1"]
		              .getService(Components.interfaces.nsIDOMStorageManager);

		    var uri = ios.newURI(url, "", null);
		    var principal = ssm.getCodebasePrincipal(uri);
		    cache.ls = dsm.getLocalStorageForPrincipal(principal, "");

		   	return this;
		},

		get: function(key){
			return this.cache.ls.getItem(key);
		},

		set: function(key, value){
			this.cache.ls.setItem(key, value); 
		},

		remove: function(key){
			this.cache.ls.removeItem(key);
		}
	}

	myStore = new mtStore().init();

	Firebug.storeModule = FBL.extend(Firebug.Module, {
        initialize: function() {
            Firebug.Module.initialize.apply(this, arguments);
            //content.document.getElementsByTagName("body").appendChild();
        },
        shutdown: function() {
            Firebug.Module.shutdown.apply(this, arguments);
        },

        _get: function(key) {
			return myStore.get(key);
		},

		_set: function(key, val) {
			myStore.set(key, val);
		},

		_remove: function(key, val) {
			myStore.remove(key);
		}
    });

    return Firebug.storeModule;
});