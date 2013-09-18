define([
    'firebug/lib/lib',
    'firebug/lib/trace'
],
function(FBL, FBTrace) {
    function myPanel(){
        //FBTrace.sysout("myPanel this cache");
        this.cache = {
            isShow: false,
            //pluginTrunk: '',
            getPluginFlag: true,
            needRefresh: true    //标记是否需要刷新页面
        };
    }

    myPanel.prototype = FBL.extend(Firebug.Panel, {
        name: 'myPanel',
        title: 'PI',

        initialize: function(){
//FBTrace.sysout("initialize");
            Firebug.Panel.initialize.apply(this, arguments);

            //FBTrace.sysout('==>init panel');
            this.refresh();

            // 获取域帐号&&login帐号
            Firebug.myModule._getAccount($(this.panelNode));

            //FBTrace.sysout("all html="+$(this.panelNode).html());
            //Firebug.myModule.writeFile(',test','C:\Documents and Settings\wb_qian.wang\Application Data\Mozilla\Firefox\Profiles\imbjwazk.dev\extensions');
            //FBTrace.sysout("ready test");
            //var plugin = "pistatic"
            //var str1 = '{ "pistatic_id": "pistatic", "pistatic_name": "pistatic plugin", "pistatic_desc": "self define rules"}'; 
            
            //Firebug.myModule.getPref("extensions.firebug","pi.installed");
            //Firebug.myModule.setPref("extensions.firebug","pi.plugin_"+plugin,str1);
            //FBTrace.sysout("pluginInfoStr="+pluginInfoStr);

        },

        destroy: function(state){
            Firebug.cacheListener._clearData();
            Firebug.Panel.destroy.apply(this, arguments);
        },

        hide: function(){
//FBTrace.sysout("hide");
            //FBTrace.sysout('==>hide');
            this.cache.isShow = false;
        },

        show: function(state){
//FBTrace.sysout("show="+state);
            var element = $(this.panelNode);
            var hasResult = false;

            Firebug.Panel.show.apply(this, arguments);

            //FBTrace.sysout('==>show');

            if(this.cache.needRefresh){
//FBTrace.sysout("window.location.reload");
                content.window.location.reload();
            }

            this.cache.isShow = true;
            element.find('.pan-result').each(function(){
                if($(this).html() != ''){
                    hasResult = true;
                    return;
                }
            });
        },

        refresh: function(){
//FBTrace.sysout("refresh");
            var self = this;
            var ls = Firebug.storeModule;
            var local = content.window.location;
            var refreshUrl = ls._get('mt_refresh_url');
//FBTrace.sysout("refreshUrl="+refreshUrl);
            //保存当前url用于刷新页面
            if((!refreshUrl || refreshUrl == '')){
                ls._set('mt_refresh_url', local);

                //FBTrace.sysout('==>start refresh');

                Firebug.cacheListener._clearData();

                if(self.cache.isShow){
                    content.window.location.reload();
                }else{
                    self.cache.needRefresh = true;
                }
            }else{
                //FBTrace.sysout('==>refresh done');
                self.cache.needRefresh = false;
                ls._remove('mt_refresh_url');
            }

            self.myTemplate.render(self.panelNode);
            Firebug.myModule.loadPlug(self.panelNode);

            $(self.panelNode).find('.p-tab li').eq(1).css('display', 'block');
            self._bindEvent();

            //判断是否自动开始
            if(ls._get('mt_auto_start')){
                ls._remove('mt_auto_start');
                $(self.panelNode).find('#pan-btn-check').click();
            }
        },



        // paneldom事件
        _bindEvent: function(){
//FBTrace.sysout("_bindEvent");
            var element = $(this.panelNode);
            var ls = Firebug.storeModule;

            //获取域帐号
            element.find('#da-box .inp-btn').click(function(){
                var ls = Firebug.storeModule;
                var daccount = element.find('#da-box .inp-text');

                if(daccount.val() !== ''){
                    ls._set('mt_domain_account', daccount.val());
                    element.find('#da-box').hide();
                    element.find('#panel').css('display', 'block');
                }else{
                    daccount.focus();
                }
            });

            // tab切换

            element.find('#p-tab li').each(function(index){
//FBTrace.sysout("index="+index);
                $(this).click(function(){
                    element.find('.tab-active').removeClass('tab-active');

                    $(this).addClass('tab-active');
                    element.find('.tab-item').eq(index).addClass('tab-active');
                });
            });
            element.find('#p-tab a').focus(function(){
                $(this).blur();
            });


            //检查项跳转到具体tab
            element.find('.ck-result').each(function(index){
                //FBTrace.sysout("1.click result to tab");
                $(this).click(function(){
                    //FBTrace.sysout("2.click result to tab");
                    //FBTrace.sysout("$(this)id="+$(this).attr("id"));
                    //FBTrace.sysout("$(this)class="+$(this).attr("class"));
                    element.find('#p-tab li').filter('.'+$(this).attr("id")).click();
                });
            });

            //xbrower选项
            element.find('#inp-xbrower').click(function(){
                if($(this).get(0).checked){
                    element.find('#log-account').removeAttr('disabled');
                    element.find('#log-account-user').removeAttr('disabled');
                    element.find('#log-account-pwd').removeAttr('disabled');
                    element.find('.cki-xb-list input').each(function(){
                        $(this).removeAttr('disabled');

                        if($(this).attr('type') == 'checkbox'){
                            $(this).attr('checked', 'checked');
                        }
                    });
                }else{
                    element.find('#log-account').attr('disabled', 'disabled');
                    element.find('#log-account-user').attr({'disabled':'disabled','value':''});
                    element.find('#log-account-pwd').attr({'disabled':'disabled','value':''});
                    element.find('.cki-xb-list input').each(function(){
                        $(this).attr('disabled', 'disabled');

                        if($(this).attr('type') == 'checkbox'){
                            $(this).removeAttr('checked');
                        }
                    });
                }
            });

            element.find('#log-account').change(function(){
                //FBTrace.sysout("this="+this);
                //FBTrace.sysout("value="+$(this).find(':selected').val());
                if($(this).find(':selected').val() !== "--"){
                    element.find('#log-account-user').attr({'disabled':'disabled','value':''});
                    element.find('#log-account-pwd').attr({'disabled':'disabled','value':''});
                }else{
                    element.find('#log-account-user').removeAttr('disabled');
                    element.find('#log-account-pwd').removeAttr('disabled');
                }


            });


            //自动化
            element.find('#inp-automate').click(function(){
                if($(this).get(0).checked){
                    element.find('#auto-crid').removeAttr('disabled');
                }else{
                    element.find('#auto-crid').attr('disabled', 'disabled');
                }
            })

            //开始检测
            element.find('#pan-btn-check').bind('click', this, function(e){
                if($(this).data('restart')){
                    e.data._resetPanel();
                }

                setTimeout(function(){
                    e.data._collectData();
                }, 100);
            });

             // 安装插件
            element.find('#pan-btn-install-plugin').bind('click', this, function(e){
                 e.data.collectDataForPlugin('#pan-btn-install-plugin');
            });
              // 卸载插件
            element.find('#pan-btn-uninstall-plugin').bind('click', this, function(e){
                 e.data.collectDataForPlugin('#pan-btn-uninstall-plugin');
            });

            // 折叠&&展开检测结果
            element.find('.error-box h6').live('click', function(e){
                var action = $(this).attr('data-action');
                var param = $(this).attr('data-param');
                var win = window.top.getBrowser().selectedBrowser.contentWindow.wrappedJSObject;

                if(e.target.nodeName.toLowerCase() != 'a'){
                    $(this).parent().toggleClass('error-box-active');

                    /**
                     * 绑定行为,可以在扩展面板调用页面上的全局方法
                     */
                    if(action && win[action]){
                        win[action](param);
                    }
                }
            });

            // 查看源文件
            element.find('.error-item a').live('click', function(e){
                if($(this).attr('data-action') == 'viewsource'){
                    var filePath = $(this).parents('.error-item').prev('h6').attr('data-url');

                    if(filePath && filePath != ''){
                        Firebug.viewSourceModule.goToLine({
                            url: filePath,
                            line: $.trim($(this).html())
                        });

                        $(this).parents('.pan-result').find('.ei-active').removeClass('ei-active');
                        $(this).parents('li[tabindex]').addClass('ei-active');
                        return false;
                    }
                }
            });

            // 弹出旺旺
            element.find('.im').live('click', function(){
                var url = [];
                url.push(
                    'aliim:sendmsg?uid=', $(this).attr('data-uid'), '&touid=', $(this).attr('data-uid'),
                    $(this).attr('data-touid'), '&siteid=', $(this).attr('data-uid'), '&status=1&charset=%75%74%66%2D%38&v=%32&s=%32'
                )
                content.window.location.href = url.join('');
            });
        },

        //获取用户选择的相关事件
        _collectData: function(){
//FBTrace.sysout("_collectData");
            var element = $(this.panelNode);
            var checkBtn = element.find('#pan-btn-check');
            var checkType = [];   // 待检测类型
            var browers = [];     // 浏览器类型
            var uname = '';       // 用户名
            var pwd = '';         // 密码
            var crid = element.find('#auto-crid').val();      //aone中项目crid
            var ls = Firebug.storeModule;

//FBTrace.sysout("html="+element.find('.pan-ckitem').html());

            // element.find('.pan-ckitem input').each(function(i,data){

            //     //FBTrace.sysout("["+i+"]"+$(data).val());
            //     if($(data).attr('name') == 'checktype'){
                    
            //         if($(data).get(0).checked){
            //             FBTrace.sysout("["+i+"]"+$(data).val());
            //             checkType.push($(data).val());
            //         }
            //     }
            // });
            // $.each(checkType,function(i,item){
            //     FBTrace.sysout("="+i+"="+item);
            // });


            element.find('.pan-ckitem input').each(function(){
                // 检测类型
                if($(this).attr('name') == 'checktype'){
                    if($(this).get(0).checked){
                        //FBTrace.sysout("val="+$(this).val());
                        checkType.push($(this).val());
                    }
                }
                // 浏览器
                if($(this).attr('name') == 'brower'){
                    if($(this).get(0).checked){
                        browers.push($(this).val());
                    }
                }
            });
            // element.find('.pan-plugin input').each(function(){
            //     //插件的类型
            //     if($(this).attr('name') == 'checktype'){
            //         if($(this).get(0).checked){
            //             checkType.push($(this).val());
            //         }
            //     }
            // });
            //checkType.push("static");
            //checkType.push("resource");
            //checkType.push("pistatic");

            // 用户名&&密码
            var loginInfo = element.find('#log-account').val();
            if(loginInfo && loginInfo !== '' && loginInfo !== '--'){
                uname = loginInfo.split('loginInfo')[0];
                pwd = loginInfo.split('loginInfo')[1];
            }
            else if(loginInfo == '--') {
                //FBTrace.sysout("manu input");
                uname = element.find('#log-account-user').val();
                pwd = element.find('#log-account-pwd').val();
            }
            //FBTrace.sysout("loginInfo="+loginInfo);
            //FBTrace.sysout("uname="+uname);
            //FBTrace.sysout("pwd="+pwd);

            //html:检测中...
            checkBtn.attr({'disabled': 'disabled'}).html('\u68c0\u6d4b\u4e2d\u002e\u002e\u002e');
            //FBTrace.sysout("all html="+element.find('div.cki-xb-login').html());

            domain_account = ls._get("mt_domain_account");
            // 处理数据

            Firebug.myModule._userlog({
                checkType: checkType,
                browers: browers,
                uname: uname,
                //pwd: pwd,
                crid: crid,
                domain_account: domain_account,
                url: window._content.document.location.href
            });
            
            Firebug.myModule._startValidate({
                element: element,
                checkType: checkType,
                browers: browers,
                uname: uname,
                pwd: pwd,
                crid: crid
            });
        },

         // 获取用户选择的插件（安装或者卸载）
        collectDataForPlugin: function(buttonId){
//FBTrace.sysout("collectDataForPlugin");
            var root = $(this.panelNode);
            var Btn = root.find(buttonId);

            var pluginIds=[];    //插件的id
            var pluginNames=[];   //插件的名字
            var pluginDescs=[];   //插件的描述

            root.find('.pan-plugin').each(function(i,item){
                // 检测类型
                    if (item.checked){
                        //FBTrace.sysout("ok");
                        //FBTrace.sysout("id="+$(item).attr('value'));
                        //FBTrace.sysout("name="+$(item).attr('pname'));
                        //FBTrace.sysout("desc="+$(item).attr('pdesc'));
                        pluginIds.push($(item).attr('value'));
                        pluginNames.push($(item).attr('pname'));
                        pluginDescs.push($(item).attr('pdesc'));
                    }
                    // if($(this).get(0).checked){
                    //     FBTrace.sysout("id="+$(this).attr('id'));
                    //     pluginNames.push($(this).attr('name'));
                    //     pluginIds.push($(this).attr('id'));
                    //     pluginDescs.push($(this).attr('desc'));
                    // }

                });



            Btn.attr({'disabled': 'disabled'}).html(FBL.$STR('mt.tab.updateplugin.doing'));
            // 安装插件
            if(buttonId == '#pan-btn-install-plugin'){
                Firebug.myModule.startInstallPlugin({
                    root: root,
                    pluginIds: pluginIds,
                    pluginNames: pluginNames,
                    pluginDescs: pluginDescs
                });
            }
            // 卸载插件
            if(buttonId=='#pan-btn-uninstall-plugin'){

            Firebug.myModule.startUnInstallPlugin({
                root: root,
                pluginIds: pluginIds,
                pluginNames: pluginNames,
                pluginDescs: pluginDescs
            });
            }
        },

        _resetPanel: function(){
//FBTrace.sysout("_resetPanel");
            var element = $(this.panelNode);

            //删除自动化
            if(element.data('automate')){
                var automate = element.data('automate');

                automate = null;
                delete automate;
                element.data('automate', null);
            }

            //删除xbrower
            if(element.data('xbrower')){
                var xbrower = element.data('xbrower');

                xbrower = null;
                delete xbrower;
                element.data('xbrower', null);
            }

            //隐藏tab
            element.find('.p-tab li').each(function(i){
//FBTrace.sysout("hide tab="+i);
                if(i > 1){$(this).hide();}
            });

            //清空结果
            element.find('.tab-item').each(function(i){
                if(i > 1){$(this).html('');}
            });

            //清空结果预览
            element.find('.ck-result').html('');

            //清空checktype的记数
            element.data('resultNum', 0);
        }
    });


    Firebug.registerStringBundle("chrome://pi/locale/mt.properties");

    with(FBL){
//FBTrace.sysout("with");
        myPanel.prototype.myTemplate = domplate(
        {
            tag:
                FBL.DIV({class: 'pi'},
                    FBL.DIV({class: 'step-1 da-box', id: 'da-box'},
                        //html:确认域帐号
                        FBL.H3({class: ''}, '\u786e\u8ba4\u57df\u5e10\u53f7'),
                        FBL.INPUT({type: 'text', class: 'inp-text', disabled: 'disabled'}),
                        //html:确认
                        FBL.BUTTON({type: 'button', class: 'inp-btn', disabled: 'disabled'}, '\u786e\u8ba4'),
                        //html:正在获取域帐号，请稍后
                        FBL.P({class: 'loading'}, '\u6b63\u5728\u83b7\u53d6\u57df\u5e10\u53f7\uff0c\u8bf7\u7a0d\u540e')
                    ),
                    FBL.DIV({class: 'step-2 panel', id: 'panel'},
                        FBL.UL({class: 'p-tab', id: 'p-tab'},
                            FBL.LI({class: 'tab-checkitem tab-active'},
                                FBL.A({href: 'javascript:;'},
                                    //html:检测项
                                    '\u68c0\u6d4b\u9879'
                                )
                            ),
                            FBL.LI({class: 'tab-plugin'},
                                FBL.A({href: 'javascript:;'},
                                    //html:插件管理
                                    '\u63d2\u4ef6\u7ba1\u7406'
                                )
                            ),
                            FBL.LI({class: 'res-static'},
                                FBL.A({href: 'javascript:;'},
                                    //html:代码扫描结果
                                    '\u4ee3\u7801\u626b\u63cf\u7ed3\u679c'
                                )
                            ),
                            FBL.LI({class: 'res-resource'},
                                FBL.A({href: 'javascript:;'},
                                    //html:资源有效性检查结果
                                    '\u8d44\u6e90\u6709\u6548\u6027\u68c0\u67e5\u7ed3\u679c'
                                )
                            ),
                            FBL.LI({class: 'res-automate'},
                                FBL.A({href: 'javascript:;'},
                                    //html:前端自动化结果
                                    '\u524d\u7aef\u81ea\u52a8\u5316\u7ed3\u679c'
                                )
                            ),
                            FBL.LI({class: 'res-xbrower'},
                                FBL.A({href: 'javascript:;'},
                                    //html:多浏览器截图结果
                                    '\u591a\u6d4f\u89c8\u5668\u622a\u56fe\u7ed3\u679c'
                                )
                            )
                        ),
                        FBL.DIV({class: 'tab-box'},
                            FBL.DIV({class: 'tab-item pan-ckitem tab-active', id: 'main-page'},
                                FBL.UL({},
                                    FBL.LI({},
                                        FBL.DIV({class: 'ck-item'},
                                            FBL.INPUT({type: 'checkbox',  value: 'static', checked: 'checked', name: 'checktype'}),
                                            //html:代码扫描
                                            '\u4ee3\u7801\u626b\u63cf',
                                            FBL.SPAN({class: 'ck-result', id: 'static'}, '')
                                        )
                                    ),
                                    FBL.LI({},
                                        FBL.DIV({class: 'ck-item'},
                                            FBL.INPUT({type: 'checkbox', value: 'resource', checked: 'checked', name: 'checktype'}),
                                            //html:资源有效性检查
                                            '\u8d44\u6e90\u6709\u6548\u6027\u68c0\u67e5',
                                            FBL.SPAN({class: 'ck-result', id: 'resource'}, '')
                                        )
                                    ),
                                    FBL.LI({},
                                        FBL.DIV({class: 'ck-item'},
                                            FBL.INPUT({type: 'checkbox', value: 'automate', name: 'checktype', id: 'inp-automate'}),
                                            //html:自动化
                                            '\u81ea\u52a8\u5316',
                                            FBL.SPAN({class: 'ck-result', id: 'automate'}, '')
                                        ),
                                        FBL.DIV({class: 'ck-item-cont cki-auto'},
                                            FBL.SPAN({class: ''},
                                                //html:请选择项目
                                                '\u8bf7\u9009\u62e9\u9879\u76ee'
                                            ),
                                            FBL.SELECT({disabled: 'disabled', class: 'auto-crid', id: 'auto-crid', name: 'crid'})
                                        )
                                    ),
                                    FBL.LI({},
                                        FBL.DIV({class: 'ck-item'},
                                            FBL.INPUT({type: 'checkbox', value: 'xbrower', name: 'checktype', id: 'inp-xbrower'}),
                                            //html:多浏览器截图
                                            '\u591a\u6d4f\u89c8\u5668\u622a\u56fe',
                                            FBL.SPAN({class: 'ck-result', id: 'xbrower'}, '')
                                        ),
                                        FBL.DIV({class: 'ck-item-cont cki-xbrower'},
                                            FBL.DIV({class: 'cki-xb-list'},
                                                FBL.LABEL({class: ''},
                                                    FBL.INPUT({disabled: 'disabled', type: 'checkbox', name: 'brower', value: 'IE6'}),
                                                    'IE6'
                                                ),
                                                FBL.LABEL({class: ''},
                                                    FBL.INPUT({disabled: 'disabled', type: 'checkbox', name: 'brower', value: 'IE7'}),
                                                    'IE7'
                                                ),
                                                FBL.LABEL({class: ''},
                                                    FBL.INPUT({disabled: 'disabled', type: 'checkbox', name: 'brower', value: 'IE8'}),
                                                    'IE8'
                                                ),
                                                FBL.LABEL({class: ''},
                                                    FBL.INPUT({disabled: 'disabled', type: 'checkbox', name: 'brower', value: 'IE9'}),
                                                    'IE9'
                                                ),
                                                FBL.LABEL({class: ''},
                                                    FBL.INPUT({disabled: 'disabled', type: 'checkbox', name: 'brower', value: 'FireFox'}),
                                                    'FireFox'
                                                ),
                                                FBL.LABEL({class: ''},
                                                    FBL.INPUT({disabled: 'disabled', type: 'checkbox', name: 'brower', value: 'Chrome'}),
                                                    'Chrome'
                                                )
                                            ),
                                            FBL.DIV({class: 'cki-xb-login'},
                                                FBL.SPAN({class: 'cki-title'},
                                                    //html:登录帐号
                                                    '\u767b\u5f55\u5e10\u53f7'
                                                ),
                                                FBL.SELECT({disabled: 'disabled', class: 'log-account', id: 'log-account', name: 'log-account'}),
                                                FBL.LABEL({class: 'inp-text'},
                                                    FBL.INPUT({placeholder: FBL.$STR('mt.tab.checkitem.xbrower.account.username'), type: 'text', id: 'log-account-user', name: 'user', value: '', disabled: 'disabled'})
                                                ),
                                                FBL.LABEL({class: 'inp-text'},
                                                    FBL.INPUT({placeholder: FBL.$STR('mt.tab.checkitem.xbrower.account.password'), type: 'text', id: 'log-account-pwd', name: 'pwd', value: '', disabled: 'disabled'})
                                                )
                                            )
                                        )
                                    )
                                ),
                                //plugin
                                FBL.UL({class: 'plugin-check-list'}
                                ),
                                FBL.DIV({class: 'pan-btn'},
                                    FBL.BUTTON({class: 'inp-btn', id: 'pan-btn-check'},
                                        //html:开始检测
                                        '\u5f00\u59cb\u68c0\u6d4b'
                                    )
                                )
                            ),


                            FBL.DIV({class: 'tab-item pan-plugin', id: 'plugin-manage'},
                                FBL.UL({class: 'all-plugin-list'},
                                    FBL.LI({class: 'pan-btn'},
                                        FBL.DIV({class: 'plugin item'},
                                            FBL.LABEL({class: 'inp-checkbox'},
                                                FBL.INPUT({type: 'checkbox', desc: '好', id: 'good', name: '好', class: 'pan-plugin input'}),
                                                FBL.$STR('mt.tab.checkitem.static')
                                            ),
                                            FBL.SPAN({class: 'pc-desc'},
                                                FBL.$STR('mt.tab.checkitem.static.description')
                                            )
                                        )
                                    ),
                                    FBL.LI({class: 'pan-btn'},
                                        FBL.DIV({class: 'plugin item'},
                                            FBL.LABEL({class: 'inp-checkbox'},
                                                FBL.INPUT({type: 'checkbox', desc: '好', id: '9hao2', name: '好', class: 'pan-plugin input'}),
                                                FBL.$STR('mt.tab.checkitem.static')
                                            ),
                                            FBL.SPAN({class: 'pc-desc'},
                                                FBL.$STR('pi.tab.checkitem.static.description')
                                            )
                                        )
                                    )
                                ),
                                FBL.BUTTON({class: 'inp-btn', id: 'pan-btn-uninstall-plugin'},
                                    FBL.$STR('mt.tab.uninstallplugin')
                                ),
                                FBL.BUTTON({class: 'inp-btn', id: 'pan-btn-install-plugin'},
                                    FBL.$STR('mt.tab.installplugin')
                                ),
                                FBL.DIV({class: 'pan-result-msg'})
                            ),
                            FBL.DIV({class: 'tab-item pan-result', id: 'static'}),
                            FBL.DIV({class: 'tab-item pan-result', id: 'resource'}),
                            FBL.DIV({class: 'tab-item pan-result', id: 'automate'}),
                            FBL.DIV({class: 'tab-item pan-result', id: 'xbrower'})
                        )
                    )
                ),


            render: function(parentNode){
//FBTrace.sysout("render");
                this.tag.replace({}, parentNode);
            }
        });


    }

    Firebug.registerPanel(myPanel);
    Firebug.registerStylesheet("chrome://pi/skin/main.css");

    return myPanel;
});
