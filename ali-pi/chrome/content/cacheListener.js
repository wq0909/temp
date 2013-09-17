define([
    'firebug/lib/lib',
    'firebug/lib/trace',
],
function(FBL, FBTrace){
    var cacheListener = function(){
        this.cache = {
            ip: null,
            location: '',
            hosts: {},
            html: '',
            css: [],
            js: []
        }
    };

    cacheListener.prototype = {
        onStartRequest: function(context, request, requestContext) {
            var self = this;
            var filePath = this.getFilePath(request);

            if(filePath.indexOf('userfor=@account@') != -1){
                request.visitRequestHeaders(function(header, value){
                    if(header == 'Cookie'){
                        var ls = Firebug.storeModule;
                        var userAccount = self.getParam(value, 'user_name_out');

                        if(!userAccount){userAccount = ''}
                        ls._set('temp_mt_domain_account', userAccount);
                    }
                })
            }
        },

        onDataAvailable: function(context, request, requestContext, inputStream, offset, count){
            //FBTrace.sysout("onDataAvailable: " + this.getFilePath(request) +"|"+ request.contentType);
        },

        /**
         * 需要启用firebug的网络面板
         * 启用后即使firebug窗口未被激活也会监听网络请求
         */
        onStopRequest: function(context, request, requestContext, statusCode){
            var cache = this.cache;
            var filePath = this.getFilePath(request);
            // 文件内容
            var content = requestContext;
            // 文件类型
            var contentType = request.contentType;
            // 需要校验的文件mimeType类型
            var storeType = ['text/html', 'text/css', 'application/javascript', 'application/x-javascript'];

            // 保存host
            this.saveHostData(filePath);

            // 根据文件类型&&特殊标识过滤
            if(storeType.indexOf(contentType) != -1 && filePath.indexOf('@sc=mt@') == -1){
                //FBTrace.sysout('request: '+ filePath);
                //FBTrace.sysout('location: '+ context.window.location);
                if(context.window.location == filePath){
                    // 收到当前页面的html请求时, 清空上一次的数据
                    //this.clearData();
                    cache.location = filePath;
                    cache.html = content;

                    //FBTrace.sysout('[save html source]: '+ filePath);
                }

                // 保存css请求地址&&内容
                if(storeType.indexOf(contentType) == 1){
                    //FBTrace.sysout('[save a css source]: '+ filePath);
                    cache.css.push({
                        path: filePath,
                        content: content
                    })
                }

                // 保存js请求地址&&内容
                if(storeType.indexOf(contentType) > 1){
                    //FBTrace.sysout('[save a js source]: '+ filePath);
                    cache.js.push({
                        path: filePath,
                        content: content
                    })
                }
            }
        },

        clearData: function(){
            this.cache.location = '';
            this.cache.hosts = {};
            this.cache.html = '';
            this.cache.css = [];
            this.cache.js = [];
            //FBTrace.sysout('has clear data');
        },

        getFilePath: function(request){
            if(request && request.name){
                return request.name;
            }else{
                return null;
            }
        },

        /* 获取本机IP
         * obj.ip
         * obj.domain
         */
        getClientIp: function(obj){
            var cache = this.cache;

            $.getJSON('http://pi.alibaba-inc.com/browers-extend/firefox/ip.php?t='+ new Date().getTime(), function(result){
                cache.ip = result.ip;
                cache.hosts[obj.domain] = obj.ip;
            });
        },

        /**
         * 保存host
         */
        saveHostData: function(filePath){
            var cache = this.cache;
            var hostData = Firebug.hostModule.get(filePath);

            // 保存host
            if(hostData.ip != '' && hostData.domain != ''){
                if(!cache.hosts[hostData.domain]){
                    if(hostData.ip == '127.0.0.1'){
                        if(!cache.ip){
                            this.getClientIp({
                                ip: hostData.ip,
                                domain: hostData.domain
                            });
                        }else{
                            cache.hosts[hostData.domain] = cache.ip;
                        }
                    }else{
                        cache.hosts[hostData.domain] = hostData.ip;
                    }
                }
            }
        },

        // 获取str中param参数的值
        getParam: function(str, param){
            var sRE = '(?:; )?' + param + '=([^;]*)';
            var oRE = new RegExp(sRE);
            if (oRE.test(str)) {
                return decodeURIComponent(RegExp['$1']);
            } else {
                return null;
            };
        }
    };

    Firebug.cacheListener = FBL.extend(Firebug.Module, {
        initialize: function() {
            Firebug.Module.initialize.apply(this, arguments);

            // Register cache listener
            this.cacheListener = new cacheListener();
            Firebug.TabCacheModel.addListener(this.cacheListener);

            //FBTrace.sysout('init cacheListener');
        },

        shutdown: function() {
            Firebug.Module.shutdown.apply(this, arguments);

            // Unregister cache listener
            Firebug.TabCacheModel.removeListener(this.cacheListener);
        },

        _clearData: function(){
            this.cacheListener.clearData();
        },

        /**
         * 获取服务器本机真实IP地址static内容
         */
        _getCacheData: function(callback, context){
            var cache = this.cacheListener.cache;

            return {
                html: cache.html,
                css: cache.css,
                js: cache.js,
                hosts: JSON.stringify(cache.hosts)
            }
        },

        /**
         * 处理hosts, 替换127.0.0.1的IPhost为内网ip
         */
        disposeHosts: function(clientIp){
            var hosts = this.cacheListener.cache.hosts;
            var hostArray = [];

            for(var domain in hosts){
                // 转换127.0.0.1为实际ip地址
                var ip = (hosts[domain] == '127.0.0.1') ? clientIp : hosts[domain];

                hostArray.push(ip +' '+ domain);
            };

            return hostArray;
        }
    });

    return Firebug.cacheListener;
});