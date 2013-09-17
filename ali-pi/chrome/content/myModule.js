define([
    'firebug/lib/lib',
    'firebug/lib/trace',
],
function(FBL, FBTrace){
    var myModule = function(){};

    Firebug.myModule = FBL.extend(Firebug.Module, {
        initialize: function(){
            this.cache = {
                panelName: 'myPanel',
                isPanelOpened: false,
                clientIp: null,
                pageMap: null,
                pluginTrunk: '',
                prefs: null,
                tickerSymbol: ""
            };

            Firebug.Module.initialize.apply(this, arguments);
        },
        shutdown: function(){
            Firebug.Module.shutdown.apply(this, arguments);
        },

        /**
         * 发送结果到服务器
         * 不判断服务器是否成功返回
         */
        _sendCollectResult: function(result){
//FBTrace.sysout("_sendCollectResult");
            if(result.length !== 0){
                $.post('http://10.20.149.80/piwik/save_log.php', {data: JSON.stringify(result)}, function(){});
            }

             $.get('http://pivot.alibaba-inc.com/project/piExecResultPersistence.htm?projectId=164595&testSuiteIds=832&&url=http://trade.alibaba.com/order_list.htm&buildLink=http://10.125.193.146:8080/hudson/job/JobPool_12_PAGE.CHECK_3/9/testReport/http___hz.my.alibaba.com_2080_index.htm/', function(){
            });
        },

        _userlog: function(obj){
            if (obj.length !== 0) {
                //FBTrace.sysout("data:"+JSON.stringify(obj));
                $.post('http://pi.alibaba-inc.com/userlog.php',{data:JSON.stringify(obj)},function(){});
            }
        },

        //获取域帐号&&login帐号
        _getAccount: function(element){
//FBTrace.sysout("_getAccount");   
            //获取域帐号
            this._getDomainAccount(element);
            //获取login帐号
            this._getLoginAccount(element);

            //FBTrace.sysout('getAccount down');
        },

        //获取域帐号
        _getDomainAccount: function(element){
//FBTrace.sysout("_getDomainAccount");
            var self = this;
            var ls = Firebug.storeModule;
            var dAccount = ls._get('mt_domain_account');

            if(!dAccount || dAccount == 'null'){
                var iframeNode = document.createElement('iframe');

                iframeNode.style.display = 'none';
                iframeNode.addEventListener('load', function(){
                    self._saveUserAccount({
                        account: ls._get('temp_mt_domain_account'),
                        el: element
                    });
                });

                iframeNode.setAttribute('src', 'https://login.alibaba-inc.com/errorpage.htm?userfor=@account@');
                content.document.body.appendChild(iframeNode);
            }else{
                self._saveUserAccount({
                    account: dAccount,
                    el: element
                });
            }
        },

        /*
         * obj.account
         * obj.el
         * obj.updateStore
         */
        _saveUserAccount: function(obj){
//FBTrace.sysout("_saveUserAccount");
            var ls = Firebug.storeModule;
            var target = obj.el.find('#da-box');
            var inpText = target.find('.inp-text');
            var inpBtn = target.find('.inp-btn');
            var tipEl = target.find('p');

            //
            inpText.removeAttr('disabled');
            inpBtn.removeAttr('disabled');

            if(!obj.account){
                //html: 自动获取失败，请输入
                tipEl.removeClass('loading').html('\u81ea\u52a8\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u8f93\u5165');
                inpText.focus();
            }else{
                inpText.val(obj.account);
//FBTrace.sysout("hide from _saveUserAccount");
                tipEl.hide();
                inpBtn.click();
            }

            this._getProjectCRID({
                el: obj.el,
                account: obj.account
            });
        },

        /*
         * 获取项目CRID
         * obj.el
         * obj.account
         */
        _getProjectCRID: function(obj){
//FBTrace.sysout("_getProjectCRID");
            //html: 主干
            var html = ['<option value="-1">\u4e3b\u5e72</option>'];

            if(obj.account !== ''){
                $.getJSON('http://pivot.alibaba-inc.com/api/pi/getProjectId.htm?userprefix='+ obj.account, function(result){
                    $.each(result, function(i, data){
                        html.push('<option value="', data.crid ,'">', data.projectName ,'</option>');
                    });

                    obj.el.find('#auto-crid').html(html.join(''));
                });
            }
        },

        //获取登录帐号
        _getLoginAccount: function(element){
//FBTrace.sysout("_getLoginAccount");
            var self = this;
            var ls = Firebug.storeModule;
            var account = ls._get('mt_domain_login_account');
            var now = new Date().getTime();
            var expires = ls._get('mt_domain_login_account_expires');

            if(!expires || now > expires){
                $.getJSON('http://pivot.alibaba-inc.com/api/pi/getLoginAccout.htm', function(result){
                    ls._set('mt_domain_login_account', JSON.stringify(result));
                    ls._set('mt_domain_login_account_expires', now + 2*24*3600*1000);

                    self._fillLoginAccount({
                        data: result,
                        el: element
                    });
                });
            }else{
                self._fillLoginAccount({
                    data: JSON.parse(account),
                    el: element
                });
            }
        },

        /*
         * @param {Array} obj.account
         * @param {object} obj.el
         */
        _fillLoginAccount: function(obj){
//FBTrace.sysout("fillLoginAccount");               
            var html = [];
            html.push('<option value="','--', '">', '\u624b\u52a8\u8f93\u5165 -->>' ,'</option>');
            $.each(obj.data, function(i, account){
                html.push('<option value="', account.username ,'@o@', account.password ,'">', account.accountType ,'</option>');
            });

            obj.el.find('#log-account').html(html.join(''));
        },



        /*
         开始检测
         * param {Object} obj.element
         * param {Array} obj.checkType
         * param {Array} obj.browers
         * param {String} obj.uname
         * param {String} obj.pwd
         * param {String} obj.crid
        */
        _startValidate: function(obj){
//FBTrace.sysout("_startValidate");
            var self = this;
            var cacheData = Firebug.cacheListener._getCacheData();

//FBTrace.sysout("for checkType to");
            self.cache.checkType = obj.checkType;
//FBTrace.sysout("ready for each");
            $.each(obj.checkType, function(i, type){
                //FBTrace.sysout("type="+type);
                if(type == 'xbrower'){
                    var xbrower = Firebug.xbrowerModule._run({
                        hosts: cacheData.hosts,
                        browers: obj.browers,
                        uname: obj.uname,
                        pwd: obj.pwd,
                        callback: function(result){
                            if(obj.element.data('xbrower')){
                                self._handOutResult(obj.element, result);
                            }
                        }
                    });

                    obj.element.data('xbrower', xbrower);
                }

                else if(type == 'automate'){
                    var automate = Firebug.automateModule._run({
                        crid: obj.crid,
                        hosts: cacheData.hosts,
                        callback: function(result){
                            if(obj.element.data('automate')){
                                self._handOutResult(obj.element, result);
                            }
                        }
                    });

                    obj.element.data('automate', automate);
                }

                else if(type == 'static'){
//FBTrace.sysout("time="+new Date().getTime());
                    self._getScript({
                        // 添加一个标识, 在捕获http请求时不处理带有该标识的资源文件
                        url: 'http://pi.alibaba-inc.com/browers-extend/firefox/rules/static.js?@sc=mt@t='+ new Date().getTime(),
                        callback: function(){
                            var win = window.top.getBrowser().selectedBrowser.contentWindow.wrappedJSObject;
                            var factory = win.F2EQUALITY[type +'Check'];

                            new factory().init(JSON.stringify(cacheData),
                                function(result){
                                    // 处理检测结果
                                    self._handOutResult(obj.element, result);
                                }
                            );
                        }
                    });
                }

                else if(type =='resource'){
                    Firebug.resourceModule.run({
                        root: obj.element
                    }, function(result){
                        self._handOutResult(obj.element, result);
                    });
                }
                else{

                  //FBTrace.sysout("plugin choose======="+type);
                    self._getScript({
                        // 添加一个标识, 在捕获http请求时不处理带有该标识的资源文件
                        url: 'http://pi.alibaba-inc.com/browers-extend/plugins/'+type+'.js?@sc=mt@t='+ new Date().getTime(),
                        callback: function(){
                          //FBTrace.sysout("callback");
                            var win = window.top.getBrowser().selectedBrowser.contentWindow.wrappedJSObject;
                            var factory = win.F2EQUALITY[type +'Check'];
                            new factory().init(JSON.stringify(cacheData),
                                function(result){
                                    // 处理检测结果
                                    //FBTrace.sysout("result.type="+result.type);
                                    //FBTrace.sysout("result.msg="+result.msg);
                                    // FBTrace.sysout("result.type="+result.type);
                                    // FBTrace.sysout("result.type="+result.type);
                                    self._handOutResult(obj.element, result);
                                }
                            );
                        }
                    });
                }
            });
        },

        /*
         * config.url
         * config.callback
         */
        _getScript: function(config){
//FBTrace.sysout("_getScript");



            
            //}
            // var is_jq = $.find("[src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js']");
            // has_jq = window._content.document.getElementsByTagName('script');
            // FBTrace.sysout("is_jq="+is_jq.length);

            // var qtip = content.document.createElement('script');
            // qtip.setAttribute('src', "http://pi.alibaba-inc.com/browers-extend/plugins/jquery.qtip-1.0.0-rc3.min.js");
            // content.document.body.appendChild(qtip);

            //FBTrace.sysout("_getScript");

            var scriptNode = content.document.createElement('script');

            scriptNode.setAttribute('charset', 'utf-8');
            scriptNode.setAttribute('src', config.url);


            scriptNode.addEventListener('load', function(){
                // 执行回调方法
                config.callback();
                // 删除加载的js节点
                content.document.body.removeChild(scriptNode);
            });

            content.document.body.appendChild(scriptNode);
            //导致运行不下去FBTrace.sysout("Script html="+document.html());
        },








chromeToPath: function (aPath) {
//FBTrace.sysout("chromeToPath");
   if (!aPath || !(/^chrome:/.test(aPath)))
      return; //not a chrome url
   var rv;

      var ios = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces["nsIIOService"]);
        var uri = ios.newURI(aPath, "UTF-8", null);
        //FBTrace.sysout("ios.newURI="+uri);
        var cr = Components.classes['@mozilla.org/chrome/chrome-registry;1'].getService(Components.interfaces["nsIChromeRegistry"]);
        rv = cr.convertChromeURL(uri).spec;
        //FBTrace.sysout("convertChromeURL="+rv);
        if (/^file:/.test(rv)){
          rv = this.urlToPath(rv);
        }
        else
          rv = this.urlToPath("file://"+rv);
//FBTrace.sysout("chromeToPath return rv="+rv);
      return rv;
},

 urlToPath: function(aPath) {
//FBTrace.sysout("urlToPath");
    if (!aPath || !/^file:/.test(aPath))
      return ;
    var rv;
   var ph = Components.classes["@mozilla.org/network/protocol;1?name=file"]
        .createInstance(Components.interfaces.nsIFileProtocolHandler);
    rv = ph.getFileFromURLSpec(aPath).path;
//FBTrace.sysout("urlToPath return rv="+rv);
    return rv;
},


//获取Pref
    getPref: function(prefDomain,name){
        //FBTrace.sysout("getPref begin-------"+name);
        var prefsValue = Firebug.getPref(prefDomain, name);
        //FBTrace.sysout("prefsValue="+prefsValue);
        return prefsValue;
        // this.cache.prefs = Components.classes["@mozilla.org/preferences-service;1"]
        //                 .getService(Components.interfaces.nsIPrefService);
        // var prefsBranch = this.cache.prefs.getBranch("extensions.pi.");
        // FBTrace.sysout("getBranch over");
        // prefsBranch.QueryInterface(Components.interfaces.nsIPrefBranch2);
        // FBTrace.sysout("QueryInterface over");
        // //this.cache.prefs.addObserver("", this, false);
        // this.cache.tickerSymbol = prefsBranch.getCharPref("installed");
        // this.cache.tickerSymbol = Firebug.getPref("extensions.firebug", "pi.installed");
        // FBTrace.sysout("getCharPref over");
        // FBTrace.sysout("tickerSymbol 1="+this.cache.tickerSymbol);
        // // prefsBranch.setCharPref("extensions.pi.","installed","pistatic,keke");
        // Firebug.setPref("extensions.firebug", "pi.installed", "pistatic,hoho");
        // FBTrace.sysout("tickerSymbol 2="+this.cache.tickerSymbol);
        // this.cache.tickerSymbol = Firebug.getPref("extensions.firebug", "pi.installed");
        // // this.cache.prefs.savePrefFile(null);
        // FBTrace.sysout("tickerSymbol 3="+this.cache.tickerSymbol);
    },
//设置Pref
    setPref: function(prefDomain,name,value){
        //FBTrace.sysout("setPref begin-------"+name);
        //FBTrace.sysout("value="+this.nativeConvertAscii(value));
        Firebug.setPref(prefDomain, name, this.nativeConvertAscii(value));
        //FBTrace.sysout("prefsValue="+Firebug.getPref(prefDomain, name));
    },


    nativeConvertAscii: function (nativecode) {
        //FBTrace.sysout("nativeConvertAscii");
        var nativecode = nativecode.split("");
        var ascii = "";
        for (var i = 0; i < nativecode.length; i++) {
            var code = Number(nativecode[i].charCodeAt(0));
            if (code > 127) {
                var charAscii = code.toString(16);
                charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
                ascii += "\\u" + charAscii;
            } else {
                ascii += nativecode[i];
            }
        }
        return ascii;
    },



             //写文件

//         writeFile: function(aStr,path){

// var path1 = this.chromeToPath("chrome://pi/locale/plugin.properties");
// var path1 = this.chromeToPath(path);
// FBTrace.sysout(aStr);
// FBTrace.sysout("path="+path);
// const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
// var objFile = Cc["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsIFile);
// FBTrace.sysout("ProfD.path="+objFile.path);
// var objFile = Cc["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("CurProcD", Components.interfaces.nsIFile);
// FBTrace.sysout("CurProcD.path="+objFile.path);
// var objFile = Cc["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("DefProfRt", Components.interfaces.nsIFile);
// FBTrace.sysout("DefProfRt.path="+objFile.path);
// var objFile = Cc["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("PrfDef", Components.interfaces.nsIFile);
// FBTrace.sysout("PrfDef.path="+objFile.path);
// var objFile = Cc["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("UChrm", Components.interfaces.nsIFile);
// FBTrace.sysout("UChrm.path="+objFile.path);
// var objFile = Cc["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("AChrom", Components.interfaces.nsIFile);
// FBTrace.sysout("AChrom.path="+objFile.path);
// var objFile = Cc["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("APlugns", Components.interfaces.nsIFile);
// FBTrace.sysout("APlugns.path="+objFile.path);




// var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
// file.initWithPath(path1);
// var strm = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);
// strm.QueryInterface(Ci.nsIOutputStream);
// strm.QueryInterface(Ci.nsISeekableStream);
// strm.init(file,0x04|0x08|0x10,420,0);
// strm.write( aStr, aStr.length);
// strm.flush();
// strm.close();
//FBTrace.sysout(path);
        // },


             //写文件

//         writeFile: function(aStr,path){
// //FBTrace.sysout("writeFile="+aStr+" "+path);
// //var path1 = this.chromeToPath("chrome://pi/locale/plugin.properties");
// var path1 = this.chromeToPath(path);
// FBTrace.sysout("11111111");
// const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
// var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
// FBTrace.sysout("22222222");
// file.initWithPath(path1);
// FBTrace.sysout("33333333");
// var strm = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);
// FBTrace.sysout("44444444");
// strm.QueryInterface(Ci.nsIOutputStream);
// FBTrace.sysout("55555555");
// strm.QueryInterface(Ci.nsISeekableStream);
// FBTrace.sysout("666666666");
// strm.init(file,0x04|0x08|0x10,0666,0);
// FBTrace.sysout("777777777");
// strm.write( aStr, aStr.length);
// FBTrace.sysout("888888888");
// strm.flush();
// strm.close();
// //FBTrace.sysout(path);
//         },
           //写文件

//         writeFileNoAppend: function(aStr,path){
// //FBTrace.sysout("writeFile="+aStr+" "+path);
// //var path1 = this.chromeToPath("chrome://pi/locale/plugin.properties");
// var path1 = this.chromeToPath(path);
// //FBTrace.sysout(aStr);
// const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
// var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
// file.initWithPath(path1);
// var strm = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);
// strm.QueryInterface(Ci.nsIOutputStream);
// strm.QueryInterface(Ci.nsISeekableStream);
// strm.init(file, 0x02 | 0x08 | 0x20, 0666, 0 );
// strm.write( aStr, aStr.length);
// strm.flush();
// strm.close();
// //FBTrace.sysout(path);
//         },

        /*
         开始安装插件
         * param {Object} optData.root
         * param {Array} optData.pluginIds
         * param {Array} optData.pluginNames
         * param {Array} optData.pluginDescs
         
        */
        startInstallPlugin: function(optData){
//FBTrace.sysout("startInstallPlugin="+optData);
            var self = this;
            var cache = this.cache;
            /**
             * TODO 通过调用piPanel的方法修改按钮的状态, 而不是在这里缓存DOM
             */
                var i;
                var resultMsgHtml="";
                
                for(i in optData.pluginIds){
                    var pluginInstalled = this.getPref("extensions.firebug","pi.installed");
                    var pluginInfoJson = JSON.parse(this.getPref("extensions.firebug","pi.pluginInfo"));
                    //FBTrace.sysout(FBL.$STR('pi.installed.plugin')+optData.pluginIds[i]);
                    //FBTrace.sysout(optData.pluginIds[i]+'='+optData.pluginNames[i]);
                    //if(FBL.$STR('pi.installed.plugin').indexOf(optData.pluginIds[i])<0)
                    if(pluginInstalled.indexOf(optData.pluginIds[i])<0)
                    {
                    // this.writeFile(','+optData.pluginIds[i],"chrome://pi/locale/plugin.properties");
                    // this.writeFile(optData.pluginIds[i]+'_id = '+optData.pluginIds[i]+'\n',"chrome://pi/locale/pluginTab.properties");
                    // this.writeFile(optData.pluginIds[i]+'_name = '+optData.pluginNames[i]+'\n',"chrome://pi/locale/pluginTab.properties");
                    // this.writeFile(optData.pluginIds[i]+'_desc = '+optData.pluginDescs[i]+'\n',"chrome://pi/locale/pluginTab.properties");
                        if(pluginInstalled === ""){pluginInstalled = optData.pluginIds[i];}
                        else{pluginInstalled = pluginInstalled + ',' + optData.pluginIds[i];}
                    this.setPref("extensions.firebug","pi.installed",pluginInstalled);
                    pluginInfoJson[optData.pluginIds[i]+'_id'] = optData.pluginIds[i];
                    pluginInfoJson[optData.pluginIds[i]+'_name'] = optData.pluginNames[i];
                    pluginInfoJson[optData.pluginIds[i]+'_desc'] = optData.pluginDescs[i];

                    this.setPref("extensions.firebug","pi.pluginInfo",JSON.stringify(pluginInfoJson));
                    resultMsgHtml+='<span>'+optData.pluginNames[i]+FBL.$STR('mt.tab.install.plugin.suc')+'</span><p>';
                    //FBTrace.sysout("success");
                    }
                    else
                    {
                        //已经安装
                        resultMsgHtml+='<span>'+optData.pluginIds[i]+FBL.$STR('mt.tab.install.plugin.exist')+'</span><p>';
                        //FBTrace.sysout("exist");
                    }
                }
                // 切换按钮状态
                if(resultMsgHtml.indexOf(FBL.$STR('mt.tab.install.plugin.suc'))>=0)
                {
                    resultMsgHtml+=FBL.$STR('mt.tab.uninstall.plugin.restart');
                }
                optData.root.find('#pan-btn-install-plugin').removeAttr('disabled').html(FBL.$STR('mt.tab.installplugin'));
                optData.root.find('.pan-result-msg').eq(0).html(resultMsgHtml);
                
        },
         /*
         开始删除插件
         * param {Object} optData.root
         * param {Array} optData.pluginIds
         * param {Array} optData.pluginNames
         * param {Array} optData.pluginDescs
         
        */
        startUnInstallPlugin: function(optData){
            //FBTrace.sysout("startUnInstallPlugin="+optData);
            var self = this;

            var i;
            var pluginInstalled = this.getPref("extensions.firebug","pi.installed");
            var pluginArray = pluginInstalled.split(',');
            var pluginInfoStr = this.getPref("extensions.firebug","pi.pluginInfo");
            var pluginInfoJson = JSON.parse(pluginInfoStr);
            var resultPlugins = "";
            var resultArray = [];
            var resultMsgHtml = "";
            for(i in optData.pluginIds){
                //FBTrace.sysout("optData.pluginIds["+i+"]="+optData.pluginIds[i]);   
                if (optData.pluginIds[i] !== ""){
                  if(pluginInstalled.indexOf(optData.pluginIds[i])>=0){
                     for(j in pluginArray){
                        //FBTrace.sysout("["+j+"]="+pluginArray[j]);
                        if(optData.pluginIds[i] == pluginArray[j]){
                            //resultArray.push(pluginArray[j]);
                            //FBTrace.sysout("["+j+"]="+pluginArray[j]);
                            pluginArray.splice(j,1);
                            //FBTrace.sysout("set installed="+pluginArray.join(','));
                            this.setPref("extensions.firebug","pi.installed",pluginArray.join(','));

                            delete pluginInfoJson[optData.pluginIds[i]+"_id"];
                            delete pluginInfoJson[optData.pluginIds[i]+"_name"];
                            delete pluginInfoJson[optData.pluginIds[i]+"_desc"];
                            this.setPref("extensions.firebug","pi.pluginInfo",JSON.stringify(pluginInfoJson));

                        }
                      }
                      //pluginArray = resultArray;
                      //resultArray = [];
                      //FBTrace.sysout("re="+pluginArray.join(','));
                      resultMsgHtml+='<span>'+optData.pluginNames[i]+FBL.$STR('mt.tab.uninstall.plugin.suc')+'</span><p>';
                  }
                  else
                  {
                    resultMsgHtml+='<span>'+optData.pluginIds[i]+FBL.$STR('mt.tab.uninstall.plugin.unexist')+'</span><p>';
                  }
                }
            }

            //FBTrace.sysout("re="+pluginArray.join(','));
            //this.writeFileNoAppend((resultPlugins+pluginArray.join(',')),"chrome://pi/locale/plugin.properties");
              // 切换按钮状态
            if(resultMsgHtml.indexOf(FBL.$STR('mt.tab.uninstall.plugin.suc'))>=0)
            {
                resultMsgHtml+=FBL.$STR('mt.tab.uninstall.plugin.restart');
            }
            // 切换按钮状态
            optData.root.find('#pan-btn-uninstall-plugin').removeAttr('disabled').html(FBL.$STR('mt.tab.uninstallplugin'));
            optData.root.find('.pan-result-msg').eq(0).html(resultMsgHtml);
            
        },


        loadPlug: function(panelNode){
            cache = this.cache;
            //FBTrace.sysout("loadPlug");
            var self = this;
            var tabHtml = "<li class= 'tab-checkitem tab-active'> <a href=javascript:;>"+ '\u68c0\u6d4b\u9879'+"</a></li>"+
                     "<li class= 'tab-plugin'> <a href=javascript:;>"+ '\u63d2\u4ef6\u7ba1\u7406'+"</a></li>"+
                     //"<li class= 'tab-debug'> <a href=javascript:;>"+ '\u4ee3\u7801\u8c03\u8bd5'+"</a></li>"+
                    "<li class= 'static'> <a href=javascript:;>"+ '\u4ee3\u7801\u626b\u63cf\u7ed3\u679c'+"</a></li>"+
                    "<li class= 'resource'> <a href=javascript:;>"+ '\u8d44\u6e90\u6709\u6548\u6027\u68c0\u67e5\u7ed3\u679c'+"</a></li>"+
                    "<li class= 'automate'> <a href=javascript:;>"+ '\u524d\u7aef\u81ea\u52a8\u5316\u7ed3\u679c'+"</a></li>"+
                    "<li class= 'xbrower'> <a href=javascript:;>"+ '\u591a\u6d4f\u89c8\u5668\u622a\u56fe\u7ed3\u679c'+"</a></li>";
            var pluginInstalledList = "";
            var plugResultHtml = "";
            var trunkDoneList = "";
            //FBTrace.sysout("pi.installed.plugin="+FBL.$STR('pi.installed.plugin'));
            // var pluginArray = FBL.$STR('pi.installed.plugin').split(',');
            var pluginArray = this.getPref("extensions.firebug","pi.installed").split(',');

            var pluginInfoStr = this.getPref("extensions.firebug","pi.pluginInfo");
            if (pluginInfoStr === ""){
                this.setPref("extensions.firebug","pi.pluginInfo","{}");
            }
            //FBTrace.sysout("pluginInfoStr="+pluginInfoStr);
            var pluginInfoJson = JSON.parse(pluginInfoStr);
            // FBTrace.sysout("pluginInfoJson="+pluginInfoJson.pistatic_id);
            // $.each(pluginInfoJson,function(i,item){
            //     FBTrace.sysout(i+".="+item);
            // });
            var i;

            // for(i in pluginArray)
            //     {
            //             FBTrace.sysout("id["+i+"]="+pluginArray[i]);
            //             //tabhtml+="<li class= '"+ FBL.$STR(pluginArray[i])+"'> <a href=javascript:;>"+ FBL.$STR(pluginArray[i])+FBL.$STR('mt.public.res.plugin')+"</a></li>";
            //             //pluginInstalledList1 += "<li > <label class= 'inp-checkbox'><input type='checkbox' value='"+ pluginArray[i]+"' name= 'checktype'>"+FBL.$STR(pluginArray[i]+'_name')+"</label><span class='pc-desc'>("+FBL.$STR(pluginArray[i]+'_desc')+")</span></li>";
            //             //resultPanHtml+="<div class='tab-item pan-result' ></div>";
            //     }

            //FBTrace.sysout(tabhtml);
            //FBTrace.sysout(pluginCheckList);
            //FBTrace.sysout(this.panelNode);


            //Firebug.myModule.getPlugFromServer();

            var plugin = {"id": "",
                          "name": "",
                          "desc": ""};
            //FBTrace.sysout("end");
            $.getJSON('http://pi.alibaba-inc.com/all.php', function(result,status){
                //FBTrace.sysout("status="+status);
                //FBTrace.sysout("result="+result);
                //flag = status;
                cache.pluginTrunk = result;
                //FBTrace.sysout("cache.pluginTrunk="+cache.pluginTrunk);
                // $.each(cache.pluginTrunk, function(i, data){
                //     FBTrace.sysout("["+i+"]id="+data["id"]);
                //     FBTrace.sysout("["+i+"]name="+data["name"]);
                //     FBTrace.sysout("["+i+"]desc="+data["desc"]);
                //     FBTrace.sysout("["+i+"]note="+data["note"]);
                // });
              });


            //加载已安装的插件列表
            
            for(i in pluginArray){
                if(pluginArray[i] !== ""){
                        //FBTrace.sysout("installed-load...");
                        //FBTrace.sysout("pluginArray["+i+"]="+pluginArray[i]);
                        plugin.id = pluginArray[i];
                        //plugin.name = FBL.$STR(pluginArray[i]+'_name');
                        //FBTrace.sysout("name["+i+"]="+FBL.$STR(pluginArray[i]+'_name'));
                        //plugin.desc = FBL.$STR(pluginArray[i]+'_desc');
                        //FBTrace.sysout("desc["+i+"]="+FBL.$STR(pluginArray[i]+'_desc'));
                        plugin.name = pluginInfoJson[plugin.id+"_name"];
                        plugin.desc = pluginInfoJson[plugin.id+"_desc"];
                        //FBTrace.sysout("plugin.id="+plugin.id);
                        //FBTrace.sysout("plugin.name="+plugin.name);
                        //FBTrace.sysout("plugin.desc="+plugin.desc);
                        //tab标签
                        tabHtml += "<li class= '"+ plugin.id+"'> <a href=javascript:;>"+ plugin.name +"</a></li>";
                        //第一个页插件的checkbox
                        pluginInstalledList += "<li class='pan-plugin li'> <label class= 'inp-checkbox'><input class='pan-plugin input' type='checkbox' name='checktype' value='"+ plugin.id+"' pname='"+plugin.name+"' pdesc='"+plugin.desc+"'>"+plugin.name+"</label><span class='pc-desc'>("+plugin.desc+")</span><span class='ck-result' id='"+ plugin.id+"'></span></li>";
                        //结果显示区域
                        plugResultHtml += "<div class='tab-item pan-result' id='"+ plugin.id+"'></div>";

                        $.each(cache.pluginTrunk,function(j,item){
                            //FBTrace.sysout("json element="+item.id+",Array element="+pluginArray[i]);
                            if (item.id == pluginArray[i]){
                                delete cache.pluginTrunk[j];
                                //break;
                            }
                        });
                }
            }


                // $.each(cache.pluginTrunk,function(j,item){
                //       FBTrace.sysout("-id-="+item.id);
                //       FBTrace.sysout("-name-="+item.name);
                //       FBTrace.sysout("-desc-="+item.desc);
                //   });
            //加载未安装的插件列表
            for(i in cache.pluginTrunk)
                {
                  //FBTrace.sysout("trunk-load...");
                    //FBTrace.sysout("in load");
                    // FBTrace.sysout("["+i+"]id="+cache.pluginTrunk[i]["id"]);
                    // FBTrace.sysout("["+i+"]name="+cache.pluginTrunk[i]["name"]);
                    // FBTrace.sysout("["+i+"]desc="+cache.pluginTrunk[i]["desc"]);
                  plugin.id =cache.pluginTrunk[i].id;

                  plugin.name = cache.pluginTrunk[i].name;
                  plugin.desc = cache.pluginTrunk[i].desc;
                  trunkDoneList += "<li class='pan-plugin li'> <label class= 'inp-checkbox'><input class='pan-plugin input' type='checkbox' pid='"+ plugin.id+"' value='"+ plugin.id+"' pname= '"+plugin.name+"' pdesc='"+plugin.desc+"'>"+plugin.name +"</label><span class='pc-desc'>("+ plugin.desc +")</span></li>";
                }
            $(panelNode).find('.p-tab').eq(0).html(tabHtml);
            $(panelNode).find('.plugin-check-list').eq(0).html(pluginInstalledList);
            $(panelNode).find('.tab-box').append(plugResultHtml);
            var pluginAllList = pluginInstalledList + trunkDoneList;
            $(panelNode).find('.all-plugin-list').eq(0).html(pluginAllList);
            //插入jqery

            var jq = content.document.createElement('script');
            jq.setAttribute('src', "http://pi.alibaba-inc.com/browers-extend/plugins/jquery-1.8.3.min.js");
            content.document.body.appendChild(jq);
        },

        /**
         * 处理显示结果
         * result.type static|dynamic|xbrower
         * result.msg 错误信息
         * result.errorNum
         * result.collectResult 需要发送到服务器端的数据
         */
        _handOutResult: function(el, result){
            FBTrace.sysout("_handOutResult");
            var cache = this.cache;
            var checkBtn = el.find('#pan-btn-check');
            var index = 1;
            var targetTab = null;
            var resultEl = null;
            var resultNum = el.data('resultNum');
            //FBTrace.sysout("resultNum1="+resultNum);

            // if(result.type == 'static'){
            //     index = 1;
            // }else if(result.type == 'resource'){
            //     index = 2;
            // }else if(result.type == 'automate'){
            //     index = 3;
            // }else if(result.type == 'xbrower'){
            //     index = 4;
            // }else if(result.type == 'pistatic'){
            //     index = 1;
            // }

            //targetTab = el.find('.p-tab li').eq(index+1);
            //FBTrace.sysout("tab="+el.find('.p-tab li').eq(index+1).attr("class"));
            //resultEl = el.find('.ck-result').eq(index-1);
            //FBTrace.sysout("context="+el.find('.tab-item').eq(index+1).attr("class"));

            //FBTrace.sysout("result.type="+result.type);
            targetTab = el.find('.p-tab li').filter('.'+result.type);
            //FBTrace.sysout("targetTab="+el.find('.p-tab').html());
            //FBTrace.sysout("targetTab="+targetTab.html());
            resultEl = el.find('div#main-page').find('.ck-result').filter('#'+result.type);
            //FBTrace.sysout("resultEl="+resultEl.attr('id'));
            if(index){
                el.find('.tab-item').filter('#'+result.type).html(result.msg);

                if(result.errorNum == -2){
                    //html:任务创建失败
                    resultEl.html('\u4efb\u52a1\u521b\u5efa\u5931\u8d25').attr('class', 'ck-result ck-result-fail').attr('id', result.type);
                }
                if(result.errorNum == -1){
                    //html:任务执行中
                    resultEl.html('\u4efb\u52a1\u6267\u884c\u4e2d').attr('class', 'ck-result ck-result-ing').attr('id', result.type);
                }
                if(result.errorNum == 0){
                    //html:没有错误
                    resultEl.html('\u6ca1\u6709\u9519\u8bef').attr('class', 'ck-result ck-result-noerror').attr('id', result.type);
                    //resultEl.html("<span class='ck-result ck-result-noerror' id='"+result.type+"'>\u6ca1\u6709\u9519\u8bef</span>");
                }
                if(result.errorNum > 0){
                    //html:个错误
                    resultEl.html(result.errorNum + '\u4e2a\u9519\u8bef').attr('class', 'ck-result ck-result-error').attr('id', result.type);
                }

                if(!resultNum){
                    resultNum = 1;
                }else{
                    resultNum++;
                }
                //FBTrace.sysout("resultNum2="+resultNum);
                el.data('resultNum', resultNum);

                if(resultNum == cache.checkType.length){
                    // 切换按钮状态
                    //html:重新检测
                    checkBtn.removeAttr('disabled').html('\u91cd\u65b0\u68c0\u6d4b').data('restart', 1).blur();
                }

                targetTab.css('display', 'block');
            }

            this._sendCollectResult(result.collectResult);
        }
    });

    return Firebug.myModule;
});