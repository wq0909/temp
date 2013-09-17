define(['firebug/lib/lib', 'firebug/lib/trace'],
function(FBL, FBTrace) {
    var Cc = Components.classes;
    var Ci = Components.interfaces;
    var dnsService = Cc["@mozilla.org/network/dns-service;1"].createInstance(Ci.nsIDNSService);
    var ioService = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);

    Firebug.hostModule = FBL.extend(Firebug.Module, {
        initialize: function() {
            Firebug.Module.initialize.apply(this, arguments);
        },

        shutdown: function() {
            Firebug.Module.shutdown.apply(this, arguments);
        },

        get: function(url) {
            var domain = '';
            var ip = '';

            try {
                domain = url;
                // Try to resolve the given domain
                ip = dnsService.resolve(url, 0);
            } catch(e) {
                if (e.name == "NS_ERROR_UNKNOWN_HOST") {
                    // That's not a domain, try treating it as an URL
                    try {
                        // Try resolving again, with just the hostname part
                        domain = this.getHostFromURL(url);
                        ip = dnsService.resolve(domain, 0);
                    } catch(e) {
                        // Well, that didn't work...
                        console.log("getHostFromURL failed to complete for some reason");
                    }
                } else {
                    console.log("an unknown error occurred");
                }
            };

            return {
                ip: ip.getNextAddrAsString(),
                domain: domain
            };
        },

        getHostFromURL: function(url) {
            var uri = ioService.newURI(url, null, null);
            return uri.host;
        }
    });

    return Firebug.hostModule;
});