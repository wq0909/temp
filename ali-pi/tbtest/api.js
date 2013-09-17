(function(){
    var PiApi = function(){
        this.cache = {
            pageRunConfig: {
                url: [],
                hosts: 'taobao.com taobao.comr\r\ntbcdn.cn tbcdn.cn',
                browser: {
                    name: 'chrome',
                    version: ''
                },
                loginUrl: 'https://login.taobao.com/member/login.jhtml',
                loginPreClick: 'J_SafeLoginCheck',
                loginParams: {
                    'TPL_username_1': 'ttest100',
                    'TPL_password_1': 'hello1234 '
                },
                loginButton: 'J_SubmitStatic',
                screenshot: false,
                timeout: 120000,
                plugins: {
                    htmlCheck: {},
                    jsCheck: {
                        white: ['/beacon(_\\w+)?\\.js/i']
                    },
                    cssCheck: {}
                }
            }
        }
    }
    PiApi.prototype = {
        /* 
         * obj.url
         * obj.callback
         */
        validate: function(obj){
            var cache = this.cache;

            cache.pageRunConfig.url = obj.urls;
            cache.callback = obj.callback;

            this.loadRules();
        },

        // 加载规则配置文件
        loadRules: function(){
            var self = this;
            var pageRunConfig = self.cache.pageRunConfig;
            var scriptNode = document.createElement('script');

            scriptNode.setAttribute('src', 'http://pi.alibaba-inc.com/browers-extend/firefox/rules/static.js');
            document.body.appendChild(scriptNode);

            scriptNode.onload = function(){
                var staticCheck = new window.F2EQUALITY.staticCheck;

                pageRunConfig.plugins.htmlCheck.config = staticCheck.cache.htmlOption;
                pageRunConfig.plugins.jsCheck.config = staticCheck.cache.jsOption;
                pageRunConfig.plugins.cssCheck.config = staticCheck.cache.cssOption;

                self.sendRequest();
            }
        },

        sendRequest: function(){
            var self = this;
            var cache = self.cache;
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.status == 200){
                    console.log(xmlhttp.responseText);
                    //self.formatResult(JSON.parse(xmlhttp.responseText));
                };
            };
            xmlhttp.open("post", 'http://10.20.174.3/api/run', true);
            xmlhttp.send(JSON.stringify(cache.pageRunConfig));
        },

        formatResult: function(result){
            //console.log(result);
        }
    }

    window.PiApi = new PiApi();
})()