define(['firebug/lib/lib', 'firebug/lib/trace'],
function(FBL, FBTrace) {
    var xbrower = function(){
        this.cache = {
            browers: [],
            server: 'http://10.20.156.4/'
        };
    };

    xbrower.prototype = {
        /**
         * 获取可用的浏览器列表
         * 用于校验用户提交的浏览器列表是否合法
         * param {Array} ubrowers 用户选择的浏览器
         */
        _getAvailableBrower: function(ubrowers){
            var self = this;
            var cache = self.cache;
            var newBrowsers = [];

            $.get(cache.server +'rpc/agent/browserList.json?t='+ new Date().getTime(), function(browerData){
                var serverBrowers = browerData.content;

                ubrowers.forEach(function(browers){
                    if(serverBrowers.indexOf(browers) > -1){
                        newBrowsers.push(browers);
                    }
                });

                // 添加FireFox为基准浏览器
                if(newBrowsers.indexOf('FireFox') == -1){
                    newBrowsers.push('FireFox');
                }

                cache.browers = newBrowsers;
                self._buildJob();
            });
        },

        /**
         * 创建xbrowerjob
         */
        _buildJob: function(){
            var self = this;
            var cache = self.cache;
            var baseBrower = 'FireFox';
            var serverParams = [];
            var jobName = "[PI]"+ new Date().getFullYear() +'-'+ (new Date().getMonth() + 1) +'-'+ new Date().getDate() +'('+ new Date().getTime() +')';
            var creator = (cache.account == '') ? 'firefox-extension-user' : cache.account;
            var userPwdInfo = '';
            var hosts = encodeURIComponent(cache.hosts);
            var xbrowerBuildJob = cache.server +'rpc/task/addABuildTask.json';
            var xbrowerDetail = cache.server +'result/build_result_detail.htm?buildId=';
            var siteType = 'ICBU';

            // 不校验密码是否为空
            if(cache.uname != ''){
                userPwdInfo = ',"userName":"'+ cache.uname +'","passwd":"'+ cache.pwd +'","type":"'+ siteType +'"';
            }

            serverParams.push(
                'taskBOJson={',
                    '"baseBrowser":"', baseBrower ,'",',
                    '"browsers":["', cache.browers.join('","') ,'"],',
                    '"creator":"', creator ,'",',
                    '"name":"', jobName ,'",',
                    '"type":"MultiBrowserSingleEnv",',
                    '"urlsJson":[{"urls":["', cache.location, '"]', userPwdInfo ,'}]',
                '}',
                '&envs=[{"envName":"%E7%8E%AF%E5%A2%83%E4%BF%A1%E6%81%AF","selfHost":"', hosts, '","dnsGroupName":""}]',
                '&picSimilarity=0.5',
                '&jsSequences='
            );

            $.post(xbrowerBuildJob, serverParams.join(''), function(jobResult){
                var jobHtml = [];
                var errorNum = null;

                if(!jobResult.hasError && jobResult.content > 0){
                    cache.buildId = jobResult.content;
                    errorNum = -1;

                    jobHtml.push(
                        '<div class="res-loading">',
                            //html:多浏览器截图执行中
                            '\u591a\u6d4f\u89c8\u5668\u622a\u56fe\u6267\u884c\u4e2d',
                            //html:查看详情
                            '<a href="'+ xbrowerDetail + cache.buildId +'" target="_blank">\u67e5\u770b\u6267\u884c\u8fc7\u7a0b</a>',
                        '</div>'
                    );

                    // 定时器, 获取xbrower结果
                    self._getJobResult();
                }else{
                    errorNum = -2;
                    jobHtml.push(
                        //html:任务创建失败
                        '<div class="res-fail"><p>\u4efb\u52a1\u521b\u5efa\u5931\u8d25\uff0c</p>',
                            //html:请联系
                            '\u8bf7\u8054\u7cfb: <a class="im" href="javascript:;" data-uid="cnalichn" data-touid="tudou527">tudou527</a>',
                            '<span>LOG: <textarea onclick="this.select()">REQUEST: ',
                            jobResult.content, '@_@', cache.location, '@_@',
                            xbrowerBuildJob, '@_@', serverParams.join(''),
                            '</textarea></span>',
                        '</div>'
                    );
                }

                cache.callback({
                    type: 'xbrower',
                    errorNum: errorNum,
                    msg: jobHtml.join(''),
                    collectResult: []
                });
            });
        },

        _getJobResult: function(){
            var self = this;
            var cache = self.cache;
            var userPwdInfo = '';
            var serverParams = [cache.server, 'rpc/task/queryBuildTaskResult.json?'];

            if(cache.uname != '' && cache.pwd != ''){
                userPwdInfo = ',"userName":"'+ cache.uname +'","passwd":"'+ cache.pwd +'","type":"ICBU"';
            }

            serverParams.push(
                'buildId=', cache.buildId,
                '&urlsJson={"urls":["', cache.location, '"]', userPwdInfo ,'}'
            );

            //FBTrace.sysout(serverParams.join(''));

            $.ajax({
                type: 'GET',
                timeout: 4000,
                url: serverParams.join(''),
                error: function(){
                    clearTimeout(cache.xbrowerTimer);
                    cache.xbrowerTimer = setTimeout(function(){
                        self._getJobResult();
                    }, 5000);
                },
                success: function(jobResult){
                    if(!jobResult.hasError && jobResult['content'] && jobResult['content']['FireFox']){
                        self._buildResult(jobResult['content']);
                    }else{
                        clearTimeout(cache.xbrowerTimer);
                        cache.xbrowerTimer = setTimeout(function(){
                            self._getJobResult();
                        }, 5000);
                    }
                }
            });
        },

        /**
         * 显示xbrower执行结果
         */
        _buildResult: function(result){
            var cache = this.cache;
            var resultHtml = [];
            var errorNum = 0;
            var xbrowerDetail = cache.server +'result/build_result_detail.htm?buildId=';

            resultHtml.push(
                '<dl>',
                    '<dt>', FBL.$STR('pi.xbrower.result'), '</dt>',
                    '<dd>'
            );

            for(var k in result){
                var browerInfo = result[k];
                var theBrowerResult = [];
                var diffNum = 0;

                if(k == 'FireFox'){
                    resultHtml.push(
                        '<div class="error-box">',
                            '<h6 class="eb-noerror">', k, ': <span>[', FBL.$STR('pi.xbrower.baseBrower'), ']</span></h6>',
                        '</div>'
                    );
                }else{
                    if(browerInfo['locDiffNum'] != 0){
                        errorNum++;
                        theBrowerResult.push('<li>', FBL.$STR('pi.xbrower.result.locDiff') ,': <b>', browerInfo['locDiffNum'] ,'</b></li>');
                        diffNum += browerInfo['locDiffNum'];
                    }
                    if(browerInfo['imgDiffNum'] != 0){
                        errorNum++;
                        theBrowerResult.push('<li>', FBL.$STR('pi.xbrower.result.imgDiff') ,': <b>', browerInfo['imgDiffNum'] ,'</b></li>');
                        diffNum += browerInfo['imgDiffNum'];
                    }

                    if(theBrowerResult.length == 0){
                        resultHtml.push(
                            '<div class="error-box">',
                                '<h6 class="eb-noerror">', k, ': <span>[', FBL.$STR('pi.xbrower.result.theSameOfloc'), ']</span></h6>',
                            '</div>'
                        );
                    }else{
                        resultHtml.push(
                            '<div class="error-box">',
                                '<h6>', k, ': <span>[', diffNum, FBL.$STR('pi.xbrower.result.diffNum'), ']</span></h6>',
                                '<ul class="error-item">',
                                    theBrowerResult.join(''),
                                '</ul>',
                            '</div>'
                        );
                    }

                }
            }

            resultHtml.push(
                '<div class="tips-info">',
                    '<a href="'+ xbrowerDetail + cache.buildId, '" target="_blank">', FBL.$STR('pi.xbrower.success.viewResult') ,'</a>',
                '</div>'
            );

            cache.callback({
                type: 'xbrower',
                errorNum: errorNum,
                msg: resultHtml.join(''),
                collectResult: []
            });
        },

        _coverHosts: function(){
            var cache = this.cache;
            var hosts = JSON.parse(cache.hosts);
            var styleHosts = [];

            for(var domain in hosts){
                styleHosts.push(hosts[domain] +' '+ domain);
            }

            cache.hosts = styleHosts.join('\n');
        },

        /**
         * @param {String} obj.hosts
         * @param {String} obj.location
         * @param {Array} obj.browers
         * @param {String} obj.uname
         * @param {String} obj.pwd
         */
        init: function(obj){
            var ls = Firebug.storeModule;
            this.cache = $.extend({}, this.cache, obj);

            this.cache.location = encodeURIComponent(content.window.location.href);
            this.cache.account = ls._get('mt_domain_account');

            //用\n连接host
            this._coverHosts();

            // 只有选择了浏览器才能进行后续的操作
            if(obj.browers.length > 0){
                this._getAvailableBrower(this.cache.browers);
            }

            return this;
        }
    };

    Firebug.xbrowerModule = FBL.extend(Firebug.Module, {
        initialize: function(){
            Firebug.Module.initialize.apply(this, arguments);
            //content.document.getElementsByTagName("body").appendChild();
        },

        shutdown: function(){
            Firebug.Module.shutdown.apply(this, arguments);
        },

        _run: function(config){
            return new xbrower().init(config);
        },
    });

    return Firebug.xbrowerModule;
});