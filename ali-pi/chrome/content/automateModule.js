define(['firebug/lib/lib', 'firebug/lib/trace'],
function(FBL, FBTrace) {
    var autoMate = function() {
        this.cache = {
            pageType: null,
            crid: null,
            callback: null,
            hosts: null
        };
    }
    autoMate.prototype = {
        init: function(obj){
            this.cache = $.extend({}, this.cache, obj);

            this._getPageType();

            return this;
        },

        //根据url获取页面类型
        _getPageType: function(){
            var self = this;
            var cache = self.cache;

            $.get('http://pi.alibaba-inc.com/browers-extend/firefox/map.html?t='+ new Date().getTime(), function(data){
                var result = JSON.parse(data);

                for(var k in result){
                    var reg = new RegExp(decodeURIComponent(result[k]));

                    if(reg.test(content.window.location.href)){
                        cache.pageType = k;
                    }
                }

                //测试数据
                //cache.pageType = 'post';
                //cache.crid = 270259;

                //过滤host
                self._filterHosts();
                self._buildTask();
            });
        },

        //过滤host，只保留static相关host
        _filterHosts: function(){
            var cache = this.cache;
            var hosts = JSON.parse(cache.hosts);
            var styleHosts = [];

            for(var domain in hosts){
                if(/(style|img)\.(alibaba|aliexpress)\.com/gi.test(domain)){
                    styleHosts.push(hosts[domain] +' '+ domain);
                }
                if(/i\d+\.i\.aliimg\.com/gi.test(domain)){
                    styleHosts.push(hosts[domain] +' '+ domain);
                }
            }

            cache.styleHosts = styleHosts;
        },

        //添加任务
        _buildTask: function(){
            var self = this;
            var cache = self.cache;

            //FBTrace.sysout(cache.pageType);
            //FBTrace.sysout(cache.crid);
            //FBTrace.sysout(cache.styleHosts.join('|'));

            var server = 'http://pivot.alibaba-inc.com/project/piAuiTestWareExecAjax.htm?testSuiteNames='+
                          cache.pageType +'&projectId='+ cache.crid +'&hosts='+ cache.styleHosts.join('|');

            $.getJSON(server +'&t='+ new Date().getTime(), function(data){
                if(data.result == 'ERROR' || data.result == 'NOCASE'){
                    //显示执行错误的提示
                    self._showTips({
                        server: server,
                        type: 'error',
                        msg: data.memo,
                        url: ''
                    });
                }

                if(data.result == 'FAILED'){
                    //显示执行错误的提示
                    self._showTips({
                        server: server,
                        type: 'error',
                        msg: data.failCaseList[0].errorType,
                        url: data.failCaseLink
                    });
                }

                if(data.result == 'SUCCESS'){
                    //轮询结果
                    self._pollingResult();

                    //执行成功，开始轮询结果
                    self._showTips({
                        type: 'success',
                        url: data.buildLink
                    });
                }
            });
        },

        /*
         * obj.type
         * obj.url
         * obj.msg
         */
        _showTips: function(obj){
            var cache = this.cache;
            var msg = '';
            var errorNum = null;

            if(obj.type == 'success'){
                //html:自动化执行中
                errorNum = -1;
                msg = '<div class="res-loading">\u81ea\u52a8\u5316\u6267\u884c\u4e2d\uff0c\u8bf7\u7a0d\u540e... '+
                        //html:查看详情
                        '<a href="'+ obj.url +'" target="_blank">\u67e5\u770b\u6267\u884c\u8fc7\u7a0b</a>'+
                      '</div>'
            }else{
                var errorText = obj.msg;

                errorNum = -2;
                
                /*
                if(/[\u4E00-\u9FFF]+/gi.test(errorText)){
                    errorText = escape(obj.msg).replace(/%/g,"\\").toLowerCase();
                }*/

                FBTrace.sysout(errorText);

                //html:任务创建失败
                msg = '<div class="res-fail"><p>\u4efb\u52a1\u521b\u5efa\u5931\u8d25\uff0c'+
                      //html:错误原因
                      '\u9519\u8bef\u539f\u56e0\uff1a'+ errorText +'</p>'+
                      //html:请联系
                      '\u8bf7\u8054\u7cfb: <a class="im" href="javascript:;" data-uid="cnalichn" data-touid="tudou527">tudou527</a>'+
                      '<span>LOG: <textarea onclick="this.select()">REQUEST: '+ obj.server +
                      '\r\nCASELINK: '+ obj.url +
                      '</textarea></span></div>'
            }

            cache.callback({
                type: 'automate',
                msg: msg,
                errorNum: errorNum
            });
        },

        //轮询结果
        _pollingResult: function(){
            var self = this;
            var cache = self.cache;
            var server = 'http://pivot.alibaba-inc.com/project/piAuiTestWareResult.htm?testSuiteNames='+
                          cache.pageType +'&projectId='+ cache.crid;

            FBTrace.sysout(server);
            $.getJSON(server +'&t='+ new Date().getTime(), function(data){
                if(data.result == 'RUNNING'){
                    cache.timer = setTimeout(function(){
                        self._pollingResult();
                    }, 5000);
                }else{
                    FBTrace.sysout('got result');
                    clearTimeout(cache.timer);
                    self._showResult({
                        errorNum: data.failCaseNum,
                        errorItem: data.failCaseList,
                        link: data.failCaseLink
                    })
                }
            });
        },

        /*
         * 显示执行结果
         * obj.errorNum
         * obj.errorItem
         * obj.link
         */
        _showResult: function(obj){
            var cache = this.cache;
            var html = [];

            if(obj.errorNum == 0){
                html.push(
                    '<dl>',
                        //html:没有错误
                        '<dt>\u6ca1\u6709\u9519\u8bef</dt>',
                    '</dl>'
                );
            }else{
                $.each(obj.errorItem, function(i, error){
                    html.push(
                        '<h6 tabindex="', i ,'">',
                            error.errorType,
                            '&nbsp;<a href="', error.resLink ,'" target="_blank">\u8be6\u60c5</a>',
                        '</h6>'
                    )
                });

                html.unshift(
                    '<dl>',
                        //html:个错误
                        '<dt>', obj.errorNum ,'\u4e2a\u9519\u8bef</span></dt>',
                        '<dd>',
                            '<div class="error-box">'
                );
                html.push(
                            '</div>',
                        '</dd>',
                    '</div>'
                );
            }

            cache.callback({
                type: 'automate',
                msg: html.join(''),
                errorNum: obj.errorNum
            });
        }
    }

    Firebug.automateModule = FBL.extend(Firebug.Module, {
        initialize: function() {
            Firebug.Module.initialize.apply(this, arguments);
            //content.document.getElementsByTagName("body").appendChild();
        },

        shutdown: function() {
            Firebug.Module.shutdown.apply(this, arguments);
        },

        _run: function(config) {
            return new autoMate().init(config);
        },
    });

    return Firebug.automateModule;
});