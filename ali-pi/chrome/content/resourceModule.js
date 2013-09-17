define(['firebug/lib/lib', 'firebug/lib/trace'],
function(FBL, FBTrace) {
    var linkobj = function() {
        this.cache = {};
    };

    linkobj.prototype = {
        initlinkobj: function(obj, callback) {
            //FBTrace.sysout("initlinkobj");
            this.cache = {
                root: obj.root,
                //linkInfo: [],
                //typeObj: {},
                //scanStatus: 0,
                count: 0,
                pageLinks: Array(),
                imgs: Array(),
                //当前页所有链接对象的一个数组
                pageLinksCount: 0,
                imgsCount: 0,
                maxCount: 0,
                //pageLinks的length
                linkList: Array(),
                //当前页所有链接，纯链接串
                timeOutInterval: null,
                timeOutSet: 0,
                callback: callback,
                errLinkObj: [],
                errImgObj: [],
                warnLinkObj: [],
                stepFlag: ""
            };

            this.getLinkList();
        },

        getLinkList: function() {
            //FBTrace.sysout("getLinkList");
            this.cache.stepFlag = "linkScan";
            var pageLinks = window._content.document.getElementsByTagName("a");
            this.cache.pageLinks = pageLinks;
            this.cache.pageLinksCount = pageLinks.length;
            this.cache.maxCount = this.cache.pageLinksCount;
            this.cache.count = 0;
            //FBTrace.sysout("this.cache.pageLinksCount="+this.cache.pageLinksCount);
            //FBTrace.sysout("this.cache.pageLinksCount=" + this.cache.pageLinksCount);
            this.sendRequest(this.cache.pageLinks);
        },

        getImgList: function() {
            // FBTrace.sysout("getImgList");
            this.cache.stepFlag = "imgScan";
            var imgs = window._content.document.getElementsByTagName("img");
            this.cache.imgs = imgs;
            this.cache.imgsCount = imgs.length;
            this.cache.maxCount = this.cache.imgsCount;
            this.cache.count = 0;
            FBTrace.sysout("this.cache.imgsCount="+this.cache.imgsCount);
            FBTrace.sysout("this.cache.maxCount="+this.cache.maxCount);
            FBTrace.sysout("this.cache.count="+this.cache.count);
            this.sendRequest(this.cache.imgs);
        },

        //对当前link发送HEAD请求
        sendRequest: function(nodeList) {
            //FBTrace.sysout("sendRequest");
            //FBTrace.sysout("stepFlag="+this.cache.stepFlag);
            var self = this;
            //FBTrace.sysout("count="+this.cache.count);
            var node = nodeList[this.cache.count];
            //FBTrace.sysout("url="+node.href);
            //FBTrace.sysout("判断="+/^(javascript|mailto)/.test(node.href));
            if (node !== null && !(/^(javascript|mailto)/.test(node.href)) && this.cache.stepFlag === "linkScan") {
                FBTrace.sysout("In linkScan");
                xmlHttp = new XMLHttpRequest();
                //FBTrace.sysout("linkScan="+node.href);
                xmlHttp.onreadystatechange = function() {
                    self.getLinkStatus(node);
                };
                xmlHttp.open("GET", node.href, true);
                xmlHttp.send(null);
            } else if (node !== null && this.cache.stepFlag === "imgScan") {
                FBTrace.sysout("In imgScan="+node.src);
                //FBTrace.sysout("imgScan="+node.html());
                xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    self.getLinkStatus(node);
                };
                xmlHttp.open("HEAD", node.src, true);
                xmlHttp.send(null);
            } else {
                FBTrace.sysout("In else");
                this.labelLink(node, 4);
            }
        },

        //对返回的xmlHttp.status做200  404判断，并在页面上标色
        getLinkStatus: function(node) {
            //FBTrace.sysout("getLinkStatus="+node.src);
            //FBTrace.sysout("xmlHttp.readyState="+xmlHttp.readyState);
            //FBTrace.sysout("xmlHttp.status="+xmlHttp.status);
            var self = this;
            if (xmlHttp.readyState < 4) {
                if (this.cache.timeOutSet === 0) {
                    this.cache.timeOutInterval = setTimeout(function() {
                        self.labelLink(node, 4);
                    },
                    15000);
                    this.cache.timeOutSet = 1;
                }
            } else if (xmlHttp.readyState == 4) {

                clearTimeout(this.cache.timeOutInterval);
                this.cache.timeOutSet = 0;
                try {
                    var httpStatus = xmlHttp.status;
                    if ((httpStatus == 200) || ((httpStatus > 301) && (httpStatus < 399))){
                        FBTrace.sysout("httpStatus="+httpStatus+" and Link="+node.href);
                        self.labelLink(node, 1);
                    }
                    else {
                        FBTrace.sysout("httpStatus="+httpStatus+" and Link="+node.href);
                        FBTrace.sysout("this.cache.stepFlag="+this.cache.stepFlag);
                        switch (this.cache.stepFlag) {
                        case "linkScan":
                            FBTrace.sysout("errLink="+node.href);
                            this.cache.errLinkObj.push(node);
                            break;
                        case "imgScan":
                            FBTrace.sysout("errImg="+node.src);
                            this.cache.errImgObj.push(node);
                            break;
                        }
                        self.labelLink(node, 2);
                    }
                } catch(e) {
                    FBTrace.sysout("catch e="+e);
                    self.labelLink(node, 2);
                }
            }
        },

        // //标色，并判断是否结束，没结束则对下一个链接操作。
        labelLink: function(linkTemp, code) {
            FBTrace.sysout("labelLink["+code+"]="+linkTemp.src);
            if (this.cache.timeOutSet == 1) {
                clearTimeout(this.cache.timeOutInterval);
                this.cache.timeOutSet = 0;
            }
            if (this.cache.stepFlag === "linkScan") {
                switch (code) {
                case 1:
                    var linkBgColor = "#cfc";
                    var linkTxtColor = "#363";
                    var linkImgName = "grn";
                    break;
                case 2:
                    var linkBgColor = "#f00";
                    var linkTxtColor = "#633";
                    var linkImgName = "red";
                    break;
                case 3:
                    var linkBgColor = "#ffc";
                    var linkTxtColor = "#663";
                    break;
                case 4:
                    var linkBgColor = "#ccc";
                    var linkTxtColor = "#666";
                    break;
                }
                linkTemp.style.backgroundColor = linkBgColor;
                linkTemp.style.color = linkTxtColor;
            } else if (this.cache.stepFlag === "imgScan") {
                // switch (code) {
                // case 1:
                //     break;
                // case 2:
                //     // var linkBgColor = "#f00";
                //     // var linkTxtColor = "#633";
                //     // var linkImgName = "red";
                //     var linkImg = linkTemp
                //     var linkImgSrc = linkImg.src;
                //     //FBTrace.sysout("linkImgSrc="+linkImgSrc);
                //     var computedImgInfo = document.defaultView.getComputedStyle(linkImg, "");
                //     var imgwidt = computedImgInfo.getPropertyValue("Width");
                //     var imgHeight = computedImgInfo.getPropertyValue("height");
                //     if (imgWidth == "auto" && imgHeight == "auto") {
                //         var imgWidth = linkImg.witdh;
                //         var imgHeight = linkImg.height;
                //     }
                //     var imgPadTop = computedImgInfo.getPropertyValue("padding-top");
                //     var imgPadLt = computedImgInfo.getPropertyValue("padding-left");

                //     var imgBknd = computedImgInfo.getPropertyValue("background-image");
                //     if (imgBknd == "none") {
                //         linkImg.style.background = linkBgColor + " url(" + linkImgSrc + ") " + imgPadLt + " " + imgPadTop + " no-repeat";
                //     }
                //     linkImg.setAttribute("width", parseInt(imgWidth));
                //     linkImg.setAttribute("height", parseInt(imgHeight));
                //     linkImg.setAttribute("src", "chrome://pi/skin/linkscan-status-" + linkImgName + ".png");
                //     break;
                // case 3:
                //     break;
                // case 4:
                //     break;
                // }

            }

            this.cache.count++;

            // 更新进度
            this.updateProgress();
            //FBTrace.sysout("this.cache.stepFlag="+this.cache.stepFlag);
            FBTrace.sysout("cache.count/cache.maxCount="+this.cache.count+"/"+this.cache.maxCount)
            if (this.cache.count < this.cache.maxCount) {
                
                switch (this.cache.stepFlag) {
                case "linkScan":
                    this.sendRequest(this.cache.pageLinks);
                    break;
                case "imgScan":
                    this.sendRequest(this.cache.imgs);
                    break;
                }
            } else {
                FBTrace.sysout("now in imgScan");
                switch (this.cache.stepFlag) {
                case "linkScan":
                    this.getImgList();
                    break;
                case "imgScan":
                    this.finish();
                    break;
                }
            }
        },

        //
        updateProgress: function() {
            FBTrace.sysout("updateProgress");
            var cache = this.cache;
            var linkPro = 0;
            var imgPro = 0;
            switch (this.cache.stepFlag) {
                case "linkScan":
                    linkPro = cache.count;
                    break;
                case "imgScan":
                    linkPro = cache.pageLinksCount;
                    imgPro = cache.count;
                    break;
            }

            var total = cache.pageLinksCount + cache.imgsCount;
            var checked = linkPro + imgPro;
            var percent = parseInt((checked/total) * 100);

            //html:检测中，进度：
            var msg = '<div class="res-loading">\u68c0\u6d4b\u4e2d\uff0c\u8fdb\u5ea6\uff1a '+
                       percent +'% '+
                      //html:请稍后...
                      '\u8bf7\u7a0d\u540e\u002e\u002e\u002e</div>';

            this.cache.callback({
                type: 'resource',
                msg: msg,
                errorNum: -1,
                collectResult: [],
                root: this.cache.root
            });
        },

        finish: function() {
            FBTrace.sysout("finish");
            var errHtml = [];
            var errLinkInfo = [];
            var errLink = this.cache.errLinkObj;
            var errLinkNum = this.cache.errLinkObj.length;
            var errImgInfo = [];
            var errImg = this.cache.errImgObj;
            var errImgNum = this.cache.errImgObj.length;

            /*
            var warnHtml = [];
            var warnInfo = [];
            var warnNum = this.cache.warnLinkObj.length;
            var warnLink = this.cache.warnLinkObj;
            */
            var totalErrorNum = this.cache.errLinkObj.length + this.cache.errImgObj.length;

            if(totalErrorNum == 0){
                errHtml.push(
                    '<dl>',
                        //html:没有错误
                        '<dt>\u6ca1\u6709\u9519\u8bef</dt>',
                    '</dl>'
                );
            }else{
                
                var errorItem = errLink.concat(errImg);
                var index;

                // $.each(errorItem, function(i, error){
                //     var link = error.href ||  error;
                //     errHtml.push(
                //         '<h6 tabindex="', i ,'">',
                //             '\u9519\u8bef\u8fde\u63a5',
                //             '&nbsp;<a href="', link ,'" target="_blank">', link ,'</a>',
                //         '</h6>'
                //     );
                // });

                $.each(errLink,function(i,error){
                    errHtml.push(
                        '<h6 tabindex="', i ,'">',
                            '\u94fe\u63a5\u9519\u8bef',
                            '&nbsp;<a href="', error.href ,'" target="_blank">', error.text ,'</a>',
                            //'&nbsp;<a href="', link ,'" target="_blank">', link ,'</a>',
                        '</h6>'
                        );
                });
                $.each(errImg,function(i,error){
                    errHtml.push(
                        '<h6 tabindex="', i ,'">',
                            '\u56fe\u7247\u9519\u8bef',
                            '&nbsp;<a href="', error.src ,'" target="_blank">', error.alt+error.src ,'</a>',
                            //'&nbsp;<a href="', link ,'" target="_blank">', link ,'</a>',
                        '</h6>'
                        );
                });

                errHtml.unshift(
                    '<dl>',
                        //html:个错误
                        '<dt>', totalErrorNum ,'\u4e2a\u9519\u8bef</span></dt>',
                        '<dd>',
                            '<div class="error-box">'
                );
                errHtml.push(
                            '</div>',
                        '</dd>',
                    '</div>'
                );
            }

            this.cache.callback({
                type: 'resource',
                msg: errHtml.join(''),
                errorNum: errLinkNum + errImgNum,
                collectResult: [],
                root: this.cache.root
            });
        }
    };

    Firebug.resourceModule = FBL.extend(Firebug.Module, {
        initialize: function() {
            Firebug.Module.initialize.apply(this, arguments);
            //content.document.getElementsByTagName("body").appendChild();
        },
        shutdown: function() {
            Firebug.Module.shutdown.apply(this, arguments);
        },

        run: function(obj, callback) {
            new linkobj().initlinkobj(obj, callback);
        }

    });

    return Firebug.resourceModule;
});