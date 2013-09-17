define([
    'firebug/lib/trace',
    'firebug/trace/traceModule',
    'firebug/trace/traceListener',
    'pi/hostModule',
    'pi/cacheListener',
    'pi/storeModule',
    'pi/myPanel',
    'pi/myModule',
    'pi/xbrowerModule',
    'pi/automateModule',
    'pi/resourceModule',
    'pi/viewSourceModule'
],
function(FBTrace, TraceModule, TraceListener, hostModule, cacheListener, storeModule, myPanel, myModule, xbrowerModule, automateModule, resourceModule, viewSourceModule){
    var theApp = {
        initialize: function(){
            Firebug.registerStringBundle("chrome://pi/locale/plugin.properties");
            Firebug.registerStringBundle("chrome://pi/locale/pluginTab.properties");
            // 监听http状态
            Firebug.registerModule(cacheListener);
            Firebug.registerModule(storeModule);
            // 获取host
            //Firebug.registerModule(hostModule);

            //Firebug.registerPanel(myPanel);
            Firebug.registerModule(myModule);

            Firebug.registerModule(xbrowerModule);
            Firebug.registerModule(automateModule);
			Firebug.registerModule(resourceModule);
            Firebug.registerModule(viewSourceModule);
        },

        shutdown: function(){
            Firebug.unregisterModule(cacheListener);
            Firebug.unregisterModule(storeModule);
            //Firebug.unregisterModule(hostModule);

            //Firebug.unregisterPanel(myPanel);
            Firebug.unregisterModule(myModule);

            Firebug.unregisterModule(xbrowerModule);
            Firebug.unregisterModule(automateModule);
			Firebug.unregisterModule(resourceModule);
            Firebug.unregisterModule(viewSourceModule);
        }
    }

    return theApp;
});