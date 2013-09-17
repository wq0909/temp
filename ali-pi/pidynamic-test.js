(function(){
    /**
     * showBalloon 方法用于显示错误详细信息
     * showAnnotations 方法中返回检测结果
     */
    var arrI18n = {
        "BG1003": {
            "message": "Firefox \u4E2D Date.now \u65B9\u6CD5\u88AB\u91CD\u5199\u540E MARQUEE \u5143\u7D20\u4E0D\u518D\u6EDA\u52A8"
        },
        "BG1003_suggestion": {
            "message": "MARQUEE \u5143\u7D20\u4E3A\u975E W3C \u6807\u51C6\u5143\u7D20\uFF0C\u5E94\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u3002\u540C\u65F6\u5E94\u5C3D\u53EF\u80FD\u4E0D\u5BF9\u539F\u751F\u7684 JavaScript \u8FDB\u884C\u4FEE\u6539\u751A\u81F3\u5220\u9664\u3002"
        },
        "BG2001": {
            "message": "Firefox \u4E2D\u5757\u7EA7\u5143\u7D20\u9AD8\u5EA6\u6216\u5BBD\u5EA6\u8FC7\u5C0F\u4F1A\u5BFC\u81F4\u6EDA\u52A8\u6761\u6D88\u5931"
        },
        "BG2001_suggestion": {
            "message": "\u9488\u5BF9 Firefox \u4E2D\u7684\u8FD9\u79CD\u7279\u6709\u73B0\u8C61\uFF0C\u5728\u786E\u5B9A\u4E0D\u9700\u8981\u6EDA\u52A8\u6761\u65F6\u4E3A\u5143\u7D20\u8BBE\u7F6E 'overflow:hidden'\uFF0C\u5E76\u4E14\u5408\u7406\u5730\u4E3A\u9700\u8981\u643A\u5E26\u6EDA\u52A8\u6761\u5143\u7D20\u8BBE\u7F6E\u5176\u5BBD\u5EA6\u53CA\u9AD8\u5EA6\u3002"
        },
        "BG9002": {
            "message": "Firefox \u4E0D\u8BC6\u522B type \u6216 language \u88AB\u8BBE\u7F6E\u4E3A JScript \u7684 SCRIPT \u6807\u7B7E"
        },
        "BG9002_suggestion": {
            "message": "\u4E3A\u4E86\u4FDD\u8BC1\u811A\u672C\u7A0B\u5E8F\u53EF\u4EE5\u6B63\u5E38\u6267\u884C\uFF0C\u9664\u975E\u7279\u610F\u4F7F\u7528\u4EC5 IE \u652F\u6301\u7684 VBScript \u548C Script Encoder \u673A\u5236\u5916\uFF0C\u5E94\u5F53\u5C06 SCRIPT \u6807\u8BB0\u7684 \"type\" \u5C5E\u6027\u8BBE\u7F6E\u4E3A \"javascript\"\uFF0C\u5E76\u4E14\u4E0D\u8981\u8BBE\u7F6E\u5DF2\u7ECF\u5E9F\u5F03\u7684 \"Languange\" \u5C5E\u6027\u3002"
        },
        "BT1025": {
            "message": "IE \u4F1A\u5FFD\u7565\u89E6\u53D1 hasLayout \u7684\u5143\u7D20\u5185\u5C3E\u90E8\u7684\u5168\u89D2\u7A7A\u683C"
        },
        "BT1025_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528\u5168\u89D2\u7A7A\u683C\u5360\u4F4D\uFF0C\u4F7F\u7528 &nbsp; \u4EE3\u66FF\u5168\u89D2\u7A7A\u683C\u3002"
        },
        "BT1038": {
            "message": "\u53EA\u6709 IE \u652F\u6301 IMG INPUT[type=image] \u6807\u8BB0\u5185\u7684 lowsrc \u5C5E\u6027"
        },
        "BT1038_suggestion": {
            "message": "\u5982\u65E0\u7279\u6B8A\u5E94\u7528\u9700\u6C42\uFF0C\u5E94\u907F\u514D\u4F7F\u7528 lowsrc \u4E3A\u5C5E\u6027\u540D\uFF0C\u9632\u6B62\u4ED6\u4E0E IE \u6269\u5C55\u5C5E\u6027\u6DF7\u6DC6\u3002"
        },
        "BT2022": {
            "message": "\u53EA\u6709 IE \u652F\u6301 OBJECT \u5143\u7D20\u7684 onerror \u4E8B\u4EF6"
        },
        "BT2022_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528\u975E\u6807\u51C6\u7684 onerror \u4E8B\u4EF6\u3002\u5BF9\u4E8E OBJECT \u5143\u7D20\u53EF\u4EE5\u901A\u8FC7\u5BF9\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u7C7B\u578B\u8FDB\u884C\u5224\u65AD\uFF0C\u6765\u8FBE\u5230\u6709\u597D\u5730\u63D0\u793A\u9519\u8BEF\u7684\u6548\u679C\u3002"
        },
        "BT2033": {
            "message": "\u53EA\u6709 IE \u652F\u6301 BGSOUND \u6807\u7B7E"
        },
        "BT2033_suggestion": {
            "message": "\u5982\u679C\u80CC\u666F\u97F3\u4E50\u662F\u5FC5\u987B\u7684\uFF0C\u8BF7\u8003\u8651\u4F7F\u7528\u88AB\u5E7F\u6CDB\u4F7F\u7528\u7684 Flash \u63D2\u4EF6\u6765\u5B9E\u73B0\uFF0C\u4EE5\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\u3002"
        },
        "BT3003": {
            "message": "\u53EA\u6709 IE \u652F\u6301 TABLE \u5143\u7D20\u7684 'bordercolordark' \u548C 'bordercolorlight' \u5C5E\u6027"
        },
        "BT3003_suggestion": {
            "message": "\u8FD9\u4E24\u4E2A\u5C5E\u6027\u4E3A IE \u79C1\u6709\u5C5E\u6027\uFF0C\u5E76\u4E14 MSDN \u5B98\u65B9\u6587\u6863\u4E0A\u4E5F\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\u5B83\u4EEC\u3002\u6240\u4EE5\uFF0C\u82E5\u8981\u8FBE\u5230\u8FD9\u4E24\u4E2A\u5C5E\u6027\u7684\u6548\u679C,\u53EF\u4EE5\u5728 TABLE \u548C  TD \u5143\u7D20\u4E0A\u4F7F\u7528 \"border-color\" \u3002"
        },
        "BT3013": {
            "message": "\u53EA\u6709 IE \u53EF\u4EE5\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F"
        },
        "BT3013_suggestion": {
            "message": "\u5C3D\u91CF\u4E0D\u8981\u53BB\u4FEE\u6539\u6EDA\u52A8\u6761\u7684\u6837\u5F0F\u3002\u4EE5\u514D\u9020\u6210 IE \u8DDF\u5176\u4ED6\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002"
        },
        "BT8004": {
            "message": "\u53EA\u6709 IE \u652F\u6301\u6761\u4EF6\u6CE8\u91CA"
        },
        "BT8004_suggestion": {
            "message": "\u5728\u6CA1\u6709\u7279\u6B8A\u9700\u6C42\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 IE \u7279\u6709\u7684\u6761\u4EF6\u6CE8\u91CA\u3002"
        },
        "BT8014": {
            "message": "\u53EA\u6709 IE \u652F\u6301 'writing-mode' \u7279\u6027"
        },
        "BT8014_suggestion": {
            "message": "\u5176\u4ED6\u6D4F\u89C8\u5668\u4E2D\u4E0D\u652F\u6301\u6587\u5B57\u7684\u5782\u76F4\u6392\u5217\uFF0C\u6240\u4EE5\uFF0C\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 IE \u4E2D\u7279\u6709\u7684 'writing-mode' \u7279\u6027\u3002"
        },
        "BT9002": {
            "message": "\u53EA\u6709 IE \u7684 TABLE\u3001THEAD\u3001TBODY\u3001TFOOT \u6709 moveRow \u65B9\u6CD5"
        },
        "BT9002_suggestion": {
            "message": "\u4E0D\u8981\u4F7F\u7528 IE \u7684\u7279\u6027\u8BBE\u8BA1\u9875\u9762\u4EE3\u7801\u3002"
        },
        "BT9005": {
            "message": "\u53EA\u6709 IE \u7684\u811A\u672C\u5F15\u64CE\u652F\u6301 VBScript"
        },
        "BT9005_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 VBScript\uFF0C\u4F7F\u7528 JavaScript \u4E66\u5199\u9875\u9762\u4E0A\u7684\u811A\u672C\u3002"
        },
        "BT9006": {
            "message": "\u53EA\u6709 IE \u7684\u811A\u672C\u5F15\u64CE\u652F\u6301 JScript.Encode"
        },
        "BT9006_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 IE \u7279\u6709\u811A\u672C\u6269\u5C55\u65B9\u5F0F\u4E66\u5199\u4EE3\u7801\u3002"
        },
        "BT9007": {
            "message": "Element.all \u5C5E\u6027\u65B9\u6CD5\u53EA\u6709 IE \u548C Opera \u652F\u6301"
        },
        "BT9007_suggestion": {
            "message": "\u4F7F\u7528 Node \u63A5\u53E3\u7684 'childNodes' \u5C5E\u6027\uFF0C\u6CE8\u610F\u5728\u975E IE \u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u8BE5\u5C5E\u6027\u4F1A\u8FD4\u56DE\u6587\u672C\u8282\u70B9\uFF0C\u4F7F\u7528 Node.nodeType \u5224\u65AD\u8282\u70B9\u7C7B\u578B\u4EE5\u83B7\u53D6\u60F3\u8981\u7684\u8282\u70B9\uFF1B"
        },
        "BT9008": {
            "message": "\u53EA\u6709 IE \u548C Opera \u652F\u6301\u4F7F\u7528 currentStyle \u83B7\u53D6 HTMLElement \u7684\u8BA1\u7B97\u540E\u7684\u6837\u5F0F"
        },
        "BT9008_suggestion": {
            "message": "\u8981\u83B7\u53D6\u5143\u7D20\u7684\u67D0\u79CD\u6837\u5F0F\u8BA1\u7B97\u540E\u7684\u503C\uFF0C\u8BF7\u8003\u8651\u6240\u6709\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u60C5\u51B5\u3002\u5982\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u7ED9\u4E0D\u652F\u6301 getComputedStyle \u7684 IE \u63D0\u4F9B\u4E0E\u5176\u4ED6\u6D4F\u89C8\u5668\u76F8\u540C\u7684\u51FD\u6570\uFF1A"
        },
        "BT9009": {
            "message": "\u53EA\u6709 IE \u548C Opear \u652F\u6301 FORM.item() \u65B9\u6CD5"
        },
        "BT9009_suggestion": {
            "message": "\u5F53\u4F7F\u7528 item \u65B9\u6CD5\u904D\u5386 HTMLCollection \u65F6\uFF0C\u53EA\u6709\u5728IE Opera \u6D4F\u89C8\u5668\u4E0B\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 HTMLFormElement \u5143\u7D20\u5185\u6240\u6709\u6807\u8BB0\u5F15\u7528\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u5E76\u4E0D\u652F\u6301\u8FD9\u79CD\u65B9\u6CD5\u3002"
        },
        "BT9010": {
            "message": "\u53EA\u6709 IE \u652F\u6301 CSS Expression"
        },
        "BT9010_suggestion": {
            "message": "CSS Expression \u662F\u4E00\u4E2A\u5DF2\u7ECF\u8FC7\u65F6\u7684\u6280\u672F\uFF0C\u5FAE\u8F6F\u5B98\u65B9\u65E5\u540E\u53EF\u80FD\u4E0D\u4F1A\u518D\u5BF9\u5176\u8FDB\u884C\u5F00\u53D1\u53CA\u652F\u6301\u3002 \u9664\u975E\u4E3A\u4E86\u5229\u7528 CSS hack \u53BB\u5F25\u8865\u67D0\u4E9B IE \u4E2D\u4E0D\u652F\u6301\u7684 CSS \u7279\u6027\uFF0C\u5426\u5219\u5E94\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 CSS Expression\u3002"
        },
        "BT9011": {
            "message": "\u53EA\u6709 IE \u652F\u6301 CSS Filter"
        },
        "BT9011_suggestion": {
            "message": "\u7531\u4E8E CSS Filter \u662F IE \u7279\u6709\u7684\u6280\u672F\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u5747\u4E0D\u652F\u6301\uFF0C\u6240\u4EE5\u4E3A\u4E86\u6700\u5927\u7684\u517C\u5BB9\u6027\u53CA\u6807\u51C6\u5316\uFF0C\u5E94\u5C3D\u91CF\u907F\u514D\u4E3A IE \u5355\u72EC\u4F7F\u7528 Filter\uFF0C\u5982\u9700\u8981\u5176\u67D0\u4E9B\u7279\u6548\uFF0C\u5E94\u540C\u65F6\u8003\u8651\u5176\u4ED6\u6D4F\u89C8\u5668\uFF0C\u5229\u7528\u975E IE \u6D4F\u89C8\u5668\u5BF9 CSS3 \u8349\u6848\u7684\u826F\u597D\u652F\u6301\u4FDD\u8BC1\u6700\u597D\u7684\u517C\u5BB9\u6027\u3002"
        },
        "BT9012": {
            "message": "IE \u7684 external \u5BF9\u8C61\u63D0\u4F9B\u7684\u65B9\u6CD5\u662F IE \u7279\u6709\u7684"
        },
        "BT9012_suggestion": {
            "message": "\u4E0D\u8981\u4F7F\u7528 IE \u7684\u7279\u6027\u8BBE\u8BA1\u9875\u9762\u4EE3\u7801\u3002"
        },
        "BT9015": {
            "message": "\u53EA\u6709 IE \u548C Opera \u652F\u6301 TABLE \u5143\u7D20\u7684 cells \u5C5E\u6027"
        },
        "BT9015_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 TABLE \u7684 cells \u5C5E\u6027\u83B7\u53D6\u5143\u7D20\uFF0C\u800C\u5BF9 table row(TR) \u4F7F\u7528 cells \u5C5E\u6027\uFF0C\u6216\u7528 document.getElementsByTagName \u7B49\u65B9\u5F0F\u83B7\u53D6\u5143\u7D20\u3002"
        },
        "BT9016": {
            "message": "\u53EA\u6709 IE \u548C Opera \u652F\u6301 document.frames"
        },
        "BT9016_suggestion": {
            "message": "\u7528 window.frames \u4EE3\u66FF document.frames\u3002"
        },
        "BT9017": {
            "message": "\u53EA\u6709 IE \u652F\u6301 mouseenter \u548C mouseleave \u4E8B\u4EF6"
        },
        "BT9017_suggestion": {
            "message": "1. \u907F\u514D\u4F7F\u7528 mouseenter \u548C mouseleave \u4E8B\u4EF6\u3002"
        },
        "BT9019": {
            "message": "\u53EA\u6709 IE \u7684\u811A\u672C\u5F15\u64CE\u652F\u6301 CollectGarbage ScriptEngine \u7B49 JScript \u7279\u6709\u7684\u65B9\u6CD5"
        },
        "BT9019_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528\u6B64\u7C7B\u7531\u6D4F\u89C8\u5668\u5382\u5546\u63D0\u4F9B\u7684\u79C1\u6709\u65B9\u6CD5\u548C\u6269\u5C55\u3002"
        },
        "BT9021": {
            "message": "IE \u4E2D\u53EF\u4EE5\u4F7F\u7528 ActiveXObject \u521B\u5EFA Automation \u5BF9\u8C61\uFF0C\u540C\u65F6\u8BE5\u5BF9\u8C61\u7684\u65B9\u6CD5\u53CA\u5C5E\u6027\u540D\u79F0\u5927\u5C0F\u5199\u4E0D\u654F\u611F"
        },
        "BT9021_suggestion": {
            "message": "\u4E3A\u4E86\u6700\u597D\u7684\u517C\u5BB9\u6027\uFF0C\u5E94\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u8FD9\u79CD\u6280\u672F\uFF0C\u6216\u8005\u5728\u975E IE \u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u5176\u4ED6\u7684\u66FF\u4EE3\u6280\u672F\uFF0C\u5982 NPAPI \u63D2\u4EF6\u3002"
        },
        "BT9024": {
            "message": "IE \u4E2D\u53EF\u4EE5\u4F7F\u7528 classid \u4E0E codebase \u5C5E\u6027\u7ED3\u5408\u5B8C\u6210\u4E0B\u8F7D\u3001\u5B89\u88C5\u548C\u4F7F\u7528 ActiveX \u63D2\u4EF6"
        },
        "BT9024_suggestion": {
            "message": "ActiveX \u4E3A\u5FAE\u8F6F\u4E13\u6709\u6280\u672F\uFF0C\u4EC5\u88AB Windows \u4E2D\u7684 IE \u652F\u6301\u3002\u6240\u4EE5\u82E5\u5E0C\u671B\u8FD9\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u8FD0\u884C\u4E8E\u591A\u79CD\u6D4F\u89C8\u5668\uFF0C\u5219\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u975E IE \u652F\u6301\u7684 NPAPI \u91CD\u65B0\u8BBE\u8BA1\u5728\u8FD9\u79CD\u63A5\u53E3\u4E0B\u7684\u63D2\u4EF6\u3002\u4EE5\u4FDD\u8BC1\u6700\u597D\u7684\u517C\u5BB9\u6027\u3002"
        },
        "BT9027": {
            "message": "\u53EA\u6709 IE \u652F\u6301 DHTML Behaviors \u53CA\u76F8\u5173\u65B9\u6CD5"
        },
        "BT9027_suggestion": {
            "message": "1. \u907F\u514D\u4F7F\u7528 IE \u7684\u7279\u6027\u3002"
        },
        "BT9028": {
            "message": "\u53EA\u6709 IE \u652F\u6301 window.createPopup \u65B9\u6CD5"
        },
        "BT9028_suggestion": {
            "message": "\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528 IE \u7684\u7279\u6027\uFF0C\u5FC5\u987B\u4F7F\u7528\u5F39\u51FA\u7A97\u53E3\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u811A\u672C\u4F7F\u7528\u517C\u5BB9\u5404\u6D4F\u89C8\u5668\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002"
        },
        "BT9029": {
            "message": "\u5728 IE \u4E2D\u88AB\u900F\u660E\u5143\u7D20\u906E\u6321\u7684\u5143\u7D20\u4ECD\u80FD\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6"
        },
        "BT9029_suggestion": {
            "message": "\u5982\u679C\u60F3\u906E\u76D6\u67D0\u4E9B\u5143\u7D20\uFF0C\u8BF7\u4E3A\u5176\u8BBE\u7F6E\u4E00\u4E2A\u975E 'transparent' \u7684\u80CC\u666F\u8272\u3002\u5982\u679C\u9700\u8981\u8BA9\u8FD9\u4E2A\u906E\u63A9\u5C42\u201C\u9690\u5F62\u201D\uFF0C\u4F7F\u7528 'opacity:0' \u548C 'filter:alpha(opacity=0)' \u6765\u5B9E\u73B0\u3002"
        },
        "BT9030": {
            "message": "\u53EA\u6709 IE \u7684 HTMLElement \u6709 mergeAttributes \u4E0E clearAttributes \u65B9\u6CD5"
        },
        "BT9030_suggestion": {
            "message": "\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 IE \u72EC\u6709\u7684\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7F16\u5199\u4EE3\u7801\uFF0C\u6539\u7528\u6807\u51C6\u65B9\u6CD5 setAttribute \u548C removeAttribute \u5355\u72EC\u8BBE\u7F6E\u548C\u5220\u9664\u5C5E\u6027\u6765\u5B9E\u73B0\u9700\u6C42\u3002"
        },
        "BT9031": {
            "message": "\u53EA\u6709 IE \u7684 HTMLElement \u6709 applyElement \u65B9\u6CD5"
        },
        "BT9031_suggestion": {
            "message": "\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 applyElement \u65B9\u6CD5\u7F16\u5199\u4EE3\u7801\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u65B9\u6CD5\u5B9E\u73B0\u540C\u6837\u529F\u80FD\uFF0C\u5982 appendChild\u3001insertBefore\u3001removeChild\u3001replaceChild\u3001cloneChild \u7B49\u3002"
        },
        "BT9032": {
            "message": "\u53EA\u6709 IE \u7684 HTMLDOMNode \u6709 replaceNode \u4E0E swapNode \u65B9\u6CD5"
        },
        "BT9032_suggestion": {
            "message": "\u4E0D\u8981\u4F7F\u7528 IE \u7684\u7279\u6027\u8BBE\u8BA1\u9875\u9762\u4EE3\u7801\u3002"
        },
        "BT9034": {
            "message": "\u4EC5 IE \u548C Opera \u652F\u6301 HTMLFrameElement \u548C HTMLIFrameElement \u7684 document \u5C5E\u6027"
        },
        "BT9034_suggestion": {
            "message": "\u4F7F\u7528 HTMLFrameElement \u6216 HTMLIFrameElement \u5BF9\u8C61\u7684 contentWindow \u5C5E\u6027\u5F97\u5230\u8BE5\u6846\u67B6\u9875\u7684 window \u5BF9\u8C61\u5E94\u7528\uFF0C\u518D\u8BBF\u95EE\u5176\u4E0B\u7684 document \u5BF9\u8C61\u3002"
        },
        "BT9035": {
            "message": "\u53EA\u6709 IE \u548C Opera \u7684 HTMLDOMNode \u6709 removeNode \u65B9\u6CD5"
        },
        "BT9035_suggestion": {
            "message": "\u4E0D\u8981\u4F7F\u7528 IE \u7684\u7279\u6027\u8BBE\u8BA1\u9875\u9762\u4EE3\u7801\u3002"
        },
        "BT9036": {
            "message": "\u53EA\u6709 IE \u652F\u6301 XML \u6570\u636E\u5C9B"
        },
        "BT9036_suggestion": {
            "message": "\u5E94\u8003\u8651\u5176\u4ED6\u6807\u51C6\u7684\u3001\u7B26\u5408 W3C \u89C4\u8303\u7684\u3001\u5404\u6D4F\u89C8\u5668\u5747\u652F\u6301\u7684 XML \u76F8\u5173\u6280\u672F\u89E3\u6790 XML \u6587\u6863\u3002"
        },
        "BT9037": {
            "message": "IE \u4E2D\u9875\u9762\u5185 OBJECT \u5BF9\u8C61\u76F8\u5BF9\u5176\u4ED6\u6D4F\u89C8\u5668\u989D\u5916\u5305\u542B\u4E86\u5176\u5F15\u5165\u7684 ActiveX \u63D2\u4EF6\u7684\u90E8\u5206\u79C1\u6709\u5C5E\u6027"
        },
        "BT9037_suggestion": {
            "message": "ActiveX \u6280\u672F\u4E3A\u5FAE\u8F6F\u7684\u4E13\u6709\u6280\u672F\uFF0C\u4EC5\u5728Windows \u4E0B\u7684 IE \u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u5F97\u5230\u652F\u6301\u3002"
        },
        "BW3006": {
            "message": "Chrome \u4E2D\u6587\u7248\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u6700\u5C0F\u5B57\u4F53\u9650\u5236\u4E3A 12px"
        },
        "BW3006_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528\u5C0F\u4E8E 12px \u7684\u5B57\u53F7\uFF0C\u8FC7\u5C0F\u7684\u6587\u5B57\u5EFA\u8BAE\u7528\u56FE\u7247\u4EE3\u66FF\u3002"
        },
        "BW5002": {
            "message": "WebKit \u4E2D\u4F9D\u8D56\u6587\u672C\u6D41\u5B9A\u4F4D\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u66F4\u65B0\u5176\u4F4D\u7F6E"
        },
        "BW5002_suggestion": {
            "message": "\u5728\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u5305\u542B\u5757\u53EF\u80FD\u53D1\u751F\u6539\u53D8\u65F6\uFF08\u5373\u8BE5\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u201C\u9759\u6001\u4F4D\u7F6E\u201D\u53EF\u80FD\u53D1\u751F\u53D8\u5316\u65F6\uFF09\uFF0C\u4E0D\u8981\u8BA9\u8BE5\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u4F9D\u8D56\u5176\u201C\u9759\u6001\u4F4D\u7F6E\u201D\u6765\u5B9A\u4F4D\uFF0C\u7ED9\u8BE5\u5143\u7D20\u8BBE\u5B9A\u660E\u786E\u7684 left\u3001right\u3001top \u6216 bottom \u503C\u3002"
        },
        "BW5004": {
            "message": "Webkit \u4E2D NOBR \u6807\u7B7E\u4E0E\u5176\u4ED6\u6807\u7B7E\u7D27\u5BC6\u76F8\u8FDE\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5BFC\u81F4\u90E8\u5206\u5185\u5BB9\u65E0\u6CD5\u6362\u884C"
        },
        "BW5004_suggestion": {
            "message": "\u5728 NOBR \u95ED\u5408\u6807\u8BB0\u4E4B\u540E\u52A0\u5165\u4E00\u4E2A\u82F1\u6587\u7A7A\u683C\u5373\u53EF\u89E3\u51B3\u4E0D\u6362\u884C\u95EE\u9898\u3002"
        },
        "BW5005": {
            "message": "Webkit \u6D4F\u89C8\u5668\u4F1A\u538B\u7F29 OPTION \u5143\u7D20\u4E2D\u7684\u5168\u89D2\u7A7A\u683C"
        },
        "BW5005_suggestion": {
            "message": "\u907F\u514D\u5728 OPTION \u5143\u7D20\u4E2D\u4F7F\u7528\u5168\u89D2\u7A7A\u683C\uFF0C\u5FC5\u8981\u65F6\u53EF\u4F7F\u7528\u4E24\u4E2A &nbsp; \u4EE3\u66FF\u3002"
        },
        "BW5007": {
            "message": "Chrome Safari \u4E2D\u7684\u8868\u5355\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E0D\u80FD\u591F\u91CD\u590D\u63D0\u4EA4"
        },
        "BW5007_suggestion": {
            "message": "\u6BCF\u6B21\u63D0\u4EA4\u8868\u5355\u540E\u90FD\u4FEE\u6539 action \u5C5E\u6027\u5185\u7684 URL\uFF08\u52A0\u5165\u65F6\u95F4\u6233\uFF09\u3002"
        },
        "BW5008": {
            "message": "WebKit \u4E2D MARQUEE \u5143\u7D20 \u7684 behavior \u5C5E\u6027\u503C\u4E3A alternate \u65F6\u5982\u679C\u5176\u4E2D\u5305\u542B\u5757\u7EA7\u5143\u7D20\u5219\u4F1A\u5F71\u54CD\u5176\u6EDA\u52A8\u6548\u679C"
        },
        "BW5008_suggestion": {
            "message": "\u5728 MARQUEE \u6807\u8BB0\u5185\u907F\u514D\u4F7F\u7528\u666E\u901A\u6D41\u4E2D\u7684\u5757\u7EA7\u5143\u7D20\uFF0C\u6216\u7528\u811A\u672C\u7A0B\u5E8F\u6A21\u62DF MARQUEE \u6807\u8BB0\u7684\u6548\u679C\u3002"
        },
        "BW5009": {
            "message": "WebKit \u4E2D HR \u5143\u7D20 noshade \u5C5E\u6027\u4F1A\u5F71\u54CD\u5176 'color' \u7279\u6027"
        },
        "BW5009_suggestion": {
            "message": "\u53BB\u9664 HR \u5143\u7D20\u7684 noshade \u5C5E\u6027\u6216\u8005\u5C06 noshade \u5C5E\u6027\u653E\u7F6E\u5728 color \u5C5E\u6027\u4E4B\u524D\u3002"
        },
        "BX1009": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5728\u5BBD\u5EA6\u4E0D\u591F\u65F6\u4E0D\u4F1A\u5BF9\u8FDE\u7EED\u7684\u5168\u89D2\u7A7A\u683C\u8FDB\u884C\u6298\u884C\u5904\u7406\u5B58\u5728\u5DEE\u5F02"
        },
        "BX1009_suggestion": {
            "message": "\u4F7F\u7528 &nbsp; \u4EE3\u66FF\u5168\u89D2\u7A7A\u683C\uFF08U+3000\uFF09\u3002"
        },
        "BX1016": {
            "message": "Webkit \u6D4F\u89C8\u5668\u4E2D TD \u7684 \"noWrap\" \u5C5E\u6027\u4F1A\u5F15\u8D77\u7684\u5B83\u91CC\u9762 MARQUEE \u5143\u7D20\u5BBD\u5EA6\u8BA1\u7B97\u9519\u8BEF"
        },
        "BX1016_suggestion": {
            "message": "HTML 4.01 \u4E2D\u8868\u793A \"nowrap\" \u5C5E\u6027\u5DF2\u7ECF\u88AB\u5E9F\u5F03\uFF0C\u4F7F\u7528 'white-space' \u6837\u5F0F\u4EE3\u66FF\u4ED6 \u3002"
        },
        "BX1018": {
            "message": "\u975E IE \u6D4F\u89C8\u5668\u4E2D\u4E3A MARQUEE \u5143\u7D20\u8BBE\u7F6E\u67D0\u4E9B CSS \u7279\u6027\u4F1A\u5BFC\u81F4\u5176\u5931\u53BB\u6EDA\u52A8\u6548\u679C"
        },
        "BX1018_suggestion": {
            "message": "\u9996\u5148 MARQUEE \u5143\u7D20\u4E3A\u975E W3C \u6807\u51C6\u5143\u7D20\uFF0C\u5E94\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u3002\u82E5\u5FC5\u987B\u4F7F\u7528\uFF0C\u5219\u5E94\u5C3D\u91CF\u907F\u514D\u4E3A MARQUEE \u5143\u7D20\u8BBE\u7F6E\u5176\u9ED8\u8BA4\u503C\u4E4B\u5916\u7684 'overflow'\u3001 'display'\u3001'-moz-bind' \u7279\u6027\u503C\u3002"
        },
        "BX1022": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u9047\u5230\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u65F6\u6298\u884C\u7684\u5904\u7406\u6709\u5DEE\u5F02"
        },
        "BX1022_suggestion": {
            "message": "\u5BF9\u6BB5\u843D\u6587\u5B57\u6392\u7248\u65F6\u987B\u8C28\u614E\uFF0C\u6CE8\u610F\u6807\u70B9\u7B26\u53F7\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u4E0D\u597D\u63A7\u5236\u6587\u5B57\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528Javascript\u6839\u636E\u6587\u5B57\u5185\u5BB9\u6240\u5360\u7684\u9AD8\u5EA6\u52A8\u6001\u7F29\u6539\u6587\u5B57\u5185\u5BB9\u3002"
        },
        "BX1030": {
            "message": "IE8(S) Firefox Opera Chrome Safari \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u8BA1\u7B97 MARQUEE \u5143\u7D20\u7684\u5BBD\u5EA6\u65F6\u4F1A\u53C2\u8003\u5176\u5B50\u5143\u7D20\u7684\u5BBD\u5EA6"
        },
        "BX1030_suggestion": {
            "message": "\u603B\u662F\u4E3A MARQUEE \u5143\u7D20\u663E\u5F0F\u5730\u8BBE\u5B9A\u4E00\u4E2A\u5BBD\u5EA6\u3002"
        },
        "BX1039": {
            "message": "IE8 \u6807\u51C6\u6A21\u5F0F\u53CA Opera \u4E0D\u652F\u6301 WBR \u5143\u7D20"
        },
        "BX1039_suggestion": {
            "message": "1. \u53EF\u4EE5\u4E3AWBR\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A :after \u4F2A\u5143\u7D20\uFF0C\u5F3A\u8FEB\u5176\u540E\u63D2\u5165\u4E00\u4E2A\u8F6F\u6362\u884C\u7B26\u3002"
        },
        "BX2001": {
            "message": "IE \u652F\u6301\u4F7F\u7528 window.clipboardData \u8BBF\u95EE\u7CFB\u7EDF\u526A\u8D34\u677F\uFF0CChrome \u548C Safari \u4E2D\u5B58\u5728\u7C7B\u4F3C\u7684 Clipboard \u5BF9\u8C61\u4F46\u5C1A\u672A\u5B9E\u73B0\uFF0CFirefox \u548C Opera \u4E0D\u652F\u6301\u8FD9\u7C7B\u5BF9\u8C61"
        },
        "BX2001_suggestion": {
            "message": "\u5224\u65AD\u6D4F\u89C8\u5668\u7C7B\u578B\uFF0C\u82E5\u4E0D\u662F IE \u5219\u5F39\u51FA\u63D0\u793A\uFF0C\u544A\u8BC9\u7528\u6237\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u80FD\u8BBF\u95EE\u526A\u8D34\u677F\u3002\u5982\uFF1A"
        },
        "BX2003": {
            "message": "\u7279\u5B9A\u7684 URL \u4F2A\u534F\u8BAE\u9700\u5B89\u88C5\u63D0\u4F9B\u8BE5\u534F\u8BAE\u7684\u7279\u5B9A\u8F6F\u4EF6\u624D\u6709\u6548"
        },
        "BX2003_suggestion": {
            "message": "\u67D0\u4E9B\u534F\u8BAE\u662F\u7531\u7279\u5B9A\u7684\u5382\u5546\u81EA\u5B9A\u4E49\u7684\uFF0C\u5982\uFF1A\"tencent://\" \u548C \"msnim:chat\" \u4E4B\u7C7B\uFF0C\u9700\u5B89\u88C5\u7279\u5B9A\u7684\u5BA2\u6237\u7AEF\u8F6F\u4EF6\u4EE5\u6CE8\u518C\u8BE5\u7C7B\u4F2A\u534F\u8BAE\uFF0C\u65B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002\u4F8B\u5982\uFF0C\u5B89\u88C5 QQ \u6216 MSN \u5E94\u7528\u7A0B\u5E8F\u3002"
        },
        "BX2004": {
            "message": "\u6D4F\u89C8\u5668\u540E\u9000\u6309\u94AE\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u884C\u4E3A\u5728\u67D0\u79CD\u60C5\u51B5\u4E0B\u4E0D\u4E00\u81F4"
        },
        "BX2004_suggestion": {
            "message": "\u4EE5\u4E0A\u6240\u63D0\u5230\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\uFF0C\u6211\u4EEC\u671F\u671B\u968F\u7740\u5404\u6D4F\u89C8\u5668\u65B0\u7248\u672C\u7684\u53D1\u5E03\uFF0C\u76F8\u5E94\u7684\u95EE\u9898\u4E5F\u80FD\u5F97\u5230\u4FEE\u590D\uFF0C\u5982 Chrome \u7684\u65B0\u7248\u672C\u5C31\u4FEE\u590D\u4E86 IFRAME \u5730\u5740\u6539\u53D8\u4E0D\u8BB0\u5F55\u5386\u53F2\u8BB0\u5F55\u7684\u95EE\u9898\u3002"
        },
        "BX2012": {
            "message": "\u67D0\u4E9B\u60C5\u51B5\u4E0B\u9664\u4E86 IE \u548C Opera \u4E4B\u5916\u7684\u6D4F\u89C8\u5668\u4E2D window.close \u65B9\u6CD5\u65E0\u6CD5\u5173\u95ED\u7531\u76F4\u63A5\u8F93\u5165 URL \u6216 Ctrl + \u70B9\u51FB\u94FE\u63A5\u65B9\u5F0F\u6253\u5F00\u7684\u7A97\u53E3"
        },
        "BX2012_suggestion": {
            "message": "\u4F7F\u7528 window.close() \u6765\u5173\u95ED\u7A97\u53E3\u65F6\uFF0C\u9700\u6CE8\u610F\u4EE5\u4E0B\u4E24\u70B9\uFF1A"
        },
        "BX2032": {
            "message": "\u67D0\u4E9B\u60C5\u51B5\u4E0B\u6D4F\u89C8\u5668\u4E0D\u6309\u7167 \"target\" \u5C5E\u6027\u6240\u6307\u76EE\u6807\u6253\u5F00\u534F\u8BAE\u94FE\u63A5"
        },
        "BX2032_suggestion": {
            "message": "\u4E3A\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\uFF0C\u5C3D\u91CF\u4E0D\u4E3A\u8FD9\u4E9B\u534F\u8BAE\u8BBE\u7F6E \"target\" \u76EE\u6807\u4E3A  \"_blank\"  \u3002"
        },
        "BX2033": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4F7F\u7528\u811A\u672C\u5C06\u9875\u9762\u52A0\u5165\u6536\u85CF\u5939\u7684\u652F\u6301\u60C5\u51B5\u4E0D\u540C"
        },
        "BX2040": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 navigator \u5BF9\u8C61\u4E2D\u51E0\u4E2A\u4E0E\u8BED\u8A00\u76F8\u5173\u7684\u5C5E\u6027\u7684\u8FD4\u56DE\u503C\u5B58\u5728\u5DEE\u5F02"
        },
        "BX2040_suggestion": {
            "message": "\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u83B7\u53D6\u5F53\u524D\u6D4F\u89C8\u5668\u8BED\u8A00\uFF1A"
        },
        "BX2050": {
            "message": "\u5404\u6D4F\u89C8\u5668\u7981\u6B62\u5185\u5BB9\u9009\u4E2D\u7684\u65B9\u5F0F\u4E0D\u540C"
        },
        "BX2050_suggestion": {
            "message": "\u7ED9\u6807\u7B7E\u8BBE\u7F6E\u6837\u5F0F -moz-user-select:none ;-webkit-user-select:none \u540C\u65F6\u6807\u7B7E\u8BBE\u7F6E unselectable=\"on\" \uFF0C\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u90FD\u53EF\u4EE5\u7981\u6B62\u5185\u5BB9\u9009\u4E2D\u3002"
        },
        "BX3006": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 TABLE\u3001TH\u3001TD \u5143\u7D20\u7684 bordercolor \u5C5E\u6027\u7684\u5904\u7406\u6709\u5DEE\u5F02"
        },
        "BX3006_suggestion": {
            "message": "\u5728 W3C HTML4 \u5C5E\u6027\u8868\u4E2D\u6CA1\u6709\u627E\u5230 bordercolor \u5C5E\u6027\uFF0C\u53EF\u89C1\u8FD9\u5E76\u4E0D\u662F W3C \u89C4\u8303\u4E2D\u7684\u6807\u51C6\u5C5E\u6027\uFF0C\u5404\u6D4F\u89C8\u5668\u6839\u636E\u5404\u81EA\u7684\u7406\u89E3\u5B9E\u73B0\u4E86\u8BE5\u5C5E\u6027\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u5E94\u907F\u514D\u4F7F\u7528\u8FD9\u79CD\u975E\u6807\u51C6\u5C5E\u6027\u3002"
        },
        "BX3019": {
            "message": "Chrome Safari \u4E2D\u8BBE\u7F6E\u4E86 'bordercolor' \u5C5E\u6027\u7684 TABLE \u5143\u7D20\uFF0C\u4F1A\u4E3A\u5176\u81EA\u52A8\u8BBE\u7F6E3px\u7684\u8FB9\u6846\u5BBD\u5EA6"
        },
        "BX3019_suggestion": {
            "message": "\u907F\u514D\u7ED9 TABLE \u8BBE\u7F6E 'bordercolor' \uFF0C\u4F7F\u7528 CSS \u4E2D 'border' \u5B9E\u73B0\u5176\u6548\u679C\uFF0C\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u517C\u5BB9\u3002"
        },
        "BX3023": {
            "message": "\u5728 IE \u4E2D\u4E00\u4E9B\u7279\u6B8A\u5B57\u7B26\u7684\u6700\u7EC8\u5448\u73B0\u5B57\u4F53\u4E0D\u662F\u8BBE\u5B9A\u503C"
        },
        "BX3023_suggestion": {
            "message": "\u9488\u5BF9\u95EE\u9898 1\uFF0C\u907F\u514D\u4F7F\u7528\u53EF\u4EE5\u89E6\u53D1\u8FD9\u79CD\u7279\u6B8A\u73B0\u8C61\u7684\u5B57\u4F53\uFF0C\u5982 \"\u5B8B\u4F53\" \uFF0C\u4E3A\u7279\u6B8A\u5B57\u7B26\u8BBE\u7F6E\u5176\u4ED6\u5B57\u4F53\u3002"
        },
        "BX8017": {
            "message": "\u53EA\u6709 IE Chrome Safari \u652F\u6301 'zoom' \u7279\u6027\u5E76\u4E14\u4ED6\u4EEC\u7684\u5177\u4F53\u5B9E\u73B0\u65B9\u5F0F\u4E0D\u540C"
        },
        "BX8017_suggestion": {
            "message": "\u7531\u4E8E\u5404\u6D4F\u89C8\u5668\u5BF9 'zoom' \u7684\u5B9E\u73B0\u4E0A\u5B58\u5728\u5DEE\u5F02\uFF0C\u5E76\u4E14Firefox Opera \u5E76\u4E0D\u652F\u6301 'zoom'\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u4E3A 'zoom' \u8BBE\u5B9A\u503C\u5927\u4E8E 1 \u7684\u503C\u6765\u5BF9\u5143\u7D20\u8FDB\u884C\u7F29\u653E\u5E94\u7528\u3002"
        },
        "BX8037": {
            "message": "\u6EA2\u51FA\u5B9A\u4F4D\u6D41\u7684\u4E0D\u53EF\u89C6\u5143\u7D20\uFF0C\u5176\u5305\u542B\u5757\u7684\u6EDA\u52A8\u6761\u751F\u6210\u5DEE\u5F02"
        },
        "BX8037_suggestion": {
            "message": "\u907F\u514D\u5728\u5B9A\u4F4D\u6D41\u5185\u51FA\u73B0\u4E0D\u53EF\u89C6\u5143\u7D20\u4E14\u6EA2\u51FA\u7236\u5BB9\u5668\u3002"
        },
        "BX8042": {
            "message": "\u5404\u4E3B\u6D41\u6D4F\u89C8\u5668\u5747\u4E0D\u652F\u6301\u975E\u6807\u51C6\u7684 LAYER \u5143\u7D20"
        },
        "BX8042_suggestion": {
            "message": "\u653E\u5F03\u4F7F\u7528 LAYER \u5143\u7D20\uFF0C\u6539\u7528 CSS \u4E2D\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u6837\u5F0F 'position:absloute' \u5904\u7406\u76F8\u5173\u60C5\u51B5\u3002"
        },
        "BX9002": {
            "message": "document.all \u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u652F\u6301\u4E0D\u540C"
        },
        "BX9002_suggestion": {
            "message": "\u7531\u4E8E document.all \u65B9\u6CD5\u5B58\u5728\u652F\u6301\u7A0B\u5EA6\u95EE\u9898\uFF0C\u83B7\u53D6\u5143\u7D20\u8FD8\u662F\u63A8\u8350\u7528 W3C DOM \u89C4\u8303\u4E2D\u63D0\u4F9B\u7684 document.getElementById\u3001document.getElementsByTagName \u7B49\u6807\u51C6\u65B9\u6CD5\u3002"
        },
        "BX9007": {
            "message": "\u83B7\u53D6\u6587\u6863\u53EF\u89C6\u5C3A\u5BF8\uFF08\u89C6\u53E3\uFF09\u65F6\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u53C2\u8003\u5143\u7D20\u6709\u5DEE\u5F02"
        },
        "BX9007_suggestion": {
            "message": "\u5F53\u51FA\u73B0\u9875\u9762\u5782\u76F4\u6EDA\u52A8\u6761\u7684\u65F6\u5019\u5C3D\u91CF\u4F7F\u7528 'document.body.scrollHeight' \u83B7\u53D6\u9875\u9762\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6\u3002"
        },
        "BX9008": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E8E\u83B7\u53D6\u6587\u6863\u6C34\u5E73\u53CA\u5782\u76F4\u65B9\u5411\u6EDA\u52A8\u6761\u4F4D\u7F6E\uFF08scrollLeft\u3001scrollTop\uFF09\u65F6\u7684\u53C2\u8003\u5143\u7D20\u5B58\u5728\u5DEE\u5F02"
        },
        "BX9008_suggestion": {
            "message": "\u4F7F\u7528 \"||\" \u903B\u8F91\u8BED\u53E5\u5C06\u8FD9\u4E24\u79CD\u83B7\u53D6\u65B9\u5F0F\u76F8\u8FDE\uFF0C\u4EE5\u4FDD\u8BC1\u517C\u5BB9\u6027\u3002"
        },
        "BX9010": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D\u5BF9\u76F4\u63A5\u4EE5 id \u6216\u8005 name \u5C5E\u6027\u503C\u83B7\u53D6\u5143\u7D20\u5B58\u5728\u5DEE\u5F02"
        },
        "BX9010_suggestion": {
            "message": "\u901A\u8FC7\u4E0A\u9762\u7684\u6D4B\u8BD5\u53EF\u4EE5\u770B\u5230\uFF0C\u4EC5\u4EC5\u5728\u901A\u8FC7 name \u5C5E\u6027\u83B7\u53D6 IFRAME \u548C FRAME \u5143\u7D20\u5185\u5B50\u9875\u9762\u7684 window \u5BF9\u8C61\u65F6\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u6CA1\u6709\u5DEE\u5F02\u3002"
        },
        "BX9013": {
            "message": "\u52A8\u6001\u5F15\u5165\u7684\u5916\u90E8 JS \u6587\u4EF6\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u52A0\u8F7D\u987A\u5E8F\u4E0D\u4E00\u81F4"
        },
        "BX9013_suggestion": {
            "message": "\u5BF9\u4E8E\u5FC5\u987B\u52A8\u6001\u9644\u52A0\u5230\u6587\u6863\u7684\u5916\u90E8 js \u6587\u4EF6\uFF0C\u8981\u4FDD\u8BC1\u52A8\u6001\u5F15\u5165\u7684\u811A\u672C\u5168\u90E8\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u624D\u80FD\u6267\u884C\u540E\u7EED\u4EE3\u7801\u3002"
        },
        "BX9014": {
            "message": "document.write \u65B9\u5F0F\u5F15\u5165\u5916\u90E8 JavaScript \u6587\u4EF6\u5BFC\u81F4\u811A\u672C\u7A0B\u5E8F\u6267\u884C\u987A\u5E8F\u4E0D\u540C\u4EE5\u53CA DOM \u6811\u66F4\u65B0\u5EF6\u8FDF\u95EE\u9898"
        },
        "BX9014_suggestion": {
            "message": "\u5982\u679C\u5916\u90E8\u5F15\u7528\u7684 JavaScript \u6587\u4EF6\u5185\u7A0B\u5E8F\uFF0C\u8981\u6C42\u5728\u6267\u884C\u987A\u5E8F\u4E0A\u4E00\u81F4\uFF0C\u8BF7\u907F\u514D\u4F7F\u7528 document.write \u8BED\u53E5\u5F15\u5165\u7684 JS \u7A0B\u5E8F\u6587\u4EF6\u4E2D\u518D\u6B21\u4F7F\u7528\u4ED6\u6765\u52A0\u8F7D\u5916\u90E8 JavaScript \u6587\u4EF6\u3002"
        },
        "BX9021": {
            "message": "IE6 IE7 IE8 \u5BF9 onreadystatechange \u4E8B\u4EF6\u7684\u6269\u5145"
        },
        "BX9021_suggestion": {
            "message": "\u5728\u73B0\u884C W3C \u6807\u51C6\u89C4\u8303\u4E2D\u4EC5\u6709 XmlHttpRequest \u5BF9\u8C61\u4E2D\u5B58\u5728 onreadystatechange \u4E8B\u4EF6 ( \u8BF7\u53C2\u8003  XMLHttpRequest \u89C4\u8303 )\u3002"
        },
        "BX9024": {
            "message": "Firefox \u4E0D\u652F\u6301 DOM \u5143\u7D20 style \u5C5E\u6027\u4E2D\u7684 pixel* \u5C5E\u6027\uFF0C\u5E76\u4E14\u67D0\u4E9B\u60C5\u51B5\u4E0B Webkit \u6D4F\u89C8\u5668 pixel* \u5C5E\u6027\u7684\u8FD4\u56DE\u503C\u548C IE \u4E2D\u4E0D\u540C"
        },
        "BX9024_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 IE6 IE7 IE8  \u6D4F\u89C8\u5668\u79C1\u6709 DOM \u5C5E\u6027\u503C\uFF0C\u6539\u7528\u6807\u51C6 DOM \u89C4\u8303\u4E2D\u5B9A\u4E49\u7684\u6709\u5EA6\u91CF\u5355\u4F4D\u7684 \"width \"\u3001\"height\"\u3001\"top\"\u3001 \"right\"\u3001 \"left\"\u3001 \"bottom\" \u5C5E\u6027\u6765\u4EE3\u66FF\u5B83\u4EEC\u3002"
        },
        "BX9025": {
            "message": "\u65B0\u7248\u672C\u7684\u6D4F\u89C8\u5668\u90FD\u5DF2\u7ECF\u4E0D\u652F\u6301\u53E4\u8001\u7684 document.layers"
        },
        "BX9025_suggestion": {
            "message": "\u7528\u5176\u4ED6\u65B9\u5F0F\u5224\u65AD\u6D4F\u89C8\u5668\u7C7B\u578B\uFF0C\u907F\u514D\u4F7F\u7528 document.layers \u5C5E\u6027\uFF1B"
        },
        "BX9028": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4F7F\u7528 document.id \u548C document.name \u83B7\u53D6\u5BF9\u8C61\u7684\u652F\u6301\u5B58\u5728\u5DEE\u5F02"
        },
        "BX9028_suggestion": {
            "message": "\u4F7F\u7528 W3C \u6807\u51C6\u4E2D\u7684 document.getElementById(id) \u65B9\u6CD5\u83B7\u53D6\u5BF9\u8C61\u3002"
        },
        "BX9029": {
            "message": "IE \u548C Firefox \u53EF\u4EE5\u901A\u8FC7\u7279\u5B9A\u65B9\u6CD5\u4F7F innerHTML \u65B9\u6CD5\u8F7D\u5165\u7684 SCRIPT \u6807\u7B7E\u4E2D\u7684 JavaScript \u4EE3\u7801\u5728\u9875\u9762\u52A0\u8F7D\u540E\u4E5F\u53EF\u4EE5\u6267\u884C"
        },
        "BX9029_suggestion": {
            "message": "\u4E0A\u9762\u63D0\u5230\u7684 IE \u53CA Firefox \u4E2D\u4F7F\u901A\u8FC7 innerHTML \u65B9\u6CD5\u52A8\u6001\u63D2\u5165\u7684 SCRIPT \u5143\u7D20\u4E2D\u811A\u672C\u6267\u884C\u7684\u65B9\u6CD5\u5747\u6BD4\u8F83\u7279\u6B8A\uFF0C\u662F\u5229\u7528\u4E86\u6D4F\u89C8\u5668\u7684 Bug\uFF0C\u6216\u8005\u662F\u5229\u7528\u4E86\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u7279\u6027\u3002\u800C innerHTML \u65B9\u6CD5\u53EA\u662F\u7528\u6765\u63D2\u5165 HTML \u4EE3\u7801\uFF0C\u5E76\u4E0D\u80FD\u4F7F\u5176\u4E2D\u5305\u542B\u7684\u811A\u672C\u4EE3\u7801\u6267\u884C\u3002"
        },
        "BX9031": {
            "message": "IE \u548C Chrome \u652F\u6301\u901A\u8FC7 EMBED \u5143\u7D20\u5D4C\u5165 MP3 \u683C\u5F0F\u6587\u4EF6"
        },
        "BX9031_suggestion": {
            "message": "\u5728 HTML5 \u5C1A\u672A\u5236\u5B9A\u5B8C\u6210\u4E14\u666E\u53CA\u65F6\uFF0C\u4F7F\u7528 Flash \u64AD\u653E MP3 \u6587\u4EF6\uFF0C\u4EE5\u4FDD\u8BC1\u6700\u5927\u7684\u517C\u5BB9\u6027\u3002"
        },
        "BX9034": {
            "message": "\u5224\u65AD\u6D4F\u89C8\u5668\u7C7B\u578B\u6216\u7248\u672C\u65F6\u4F7F\u7528\u7684\u65B9\u6CD5\u4E0D\u5F53\u5C06\u5BFC\u81F4\u4EE3\u7801\u4E0D\u80FD\u6309\u7167\u9884\u671F\u7684\u6548\u679C\u6267\u884C"
        },
        "BX9034_suggestion": {
            "message": "1\u3001\u6D4F\u89C8\u5668\u7C7B\u578B\u6216\u7248\u672C\u5224\u522B\u63A8\u8350\u91C7\u7528\u5206\u6790 navigator.userAgent \u5C5E\u6027\u7684\u65B9\u5F0F\u3002"
        },
        "BX9035": {
            "message": "IE \u4E2D location=\"\" \u6216 location.href=\"\" \u5C06\u4F7F\u9875\u9762\u8DF3\u8F6C\u81F3\u5F53\u524D\u9875\u9762\u6240\u5728\u6839\u76EE\u5F55"
        },
        "BX9035_suggestion": {
            "message": "\u5728\u4E3A location \u6216 location.href \u8D4B\u503C\u505A\u9875\u9762\u8DF3\u8F6C\u65F6\u5FC5\u987B\u4FDD\u8BC1\u6240\u8D4B\u7684\u5B57\u7B26\u4E32\u5730\u5740\u7684\u5408\u6CD5\u6027\uFF0C\u4E0D\u8981\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u3002"
        },
        "BX9036": {
            "message": "Opera \u548C Chrome \u5BF9\u6A21\u6001\u5BF9\u8BDD\u6846\uFF08showModalDialog\uFF09\u7684\u652F\u6301\u6709\u7F3A\u9677\uFF0C\u4E14\u975E IE \u6D4F\u89C8\u5668\u5747\u4E0D\u652F\u6301\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\uFF08showModelessDialog\uFF09"
        },
        "BX9036_suggestion": {
            "message": "showModalDialog \u65B9\u6CD5\u4E0E showModelessDialog \u65B9\u6CD5\u5747\u4E0D\u88AB W3C \u652F\u6301\uFF0C\u867D\u7136 showModalDialog \u65B9\u6CD5\u76EE\u524D\u5DF2\u6BD4\u8F83\u5E7F\u6CDB\u7684\u88AB\u652F\u6301\uFF0C\u4F46\u8FD8\u662F\u5E94\u907F\u514D\u4F7F\u7528\u5B83\u3002\u56E0\u4E3A\u6A21\u6001\u5BF9\u8BDD\u6846\u4F1A\u963B\u585E\u7236\u7A97\u53E3\u7684\u8F93\u5165\uFF0C\u4F7F\u5176\u662F\u53BB\u7126\u70B9\uFF0C\u8FD9\u5C06\u5BF9\u7528\u6237\u4F53\u9A8C\u4E0D\u5229\u3002"
        },
        "BX9041": {
            "message": "\u5404\u6D4F\u89C8\u5668\u521B\u5EFA XMLHttpRequest \u5BF9\u8C61\u7684\u65B9\u5F0F\u4E0D\u540C"
        },
        "BX9041_suggestion": {
            "message": "\u5224\u65AD\u6D4F\u89C8\u5668\u7248\u672C\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684 XMLHttpRequest \u5BF9\u8C61\u521B\u5EFA\u65B9\u5F0F\u3002\u5982\uFF1A"
        },
        "BX9055": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 window.execScript \u65B9\u6CD5\u7684\u652F\u6301\u4E0D\u540C"
        },
        "BX9055_suggestion": {
            "message": "window.execScript \u65B9\u6CD5\u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\uFF0C\u540C\u65F6\u6240\u652F\u6301\u7684\u811A\u672C\u8BED\u8A00\u79CD\u7C7B\u5E76\u4E0D\u5C3D\u76F8\u540C\uFF0C\u8BF7\u786E\u5B9A\u5728\u76EE\u6807\u6D4F\u89C8\u5668\u5747\u652F\u6301\u6B64\u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\u518D\u4F7F\u7528\u5B83\u3002"
        },
        "CH9002": {
            "message": "IE \u672A\u6309\u9884\u671F\u65B9\u5F0F\u5904\u7406 content-type \u4E3A text/plain \u7684\u5185\u5BB9"
        },
        "CH9002_suggestion": {
            "message": "\u8FD9\u662F\u7531\u4E8E IE \u6D4F\u89C8\u5668\u7684\u7279\u6709\u5185\u5BB9\u55C5\u63A2\u673A\u5236\u5BFC\u81F4\uFF0C\u6545\u5728\u4E0D\u4FEE\u6539\u670D\u52A1\u5668\u7AEF\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u65E0\u6CD5\u901A\u8FC7\u5E38\u89C4\u529E\u6CD5\u89E3\u51B3\u6B64 IE \u7279\u6027\u95EE\u9898\u3002\u66F4\u591A\u5173\u4E8E\u6B64\u95EE\u9898\u7684\u8D44\u6599\u53C2\u8003\u5B98\u65B9\u4FE1\u606F\uFF1AInternet Explorer \u672A\u6309\u9884\u671F\u65B9\u5F0F\u5904\u7406\u201CText/Plain\u201D\u5185\u5BB9\u7C7B\u578B\u3002"
        },
        "CH9003": {
            "message": "IE6 \u548C Chrome \u672A\u6309\u9884\u671F\u65B9\u5F0F\u5904\u7406 content-type \u4E3A application/rss+xml \u7684\u5185\u5BB9"
        },
        "CH9003_suggestion": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E8E RSS \u7684\u652F\u6301\u53CA\u6E32\u67D3\u65B9\u5F0F\u4E3A\u6D4F\u89C8\u5668\u5404\u81EA\u5B9E\u73B0\u5BFC\u81F4\uFF0C\u6545\u65E0\u6CD5\u901A\u8FC7\u5E38\u89C4\u529E\u6CD5\u4F7F\u5404\u6D4F\u89C8\u5668\u8FBE\u5230\u4E00\u81F4\u7684\u6548\u679C\uFF0C\u5BF9\u4E8E\u6682\u4E0D\u652F\u6301 RSS \u7684\u6D4F\u89C8\u5668\u5E94\u7ED9\u4E88\u63D0\u793A\u3002Chrome \u53EF\u901A\u8FC7\u5B89\u88C5\u6269\u5C55\u63D2\u4EF6\u5B9E\u73B0\u6B64\u529F\u80FD\u3002"
        },
        "CM2001": {
            "message": "\u4E0D\u80FD\u4FDD\u8BC1\u5E26\u6709 name \u5C5E\u6027\u7684 BUTTON / INPUT [ type = submit / button / image ] \u5143\u7D20\u7684 value \u5C5E\u6027\u503C\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u90FD\u53EF\u4EE5\u88AB\u63D0\u4EA4\u5230\u670D\u52A1\u7AEF"
        },
        "CM2001_suggestion": {
            "message": "\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u670D\u52A1\u5668\u7AEF\u4E0D\u9700\u8981\u6309\u94AE\u7684 key/value \u4FE1\u606F\uFF0C\u5EFA\u8BAE\u5220\u9664\u6309\u94AE\u7684 name \u5C5E\u6027\uFF0C\u4E0D\u4F7F\u5176\u6210\u4E3A successful control\u3002"
        },
        "CP9001": {
            "message": "Firefox Safari \u4E2D\u5BF9 cookie \u4E2D\u672A\u7ECF\u7F16\u7801\u7684\u4E2D\u6587\u6C49\u5B57\u5904\u7406\u6709\u95EE\u9898"
        },
        "CP9001_suggestion": {
            "message": "\u5728\u8BBE\u7F6E\u548C\u8BFB\u53D6 cookie \u65F6\uFF0C\u59CB\u7EC8\u4E3A\u5B57\u7B26\u8FDB\u884C\u7F16\u89E3\u7801\u64CD\u4F5C\uFF0C\u63A8\u8350\u4F7F\u7528 \"encodeURIComponent\" \u548C \"decodeURIComponent\" \u65B9\u6CD5\u505A\u76F8\u5E94\u7F16\u89E3\u7801\u5DE5\u4F5C\u3002"
        },
        "HA1003": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 align='middle' \u7684\u7406\u89E3\u6709\u5DEE\u5F02"
        },
        "HA1003_suggestion": {
            "message": "align=\"middle\" \u4EC5\u5728 IMG\u3001OBJECT\u3001APPLET \u5143\u7D20\u4E0A\u7684 align \u5C5E\u6027\u4E2D\u662F\u5408\u6CD5\u503C\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u5143\u7D20\u7684 align \u5C5E\u6027\u5747\u4E3A\u975E\u6CD5\u3002\u5404\u6D4F\u89C8\u5668\u5728\u4E0A\u8FF0\u4E09\u4E2A\u5143\u7D20\u4E4B\u5916\u7684\u5143\u7D20\u4E0A\u9047\u5230 align=\"middle\" \u5747\u6309\u7167\u81EA\u5DF1\u7684\u7406\u89E3\u65B9\u5F0F\u89E3\u91CA\u3002\u540C\u65F6\u9664\u5355\u5143\u683C\u5143\u7D20\u7684 align \u5C5E\u6027\u4E4B\u5916\uFF0C\u5176\u4ED6\u7684 align \u5C5E\u6027\u5747\u88AB W3C \u5B98\u65B9\u5E9F\u5F03\uFF08Deprecated.\uFF09\uFF0C\u6240\u4EE5\u5E94\u907F\u514D\u4F7F\u7528\u6B64\u5C5E\u6027\u3002"
        },
        "HA8001": {
            "message": "\u5728 IE6 IE7 IE8(Q) \u4E2D CENTER \u5143\u7D20\u81EA\u8EAB\u4E5F\u4F1A\u5C45\u4E2D\u5BF9\u9F50\uFF0C\u5728 IE(S) \u4E0E Opera(S) \u4E2D\u8FD8\u4F1A\u4F7F\u5176\u5305\u542B\u7684\u8868\u683C\u4E2D\u7684\u6587\u672C\u5C45\u4E2D\u5BF9\u9F50"
        },
        "HA8001_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 CENTER \u6807\u7B7E\uFF0C\u4F7F\u7528 CSS \u7684 'text-align' \u7279\u6027\u6765\u4EE3\u66FF\u3002"
        },
        "HD9001": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 URI \u4E2D\u975E ASCII \u5B57\u7B26\u7684\u5904\u7406\u6709\u5DEE\u5F02"
        },
        "HD9001_suggestion": {
            "message": "\u5F53 URI \u4E2D\u542B\u6709\u975E ASCII \u5B57\u7B26\u65F6\uFF0C\u4E0D\u8981\u4F9D\u8D56\u6D4F\u89C8\u5668\u5BF9 URI \u7684\u7F16\u7801\u65B9\u5F0F\uFF0C\u4EE5\u907F\u514D\u4EA7\u751F\u5DEE\u5F02\u3002\u5EFA\u8BAE\uFF1A"
        },
        "HE1001": {
            "message": "IE \u4E2D\u5355\u5143\u683C\u7684 colspan \u5C5E\u6027\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5F71\u54CD TABLE \u5143\u7D20\u7684\u81EA\u52A8\u5E03\u5C40"
        },
        "HE1001_suggestion": {
            "message": "1. \u8BBE\u7F6E TABLE \u7684 'table-layout' \u7279\u6027\u503C\u4E3A fixed\uFF0C\u4F7F\u7528\u56FA\u5B9A\u5E03\u5C40\u7684\u8868\u683C\u5143\u7D20\u53EF\u907F\u514D\u6B64\u95EE\u9898\u3002"
        },
        "HE1003": {
            "message": "IE \u652F\u6301\u67D0\u4E9B\u975E TD \u548C TH \u5143\u7D20\u4E0A\u7684 noWrap \u5C5E\u6027"
        },
        "HE1003_suggestion": {
            "message": "nowrap \u5C5E\u6027\u662F\u88AB\u5E9F\u5F03\u7684\u5C5E\u6027\uFF0C\u4F7F\u7528 CSS \u89C4\u5219 white-space:nowrap \u4EE3\u66FF\u8FD9\u4E2A\u5C5E\u6027\u3002"
        },
        "HE8002": {
            "message": "Firefox \u5728 TABLE \u5143\u7D20\u7684\u5BBD\u5EA6\u5C5E\u6027 (Attribute) \u503C\u5927\u4E8E 100% \u65F6\u4F1A\u4EE5 100% \u8BA1\u7B97"
        },
        "HE8002_suggestion": {
            "message": "\u7ED9 TABLE \u5143\u7D20\u8BBE\u7F6E\u5BBD\u5EA6\u7684\u65F6\u5019\uFF0C\u4E0D\u8981\u4F7F\u7528 HTML \u5C5E\u6027 'width'\uFF0C\u8BF7\u4F7F\u7528 CSS \u7279\u6027 'width'\u3002"
        },
        "HF1002": {
            "message": "\u4E0D\u80FD\u4EE5 size \u5C5E\u6027\u7CBE\u786E\u63A7\u5236 INPUT \u6587\u672C\u6846\u6216\u5BC6\u7801\u6846\u7684\u5BBD\u5EA6"
        },
        "HF1002_suggestion": {
            "message": "\u4E0D\u8981\u8BD5\u56FE\u901A\u8FC7\u8BBE\u7F6E \"size\" \u5C5E\u6027\u4F7F INPUT[type=text/password] \u5143\u7D20\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u7684\u5BBD\u5EA6\u4E00\u81F4\uFF0C\u8FD9\u662F\u4E0D\u53EF\u80FD\u7684\u3002\u5728\u9700\u8981\u5BF9\u8FD9\u7C7B\u5143\u7D20\u505A\u7CBE\u786E\u7684\u63A7\u5236\u65F6\uFF0C\u5E94\u4F7F\u7528 CSS \u7684 'width' \u548C 'height' \u7279\u6027\u3002"
        },
        "HF1004": {
            "message": "IE6 IE7 IE8(Q) \u4E2D FILEDSET \u5143\u7D20\u7684\u5BBD\u5EA6\u4E0D\u662F 'auto' \u65F6\u7684\u8868\u73B0\u4E0E\u884C\u5185\u5143\u7D20\u76F8\u540C"
        },
        "HF1004_suggestion": {
            "message": "\u8FD9\u662F\u4E00\u4E2A Bug\uFF0C\u901A\u8FC7\u663E\u5F0F\u8BBE\u7F6E FIELDSET \u7684\u6837\u5F0F\u4E3A 'display:block' \u6765\u4FEE\u590D\u3002"
        },
        "HF1007": {
            "message": "Firefox \u4E2D TEXTAREA \u5143\u7D20\u6839\u636E \"rows\" \u8BBE\u7F6E\u503C\u751F\u6210\u7684\u5B9E\u9645\u884C\u6570\u4E3A\u8BBE\u7F6E\u503C + 1"
        },
        "HF1007_suggestion": {
            "message": "\u5F53\u6211\u4EEC\u4EC5\u4EC5\u4E3A TEXTAREA \u5143\u7D20\u8BBE\u7F6E \"rows\" \u5C5E\u6027\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u65F6\uFF0C\u5728 Firefox \u4E2D\u65E0\u6CD5\u5F97\u5230\u6211\u4EEC\u9884\u671F\u7684\u6548\u679C\u3002\u4E14\u5176\u4ED6\u6D4F\u89C8\u5668\u5BF9 \"rows\" \u5C5E\u6027\u8BBE\u7F6E\u7684\u5143\u7D20\u9AD8\u5EA6\u4E5F\u4E0D\u5C3D\u76F8\u540C\uFF0C\u8FD9\u4E00\u70B9 W3C \u6CA1\u6709\u660E\u786E\u89C4\u8303 \"rows\" \u5C5E\u6027\u8BA1\u7B97\u9AD8\u5EA6\u65F6\u7684\u5177\u4F53\u7B97\u6CD5\u3002"
        },
        "HF1008": {
            "message": "Firefox Opera \u4E2D BUTTON \u5143\u7D20\u7684\u5B50\u5143\u7D20\u53EF\u4EE5\u6EA2\u51FA\u6309\u94AE\u6E32\u67D3"
        },
        "HF1008_suggestion": {
            "message": "\u5408\u7406\u7684\u8BBE\u7F6E BUTTON \u53CA\u5176\u5B50\u5143\u7D20\u7684\u5BBD\u5EA6\u53CA\u9AD8\u5EA6\uFF0C\u907F\u514D\u51FA\u73B0\u5B50\u5143\u7D20\u6EA2\u51FA BUTTON \u7684\u60C5\u51B5\u3002"
        },
        "HF3001": {
            "message": "\u4E0D\u540C\u5185\u6838\u7684\u6D4F\u89C8\u5668\u4E2D\u6587\u4EF6\u9009\u62E9\u63A7\u4EF6\u7684\u5916\u89C2\u4E5F\u4E0D\u76F8\u540C"
        },
        "HF3001_suggestion": {
            "message": "\u5728 Chrome  Safari \u4E2D\u5BF9\u4E8E\u6587\u4EF6\u9009\u62E9\u63A7\u4EF6\u7684\u7279\u6B8A\u5448\u73B0\u65B9\u5F0F\u4E3A WebKit \u5185\u6838\u7279\u6709\uFF0C\u4E14\u5176\u6E32\u67D3\u65B9\u5F0F\u4E5F\u7B26\u5408 W3C \u5BF9\u6587\u4EF6\u9009\u62E9\u63A7\u4EF6\u7684\u89C4\u5B9A\u3002\u4E00\u822C\u6765\u8BF4\u8FD9\u79CD\u5DEE\u5F02\u4E0D\u4F1A\u5E26\u6765\u4E25\u91CD\u7684\u517C\u5BB9\u6027\u95EE\u9898\u3002"
        },
        "HF3003": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D\u5BC6\u7801\u6846\u63A9\u7801\u7684\u5916\u89C2\u4E0D\u5B8C\u5168\u4E00\u81F4"
        },
        "HF3003_suggestion": {
            "message": "\u7531\u4E8E\u63A9\u7801\u5B57\u7B26\u65E0\u6CD5\u88AB\u4FEE\u6539\uFF0C\u56E0\u6B64\u4EC5\u901A\u8FC7 CSS \u7EDF\u4E00\u5BC6\u7801\u8F93\u5165\u6846\u7684\u63A9\u7801\u6837\u5F0F\u662F\u4E0D\u53EF\u80FD\u7684\u3002\u4E14\u8FD9\u79CD\u5DEE\u5F02\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1\u3002"
        },
        "HF3005": {
            "message": "\u4EC5\u5728 IE6 IE7 IE8\u4E2D \"disabled\" \u5C5E\u6027\u53EF\u4EE5\u4F5C\u7528\u4E8E\u975E\u8868\u5355\u63A7\u4EF6\u5143\u7D20"
        },
        "HF3005_suggestion": {
            "message": "\u5E94\u907F\u514D\u5728\u975E\u8868\u5355\u63A7\u4EF6\u7C7B\u5143\u7D20\u4E0A\u4F7F\u7528 \"disabled\" \u5C5E\u6027\u3002"
        },
        "HF3006": {
            "message": "Chrome Safari Opera \u4E2D INPUT\u3001TEXTAREA \u5143\u7D20\u7684 disabled \u5C5E\u6027\u503C\u4E3A true \u65F6\u5176\u524D\u666F\u989C\u8272\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u4F46\u5728 Chrome Safari \u4E2D\u67D0\u4E9B\u60C5\u51B5\u4E0B disabled \u5C5E\u6027\u503C\u7531 true \u8F6C\u4E3A false \u540E\uFF0C\u5176\u524D\u666F\u989C\u8272\u4E0D\u4F1A\u66F4\u65B0\u81F3\u6700\u521D\u7684\u8BBE\u5B9A\u8272"
        },
        "HF3006_suggestion": {
            "message": "\u907F\u514D\u4E3A INPUT\u3001TEXTAREA \u5143\u7D20\u8BBE\u7F6E\u6BD4\u8F83\u6DF1\u7684\u80CC\u666F\u8272\uFF0C\u6216\u8005\u5728\u9700\u8981\u4F7F\u4E00\u4E2A\u6587\u672C\u6846\u5728 \"disabled=true\" \u53CA \"disabled=false\" \u4E4B\u95F4\u5207\u6362\u65F6\uFF0C\u5C3D\u91CF\u901A\u8FC7\u6807\u51C6\u7684 DOM \u65B9\u5F0F\u521B\u5EFA\u6B64\u5143\u7D20\u3002"
        },
        "HF3012": {
            "message": "IE6 Firefox Chrome(Q) Safari(Q) \u4E0D\u652F\u6301 OPTION \u5143\u7D20\u7684 label \u5C5E\u6027"
        },
        "HF3012_suggestion": {
            "message": "\u5C3D\u91CF\u907F\u514D\u5728 OPTION \u5143\u7D20\u4E0A\u4F7F\u7528 label \u5C5E\u6027\uFF0C\u5982\u679C\u60F3\u66FF\u4EE3 OPTION \u539F\u6709\u7684\u5185\u5BB9\u503C\uFF0C\u8BF7\u4F7F\u7528 Javascript\u3002"
        },
        "HF3013": {
            "message": "IE6 IE7 \u4E0D\u652F\u6301 OPTION \u548C OPTGROUP \u5143\u7D20\u7684 disabled \u5C5E\u6027"
        },
        "HF3013_suggestion": {
            "message": "\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u4F7F\u60F3\u8981 disabled \u7684 OPTION \u548C OPTGROUP \u65E0\u6548\uFF0C\u6BD4\u5982\u4F7F\u7528\u811A\u672C\u52A8\u6001\u5220\u9664 OPTION \u6216 OPTGROUP\u3002"
        },
        "HF9009": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u8868\u5355\u5143\u7D20\u5355\u9009\u6309\u94AE\u7EC4\u8BBE\u7F6E\u975E CDATA \u6807\u51C6\u7684 name \u5C5E\u6027\u503C\u89E3\u6790\u4E0D\u540C"
        },
        "HF9009_suggestion": {
            "message": "\u5355\u9009\u6309\u94AE\u7684 \"name\" \u5C5E\u6027\u503C\u5FC5\u987B\u4EE5\u5B57\u6BCD ([A-Za-z])\u548C\u6570\u5B57\uFF08[0-9]\uFF09\u5F00\u5934 \uFF0C\u5176\u540E\u7531\u4EFB\u4F55\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u8FDE\u5B57\u7B26(\"-\")\u3001\u4E0B\u5212\u7EBF(\"_\")\u3001\u5192\u53F7(\":\")\u548C\u53E5\u53F7 (\".\") \u7EC4\u6210\u3002"
        },
        "HG1002": {
            "message": "Chrome \u548C Safari \u4E2D\u6807\u7B7E\u7D27\u5BC6\u76F8\u90BB\u7684\u884C\u5185\u5143\u7D20\u5728\u6298\u884C\u663E\u793A\u65F6\u5B58\u5728\u9519\u8BEF"
        },
        "HG1002_suggestion": {
            "message": "\u907F\u514D\u51FA\u73B0\u7D27\u5BC6\u8FDE\u63A5\u7684\u5185\u8054\u5143\u7D20\u6807\u7B7E\uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A\u6807\u8BB0\u4E4B\u95F4\u52A0\u5165\u7A7A\u683C\u6216\u8005\u6362\u884C\u7B26\u6765\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\u3002"
        },
        "HG2003": {
            "message": "META \u6807\u7B7E\u7684 content \u5C5E\u6027\u4E2D\u4F7F\u7528\u975E ';' \u7684\u7B26\u53F7\u505A\u6570\u636E\u5206\u5272\u65F6\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668\u4E2D\u4E0D\u4F1A\u88AB\u8BC6\u522B"
        },
        "HG2003_suggestion": {
            "message": "1. \u53C2\u7167 W3C \u7684\u5EFA\u8BAE\uFF0C\u4F7F\u7528\u670D\u52A1\u7AEF\u8FDB\u884C\u9875\u9762\u8DF3\u8F6C\u3002"
        },
        "HG8001": {
            "message": "DTD \u4E4B\u524D\u7684\u975E\u7A7A\u767D\u5B57\u7B26\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u8BE5 DTD \u5931\u6548"
        },
        "HG8001_suggestion": {
            "message": "\u58F0\u660E DTD \u65F6\uFF0C\u786E\u4FDD DTD \u4E4B\u524D\u6CA1\u6709\u5176\u4ED6\u5B57\u7B26\uFF0C\u5373\u4FBF\u6709\uFF0C\u4E5F\u53EA\u80FD\u662F\u7A7A\u683C\u7B26\u3001\u6362\u884C\u7B26\u548C\u5236\u8868\u7B26\u3002"
        },
        "HH8001": {
            "message": "\u5728 Firefox \u4E2D\u6CE8\u91CA\u5185\u5BB9\u4E2D\u5982\u679C\u5305\u542B '-' \u5B57\u7B26\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u8BE5\u6CE8\u91CA\u89E3\u6790\u9519\u8BEF"
        },
        "HH8001_suggestion": {
            "message": "\u6309\u6807\u51C6\u63A8\u8350\u7684\u65B9\u6CD5\u5199\u6CE8\u91CA\u6807\u7B7E\uFF0C\u5982\uFF1A"
        },
        "HJ2001": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 BASE \u5143\u7D20\u524D\u540E\u7684\u8D85\u94FE\u63A5\u7684\u9ED8\u8BA4 target \u5904\u7406\u5B58\u5728\u5DEE\u5F02"
        },
        "HJ2001_suggestion": {
            "message": "\u4E0D\u8981\u5728 HEAD \u5143\u7D20\u4E4B\u5916\u5B9A\u4E49 BASE \u5143\u7D20\uFF0C\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u517C\u5BB9\u3002"
        },
        "HM1002": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 'marginwidth' \u548C 'marginheight' \u5C5E\u6027\u7684\u9519\u8BEF\u8BBE\u5B9A\u503C\u7684\u5904\u7406\u4E0D\u540C"
        },
        "HM1002_suggestion": {
            "message": "\u5728\u4F7F\u7528 \"marginwidth\" \u548C \"marginheight\" \u65F6\u5E94\u4E25\u683C\u9075\u7167\u89C4\u8303\u4E2D\u7684\u63CF\u8FF0\uFF0C\u8981\u5BF9\u5176\u8BBE\u5B9A\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u6574\u6570\u503C\u3002"
        },
        "HM9001": {
            "message": "Chrome Safari Firefox \u4E2D IFRAME \u5143\u7D20\u5728\u6587\u6863\u6811\u4E2D\u53D1\u751F\u53D8\u5316\u540E\u7236\u5B50\u9875\u9762\u95F4\u7684\u67D0\u4E9B\u4EA4\u4E92\u65B9\u5F0F\u4F1A\u5931\u6548"
        },
        "HM9001_suggestion": {
            "message": "\u6839\u636E\u4E0A\u9762\u6240\u5F97\u7684\u7ED3\u679C\uFF0C\u63A8\u8350\u4F7F\u7528 document.getElementById(\"IFRAME\").contentWindow.document \u83B7\u53D6 IFRAME \u5143\u7D20\u5185\u9875\u9762\u7684 document \u5BF9\u8C61\uFF0C\u4E14\u5BF9\u4E8E\u5728\u6587\u6863\u6811\u4E2D\u79FB\u52A8\u4F4D\u7F6E\u540E\u7684 IFRAME \u5143\u7D20\u4E5F\u6709\u5F88\u597D\u7684\u517C\u5BB9\u6027\u3002\u540C\u65F6\u5E94\u907F\u514D\u5BF9\u8DE8\u57DF\u7684\u7236\u5B50\u9875\u9762\u4EA4\u4E92\u3002"
        },
        "HO1002": {
            "message": "IMG \u5143\u7D20\u7684 src \u5C5E\u6027\u4E3A\u7A7A\u65F6\u5176\u5C3A\u5BF8\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u4E0D\u4E00\u81F4"
        },
        "HO1002_suggestion": {
            "message": "\u4E3A\u4E86\u9632\u6B62\u8FD9\u79CD\u65E0 \"src\" \u7684 IMG \u5143\u7D20\u5BF9\u9875\u9762\u4EA7\u751F\u5E03\u5C40\u5F71\u54CD\uFF0C\u9700\u8981\u8BBE\u7F6E\u8FD9\u79CD IMG \u7684 \u2018display\u2019 \u7279\u6027\u4E3A 'none'\u3002"
        },
        "HO1007": {
            "message": "Firefox Opera \u4E2D OBJECT \u5143\u7D20\u7684\u9ED8\u8BA4\u5C3A\u5BF8\u4E3A\u4E0D\u53EF\u89C6"
        },
        "HO1007_suggestion": {
            "message": "OBJECT \u5143\u7D20\u4E3A\u66FF\u6362\u5143\u7D20\uFF0C\u5E94\u4E3A OBJECT \u5143\u7D20\u8BBE\u7F6E\u4E00\u4E2A\u660E\u786E\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002"
        },
        "HO3003": {
            "message": "IE6 IE7 IE8(Q) \u4E2D IMG \u5143\u7D20\u7684 alt \u5C5E\u6027\u5728\u6CA1\u6709 title \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\u4F1A\u88AB\u5F53\u4F5C\u63D0\u793A\u4FE1\u606F\u4F7F\u7528"
        },
        "HO3003_suggestion": {
            "message": "\u82E5\u7528\u6237\u9700\u8981\u663E\u793A\u63D0\u793A\u6846\uFF0C\u5219\u6307\u5B9A title \u5C5E\u6027\uFF1B"
        },
        "HO3004": {
            "message": "IE6 \u4E0D\u652F\u6301 PNG24 \u683C\u5F0F\u56FE\u7247\u7684\u534A\u900F\u660E\u6548\u679C"
        },
        "HO3004_suggestion": {
            "message": "\u4F7F\u7528 IE \u4E13\u6709\u6EE4\u955C AlphaImageLoader Filter \u6765\u4FEE\u590D IE6 \u900F\u660E\u901A\u9053\u95EE\u9898\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003 MSDN \u8BF4\u660E\uFF1A  http://msdn.microsoft.com/en-us/library/ms532969(VS.85).aspx "
        },
        "HO8001": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E0B\u4F7F\u7528 OBJECT \u5143\u7D20\u548C EMBED \u5143\u7D20\u5D4C\u5165 Flash \u5B58\u5728\u5DEE\u5F02"
        },
        "HO8001_suggestion": {
            "message": "\u53EF\u7EDF\u4E00\u4F7F\u7528 EMBED \u5143\u7D20\u5D4C\u5165 Flash\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u56E0\u53C2\u6570\u4E0D\u7EDF\u4E00\u5BFC\u81F4\u7684\u517C\u5BB9\u6027\u95EE\u9898\u3002"
        },
        "HO9005": {
            "message": "\u53EA\u6709 IE6 \u4E2D\u7ED9 IMG \u8BBE\u7F6E\u76F8\u540C\u7684 src \u65F6\u4F1A\u91CD\u8F7D\u56FE\u7247"
        },
        "HO9005_suggestion": {
            "message": "\u5982\u679C\u9700\u8981\u91CD\u590D\u8BBE\u7F6E\u76F8\u540C\u7684 src \u503C\u65F6\uFF0C\u5747\u89E6\u53D1 IMG \u7684 onload \u4E8B\u4EF6\uFF0C\u6216\u8005\u9700\u8981\u6BCF\u6B21\u5747\u4ECE\u670D\u52A1\u5668\u7AEF\u4E0B\u8F7D\u56FE\u7247\u6570\u636E\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u91C7\u7528\u56FE\u7247\u5730\u5740\u540E\u52A0\u4E0A\u968F\u673A\u6570\u6216\u5F53\u524D\u65F6\u95F4\u6233\u53C2\u6570\u7684\u624B\u6BB5\uFF0C\u907F\u514D\u5185\u5BB9\u88AB\u7F13\u5B58\u3002"
        },
        "HO9006": {
            "message": "Firefox Opera \u4E0D\u652F\u6301\u901A\u8FC7\u4E3A OBJECT \u5143\u7D20\u8BBE\u7F6E classid \u5F15\u5165 Windows \u4E0B\u7684 Media Player \u6216 Flash \u63D2\u4EF6"
        },
        "HO9006_suggestion": {
            "message": "\u7531\u4E8E\u67D0\u4E9B\u6D4F\u89C8\u5668\u539F\u751F\u65E0\u6CD5\u652F\u6301 OBJECT \u5143\u7D20\u4F7F\u7528 classid \u5C5E\u6027\u5F15\u5165 Media Player \u63D2\u4EF6\uFF0C\u6240\u4EE5\u4E3A\u4FDD\u8BC1\u6700\u5927\u7684\u517C\u5BB9\u6027\uFF0C\u5E94\u907F\u514D\u4F7F\u7528\u6B64\u65B9\u5F0F\u5728\u9875\u9762\u4E2D\u64AD\u653E\u5A92\u4F53\u6587\u4EF6\u3002"
        },
        "HO9008": {
            "message": "IE Opera \u4E2D\u53EF\u4EE5\u901A\u8FC7 MAP \u5143\u7D20\u7684 id \u5C5E\u6027\u4E0E IMG \u5143\u7D20\u76F8\u5173\u8054"
        },
        "HO9008_suggestion": {
            "message": "\u82E5\u9700\u8981 IMG \u5143\u7D20\u4E0E MAP \u5143\u7D20\u76F8\u5173\u8054\uFF0C\u6CE8\u610F\u901A\u8FC7 IMG \u5143\u7D20\u7684 usemap \u5C5E\u6027\u5173\u8054\u7684 MAP \u5143\u7D20\u7684 name \u5C5E\u6027\u7684\u503C\u3002"
        },
        "HR9001": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E8E\u5B57\u7B26\u7F16\u7801\u522B\u540D\u652F\u6301\u7684\u5BBD\u6CDB\u7A0B\u5EA6\u5B58\u5728\u5DEE\u5F02"
        },
        "HR9001_suggestion": {
            "message": "\u9996\u5148\uFF0C\u5BF9\u4E8E\u52A8\u6001\u9875\u9762\u5FC5\u987B\u786E\u4FDD HTTP \"Content-Type\" \u5934\u5B57\u6BB5\u7684 \"charset\" \u53C2\u6570\u4E0E\u9875\u9762\u81EA\u8EAB\u7F16\u7801\u76F8\u7B26\uFF0C\u4E14\u52A1\u5FC5\u5728\u9875\u9762\u7684 META \u5143\u7D20\u4E2D\u4E5F\u58F0\u660E\u76F8\u7B26\u7684\u5B57\u7B26\u7F16\u7801\u4FE1\u606F\u3002\u5BF9\u4E8E\u9759\u6001\u9875\u9762\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u9875\u9762\u4E2D META \u5143\u7D20\u58F0\u660E\u4E2D \"http-equiv\" \u4E3A \"Content-Type\" \u5BF9\u5E94\u7684\u503C\u4E2D\u7684 \"charset\" \u7684\u503C\u4E0E\u9875\u9762\u81EA\u8EAB\u7F16\u7801\u76F8\u7B26\u3002"
        },
        "HS9001": {
            "message": "IE Opera \u4E2D src \u5C5E\u6027\u4E3A\u7A7A\u7684 SCRIPT \u5143\u7D20\u5185\u7684\u811A\u672C\u4E0D\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4E14\u5185\u8054\u811A\u672C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u5176\u6240\u5728 SCRIPT \u5143\u7D20\u7684 src \u5C5E\u6027\u5F15\u5165\u65B0\u7684\u5916\u90E8\u811A\u672C\u6587\u4EF6"
        },
        "HS9001_suggestion": {
            "message": "\u4E0D\u5728\u8BBE\u5B9A\u4E86 src \u5C5E\u6027\u7684 SCRIPT \u5143\u7D20\u5185\u7F16\u5199\u811A\u672C\u3002"
        },
        "HT1001": {
            "message": "IE6 IE7 IE8(Q) \u4F1A\u5FFD\u7565 OBJECT \u548C IFRAME \u6807\u7B7E\u4E4B\u540E\u7684\u7A7A\u767D\u7B26"
        },
        "HT1001_suggestion": {
            "message": "\u82E5\u4E0D\u5E0C\u671B\u51FA\u73B0\u7A7A\u683C\uFF0C\u53EF\u4EE5\u5C06 IFRAME OBJECT \u5143\u7D20\u8BBE\u7F6E\u4E3A\u5757\u7EA7\u5143\u7D20\u3002"
        },
        "HT1002": {
            "message": "IE Opera \u5BF9 OBJECT \u5143\u7D20\u4E4B\u524D\u7684 'non-breaking space' \u5904\u7406\u6709\u8BEF"
        },
        "HT1002_suggestion": {
            "message": "\u5408\u7406\u7684\u8BBE\u7F6E\u5BB9\u5668\u53CA OBJECT \u5143\u7D20\u7684\u5BBD\u5EA6\u3002"
        },
        "HT1003": {
            "message": "Chrome \u548C Safari \u4E2D BR \u5143\u7D20\u524D\u7684\u7A7A\u767D\u7B26\u4E0D\u4F1A\u88AB\u5FFD\u7565"
        },
        "HT1003_suggestion": {
            "message": "\u5220\u9664 BR \u5143\u7D20\u4E4B\u524D\u591A\u4F59\u7684\u7A7A\u767D\u7B26\u3002"
        },
        "HY1005": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u5BF9 UL OL DL \u5185\u5305\u542B\u975E\u5217\u8868\u5143\u7D20\u7684\u5904\u7406\u8DDF\u5176\u4ED6\u6D4F\u89C8\u5668\u4E0D\u540C"
        },
        "HY1005_suggestion": {
            "message": "\u867D\u7136 HTML 4.01 \u89C4\u8303\u4E2D\u6CA1\u6709\u660E\u786E\u6307\u51FA\u5217\u8868\u5143\u7D20\u7684\u5144\u5F1F\u5143\u7D20\u5FC5\u987B\u662F\u540C\u4E00\u5217\u8868\u5143\u7D20\uFF1B\u4F46\u662F\u6839\u636E HTML \u8BED\u4E49\u5316\u7406\u5FF5\uFF0C\u5EFA\u8BAE\u4E0D\u8981\u5728\u5217\u8868\u5143\u7D20 LI DD DT \u4E4B\u540E\u63D2\u5165\u5176\u4ED6\u5143\u7D20\u3002"
        },
        "HY8002": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u540C\u4E00\u5143\u7D20\u91CD\u590D\u5B9A\u4E49\u7684 style \u5C5E\u6027\u4F1A\u88AB\u5408\u5E76"
        },
        "HY8002_suggestion": {
            "message": "\u4E0D\u8981\u4F9D\u8D56 IE \u7684\u5BB9\u9519\u673A\u5236\uFF0C\u907F\u514D\u91CD\u590D\u5B9A\u4E49 HTML \u5143\u7D20\u5C5E\u6027\u3002"
        },
        "HY8003": {
            "message": "IE6 IE7 IE8(Q) Firefox(Q) Opera(Q) \u4F1A\u81EA\u52A8\u4FEE\u590D\u88AB\u5927\u62EC\u53F7\u5305\u542B\u7684 style \u5C5E\u6027\u7684\u503C"
        },
        "HY8003_suggestion": {
            "message": "\u4E0D\u8981\u5728 'style' \u7684\u5C5E\u6027\u503C\u4E2D\u4F7F\u7528\u5927\u62EC\u53F7\u7B49\u7B26\u53F7\u5305\u542B\u6837\u5F0F\u7279\u6027\uFF0C\u76F4\u63A5\u4E66\u5199\u6837\u5F0F\u4EE3\u7801\u5373\u53EF\u907F\u514D\u6B64\u7C7B\u95EE\u9898\u3002"
        },
        "HY8006": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u672A\u95ED\u5408\u6807\u7B7E\u7684\u5BB9\u9519\u65B9\u5F0F\u4E0D\u540C"
        },
        "HY8006_suggestion": {
            "message": "\u7F16\u5199\u4EE3\u7801\u65F6\u8981\u6CE8\u610F\uFF0C\u4E0D\u8981\u9057\u5931\u5E94\u6709\u7684\u95ED\u5408\u6807\u7B7E\uFF0C\u4EE5\u786E\u4FDD\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u90FD\u80FD\u6309\u7167\u9884\u671F\u7684\u6587\u6863\u7ED3\u6784\u6765\u6E32\u67D3\u9875\u9762\u3002"
        },
        "HY9001": {
            "message": "Safari \u4E2D\u9519\u8BEF\u7684\u6CE8\u91CA\u5C06\u5BFC\u81F4\u90E8\u5206 JavaScript \u4EE3\u7801\u65E0\u6CD5\u6267\u884C"
        },
        "HY9001_suggestion": {
            "message": "SCRIPT \u6807\u8BB0\u5185\u5982\u6709 HTML \u6CE8\u91CA\u6807\u8BB0\uFF0C\u8BF7\u4ED4\u7EC6\u68C0\u67E5\uFF0C\u6CE8\u610F\u4ED6\u4EEC\u7684\u95ED\u5408\u60C5\u51B5\u3002"
        },
        "KB001": {
            "message": "\u517C\u5BB9\u6027\u95EE\u9898\u4E0E\u6D4F\u89C8\u5668\u7684\u5185\u6838\u53CA\u6E32\u67D3\u6A21\u5F0F"
        },
        "RA3002": {
            "message": "IE8  Chrome Safari \u4E2D\u5177\u6709\u52A0\u7C97\u6548\u679C\u7684 HTML \u5143\u7D20\u7684 'font-weight' \u7279\u6027\u4F1A\u53D7\u5230\u5176\u7956\u5148\u5143\u7D20\u7684\u5F71\u54CD"
        },
        "RA3002_suggestion": {
            "message": "\u6700\u597D\u4E3A\u5143\u7D20\u8BBE\u7F6E\u7EDD\u5BF9\u660E\u786E\u7684 'font-weight' \u7279\u6027\u7684\u503C\uFF0C\u907F\u514D\u4F7F\u7528 bolder\u3001lighter \u8FD9\u7C7B\u76F8\u5BF9\u91CF\u4EE5\u53CA\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u6837\u5F0F\u3002"
        },
        "RA8001": {
            "message": "IE6 IE7 IE8(Q) \u4E0D\u652F\u6301 CSS \u7279\u6027\u7684 'inherit' \u503C"
        },
        "RA8001_suggestion": {
            "message": "\u4F7F\u7528\u6807\u51C6\u6A21\u5F0F\u6E32\u67D3\u9875\u9762\uFF1B"
        },
        "RA8003": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u5B8C\u5168\u652F\u6301 !important \u89C4\u5219"
        },
        "RA8003_suggestion": {
            "message": "\u8FD9\u662F\u6D4F\u89C8\u5668\u7684 Bug \u5BFC\u81F4\uFF0C\u65E0\u6CD5\u901A\u8FC7\u5E38\u89C4\u65B9\u5F0F\u89E3\u51B3\u3002\u4E0D\u8FC7\uFF0C\u4E00\u822C '!important' \u89C4\u5219\u5E38\u5E38\u7528\u4E8E CSS hack \u4EE5\u533A\u5206 IE6 \u4E0E\u5176\u4ED6\u6D4F\u89C8\u5668\uFF0C\u5176\u4F5C\u4E3A hack \u5B58\u5728\u7684\u610F\u4E49\u5DF2\u5927\u4E8E\u5176\u672C\u8EAB\u7684\u542B\u4E49\u3002"
        },
        "RB1001": {
            "message": "IE6 IE7 IE8(Q) \u8D1F\u8FB9\u8DDD (margin) \u5BFC\u81F4\u5143\u7D20\u6EA2\u51FA hasLayout \u5BB9\u5668\u65F6\u663E\u793A\u5F02\u5E38"
        },
        "RB1001_suggestion": {
            "message": "\u9996\u5148\u9700\u8981\u4FDD\u8BC1\u5BB9\u5668\u5728IE\u4E2D\u89E6\u53D1 hasLayout \u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7zoom:1\u5B9E\u73B0\u3002"
        },
        "RB1003": {
            "message": "Firefox \u4E2D 'display:table '\u7684\u5143\u7D20\u7684\u5916\u8FB9\u8DDD\u4E0D\u4F1A\u4E0E\u5305\u542B\u5757\u7684\u5916\u8FB9\u8DDD\u6298\u53E0"
        },
        "RB1003_suggestion": {
            "message": "\u7531\u4E8E IE6 IE7 IE8(Q) Firefox \u5143\u7D20\u7684 'margin' \u5904\u7406\u4E0E W3C \u89C4\u8303\u4E2D\u7684\u5DEE\u5F02\uFF0C\u82E5\u6211\u4EEC\u9700\u8981\u5229\u7528 \"margin collapse\" \u8FBE\u5230\u67D0\u4E9B\u5E03\u5C40\u6548\u679C\u65F6\uFF0C\u5728\u8FD9\u51E0\u79CD\u6D4F\u89C8\u5668\u4E2D\u53EF\u80FD\u4F1A\u7531\u4E8E\u6CA1\u6709\u53D1\u751F \"margin collapse\" \u800C\u51FA\u73B0 \"\u989D\u5916\u8FB9\u8DDD\" \u7684\u60C5\u51B5\u3002\u6240\u4EE5\u5E94\u907F\u514D\u4E3A\u8868\u683C\u8BBE\u7F6E\u4E0A\u4E0B\u8FB9\u8DDD\uFF0C\u4EE5\u53CA\u5BFC\u81F4\u5176 \"margin collapse\" \u7684\u53D1\u751F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E3A\u8868\u683C\u7684\u7236\u5143\u7D20\u4F7F\u7528 'padding' \u4EE3\u66FF\u8868\u683C\u5143\u7D20\u7684 'margin' \u3002"
        },
        "RB1005": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u7236\u5143\u7D20\u6216\u5B50\u5143\u7D20\u89E6\u53D1 hasLayout \u65F6\u5B50\u5143\u7D20\u7684 margin \u503C\u4E0E\u671F\u671B\u503C\u4E0D\u7B26"
        },
        "RB1005_suggestion": {
            "message": "\u4E3A\u5BB9\u5668\u663E\u5F0F\u5730\u8BBE\u7F6E\u9AD8\u5EA6\u3002\u82E5\u5BB9\u5668\u9AD8\u5EA6\u4E0D\u5B9A\uFF0C\u5219\u8981\u907F\u514D\u5728\u89E6\u53D1\u4E86 hasLayout \u7684\u5BB9\u5668\u5185\u7684\u6D6E\u52A8\u5B50\u5143\u7D20\u4E0A\u8BBE\u7F6E 'margin-bottom' \u7279\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E3A\u5BB9\u5668\u8BBE\u7F6E 'padding-bottom' \u8FBE\u5230\u76F8\u4F3C\u7684\u6548\u679C\u3002"
        },
        "RB5002": {
            "message": "Chrome Safari \u4E2D\u4E3A\u5904\u4E8E\u6D6E\u52A8\u5143\u7D20\u540E\u521B\u5EFA\u4E86 in-flow \u7684 Block Formatting Context \u7684\u5143\u7D20\u8BBE\u7F6E\u7684 'margin-left' \u6216 'margin-right' \u7279\u6027\u4F1A\u51FA\u9519"
        },
        "RB5002_suggestion": {
            "message": "\u4E3A\u8BE5\u521B\u5EFA\u4E86 BFC \u7684\u5143\u7D20\u8BBE\u7F6E\u4E00\u4E2A\u660E\u786E\u7684\u5BBD\u5EA6\u3002"
        },
        "RB8004": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u6D6E\u52A8\u5143\u7D20\u548C\u5B9A\u4F4D\u5143\u7D20\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5F71\u54CD\u666E\u901A\u6D41\u4E2D\u6BD7\u90BB 'margin' \u7684\u6298\u53E0"
        },
        "RB8004_suggestion": {
            "message": "1. \u6839\u636E\u5177\u4F53\u9700\u6C42\uFF0C\u8C03\u6574 'margin' \u7684\u4F4D\u7F6E\u548C\u5927\u5C0F\uFF1B"
        },
        "RC3001": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E2D IFRAME \u5143\u7D20 'background-color' \u7279\u6027\u9ED8\u8BA4\u503C\u4E0D\u662F transparent"
        },
        "RC3001_suggestion": {
            "message": "IFRAME \u900F\u660E\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5176\u900F\u660E\uFF0C\u8FD9\u65F6\u9700\u8981\u4E3A IFRAME \u5143\u7D20\u6DFB\u52A0\u5C5E\u6027 allowtransparency=\"true\"\uFF0C"
        },
        "RC3002": {
            "message": "IE6 \u4E0D\u652F\u6301 HTML\u3001BODY \u4EE5\u5916\u5143\u7D20\u7684 background-attachment:fixed"
        },
        "RC3002_suggestion": {
            "message": "\u907F\u514D\u4E3A\u975E BODY\u3001HTML \u5143\u7D20\u8BBE\u7F6E 'background-attachment:fixed' \u7279\u6027\u3002"
        },
        "RC3003": {
            "message": "IE6 IE7 IE8(Q) \u4E0B 'background-attachment : scroll' \u65F6\u80CC\u666F\u56FE\u7247\u4F1A\u968F\u7740\u5143\u7D20\u5185\u5BB9\u6EDA\u52A8"
        },
        "RC3003_suggestion": {
            "message": "\u82E5\u9700\u8981\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E0B\u5143\u7D20\u56FE\u7247\u4E0D\u968F\u5143\u7D20\u5185\u5BB9\u6EDA\u52A8\uFF0C\u5219\u4E0D\u7ED9\u5143\u7D20\u8BBE\u7F6E\u4EFB\u4F55\u80CC\u666F\uFF0C\u5E76\u4E14\u5728\u5143\u7D20\u7684\u7236\u5143\u7D20\u4E0A\u8BBE\u7F6E\u80CC\u666F\u56FE\uFF0C\u4F8B\u5982\uFF1A"
        },
        "RD1002": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E2D 'width' \u6216 'height' \u7684\u8BBE\u5B9A\u503C\u5728\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u5176\u5185\u5BB9\u65F6\u5C06\u88AB\u6491\u5927"
        },
        "RD1002_suggestion": {
            "message": "\u4F7F\u7528\u80FD\u89E6\u53D1\u6807\u51C6\u6A21\u5F0F (S) \u7684 DTD\uFF0C\u4EE5\u5C06\u53D7\u6B64\u95EE\u9898\u5F71\u54CD\u7684\u6D4F\u89C8\u5668\u8303\u56F4\u7F29\u5C0F\u5230\u4EC5 IE6(S)\u3002"
        },
        "RD1003": {
            "message": "\u96F6\u5BBD\u9AD8\u7684 IFRAME \u5143\u7D20\u7684\u5B9E\u9645\u5C3A\u5BF8\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E2D\u6709\u5DEE\u5F02"
        },
        "RD1003_suggestion": {
            "message": "\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u4F7F\u7528 'visibility:hidden' \u6216\u8005 'display:none' \u9690\u85CF IFRAME \u3002"
        },
        "RD1011": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u884C\u5185\u975E\u66FF\u6362\u5143\u7D20\u4E2D\u7684\u975E\u6587\u672C\u6587\u5B57\u4F1A\u6491\u9AD8\u5176\u9AD8\u5EA6"
        },
        "RD1011_suggestion": {
            "message": "\u9488\u5BF9\u4E0D\u540C\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u91C7\u53D6\u5982\u4E0B\u65B9\u5F0F\u6765\u907F\u514D\u6B64\u95EE\u9898\uFF1A"
        },
        "RD1012": {
            "message": "\u4E0D\u540C\u6D4F\u89C8\u5668\u5185 'line-height' \u6837\u5F0F\u8BBE\u7F6E\u4F1A\u5F71\u54CD\u4E0D\u540C\u884C\u5185\u66FF\u6362\u5143\u7D20\u7684\u663E\u793A\u9AD8\u5EA6"
        },
        "RD1012_suggestion": {
            "message": "\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 'line-height' \u4E3A INPUT[type=text]\u3001INPUT[type=password]\u3001INPUT[type=button]\u3001INPUT[type=file]\u3001input[type=submit] \u548C BUTTON \u6807\u8BB0\u8BBE\u7F6E \u2018line-height\u2019\uFF0C\u800C\u5E94\u6539\u7528\u89C4\u8303\u5185\u8BF4\u660E\u7684 'height' \u5C5E\u6027\u3002 "
        },
        "RD1013": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u89E6\u53D1 hasLayout \u7684\u7A7A\u5757\u7EA7\u975E\u66FF\u6362\u5143\u7D20\u7684\u9AD8\u5EA6\u4E0D\u662F0"
        },
        "RD1013_suggestion": {
            "message": "\u5982\u679C\u60F3\u8BA9\u4E00\u4E2A\u89E6\u53D1\u4E86 hasLayout \u7684\u5757\u7EA7\u975E\u66FF\u6362\u5143\u7D20\u7684\u9AD8\u5EA6\u4E3A0\uFF0C\u53EF\u4EE5\u7ED9\u8FD9\u4E2A\u7A7A\u7684\u5757\u7EA7\u975E\u66FF\u6362\u5143\u7D20\u589E\u52A0\u4E00\u4E2A\u7A7A\u7684\u6CE8\u91CA\u5757\uFF1A"
        },
        "RD1014": {
            "message": "\u884C\u5185\u975E\u66FF\u6362\u5143\u7D20\u7684\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u7684\u8BBE\u7F6E\u4EC5\u5728 IE \u6DF7\u6742\u6A21\u5F0F\u4E2D\u751F\u6548"
        },
        "RD1014_suggestion": {
            "message": "\u5728\u9875\u9762\u5F00\u5934\u6DFB\u52A0\u003C!DOCTYPE html\u003E\uFF0C\u4F7F\u9875\u9762\u5DE5\u4F5C\u5728\u6807\u51C6\u6A21\u5F0F\u4E0B\u3002"
        },
        "RD1016": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u5E38\u7528\u884C\u5185\u66FF\u6362\u5143\u7D20\u7684 'baseline' \u4F4D\u7F6E\u7406\u89E3\u4E0D\u540C"
        },
        "RD1016_suggestion": {
            "message": "\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u65F6\uFF0C\u5E94\u907F\u514D\u4F7F\u7528 'baseline' \u5BF9\u9F50\u65B9\u5F0F\uFF0C\u9700\u4E3A\u5143\u7D20\u6307\u5B9A 'vertical-align' \u503C\u975E 'baseline'\uFF0C\u63A8\u8350\u4F7F\u7528 'vertical-align:bottom' \u6216  'vertical-align:top'\u3002"
        },
        "RD1021": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D\u5F53\u5BB9\u5668\u5143\u7D20 shrink-to-fit \u65F6\u5BB9\u5668\u5185 MARQUEE \u6807\u7B7E\u7684\u8BA1\u7B97\u5BBD\u5EA6\u4E0D\u4E00\u81F4"
        },
        "RD1021_suggestion": {
            "message": "\u7ED9 MARQUEE \u5143\u7D20\u5B9A\u4E49\u5177\u4F53\u7684\u5BBD\u5EA6\uFF0C\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u517C\u5BB9\u3002"
        },
        "RD3020": {
            "message": "\u5728\u4E0D\u540C\u7684\u6587\u6863\u6A21\u5F0F\u4E2D\uFF0C\u5F53\u552F\u4E00\u7684\u975E\u8868\u5355\u63A7\u4EF6\u7C7B\u884C\u5185\u66FF\u6362\u5143\u7D20\u5B58\u5728\u4E8E\u5176\u5305\u5BB9\u5757\u4E2D\u65F6\uFF0C\u5176\u7236\u6846\u7684\u884C\u9AD8\u5E76\u4E0D\u4E00\u5B9A\u4F1A\u8BA1\u7B97\u6587\u672C\u57FA\u7EBF\u9AD8\u5EA6\u3002"
        },
        "RD3020_suggestion": {
            "message": "\u5982\u679C\u5728 \u975E\u6807\u51C6\u6A21\u5F0F \u4E2D\uFF0C\u9700\u8981\u7236\u5BB9\u5668\u5728\u4EC5\u6709\u884C\u5185\u66FF\u6362\u5143\u7D20\u7684\u60C5\u51B5\u4E0B\u8BA1\u7B97\u51FA\u5305\u542B\u6587\u672C\u57FA\u7EBF\u9AD8\u5EA6\u7684\u884C\u9AD8\u503C\uFF0C\u5219\u5FC5\u987B\u52A0\u5165\u5176\u4ED6\u884C\u5185\u6587\u672C\u5143\u7D20\u3002"
        },
        "RD5017": {
            "message": "Safari Chrome \u4E2D\u884C\u6846\u9AD8\u5EA6\u8BA1\u7B97\u6709\u8BEF"
        },
        "RD5017_suggestion": {
            "message": "\u4E3A\u4E86\u53D6\u5F97\u6B63\u5E38\u5E03\u5C40\uFF0C\u5EFA\u8BAE 'line-height' \u8BA1\u7B97\u503C\u6C38\u8FDC\u5927\u4E8E 'font-size' \u8BA1\u7B97\u503C\u8BBE\u7F6E\u3002"
        },
        "RD5018": {
            "message": "Safari Chrome \u4E2D\u5143\u7D20 'overflow' \u503C\u4E3A\u975E\u9ED8\u8BA4\u503C\u65F6\u5176\u6700\u540E\u4E00\u4E2A\u5185\u8054\u5B50\u5143\u7D20\u7684\u534A\u5DEE\u5F02\u9AD8\u5EA6\u88AB\u5FFD\u7565"
        },
        "RD5018_suggestion": {
            "message": "\u4E3A\u4E86\u51C6\u786E\u5F97\u5230\u5BB9\u5668\u9AD8\u5EA6\uFF0C\u5EFA\u8BAE\u907F\u514D\u4F7F\u7528\u884C\u9AD8\u4E3A\u884C\u5185\u5143\u7D20\u6307\u5B9A\u9AD8\u5EA6\uFF0C\u800C\u5E94\u6539\u7528\u5757\u6807\u8BB0\uFF0C\u5E76\u4E14\u660E\u786E\u7684\u6307\u5B9A\u5176 'height' \u503C\u3002"
        },
        "RD8001": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D 'width' \u548C 'height' \u5728\u67D0\u4E9B\u5143\u7D20\u4E0A\u7684\u4F5C\u7528\u4F4D\u7F6E\u6709\u5DEE\u5F02"
        },
        "RD8001_suggestion": {
            "message": "1. \u4F7F\u7528\u80FD\u89E6\u53D1\u6807\u51C6\u6A21\u5F0F (S) \u7684 DTD"
        },
        "RD8004": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u6D6E\u52A8\u5143\u7D20\u5BBD\u5EA6\u7684 shrink-to-fit \u7B97\u6CD5\u4E0E\u6807\u51C6\u89C4\u5B9A\u7684\u7B97\u6CD5\u4E0D\u540C"
        },
        "RD8004_suggestion": {
            "message": "\u8FD9\u4E2A\u95EE\u9898\u7684\u5F71\u54CD\u8F83\u5927\uFF0C\u907F\u514D\u8BE5\u95EE\u9898\u7684\u6700\u76F4\u63A5\u7684\u65B9\u5F0F\u662F\u7ED9\u6D6E\u52A8\u975E\u66FF\u6362\u5143\u7D20\u6307\u5B9A\u4E00\u4E2A\u5BBD\u5EA6\uFF0C\u800C\u4E0D\u4F7F\u7528\u5176\u9ED8\u8BA4\u503C 'auto'\uFF0C\u4ECE\u800C\u907F\u514D\u5176\u5BBD\u5EA6\u4E3A shrink-to-fit\uFF0C\u4EE5\u4F7F\u9875\u9762\u5E03\u5C40\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u8868\u73B0\u4E00\u81F4\u3002"
        },
        "RD8005": {
            "message": "Chrome Safari \u4E2D\u6D6E\u52A8\u5143\u7D20\u4E4B\u524D\u7684\u975E inline \u7EA7\u5143\u7D20\u4F1A\u5BF9\u5305\u542B\u5757\u7684 shrink-to-fit \u5BBD\u5EA6\u8BA1\u7B97\u6709\u5F71\u54CD"
        },
        "RD8005_suggestion": {
            "message": "\u5728\u5BB9\u5668\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\u3001\u6D6E\u52A8\u6216\u884C\u5185\u5757\u5143\u7D20\u4E14\u6CA1\u6709\u660E\u786E\u8BBE\u5B9A\u5BBD\u5EA6\u65F6\uFF0C\u82E5\u6D6E\u52A8\u5143\u7D20\u4E4B\u524D\u51FA\u73B0\u975E inline \u7EA7\u5143\u7D20\uFF0C\u5219\u8981\u5C0F\u5FC3\u8FD9\u4E2A\u5143\u7D20\u5BF9\u5BB9\u5668 shrink-to-fit \u5BBD\u5EA6\u7684\u5F71\u54CD\u3002\u53EF\u4EE5\u4E3A\u5BB9\u5668\u660E\u786E\u7684\u8BBE\u5B9A\u4E00\u4E2A\u5BBD\u5EA6\u3002"
        },
        "RD8006": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u53F3\u6D6E\u52A8\u5143\u7D20\u4F1A\u6491\u5927\u5176\u7956\u5148\u7EA7\u5143\u7D20\u7684\u5BBD\u5EA6"
        },
        "RD8006_suggestion": {
            "message": "\u5982\u679C\u6709\u4E00\u4E2A\u53F3\u6D6E\u52A8\u5143\u7D20\uFF0C\u5E94\u6CE8\u610F\u907F\u514D\u5176\u7956\u5148\u7EA7\u5143\u7D20\u7684\u5BBD\u5EA6\u4E3A shrink-to-fit\uFF0C\u5373\u7ED9\u5B83\u4EEC\u8BBE\u5B9A\u4E00\u4E2A\u660E\u786E\u7684\u5BBD\u5EA6\u3002\u4EE5\u4F7F\u9875\u9762\u5E03\u5C40\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u8868\u73B0\u4E00\u81F4\u3002"
        },
        "RD8007": {
            "message": "IE Opera \u8BA1\u7B97 shrink-to-fit \u7684\u5BBD\u5EA6\u65F6\u4F1A\u8003\u8651\u6D6E\u52A8\u5143\u7D20\u7684\u5BBD\u5EA6"
        },
        "RD8007_suggestion": {
            "message": "\u5C3D\u91CF\u4E3A\u975E\u66FF\u6362\u6D6E\u52A8\u5143\u7D20\u3001\u975E\u66FF\u6362\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u3001\u975E\u66FF\u6362\u884C\u5185\u5757\u5143\u7D20\u663E\u5F0F\u5730\u8BBE\u7F6E\u4E00\u4E2A\u5BBD\u5EA6\uFF0C\u9632\u6B62\u6D4F\u89C8\u5668\u5728 'width:auto' \u65F6\u5BF9\u4E8E shrink-to-fit \u7684\u5BBD\u5EA6\u8BA1\u7B97\u65B9\u5F0F\u4E0D\u540C\u9020\u6210\u5E03\u5C40\u4E0A\u7684\u5DEE\u5F02\u3002"
        },
        "RD8008": {
            "message": "IE6 IE7(Q) IE8(Q) \u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u65E0\u6CD5\u6839\u636E\u5176\u56DB\u4E2A\u65B9\u5411\u7684\u504F\u79FB\u91CF\u81EA\u52A8\u8BA1\u7B97\u5176\u5C3A\u5BF8"
        },
        "RD8008_suggestion": {
            "message": "\u82E5\u80FD\u4E3A\u975E\u66FF\u6362\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u8BBE\u5B9A\u56FA\u5B9A\u7684\u5BBD\u5EA6\u53CA\u9AD8\u5EA6\uFF0C\u5219\u5C3D\u91CF\u4E0D\u4F7F\u7528\u6B64\u65B9\u5F0F\u81EA\u52A8\u8BA1\u7B97\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684 'width' \u53CA 'height'\u3002"
        },
        "RD8009": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u884C\u6846\u7684\u9876\u8FB9\u4E0E\u5E95\u8FB9\u4F4D\u7F6E\u8BC6\u522B\u6709\u8BEF"
        },
        "RD8009_suggestion": {
            "message": "\u4E3A\u4E86\u53D6\u5F97\u6B63\u5E38\u5E03\u5C40\uFF0C\u5EFA\u8BAE 'line-height' \u8BA1\u7B97\u503C\u8BBE\u7F6E\u6C38\u8FDC\u5927\u4E8E 'font-size' \u8BA1\u7B97\u503C\u8BBE\u7F6E\u3002 "
        },
        "RD8010": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301 'min-width' \u548C 'max-width' \u7279\u6027"
        },
        "RD8010_suggestion": {
            "message": "\u4F7F\u7528 Javascript \u5B9E\u73B0 'min-width' \u548C 'max-width' \u7279\u6027\u529F\u80FD\u3002"
        },
        "RD8015": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301 'min-height' \u548C 'max-height' \u7279\u6027"
        },
        "RD8015_suggestion": {
            "message": "\u4F7F\u7528 Javascript \u5B9E\u73B0 'min-height' \u548C 'max-height' \u7279\u6027\u529F\u80FD\u3002"
        },
        "RD8019": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u884C\u5185\u5143\u7D20\u7EDD\u5BF9\u5B9A\u4F4D\u540E\u7684\u9759\u6001\u4F4D\u7F6E\u7684 'top' \u7279\u6027\u8BA1\u7B97\u5B58\u5728\u5DEE\u5F02\uFF0CIE6 IE7 IE8(Q) \u8FD8\u4F1A\u8003\u8651\u534A\u5DEE\u5F02\u7684\u9AD8\u5EA6"
        },
        "RD8019_suggestion": {
            "message": "\u5728\u4F7F\u884C\u5185\u5143\u7D20\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65F6\u5019\uFF0C\u8981\u6CE8\u610F\u5176\u884C\u9AD8\u5BF9\u9759\u6001\u4F4D\u7F6E\u5E26\u6765\u7684\u5F71\u54CD\uFF0C\u660E\u786E\u8BBE\u7F6E\u5B9A\u4F4D\u7684\u5143\u7D20\u504F\u79FB\u4F4D\u7F6E\u3002"
        },
        "RD8023": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E2D\u5305\u542B\u672A\u660E\u786E\u8BBE\u5B9A\u5BBD\u5EA6\u7684\u89E6\u53D1\u4E86 hasLayout \u7684\u5143\u7D20\u7684\u5305\u542B\u5757\u7684 shrink-to-fit \u7B97\u6CD5\u6709\u8BEF"
        },
        "RD8023_suggestion": {
            "message": "\u7ED9 hasLayout \u7684\u5143\u7D20\u6307\u5B9A\u4E00\u4E2A\u5BBD\u5EA6\uFF0C\u907F\u514D IE6 IE7(Q) IE8(Q) \u4E2D\u7531\u4E8E hasLayout \u7279\u6027\u5E26\u6765\u7684\u6E32\u67D3\u95EE\u9898\u3002"
        },
        "RD8026": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E8E\u672A\u660E\u786E\u8BBE\u5B9A\u9AD8\u5EA6\u7684\u5305\u542B\u5757\u5185\u5305\u542B\u767E\u5206\u6BD4\u5355\u4F4D\u9AD8\u5EA6\u7684\u5757\u7EA7\u5143\u7D20\u6216\u884C\u5185\u5757\u5143\u7D20\u7684\u9AD8\u5EA6\u8BA1\u7B97\u5B58\u5728\u5DEE\u5F02"
        },
        "RD8026_suggestion": {
            "message": "\u8981\u5BF9\u8BBE\u7F6E\u6709\u767E\u5206\u6BD4\u9AD8\u5EA6\u7684\u5757\u7EA7\u5143\u7D20\u7684\u5305\u542B\u5757\u8BBE\u7F6E\u660E\u786E\u7684 height \u5C5E\u6027\u503C\u3002"
        },
        "RE1005": {
            "message": "IE \u6DF7\u6742\u6A21\u5F0F\u4E0B TR \u5143\u7D20\u7684\u6700\u7EC8\u9AD8\u5EA6\u59CB\u7EC8\u4E0D\u4F1A\u8D85\u8FC7\u5176\u6240\u6709 TD \u5B50\u5143\u7D20\u7684\u9AD8\u5EA6"
        },
        "RE1005_suggestion": {
            "message": "\u907F\u514D\u4E3A TR \u8BBE\u7F6E\u9AD8\u5EA6\u3002 "
        },
        "RE1006": {
            "message": "\u5355\u5143\u683C\u7684\u9AD8\u5EA6\u8BA1\u7B97\u53D7\u5176 'padding' \u548C 'line-height' \u7684\u5F71\u54CD "
        },
        "RE1006_suggestion": {
            "message": "\u907F\u514D\u4E3A TD \u5143\u7D20\u8BBE\u7F6E 'padding-top' 'padding-bottom' \u7279\u6027"
        },
        "RE1012": {
            "message": "IE6 IE7 IE8(Q) Firefox(Q) Opera(Q) \u4E2D\u7A7A\u5355\u5143\u683C\u7684\u8FB9\u6846\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u6D88\u5931"
        },
        "RE1012_suggestion": {
            "message": "\u907F\u514D\u51FA\u73B0\u7A7A\u5355\u5143\u683C\uFF0C\u4F7F\u7528 &nbsp; \u4EE3\u66FF\u7A7A\u5355\u5143\u683C\u3002"
        },
        "RE1013": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u7A7A\u5355\u5143\u683C\u7684\u4E0A\u4E0B 'padding' \u5931\u6548"
        },
        "RE1013_suggestion": {
            "message": "\u5728\u9700\u8981\u7559\u7A7A\u7684\u5355\u5143\u683C\u4E2D\u52A0\u4E00\u4E2A\u7A7A\u683C\uFF1A&nbsp; \u3002"
        },
        "RE1016": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u7A7A TABLE \u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5747\u4E3A 0"
        },
        "RE1016_suggestion": {
            "message": "\u907F\u514D\u51FA\u73B0\u7A7A TABLE \uFF0C\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u517C\u5BB9\u3002"
        },
        "RE1020": {
            "message": "IE6 IE7 IE8(Q) \u4E0D\u652F\u6301 border-spacing \u7279\u6027"
        },
        "RE1020_suggestion": {
            "message": "'border-spacing' \u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u80FD\u5F88\u597D\u7684\u652F\u6301\uFF0C\u82E5\u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u7684\u7A7A\u95F4\u76F8\u7B49\uFF0C\u53EF\u4EE5\u7528 TABLE \u7684 cellspacing \u5C5E\u6027\u4EE3\u66FF 'border-spacing' \u7279\u6027\u3002"
        },
        "RE5003": {
            "message": "WebKit \u4E2D\u67D0\u4E9B\u6761\u4EF6\u4E0B empty cell \u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E3A 0"
        },
        "RE5003_suggestion": {
            "message": "\u5728\u7A7A\u7684 TD\u3001TH \u5143\u7D20\u5185\u6DFB\u52A0 &nbsp; \u3002"
        },
        "RE8001": {
            "message": "\u56FA\u5B9A\u8868\u683C\u5E03\u5C40\u4E0B\u7684\u5404\u6D4F\u89C8\u5668\u5BF9\u4E0E\u8868\u683C\u5BBD\u5EA6\u8BA1\u7B97\u7B97\u6CD5\u4E0D\u540C"
        },
        "RE8001_suggestion": {
            "message": "\u5728 'table-layout:fixed' \u8FD9\u79CD\u56FA\u5B9A\u5E03\u5C40\u7B97\u6CD5\u4E0B\u7684\u8868\u683C\u4E2D\uFF0C\u53EF\u4EE5\u4E3A\u8868\u683C\u6700\u540E\u4E00\u5217\u4E0D\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C\u5C3D\u91CF\u6D88\u9664\u7531\u7B97\u6CD5\u5DEE\u5F02\u5E26\u6765\u7684\u5217\u7684\u5BBD\u5EA6\u5DEE\u5F02\u3002"
        },
        "RE8004": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u81EA\u52A8\u5E03\u5C40\u7684\u8868\u683C\u5728\u5176\u4E2D\u5305\u542B\u65E0\u5185\u5BB9\u7684\u5DE6\u6D6E\u52A8\u5143\u7D20\u65F6\u7684\u5BBD\u5EA6\u8BA1\u7B97\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u6709\u8BEF"
        },
        "RE8004_suggestion": {
            "message": "\u907F\u514D\u5728 TD \u5143\u7D20\u5185\u51FA\u73B0\u5DE6\u6D6E\u52A8\u3001\u5185\u5BB9\u4E3A\u7A7A\u7684\u5143\u7D20\u3002"
        },
        "RE8010": {
            "message": "IE6(Q) IE7(Q) IE8(Q) Chrome(S) Safari(S) Firefox \u5BF9\u591A\u5C42\u5D4C\u5957\u7684\u8868\u683C\u7EA7\u5143\u7D20\u767E\u5206\u6BD4\u9AD8\u5EA6\u8BA1\u7B97\u9519\u8BEF"
        },
        "RE8010_suggestion": {
            "message": "\u5C3D\u91CF\u907F\u514D\u4E3A TABLE \u7EA7\u522B\u7684\u5143\u7D20\u8BBE\u7F6E\u767E\u5206\u6BD4\u4E3A\u5355\u4F4D\u7684 'height' \u7279\u6027\uFF0C\u4EE5\u907F\u514D Firefox \u5BF9 TABLE \u7EA7\u522B\u5143\u7D20\u7684\u9AD8\u5EA6\u7B97\u6CD5 Bug\u3002"
        },
        "RE8014": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u5355\u5143\u683C\u5BF9\u9F50\u4F9D\u636E\u7684\u662F\u5143\u7D20\u7684\u539F\u59CB\u5BBD\u5EA6\u800C\u4E0D\u662F\u5176\u56E0\u67D0\u4E9B\u539F\u56E0\u88AB\u62C9\u5927\u540E\u7684\u5BBD\u5EA6"
        },
        "RE8014_suggestion": {
            "message": "\u4E0D\u8981\u540C\u65F6\u4E3A TABLE \u5143\u7D20\u53CA\u5176\u5185\u90E8\u5404\u5217\u663E\u5F0F\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C\u5F53\u9700\u8981\u5E94\u7528\u5404\u5217\u8BBE\u5B9A\u5BBD\u5EA6\u65F6\uFF0CTABLE \u5143\u7D20\u7684\u5BBD\u5EA6\u5E94\u4FDD\u6301\u9ED8\u8BA4\u7684 \"auto\" \uFF0C\u5F53\u9700\u8981\u9650\u5B9A TABLE\u7684\u5BBD\u5EA6\u65F6\uFF0C\u5E94\u81F3\u5C11\u4FDD\u8BC1\u6709\u4E00\u5217\u7684\u5BBD\u5EA6\u4E3A\u9ED8\u8BA4\u7684  \"auto\" \u3002"
        },
        "RE8015": {
            "message": "IE \u4E2D TABLE \u7B49\u8868\u683C\u7C7B\u5143\u7D20\u7684 'display' \u7279\u6027\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A 'table'\u3001'inline-table' \u4E4B\u5916\u7684\u5176\u4ED6\u5408\u6CD5\u503C\u540E\u5176 TABLE \u7279\u6027\u4E0D\u53D7\u5F71\u54CD"
        },
        "RE8015_suggestion": {
            "message": "\u907F\u514D\u6539\u53D8\u8868\u683C\u7C7B\u5143\u7D20\u7684\u9ED8\u8BA4 'display' \u7279\u6027\u3002\u82E5\u9700\u8981\u9690\u85CF\u67D0\u4E2A\u8868\u683C\u7C7B\u5143\u7D20\uFF0C\u5373\u8BBE\u5B9A\u5176 'display' \u7279\u6027\u4E3A 'none'\uFF0C\u4E4B\u540E\u9700\u8981\u6062\u590D\u5176\u7684\u53EF\u89C6\u72B6\u6001\uFF0C\u53EF\u4EE5\u4E3A\u5176\u8BBE\u5B9A\u4E00\u4E2A\u975E\u6CD5\u7684 'display' \u7279\u6027\u7684\u503C\uFF0C\u5982\uFF1ATR.style.display = '';"
        },
        "RE8017": {
            "message": "IE Firefox Opera \u7684\u6DF7\u6742\u6A21\u5F0F\u5BF9\u4E8E\u767E\u5206\u6BD4\u5355\u4F4D\u9AD8\u5EA6\u7684\u5355\u5143\u683C\u5185\u5B50\u5143\u7D20\u7684\u767E\u5206\u6BD4\u9AD8\u5EA6\u8BA1\u7B97\u9519\u8BEF"
        },
        "RE8017_suggestion": {
            "message": "\u4F7F\u7528\u6807\u51C6\u6A21\u5F0F\u2014\u2014\u003C!DOCTYPE html\u003E\uFF1B\u5C3D\u91CF\u907F\u514D\u5728\u8868\u683C\u53CA\u5757\u7EA7\u5143\u7D20\u4E0A\u4F7F\u7528\u767E\u5206\u6BD4\u9AD8\u5EA6\u3002"
        },
        "RF1001": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 '@font-face' \u89C4\u5219\u652F\u6301\u7684\u5B57\u4F53\u683C\u5F0F\u4E0D\u540C\uFF0CIE \u652F\u6301 EOT \u5B57\u4F53\uFF0CFirefox Safari Opera \u652F\u6301 TrueType \u7B49\u5B57\u4F53"
        },
        "RF1001_suggestion": {
            "message": "\u7531\u4E8E\u5404\u6D4F\u89C8\u5668\u5BF9 '@font-face' \u89C4\u5219\u5B57\u4F53\u683C\u5F0F\u652F\u6301\u5B58\u5728\u5DEE\u5F02\uFF0C\u82E5\u4EC5\u901A\u8FC7\u5B9A\u4E49\u4E00\u4E2A '@font-face' \u89C4\u5219\uFF0C\u53EF\u4EE5\u901A\u8FC7 CSS hack \u7684\u65B9\u5F0F\u5728 IE\u3001Firefox\u3001Chrome\u3001Safari\u3001Opera \u4E2D\u5F97\u5230\u76F8\u540C\u7684\u5B57\u4F53\u6548\u679C\uFF1A"
        },
        "RG1001": {
            "message": "IE6 IE7 IE8(Q) \u4E2D UL \u548C OL \u6807\u8BB0\u4E3A\u5B9E\u73B0\u653E\u7F6E LI \u5143\u7D20\u6807\u8BB0\u6846 'outside' \u8BBE\u7F6E\u65F6\u6240\u4F7F\u7528\u7684\u6837\u5F0F\u8BBE\u5B9A\u4E0D\u540C\u4E8E\u5176\u4ED6\u6D4F\u89C8\u5668"
        },
        "RG1001_suggestion": {
            "message": "\u6B64\u79CD\u60C5\u51B5\u65F6\u53EF\u4EE5\u5C06 IE6 IE7 IE8(Q) \u6D4F\u89C8\u5668\u7684 UL OL \u6807\u8BB0\u6837\u5F0F\u66F4\u6539\u4E3A\u4E0E\u5176\u4ED6\u6D4F\u89C8\u5668\u6837\u5F0F\u4E00\u81F4\uFF0C\u5373\uFF1A"
        },
        "RG1002": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u5982\u679C\u5217\u8868\u5143\u7D20\u8BBE\u7F6E 'list-style-type:none' \u65F6\u4E0D\u5F71\u54CD \u2018list-style-position:inside\u2019 \u8BBE\u7F6E\u4EA7\u751F\u7684\u6807\u8BB0\u5757  "
        },
        "RG1002_suggestion": {
            "message": "\u4E3A\u4E86\u907F\u514D\u6B64\u95EE\u9898\uFF0C\u5EFA\u8BAE\u5728\u8BBE\u7F6E 'list-style-type:none' \u65F6\u4EC5\u5C06 'list-style-position' \u5C5E\u6027\u503C\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u7684 'outside'\u3002 "
        },
        "RG1003": {
            "message": "LI \u5143\u7D20\u8BBE\u7F6E\u6807\u8BB0\u7C7B\u578B\u7684\u7279\u6027 'style-list-type' \u7684 'disc | circle | square' \u4E09\u4E2A\u7279\u6027\u503C\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u6E32\u67D3\u65B9\u5F0F\u4E0D\u540C"
        },
        "RG1003_suggestion": {
            "message": "\u5EFA\u8BAE\u5F03\u4F7F\u7528 'disc | circle | square' \u8FD9\u4E09\u4E2A\u6837\u5F0F\uFF0C\u6539\u7528\u80CC\u666F\u56FE\u7247\u4EE3\u66FF\u6837\u5F0F\u663E\u793A\uFF0C\u5982\uFF1A "
        },
        "RM1004": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u96F6\u9AD8\u5EA6\u7684\u6D6E\u52A8\u5143\u7D20\u4F1A\u963B\u6321\u5176\u5144\u5F1F\u6D6E\u52A8\u5143\u7D20"
        },
        "RM1004_suggestion": {
            "message": "\u5982\u679C\u5E0C\u671B\u4E00\u4E2A\u6D6E\u52A8\u5143\u7D20\u80FD\u963B\u6321\u4E0E\u5176\u5411\u76F8\u540C\u65B9\u5411\u6D6E\u52A8\u7684\u5144\u5F1F\u5143\u7D20\uFF0C\u8BF7\u786E\u4FDD\u5176\u9AD8\u5EA6\u4E0D\u4E3A\u96F6\uFF0C\u4EE5\u4F7F\u9875\u9762\u5E03\u5C40\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u8868\u73B0\u4E00\u81F4\u3002\u53CD\u4E4B\uFF0C\u5982\u679C\u4E0D\u5E0C\u671B\u96F6\u9AD8\u5EA6\u7684\u6D6E\u52A8\u5143\u7D20\u963B\u6321\u5176\u5144\u5F1F\u6D6E\u52A8\u5143\u7D20\uFF0C\u8BF7\u9690\u85CF\u8BE5\u5143\u7D20\uFF0C\u5982\u4F7F\u7528 'display:none'\u3002\u4F46\u8981\u6CE8\u610F\uFF0C\u8FD9\u6837\u505A\u4E5F\u4F1A\u4F7F\u5176\u53EF\u80FD\u5B58\u5728\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5185\u5BB9\u4E5F\u4E0D\u53EF\u89C1\u3002"
        },
        "RM1009": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u4E00\u4E9B\u5757\u7EA7\u5143\u7D20\u7684\u9ED8\u8BA4\u4E0A\u4E0B\u5916\u8FB9\u8DDD\u4F1A\u5728\u5176\u6D6E\u52A8\u6216\u89E6\u78B0\u5230 hasLayout \u7684\u5BB9\u5668\u540E\u6D88\u5931"
        },
        "RM1009_suggestion": {
            "message": "\u7528\u81EA\u5B9A\u4E49\u7684 'margin' \u53D6\u4EE3\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u5916\u8FB9\u8DDD\u6837\u5F0F\u3002"
        },
        "RM1010": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u5143\u7D20\u7684 'padding-top' \u9047\u5230 'clear' \u7279\u6027\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u590D\u5236\u5230 'padding-bottom'"
        },
        "RM1010_suggestion": {
            "message": "\u65B9\u68481.\u4E0D\u89E6\u53D1\u5BB9\u5668\u7684 hasLayout \u7279\u6027\uFF1B"
        },
        "RM1017": {
            "message": "IE7(S) \u4E2D\u5143\u7D20\u6EA2\u51FA\u5305\u542B\u5757\u7684\u90E8\u5206\u4F1A\u88AB hasLayout \u5143\u7D20\u906E\u4F4F"
        },
        "RM1017_suggestion": {
            "message": "\u5408\u7406\u8BBE\u7F6E\u5143\u7D20\u7684 'width'\u3001'height' \u548C 'overflow' \u7279\u6027\uFF0C\u907F\u514D\u5185\u5BB9\u6EA2\u51FA\u5BB9\u5668\u3002 "
        },
        "RM1025": {
            "message": "Chrome Safari \u8BA4\u4E3A 'float:center' \u662F\u5408\u6CD5\u503C\u4E14\u5176\u8BA1\u7B97\u503C\u4E3A 'none'"
        },
        "RM1025_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528\u975E\u6CD5\u7684 'float' \u7279\u6027\u503C\u3002"
        },
        "RM3007": {
            "message": "\u5728 IE6 IE7 IE8(Q) \u4E2D\u5305\u542B\u88AB\u6E05\u9664\u6D6E\u52A8\u7684\u6D6E\u52A8\u5143\u7D20\u7684\u5757\u7EA7\u5143\u7D20\u7684\u80CC\u666F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E0D\u662F\u8BBE\u7F6E\u503C"
        },
        "RM3007_suggestion": {
            "message": "\u4F7F\u4E22\u5931\u80CC\u666F\u7684\u5BB9\u5668\u89E6\u53D1 IE \u6D4F\u89C8\u5668\u7279\u6709\u7684 hasLayout\uFF0C\u5982 'zoom:1'\uFF0C\u6216\u8005\u8BBE\u7F6E\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002"
        },
        "RM8001": {
            "message": "IE6 IE7 IE8(Q) \u4E0D\u652F\u6301 'display' \u7684\u66FF\u4EE3\u503C"
        },
        "RM8001_suggestion": {
            "message": "\u5C3D\u91CF\u4EC5\u4F7F\u7528\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u7684 'display' \u7279\u6027\u503C\uFF1A'inline'\u3001'block'\u3001'list-item'\u3001'none'\u3002"
        },
        "RM8002": {
            "message": "\u4E0D\u80FD\u5728 IE6 IE7 IE8(Q) \u4E2D\u89E6\u53D1 hasLayout \u5E76\u5728\u5176\u4ED6\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA Block Formatting Context \u7684\u5143\u7D20\u7684\u8868\u73B0\u4F1A\u6709\u5DEE\u5F02"
        },
        "RM8002_suggestion": {
            "message": "\u4EC5\u5F53\u4E00\u4E2A\u5143\u7D20\u5373\u5728 IE \u65E9\u671F\u7248\u672C\u4E2D\u89E6\u53D1\u4E86 hasLayout\uFF0C\u53C8\u5728\u5176\u4ED6\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA\u4E86 block formatting context \u65F6\uFF0C\u624D\u80FD\u907F\u514D\u4E0A\u8FF0\u95EE\u9898\u7684\u53D1\u751F\u3002\u5373\u540C\u65F6\u542F\u7528\u4E0A\u8FF0\u4E24\u8005\u4EE5\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\uFF0C\u6216\u8005\u76F8\u53CD\uFF0C\u4E24\u8005\u7686\u4E0D\u542F\u7528\uFF1A"
        },
        "RM8003": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D\u6D6E\u52A8\u5143\u7D20\u4E0E\u76F8\u90BB\u7684 Block Formatting Context \u4E4B\u95F4\u7684\u5173\u7CFB\u6709\u5DEE\u5F02"
        },
        "RM8003_suggestion": {
            "message": "\u5408\u7406\u5730\u8BBE\u7F6E\u5BB9\u5668\u7684\u5BBD\u5EA6\u3001\u6D6E\u52A8\u5143\u7D20\u7684\u5BBD\u5EA6\u3001BFC \u7684\u5BBD\u5EA6\u7684\u503C\uFF0C\u5C3D\u91CF\u4FDD\u8BC1 BFC \u7684\u5BBD\u5EA6\u5C0F\u4E8E \"\u5BB9\u5668\u7684\u5269\u4F59\u7A7A\u95F4\u5BBD\u5EA6\" \u3002\u82E5\u9700\u8981 BFC \u6298\u884C\u663E\u793A\u5728\u65B0\u7684\u4E00\u884C\u4E0A\uFF0C\u53EF\u4EE5\u901A\u8FC7 BFC \u8BBE\u7F6E 'clear' \u7279\u6027\u7B49\u624B\u6BB5\u4F7F\u5176\u6362\u884C\u3002"
        },
        "RM8005": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u884C\u5185\u5143\u7D20\u540E\u76F8\u90BB\u7684\u6D6E\u52A8\u5143\u7D20\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u6298\u884C\u653E\u7F6E\u5728\u4E4B\u524D\u884C\u5185\u5143\u7D20\u6240\u5728\u884C\u6846\u7684\u5E95\u90E8"
        },
        "RM8005_suggestion": {
            "message": "\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF08position:absolute\uFF09\u6A21\u62DF\u53F3\u6D6E\u52A8\uFF08float:right\uFF09\u3002"
        },
        "RM8006": {
            "message": "IE6 IE7 IE8(Q)\u4E2D\u8BBE\u7F6E\u4E86 'clear' \u7279\u6027\u7684\u5143\u7D20 'margin-top' \u7279\u6027\u5904\u7406\u6709\u8BEF\uFF0C\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u4E0E\u6D6E\u52A8\u5143\u7D20\u91CD\u53E0"
        },
        "RM8006_suggestion": {
            "message": "\u5C3D\u91CF\u907F\u514D\u4E3A 'clear' \u7279\u6027\u4E0D\u4E3A none \u7684\u5143\u7D20\uFF08\u5373\u6E05\u7406\u5143\u7D20\uFF09\u8BBE\u7F6E 'margin-top' \u7279\u6027\uFF0C\u5C24\u5176\u662F\u8D1F\u503C\u3002"
        },
        "RM8008": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u5BF9\u6D6E\u52A8\u5143\u7D20\u4E0A 'clear' \u7279\u6027\u7684\u89E3\u91CA\u51FA\u73B0\u9519\u8BEF\uFF0C\u4F7F\u5176\u81EA\u8EAB\u4F4D\u7F6E\u548C\u5176\u540E\u6D6E\u52A8\u5143\u7D20\u7684\u4F4D\u7F6E\u4E0E\u5176\u4ED6\u6D4F\u89C8\u5668\u4E2D\u4E0D\u540C"
        },
        "RM8008_suggestion": {
            "message": "\u4E0D\u8981\u5C06 'clear' \u7279\u6027\u5E94\u7528\u5728\u6D6E\u52A8\u5143\u7D20\u4E0A\uFF0C\u4EE5\u514D\u51FA\u73B0\u4E0A\u8FF0\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\u3002"
        },
        "RM8011": {
            "message": "Firefox \u6D4F\u89C8\u5668\u5BF9 TABLE \u4E2D\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u5305\u542B\u5757\u7684\u5224\u5B9A\u6709\u9519\u8BEF\uFF0C\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5BFC\u81F4\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u4F4D\u7F6E\u8DDF\u5176\u4ED6\u6D4F\u89C8\u5668\u4E2D\u6709\u5DEE\u5F02"
        },
        "RM8011_suggestion": {
            "message": "\u8FD9\u662F Firefox \u7684\u4E00\u4E2A bug\uFF0C\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u65E0\u6CD5\u6839\u636E 'display' \u7279\u6027\u662F 'table' \u4E14\u662F\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u7956\u5148\u5143\u7D20\u5B9A\u4F4D\u3002"
        },
        "RM8012": {
            "message": "IE6 IE7 IE8(Q) Firefox Opera \u4E2D\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u9759\u6001\u4F4D\u7F6E\u8BA1\u7B97\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u51FA\u9519"
        },
        "RM8012_suggestion": {
            "message": "\u9996\u5148\u5BF9\u4E8E\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF0C\u5E94\u5C3D\u53EF\u80FD\u907F\u514D\u4F7F\u5176 'top'\u3001'right'\u3001'bottom'\u3001'left' \u7279\u6027\u7684\u503C\u5747\u4E3A 'auto'\u3002\u82E5\u5FC5\u987B\u8FD9\u4E48\u505A\uFF0C\u5219\u5C3D\u53EF\u80FD\u7684\u4FDD\u8BC1\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u4E4B\u524D\u7684\u5144\u5F1F\u5143\u7D20\u4E3A\u975E\u6D6E\u52A8\u7684\u5757\u7EA7\u5143\u7D20\u3002"
        },
        "RM8013": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301\u56FA\u5B9A\u5B9A\u4F4D\uFF08position:fixed\uFF09"
        },
        "RM8013_suggestion": {
            "message": "\u5728 IE6 IE7(Q) IE8(Q) \u4E2D\u4E3A\u56FA\u5B9A\u5B9A\u4F4D\u5143\u7D20\u8BBE\u7F6E 'position:absolute'\uFF0C\u518D\u901A\u8FC7 JavaScript \u811A\u672C\u6216\u8005 CSS Expression \u52A8\u6001\u8BBE\u7F6E\u5176\u504F\u79FB\u91CF\u3002\u5982\uFF1A"
        },
        "RM8014": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u67D0\u4E9B\u60C5\u51B5\u4E0B\u6D6E\u52A8\u5143\u7D20\u4F1A\u5728\u5176\u6D6E\u52A8\u65B9\u5411\u6EA2\u51FA\u5176\u5305\u542B\u5757"
        },
        "RM8014_suggestion": {
            "message": "\u5F53\u6587\u5B57\u65B9\u5411\u4E3A 'ltr' \u65F6\u5E94\u907F\u514D\u4F7F\u53F3\u6D6E\u52A8\u5143\u7D20\u7684\u5BBD\u5EA6\u8D85\u51FA\u5176\u5305\u542B\u5757\u7684\u5BBD\u5EA6\u3002\u540C\u6837\u5730\uFF0C\u5F53\u6587\u5B57\u65B9\u5411\u4E3A 'rtl' \u65F6\u5E94\u907F\u514D\u4F7F\u5DE6\u6D6E\u52A8\u5143\u7D20\u7684\u5BBD\u5EA6\u8D85\u51FA\u5176\u5305\u542B\u5757\u7684\u5BBD\u5EA6\u3002"
        },
        "RM8015": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u5B9A\u4F4D\u5143\u7D20 'z-index' \u4E3A\u9ED8\u8BA4\u503C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u4EA7\u751F\u65B0\u7684\u5C42\u53E0\u4E0A\u4E0B\u6587"
        },
        "RM8015_suggestion": {
            "message": "\u7406\u89E3\u5C42\u53E0\u4E0A\u4E0B\u6587\u3001\u5C42\u53E0\u7EA7\u522B\u4E0E 'z-index' \u4E4B\u95F4\u7684\u5173\u7CFB\u3002"
        },
        "RM8016": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u6EA2\u51FA\u5BB9\u5668\u7684\u6D6E\u52A8\u5143\u7D20\u5BFC\u81F4\u5BB9\u5668\u5144\u5F1F\u5143\u7D20\u6587\u672C\u5B9A\u4F4D\u9519\u8BEF"
        },
        "RM8016_suggestion": {
            "message": "\u53CA\u65F6\u5730\u4E3A\u5BB9\u5668\u6E05\u9664\u6D6E\u52A8\uFF0C\u5E76\u4E14\u786E\u4FDD\u6D6E\u52A8\u5143\u7D20\u6CA1\u6709\u6EA2\u51FA\u5BB9\u5668\u3002"
        },
        "RM8018": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E2D\u5305\u542B\u5757\u82E5\u672A\u89E6\u53D1 hasLayout \u5219\u4F1A\u5F71\u54CD\u53C2\u7167\u5176\u5B9A\u4F4D\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u504F\u79FB\u4F4D\u7F6E\u8BA1\u7B97"
        },
        "RM8018_suggestion": {
            "message": "\u4F7F\u5305\u542B\u5757\u89E6\u53D1 hasLayout \u7279\u6027\u3002\u5982 'zoom:1' \u6216\u8005\u8BBE\u7F6E\u660E\u786E\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u3002"
        },
        "RN5001": {
            "message": "Chrome Safari \u4E2D '@charset' \u58F0\u660E\u7684\u4F4D\u7F6E\u9519\u8BEF\u5C06\u5BFC\u81F4\u5176\u540E\u7684\u4E00\u4E2A\u89C4\u5219\u96C6\u65E0\u6548"
        },
        "RN5001_suggestion": {
            "message": "\u8981\u4F7F\u7528 '@charset' \u89C4\u5219\uFF0C\u8BF7\u786E\u4FDD\u5C06\u5176\u653E\u5728\u6837\u5F0F\u8868\u7684\u6700\u5F00\u59CB\uFF0C\u524D\u8FB9\u4E0D\u80FD\u6709\u4EFB\u4F55\u5B57\u7B26\u3002"
        },
        "RN8002": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5728 HTML \u9875\u9762\u4E0E\u9875\u9762\u4E2D\u5F15\u5165\u7684\u5916\u90E8 CSS \u6587\u4EF6\u7F16\u7801\u4E0D\u4E00\u81F4\u65F6\u8868\u73B0\u4E0D\u540C"
        },
        "RN8002_suggestion": {
            "message": "\u5F53 HTML \u6587\u4EF6\u6216 CSS \u6587\u4EF6\u8981\u5F15\u5165\u4E00\u4E2A\u4E0D\u540C\u7F16\u7801\u7684 CSS \u6587\u4EF6\u65F6\uFF0C\u8981\u660E\u786E\u58F0\u660E\u5C06\u88AB\u5F15\u5165\u7684 CSS \u6587\u4EF6\u7684\u7F16\u7801\uFF0C\u4EE5\u907F\u514D\u53D1\u751F\u4E0A\u8FF0\u95EE\u9898\u3002"
        },
        "RS3005": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E2D A \u5143\u7D20\u7684 :visited :hover :active \u4F2A\u7C7B\u672A\u6309\u89C4\u8303\u8981\u6C42\u7684\u7B97\u6CD5\u6765\u8BA1\u7B97\u9488\u5BF9\u6027"
        },
        "RS3005_suggestion": {
            "message": "\u4E25\u683C\u6309\u7167\u6807\u51C6\u7684\u5EFA\u8BAE\uFF0C\u4EE5 L-V-H-A \u7684\u987A\u5E8F\u58F0\u660E A \u6807\u7B7E\u7684\u4F2A\u7C7B\uFF0C\u4EE5\u4FDD\u8BC1\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u517C\u5BB9\u3002"
        },
        "RS3007": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301 A \u5143\u7D20\u4EE5\u5916\u7684\u5176\u4ED6\u5143\u7D20\u7684 ':hover' \u4F2A\u7C7B"
        },
        "RS3007_suggestion": {
            "message": "\u4F7F\u7528 JavaScript \u7ED1\u5B9A 'onmouseover' \u548C 'onmouseout'\uFF08\u6A21\u4EFF ':hover'\uFF09\uFF1B"
        },
        "RS3008": {
            "message": "IE6 IE7 IE8(Q) \u4E0D\u652F\u6301 A \u5143\u7D20\u4EE5\u5916\u7684\u5176\u4ED6\u5143\u7D20\u7684 ':active' \u4F2A\u7C7B"
        },
        "RS3008_suggestion": {
            "message": "\u4F7F\u7528 JavaScript \u7ED1\u5B9A onmousedown onmouseup \u4E8B\u4EF6\u6A21\u4EFF \u2018:active\u2019 \u4F2A\u7C7B\u6548\u679C\uFF1B"
        },
        "RS3009": {
            "message": "IE6 IE7 IE8(Q) \u4E0D\u652F\u6301 ':focus' \u4F2A\u7C7B"
        },
        "RS3009_suggestion": {
            "message": "\u4F7F\u7528 JavaScript \u7ED1\u5B9A onfocus onblur \u4E8B\u4EF6\u6A21\u4EFF \u2018:focus\u2019 \u6548\u679C\uFF1B"
        },
        "RS8001": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301\u5B50\u9009\u62E9\u5668"
        },
        "RS8001_suggestion": {
            "message": "\u907F\u514D\u5728 IE6 IE7(Q) IE8(Q) \u4E2D\u4F7F\u7528\u5B50\u9009\u62E9\u5668\u3002"
        },
        "RS8002": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301\u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668"
        },
        "RS8002_suggestion": {
            "message": "\u907F\u514D\u5728\u975E\u6807\u51C6\u6A21\u5F0F\u4E2D\u5BF9 IE7 \u4EE5\u4E0B\u7248\u672C\u4F7F\u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668\u3002"
        },
        "RS8003": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301\u5C5E\u6027\u9009\u62E9\u5668"
        },
        "RS8003_suggestion": {
            "message": "\u907F\u514D\u5728 IE6 IE7(Q) IE8(Q) \u4E2D\u4F7F\u7528\u5C5E\u6027\u9009\u62E9\u5668\u3002"
        },
        "RS8004": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E0D\u652F\u6301 ':first-child' \u4F2A\u5143\u7D20"
        },
        "RS8004_suggestion": {
            "message": "\u907F\u514D\u5728 IE6 IE7(Q) IE8(Q) \u4E2D\u4F7F\u7528 \u2018:first-child\u2019 \u4F2A\u5143\u7D20\u3002"
        },
        "RS8010": {
            "message": "IE6 IE7 IE8(Q) \u4E0D\u652F\u6301 ':before' \u548C ':after' \u4F2A\u5143\u7D20"
        },
        "RS8010_suggestion": {
            "message": "\u4F7F\u7528 JavaScript \u5224\u65AD\u5728 IE6 IE7 IE8(Q) \u4E2D\u901A\u8FC7\u811A\u672C\u5B9E\u73B0 ':before' \u53CA ':after' \u4F2A\u5143\u7D20\u7684\u6548\u679C\uFF1B"
        },
        "RT1007": {
            "message": "'word-wrap:break-word' \u53EA\u6709\u5728 WebKit \u6D4F\u89C8\u5668\u4E2D\u5BF9 SELECT \u5143\u7D20\u4E0A\u7684\u6587\u5B57\u6709\u6548"
        },
        "RT1007_suggestion": {
            "message": "\u4E0D\u5728 SELECT \u5143\u7D20\u4E0A\u8BBE\u7F6E 'word-wrap:break-word;'"
        },
        "RT1008": {
            "message": "'word-wrap:break-word' \u5BFC\u81F4\u5728 IE6, IE7 \u53CA IE8(Q) \u4E2D\u7A7A\u683C\u4E0D\u88AB\u5FFD\u7565"
        },
        "RT1008_suggestion": {
            "message": "\u5220\u9664\u4E0D\u5FC5\u8981\u7684\u7A7A\u683C\u3002"
        },
        "RT1010": {
            "message": "\u4EC5 Firefox \u652F\u6301\u5C0F\u6570\u6570\u503C\u7684 'letter-spacing' \u7279\u6027"
        },
        "RT1010_suggestion": {
            "message": "\u907F\u514D\u5728\u4F7F\u7528 px \u5355\u4F4D\u65F6\u4E3A 'letter-spacing' \u7279\u6027\u8BBE\u7F6E\u5C0F\u6570\u6570\u503C\u3002"
        },
        "RT3001": {
            "message": "\u5728\u67D0\u4E9B\u6761\u4EF6\u4E0B Firefox Chrome Safari \u7684\u6807\u51C6\u6A21\u5F0F\u4E2D 'text-decoration' \u4F1A\u4F5C\u7528\u4E8E IMG \u5143\u7D20\u4E0A"
        },
        "RT3001_suggestion": {
            "message": "\u5C3D\u91CF\u7ED9\u9700\u8981\u4FEE\u9970\u7684\u6587\u672C\u5355\u72EC\u8BBE\u7F6E 'text-decoration' \u7279\u6027\uFF1B\u82E5\u9700\u8981\u7ED9\u56FE\u7247\u6DFB\u52A0\u4E0A\u5212\u7EBF\u6216\u4E0B\u5212\u7EBF\uFF0C\u5219\u4F7F\u7528 'border-top' \u548C 'border-bottom' \u6765\u6A21\u62DF 'text-decoration'\u3002"
        },
        "RT3002": {
            "message": "\u5143\u7D20\u548C\u5176\u5B50\u5B59\u5143\u7D20\u7684 'text-decoration' \u7279\u6027\u5BF9\u5176\u5185\u6587\u672C\u7684\u6E32\u67D3\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u4E0D\u540C"
        },
        "RT3002_suggestion": {
            "message": "\u6839\u636E\u5177\u4F53\u5E94\u7528\u73AF\u5883\uFF0C\u53C2\u7167\u201C\u95EE\u9898\u5206\u6790\u201D\u4E2D\u5404\u79CD\u60C5\u51B5\u5728\u5404\u6D4F\u89C8\u5668\u4E0B\u7684\u7ED3\u679C\u6C47\u603B\u4F7F\u7528\u517C\u5BB9\u6027\u8F83\u597D\u7684\u65B9\u6848\u3002"
        },
        "RT3005": {
            "message": "'text-overflow:ellipsis' \u4F1A\u5F15\u8D77\u517C\u5BB9\u6027\u95EE\u9898"
        },
        "RT3005_suggestion": {
            "message": "\u4E0D\u8981\u5728\u5305\u542B\u5757\u7EA7\u5143\u7D20\u7684\u5143\u7D20\u4E0A\u4F7F\u7528 'text-overflow:ellipsis'\uFF1B"
        },
        "RT3011": {
            "message": "Firefox \u4E2D A \u5143\u7D20\u7684 ':hover' \u4F2A\u7C7B\u4E2D\u8BBE\u7F6E\u7684\u4E0B\u5212\u7EBF\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5931\u6548"
        },
        "RT3011_suggestion": {
            "message": "\u9009\u7528\u5408\u9002\u7684\u6587\u6863\u5934\uFF0C\u8BA9\u8BE5\u9875\u9762\u4F7F\u7528\u6807\u51C6\u6A21\u5F0F\uFF1B\u5982\uFF1A"
        },
        "RT5004": {
            "message": "WebKit \u6D4F\u89C8\u5668\u4E2D 'white-space:nowrap' \u4F7F\u8868\u683C\u5185\u7684\u6D6E\u52A8\u5143\u7D20\u4E0D\u6298\u884C"
        },
        "RT5004_suggestion": {
            "message": "\u4E0D\u8981\u5728 TD \u6807\u8BB0\u4E2D\u4F7F\u7528 'white-space:nowrap' \u6837\u5F0F\uFF0C\u6216\u8005\u4E3A TABLE \u6807\u8BB0\u8BBE\u7F6E 'table-layout:fixed' \u6837\u5F0F\u4E25\u683C\u8BA1\u7B97\u5176\u5185\u90E8\u5E03\u5C40\u3002"
        },
        "RT8003": {
            "message": "'text-align' \u7279\u6027\u5728 IE6 IE7 IE8(Q) \u4E2D\u53EF\u4EE5\u5F71\u54CD\u5757\u7EA7\u5143\u7D20\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5E76\u4E14\u5728\u6240\u6709\u6D4F\u89C8\u5668\u7684\u6DF7\u6742\u6A21\u5F0F\u4E2D\u5747\u4E0D\u80FD\u88AB TABLE \u5143\u7D20\u7EE7\u627F"
        },
        "RT8003_suggestion": {
            "message": "\u907F\u514D\u5728\u5305\u542B\u5BBD\u5EA6\u6BD4\u81EA\u8EAB\u5C0F\u7684\u5757\u7EA7\u5143\u7D20\u6216\u8868\u683C\u7684\u5143\u7D20\u4E0A\u8BBE\u7F6E 'text-align' \u7279\u6027\u3002"
        },
        "RT8006": {
            "message": "\u67D0\u4E9B\u6761\u4EF6\u4E0B IE6 IE7 IE8(Q) \u4E2D 'word-wrap:break-word' \u4F5C\u7528\u4E8E TD \u65F6\u5BFC\u81F4\u5176\u4E2D IMG \u5143\u7D20\u4E0D\u6362\u884C"
        },
        "RT8006_suggestion": {
            "message": "\u9650\u5236 TD \u5143\u7D20\u5BBD\u5EA6\u5E76\u8BBE\u7F6E 'word-wrap' \u7279\u6027\u503C\u4E3A\u9ED8\u8BA4\u503C\u3002"
        },
        "RU3001": {
            "message": "\u53EA\u6709 IE \u548C Opera \u652F\u6301 'cursor:hand'"
        },
        "RU3001_suggestion": {
            "message": "\u4F7F\u7528 CSS \u89C4\u8303\u4E2D\u5B9A\u4E49\u7684 'cursor:  pointer' \u6837\u5F0F\u4EE3\u66FF 'cursor:hand' \u6837\u5F0F\u3002"
        },
        "RU3002": {
            "message": "IE6 IE7 IE8(Q) \u4E0D\u652F\u6301 'outline' \u7279\u6027"
        },
        "RU3002_suggestion": {
            "message": "\u7531\u4E8E 'outline' \u7279\u6027\u4E0D\u5F71\u54CD\u76D2\u6A21\u578B\u53CA\u6587\u672C\u6D41\uFF0C\u6240\u4EE5\u4F7F\u7528\u6B64\u7279\u6027\u65F6\uFF0C\u5728\u4E0D\u652F\u6301\u7684 IE6 IE7 IE8(Q) \u4E2D\u4E0D\u4F1A\u51FA\u73B0\u5F71\u54CD\u5E03\u5C40\u7684\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u53EA\u4F1A\u5728\u8F83\u5C0F\u7684\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u89C6\u89C9\u6548\u679C\uFF0C\u6682\u65F6\u6CA1\u6709\u597D\u7684\u66FF\u4EE3\u65B9\u6848\u3002"
        },
        "RV1001": {
            "message": "IE \u4E2D\u5F53 'overflow-x' \u6216 'overflow-y' \u7684\u503C\u88AB\u8BBE\u7F6E\u6210\u975E 'visible' \u65F6\uFF0C\u53E6\u4E00\u4E2A\u7279\u6027\u7684\u8BA1\u7B97\u503C\u4E3A 'visible' \u800C\u975E 'auto'"
        },
        "RV1001_suggestion": {
            "message": "\u540C\u65F6\u8BBE\u7F6E 'overflow-x' \u548C 'overflow-y' \u7684\u503C\uFF0C\u4E0D\u8981\u51FA\u73B0\u5176\u4E2D\u4E4B\u4E00\u4E3A 'hidden' \u65F6\uFF0C\u800C\u53E6\u4E00\u4E2A\u662F 'visible' \u7684\u60C5\u51B5\uFF1B"
        },
        "RV1002": {
            "message": "IE6 IE7 IE8(Q) \u4E2D 'overflow' \u7279\u6027\u4E0D\u4E3A 'visible' \u7684\u975E\u5B9A\u4F4D\u5143\u7D20\u5185\u5305\u542B\u6EA2\u51FA\u7684\u5B9A\u4F4D\u5143\u7D20\u65F6\u7684\u6E32\u67D3\u6548\u679C\u6709\u8BEF"
        },
        "RV1002_suggestion": {
            "message": "\u6839\u636E\u5B9E\u9645\u9700\u6C42\u53EF\u4EE5\u53BB\u6389\u5305\u542B\u5757\u7684 'overflow:hidden' \u6216\u91C7\u7528\u5176\u4ED6\u5B9A\u4F4D\u65B9\u6848\uFF0C\u907F\u514D\u5728 IE \u4E2D\u89E6\u53D1\u6B64\u95EE\u9898\uFF0C\u5B9E\u73B0\u5728\u5404\u6D4F\u89C8\u5668\u8868\u73B0\u4E00\u81F4\u3002"
        },
        "RX1001": {
            "message": "IE5.0 IE5.5 IE6 \u4E2D\u6D6E\u52A8\u5143\u7D20\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u6709\u53CC\u500D\u5916\u8FB9\u8DDD"
        },
        "RX1001_suggestion": {
            "message": "\u5C3D\u91CF\u907F\u514D\u540C\u65F6\u4F7F\u7528 'margin-left' \u4E0E float:left\uFF0C\u53CA 'margin-right' \u4E0E float:right\uFF1B"
        },
        "RX1002": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u4ECE\u5355\u5143\u683C\u6EA2\u51FA\u7684\u5185\u5BB9\u4F1A\u88AB\u81EA\u52A8\u526A\u88C1"
        },
        "RX1002_suggestion": {
            "message": "\u9075\u7167 W3C \u89C4\u8303\u6240\u63CF\u8FF0\u7684\uFF0C\u4E3A\u5355\u5143\u683C\u5143\u7D20\u8BBE\u7F6E \"overflow:hidden\" \uFF0C\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u5747\u4F1A\u88C1\u5207\u6EA2\u51FA\u5355\u5143\u683C\u7684\u5185\u5BB9\u3002"
        },
        "RX1003": {
            "message": "IE6 IE7 IE8(Q) \u4E2D 'white-space' \u7279\u6027\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u81EA\u52A8\u7EE7\u627F"
        },
        "RX1003_suggestion": {
            "message": "\u660E\u786E\u5730\u4E3A TD \u7684\u5B50\u5143\u7D20\u8BBE\u7F6E 'white-space' \u7279\u6027\uFF0C\u907F\u514D\u4F7F TD \u5143\u7D20\u81EA\u52A8\u7EE7\u627F\u7236\u5143\u7D20\u7684 'white-space' \u7279\u6027\u3002\u6216\u8005\u907F\u514D\u540C\u65F6\u4E3A TD \u5143\u7D20\u8BBE\u7F6E\u5BBD\u5EA6\u53CA white-space:nowrap\uFF08\u6216\u662F nowrap \u5C5E\u6027\uFF09\u3002"
        },
        "RX1006": {
            "message": "IE(Q) Firefox(Q) Opera \u4E2D BR \u5143\u7D20\u7684 'line-height' \u7279\u6027\u7684\u8BA1\u7B97\u503C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5C0F\u4E8E\u5176\u7EE7\u627F\u503C"
        },
        "RX1006_suggestion": {
            "message": "\u5C3D\u53EF\u80FD\u4E0D\u4E3A BR \u5143\u7D20\u8BBE\u5B9A\u4E00\u4E2A\u53EF\u80FD\u5C0F\u4E8E\u5176\u7EE7\u627F\u503C\u7684\u503C\u3002"
        },
        "RX1008": {
            "message": "IE6 IE7 IE8(Q) \u4E2D cellspacing \u5C5E\u6027\u5728\u91CD\u5408\u7684\u8FB9\u6846\u6A21\u578B\u7684\u8868\u683C\u4E2D\u4ECD\u7136\u6709\u6548"
        },
        "RX1008_suggestion": {
            "message": "\u5728\u4F7F\u7528 border-collapse:collapse \u65F6\u5E94\u4FDD\u8BC1 TABLE \u5143\u7D20\u7684 cellspacing \u5C5E\u6027\u503C\u4E3A 0\u3002"
        },
        "RX1010": {
            "message": "IE6(Q) IE7(Q) IE8(Q) \u4E2D\u7ED9 IMG \u5143\u7D20\u8BBE\u7F6E 'padding' \u65E0\u6548"
        },
        "RX1010_suggestion": {
            "message": "\u4F7F\u7528\u6807\u51C6\u6A21\u5F0F\u3002"
        },
        "RX3005": {
            "message": "IE6 IE7(Q) IE8(Q) \u4E2D A \u5143\u7D20\u7684 ':hover' \u4F2A\u7C7B\u4EE5\u53CA IE6 IE7 IE8(Q) \u4E2D\u7684 ':active' \u4F2A\u7C7B \u5728\u5F53\u7F3A\u5C11 href \u5C5E\u6027\u65F6\u4F1A\u5931\u6548"
        },
        "RX3005_suggestion": {
            "message": "\u5982\u679C\u9700\u8981\u4E00\u4E2A A \u5143\u7D20\u80FD\u6839\u636E\u7528\u6237\u7684\u884C\u4E3A\u6539\u53D8\u6837\u5F0F\uFF0C\u8BF7\u6DFB\u52A0 A \u5143\u7D20\u7684 'href' \u5C5E\u6027\u4F7F\u4F2A\u7C7B\u751F\u6548\u3002"
        },
        "RX3007": {
            "message": "\u5B57\u4F53\u6837\u5F0F\u6807\u7B7E\uFF08U\u3001B\u3001S\u7B49\uFF09\u5BF9\u67D0\u4E9B CSS \u7279\u6027\u6709\u5F71\u54CD"
        },
        "RX3007_suggestion": {
            "message": "U\u3001S \u5143\u7D20\u672C\u8EAB\u662F\u5E9F\u5F03\u5143\u7D20\uFF0C\u5E94\u907F\u514D\u4F7F\u7528\uFF0C\u800C\u7528 CSS \u76F8\u5173\u7279\u6027\u6765\u66FF\u4EE3\u8FD9\u4E9B\u5143\u7D20\u4EA7\u751F\u7684\u6548\u679C\u3002"
        },
        "RX3011": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D FONT \u5143\u7D20\u7684\u989C\u8272\u8BBE\u7F6E\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u4F5C\u7528\u5230\u7531\u5176\u7956\u5148\u7EA7\u5143\u7D20\u8BBE\u5B9A\u7684\u88C5\u9970\u7EBF\u7684\u989C\u8272"
        },
        "RX3011_suggestion": {
            "message": "FONT \u5143\u7D20\u672C\u8EAB\u662F\u5E9F\u5F03\u5143\u7D20\uFF0C\u5E76\u4E14\u5176\u6240\u6709\u5C5E\u6027\u5747\u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u5E94\u907F\u514D\u4F7F\u7528 FONT \u5143\u7D20\u3002"
        },
        "RX8004": {
            "message": "\u975E IE \u6D4F\u89C8\u5668\u4E2D 'margin' \u7279\u6027\u5BF9 TABLE \u5143\u7D20\u7684 align \u5C5E\u6027\u4F1A\u6709\u5F71\u54CD"
        },
        "RX8004_suggestion": {
            "message": "\u7531\u4E8E TABLE \u5143\u7D20\u7684 align \u5C5E\u6027\u5DF2\u7ECF\u88AB W3C \u5E9F\u5F03\uFF0C\u6240\u4EE5\u5728\u8003\u8651 TABLE \u5143\u7D20\u5BF9\u9F50\u95EE\u9898\u4E0A\u5E94\u907F\u514D\u4F7F\u7528 align \u5C5E\u6027\uFF0C\u800C\u6539\u7528 CSS\u3002"
        },
        "RX8012": {
            "message": "\u4E0D\u540C\u6D4F\u89C8\u5668\u4E2D Flash \u4E0E\u5176\u4ED6\u5143\u7D20\u53D1\u751F\u8986\u76D6\u65F6\u6709\u5DEE\u5F02"
        },
        "RX8012_suggestion": {
            "message": "\u82E5\u6709\u9875\u9762\u9700\u6C42\u662F\u8981\u6C42\u5176\u4ED6\u5143\u7D20\u906E\u6321 Flash "
        },
        "RX8015": {
            "message": "IE6 IE7 IE8(Q) \u6CA1\u6709\u5B8C\u5168\u6B63\u786E\u5730\u5C06 IMG\u3001OBJECT\u3001IFRAME\u3001TABLE \u5143\u7D20\u7684 align='left|right' \u7406\u89E3\u4E3A\u6D6E\u52A8"
        },
        "RX8015_suggestion": {
            "message": "align \u5C5E\u6027\u5DF2\u88AB\u5E9F\u5F03\uFF0C\u5E94\u907F\u514D\u4F7F\u7528\u8FD9\u7C7B HTML \u5C5E\u6027\u3002\u4E3A IMG\u3001OBJECT\u3001IFRAME\u3001TABLE\u3001APPLET\u3001EMBED \u5143\u7D20\u4F7F\u7528 CSS \u7684 'float' \u7279\u6027\u4EE5\u8FBE\u5230\u76F8\u540C\u7684\u6548\u679C\u3002"
        },
        "RX8017": {
            "message": "IE \u5BF9\u6D6E\u52A8\u975E\u66FF\u6362\u5143\u7D20\u5185\u5305\u542B\u5BBD\u5EA6\u5355\u4F4D\u4E3A\u767E\u5206\u6BD4\u7684\u5143\u7D20\u65F6\u7684 \"shrink-to-fit\" \u5BBD\u5EA6\u7B97\u6CD5\u6709\u8BEF"
        },
        "RX8017_suggestion": {
            "message": "1. \u660E\u786E\u4E3A\u6D6E\u52A8\u5143\u7D20\u8BBE\u7F6E\u4E00\u4E2A\u5BBD\u5EA6\u503C\uFF0C\u907F\u514D\u5176\u5728\u8FDB\u884C \"shrink-to-fit\" \u8BA1\u7B97\u65F6\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E4B\u95F4\u51FA\u73B0\u7684\u5BBD\u5EA6\u8BA1\u7B97\u5DEE\u5F02\u3002"
        },
        "RX9009": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D IFRAME \u5143\u7D20\u7684 scrolling \u5C5E\u6027\u4E0E\u5176\u5B50\u9875\u9762 HTML \u4E0E BODY \u5143\u7D20 'overflow' \u7279\u6027\u7684\u5236\u7EA6\u5173\u7CFB\u6709\u5DEE\u5F02"
        },
        "RX9009_suggestion": {
            "message": "W3C \u89C4\u8303\u5E76\u6CA1\u6709\u8BF4\u660E scrolling \u5C5E\u6027\u5E94\u8BE5\u63A7\u5236\u5B50\u9875\u9762\u54EA\u4E2A\u5143\u7D20\u7684\u6EDA\u52A8\u6761\u7684\u751F\u6210\u6216\u8005 'overflow' \u7279\u6027\uFF0C\u4E3A\u9632\u6B62\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B Chrome Safari \u7684 IFRAME \u5B50\u9875\u9762\u4E2D\u51FA\u73B0\u591A\u4F59\u6EDA\u52A8\u6761\uFF0C\u5E94\u907F\u514D\u4E3A HTML \u6216\u8005 BODY \u5143\u7D20\u8BBE\u7F6E overflow:scroll\u3002"
        },
        "RY1001": {
            "message": "IE6 IE7 IE8(Q) \u4F1A\u81EA\u52A8\u4FEE\u590D 'font-family' \u7279\u6027\u7684\u503C\u662F\u7531\u4E00\u4E2A\u5F15\u53F7\u5305\u62EC\u4E86\u6574\u4E2A\u5B57\u4F53\u5BB6\u65CF\u65F6\u7684\u9519\u8BEF\u4E66\u5199\u7684\u4EE3\u7801"
        },
        "RY1001_suggestion": {
            "message": "\u8FD9\u662F\u7531\u4E8E\u758F\u5FFD\u7B14\u8BEF\u9020\u6210\u7684\u9519\u8BEF\uFF0C\u9996\u5148\u5E94\u6309\u7167 W3C \u89C4\u8303\u4E2D\u7684\u6807\u51C6\u5199\u6CD5\u5B9A\u4E49 'font-family' \u3002\u800C\u4E0D\u80FD\u5229\u7528\u6D4F\u89C8\u5668\u5BF9\u9519\u8BEF\u4EE3\u7801\u7684\u5BB9\u9519\u673A\u5236\u3002"
        },
        "RY8002": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 CSS \u4EE3\u7801\u53CA CSS \u76F8\u5173 DOM \u64CD\u4F5C\u4E2D\u957F\u5EA6 \"\u003Clength\u003E\" \u7C7B\u578B\u7684\u503C\u7F3A\u5931\u5355\u4F4D\u7684\u5BB9\u9519\u7A0B\u5EA6\u5B58\u5728\u5DEE\u5F02"
        },
        "RY8002_suggestion": {
            "message": "\u5BF9\u4E8E\u90A3\u4E9B\u957F\u5EA6\u7C7B\u578B\u7684 CSS \u7279\u6027\uFF0C\u5728 CSS \u4EE3\u7801\u53CA\u4F7F\u7528 DOM \u64CD\u4F5C\u76F8\u5173\u6837\u5F0F\u65F6\uFF0C\u5E94\u660E\u786E\u4E3A\u5176\u6807\u6CE8\u5355\u4F4D\u5B57\u7B26\u3002 "
        },
        "RY8003": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9 CSS \u9519\u8BEF\u89E3\u6790\u89C4\u5219\u7684\u5DEE\u5F02\u53CA CSS hack"
        },
        "RY8003_suggestion": {
            "message": "\u5408\u7406\u8FD0\u7528\u5404\u6D4F\u89C8\u5668\u5BF9 CSS \u9519\u8BEF\u89E3\u6790\u89C4\u5219\u7684\u5DEE\u5F02\u53CA CSS hack \u4E3A\u4E0D\u540C\u6D4F\u89C8\u5668\u8D4B\u4E88\u4E0D\u540C\u6837\u5F0F\u3002"
        },
        "RY8004": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E0D\u5408\u6CD5\u7684\u7C7B\u9009\u62E9\u5668\u540D\u79F0\u7684\u5BB9\u9519\u7A0B\u5EA6\u5B58\u5728\u5DEE\u5F02"
        },
        "RY8004_suggestion": {
            "message": "\u575A\u6301\u4EE5\u5B57\u6BCD\u5F00\u5934\u547D\u540D\u9009\u62E9\u5668\uFF0C\u8FD9\u6837\u53EF\u4FDD\u8BC1\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E0B\u90FD\u80FD\u517C\u5BB9\u3002"
        },
        "RY8005": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E8E\u8BA1\u7B97\u540E\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E3A\u542B\u6709\u5C0F\u6570\u7684\u957F\u5EA6\u503C\u65F6\uFF0C\u5176\u6700\u7EC8\u503C\u4F1A\u4E0D\u4E00\u81F4"
        },
        "RY8005_suggestion": {
            "message": "\u5982\u679C\u9875\u9762\u9700\u8981\u7CBE\u786E\u5230\u50CF\u7D20\u7EA7\u7684\u8BDD\uFF0C\u5EFA\u8BAE\u4E3A\u5BBD\u9AD8\u5C5E\u6027\u6307\u5B9A\u6574\u578B\u503C\u3002"
        },
        "SD2020": {
            "message": "\u4EC5 IE \u548C Firefox \u652F\u6301 window \u5BF9\u8C61\u7684 onerror \u4E8B\u4EF6"
        },
        "SD2020_suggestion": {
            "message": "\u653E\u5F03\u4F7F\u7528 window.onerror\uFF0C\u901A\u8FC7\u5408\u7406\u4F7F\u7528 try-catch \u6765\u8FBE\u5230\u8FD1\u4F3C\u7684\u6548\u679C\u3002"
        },
        "SD2021": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u5143\u7D20\u5728\u6CA1\u6709\u8BBE\u7F6E tabindex \u5C5E\u6027\u65F6\u89E6\u53D1 onfocus \u4E8B\u4EF6\u4EE5\u53CA\u901A\u8FC7\u5176 focus() \u65B9\u6CD5\u83B7\u5F97\u7126\u70B9\u7684\u60C5\u51B5\u6709\u5DEE\u5F02"
        },
        "SD2021_suggestion": {
            "message": "\u5BF9\u4E8E\u4E00\u822C\u5E38\u89C1\u7684\u53EF\u89C6\u5143\u7D20\uFF0C\u82E5\u9700\u8981\u5143\u7D20\u53EF\u89E6\u53D1 onfocus \u4E8B\u4EF6\u4EE5\u53CA\u901A\u8FC7\u5176 focus() \u65B9\u6CD5\u83B7\u5F97\u7126\u70B9\uFF0C\u5219\u5E94\u4E3A\u5176\u8BBE\u7F6E tabindex \u5C5E\u6027\u3002"
        },
        "SD2023": {
            "message": "IE Chrome Safari \u5728\u8BA1\u7B97 'overflow' \u7279\u6027\u503C\u4E3A visible \u7684\u5BB9\u5668\u7684 scrollHeight \u7684\u503C\u65F6\u4F1A\u8003\u8651\u5176\u5185\u8131\u79BB\u4E86\u6587\u672C\u6D41\u7684\u5143\u7D20"
        },
        "SD2023_suggestion": {
            "message": "\u786E\u4FDD\u8BFB\u53D6 scrollHeight \u5C5E\u6027\u7684\u5143\u7D20\u5747\u521B\u5EFA\u4E86\u65B0\u7684 block formatting context\uFF0C\u6216\u8005\u6B64\u5BB9\u5668\u4E0E\u5185\u90E8\u5B50\u5BB9\u5668\u5904\u4E8E\u540C\u4E00\u6587\u6863\u6D41\u4E2D\uFF0C\u4EE5\u6B64\u907F\u514D\u5404\u6D4F\u89C8\u5668\u4E2D\u8BFB\u6570\u4E0D\u540C\u3002"
        },
        "SD9001": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u7684 getElementById \u65B9\u6CD5\u80FD\u4EE5 name \u5C5E\u6027\u4E3A\u53C2\u6570\u83B7\u53D6\u67D0\u4E9B\u5143\u7D20"
        },
        "SD9001_suggestion": {
            "message": "\u5728\u4F7F\u7528 document.getElementById \u65B9\u6CD5\u83B7\u53D6\u9875\u9762\u5143\u7D20\u65F6\uFF0C\u5E94\u4F20\u5165\u5143\u7D20\u7684 id \u5C5E\u6027\u503C\uFF0C\u800C\u4E0D\u80FD\u4F7F\u7528\u5143\u7D20\u7684 name \u5C5E\u6027\u503C\u3002"
        },
        "SD9002": {
            "message": "IE6 IE7 IE8(Q) \u4E2D\u7684 getElementById \u65B9\u6CD5\u7684\u53C2\u6570\u4E0D\u533A\u5206\u5927\u5C0F\u5199"
        },
        "SD9002_suggestion": {
            "message": "\u5728\u4F7F\u7528 document.getElementById \u83B7\u53D6\u9875\u9762\u5143\u7D20\u65F6\uFF0C\u5E94\u4FDD\u8BC1\u4F5C\u4E3A\u53C2\u6570\u7684 id \u4E0E\u76EE\u6807\u5143\u7D20\u7684\u5B9E\u9645 id \u503C\u5B8C\u5168\u4E00\u81F4\u3002"
        },
        "SD9003": {
            "message": "IE \u5728\u521B\u5EFA DOM \u6811\u65F6\u4F1A\u5FFD\u7565\u67D0\u4E9B\u7A7A\u767D\u5B57\u7B26"
        },
        "SD9003_suggestion": {
            "message": "1. \u6CA1\u6709\u5FC5\u8981\u65F6\u5C3D\u91CF\u53BB\u6389\u5404\u6807\u7B7E\u4E4B\u95F4\u7684\u7A7A\u767D\u5B57\u7B26\u3002"
        },
        "SD9004": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D\u7684 NodeList \u63A5\u53E3\u5B58\u5728\u5DEE\u5F02"
        },
        "SD9004_suggestion": {
            "message": "\u8981\u4ECE NodeList \u4E2D\u83B7\u53D6\u5143\u7D20\uFF0C\u8BF7\u4F7F\u7528 NodeList[index]\u3001NodeList[name] \u6216 NodeList.item(index)\uFF0C\u4EE5\u4FDD\u8BC1\u517C\u5BB9\u5404\u6D4F\u89C8\u5668\u3002"
        },
        "SD9005": {
            "message": "IE \u4E2D\u4E00\u4E2A\u5BF9\u8C61\u7684 native \u65B9\u6CD5\u662F\u8DDF\u8BE5\u5BF9\u8C61\u7ED1\u5B9A\u7684"
        },
        "SD9005_suggestion": {
            "message": "\u4F7F\u7528\u51FD\u6570\u5C01\u88C5 DOM \u548C BOM \u5BF9\u8C61\u7684\u539F\u751F\u65B9\u6CD5\uFF0C\u800C\u4E0D\u8981\u4F7F\u7528\u8D4B\u503C\u5F15\u7528\u65B9\u5F0F\u6765\u8C03\u7528\u5B83\u4EEC\u3002"
        },
        "SD9006": {
            "message": "IE \u6DF7\u6DC6\u4E86 DOM \u5BF9\u8C61\u5C5E\u6027\uFF08property\uFF09\u53CA HTML \u6807\u7B7E\u5C5E\u6027\uFF08attribute\uFF09\uFF0C\u9020\u6210\u4E86\u5BF9 setAttribute\u3001getAttribute \u7684\u4E0D\u6B63\u786E\u5B9E\u73B0"
        },
        "SD9006_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 \"Element.setAttribute(\"style\", \"XXX\")\" \u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u8BBE\u7F6E\u5143\u7D20\u7684 style \u5C5E\u6027\uFF0C\u53EF\u4EE5\u6539\u7528\u7B26\u5408\u89C4\u8303\u7684 \"Element.style.cssText = \"XXX\"\"\uFF1B"
        },
        "SD9007": {
            "message": "IE \u5BF9 DOMImplementation \u63A5\u53E3\u7684\u652F\u6301\u7A0B\u5EA6\u505C\u7559\u5728 DOM 1 Core \u9636\u6BB5"
        },
        "SD9007_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528\u5404\u6D4F\u89C8\u5668\u652F\u6301\u7A0B\u5EA6\u4E0D\u540C\u7684 DOMImplementation \u7684\u63A5\u53E3\u3002"
        },
        "SD9008": {
            "message": "\u5DF2\u7ECF\u88AB\u5E9F\u5F03\u7684 DocumentLS \u63A5\u53E3\u76EE\u524D\u4EC5\u5728 Firefox \u548C Opera \u4E0B\u88AB\u90E8\u5206\u652F\u6301"
        },
        "SD9008_suggestion": {
            "message": "\u7531\u4E8E W3C \u63A8\u8350\u7684\u6807\u51C6\u4E2D\uFF0C\u5DF2\u7ECF\u653E\u5F03\u4E86 DocumentLS \u63A5\u53E3\uFF0C\u4E3A\u66F4\u597D\u7684\u517C\u5BB9\u5404\u6D4F\u89C8\u5668\uFF0C\u5EFA\u8BAE\u91C7\u7528 XMLHttpRequest \u65B9\u5F0F\u8F7D\u5165xml\u6587\u4EF6\u3002"
        },
        "SD9009": {
            "message": "Firefox \u548C Opera \u4E0D\u652F\u6301 \"document.styleSheets\" \u901A\u8FC7 STYLE \u5143\u7D20 id \u83B7\u53D6 CSSStyleSheet \u5BF9\u8C61"
        },
        "SD9009_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 \"document.styleSheets\" \u901A\u8FC7 STYLE \u5143\u7D20 id \u83B7\u53D6 CSSStyleSheet \u5BF9\u8C61\uFF0C\u4F7F\u7528 W3C \u89C4\u8303\u4E2D\u7684\u6574\u6570\u4E0B\u6807\u65B9\u5F0F\u83B7\u53D6\u3002"
        },
        "SD9010": {
            "message": "\u4EC5 IE \u4E2D\u7684 createElement \u65B9\u6CD5\u652F\u6301\u4F20\u5165 HTML \u5B57\u7B26\u4E32\u505A\u53C2\u6570"
        },
        "SD9010_suggestion": {
            "message": "\u5BF9\u4E8E\u4E00\u822C\u7684\u975E\u66FF\u6362\u5143\u7D20\uFF0C\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u5747\u4F7F\u7528 W3C \u89C4\u8303\u4E2D\u7684\u6807\u51C6\u7684\u4E3A createElement \u65B9\u6CD5\u4F20\u5165\u6807\u7B7E\u540D\u7684\u505A\u6CD5\u3002"
        },
        "SD9011": {
            "message": "\u4E8B\u4EF6\u6A21\u578B\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u5B58\u5728\u5DEE\u5F02"
        },
        "SD9011_suggestion": {
            "message": "1. \u4F7F\u7528\u7279\u6027\u5224\u65AD\u521B\u5EFA\u65E0\u517C\u5BB9\u6027\u95EE\u9898\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u7ED1\u5B9A\u548C\u89E3\u7ED1\u51FD\u6570"
        },
        "SD9012": {
            "message": "IE6 IE7 IE8 \u4E2D getElementsByName \u65B9\u6CD5\u7684\u53C2\u6570\u4E0D\u533A\u5206\u5927\u5C0F\u5199"
        },
        "SD9012_suggestion": {
            "message": "\u5728\u4F7F\u7528 document.getElementsByName \u65B9\u6CD5\u83B7\u53D6\u9875\u9762\u5143\u7D20\u65F6\uFF0C\u5E94\u4FDD\u8BC1\u4F5C\u4E3A\u53C2\u6570\u7684 name \u4E0E\u76EE\u6807\u5143\u7D20\u7684\u5B9E\u9645 name \u503C\u5B8C\u5168\u4E00\u81F4\u3002"
        },
        "SD9013": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E8E document\u3001document.body\u3001document.documentElement \u5BF9\u8C61\u7684 onscroll \u4E8B\u4EF6\u7684\u652F\u6301\u5B58\u5728\u5DEE\u5F02"
        },
        "SD9013_suggestion": {
            "message": "\u5728\u7ED9\u6574\u4E2A\u6D4F\u89C8\u5668\u7A97\u53E3\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6 (scroll) \u7684\u65F6\u5019\uFF0C\u7ED1\u5B9A\u5230 window \u5BF9\u8C61\u4E0A\u3002"
        },
        "SD9014": {
            "message": "IE \u6807\u51C6\u6A21\u5F0F\u4E2D BODY \u5143\u7D20\u7684\u9AD8\u5EA6\u53D8\u5316\u548C IE6(S) \u4E2D BODY \u5143\u7D20\u7684\u5BBD\u5EA6\u53D8\u5316\u4F1A\u89E6\u53D1 window.onresize \u4E8B\u4EF6"
        },
        "SD9014_suggestion": {
            "message": "1. \u4E0D\u671F\u671B\u89E6\u53D1 window.onresize \u4E8B\u4EF6\u65F6\uFF1A"
        },
        "SD9015": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u4E8E DOM \u5BF9\u8C61\u7684\u9F20\u6807\u6EDA\u8F6E\u4E8B\u4EF6\u4E8B\u4EF6\u5B58\u5728\u5DEE\u5F02"
        },
        "SD9015_suggestion": {
            "message": "\u5229\u7528\u6D4F\u89C8\u5668\u7C7B\u578B\u5224\u65AD\uFF0C\u7ED9\u5404\u6D4F\u89C8\u5668\u7ED1\u5B9A\u5404\u81EA\u652F\u6301\u7684\u9F20\u6807\u6EDA\u8F6E\u4E8B\u4EF6\u3002\u5982\uFF0Cres.html"
        },
        "SD9016": {
            "message": "Firefox \u4E0D\u652F\u6301 DOM \u5BF9\u8C61\u7684 insertAdjacentHTML \u548C insertAdjacentText \u65B9\u6CD5"
        },
        "SD9016_suggestion": {
            "message": "\u5728 Firefox \u4E2D\uFF0C\u53EF\u901A\u8FC7\u6269\u5C55 HTMLElement \u7684\u539F\u578B (prototype) \u6765\u5B9E\u73B0\u8FD9\u4E24\u4E2A\u65B9\u6CD5\uFF1A"
        },
        "SD9017": {
            "message": "Firefox \u4E0D\u652F\u6301 DOM \u5BF9\u8C61\u7684 outerHTML\u3001innerText\u3001outerText \u5C5E\u6027"
        },
        "SD9017_suggestion": {
            "message": "\u5728 Firefox \u4E2D\uFF0C\u53EF\u901A\u8FC7\u6269\u5C55 HTMLElement \u7684\u539F\u578B (prototype) \u6765\u5B9E\u73B0\u76F8\u5173\u5C5E\u6027\u3002"
        },
        "SD9018": {
            "message": "IE6 IE7 IE8(Q) \u4E2D DOM \u5143\u7D20\u7684 offsetParent \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E3A\u8DDD\u79BB\u5176\u6700\u8FD1\u7684\u89E6\u53D1\u4E86 hasLayout \u7684\u7956\u5148\u7EA7\u5143\u7D20"
        },
        "SD9018_suggestion": {
            "message": "\u4F7F\u5F97\u5143\u7D20\u7684 offsetParent \u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u4E00\u81F4\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4EE5\u4E0A\u6D4B\u8BD5\u6837\u4F8B\uFF0C\u53EF\u8003\u8651\u5BF9\u4E8E DIV[id=\"div\"] \u8BBE\u7F6E position \u4E3A\uFF08absolute | relative | fixed\uFF09\u3002"
        },
        "SD9019": {
            "message": "\u63D2\u5165\u7A7A\u767D\u9875\u9762 IFRAME \u5143\u7D20\u65F6 Chrome Safari Opera \u6D4F\u89C8\u5668\u4E2D\u4F1A\u89E6\u53D1 load \u4E8B\u4EF6"
        },
        "SD9019_suggestion": {
            "message": "\u4E3A IFRAME \u6807\u7B7E\u7684 src \u5C5E\u6027\u6307\u5B9A\u5177\u4F53 URL \u540E\u518D\u5C06\u8282\u70B9\u63D2\u5165 DOM \u6811\u4E2D \u3002"
        },
        "SD9022": {
            "message": "\u5404\u6D4F\u89C8\u5668\u5BF9\u9875\u9762 onload \u4E8B\u4EF6\u5904\u7406\u65B9\u5F0F\u4E0D\u4E00\u81F4"
        },
        "SD9022_suggestion": {
            "message": "\u7EDF\u4E00\u4E3A window \u5BF9\u8C61\u7684 onload \u4E8B\u4EF6\u7ED1\u5B9A\u51FD\u6570\uFF0C\u907F\u514D\u5728 Firefox \u4E2D\u4EA7\u751F document.body.onload \u4E8B\u4EF6\u7406\u89E3\u6B67\u4E49\u3002"
        },
        "SD9025": {
            "message": "IE6 IE7 IE8 Opera \u652F\u6301\u9664 INPUT \u548C BUTTON \u5143\u7D20\u4EE5\u5916\u7684\u5176\u4ED6\u5143\u7D20\u7684 click \u65B9\u6CD5"
        },
        "SD9025_suggestion": {
            "message": "\u5EFA\u8BAE\u5C3D\u91CF\u907F\u514D\u5BF9\u9664 INPUT \u548C BUTTON \u5143\u7D20\u4EE5\u5916\u7684\u5176\u4ED6\u5143\u7D20\u901A\u8FC7 click \u65B9\u6CD5\u6A21\u62DF\u9F20\u6807\u70B9\u51FB\u4E8B\u4EF6\u3002"
        },
        "SD9029": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E0B\u5728\u5411\u6587\u6863\u6811\u4E2D\u63D2\u5165\u901A\u8FC7 cloneNode(true) \u521B\u5EFA\u7684\u8282\u70B9\u65F6\uFF0C\u5176\u5185\u7684 SCRIPT \u5143\u7D20\u4E2D\u7684\u811A\u672C\u6267\u884C\u6709\u5DEE\u5F02"
        },
        "SD9029_suggestion": {
            "message": "\u907F\u514D\u6DF1\u5EA6\u590D\u5236 cloneNode(true) \u5305\u542B SCRIPT \u5143\u7D20\u7684\u8282\u70B9\u3002"
        },
        "SD9030": {
            "message": "\u4E3A SELECT \u5BF9\u8C61\u589E\u52A0\u6216\u5220\u9664\u9009\u9879\u7684\u65B9\u6CD5\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u7684\u652F\u6301\u60C5\u51B5\u4E0D\u540C"
        },
        "SD9030_suggestion": {
            "message": "1. \u5728\u6DFB\u52A0 OPTION \u5143\u7D20\u65F6\uFF0C\u5982\u679C\u9700\u8981\u5411\u6307\u5B9A\u7D22\u5F15\u524D\u63D2\u5165 OPTION\uFF0C\u53EF\u4EE5\u4F7F\u7528 options.add(option, index)\uFF1B"
        },
        "SJ2004": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D Date \u5BF9\u8C61\u7684 toLocalString \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4E0D\u4E00\u81F4"
        },
        "SJ2004_suggestion": {
            "message": "\u8981\u83B7\u5F97\u76F8\u540C\u683C\u5F0F\u7684\u65F6\u95F4\u5B57\u7B26\u4E32\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528 Date.prototype.toLocaleString() \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5206\u522B\u4F7F\u7528 getFullYear\u3001getMonth\u3001getDate \u548C getDay \u5206\u522B\u83B7\u5F97\u5404\u5173\u952E\u5B57\u7B26\u4E32\u5E76\u62FC\u88C5\u3002"
        },
        "SJ2007": {
            "message": "IE6 IE7 IE8 \u4E0D\u4F1A\u5FFD\u7565\u6570\u7EC4\u76F4\u63A5\u91CF\u7684\u672B\u5C3E\u7A7A\u5143\u7D20"
        },
        "SJ2007_suggestion": {
            "message": "\u6570\u7EC4\u76F4\u63A5\u91CF\u7684\u6700\u540E\u4E0D\u8981\u51FA\u73B0 ','\uFF0C\u4EE5\u4FDD\u8BC1\u517C\u5BB9\u5404\u6D4F\u89C8\u5668\u3002"
        },
        "SJ5003": {
            "message": "Safari Chrome \u4E2D\u7528 for in \u53EF\u4EE5\u904D\u5386\u51FA Date Array String \u5BF9\u8C61\u4E2D\u88AB\u66F4\u65B0\u7684\u539F\u578B\u65B9\u6CD5"
        },
        "SJ5003_suggestion": {
            "message": "\u5BF9\u4E8E\u6570\u7EC4\uFF0C\u907F\u514D\u7528 for...in \u65B9\u5F0F\u800C\u91C7\u7528\u7D22\u5F15\u5373\u6570\u5B57\u4E0B\u6807\u7684\u5F62\u5F0F\u679A\u4E3E\u6570\u7EC4\u6210\u5458\u3002"
        },
        "SJ9001": {
            "message": "IE6 IE7 IE8 \u7684\u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u5B9E\u73B0\u4E0E\u5176\u4ED6\u6D4F\u89C8\u5668\u6709\u5DEE\u5F02"
        },
        "SJ9001_suggestion": {
            "message": "\u907F\u514D\u4F7F\u7528 IE \u7684\u8FD9\u4E9B\u201C\u7279\u6027\u201D\uFF0C\u4EE5\u4FDD\u8BC1\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\u3002"
        },
        "SJ9002": {
            "message": "Firefox \u5BF9\u6761\u4EF6\u5224\u65AD\u8BED\u53E5\u5757\u5185\u7684\u51FD\u6570\u58F0\u660E\u7684\u5904\u7406\u4E0E\u5176\u4ED6\u6D4F\u89C8\u5668\u6709\u5DEE\u5F02"
        },
        "SJ9002_suggestion": {
            "message": "\u5C06\u6761\u4EF6\u8BED\u53E5\u4E2D\u7684\u51FD\u6570\u58F0\u660E\u66FF\u6362\u4E3A\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u5982\uFF1A"
        },
        "SJ9005": {
            "message": "IE6 IE7 IE8 \u4F1A\u5FFD\u7565 JavaScript \u4EE3\u7801\u4E2D\u5927\u62EC\u53F7\u4E4B\u540E\u7684\u7B2C\u4E00\u4E2A\u5206\u53F7"
        },
        "SJ9005_suggestion": {
            "message": "\u6309\u7167\u89C4\u8303\u4E66\u5199\u6B63\u786E\u7684\u4EE3\u7801\u3002"
        },
        "SJ9006": {
            "message": "\u5728 IE6 IE7 IE8(Q) \u4E2D\u4E0D\u80FD\u5728 JSON \u76F4\u63A5\u91CF\u7684\u6700\u540E\u4E00\u4E2A\u952E\u503C\u5BF9\u540E\u52A0 ','"
        },
        "SJ9006_suggestion": {
            "message": "\u5373\u4FBF\u89C4\u8303\u6CA1\u6709\u5F3A\u8C03\u6700\u540E\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u540E\u8FB9\u4E0D\u80FD\u51FA\u73B0 ','\uFF0C\u4E5F\u8981\u786E\u4FDD\u6700\u540E\u4E00\u4E2A\u952E\u503C\u5BF9\u4E4B\u540E\u6CA1\u6709\u591A\u4F59\u7684 ','\uFF0C\u4EE5\u517C\u5BB9\u5404\u6D4F\u89C8\u5668\u3002"
        },
        "SJ9008": {
            "message": "\u4EC5 IE \u652F\u6301\u4F7F\u7528\u542B\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u7684\u53D8\u91CF\u540D"
        },
        "SJ9008_suggestion": {
            "message": "\u907F\u514D\u5728\u53D8\u91CF\u540D\uFF08\u5373\u6807\u8BC6\u7B26\uFF09\u4E2D\u51FA\u73B0\u4E2D\u6587\u6807\u70B9\uFF0C\u4EE5\u4FDD\u8BC1\u517C\u5BB9\u5404\u6D4F\u89C8\u5668\u3002"
        },
        "SJ9009": {
            "message": "\u5143\u7D20\u7684\u5185\u8054\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u7279\u6B8A\u4F5C\u7528\u57DF\u5728\u5404\u6D4F\u89C8\u5668\u4E2D\u5B58\u5728\u5DEE\u5F02"
        },
        "SJ9009_suggestion": {
            "message": "1. \u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u5185\u8054\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u4F7F\u7528 DOM \u6807\u51C6\u7684\u4E8B\u4EF6\u6CE8\u518C\u65B9\u5F0F\u4E3A\u8BE5\u5143\u7D20\u6CE8\u518C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u5982\uFF1A"
        },
        "SJ9010": {
            "message": "\u5404\u6D4F\u89C8\u5668\u4E2D Date \u5BF9\u8C61\u7684 getYear \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4E0D\u4E00\u81F4"
        },
        "SJ9010_suggestion": {
            "message": "\u8981\u83B7\u5F97\u4E00\u4E2A\u5177\u4F53\u65F6\u95F4\u7684\u5E74\u4EFD\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528 Date.prototype.getYear() \u65B9\u6CD5\uFF0C\u4F7F\u7528 Date.prototype.getFullYear() \u4EE3\u66FF\uFF0C\u4EE5\u5728\u5404\u6D4F\u89C8\u5668\u4E0B\u83B7\u5F97\u76F8\u540C\u7684\u8868\u73B0\u3002"
        },
        "allProblemsSummary": {
            "message": "\u53D1\u73B0 $1 \u4E2A\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5176\u4E2D\uFF1A"
        },
        "bd_DTDTableTitle": {
            "message": "\u70B9\u51FB\u67E5\u770B DTD \u5217\u8868"
        },
        "bd_IECondCommCount": {
            "message": "\u53D1\u73B0\u4EC5 IE \u652F\u6301\u7684\u6761\u4EF6\u6CE8\u91CA $1 \u4E2A\u3002"
        },
        "bd_Q": {
            "message": "\u6DF7\u6742\u6A21\u5F0F"
        },
        "bd_S": {
            "message": "\u6807\u51C6\u6A21\u5F0F"
        },
        "bd_aboutRCAorKB": {
            "message": "\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u89C1\uFF1A$1\u3002"
        },
        "bd_different": {
            "message": "\u4E0D\u540C\u7684"
        },
        "bd_differentDTD": {
            "message": "\u672C\u9875\u5728 IE \u548C Chrome \u4E2D\u5C06\u89E6\u53D1 \u4E0D\u540C\u7684 \u6E32\u67D3\u6A21\u5F0F\uFF0C\u5176\u4E2D IE \u4E2D\u4E3A $1\uFF0CChrome \u4E2D\u4E3A $2\u3002"
        },
        "bd_hasConditionalComm": {
            "message": "\u8FD9\u4E2A DTD \u4F7F Chrome \u5904\u4E8E $1\uFF0C\u4F46 DTD \u4E4B\u524D\u5B58\u5728 IE \u6761\u4EF6\u6CE8\u91CA\uFF0C\u53EF\u80FD\u4F7F IE \u8FDB\u5165\u6DF7\u6742\u6A21\u5F0F\u3002"
        },
        "bd_hasDTD": {
            "message": "\u672C\u9875\u8BBE\u7F6E\u4E86 DTD ( $1 )\u3002"
        },
        "bd_hasDeprecatedAttribute": {
            "message": "\u53D1\u73B0\u4F1A\u5BFC\u81F4\u517C\u5BB9\u95EE\u9898\u7684\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u5C5E\u6027 $1\uFF0C\u4F4D\u4E8E\u6807\u7B7E $2 \u5185\uFF0C\u5EFA\u8BAE\u66FF\u6362\u5B83\u3002"
        },
        "bd_hasDeprecatedTag": {
            "message": "\u53D1\u73B0\u4F1A\u5BFC\u81F4\u517C\u5BB9\u95EE\u9898\u7684\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u6807\u7B7E $1\uFF0C\u5EFA\u8BAE\u66FF\u6362\u5B83\u3002"
        },
        "bd_linkNotInHeadCount": {
            "message": "\u6709 $1 \u4E2A LINK \u6807\u8BB0\u672A\u653E\u7F6E\u5728 HEAD \u6807\u7B7E\u5185\uFF0C\u5982\u679C\u662F\u52A8\u6001\u521B\u5EFA\u7684\u6B64\u6807\u7B7E\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5B83\u5931\u6548\u3002"
        },
        "bd_makeIEBeInQuirksMode": {
            "message": "DTD \u4E4B\u524D\u5B58\u5728\u6CE8\u91CA\u6216\u8005 XML \u58F0\u660E\u7B49\u5185\u5BB9\uFF0C\u6709\u53EF\u80FD\u5728 IE \u4E2D\u4F7F\u6D4F\u89C8\u5668\u8FDB\u5165\u6DF7\u6742\u6A21\u5F0F\u3002"
        },
        "bd_noDTD": {
            "message": "\u672C\u9875\u6CA1\u6709\u8BBE\u7F6E DTD\uFF0C\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u5C06\u4EE5 $1 \u6E32\u67D3\uFF0C"
        },
        "bd_reducePossibility": {
            "message": "\u5EFA\u8BAE\u4F7F\u7528\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u5747\u89E6\u53D1\u6807\u51C6\u6A21\u5F0F\u7684 DTD\uFF0C\u4EE5\u51CF\u5C11\u51FA\u73B0\u517C\u5BB9\u6027\u95EE\u9898\u7684\u53EF\u80FD\u3002"
        },
        "bd_removeComment": {
            "message": "\u5EFA\u8BAE\u5220\u9664 DTD \u4E4B\u524D\u7684\u5185\u5BB9\uFF0C\u4EE5\u51CF\u5C11\u51FA\u73B0\u517C\u5BB9\u6027\u95EE\u9898\u7684\u53EF\u80FD\u3002"
        },
        "bd_same": {
            "message": "\u76F8\u540C\u7684"
        },
        "bd_sameDTD": {
            "message": "\u672C\u9875\u5728 IE \u548C Chrome \u4E2D\u5C06\u89E6\u53D1 $1 \u6E32\u67D3\u6A21\u5F0F\uFF0C\u5747\u4E3A $2 \u3002"
        },
        "bd_strangeDTD": {
            "message": "\u8FD9\u4E2A DTD \u4F7F Chrome \u5904\u4E8E $1\uFF0C\u4F46\u6709\u53EF\u80FD\u4F7F IE \u8FDB\u5165\u6DF7\u6742\u6A21\u5F0F\u3002"
        },
        "close": {
            "message": "\u5173\u95ED"
        },
        "detectionFinished": {
            "message": "\u68C0\u6D4B\u5B8C\u6210\u3002"
        },
        "errorProblemsSummary": {
            "message": "\u9519\u8BEF\u7EA7\u522B\u95EE\u9898 $1 \u4E2A\uFF1A"
        },
        "errorTitleText": {
            "message": "\u53D1\u73B0\u9519\u8BEF\u7EA7\u522B\u7684\u95EE\u9898\n\u70B9\u51FB\u67E5\u770B"
        },
        "extensionDescription": {
            "message": "\u68C0\u6D4B\u7F51\u9875\u517C\u5BB9\u6027\u95EE\u9898\u3002\u7531 Google Chrome \u9879\u76EE\u7EC4\u53D1\u8D77\u3002"
        },
        "extensionName": {
            "message": "\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u68C0\u6D4B\u5DE5\u5177"
        },
        "hideAnnotations": {
            "message": "\u70B9\u51FB\u56FE\u6807\u9690\u85CF\u6807\u6CE8"
        },
        "mOfN": {
            "message": "\u7B2C $1 \u4E2A \u5171 $2 \u4E2A"
        },
        "moreInfo": {
            "message": "\u66F4\u591A\u4FE1\u606F"
        },
        "next": {
            "message": "\u4E0B\u4E00\u4E2A"
        },
        "normalTitleText": {
            "message": "\u70B9\u51FB\u6B64\u6309\u94AE\u5F00\u59CB\u68C0\u6D4B\u672C\u9875\u9762\u7684\u517C\u5BB9\u6027\u95EE\u9898"
        },
        "numberOfIssues": {
            "message": "\u627E\u5230 $1 \u4E2A\u8B66\u544A\u548C $2 \u4E2A\u9519\u8BEF"
        },
        "okTitleText": {
            "message": "\u6682\u65F6\u6CA1\u6709\u53D1\u73B0\u95EE\u9898"
        },
        "opt_about": {
            "message": "\u5173\u4E8E"
        },
        "opt_aboutFeedback": {
            "message": "\u610F\u89C1\u53CD\u9988"
        },
        "opt_aboutReference": {
            "message": "\u76F8\u5173\u53C2\u8003"
        },
        "opt_base": {
            "message": "\u57FA\u672C\u9009\u9879"
        },
        "opt_detectors": {
            "message": "\u8BF7\u9009\u62E9\u9700\u8981\u5728\u9AD8\u7EA7\u68C0\u6D4B\u4E2D\u62A5\u544A\u7684\u517C\u5BB9\u6027\u95EE\u9898\uFF1A"
        },
        "opt_email": {
            "message": "\u7535\u5B50\u90AE\u4EF6"
        },
        "opt_invertSelection": {
            "message": "\u53CD\u9009"
        },
        "opt_selectAll": {
            "message": "\u5168\u9009"
        },
        "opt_selectNone": {
            "message": "\u6E05\u7A7A"
        },
        "opt_shareOnTencent": {
            "message": "\u5230 \u817E\u8BAF\u5FAE\u535A \u8BF4\u8BF4"
        },
        "opt_shareOnTwitter": {
            "message": "\u5230 Twitter \u8BF4\u8BF4"
        },
        "opt_shareOnWeibo": {
            "message": "\u5230 \u65B0\u6D6A\u5FAE\u535A \u8BF4\u8BF4"
        },
        "opt_shareTitle": {
            "message": "#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u68C0\u6D4B\u5DE5\u5177# \u8BF4\u8BF4\u4F60\u7684\u60F3\u6CD5\u5427~~"
        },
        "opt_support": {
            "message": "\u5982\u679C\u60A8\u89C9\u5F97\u672C\u5DE5\u5177\u5BF9\u60A8\u6709\u7528\uFF0C\u8BF7\u5230\u7F51\u4E0A\u5E94\u7528\u5546\u5E97\u4E3A\u6211\u4EEC \u003Ca href=\"https://chrome.google.com/webstore/detail/fcillahbnhlpombgccogflhmgocfifma\" target=\"_blank\"\u003E\u6295\u4E0A\u4E00\u7968\u003C/a\u003E\u3002"
        },
        "opt_title": {
            "message": " - \u9009\u9879"
        },
        "popup_advancedDetection": {
            "message": "\u9AD8\u7EA7\u68C0\u6D4B"
        },
        "popup_baseDetection": {
            "message": "\u57FA\u672C\u68C0\u6D4B"
        },
        "popup_cannotDetect": {
            "message": "\u4E0D\u80FD\u68C0\u6D4B\u672C\u9875\u9762\u3002"
        },
        "popup_checkboxEffectTip": {
            "message": "\u63D0\u793A\uFF1A\u9009\u4E2D\u95EE\u9898\u5BF9\u5E94\u7684\u590D\u9009\u6846\u53EF\u5728\u9875\u9762\u4E0A\u6807\u6CE8\u95EE\u9898\u8282\u70B9\uFF0C\u5E76\u663E\u793A\u5355\u4E2A\u95EE\u9898\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002"
        },
        "popup_detecting": {
            "message": "\u6B63\u5728\u68C0\u6D4B\uFF0C\u8BF7\u7A0D\u5019\u2026\u2026"
        },
        "popup_detectionStatus": {
            "message": "\u4ECD\u5728\u68C0\u6D4B\u4E2D\uFF0C\u76EE\u524D"
        },
        "popup_issueCount": {
            "message": "\u51FA\u73B0\u6B21\u6570"
        },
        "popup_issueDescription": {
            "message": "\u95EE\u9898\u63CF\u8FF0"
        },
        "popup_loading": {
            "message": "\u7B49\u5F85\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u2026\u2026"
        },
        "popup_noProblem": {
            "message": "\u6CA1\u6709\u53D1\u73B0\u517C\u5BB9\u6027\u95EE\u9898\u3002"
        },
        "previous": {
            "message": "\u4E0A\u4E00\u4E2A"
        },
        "showAnnotations": {
            "message": "\u70B9\u51FB\u56FE\u6807\u663E\u793A\u6807\u6CE8"
        },
        "suggestion": {
            "message": "\u5EFA\u8BAE: "
        },
        "warningProblemsSummary": {
            "message": "\u8B66\u544A\u7EA7\u522B\u95EE\u9898 $1 \u4E2A\uFF1A"
        },
        "warningTitleText": {
            "message": "\u53D1\u73B0\u8B66\u544A\u7EA7\u522B\u7684\u95EE\u9898\n\u70B9\u51FB\u67E5\u770B"
        }
    }

    window.chrome = window.chrome || {};
    chrome.i18n = chrome.i18n || {};
    chrome.i18n.getMessage = function(name, params) {
        if (name === '@@ui_locale') {
            return 'zh-cn';
        }
        var message = arrI18n[name];
        message = message ? message.message: '';
        if (params) {
            var param;
            for (var i = 0,
            c = params.length; i < c; i++) {
                param = params[i];
                message = message.replace(RegExp('\\$' + (i + 1), 'g'), param);
            }
        }
        return message;
    }


    //_onCompatibilityEnd为firefox扩展中定义的方法

    // Used when saving a list.
    var SEPARATOR = ',';

    /**
     * Event name to trigger the compatibility detector to start.
     */
    var EVENT_CHROME_COMP_LOAD = 'chrome_comp_load';

    var EVENT_END_OF_DETECTION = 'chrome_comp_endOfDetection';

    var EVENT_PROBLEM_DETECTED = 'chrome_comp_problemDetected';

    var EVENT_GET_MESSAGE = 'chrome_comp_getMessage';
    var ATTR__MESSAGE_RESULT = 'chrome_comp_messageResult';

    var DISABLED_DETECTORS = 'chrome_comp_disabled_detectors';

    var REQUEST_GET_DISABLED_DETECTORS = 'getDisabledDetectors';

    var REQUEST_PAGE_LOAD = 'pageLoad';
    var REQUEST_PAGE_UNLOAD = 'pageUnload';

    var REQUEST_GET_CROSS_ORIGIN_CSS = 'getCrossOriginCSS';
    var REQUEST_GET_CROSS_ORIGIN_CSS_FINISHED = 'getCrossOriginCSSFinished';

    var REQUEST_DETECT_PROBLEMS = 'detectProblems';

    var REQUEST_RUN_BASE_DETECTION = 'runBaseDetection';

    var REQUEST_SET_STATUS = 'setStatus';

    var REQUEST_COMPATIBILITY_RESULT = 'CompatibilityResult';

    var REQUEST_END_OF_DETECTION = 'endOfDetection';

    var W3HELP_RCA_BASE_URL = 'http://www.w3help.org/zh-cn/causes/';

    ;
    /*
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var INJECT_SCRIPT_EVENT_NAME = 'chrome_comp_injectScript';
    var INJECTED_SCRIPT_ATTR_NAME = 'chrome_comp_injectedScript';

    function log(message) {
        // Uncomment this for debugging. Comment it before release:
        // window.console.log(message);
    }

    var docElement = document.documentElement;

    // Creates a script node on the page to inject arbitary script from content
    // script to the page.
    // Use window.eval(scriptString) to inject the script.
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('document.documentElement.addEventListener("' + INJECT_SCRIPT_EVENT_NAME +
    // The name of this function is an indicator of injected code
    // (see chrome_comp.dumpStack).
    '", function chrome_comp_injector() {' + 'try {' + 'window.eval(document.documentElement.getAttribute("' + INJECTED_SCRIPT_ATTR_NAME + '"));' + '} catch (e) { window.console.log(e.stack || e); }' + 'document.documentElement.removeAttribute("' + INJECTED_SCRIPT_ATTR_NAME + '");});'));
    docElement.appendChild(script);

    // Set flag in shared dom to indicate the start part has been injected.
    docElement.setAttribute('chrome_comp_injected', true);

    // For the page to get language dependent message text from the extension.
    // Depends on:
    //   documentElement's attribute: chrome_comp_messageName,
    //   chrome_comp_messageParams, ATTR__MESSAGE_RESULT
    docElement.addEventListener(EVENT_GET_MESSAGE,
    function() {
        var name = docElement.getAttribute('chrome_comp_messageName');
        var params = docElement.getAttribute('chrome_comp_messageParams');
        docElement.setAttribute(ATTR__MESSAGE_RESULT, chrome.i18n.getMessage(name, params ? JSON.parse(params) : undefined));
    });

    /**
     * @param {object} data maps url to css text
     */
    function getCrossOriginCSSFinished(data) {
        if (data) {
            for (var url in data) {
                log('Insert cross origin style sheet : ' + url);
                insertStyleNodeAfter(crossOriginStyleSheets[url], data[url]);
            }
        }

        var event = document.createEvent('Event');
        event.initEvent(EVENT_CHROME_COMP_LOAD, true, true);
        window.dispatchEvent(event);
    }

    // Maps url to style sheet link nodes.
    var crossOriginStyleSheets = {};

    function initCrossOriginStyleSheets() {
        /*
      var styleSheets = document.styleSheets;
      for (var i = 0, c = styleSheets.length; i < c; ++i) {
        var styleSheet = styleSheets[i];
        if (styleSheet.cssRules == null && styleSheet.ownerNode !== null) {
          crossOriginStyleSheets[styleSheet.href] = styleSheet.ownerNode;
        }
      }
      var keys = Object.keys(crossOriginStyleSheets);
      if (keys.length) {
        log(REQUEST_GET_CROSS_ORIGIN_CSS + ' : ' + keys.length);
        chrome.extension.sendRequest({
          type: REQUEST_GET_CROSS_ORIGIN_CSS,
          urlMap: getKeysMap(crossOriginStyleSheets)
        });
      } else {
       */
        getCrossOriginCSSFinished();
        //}
    }

    /**
     * @return {Object} key to true map
     */
    function getKeysMap(obj) {
        var keys = {};
        for (var key in obj) keys[key] = true;
        return keys;
    }

    var detectionStarted = false;

    function detectProblems() {
        if (detectionStarted) return;
        detectionStarted = true;
        initCrossOriginStyleSheets();
    }

    function insertStyleNodeAfter(node, cssText) {
        var styleNode = document.createElement('style');
        styleNode.appendChild(document.createTextNode(cssText));
        inserAfter(node, styleNode);
    }

    function inserAfter(node, newNode) {
        var parentNode = node.parentNode;
        var nextSibling = node.nextSibling;
        if (nextSibling) parentNode.insertBefore(newNode, nextSibling);
        else parentNode.appendChild(newNode);
    }

    function addSourceToInject(source, debug) {
        var debug = true;
        if (debug) {
            var script = document.createElement('script');
            script.appendChild(document.createTextNode(source));
            docElement.appendChild(script);
        } else {
            var event = document.createEvent('Event');
            event.initEvent(INJECT_SCRIPT_EVENT_NAME, true, true);
            docElement.setAttribute(INJECTED_SCRIPT_ATTR_NAME, source);
            docElement.dispatchEvent(event);
        }
    }

    /**
     * Injects script from content script to the page.
     * @param {function} scriptFunction A function object (or string), it will be
     *     injected into the page as eval('(scriptFunction.toString())()').
     */
    function addScriptToInject(scriptFunction, debug) {
        addSourceToInject('(' + scriptFunction.toString() + ')()', debug);
    }

    /**
     * Creates shared code both in content script and in page script.
     * @param {function} scriptFunction It will be injected to the page, and also
     *     executed in content script.
     */
    function addScriptToInjectAndExecuteInContentScript(scriptFunction) {
        addScriptToInject(scriptFunction);
        scriptFunction();
    }

    function getBaseDetectionMessages(callback, context) {
        window.CALLBACKINFO = {
            callback: callback,
            context: context
        };

        var data = runBaseDetection();
        var baseStatus = getBaseDetectionStatus();

        var w3helpLocale = 'http://www.w3help.org/' + chrome.i18n.getMessage('@@ui_locale');
        var arrAllResults = [],
        result = [];
        var dtdLink = w3helpLocale + '/kb/001#common_dtd';

        var kb001 = chrome.i18n.getMessage('bd_aboutRCAorKB', ['( ' + w3helpLocale + '/kb/001 )']);
        var isUnusualDocType = data.documentMode.isUnusualDocType;
        var quirksMode = chrome.i18n.getMessage('bd_Q');
        var standardsMode = chrome.i18n.getMessage('bd_S');
        var mode = (data.documentMode.WebKit == 'S') ? standardsMode: quirksMode;
        var hg8001 = chrome.i18n.getMessage('bd_aboutRCAorKB', ['( ' + w3helpLocale + '/causes/HG8001 )']);

        // Process data.documentMode
        result = [];
        if (data.documentMode.hasDocType) {
            if (isUnusualDocType) {
                result.push(chrome.i18n.getMessage('bd_strangeDTD', [mode]));
            }
            if (data.documentMode.hasConditionalCommentBeforeDTD) {
                result.push(chrome.i18n.getMessage('bd_hasConditionalComm', [mode]));
            } else if (data.documentMode.hasCommentBeforeDTD) {
                result.push(chrome.i18n.getMessage('bd_makeIEBeInQuirksMode') + hg8001);
            }

            if (data.documentMode.IE != data.documentMode.WebKit) {
                if (!isUnusualDocType) {
                    if (data.documentMode.IE) {
                        result.push(chrome.i18n.getMessage('bd_differentDTD', [(data.documentMode.IE == 'Q') ? quirksMode: standardsMode, (data.documentMode.WebKit == 'Q') ? quirksMode: standardsMode]) + chrome.i18n.getMessage('bd_reducePossibility') + kb001);
                    } else {
                        result.push(chrome.i18n.getMessage('bd_removeComment'));
                    }
                } else {
                    result.push(chrome.i18n.getMessage('bd_reducePossibility') + kb001);
                }
            }
        } else {
            // The page has no doctype.
            result.push(chrome.i18n.getMessage('bd_noDTD', [chrome.i18n.getMessage('bd_Q')]) + chrome.i18n.getMessage('bd_reducePossibility') + kb001);
        }
        if (result.length > 0) {
            arrAllResults.push(result.join(''));
        }

        // Process data.DOM to HTML
        if (data.DOM.IECondComm.length) arrAllResults.push(chrome.i18n.getMessage('bd_IECondCommCount', [data.DOM.IECondComm.length]));

        // Process data.LINK to HTML
        if (data.LINK.notInHeadCount) {
            arrAllResults.push(chrome.i18n.getMessage('bd_linkNotInHeadCount', [data.LINK.notInHeadCount]));
        }

        // Process data.HTMLBase.HTMLDeprecatedTag to HTML
        var deprecatedTag = [];
        for (var tag in data.HTMLBase.HTMLDeprecatedTag) {
            deprecatedTag.push(tag);
        }

        var deprecatedTagLength = deprecatedTag.length;
        if (deprecatedTagLength) {
            for (var i = 0; i < deprecatedTagLength; ++i) {
                arrAllResults.push(chrome.i18n.getMessage('bd_hasDeprecatedTag', [deprecatedTag[i]]));
            }
        }

        // Process data.HTMLBase.HTMLDeprecatedAttribute to HTML
        var tagsHaveDeprecatedAttributes = Object.keys(data.HTMLBase.HTMLDeprecatedAttribute);
        var tagsLength = tagsHaveDeprecatedAttributes.length;

        if (tagsLength) {
            for (var i = 0; i < tagsLength; ++i) {
                var tagListString = [];
                var attrs = data.HTMLBase.HTMLDeprecatedAttribute[tagsHaveDeprecatedAttributes[i]];
                for (var attr in attrs) {
                    tagListString.push(attr);
                }
                arrAllResults.push(chrome.i18n.getMessage('bd_hasDeprecatedAttribute', [tagsHaveDeprecatedAttributes[i], tagListString.join(' ')]));
            }
        }

        /*
        if(baseStatus !== 'ok'){
            for(var i=0,c=arrAllResults.length; i<c; i++){
                _arrCompatibilityResult.push({
                    severity: baseStatus,
                    issueDescription: arrAllResults[i]
                });
            }
        }
        */
        detectProblems();
        //return arrAllResults
    };
    /*
     * Copyright 2011 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    addScriptToInject(function() {

        window.chrome_comp = (function() {
            var targetPageURL_ = window.location;
            // >=0 if hook is enabled.
            var hookDisabledCount_ = 0;

            var messageCache_ = {};

            var BLOCK_DISPLAY_VALUES = {
                block: true,
                'inline-block': true,
                'list-item': true,
                table: true,
                'inline-table': true,
                'table-cell': true,
                'table-caption': true
            };

            return {

                COLOR_TRANSPARENT: 'rgba(0, 0, 0, 0)',

                WHITESPACE: /[ \t\r\n]/,
                LEADING_WHITESPACES: /^[ \t\r\n]+/,
                TRAILING_WHITESPACES: /[ \t\r\n]+$/,

                enableHooks: function(enable) {
                    hookDisabledCount_ += (enable ? 1 : -1);
                },

                areHooksDisabled: function() {
                    return hookDisabledCount_ < 0;
                },

                // Uses it to prompt debug message.
                trace: function(msg) {
                    //      if (chrome_comp.CompDetectorConfig.canTraceBug) {
                    //        console.log(new Date().getTime() + ' $chrome_comp for : ' +
                    //            chrome_comp.getTargetPageURL() + '$');
                    //        console.log(msg);
                    //      }
                },

                // Uses it to implement inherit logic in JavaScript
                extend: function(subClass, superClass) {
                    // Use prototype chain to inherit baseClass's method.
                    function tempCtor() {};
                    tempCtor.prototype = superClass.prototype;
                    subClass.superclass = superClass.prototype;
                    subClass.prototype = new tempCtor();
                    subClass.prototype.constructor = subClass;

                    // TODO: is the following necessary?
                    if (superClass.prototype.constructor == Object.prototype.constructor) {
                        superClass.prototype.constructor = superClass;
                    }
                },

                clone: function(object) {
                    function stubObj() {}
                    stubObj.prototype = object;
                    var newObj = new stubObj();
                    // TODO: add comments here
                    newObj.chrome_comp_getInternalObject = function() {
                        return this.__proto__;
                    }
                    // TODO: add comments here
                    newObj.toString = function() {
                        try {
                            return this.__proto__.toString();
                        } catch(e) {
                            return 'object Object';
                        }
                    }
                    return newObj;
                },

                ellipsize: function(string, maxLength) {
                    return string ? (string.length > maxLength ? string.substring(0, maxLength - 3) + '...': string) : '';
                },

                /**
         * Trim leading and trailing white spaces. It differs from String.trim()
         * that this function doesn't trim non-breakable spaces (\xA0).
         */
                trim: function(s) {
                    return s.replace(chrome_comp.LEADING_WHITESPACES, '').replace(chrome_comp.TRAILING_WHITESPACES, '');
                },

                isAutoOrNull: function(value) {
                    return 'auto' == value || null == value;
                },

                /**
         * Send a request to the content script. The content script uses
         * document.documentElement.addEventListener(name, function()...) to
         * listen to the request. The parameters and result are passed with
         * attributes of document.documentElement.
         */
                sendRequestToContentScript: function(eventName, params, resultName) {
                    var event = document.createEvent('Event');
                    event.initEvent(eventName, false, true);
                    if (params) {
                        for (var i in params) {
                            if (params[i] != undefined) {
                                document.documentElement.setAttribute(i, params[i]);
                            }
                        }
                    }
                    document.documentElement.dispatchEvent(event);
                    if (params) {
                        for (var i in params) {
                            if (params[i] != undefined) {
                                document.documentElement.removeAttribute(i);
                            }
                        }
                    }
                    if (resultName) {
                        var result = document.documentElement.getAttribute(resultName);
                        document.documentElement.removeAttribute(resultName);
                        return result;
                    }
                },

                getMessage: function(name, params) {
                    var result;
                    if (!params) {
                        result = messageCache_[name];
                        if (result) return result;
                    }

                    result = chrome_comp.sendRequestToContentScript(chrome_comp.EVENT_GET_MESSAGE, {
                        chrome_comp_messageName: name,
                        chrome_comp_messageParams: JSON.stringify(params)
                    },
                    chrome_comp.ATTR__MESSAGE_RESULT);

                    if (!params) messageCache_[name] = result;
                    return result;
                },

                /**
         * Dumps the current calling stack, stripping out all frames that are in
         * detector injected code.
         */
                dumpStack: function() {
                    // Disable hooks during dumpStack() because Error.stack might enumerate
                    // properties which will trigger some property hook.
                    chrome_comp.enableHooks(false);
                    try {
                        var stack = new Error().stack;
                        var pos = stack.lastIndexOf('chrome_comp_injector');
                        var pos1 = stack.indexOf('\n', pos);
                        return pos1 == -1 ? '': stack.substring(pos1 + 1);
                    } finally {
                        chrome_comp.enableHooks(true);
                    }
                },

                getSourceAndLine: function(stack) {
                    stack = stack || chrome_comp.dumpStack();
                    var r = /at .*:[0-9]+(?=:[0-9]+)/.exec(stack);
                    return r ? r[0].replace(/^at /, '') : null;
                },

                /**
         * Don't directly use Error.stack because it will cause recursive property
         * hooks. Use this function instead.
         */
                printError: function(message, e) {
                    if (!e) e = new Error();
                    chrome_comp.enableHooks(false);
                    try {
                        chrome_comp.trace(message + (e.stack || e));
                    } finally {
                        chrome_comp.enableHooks(true);
                    }
                },

                /**
         * Check if a call stack is called directly or indirectly from an extension.
         */
                isCalledFromExtension: function(stackDump) {
                    return (stackDump || chrome_comp.dumpStack()).indexOf('chrome-extension://') >= 0;
                },

                getCallSite: function(stackDump) {
                    if (!stackDump) stackDump = chrome_comp.dumpStack();
                    var pos = stackDump.indexOf('\n', pos);
                    return pos == -1 ? stackDump: stackDump.substring(0, pos);
                },

                setPropertyIfNeed: function(obj, property, value) {
                    if (typeof obj[property] == 'undefined') obj[property] = value;
                },

                filterFunctionCallStackByFunctionSignature: function(initialCallStack, functionSignature) {
                    var currentCallStack = initialCallStack;
                    var i = 0;
                    var caller, callerContent;
                    while (currentCallStack.caller) {
                        if (i > 20) {
                            chrome_comp.trace('caller checking stack overflow: ' + callerContent);
                            break;
                        }
                        try {
                            caller = currentCallStack.caller;
                            callerContent = caller.toString();
                            // When found the call is called by some library, we ignore this
                            // call.
                            if (callerContent.search(functionSignature) > -1) {
                                return true;
                            }
                        } catch(e) {
                            chrome_comp.printError('trace caller stack error: ', e);
                        }
                        currentCallStack = caller.arguments.callee;
                        i++;
                    }
                    return false;
                },

                getTargetPageURL: function() {
                    return targetPageURL_;
                },

                nodeContents: function(node) {
                    // TODO: avoid using outerHTML to improve performance.
                    if (Node.ELEMENT_NODE == node.nodeType) return node.outerHTML;
                    else if (Node.TEXT_NODE == node.nodeType) return node.nodeValue;
                    else return node.toString();
                },

                getAttributeLowerCase: function(ele, name) {
                    if (!ele || !name || Node.ELEMENT_NODE != ele.nodeType) return null;
                    var value = ele.getAttribute(name);
                    return value ? value.toLowerCase() : value;
                },

                getComputedStyle: function(ele, pseudo) {
                    if (!ele) return;
                    var computedStyle = ele.chrome_comp_computedStyleCache;
                    if (computedStyle && !pseudo) return computedStyle;
                    try {
                        computedStyle = ele.ownerDocument.defaultView.getComputedStyle(ele, pseudo);
                        // We cannot cache the style of the pseudo element on the current
                        // element here, or it will override the style of this element itself.
                        if (!pseudo) ele.chrome_comp_computedStyleCache = computedStyle;
                        return computedStyle;
                    } catch(e) {
                        chrome_comp.printError('getComputedStyle error: ', e);
                        chrome_comp.trace(ele);
                    }
                },

                // Note: for scan dom detectors, please use context.isDisplayNone() in
                // checkNode() instead of this function to improve performance.
                isElementTrulyDisplayable: function(ele) {
                    var ownerDocument = ele.ownerDocument;
                    var body = ownerDocument.body;
                    if (!body) return false;
                    var bodyStyle = chrome_comp.getComputedStyle(body);
                    if (bodyStyle.display == 'none') return false;
                    while (ele) {
                        if (ele == ownerDocument) return false;
                        if (ele == body) return true;
                        var eleStyle = chrome_comp.getComputedStyle(ele);
                        if (eleStyle.display == 'none') return false;
                        ele = ele.parentNode;
                    }
                    return false;
                },

                startsBlockBox: function(node) {
                    if (!node) return false;
                    var style = chrome_comp.getComputedStyle(node);
                    return style && BLOCK_DISPLAY_VALUES.hasOwnProperty(style.display);
                },

                startsNewLine: function(node) {
                    if (!node) return false;
                    if (node.tagName == 'BR') return true;
                    var style = chrome_comp.getComputedStyle(node);
                    if (!style) return false;
                    var display = style.display;
                    return display == 'block' || display == 'table' || display == 'list-item';
                },

                getContainingBlock: function(node) {
                    if (Node.ELEMENT_NODE != node.nodeType) node = node.parentNode;
                    if (Node.ELEMENT_NODE != node.nodeType) return document.body;
                    switch (chrome_comp.getComputedStyle(node).position) {
                    case 'fixed':
                        return document.body;
                    case 'absolute':
                        return node.offsetParent;
                    default:
                        for (var parent = node.parentNode; Node.ELEMENT_NODE == parent.nodeType; parent = parent.parentNode) {
                            if (chrome_comp.getComputedStyle(parent).display == 'block') return parent;
                        }
                        return document.body;
                    }
                },

                /**
         * Determines if a node establishes a new block formatting context.
         * About block formatting context refer to
         * http://www.w3.org/TR/CSS21/visuren.html#block-formatting.
         */
                isBlockFormattingContext: function(node) {
                    if (!node || Node.ELEMENT_NODE != node.nodeType) return false;
                    var style = chrome_comp.getComputedStyle(node);
                    if (style.cssFloat != 'none' || style.position == 'absolute' || style.position == 'fixed' || style.display == 'inline-block' || style.display == 'table' || style.display == 'table-cell' || style.display == 'table-caption' || style.overflow != 'visible' || style.overflowX != 'visible' || style.overflowY != 'visible') return true;
                    return false;
                },

                isTableElement: function(node) {
                    if (!node || Node.ELEMENT_NODE != node.nodeType) return false;
                    return chrome_comp.getComputedStyle(node).display.indexOf('table') != -1;
                },

                /**
         * Determines if a node is a shrink-to-fit container element.
         */
                isShrinkToFit: function(node) {
                    if (!node || Node.ELEMENT_NODE != node.nodeType) return false;

                    var specifiedWidth = chrome_comp.getSpecifiedStyleValue(node, 'width');
                    if (!chrome_comp.isAutoOrNull(specifiedWidth)) return false;
                    // For the floating elements, the inline block elements and the absolutely
                    // positioned elements, if 'width' is 'auto', the used value is the
                    // shrink-to-fit width. Refer to:
                    // http://www.w3.org/TR/CSS21/visudet.html#shrink-to-fit-float
                    var style = chrome_comp.getComputedStyle(node);
                    if (style.display == 'inline-block' || style.cssFloat != 'none') return true;
                    if (style.position == 'absolute' || style.position == 'fixed') {
                        // Note: for the absolutely positioned elements, if 'left' and 'right'
                        // are both not 'auto', the 'width' is not 'shrink-to-fit'.
                        if (style.left == 'auto' || style.right == 'auto') return true;
                    }
                    return false;
                },

                /**
         * Returns specified style property information that is defined on specified
         * node (including inline style) by name.
         * @param {object} node node to get prototypes for.
         * @param {string} propertyName CSS property name.
         * @return {object} value of specified style property information. Return
         *     null if the specified property is not defined on the node.
         */
                getSpecifiedStyleValue: function(node, propertyName) {
                    return chrome_comp.getDefinedStylePropertyByName(node, true, propertyName);
                },

                /**
         * Returns specified style property information that is defined on specified
         * node (including inline style) by name.
         * @param {object} node node to get prototypes for.
         * @param {boolean} authorOnly Determines whether only author styles need to
         *     be added.
         * @param {string} propertyName CSS property name.
         * @return {object} value of specified style property information. Return
         *     null if the specified property is not defined on the node.
         */
                // TODO: replace getDefinedStylePropertyByName with getSpecifiedStyleValue
                // This name is too long and has useless authorOnly parameter.
                getDefinedStylePropertyByName: function(node, authorOnly, propertyName) {
                    // CSSStyleDeclaration.getPropertyValue returns null instead of
                    // empty string if the property has not been set in Webkit. So we
                    // initialize the return value as null here.
                    // http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
                    var value = null;
                    if (!node || node.nodeType != Node.ELEMENT_NODE) return value;

                    if (node.style) {
                        value = node.style.getPropertyValue(propertyName);
                        // The !important style takes precedence.
                        if (node.style.getPropertyPriority(propertyName)) return value;
                    }

                    //      var styleRules = node.ownerDocument.defaultView.getMatchedCSSRules( node, '', authorOnly);
                    var styleRules = [{
                        style: node.ownerDocument.defaultView.getComputedStyle(node, '')
                    }];
                    if (!styleRules) return value;

                    for (var i = styleRules.length - 1; i >= 0; --i) {
                        var style = styleRules[i].style;
                        // The !important style may override inline style.
                        if (style.getPropertyPriority(propertyName)) return style.getPropertyValue(propertyName);
                        if (!value) value = style.getPropertyValue(propertyName);
                    }
                    return value;
                },

                isReplacedElement: function(element) {
                    // TODO: put this out of the function
                    var TAG_NAME_LIST = {
                        APPLET: true,
                        BUTTON: true,
                        EMBED: true,
                        HR: true,
                        IFRAME: true,
                        IMG: true,
                        INPUT: true,
                        ISINDEX: true,
                        MARQUEE: true,
                        OBJECT: true,
                        SELECT: true,
                        TEXTAREA: true
                    };
                    if (element) {
                        return element.tagName in TAG_NAME_LIST;
                    }
                    return false;
                },

                getNextNodeInDocument: function(node) {
                    while (node) {
                        if (node.nextSibling) return node.nextSibling;
                        node = node.parentNode;
                    }
                },

                HASLAYOUT_TAG_NAME_LIST: {
                    APPLET: true,
                    BODY: true,
                    BUTTON: true,
                    EMBED: true,
                    FIELDSET: true,
                    HR: true,
                    HTML: true,
                    IFRAME: true,
                    IMG: true,
                    INPUT: true,
                    LEGEND: true,
                    MARQUEE: true,
                    OBJECT: true,
                    SELECT: true,
                    TABLE: true,
                    TD: true,
                    TEXTAREA: true,
                    TH: true,
                    TR: true
                },

                hasLayoutInIE: function(element) {
                    if (! (element && element.nodeType == Node.ELEMENT_NODE)) return false;
                    if (element.tagName in this.HASLAYOUT_TAG_NAME_LIST) return true;
                    var style = chrome_comp.getComputedStyle(element);
                    var width = chrome_comp.getSpecifiedStyleValue(element, 'width');
                    var height = chrome_comp.getSpecifiedStyleValue(element, 'height');
                    if (style.cssFloat != 'none' || style.position == 'absolute' || style.display == 'inline-block' || !chrome_comp.isAutoOrNull(width) || !chrome_comp.isAutoOrNull(height) || chrome_comp.getSpecifiedStyleValue(element, 'zoom') != null) return true;
                    return false;
                },

                /**
         * Determine if the element is in normal flow. In CSS 2.1, normal
         * flow includes block formatting of block-level boxes, inline formatting
         * of inline-level boxes, relative positioning of block-level and
         * inline-level boxes, and formatting of run-in boxes.
         * Refer to: http://www.w3.org/TR/CSS2/visuren.html#positioning-scheme
         */
                isInNormalFlow: function(element) {
                    var style = chrome_comp.getComputedStyle(element);
                    return style.cssFloat == 'none' && style.position != 'absolute' && style.position != 'fixed';
                },

                /**
         * Determines if a node affects normal flow.
         * @param {Node} node the DOM node to test
         * @param {boolean=} opt_ignoreFixedPosition if 'position: fixed' is ignored
         *     (because some browsers don't support it). Default is not to ignore.
         * @return 0 if doesn't affect; 1 if affects; -1 if not determined (e.g. a
         *     span which we don't want to traverse the children)
         */
                mayAffectNormalFlow: function(node, opt_ignoreFixedPosition) {
                    switch (node.nodeType) {
                    case Node.TEXT_NODE:
                        return node.textContent ? 1 : 0;
                    case Node.ELEMENT_NODE:
                        var style = chrome_comp.getComputedStyle(node);
                        var position = style.position;
                        if (position == 'absolute' || (!opt_ignoreFixedPosition && position == 'fixed')) return 0;

                        if (style.cssFloat != 'none') return 0;

                        var display = style.display;
                        switch (display) {
                        case 'none':
                            return 0;
                        case 'inline':
                            return chrome_comp.isReplacedElement(node) ? 1 : -1;
                        default:
                            return 1;
                        }
                    case Node.COMMENT_NODE:
                        return 0;
                    default:
                        return 1;
                    }
                },

                inQuirksMode: function() {
                    return document.compatMode != 'CSS1Compat';
                },

                toInt: function(value) {
                    if (!value) return 0;
                    var result = parseInt(value, 10);
                    if (isNaN(result)) return 0;
                    return result;
                },

                /**
         * Get an element's margin edge, border edge, padding edge and content
         * edge's coordinates.
         * @param {Element} element Target element.
         * @return {object} Contains 4 rectangles: marginBox, borderBox, paddingBox,
         *     contentBox, each rectangle has 4 members: left, top, right, bottom.
         */
                getLayoutBoxes: function(element) {
                    var boundingClientRect = element.getBoundingClientRect();

                    // Adjust the box to the page.
                    var borderBox = {
                        left: boundingClientRect.left + window.pageXOffset,
                        top: boundingClientRect.top + window.pageYOffset,
                        right: boundingClientRect.right + window.pageXOffset,
                        bottom: boundingClientRect.bottom + window.pageYOffset
                    };

                    var style = chrome_comp.getComputedStyle(element);

                    var marginLeft = chrome_comp.getSpecifiedStyleValue(element, 'margin-left');
                    var marginRight = chrome_comp.getSpecifiedStyleValue(element, 'margin-right');
                    var marginTop = chrome_comp.getSpecifiedStyleValue(element, 'margin-top');
                    var marginBottom = chrome_comp.getSpecifiedStyleValue(element, 'margin-bottom');

                    // Fix chrome 10- margin bug.
                    // if margin is null or auto, will full container, fix margin value to 0.
                    marginLeft = (chrome_comp.isAutoOrNull(marginLeft)) ? '0px': style.marginLeft;
                    marginRight = (chrome_comp.isAutoOrNull(marginRight)) ? '0px': style.marginRight;
                    marginTop = (chrome_comp.isAutoOrNull(marginTop)) ? '0px': style.marginTop;
                    marginBottom = (chrome_comp.isAutoOrNull(marginBottom)) ? '0px': style.marginBottom;

                    var marginBox = {
                        left: borderBox.left - chrome_comp.toInt(marginLeft),
                        top: borderBox.top - chrome_comp.toInt(marginTop),
                        right: borderBox.right + chrome_comp.toInt(marginRight),
                        bottom: borderBox.bottom + chrome_comp.toInt(marginBottom)
                    };

                    // Use clientWidth/clientHeight to exclude the scroll bar.
                    var paddingBoxLeft = borderBox.left + chrome_comp.toInt(style.borderLeftWidth);
                    var paddingBoxTop = borderBox.top + chrome_comp.toInt(style.borderTopWidth);
                    var paddingBox = {
                        left: paddingBoxLeft,
                        top: paddingBoxTop,
                        right: paddingBoxLeft + element.clientWidth,
                        bottom: paddingBoxTop + element.clientHeight
                    };

                    var contentBox = {
                        left: paddingBox.left + chrome_comp.toInt(style.paddingLeft),
                        top: paddingBox.top + chrome_comp.toInt(style.paddingTop),
                        right: paddingBox.right - chrome_comp.toInt(style.paddingRight),
                        bottom: paddingBox.bottom - chrome_comp.toInt(style.paddingBottom)
                    };

                    return {
                        marginBox: marginBox,
                        borderBox: borderBox,
                        paddingBox: paddingBox,
                        contentBox: contentBox
                    };
                },

                hasBorder: function(element) {
                    var style = chrome_comp.getComputedStyle(element);
                    return chrome_comp.toInt(style.borderTopWidth) != 0 || chrome_comp.toInt(style.borderRightWidth) != 0 || chrome_comp.toInt(style.borderBottomWidth) != 0 || chrome_comp.toInt(style.borderLeftWidth) != 0;
                },

                hasBackground: function(element) {
                    var style = chrome_comp.getComputedStyle(element);
                    if (style.backgroundColor == 'rgba(0, 0, 0, 0)' && style.backgroundImage == 'none') return false;
                    return true;
                },

                /**
         * This function is only check the computed margin ,
         * do not use it to detect user defined margin.
         */
                hasMargin: function(element) {
                    var style = chrome_comp.getComputedStyle(element);
                    return chrome_comp.toInt(style.marginLeft) != 0 || chrome_comp.toInt(style.marginTop) != 0 || chrome_comp.toInt(style.marginRight) != 0 || chrome_comp.toInt(style.marginBottom) != 0;
                },

                hasPadding: function(element) {
                    var style = chrome_comp.getComputedStyle(element);
                    return chrome_comp.toInt(style.paddingLeft) != 0 || chrome_comp.toInt(style.paddingTop) != 0 || chrome_comp.toInt(style.paddingRight) != 0 || chrome_comp.toInt(style.paddingBottom) != 0;
                },

                hasVisibleFloatingChild: function(element) {
                    var childNodes = Array.prototype.slice.call(element.children);
                    var nodes = [];
                    for (var i = 0,
                    c = childNodes.length; i < c; ++i) {
                        var childNode = childNodes[i];
                        var computedStyle = chrome_comp.getComputedStyle(childNode);
                        if (computedStyle['float'] != 'none' && computedStyle.display != 'none' && childNode.offsetWidth > 0) return true;
                    }
                    return false;
                },

                isMarginLeftAuto: function(element) {
                    return chrome_comp.getSpecifiedStyleValue(element, 'margin-left') == 'auto';
                },

                isMarginRightAuto: function(element) {
                    return chrome_comp.getSpecifiedStyleValue(element, 'margin-right') == 'auto';
                },

                /**
         * If the node is set width value, marginLeft and marginRight
         * value is 'auto', this box is align center.
         */
                isCenterAlignedByMarginAndWidth: function(element) {
                    var computedStyle = chrome_comp.getComputedStyle(element);
                    // Display is inline-table or table-row/table-cell/table-...
                    // all not auto center aligned.
                    if (computedStyle.display.indexOf('table-') == 0 || computedStyle.display == 'inline-talbe') return false;
                    var width = chrome_comp.getSpecifiedStyleValue(element, 'width');
                    // Only display is table and not set style width, can use html attribute
                    // width value instead of style width value.
                    if (width == null && computedStyle.display == 'table') width = element.getAttribute('width');
                    var marginLeft = chrome_comp.getSpecifiedStyleValue(element, 'margin-left');
                    var marginRight = chrome_comp.getSpecifiedStyleValue(element, 'margin-right');
                    if (!chrome_comp.isAutoOrNull(width) && marginLeft == 'auto' && marginRight == 'auto') {
                        return true;
                    }
                    return false;
                },

                /**
         * containerRect.left
         * ^
         * |
         * |<---   containerContentBoxWidth   --->|
         * +--------------------------------------+
         * |    *expect render position           |
         * |    child marginLayoutBox left        |
         * |    |<-- childMarginLayoutBox -->|    |
         * |    +----------------------------+    |
         * |    |         child node         |    |
         * |    |                            |    |
         * |    +----------------------------+    |
         * +--------------------------------------+
         *
         * @param {Element} container
         * @param {Element} child
         * @param {number=} opt_threshold value to ignore small differences of the
         *      layout, default is 1.
         * @return {boolean}
         */
                isVisuallyCenterAligned: function(container, child, opt_threshold) {
                    if ("number" != typeof opt_threshold) opt_threshold = 1;
                    var containerLayoutBoxes = chrome_comp.getLayoutBoxes(container);
                    var childLayoutBoxes = chrome_comp.getLayoutBoxes(child);
                    if (chrome_comp.util.width(childLayoutBoxes.marginBox) > chrome_comp.util.width(containerLayoutBoxes.contentBox)) return true;
                    var leftGap = childLayoutBoxes.marginBox.left - containerLayoutBoxes.contentBox.left;
                    var rightGap = containerLayoutBoxes.contentBox.right - childLayoutBoxes.marginBox.right;
                    return Math.abs(leftGap - rightGap) <= opt_threshold;
                },

                /**
         *          containerContentLayoutBox.right
         *                                        ^
         * |<-- containerContentLayoutBoxWidth -->|
         * +--------------------------------------+
         * |               expect render position*|
         * |       containerContentLayoutBox.right|
         * |         |<-- childMarginLayoutBox -->|
         * |         +----------------------------+
         * |         |        child node          |
         * |         |                            |
         * |         +----------------------------+
         * +--------------------------------------+
         *
         * @param {Element} container
         * @param {Element} child
         * @param {number=} opt_threshold value to ignore small differences of the
         *      layout, default is 1.
         * @return {boolean}
         */
                isVisuallyRightAligned: function(container, child, opt_threshold) {
                    if ("number" != typeof opt_threshold) opt_threshold = 1;
                    var containerLayoutBoxes = chrome_comp.getLayoutBoxes(container);
                    var childLayoutBoxes = chrome_comp.getLayoutBoxes(child);
                    var containerContentBoxRight = containerLayoutBoxes.contentBox.right;
                    var childMarginBoxRight = childLayoutBoxes.marginBox.right;
                    // If child margin box right greater than container contentBox right
                    // (child margin box right overflow container contentBox right),
                    // then the align layout will be invalid, not detecor.
                    if (childMarginBoxRight > containerContentBoxRight) return true;
                    return containerContentBoxRight - childMarginBoxRight <= opt_threshold;
                },

                /**
         * containerContentLayoutBox.left
         * ^
         * |<--containerContentLayoutBox.width -->|
         * +--------------------------------------+
         * |*expect render position               |
         * |containerContentLayoutBox.left        |
         * |<-- childMarginLayoutBox -->|         |
         * +----------------------------+         |
         * |         child node         |         |
         * |                            |         |
         * +----------------------------+         |
         * +--------------------------------------+
         *
         * @param {Element} container
         * @param {Element} child
         * @param {number=} opt_threshold value to ignore small differences of the
         *      layout, default is 1.
         * @return {boolean}
         */
                isVisuallyLeftAligned: function(container, child, opt_threshold) {
                    if ("number" != typeof opt_threshold) opt_threshold = 1;
                    var containerLayoutBoxes = chrome_comp.getLayoutBoxes(container);
                    var childLayoutBoxes = chrome_comp.getLayoutBoxes(child);
                    var containerContentBoxLeft = containerLayoutBoxes.contentBox.left;
                    var childMarginBoxLeft = childLayoutBoxes.marginBox.left;
                    // If child margin box left smaller than container contentBox left
                    // (child margin box left overflow container contentBox left),
                    // then the align layout will be invalid, not detecor.
                    if (childMarginBoxLeft < containerContentBoxLeft) return true;
                    return containerContentBoxLeft - childMarginBoxLeft <= opt_threshold;
                },

                /**
         * Get text node rect. If param is not text node, will return false.
         * @param {TextNode} textNode
         * @return {ClientRect} rect is a map, have keys
         *     {top,bottom,left,right,width,height}, or null if not a text node.
         */
                getTextNodeRect: function(textNode) {
                    if (textNode.nodeType != Node.TEXT_NODE) return null;
                    var range = document.createRange();
                    range.selectNode(textNode);
                    return range.getBoundingClientRect();
                }

            }; // return
        })();

        // Constants that must be written here.
        // Cannot reuse constants.js because they must be injected into the page.
        chrome_comp.EVENT_PROBLEM_DETECTED = 'chrome_comp_problemDetected';

        chrome_comp.DISABLED_DETECTORS = 'chrome_comp_disabled_detectors';
        chrome_comp.EVENT_CHROME_COMP_LOAD = 'chrome_comp_load';
        chrome_comp.EVENT_END_OF_DETECTION = 'chrome_comp_endOfDetection';
        chrome_comp.EVENT_GET_MESSAGE = 'chrome_comp_getMessage';
        chrome_comp.ATTR__MESSAGE_RESULT = 'chrome_comp_messageResult';

        /**
     * The maximum time(ms) waiting for the asynchronized operations to finish.
     */
        chrome_comp.MAX_TIME_WAITING_FINISH = 2000;
        chrome_comp.ASYNC_OPERATION_CHECK_INTERVAL = 100;

        chrome_comp.util = {};

        /**
     * @param {Object} rect A rectangle object, has left/right property.
     */
        chrome_comp.util.width = function(rect) {
            return rect.right - rect.left;
        };

        /**
     * @param {Object} rect A rectangle object, has top/bottom property.
     */
        chrome_comp.util.height = function(rect) {
            return rect.bottom - rect.top;
        };

        chrome_comp.util.endsWith = function(str, suffix) {
            // Refer to:
            // http://stackoverflow.com/questions/280634/endswith-in-javascript
            return str.indexOf(suffix, str.length - suffix.length) != -1;
        }

        chrome_comp.util.startsWith = function(str, prefix) {
            return str.lastIndexOf(prefix, 0) == 0;
        }

        chrome_comp.Rect = function(x, y, w, h) {
            this.left = x;
            this.top = y;
            this.width = w;
            this.height = h;
        };

        // TODO: use .prototype.abc = ... for each function?
        chrome_comp.Rect.prototype = {
            createFromString: function(rectString) {
                // The input rectSring supposed to be array to contain 'x, y, width, height'
                var valueArray = eval(rectString);
                if (valueArray instanceof Array) {
                    this.left = valueArray[0];
                    this.top = valueArray[1];
                    this.width = valueArray[2];
                    this.height = valueArray[3];
                    return true;
                }
                return false;
            },

            clone: function() {
                return new chrome_comp.Rect(this.left, this.top, this.width, this.height);
            },

            copy: function(rect) {
                this.left = rect.left;
                this.top = rect.top;
                this.width = rect.width;
                this.height = rect.height;
            },

            intersection: function(rect) {
                var x0 = Math.max(this.left, rect.left);
                var x1 = Math.min(this.left + this.width, rect.left + rect.width);
                if (x0 <= x1) {
                    var y0 = Math.max(this.top, rect.top);
                    var y1 = Math.min(this.top + this.height, rect.top + rect.height);
                    if (y0 <= y1) {
                        this.left = x0;
                        this.top = y0;
                        this.width = x1 - x0;
                        this.height = y1 - y0;
                        if (!this.width || !this.height) return false;
                        return true;
                    }
                }
                return false;
            },

            unionRect: function(rect) {
                var right = Math.max(this.left + this.width, rect.left + rect.width);
                var bottom = Math.max(this.top + this.height, rect.top + rect.height);
                this.left = Math.min(this.left, rect.left);
                this.top = Math.min(this.top, rect.top);
                this.width = right - this.left;
                this.height = bottom - this.top;
            },

            toString: function() {
                return '(' + this.left + ', ' + this.top + ' - ' + this.width + 'w x ' + this.height + 'h)';
            },

            containsInVertical: function(another) {
                return this.top <= another.top && this.top + this.height >= another.top + another.height;
            },

            containsInHorizontal: function(another) {
                return this.left <= another.left && this.left + this.width >= another.left + another.width;
            },

            contains: function(another) {
                return this.containsInHorizontal(another) && containsInVertical(another);
            },

            isEmpty: function() {
                return (this.width <= 0 || this.height <= 0);
            }
        };

        chrome_comp.PageUtil = {
            // Gets ele's left coordinate related to current page
            pageLeft: function(ele) {
                return ele.offsetParent ? ele.offsetLeft + this.pageLeft(ele.offsetParent) : ele.offsetLeft;
            },

            // Gets ele's top coordinate related to current page
            pageTop: function(ele) {
                return ele.offsetParent ? ele.offsetTop + this.pageTop(ele.offsetParent) : ele.offsetTop;
            },

            // Gets ele's left coordinate related to its parent node
            parentLeft: function(ele) {
                var parentNode = ele.parentNode;
                return parentNode == ele.offsetParent ? ele.offsetLeft: this.pageLeft(ele) - this.pageLeft(parentNode);
            },

            // Gets ele's top coordinate related to its parent node
            parentTop: function(ele) {
                var parentNode = ele.parentNode;
                return parentNode == ele.offsetParent ? ele.offsetTop: this.pageTop(ele) - this.pageTop(parentNode);
            },

            getNodeRects: function(node) {
                if (!node) return [];
                var clientRects;
                var useAncestor;
                while (node) {
                    if (Node.TEXT_NODE == node.nodeType) {
                        var range = document.createRange();
                        range.setStartBefore(node);
                        range.setEndAfter(node);
                        clientRects = range.getClientRects();
                    } else if (node.getClientRects) {
                        clientRects = node.getClientRects();
                    }
                    if (clientRects && clientRects.length) break;
                    // For a node that has no location, returns rectangle of its
                    // nearest parent.
                    node = node.parentNode;
                    useAncestor = true;
                }
                if (!node) return [];

                var useWidth = 0;
                var useHeight = 0;
                var style = chrome_comp.getComputedStyle(node);
                if (style && style.overflow == 'visible') {
                    useWidth = node.scrollWidth;
                    useHeight = node.scrollHeight;
                }
                var rects = [];
                for (var i = 0,
                c = clientRects.length; i < c; i++) {
                    var clientRect = clientRects[i];
                    rects.push({
                        left: clientRect.left + window.pageXOffset,
                        top: clientRect.top + window.pageYOffset,
                        width: c == 1 && useWidth ? useWidth: clientRect.width,
                        height: c == 1 && useHeight ? useHeight: clientRect.height
                    });
                }
                if (useAncestor) rects.fromAncestor = true;
                return rects;
            }
        };

        // param: @object, object, point to the object which has API we want to hook
        // param: @existingMethodName, string, point to the name of API which we want to
        //    hook
        // TODO: rename to ExistingMethodHook
        chrome_comp.ExistingMethodHookObject = function(object, existingMethodName) {
            if (typeof object[existingMethodName] != 'function') throw new Error('the target property is not a function');

            this.hookedObject_ = object;
            this.existingMethodName_ = existingMethodName;
            this.hookHandlersForExistingMethod_ = [];
            this.saveExistingMethodHandler_ = null;
            this.enabled_ = false;

            var This = this;
            // this is orginal this context for orginal function call
            this.newMethodHandler_ = function() {
                // Store the object and existingMethodName for the handler.
                var methodName = This.existingMethodName_;
                var hookedObject = This.hookedObject_;
                if (!This.enabled_ || chrome_comp.areHooksDisabled()) return This.saveExistingMethodHandler_.apply(this, arguments);

                var result, error = null;
                var callStack = arguments.callee;
                try {
                    result = This.saveExistingMethodHandler_.apply(this, arguments);
                } catch(e) {
                    error = e;
                }
                // copy the hookHandlers to a cache in case someone call unregister inside
                // the hookHandler.
                var cacheHandlers = This.hookHandlersForExistingMethod_.concat();
                for (var i = 0,
                c = cacheHandlers.length; i < c; ++i) {
                    try {
                        cacheHandlers[i].call(this, result, arguments, callStack, methodName, hookedObject);
                    } catch(e) {
                        chrome_comp.printError('Error in existing method handler: ', e);
                    }
                }
                if (error) throw error;
                return result;
            };
        };

        chrome_comp.ExistingMethodHookObject.prototype.initialize = function() {
            if (this.saveExistingMethodHandler_) return false; // Already initialized.
            var originalMethod = this.hookedObject_[this.existingMethodName_];
            if (typeof originalMethod != 'function') return false;
            this.saveExistingMethodHandler_ = originalMethod;
            this.hookedObject_[this.existingMethodName_] = this.newMethodHandler_;
            this.enabled_ = true;
            return true;
        };

        chrome_comp.ExistingMethodHookObject.prototype.uninitialize = function() {
            if (this.saveExistingMethodHandler_) {
                if (this.hookedObject_[this.existingMethodName_] == this.newMethodHandler_) {
                    // Reset the original method only if we are still the first handler.
                    this.hookedObject_[this.existingMethodName_] = this.saveExistingMethodHandler_;
                }
            }
            this.enabled_ = false;
        };

        /**
     * Registers a hook to the existing method.
     * @param {function(this:originalThis, Object, Arguments)} hook the hook to
     *     register. The hook will be called when the original method is called,
     *     in the context of the original this, with the first parameter the result
     *     of the original method, and the second parameter the original arguments.
     */
        chrome_comp.ExistingMethodHookObject.prototype.registerHookHandler = function(hook) {
            for (var i = 0,
            c = this.hookHandlersForExistingMethod_.length; i < c; ++i) {
                if (hook == this.hookHandlersForExistingMethod_[i]) {
                    return false;
                }
            }
            this.hookHandlersForExistingMethod_.push(hook);
            chrome_comp.trace('Register existing method hook: ' + this.existingMethodName_);
            return true;
        };

        chrome_comp.ExistingMethodHookObject.prototype.unregisterHookHandler = function(hook) {
            for (var i = 0,
            c = this.hookHandlersForExistingMethod_.length; i < c; ++i) {
                if (hook == this.hookHandlersForExistingMethod_[i]) {
                    chrome_comp.trace('Unregister existing method hook: ' + this.existingMethodName_);
                    this.hookHandlersForExistingMethod_.splice(i, 1);
                    return true;
                }
            }
            return false;
        };

        // TODO: remove this, it is not used anymore
        // ObjectWrapDelegate class will create a empty object(wrapper), map its
        // prototype to the 'originalObject', then search all non-function properties
        // (except those properties which match the propertyNameFilter) of the
        // 'orginalObject' and set corresponding getter/setter to the wrapper.
        // Then you can manipulate the wrapper as 'originalObject' because the wrapper
        // use the corresponding getter/setter to access the corresponding properties in
        // 'originalObject' and the all function calls can be call through the prototype
        // inherit.
        // After creating the wrapper object, you can use watch method to monitor any
        // property which you want to know when it has been read(get) or change(set).
        // Please see the detail comment on method watch.
        // Remember the ObjectWrapDelegate returns the wrapDelegateObject instead of
        // really wrapper object. You have to use ObjectWrapDelegate.getWrapper to get
        // real wrapper object.
        // parameter @originalObject, object which you want to wrap
        chrome_comp.ObjectWrapDelegate = function(originalObject) {
            // The wrapper is the object we use to wrap the 'originalObject'.
            this.wrapper_ = chrome_comp.clone(originalObject);
            // This object to save all watch handlers.
            this.watcherTable_ = {};

            // For closure to access the private data of class.
            var This = this;
            // Set the getter object.
            this.setGetterAndSetter_ = function(propertyName) {
                this.wrapper_.__defineGetter__(propertyName,
                function() {
                    var internalObj = this.chrome_comp_getInternalObject();
                    var returnValue = internalObj[propertyName];
                    if (!chrome_comp.areHooksDisabled()) {
                        // See whether this property has been watched.
                        var watchers = This.watcherTable_[propertyName];
                        if (watchers) {
                            // copy the watcher to a cache in case someone call unwatch inside the
                            // watchHandler.
                            var watchersCache = watchers.concat();
                            for (var i = 0,
                            c = watchersCache.length; i < c; ++i) {
                                var watcher = watchersCache[i];
                                try {
                                    returnValue = watcher.call(this, returnValue, returnValue, 'get');
                                } catch(e) {
                                    chrome_comp.printError('Error in existing property getter handler: ', e);
                                }
                            }
                        }
                    }
                    return returnValue;
                });
                // Set the setter object.
                this.wrapper_.__defineSetter__(propertyName,
                function(newValue) {
                    var internalObj = this.chrome_comp_getInternalObject();
                    if (!chrome_comp.areHooksDisabled()) {
                        var oldValue = undefined;
                        try {
                            oldValue = internalObj[propertyName];
                        } catch(e) {}
                        // See whether this property has been watched.
                        var watchers = This.watcherTable_[propertyName];
                        if (watchers) {
                            // copy the watcher to a cache in case someone call unwatch inside the
                            // watchHandler.
                            var watchersCache = watchers.concat();
                            for (var i = 0,
                            c = watchersCache.length; i < c; ++i) {
                                var watcher = watchersCache[i];
                                try {
                                    newValue = watcher.call(this, oldValue, newValue, 'set');
                                } catch(e) {
                                    chrome_comp.printError('Error in existing property setter handler: ', e);
                                }
                            }
                        }
                    }
                    internalObj[propertyName] = newValue;
                });
            };
        };

        chrome_comp.ObjectWrapDelegate.prototype.getWrapper = function() {
            return this.wrapper_;
        };

        // Watches for a property to be accessed or be assigned a value and runs a
        // function when that occurs.
        // Watches for accessing a property or assignment to a property named prop in
        // this object, calling handler(oldval, newval, reason) whenever prop is
        // get/set and storing the return value in that property.
        // A watchpoint can filter (or nullify) the value assignment, by returning a
        // modified newval (or by returning oldval).
        // When watchpoint is trigering by get opeartor, the oldval is equal with
        // newval. The reason will be 'get'.
        // When watchpoint is trigering by set opeartor, The reason will be 'set'.
        // If you delete a property for which a watchpoint has been set,
        // that watchpoint does not disappear. If you later recreate the property,
        // the watchpoint is still in effect.
        // To remove a watchpoint, use the unwatch method.
        // If register the watchpoint successfully, return true. Otherwise return false.
        chrome_comp.ObjectWrapDelegate.prototype.watch = function(propertyName, watchHandler) {
            var watchers = this.watcherTable_[propertyName];
            if (watchers) {
                for (var i = 0,
                c = watchers.length; i < c; ++i) {
                    if (watchHandler == watchers[i]) return false;
                }
            } else {
                watchers = [];
                this.watcherTable_[propertyName] = watchers;
                this.setGetterAndSetter_(propertyName);
            }
            watchers.push(watchHandler);
            chrome_comp.trace('Set property watch handler for: ' + propertyName);
            return true;
        };

        // Removes a watchpoint set with the watch method.
        chrome_comp.ObjectWrapDelegate.prototype.unwatch = function(propertyName, watchHandler) {
            var watchers = this.watcherTable_[propertyName];
            if (watchers) {
                for (var i = 0,
                c = watchers.length; i < c; ++i) {
                    if (watchHandler == watchers[i]) {
                        watchers.splice(i, 1);
                        chrome_comp.trace('Clear property watch handler for: ' + propertyName);
                        if (watchers.length == 0) {
                            delete this.wrapper_[propertyName];
                            delete this.watcherTable_[propertyName];
                        }
                        return true;
                    }
                }
            }
            return false;
        };

        chrome_comp.SimplePropertyHookObject = function(targetObject, propertyName, opt_getterOnly) {
            this.targetObject_ = targetObject;
            this.propertyName_ = propertyName;
            this.getterOnly_ = opt_getterOnly;
            this.shadowPropertyName_ = 'chrome_comp_hooked_property_' + propertyName;
            targetObject[this.shadowPropertyName_] = targetObject[propertyName];
            this.hookHandlersForSimpleProperty_ = [];

            var This = this;
            this.fakePropertyGetter_ = function() {
                var returnValue = this[This.shadowPropertyName_];
                var handlersCache = This.hookHandlersForSimpleProperty_.concat();
                for (var i = 0,
                c = handlersCache.length; i < c; ++i) {
                    var handler = handlersCache[i];
                    if (handler.permanent || !chrome_comp.areHooksDisabled()) {
                        try {
                            returnValue = handler.call(this, returnValue, returnValue, 'get');
                        } catch(e) {
                            chrome_comp.printError('Error in simple property getter handler: ', e);
                        }
                    }
                }
                this[This.shadowPropertyName_] = returnValue;
                return returnValue;
            };

            if (!opt_getterOnly) {
                this.fakePropertySetter_ = function(newValue) {
                    var oldValue = undefined;
                    try {
                        oldValue = this[This.shadowPropertyName_];
                    } catch(e) {}
                    var handlersCache = This.hookHandlersForSimpleProperty_.concat();
                    for (var i = 0,
                    c = handlersCache.length; i < c; ++i) {
                        var handler = handlersCache[i];
                        if (handler.permanent || !chrome_comp.areHooksDisabled()) {
                            try {
                                newValue = handler.call(this, oldValue, newValue, 'set');
                            } catch(e) {
                                chrome_comp.printError('Error in simple property setter handler: ', e);
                            }
                        }
                    }
                    this[This.shadowPropertyName_] = newValue;
                };
            }
        };

        chrome_comp.SimplePropertyHookObject.prototype.initialize = function() {
            this.targetObject_.__defineGetter__(this.propertyName_, this.fakePropertyGetter_);
            if (!this.getterOnly_) {
                this.targetObject_.__defineSetter__(this.propertyName_, this.fakePropertySetter_);
            }
            return true;
        };

        chrome_comp.SimplePropertyHookObject.prototype.uninitialize = function() {
            // No good way to remove getter/setter.
        };

        chrome_comp.SimplePropertyHookObject.prototype.registerHookHandler = function(hook, opt_permanent) {
            for (var i = 0,
            c = this.hookHandlersForSimpleProperty_.length; i < c; ++i) {
                if (hook == this.hookHandlersForSimpleProperty_[i]) return false;
            }
            hook.permanent = opt_permanent;
            this.hookHandlersForSimpleProperty_.push(hook);
            chrome_comp.trace('Register simple property hook: ' + this.propertyName_);
            return true;
        };

        chrome_comp.SimplePropertyHookObject.prototype.unregisterHookHandler = function(hook) {
            for (var i = 0,
            c = this.hookHandlersForSimpleProperty_.length; i < c; ++i) {
                if (hook == this.hookHandlersForSimpleProperty_[i]) {
                    if (hook.permanent) {
                        chrome_comp.trace('Permanent hook can\'t be unregistered');
                        return false;
                    }
                    chrome_comp.trace('Unregister simple property hook: ' + this.propertyName_);
                    this.hookHandlersForSimpleProperty_.splice(i, 1);
                    return true;
                }
            }
            return false;
        };

        // ******************** The compatibility detector framework ******************
        chrome_comp.CompDetect = (function() {
            console.log("chrome_comp.CompDetect");
            // Array which contains all type detectors
            var detectors_ = [];

            // All problems reported so far.
            // key: type id
            // value: serialized report data, which includes all the occurrences of the
            //     type of problem
            var problems_ = {};
            var actualJSProblems_ = {};
            var expectedJSProblems_ = {};
            var mismatchedProblems_ = [];

            // Control re-entrance of addProblem().
            var inAddProblem_ = false;

            var blockStack_ = [];
            var hasLayoutStack_ = [];
            var currentScanDomDetector_ = null;
            var displayNoneEndNode_ = null;

            function getCurrentStackFrame(stack, opt_offset) {
                opt_offset = opt_offset || 0;
                var depth = stack.length;
                return depth > opt_offset ? stack[depth - opt_offset - 1] : null;
            }

            function putValueInStack(stack, name, value, opt_offset) {
                if (!currentScanDomDetector_) return false;
                var frame = getCurrentStackFrame(stack, opt_offset);
                if (!frame) return false;
                if (!frame.values) frame.values = {};
                if (!frame.values[currentScanDomDetector_]) frame.values[currentScanDomDetector_] = {};
                frame.values[currentScanDomDetector_][name] = value;
                return true;
            }

            function getValueInStack(stack, name, opt_offset) {
                if (!currentScanDomDetector_) return undefined;
                var frame = getCurrentStackFrame(stack, opt_offset);
                if (!frame || !frame.values || !frame.values[currentScanDomDetector_]) return undefined;
                return frame.values[currentScanDomDetector_][name];
            }

            function deleteValueInStack(stack, name, opt_offset) {
                if (!currentScanDomDetector_) return false;
                var frame = getCurrentStackFrame(stack, opt_offset);
                return frame && frame.values && frame.values[currentScanDomDetector_] && delete frame.values[currentScanDomDetector_][name];
            }

            function clearValuesInStack(stack, opt_offset) {
                if (currentScanDomDetector_) {
                    var frame = getCurrentStackFrame(stack, opt_offset);
                    if (frame && frame.values) delete frame.values[currentScanDomDetector_];
                }
            }

            function addPopHandlerInStack(stack, handler, opt_offset) {
                var frame = getCurrentStackFrame(stack, opt_offset);
                if (!frame) return;
                if (!frame.popHandlers) frame.popHandlers = [];
                frame.popHandlers.push(handler);
            }

            function popStack(stack) {
                var frame = getCurrentStackFrame(stack);
                if (!frame) return;
                if (frame.popHandlers) {
                    for (var i = 0,
                    c = frame.popHandlers.length; i < c; i++) frame.popHandlers[i]();
                }
                stack.pop();
            }

            var scanDomContext_ = {
                getParentBlock: function(opt_offset) {
                    var frame = getCurrentStackFrame(blockStack_, opt_offset);
                    return frame ? frame.element: null;
                },
                getCurrentHasLayoutInIE: function(opt_offset) {
                    var frame = getCurrentStackFrame(hasLayoutStack_, opt_offset);
                    return frame ? frame.element: null;
                },
                putValueInBlockStack: function(name, value, opt_offset) {
                    return putValueInStack(blockStack_, name, value, opt_offset);
                },
                getValueInBlockStack: function(name, opt_offset) {
                    return getValueInStack(blockStack_, name, opt_offset);
                },
                deleteValueInBlockStack: function(name, opt_offset) {
                    return deleteValueInStack(blockStack_, name, opt_offset);
                },
                clearValuesInBlockStack: function(opt_offset) {
                    clearValuesInStack(blockStack_, opt_offset);
                },
                addPopHandlerInBlockStack: function(handler, opt_offset) {
                    addPopHandlerInStack(blockStack_, handler, opt_offset);
                },
                putValueInHasLayoutInIEStack: function(name, value, opt_offset) {
                    return putValueInStack(hasLayoutStack_, name, value, opt_offset);
                },
                getValueInHasLayoutInIEStack: function(name, opt_offset) {
                    return getValueInStack(hasLayoutStack_, name, opt_offset);
                },
                deleteValueInHasLayoutInIEStack: function(name, opt_offset) {
                    return deleteValueInStack(hasLayoutStack_, name, opt_offset);
                },
                clearValuesInHasLayoutInIEStack: function(opt_offset) {
                    clearValuesInStack(hasLayoutStack_, opt_offset);
                },
                addPopHandlerInHasLayoutInIEStack: function(handler, opt_offset) {
                    addPopHandlerInStack(hasLayoutStack_, handler, opt_offset);
                },
                isDisplayNone: function() {
                    return displayNoneEndNode_ ? true: false;
                }
            };

            // Processes each element node under the rootNode
            // Param @node, object, current used node
            // Param @compDetectorArray, array, array which contains all available
            //    detectors for current used page.
            function processTree(rootNode, compDetectorArray) {
                var nodeIterator = document.createNodeIterator(rootNode, NodeFilter.SHOW_ALL, null, false);
                var currentNode;
                // First cache all nodes into the nodes array to prevent DOM tree change
                // during detection from breaking NodeIterator.
                var nodes = [];
                while (currentNode = nodeIterator.nextNode()) nodes.push(currentNode);

                for (var i = 0,
                c = nodes.length; i < c; i++) {
                    // The content script will inject a SCRIPT element before the HEAD
                    // element to add a listener for the root element, so we must ignore the
                    // injected SCRIPT element for the processNode function.
                    if (nodes[i].tagName == 'SCRIPT' && nodes[i].parentNode == document.documentElement) continue;
                    processNode(nodes[i], compDetectorArray);
                }

                blockStack_ = [];
                hasLayoutStack_ = [];
                currentScanDomDetector_ = null;
                displayNoneEndNode = null;
            }

            function processNode(currentNode, compDetectorArray) {
                var depth = blockStack_.length;
                if (depth && currentNode == blockStack_[depth - 1].endNode) popStack(blockStack_);
                depth = hasLayoutStack_.length;
                if (depth && currentNode == hasLayoutStack_[depth - 1].endNode) popStack(hasLayoutStack_);
                if (displayNoneEndNode_ && currentNode == displayNoneEndNode_) displayNoneEndNode_ = null;
                // If currentNode's display is none, set displayNoneEndNode_ here, so that
                // scanDomContext_.isDisplayNone will work properly.
                var endNode;
                if (Node.ELEMENT_NODE == currentNode.nodeType) {
                    if (!displayNoneEndNode_ && chrome_comp.getComputedStyle(currentNode).display == 'none') {
                        endNode = endNode || chrome_comp.getNextNodeInDocument(currentNode);
                        displayNoneEndNode_ = endNode;
                    }
                }

                // Check all detectors for this node.
                for (var i = 0,
                c = compDetectorArray.length; i < c; ++i) {
                    var detector = compDetectorArray[i];
                    try {
                        if (detector.canCheckNow()) {
                            currentScanDomDetector_ = detector.constructor.detectorName;
                            detector.checkNode(currentNode, scanDomContext_);
                        }
                    } catch(e) {
                        chrome_comp.printError('Error running detector ' + detector.constructor.detectorName + ': ', e);
                    }
                }

                if (Node.ELEMENT_NODE == currentNode.nodeType) {
                    if (chrome_comp.startsBlockBox(currentNode)) {
                        endNode = endNode || chrome_comp.getNextNodeInDocument(currentNode);
                        blockStack_.push({
                            element: currentNode,
                            endNode: endNode
                        });
                    }
                    if (chrome_comp.hasLayoutInIE(currentNode)) {
                        endNode = endNode || chrome_comp.getNextNodeInDocument(currentNode);
                        hasLayoutStack_.push({
                            element: currentNode,
                            endNode: endNode
                        });
                    }
                }
            }

            function checkDetectionResultForNode(node, expectedProblems, index) {
                var actualProblems = node.chrome_comp_actualProblems;
                if (!actualProblems && !expectedProblems) return;
                expectedProblems = expectedProblems ? expectedProblems.split(' ').sort().join(' ') : '';
                actualProblems = actualProblems ? actualProblems.sort().join(' ') : '';
                if (expectedProblems != actualProblems) {
                    mismatchedProblems_.push({
                        node: node,
                        expected: expectedProblems,
                        actual: actualProblems,
                        index: index
                    });
                    console.log('*** Actual problem not same as expected:');
                    console.log(node);
                    if (index != undefined) {
                        console.log('No. ' + index + ' child of parent: ');
                        console.log(node.parentNode);
                    }
                    console.log('Expected: ' + expectedProblems);
                    console.log('Actual: ' + actualProblems);
                }
            }

            function checkDetectionResultForJS(sourceAndLine) {
                expectedProblems = expectedJSProblems_[sourceAndLine];
                expectedProblems = expectedProblems ? expectedProblems.split(' ').sort().join(' ') : '';
                actualProblems = actualJSProblems_[sourceAndLine];
                actualProblems = actualProblems ? actualProblems.sort().join(' ') : '';
                if (expectedProblems != actualProblems) {
                    mismatchedProblems_.push({
                        sourceAndLine: sourceAndLine,
                        expected: expectedProblems,
                        actual: actualProblems
                    });
                    console.log('*** Actual problem not same as expected:');
                    console.log(sourceAndLine);
                    console.log('Expected: ' + expectedProblems);
                    console.log('Actual: ' + actualProblems);
                }
            }

            function checkDetectionResults(rootNode) {
                var nodeIterator = document.createNodeIterator(rootNode, NodeFilter.SHOW_ELEMENT, null, false);
                var element;
                while (element = nodeIterator.nextNode()) {
                    checkDetectionResultForNode(element, element.getAttribute('expectedproblems'));
                    var childNodes = element.childNodes;
                    var CHILD_PREFIX = 'expectedproblemschild';
                    for (var i = 0,
                    c = element.attributes.length; i < c; i++) {
                        var attr = element.attributes[i];
                        var name = attr.name;
                        if (name.substring(0, CHILD_PREFIX.length) == CHILD_PREFIX) {
                            var index = parseInt(name.substring(CHILD_PREFIX.length));
                            if (index < 0 || index >= childNodes.length || Node.ELEMENT_NODE == childNodes[index].nodeType) {
                                console.log('*** Bad child expected problems: ' + name);
                                console.log(element);
                                mismatchedProblems_.push({
                                    node: element,
                                    badExpectedProblemsChild: name + '=' + attr.value
                                });
                            }
                        }
                    }
                    for (var i = 0,
                    c = childNodes.length; i < c; i++) {
                        var child = childNodes[i];
                        if (Node.ELEMENT_NODE != child.nodeType) {
                            checkDetectionResultForNode(child, element.getAttribute(CHILD_PREFIX + i), i);
                        }
                    }
                }

                for (var i in actualJSProblems_) checkDetectionResultForJS(i);

                if (mismatchedProblems_.length) {
                    console.log('*** ' + mismatchedProblems_.length + ' test(s) failed:');
                    console.log(mismatchedProblems_);
                }
            }

            // Run all scan-dom type detectors for current page.
            function detectPageWithScanDomTypeDetectors(externalDetectors) {
                // Disable all hooks during DOM scanning.
                chrome_comp.enableHooks(false);
                try {
                    var detectors = externalDetectors || detectors_;
                    var scanDomDetectors = [];
                    for (var i = 0,
                    c = detectors.length; i < c; i++) {
                        if (detectors[i] instanceof chrome_comp.CompDetect.ScanDomBaseDetector) scanDomDetectors.push(detectors[i]);
                    }
                    processTree(document.documentElement, scanDomDetectors);
                } finally {
                    chrome_comp.enableHooks(true);
                }
            }

            // Initialize disabledDetectorsStr
            var disabledDetectorsStr = window.sessionStorage.getItem(chrome_comp.DISABLED_DETECTORS);
            if (!disabledDetectorsStr) disabledDetectorsStr = '';

            return {
                
                getAllProblems: function() {
                    return problems_;
                },

                registerExistingMethodHook: function(object, method, handler) {
                    if (!object || !method || !handler) return;
                    if (!object.hasOwnProperty('chrome_comp_methodHooks')) object.chrome_comp_methodHooks = {};
                    var hookObject = object.chrome_comp_methodHooks[method];
                    if (!hookObject) {
                        hookObject = new chrome_comp.ExistingMethodHookObject(object, method);
                        if (!hookObject.initialize()) return;
                        object.chrome_comp_methodHooks[method] = hookObject;
                    }
                    return hookObject.registerHookHandler(handler);
                },

                unregisterExistingMethodHook: function(object, method, handler) {
                    if (!object || !method || !handler || !object.hasOwnProperty('chrome_comp_methodHooks')) return false;
                    var hookObject = object.chrome_comp_methodHooks[method];
                    if (hookObject && hookObject.unregisterHookHandler(handler)) {
                        if (hookObject.hookHandlersForExistingMethod_.length == 0) {
                            hookObject.uninitialize();
                            delete object.chrome_comp_methodHooks[method];
                        }
                        return true;
                    }
                    return false;
                },

                // TODO: remove this, it is not used anymore
                registerExistingPropertyHook: function(ownerObject, ownerProperty, property, handler) {
                    if (!ownerObject || !ownerProperty || !property || !handler) return false;
                    var object = ownerObject[ownerProperty];
                    if (!object || typeof object != 'object') return false;
                    if (!ownerObject.hasOwnProperty('chrome_comp_wrapDelegates')) ownerObject.chrome_comp_wrapDelegates = {};
                    var wrapDelegate = ownerObject.chrome_comp_wrapDelegates[ownerProperty];
                    if (!wrapDelegate) {
                        wrapDelegate = new chrome_comp.ObjectWrapDelegate(object);
                        ownerObject.chrome_comp_wrapDelegates[ownerProperty] = wrapDelegate;
                        ownerObject.__defineGetter__(ownerProperty,
                        function() {
                            return wrapDelegate.getWrapper();
                        });
                    }
                    return wrapDelegate.watch(property, handler);
                },

                // TODO: remove this, it is not used anymore
                unregisterExistingPropertyHook: function(ownerObject, ownerProperty, property, handler) {
                    if (!ownerObject || !ownerProperty || !property || !handler || !ownerObject.hasOwnProperty('chrome_comp_wrapDelegates')) return false;
                    var wrapDelegate = ownerObject.chrome_comp_wrapDelegates[ownerProperty];
                    return wrapDelegate && wrapDelegate.unwatch(property, handler);
                },

                /**
         * Registers a simple property hook.
         * The opt_getterOnly parameter are only applicable when the property is
         * first hooked. Later hooks to the same property can't change it.
         * @param {Object} object the object whose property to be hooked.
         * @param {String} property the name of the property to hook.
         * @param {function(Object, Object, String): Object} the hook handler which
         *     will be called when the property is got or set.
         * @param {boolean=} opt_getterOnly controls if hooks only getter.
         * @param {boolean=} opt_permanent if true this handler is never disabled
         *     even when chrome_comp.enableHooks(false) is called.
         * @return {boolean} whether the registration succeeded.
         */
                registerSimplePropertyHook: function(object, property, handler, opt_getterOnly, opt_permanent) {
                    if (!object || !property || !handler) return;
                    if (!object.hasOwnProperty('chrome_comp_propertyHooks')) object.chrome_comp_propertyHooks = {};
                    var hookObject = object.chrome_comp_propertyHooks[property];
                    if (!hookObject) {
                        hookObject = new chrome_comp.SimplePropertyHookObject(object, property, opt_getterOnly);
                        if (!hookObject.initialize()) return;
                        object.chrome_comp_propertyHooks[property] = hookObject;
                    }
                    return hookObject.registerHookHandler(handler, opt_permanent);
                },

                unregisterSimplePropertyHook: function(object, property, handler) {
                    if (!object || !property || !handler || !object.hasOwnProperty('chrome_comp_propertyHooks')) return false;
                    var hookObject = object.chrome_comp_propertyHooks[property];
                    if (hookObject && hookObject.unregisterHookHandler(handler)) {
                        if (hookObject.hookHandlersForSimpleProperty_.length == 0) {
                            hookObject.uninitialize();
                            delete object.chrome_comp_propertyHooks[property];
                        }
                        return true;
                    }
                    return false;
                },

                /**
         * Registers a detector.
         * @param {function(Node)} detectorConstructor constructor of the detector.
         * @return the detector instance if created successfully.
         */
                registerDetector: function(detectorConstructor) {
                    if (! (detectorConstructor && detectorConstructor.detectorName)) return;
                    var name = detectorConstructor.detectorName;
                    if ((chrome_comp.CompDetectorConfig.enabledDetectors && !chrome_comp.CompDetectorConfig.enabledDetectors[name]) || chrome_comp.CompDetectorConfig.disabledDetectors[name]) return;
                    var instance = new detectorConstructor(document.documentElement);

                    // ScanDomBaseDetector now inherits from NonScanDomDetector, so all
                    // detectors should be instances of NonScanDomDetector.
                    if (instance instanceof chrome_comp.CompDetect.NonScanDomBaseDetector) {
                        detectors_.push(instance);
                        instance.setUp();
                        return instance;
                    }
                    chrome_comp.trace('Invalid detector: ' + name);
                },

                declareDetectorClass: function(name, superClass, constructor
                /*,... methods */
                ) {
                    if (chrome_comp.CompDetectorConfig.disabledDetectors[name]) return null;
                    // TODO: eval should only be used for deserialization (style guide)
                    // Dynamically create a named function as the new constructor.
                    // The name is useful for debugging because we'll see meaningful type
                    // in the printed stack trace.
                    var newConstructor = eval('(function ' + name + '() {' + 'superClass.apply(this, arguments);' + (constructor ? 'constructor.apply(this, arguments);': '') + '})');
                    chrome_comp.extend(newConstructor, superClass);
                    chrome_comp.CompDetect[name] = newConstructor;
                    newConstructor.detectorName = name;
                    for (var i = 3,
                    c = arguments.length; i < c; i++) newConstructor.prototype[arguments[i].name] = arguments[i];
                    return newConstructor;
                },

                /**
         * This method provides a much easier way to declare a new detector.
         */
                declareDetector: function(name, superClass, constructor
                /*,... methods */
                ) {
                    var newConstructor = chrome_comp.CompDetect.declareDetectorClass.apply(this, arguments);
                    return newConstructor ? chrome_comp.CompDetect.registerDetector(newConstructor) : null;
                },

                // Run all scan-dom type detectors for current page.
                runScanDomDetectorsForCurrentPage: function() {
                    detectPageWithScanDomTypeDetectors();
                },

                notifyProblemDetected: function(typeId, issue, occurrence) {
                    console.log("chrome_comp=%o",chrome_comp);
                    chrome_comp.sendRequestToContentScript(chrome_comp.EVENT_PROBLEM_DETECTED, {
                        chrome_comp_reason: typeId,
                        chrome_comp_severity: (occurrence.severityLevel || issue.severityLevel) >= 7 ? 'error': 'warning',
                        chrome_comp_description: issue.issueDescription,
                        chrome_comp_occurrencesNumber: issue.occurrences.length
                    });
                },

                sendDetectionResults: function() {

                    var problems = chrome_comp.CompDetect.getAllProblems();
                    console.log("problems=%o",problems);
                    var arrIssusIds = [],
                    problem;
                    for (var issusId in problems) {
                        problem = problems[issusId];
                        /*
                        _arrCompatibilityResult.push({
                          'severity': problem.severityLevel >= 7 ? 'error' : 'warning',
                          'issueDescription': problem.issueDescription,
                          'issueUrl': problem.issueUrl,
                          'suggestion': problem.suggestion,
                          'repeatedCount': problem.repeatedCount
                        });
                        */
                        arrIssusIds.push(issusId);
                    }
                    console.log("arrIssusIds=%o",arrIssusIds);
                    //在页面中显示错误点和信息
                    document.documentElement.setAttribute('issusId', arrIssusIds.join(','));
                    var event = document.createEvent('Event');
                    // TODO: use fixed event name
                    event.initEvent('chrome_comp_AnnotationOn', true, true);
                    document.documentElement.dispatchEvent(event);
                },

                // Diagnose  compatibility issues on current page
                diagnoseCompatibilityIssues: function() {
                    // Check whether we need to immediately call load handler of
                    // CompDetector.
                    var timer = chrome_comp.CompDetectorConfig.delayRunDetectionTimer;
                    if (chrome_comp.CompDetectorConfig.delayRunDetection && typeof timer == 'number') {
                        window.setTimeout(loadHandlerForCompDetector, timer);
                    } else {
                        loadHandlerForCompDetector();
                    }

                    function loadHandlerForCompDetector() {
                        var startTime = new Date().getTime();
                        chrome_comp.trace('Start compatibility detection...' + '\ncurrent  URL is: ' + window.location + '\noriginal URL is: ' + chrome_comp.getTargetPageURL());
                        try {
                            chrome_comp.CompDetect.runScanDomDetectorsForCurrentPage();
                        } catch(e) {
                            chrome_comp.printError('Error running scan dom detectors: ', e);
                            if (chrome_comp.CompDetectorConfig.canSendBugReport) {
                                var detector = new chrome_comp.CompDetect.InternalExceptionDetector;
                                detector.report(e.toString());
                            }
                        }

                        // For now we disable all hooks after the one-shot detection.
                        // In the future we might remove this if we want to support real-time
                        // detection during UI-interaction.
                        chrome_comp.enableHooks(false);

                        chrome_comp.trace(detectors_.length + ' detectors');
                        for (var i = 0,
                        c = detectors_.length; i < c; ++i) detectors_[i].postAnalyze();

                        var startTimeForPolling = new Date().getTime();
                        var timerId;
                        if (isAllAsyncDetectionFinished()) {
                            onAllAsyncDetectionFinished();
                        } else {
                            timerId = setInterval(waitForAsyncDetectionFinished, chrome_comp.ASYNC_OPERATION_CHECK_INTERVAL);
                        }

                        function waitForAsyncDetectionFinished() {
                            var runningTime = new Date().getTime() - startTimeForPolling;
                            if (isAllAsyncDetectionFinished() || runningTime > chrome_comp.MAX_TIME_WAITING_FINISH) {
                                onAllAsyncDetectionFinished();
                            }
                        }

                        function isAllAsyncDetectionFinished() {
                            for (var i = 0,
                            c = detectors_.length; i < c; ++i) {
                                if (!detectors_[i].isAsyncOperationFinished()) return false;
                            }
                            return true;
                        }

                        function onAllAsyncDetectionFinished() {
                            if (timerId) clearInterval(timerId);
                            var detectionTime = new Date().getTime() - startTime;

                            chrome_comp.CompDetect.sendDetectionResults();
                            if (chrome_comp.CompDetectorConfig.unitTestMode) checkDetectionResults(document.documentElement);
                        }
                    }
                },

                // See chrome_comp.CompDetect.BaseDetector.prototype.addProblem.
                addProblem: function(typeId, opt_information) {
                    console.log("typeId=%o",typeId);
                    console.log("opt_information=%o",opt_information);
                    // If run testcase page, then ignore user set detector options.
                    if (!chrome_comp.CompDetectorConfig.unitTestMode) {
                        // TODO: use map
                        if (disabledDetectorsStr.indexOf(typeId) != -1) return;
                    }

                    if (inAddProblem_) return;

                    try {
                        // Because we have many hooks to various objects, methods and
                        // properties, addProblem itself might trigger the hooks and in turn
                        // report false problems. For example, getting the stack trace might
                        // trigger enumeration of properties of some object which has property
                        // hooks.
                        inAddProblem_ = true;

                        // This keeps backward-compatibility with original interface.
                        if (opt_information instanceof Array) opt_information = {
                            nodes: opt_information
                        };
                        if (!opt_information) opt_information = {};

                        // Constructs report data
                        var data = problems_[typeId];
                        console.log("problems_=%o",problems_);
                        if (data) {
                            data.repeatedCount++;
                            if (data.repeatedCount >= chrome_comp.CompDetectorConfig.maxProblemsPerType) return;
                        } else {
                            // Gets more necessary info
                            var issue = chrome_comp.w3helpIssues[typeId] || chrome_comp.nonW3helpIssues[typeId];
                            console.log("issue=%o",issue);
                            if (!issue) {
                                chrome_comp.trace('Missing issue information: ' + typeId);
                                return;
                            }

                            data = {
                                issueDescription: issue.description,
                                issueUrl: issue.url,
                                severityLevel: issue.severityLevel,
                                suggestion: issue.suggestion,
                                repeatedCount: 1,
                                occurrences: []
                            };
                            console.log("4052 data=%o",data);
                            problems_[typeId] = data;
                        }

                        var occurrence = {
                            details: opt_information && opt_information.details,
                            html: [],
                            stack: '',
                            nodes: opt_information.nodes || [],
                            // If exists and >0, this severity level overrides issue's severity
                            // level.
                            severityLevel: opt_information.severityLevel,
                            rectCallback: opt_information.rectCallback || chrome_comp.PageUtil.getNodeRects
                        };

                        var nodes = opt_information.nodes;
                        if (nodes) {
                            for (var i = 0,
                            len = nodes.length; i < len; ++i) {
                                var node = nodes[i];
                                // TODO: improve performance by not using outerHTML.
                                occurrence.html.push(chrome_comp.ellipsize(node.outerHTML || node.textContent, 200));
                            }
                        }

                        var stack = opt_information.stack;
                        // Stack will be automatically collected If no stack provided
                        if (!stack && (!nodes || opt_information.needsStack)) stack = chrome_comp.dumpStack();
                        if (stack) {
                            // Don't add JavaScript problems caused by some extension.
                            if (chrome_comp.isCalledFromExtension(stack)) {
                                if (!--data.repeatedCount) delete problems_[typeId];
                                return;
                            }
                            // Don't add problem occurred at the same place as the last one.
                            if (data.occurrences.length > 0 && chrome_comp.getCallSite(data.occurrences[data.occurrences.length - 1].stack) == chrome_comp.getCallSite(stack)) return;
                            occurrence.stack = stack;
                        }

                        chrome_comp.trace('Add a problem: ' + typeId + ' ' + data.issueDescription + (data.repeatedCount == 1 ? stack || chrome_comp.dumpStack() : ' count ' + data.repeatedCount));

                        if (chrome_comp.CompDetectorConfig.unitTestMode) {
                            console.log("chrome_comp.CompDetectorConfig.unitTestMode=%o",chrome_comp.CompDetectorConfig.unitTestMode);
                            if (nodes && nodes.length) {
                                var node = nodes[0];
                                var nodeProblems = node.chrome_comp_actualProblems;
                                if (!nodeProblems) nodeProblems = [typeId];
                                else nodeProblems.push(typeId);
                                node.chrome_comp_actualProblems = nodeProblems;
                            }
                            if (stack) {
                                var sourceAndLine = chrome_comp.getSourceAndLine(stack);
                                var actualProblems = actualJSProblems_[sourceAndLine];
                                if (!actualProblems) {
                                    actualProblems = [];
                                    actualJSProblems_[sourceAndLine] = actualProblems;
                                }
                                actualProblems.push(typeId);
                            }
                        }

                        data.occurrences.push(occurrence);
                        console.log("4113 occurrence=%o",occurrence);
                        console.log("4114 occurrences=%o",occurrences);
                        chrome_comp.CompDetect.notifyProblemDetected(typeId, data, occurrence);
                        return occurrence;
                    } finally {
                        inAddProblem_ = false;
                    }
                },

                // Used in unit test for JavaScript problems.
                expectProblems: function(x, expected) {
                    if (chrome_comp.CompDetectorConfig.unitTestMode) {
                        var sourceAndLine = chrome_comp.getSourceAndLine();
                        expectedJSProblems_[sourceAndLine] = expected;
                        if (!actualJSProblems_[sourceAndLine]) actualJSProblems_[sourceAndLine] = [];
                    }
                },

                cleanUpDetectors: function() {
                    for (var i = 0,
                    c = detectors_.length; i < c; ++i) detectors_[i].cleanUp();
                }
            };
        })();

        // ************************** BaseDetector implementation*********************
        // Each detector must implement the following method
        // * postAnalyze(), this method will be called before calling hasProblem, it is
        //   supposed to do some post analysis in this method.
        //
        // The following is base detector implementation, it just has base data and
        // methods without doing any real detection stuff.
        // The developer should write a class, extend the class from this BaseDetector
        // implemention and implement the detection logic
        chrome_comp.CompDetect.BaseDetector = function(rootNode) {
            this.rootNode_ = rootNode;
            // we need to hook sth in read window object, so we need to get real glocal
            // object.
            this.window_ = window;
            this.document_ = window.document;
            this.hasProblem_ = false;
            this.isAsyncOperationFinished_ = true;
        };

        chrome_comp.CompDetect.BaseDetector.detectorName = 'BaseDetector';

        chrome_comp.CompDetect.BaseDetector.prototype.postAnalyze = function() {
            // The detector developer must implement his/her own logic for
            // postAnalyze if he/she need this.
        };

        chrome_comp.CompDetect.BaseDetector.prototype.isAsyncOperationFinished = function() {
            return this.isAsyncOperationFinished_;
        };

        chrome_comp.CompDetect.BaseDetector.prototype.setAsyncOperationFinished = function(finished) {
            this.isAsyncOperationFinished_ = finished;
        };

        /**
     * Adds a new detected problem.
     * @param {string} typeId Type ID of the problem.
     * @param {Object=|Array.<Node>} opt_information detailed information about the
     *     problem. It can be an array of problem nodes (which keeps backward
     *     compatibility with original interface), or an object containing the
     *     following optional fields:
     *     - {Array.<Node>} nodes: the related nodes. If there are multiple nodes,
     *       the first one should be the primary node of the problem.
     *     - {string} needsStack: if true or both nodes and stack are omitted,
     *       stack information will be automatically collected.
     *     - {string} stack: the call stack where the problem occurred. A detector
     *       only need to collect stack by itself when addProblem is not called
     *       when the problem occurs.
     *     - {string} details: additional detailed description of the problem.
     *     - {number} severityLevel: if exists and >0, this severity level overrides
     *       the default severity level of the problem.
     *     - {Function(node): Array.<Object>} rectCallback: customized rectangle
     *       callback function which will be called when the annotator needs to
     *       get the position and size of a problem node.
     */
        chrome_comp.CompDetect.BaseDetector.prototype.addProblem = function(typeId, opt_information) {
            if (!typeId || typeof typeId != 'string') return;

            this.hasProblem_ = true;
            chrome_comp.CompDetect.addProblem(typeId, opt_information);
        };

        // ********************** Detector for internal exception ***************
        // This detector will not be registered, and will be used directly to report
        // internal exception
        chrome_comp.CompDetect.InternalExceptionDetector = function(rootNode) {
            chrome_comp.CompDetect.InternalExceptionDetector.superclass.constructor.call(this, rootNode);
        };
        chrome_comp.extend(chrome_comp.CompDetect.InternalExceptionDetector, chrome_comp.CompDetect.BaseDetector);

        chrome_comp.CompDetect.InternalExceptionDetector.report = function(exception) {
            this.addProblem('##0000', {
                details: exception
            });
        };

        // ********************** NonScanDomBaseDetector implementation***************
        // Each non scan-dom type detector is derived from NonScanDomBaseDetector and
        // implement the following method
        // * setUp: setup the trap
        // * cleanUp: clean up the trap
        chrome_comp.CompDetect.NonScanDomBaseDetector = function(rootNode) {
            chrome_comp.CompDetect.NonScanDomBaseDetector.superclass.constructor.call(this, rootNode);
        };
        // You must use chrome_comp.extend to inherit from the BaseDetector
        chrome_comp.extend(chrome_comp.CompDetect.NonScanDomBaseDetector, chrome_comp.CompDetect.BaseDetector);

        chrome_comp.CompDetect.NonScanDomBaseDetector.prototype.setUp = function() {
            // The detector developer can implement this function which will be called
            // before the page being actually loaded.
        };

        chrome_comp.CompDetect.NonScanDomBaseDetector.prototype.cleanUp = function() {
            // The detector developer can implement this function which will be called
            // when the detection is finished.
        };

        // ************************** ScanDomBaseDetector implementation***************
        // Each scan-dom detector is dervided from ScanDomBaseDetector and implement the
        // following method
        // * checkNode(node, context), this method is responsible for checking
        //    whether the input node has same problem the detector is designed to check.
        // * canCheckNow(), this method is responsible for telling detection tool
        //    whether the detector want to check node or not, it will be called before
        //    calling checkNode, if the method return false, the checkNode will be skip
        //    for this time.
        //
        // This is base detector implementation, it just has base data and methods
        // without doing any real detection stuff.
        // The developer should write a class, extend the class from this
        // ScanDomBaseDetector implemention and implement the detection logic
        chrome_comp.CompDetect.ScanDomBaseDetector = function(rootNode) {
            chrome_comp.CompDetect.ScanDomBaseDetector.superclass.constructor.call(this, rootNode);
            // gatherAllProblemNodes_ will control whether we will gather all nodes which
            // have same issues. If gatherAllProblemNodes_ is true, when we will check
            // each node for the specific issue which this detector addresses.
            // If gatherAllProblemNodes_ is false, after we have one node which has the
            // specific issue, we will not call checkNode for this detector.
            // The individual detector can overrite it in its constructor.
            this.gatherAllProblemNodes_ = true;
        };
        // You must use chrome_comp.extend to inherit from the BaseDetector
        chrome_comp.extend(chrome_comp.CompDetect.ScanDomBaseDetector, chrome_comp.CompDetect.NonScanDomBaseDetector);

        chrome_comp.CompDetect.ScanDomBaseDetector.prototype.checkNode = function(node, context) {
            // The detector developer must implement his/her own logic for checkNode
            // if he/she need this.
        };

        chrome_comp.CompDetect.ScanDomBaseDetector.prototype.canCheckNow = function() {
            return this.gatherAllProblemNodes_ || !this.hasProblem_;
        };

        window.addEventListener(chrome_comp.EVENT_CHROME_COMP_LOAD, chrome_comp.CompDetect.diagnoseCompatibilityIssues, false);

        window.addEventListener('unload', chrome_comp.CompDetect.cleanUpDetectors, false);

        // To simplify usages.
        chrome_comp.expectProblems = chrome_comp.CompDetect.expectProblems;

    });

    ;
    /*
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview: This file contains code shared by content script and page
     * script.
     */

    addScriptToInjectAndExecuteInContentScript(function() {

        // Create the top level namespace if it is not present.
        if ("undefined" == typeof chrome_comp) {
            chrome_comp = {};
        }

        // Sample of how to add new method to current namespace:
        // chrome_comp.someNewMethod = function() { ... };
        /**
     * For more exact detect, We can not simply get the document mode by
     * chrome_comp.inQuirksMode(), because some strange doctypes may trigger the
     * different document modes between IE and Chrome, and the comments before the
     * doctype declaration make the doctype be invalid in IE. Thus, we use this
     * script to detect the exact document modes in IE and Chrome.
     */

        // The result of doctype detection.
        var documentMode = {
            // The document mode of the current page in IE and WebKit. S stands the
            // Standards Mode, Q stands the Quirks Mode. undefined of IE stands the
            // document mode is uncertain, the DTD is unusual or has some kinds of
            // conditional comments.
            IE: 'Q',
            WebKit: 'Q',
            // Whether there have comments before the doctype.
            hasCommentBeforeDTD: false,
            // Whether there have IE's conditional comments before the doctype.
            hasConditionalCommentBeforeDTD: false,
            // Whether the doctype is unusual.
            isUnusualDocType: false,
            // Whether the page has the doctype.
            hasDocType: false
        };

        // <!DOCTYPE name PUBLIC publicId systemId >
        // We list some common doctypes which make IE and Chrome render in the same
        // document mode. Some doctypes may share the same publicId, so we make the
        // publicId as the key.
        // Note: HTML5 doctype <!DOCTYPE html> do not have publicId and systemId. So
        // the keys are empty strings.
        // This list is based on:
        // http://www.w3help.org/zh-cn/kb/001#common_dtd.
        var PUBLIC_ID_WHITE_LIST = {
            '': {
                systemIds: {
                    '': true
                }
            },
            '-//W3C//DTD HTML 3.2 Final//EN': {
                systemIds: {
                    '': true
                }
            },
            '-//W3C//DTD HTML 4.0//EN': {
                systemIds: {
                    '': true,
                    'http://www.w3.org/TR/html4/strict.dtd': true
                }
            },
            '-//W3C//DTD HTML 4.01//EN': {
                systemIds: {
                    '': true,
                    'http://www.w3.org/TR/html4/strict.dtd': true
                }
            },
            '-//W3C//DTD HTML 4.0 Transitional//EN': {
                systemIds: {
                    '': true,
                    'http://www.w3.org/TR/html4/loose.dtd': true
                }
            },
            '-//W3C//DTD HTML 4.01 Transitional//EN': {
                systemIds: {
                    '': true,
                    'http://www.w3.org/TR/html4/loose.dtd': true,
                    'http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd': true
                }
            },
            '-//W3C//DTD XHTML 1.1//EN': {
                systemIds: {
                    'http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd': true
                }
            },
            '-//W3C//DTD XHTML Basic 1.0//EN': {
                systemIds: {
                    'http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd': true
                }
            },
            '-//W3C//DTD XHTML 1.0 Strict//EN': {
                systemIds: {
                    'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd': true
                }
            },
            '-//W3C//DTD XHTML 1.0 Transitional//EN': {
                systemIds: {
                    'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd': true
                }
            },
            'ISO/IEC 15445:1999//DTD HyperText Markup Language//EN': {
                systemIds: {
                    '': true
                }
            },
            'ISO/IEC 15445:2000//DTD HTML//EN': {
                systemIds: {
                    '': true
                }
            },
            'ISO/IEC 15445:1999//DTD HTML//EN': {
                systemIds: {
                    '': true
                }
            }
        };

        // List the difference between IE and WebKit on the interpretion of DTD.
        var COMPAT_MODE_DIFF_PUBLIC_ID_MAP = {
            '-//W3C//DTD HTML 4.0 Transitional//EN': {
                systemIds: {
                    'http://www.w3.org/TR/html4/loose.dtd': {
                        IE: 'S',
                        WebKit: 'Q'
                    }
                }
            },
            'ISO/IEC 15445:2000//DTD HTML//EN': {
                systemIds: {
                    '': {
                        IE: 'Q',
                        WebKit: 'S'
                    }
                }
            },
            'ISO/IEC 15445:1999//DTD HTML//EN': {
                systemIds: {
                    '': {
                        IE: 'Q',
                        WebKit: 'S'
                    }
                }
            }
        };

        var CONDITIONAL_COMMENT_REGEXP = /\[\s*if\s+[^\]][\s\w]*\]/i;

        // Check for downlevel-revealed opening conditional comments like:
        // <![if !IE]> or <![if false]>
        var NOT_IE_REVEALED_OPENING_CONDITIONAL_COMMENT_REGEXP = /^\[if\s+(!IE|false)\]$/i;
        // Check for downlevel-revealed closing conditional comments like:
        // <![endif]>
        var REVEALED_CLOSING_CONDITIONAL_COMMENT_REGEXP = /^\[endif\s*\]$/i;

        // Check for downlevel-hidden conditional comments like:
        // <!--[if !IE]> HTML <![endif]--> or
        // <!--[if false]> HTML <![endif]-->
        var NOT_IE_HIDDEN_CONDITIONAL_COMMENT_REGEXP = /^\[if\s+(!IE|false)\]>.*<!\[endif\]$/i;

        /**
     * <!DOCTYPE "xmlns:xsl='http://www.w3.org/1999/XSL/Transform'">
     * This DTD makes IE render in standards mode, Chrome in quirks mode.
     * Sample URL: http://www.nasa.gov/
     * @param {string} name the name of the doctype in lower case.
     * @param {string} publicId the publicId of the doctype.
     * @param {string} systemId the systemId of the doctype.
     */
        function fixDocTypeOfNASA(name, publicId, systemId) {
            if (name == "\"xmlns:xsl='http://www.w3.org/1999/xsl/transform'\"".toLowerCase() && publicId == '' && systemId == '') {
                documentMode.IE = 'S';
                documentMode.WebKit = 'Q';
                documentMode.isUnusualDocType = false;
            }
        }

        /**
     * Determine if a string is an IE's conditional comment.
     * @param {string} string the nodeValue of the comment node.
     */
        function isConditionalComment(nodeValue) {
            return CONDITIONAL_COMMENT_REGEXP.test(nodeValue);
        }

        /**
     * Determine if a string is a "not IE" downlevel-hidden conditional comment.
     * About conditional comments, refer to:
     * http://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx
     * @param {string} string the nodeValue of the comment node.
     */
        function isNotIEHiddenConditionalComment(nodeValue) {
            return NOT_IE_HIDDEN_CONDITIONAL_COMMENT_REGEXP.test(nodeValue);
        }

        /**
     * Determine if a string is a downlevel-revealed closing conditional comments.
     * The downlevel-revealed conditional comment can include content in browsers 
     * that do not recognize conditional comments. Although the conditional comment
     * itself is ignored, the HTML content inside it is not.
     * About conditional comments, refer to:
     * http://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx
     * @param {string} string the nodeValue of the comment node.
     */
        function isRevealedClosingConditionalComment(nodeValue) {
            return REVEALED_CLOSING_CONDITIONAL_COMMENT_REGEXP.test(nodeValue);
        }

        /**
     * Determine if a string is a "not IE" downlevel-revealed opening conditional
     * comment.
     * About conditional comments, refer to:
     * http://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx
     * @param {string} string the nodeValue of the comment node.
     */
        function isNotIERevealedOpeningConditionalComment(nodeValue) {
            return NOT_IE_REVEALED_OPENING_CONDITIONAL_COMMENT_REGEXP.test(nodeValue);
        }

        /**
     * <![if false]><!--some text--><![endif]> is a kind of downlevel-revealed
     * conditional comment. <![endif]> is the closing, and <![if false]> is the
     * opening. If we meet the downlevel-revealed closing conditional comment, we
     * should get its opening part.
     * About conditional comments, refer to:
     * http://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx
     */
        function getPreviousRevealedOpeningConditionalComment(node) {
            var prev = node.previousSibling;
            for (; prev; prev = prev.previousSibling) {
                if (isNotIERevealedOpeningConditionalComment(prev.nodeValue)) {
                    return prev;
                }
            }
            return null;
        }

        /**
     * Check if there has comment before the doctype, and return an object.
     * @return {object} return an object, the key hasCommentBeforeDTD record if
     *     there has comment before the DTD, the key hasConditionalCommentBeforeDTD
     *     record if there has IE's conditional comment (exclude the "not IE"
     *     downlevel-hidden format) before the doctype.
     */
        function checkForCommentBeforeDTD() {
            var result = {
                hasCommentBeforeDTD: false,
                hasConditionalCommentBeforeDTD: false
            };
            var doctype = document.doctype;
            if (!doctype) return result;
            // We only consider the previous sibling nodes of the doctype. The nodes
            // (e.g. the comments) between the doctype and the root element do not
            // affect the document mode in all browsers, such as:
            // <!DOCTYPE html>
            // <!-- some text -->
            // <html>
            var prev = doctype.previousSibling;
            for (; prev; prev = prev.previousSibling) {
                if (prev.nodeType == Node.COMMENT_NODE) {
                    var nodeValue = prev.nodeValue;
                    // For a downlevel-revealed closing conditional comment, it is usually a
                    // part of a downlevel-revealed condition comment group. We just jump to
                    // its opening part comment. Such as:
                    // <![if false]><!--startView:homePage--><![endif]>
                    // <!DOCTYPE html>
                    // Sample URL: http://www.usa.canon.com/cusa/home
                    if (isRevealedClosingConditionalComment(nodeValue)) {
                        prev = getPreviousRevealedOpeningConditionalComment(prev);
                        // We should consider that if there is no opening part comment.
                        if (!prev) {
                            result.hasConditionalCommentBeforeDTD = true;
                            return result;
                        }
                        continue;
                    }
                    // The comment is not a conditional comment and downlevel-revealed
                    // closing conditional comment, and it is not inside a downlevel-revealed
                    // conditional comment group. It is just a common comment.
                    var isConditionalComm = isConditionalComment(nodeValue);
                    if (!isConditionalComm) {
                        result.hasCommentBeforeDTD = true;
                        continue;
                    }
                    // Conditional comments in IE are so complicated, we just consider one
                    // situation, if the comments before doctype are all IE's conditional
                    // comments with downlevel-hidden !IE expression, there's no difference
                    // between IE and Chrome. Such as
                    // <!--[if !IE]> some text <![endif]--> 
                    // <!DOCTYPE html>
                    // Sample URL: http://www.reuters.com/
                    if (!isNotIEHiddenConditionalComment(nodeValue)) {
                        result.hasConditionalCommentBeforeDTD = true;
                    }
                }
            }
            return result;
        }

        /**
     * Process the result of the doctype detection according to the publicId white
     * list, the compat mode diff map, the result of the comments before the DTD,
     * etc.
     */
        function processDoctypeDetectionResult() {
            var doctype = document.doctype;
            var name = doctype ? doctype.name.toLowerCase() : '';
            var publicId = doctype ? doctype.publicId: '';
            var systemId = doctype ? doctype.systemId: '';
            var compatMode = document.compatMode.toLowerCase();
            documentMode.hasDocType = (doctype) ? true: false;
            // Record the exact document mode in WebKit, and suppose that the document
            // mode in IE be the same with in WebKit.
            documentMode.WebKit = (compatMode == 'backcompat') ? 'Q': 'S';
            documentMode.IE = documentMode.WebKit;
            // If there has no DTD at all, we consider that the documentMode in
            // both IE and Chrome are quirks mode.
            if (!doctype) {
                return;
            }
            // Record the common doctype's document mode and whether the doctype is
            // unusual.
            if (name != 'html') {
                documentMode.IE = undefined;
                documentMode.isUnusualDocType = true;
            } else {
                if (publicId in PUBLIC_ID_WHITE_LIST) {
                    if (! (systemId in PUBLIC_ID_WHITE_LIST[publicId].systemIds)) {
                        documentMode.IE = undefined;
                        documentMode.isUnusualDocType = true;
                    }
                } else {
                    documentMode.IE = undefined;
                    documentMode.isUnusualDocType = true;
                }
            }
            // Fix the correct document mode in IE accordding to the compat mode diff map.
            if ((publicId in COMPAT_MODE_DIFF_PUBLIC_ID_MAP) && (systemId in COMPAT_MODE_DIFF_PUBLIC_ID_MAP[publicId].systemIds)) {
                documentMode.IE = COMPAT_MODE_DIFF_PUBLIC_ID_MAP[publicId].systemIds[systemId].IE;
                // The doctype information in COMPAT_MODE_DIFF_PUBLIC_ID_MAP is not included
                // in PUBLIC_ID_WHITE_LIST, so the isUnusualDocType will be true in the
                // above piece of scripts. Since these DTDs are also common DTDs, we must
                // make it be false again.
                documentMode.isUnusualDocType = false;
            }

            // Fix documentMode according to the special function.
            fixDocTypeOfNASA(name, publicId, systemId);
            // We do not consider the comments before the DTD if the document mode
            // in IE is Quirks Mode.
            if (documentMode.IE != 'Q') {
                var result = checkForCommentBeforeDTD();
                if (result.hasConditionalCommentBeforeDTD) {
                    documentMode.IE = undefined;
                    documentMode.hasConditionalCommentBeforeDTD = true;
                } else if (result.hasCommentBeforeDTD) {
                    // The comment before the doctype declaration makes the doctype be
                    // invalid in IE, so IE's document mode become the Quirks Mode. Refer to
                    // http://www.w3help.org/zh-cn/causes/HG8001.
                    documentMode.IE = 'Q';
                    documentMode.hasCommentBeforeDTD = true;
                }
            }
        }

        processDoctypeDetectionResult();
        chrome_comp.documentMode = documentMode;

    });

    ;
    /**
     * @fileoverview This file contains a quick check of the page, include:
     *  - whether DTD exists, and is valid
     *  - deprecated HTML tags and attributes
     *  - LIND and STYLE elements that are not put inside the HEAD section
     *  - IE's conditional comments
     *
     * We must ensure that it will not run for a long time. Its result should not
     * be cached.
     */

    var baseDetector = {};

    baseDetector.HTML_DEPRECATED_TAGS = {
        APPLET: true,
        CENTER: true,
        FONT: true,
        S: true,
        STRIKE: true,
        U: true,
        LAYER: true
    };

    baseDetector.HTML_DEPRECATED_ATTRIBUTES = {
        align: {
            IFRAME: true,
            IMG: true,
            OBJECT: true,
            TABLE: true
        },
        color: {
            FONT: true
        },
        height: {
            TD: true,
            TH: true
        },
        language: {
            SCRIPT: true
        },
        noshade: {
            HR: true
        },
        nowrap: {
            TD: true,
            TH: true
        },
        size: {
            HR: true,
            FONT: true,
            BASEFONT: true
        }
    };

    baseDetector.isHTMLDeprecatedAttribute = function(tagName, attrName) {
        return (this.HTML_DEPRECATED_ATTRIBUTES[attrName] && this.HTML_DEPRECATED_ATTRIBUTES[attrName][tagName]);
    };

    baseDetector.isHTMLDeprecatedTag = function(tagName) {
        return this.HTML_DEPRECATED_TAGS[tagName];
    };

    baseDetector.getNodes = function(rootNode, nodeFilter) {
        var nodeIterator = document.createNodeIterator(rootNode, nodeFilter, null, false);
        var nodes = [];
        var node = nodeIterator.nextNode();
        while (node) {
            nodes.push(node);
            node = nodeIterator.nextNode();
        }
        return nodes;
    };

    baseDetector.resetSummaryInformation = function() {
        baseDetector.summaryInformation = {
            HTMLBase: {
                HTMLDeprecatedAttribute: {},
                HTMLDeprecatedTag: {}
            },
            documentMode: {
                hasDocType: false,
                compatMode: {
                    IE: 'Q',
                    WebKit: 'Q'
                },
                publicId: '',
                hasComment: false,
                hasConditionalComment: false,
                isUnusualDocType: false
            },
            DOM: {
                IECondComm: []
            },
            LINK: {
                notInHeadCount: 0
            }
        };
    };

    baseDetector.addDeprecatedTag = function(paramObject) {
        var element = paramObject.element;
        var tagName = element.tagName;
        var HTMLDeprecatedTag = baseDetector.summaryInformation.HTMLBase.HTMLDeprecatedTag;
        if (!HTMLDeprecatedTag[tagName]) {
            HTMLDeprecatedTag[tagName] = true;
        }
    };

    baseDetector.addDeprecatedAttribute = function(paramObject) {
        var element = paramObject.element;
        var attribute = paramObject.attr;
        var tagName = element.tagName;
        var HTMLDeprecatedAttribute = baseDetector.summaryInformation.HTMLBase.HTMLDeprecatedAttribute;
        if (!HTMLDeprecatedAttribute[attribute]) {
            HTMLDeprecatedAttribute[attribute] = {};
        }
        HTMLDeprecatedAttribute[attribute][tagName] = tagName;
    };

    baseDetector.initCompatMode = function() {
        baseDetector.summaryInformation.documentMode = chrome_comp.documentMode;
    };

    baseDetector.initIECondComm = function(rootNode) {
        var nodes = baseDetector.getNodes(rootNode, NodeFilter.SHOW_COMMENTS);
        var ieCondCommRegExp = /\[\s*if\s*[^\]][\s\w]*\]/i;
        for (var i = 0,
        c = nodes.length; i < c; ++i) {
            var currentNode = nodes[i];
            if (ieCondCommRegExp.test(currentNode.nodeValue)) {
                baseDetector.summaryInformation.DOM.IECondComm.push(currentNode.nodeValue);
            }
        }
    };

    baseDetector.initLink = function() {
        var linkCount = document.querySelectorAll('link').length;
        baseDetector.summaryInformation.LINK.notInHeadCount = linkCount - document.querySelectorAll('head link').length;
    };

    baseDetector.scanAllElements = function() {
        var elementList = baseDetector.getNodes(document.documentElement, NodeFilter.SHOW_ELEMENT);

        baseDetector.summaryInformation.DOM.count = elementList.length;

        for (var i = 0,
        len = elementList.length; i < len; ++i) {
            var element = elementList[i];
            var tagName = element.tagName;
            var attributes = element.attributes;
            if (this.isHTMLDeprecatedTag(tagName)) {
                this.addDeprecatedTag({
                    element: element,
                    tagName: tagName
                });
            }
            for (var j = 0,
            c = attributes.length; j < c; ++j) {
                var attrName = attributes[j].name;
                if (this.isHTMLDeprecatedAttribute(tagName, attrName)) {
                    this.addDeprecatedAttribute({
                        element: element,
                        attr: attrName
                    });
                }
            }
        }
    };

    baseDetector.init = function() {
        baseDetector.initLink();
        baseDetector.initCompatMode();
        baseDetector.initIECondComm(document.documentElement);
    }

    function getBaseDetectionStatus() {
        var status = 'ok';
        var summaryInformation = baseDetector.summaryInformation;
        var documentMode = summaryInformation.documentMode;
        if (!documentMode.hasDocType || summaryInformation.DOM.IECondComm.length || summaryInformation.LINK.notInHeadCount || Object.keys(summaryInformation.HTMLBase.HTMLDeprecatedTag).length || Object.keys(summaryInformation.HTMLBase.HTMLDeprecatedAttribute).length) {
            status = 'warning';
        } else if (documentMode.hasDocType) {
            if (documentMode.isUnusualDocType || documentMode.hasCommentBeforeDTD || documentMode.hasConditionalCommentBeforeDTD || documentMode.IE != documentMode.WebKit) {
                status = 'warning';
            }
        }
        return status;
    }

    function runBaseDetection() {
        baseDetector.resetSummaryInformation();
        baseDetector.scanAllElements();
        baseDetector.init();

        return baseDetector.summaryInformation;
    }

    ;
    /*
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    addScriptToInject(function() {

        // Public configuration constant
        chrome_comp.CompDetectorConfig = {
            // Turning it on will give you bug-trace info.
            canTraceBug: false,
            // Indicates whether we want to run the detection tool in onload event
            // or run it later. (delay time is delayRunDetectionTimer.)
            delayRunDetection: true,
            delayRunDetectionTimer: 1000,
            // Disabled Detectors
            disabledDetectors: {
                'InvalidDetector': true
            },
            // if enabledDetectors is not null, it overrides disabledDetectors so that
            // only listed detectors here will be run.
            enabledDetectors: null,
            // enabledDetectors: { 'some_detector_to_debug': true },
            maxProblemsPerType: 10,
            unitTestMode: false
        };

        if (document.documentElement.hasAttribute('chrome_comp_test')) {
            chrome_comp.CompDetectorConfig.unitTestMode = true;
            chrome_comp.CompDetectorConfig.maxProblemsPerType = 1000;
            var tests = document.documentElement.getAttribute('chrome_comp_test');
            if (tests) {
                tests = tests.split(' ');
                chrome_comp.CompDetectorConfig.enabledDetectors = {};
                for (var i = 0; i < tests.length; i++) chrome_comp.CompDetectorConfig.enabledDetectors[tests[i]] = true;
            }
        }
    });

    ;
    /*
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    (function() {
        const DEFAULT_LOCALE = 'zh-cn'; // TODO: change to en when w3help ready.
        const W3HELP_LOCALES = {
            //  'en' : true,
            'zh-cn': true
        };

        var w3helpLocale = chrome.i18n.getMessage('@@ui_locale');
        if (w3helpLocale) w3helpLocale = w3helpLocale.toLowerCase().replace('_', '-');
        if (!W3HELP_LOCALES.hasOwnProperty(w3helpLocale)) w3helpLocale = DEFAULT_LOCALE;

        // This array is auto generated by update_w3help_issues.sh
        var issueIds = ['HH8001', 'HR9001', 'HD9001', 'HG8001', 'HG1002', 'HG2003', 'HT1001', 'HT1002', 'HT1003', 'HE1001', 'HE8002', 'HE1003', 'HO8001', 'HO1002', 'HO3003', 'HO3004', 'HO9005', 'HO9006', 'HO1007', 'HA8001', 'HA1003', 'HM9001', 'HF3001', 'HF1002', 'HF3003', 'HF1004', 'HF3005', 'HF3006', 'HF1007', 'HF1008', 'HF3013', 'HS9001', 'HY9001', 'HY8002', 'HY8003', 'HY1005', 'HY8006', 'RN5001', 'RN8002', 'RS8001', 'RS8002', 'RS8003', 'RS8004', 'RS3005', 'RS3007', 'RS3008', 'RS3009', 'RS8010', 'RA8001', 'RA3002', 'RA8003', 'RB1001', 'RB5002', 'RB1003', 'RB8004', 'RB1005', 'RM8001', 'RM8002', 'RM8003', 'RM1004', 'RM8005', 'RM8006', 'RM3007', 'RM8008', 'RM1009', 'RM1010', 'RM1025', 'RM8011', 'RM8012', 'RM8013', 'RM8014', 'RM8015', 'RM8016', 'RM1017', 'RM8018', 'RD8001', 'RD1002', 'RD1003', 'RD8004', 'RD8005', 'RD8006', 'RD8007', 'RD8008', 'RD8009', 'RD8010', 'RD1011', 'RD1012', 'RD1013', 'RD1014', 'RD8015', 'RD1016', 'RD5017', 'RD5018', 'RD8019', 'RD3020', 'RD1021', 'RD8026', 'RV1001', 'RV1002', 'RG1001', 'RG1002', 'RG1003', 'RC3001', 'RC3002', 'RF1001', 'RT3001', 'RT3002', 'RT8003', 'RT5004', 'RT3005', 'RT8006', 'RT1007', 'RT1008', 'RT1010', 'RT3011', 'RE8001', 'RE5003', 'RE8004', 'RE1005', 'RE1006', 'RE8010', 'RE1012', 'RE1013', 'RE8014', 'RE8017', 'RE1020', 'RU3001', 'RU3002', 'RY1001', 'RY8002', 'RY8003', 'RY8004', 'RY8005', 'RX1001', 'RX1002', 'RX1003', 'RX8004', 'RX3005', 'RX1006', 'RX3007', 'RX1008', 'RX9009', 'RX1010', 'RX3011', 'RX8012', 'RX8015', 'RX8017', 'SJ9001', 'SJ9002', 'SJ5003', 'SJ2004', 'SJ9005', 'SJ9006', 'SJ2007', 'SJ9008', 'SJ9009', 'SJ9010', 'SD9001', 'SD9002', 'SD9003', 'SD9004', 'SD9005', 'SD9006', 'SD9007', 'SD9008', 'SD9009', 'SD9010', 'SD9011', 'SD9012', 'SD9013', 'SD9014', 'SD9015', 'SD9016', 'SD9017', 'SD9018', 'SD9019', 'SD2020', 'SD2021', 'SD9022', 'SD2023', 'CP9001', 'CM2001', 'CH9002', 'CH9003', 'BW5002', 'BW5004', 'BW5005', 'BW3006', 'BW5007', 'BW5008', 'BW5009', 'BT9002', 'BT3003', 'BT8004', 'BT9005', 'BT9006', 'BT9007', 'BT9008', 'BT9009', 'BT9010', 'BT9011', 'BT9012', 'BT3013', 'BT8014', 'BT9015', 'BT9016', 'BT9017', 'BT9019', 'BT9021', 'BT2022', 'BT9024', 'BT1025', 'BT9027', 'BT9028', 'BT9029', 'BT9030', 'BT9031', 'BT9032', 'BT2033', 'BT9034', 'BT9035', 'BT9036', 'BT9037', 'BG2001', 'BG9002', 'BG1003', 'BX2001', 'BX9002', 'BX2003', 'BX2004', 'BX3006', 'BX9007', 'BX9008', 'BX1009', 'BX9010', 'BX2012', 'BX9013', 'BX9014', 'BX1016', 'BX1018', 'BX3019', 'BX9021', 'BX1022', 'BX3023', 'BX9024', 'BX9025', 'BX9028', 'BX9029', 'BX1030', 'BX9031', 'BX2032', 'BX2033', 'BX9034', 'BX9035', 'BX9036', 'BX8037', 'BX1039', 'BX2040', 'BX9041', 'BX8042', 'HF3012', 'SD9030', 'RC3003', 'BX2050', 'RE1016', 'HO9008', 'SD9029', 'SD9025', 'RD8023', 'RD8026', 'BX8017', 'RM8015', 'HF9009', 'HJ2001', 'HM1002', 'BT1038', 'HO1002', 'RE8015', 'BX9055'];

        var issues = {};
        for (var i = 0,
        c = issueIds.length; i < c; i++) {
            var id = issueIds[i];
            issues[id] = {
                description: chrome.i18n.getMessage(id),
                suggestion: chrome.i18n.getMessage(id + '_suggestion'),
                severityLevel: parseInt(id[2]),
                url: 'http://www.w3help.org/' + w3helpLocale + '/causes/' + id
            };
            addSourceToInject('chrome_comp.w3helpIssues = ' + JSON.stringify(issues));
        }

    })();

    ;
    /*
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    addScriptToInject(function() {

        // The definition of compatibility reason.
        // ID of non W3Help issues must start with '##' to avoid potential conflict
        // with that of W3help issues.
        chrome_comp.nonW3helpIssues = {
            '##0000': {
                description: 'Got internal exception when running detectors',
                url: '',
                severityLevel: 9,
                suggestion: ''
            },
            '##0006': {
                description: 'Absolute font size in Quirks mode is not portable',
                severityLevel: 1
            },
            '##0018': {
                description: 'WMP Plugin has defined wrong type',
                severityLevel: 9
            },
            '##0019': {
                description: 'Plugin cannot be created or has wrong size',
                severityLevel: 9
            }
        };

    });

    ;
    /*
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    addScriptToInject(function() {

        var annotations = [];
        var annotationsDiv = null;
        var highlightDivs = [];
        var balloonDiv = null;

        function compareAnnotations(a1, a2) {
            var result = a1.top - a2.top;
            if (result) return result;
            result = a1.left - a2.left;
            return result ? result: a1.originalSequence - a2.originalSequence;
        }

        function updateAnnotationTopLeft(annotation) {
            annotation.rectangles = [];
            var rectsFromAncestor = [];
            for (var i = 0,
            c = annotation.nodes.length; i < c; ++i) {
                var node = annotation.nodes[i];
                var rects = annotation.rectCallback(node);
                if (rects.fromAncestor) {
                    // Don't use rects from ancestor for now.
                    rectsFromAncestor = rectsFromAncestor.concat(rects);
                } else {
                    annotation.rectangles = annotation.rectangles.concat(rects);
                }
            }

            if (!annotation.rectangles.length) {
                // Use ancestor rects only if there has no normal rects.
                annotation.rectangles = rectsFromAncestor;
            }

            var top = 0;
            var left = 0;
            // Use the first rect of the first node as the anchor position.
            if (annotation.rectangles.length) {
                top = annotation.rectangles[0].top;
                left = annotation.rectangles[0].left;
            }

            var changed = annotation.top != top || annotation.left != left;
            if (changed) {
                annotation.top = top;
                annotation.left = left;
            }
            return changed;
        }

        function preprocessAnnotations() {
            if (!annotations.length) {
                var sequence = 0;
                var problems = chrome_comp.CompDetect.getAllProblems();
                var issusId = document.documentElement.getAttribute('issusId');
                document.documentElement.removeAttribute('issusId');
                // TODO: rename typeId to reason
                for (var typeId in problems) {
                    if (issusId && issusId.split(',').indexOf(typeId) != -1) {
                        var problem = problems[typeId];
                        // Sanity check to ensure this entry is valid (not an injected property
                        // by the host page.
                        if (problem && problem.occurrences && problem.occurrences.length) {
                            for (var i = 0,
                            c = problem.occurrences.length; i < c; ++i) {
                                var annotation = problem.occurrences[i];
                                annotation.problem = problem;
                                // This sequence is to ensure the sorting is stable when multiple
                                // annotations has the same position.
                                annotation.originalSequnece = sequence++;
                                annotations.push(annotation);
                                updateAnnotationTopLeft(annotation);
                            }
                        }
                    }
                }

                annotations.sort(compareAnnotations);
            }
        }

        // The 'this' object should be the tag div or balloon div.
        function showHighlight() {
            hideHighlight();
            var annotation = annotations[this.annotationIndex];
            var className = annotation.isError ? 'chrome-comp-highlight-error': 'chrome-comp-highlight-warning';
            for (var i = 0,
            c = annotation.rectangles.length; i < c; ++i) {
                var rect = annotation.rectangles[i];
                var highlightDiv;
                if (i < highlightDivs.length) {
                    highlightDiv = highlightDivs[i];
                } else {
                    highlightDiv = document.createElement('div');
                    annotationsDiv.appendChild(highlightDiv);
                    highlightDivs.push(highlightDiv);
                }
                highlightDiv.style.display = 'block';
                highlightDiv.className = className;
                highlightDiv.style.left = rect.left + 'px';
                highlightDiv.style.top = rect.top + 'px';
                highlightDiv.style.width = rect.width + 'px';
                highlightDiv.style.height = rect.height + 'px';
            }
        }

        function hideHighlight() {
            for (var i = 0,
            c = highlightDivs.length; i < c; ++i) highlightDivs[i].style.display = 'none';
        }

        function showBalloon(index, isScrollIntoView) {
            if (index < 0 || index >= annotations.length) return;

            isScrollIntoView = true;

            var annotation = annotations[index];
            var tagDiv = annotation.tagDiv;
            var navigationDiv;
            var descriptionDiv;
            var detailsDiv;
            var suggestionDiv;
            var moreInfoDiv;
            var previousLink;
            var nextLink;
            if (!balloonDiv) {
                balloonDiv = document.createElement('div');
                balloonDiv.className = 'chrome-comp-balloon';
                balloonDiv.onmouseover = showHighlight;
                balloonDiv.onmouseout = hideHighlight;

                var closeLink = document.createElement('a');
                closeLink.style.cssFloat = 'right';
                closeLink.innerHTML = chrome_comp.getMessage('close');
                closeLink.href = '#';
                closeLink.onclick = function() {
                    balloonDiv.style.display = 'none';
                    return false;
                };
                balloonDiv.appendChild(closeLink);

                navigationDiv = document.createElement('div');
                navigationDiv.textContent = '#'; // Just a place holder.
                previousLink = document.createElement('a');
                previousLink.textContent = chrome_comp.getMessage('previous');
                previousLink.href = '#';
                previousLink.onclick = function() {
                    showBalloon(this.annotationIndex - 1, true);
                    return false;
                };
                navigationDiv.appendChild(previousLink);
                nextLink = document.createElement('a');
                nextLink.textContent = chrome_comp.getMessage('next');
                nextLink.href = '#';
                nextLink.onclick = function() {
                    showBalloon(this.annotationIndex + 1, true);
                    return false;
                };
                navigationDiv.appendChild(nextLink);
                balloonDiv.appendChild(navigationDiv);

                descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'chrome-comp-description';
                balloonDiv.appendChild(descriptionDiv);
                detailsDiv = document.createElement('div');
                detailsDiv.className = 'chrome-comp-details';
                balloonDiv.appendChild(detailsDiv);
                suggestionDiv = document.createElement('div');
                suggestionDiv.className = 'chrome-comp-suggestion';
                balloonDiv.appendChild(suggestionDiv);
                moreInfoDiv = document.createElement('div');
                moreInfoDiv.className = 'chrome-comp-more-info';
                var moreInfo = document.createElement('a');
                moreInfo.textContent = chrome_comp.getMessage('moreInfo');
                moreInfo.target = '_blank';
                moreInfoDiv.appendChild(moreInfo);
                balloonDiv.appendChild(moreInfoDiv);
                annotationsDiv.appendChild(balloonDiv);
            } else {
                navigationDiv = balloonDiv.childNodes[1];
                descriptionDiv = navigationDiv.nextSibling;
                detailsDiv = descriptionDiv.nextSibling;
                suggestionDiv = detailsDiv.nextSibling;
                moreInfoDiv = suggestionDiv.nextSibling;
                previousLink = navigationDiv.childNodes[1];
                nextLink = navigationDiv.childNodes[2];
            }

            navigationDiv.firstChild.nodeValue = chrome_comp.getMessage('mOfN', [index + 1, annotations.length]) + ' ';
            previousLink.annotationIndex = index;
            nextLink.annotationIndex = index;
            previousLink.setAttribute('disabled', String(index == 0));
            nextLink.setAttribute('disabled', String(index == annotations.length - 1));

            var problem = annotation.problem;
            descriptionDiv.textContent = problem.issueDescription;
            var details = annotation.details;
            if (annotation.stack) {
                // Insert a zero-width space before all '/'s to make them line-breakable.
                details = (details ? details + '\n': '') + annotation.stack.replace(/\//g, '\u200B/');
            }
            if (details) {
                detailsDiv.textContent = details;
                detailsDiv.style.display = 'block';
            } else {
                detailsDiv.style.display = 'none';
            }
            if (problem.suggestion) {
                suggestionDiv.textContent = chrome_comp.getMessage('suggestion') + problem.suggestion + (problem.issueUrl ? '...': '');
                suggestionDiv.style.display = 'block';
            } else {
                suggestionDiv.style.display = 'none';
            }
            if (problem.issueUrl) {
                moreInfoDiv.firstChild.href = problem.issueUrl;
                moreInfoDiv.style.display = 'block';
            } else {
                moreInfoDiv.style.display = 'none';
            }

            balloonDiv.style.display = 'block ';
            balloonDiv.style.left = tagDiv.offsetLeft + 'px';
            balloonDiv.style.top = tagDiv.offsetTop + tagDiv.offsetHeight + 'px';

            if (isScrollIntoView) tagDiv.scrollIntoView();

            if (tagDiv.offsetTop > window.scrollY) {
                var balloonBottom = balloonDiv.offsetTop + balloonDiv.offsetHeight;
                if (balloonBottom > window.scrollY + window.innerHeight) {
                    balloonDiv.style.top = tagDiv.offsetTop - balloonDiv.offsetHeight + "px";
                }
            }
            if (tagDiv.offsetLeft > window.scrollX) {
                var balloonRight = balloonDiv.offsetLeft + balloonDiv.offsetWidth;
                if (balloonRight > window.scrollX + window.innerWidth) {

                    balloonDiv.style.left = tagDiv.offsetLeft - balloonDiv.offsetWidth + annotation.rectangles[0].width + "px";
                }
            }

            balloonDiv.annotationIndex = index;
            showHighlight.apply(balloonDiv);
            //  window.console.log(annotation.problem.issueDescription);
            // Show the primary node in the console. In developer tool, the user can
            // see the details of the node in the console panel.
            if (annotation.nodes && annotation.nodes.length); //window.console.log(annotation.nodes);
            if (annotation.stack); //window.console.log(annotation.stack);
        }

        window.SHOWBALLOON = showBalloon;

        function onTagClick() {
            showBalloon(this.annotationIndex);
        }

        function isDescendentOf(e1, e2) {
            while (e1) {
                if (e1 == e2) return true;
                e1 = e1.parentNode;
            }
            return false;
        }

        function onDocumentKeyDown(event) {
            if (balloonDiv && balloonDiv.style.display == 'block') {
                switch (event.keyCode) {
                case 36:
                    // Home
                    showBalloon(0, true);
                    break;
                case 37:
                    // Arrow Left
                case 38:
                    // Arrow Up
                    showBalloon(balloonDiv.annotationIndex - 1, true);
                    break;
                case 39:
                    // Arrow Right
                case 40:
                    // Arrow Down
                    showBalloon(balloonDiv.annotationIndex + 1, true);
                    break;
                case 35:
                    // End
                    showBalloon(annotations.length - 1, true);
                    break;
                default:
                    return;
                }
                event.stopPropagation();
                event.preventDefault();
            }
        }

        var refreshTimer;

        function setAnnotationTagsPosition(annotations) {
            var lastOriginalLeft = 0;
            var lastOriginalTop = 0;
            var lastRight = 0;
            var lastBottom = 0;
            for (var i = 0,
            c = annotations.length; i < c; ++i) {
                var annotation = annotations[i];
                var x = annotation.left;
                var y = annotation.top;
                if (x < lastOriginalLeft) {
                    y = Math.max(lastBottom, y);
                } else if (x < lastRight) {
                    if (y > lastOriginalTop) y = Math.max(lastBottom, y);
                    else x = lastRight;
                }
                var tagDiv = annotation.tagDiv;
                tagDiv.style.left = x + 'px';
                tagDiv.style.top = y + 'px';

                lastOriginalLeft = annotation.left;
                lastOriginalTop = annotation.top;
                lastRight = x + tagDiv.offsetWidth;
                lastBottom = y + tagDiv.offsetHeight;
            }
        }

        function refreshAnnotations() {
            if (!annotationsDiv) return;
            var positionChanged = false;
            for (var i = 0,
            c = annotations.length; i < c; ++i) {
                if (updateAnnotationTopLeft(annotations[i])) positionChanged = true;
            }
            if (positionChanged) {
                // Make a copy of the original annotations to ensure the original tag
                // numbers unchanged.
                var annotationsCopy = annotations.concat();
                annotationsCopy.sort(compareAnnotations);
                setAnnotationTagsPosition(annotationsCopy);
                // Simply hide the highlight to reduce the complexity.
                hideHighlight();
                // Refresh the position of the balloon.
                if (balloonDiv && balloonDiv.style.display == 'block') showBalloon(balloonDiv.annotationIndex);
            }
        }

        function showAnnotations() {
            annotations = [];
            
            if (annotationsDiv) return;
            preprocessAnnotations();

            // 没有错误
            if (!annotations.length){
                // 返回检测结果
                CALLBACKINFO.callback.call(CALLBACKINFO.context, annotations);
                return;
            };

            annotationsDiv = document.createElement('div');
            annotationsDiv.className = 'chrome-comp-annotations';
            document.body.appendChild(annotationsDiv);
            var styleElement = document.createElement('style');
            styleElement.textContent =
            // First try to reset all styles.
            // '.chrome-comp-annotations a:link' must be included here otherwise if
            // a 'a:link' rule in the page would have higher priority.
            '.chrome-comp-annotations *, .chrome-comp-annotations a:link {' + 'margin: 0;' + 'padding: 0;' + 'border: none;' + 'border-spacing: 0;' + 'border-radius: 0;' + 'background: transparent;' + 'opacity: 1;' + 'visibility: visible;' + 'font: 12px sans-serif;' + 'text-indent: 0;' + 'text-decoration: none;' + 'text-align: left;' + 'color: black;' + 'direction: ltr;' + 'line-height: normal;' + 'letter-spacing: 0;' + 'vertical-align: baseline;' + 'white-space: normal;' + 'float: none;' + 'min-width: 0;' + 'min-height: 0;' + 'max-width: none;' + 'max-height: none;' + 'width: auto;' + 'height: auto;' + 'overflow: display; }' + '.chrome-comp-annotations * { color: black; }' + '.chrome-comp-annotations div {' + 'display: block; }' + '.chrome-comp-error, .chrome-comp-warning {' + 'position: absolute;' + 'color: white;' + 'font-size: 10px;' + 'padding: 1px;' + 'border-radius: 3px;' + 'min-width: 12px;' + 'opacity: 0.9;' + 'text-align: center;' + 'cursor: pointer;' + 'z-index: 100000000; }' + '.chrome-comp-error { ' + 'background: -moz-linear-gradient(top, #F00, #B10); ' + 'background: -webkit-gradient(linear, left top, left bottom,' + 'from(#F00), to(#B10));' + 'border: solid thin #A10; }' + '.chrome-comp-warning { ' + 'background: -moz-linear-gradient(top, #FA0, #B80); ' + 'background: -webkit-gradient(linear, left top, left bottom,' + 'from(#FA0), to(#B80));' + 'border: solid thin #A70; }' + '.chrome-comp-error:hover,.chrome-comp-warning:hover {' + 'opacity: 1 }' + '.chrome-comp-highlight-error {' + 'position: absolute;' + 'box-sizing: border-box;' + 'z-index: 99999999;' + 'opacity: 0.5;' + 'background:#F00;' + 'border:solid thin #A10 }' + '.chrome-comp-highlight-warning {' + 'position: absolute;' + 'box-sizing: border-box;' + 'z-index: 99999999;' + 'opacity: 0.5;' + 'background:#FA0;' + 'border:solid thin #A10; }' + '.chrome-comp-balloon {' + 'position: absolute;' + 'z-index: 100000001;' + 'background: #FFC;' + 'padding: 5px;' + 'border: solid thin #888;' + 'border-top-left-radius: 6px;' + 'border-bottom-left-radius: 6px;' + 'border-top-right-radius: 6px;' + 'border-bottom-right-radius: 6px;' + 'opacity: 0.9;' + 'width: 350px;' + 'overflow: hidden; }' + '.chrome-comp-navigation {' + 'text-align: left;' + 'white-space: pre;' + 'padding-bottom: 3px; }' + '.chrome-comp-description {' + 'font: bold 14px sans-serif; }' + '.chrome-comp-details {' + 'white-space: pre-wrap; }' + '.chrome-comp-suggestion {' + 'white-space: normal; }' + '.chrome-comp-more-info {' + 'white-space: normal; }' + '.chrome-comp-annotations a, .chrome-comp-annotations a:link {' + 'display: inline;' + 'text-decoration: underline;' + 'color: #11C;' + 'cursor: pointer;' + 'margin: 0px 3px; }' + '.chrome-comp-annotations a:hover {' + 'color: #11C; }' + '.chrome-comp-annotations a:active {' + 'color: #11C; }' + '.chrome-comp-annotations a[disabled="true"] {' + 'text-decoration: none;' + 'color: #666;' + 'cursor: default; }';
            annotationsDiv.appendChild(styleElement);

            for (var i = 0,
            c = annotations.length; i < c; ++i) {
                var annotation = annotations[i];
                var tag = document.createElement('div');
                annotation.isError = (annotation.severityLevel || annotation.problem.severityLevel) >= 7;
                tag.className = annotation.isError ? 'chrome-comp-error': 'chrome-comp-warning';
                tag.textContent = String(i + 1);
                annotationsDiv.appendChild(tag);
                annotation.tagDiv = tag;
                tag.annotationIndex = i;
                tag.onmouseover = showHighlight;
                tag.onmouseout = hideHighlight;
                tag.onclick = onTagClick;
            }
            console.log("annotations=%o",annotations);
            setAnnotationTagsPosition(annotations);
            //if(_bShowCompatibilityBalloon){
            //showBalloon(0, true);
            //}
            document.addEventListener('keydown', onDocumentKeyDown, true);
            refreshTimer = window.setInterval(refreshAnnotations, 300);
            
            // 返回检测结果
            CALLBACKINFO.callback.call(CALLBACKINFO.context, annotations);
        }

        function hideAnnotations() {
            if (!annotationsDiv) return;

            document.body.removeChild(annotationsDiv);
            annotationsDiv = null;
            highlightDivs = [];
            balloonDiv = null;
            document.removeEventListener('keydown', onDocumentKeyDown, true);
            window.clearInterval(refreshTimer);
        }

        document.documentElement.addEventListener('chrome_comp_AnnotationOn', showAnnotations, false);
        document.documentElement.addEventListener('chrome_comp_AnnotationOff', hideAnnotations, false);
    });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if the HTML align attribute for several elements
     * transformed into floating element.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=5
     *
     * The align attribute for objects, images, tables, frames, etc., causes the
     * object to float to the left or right margin. Floating objects generally
     * begin a new line.
     * In other word, the align attribute for the said elements will be transformed
     * into CSS 'float' property in the corresponding direction.
     *
     * First, we ignore the inline and invisible elements. And get the children
     * elements of the present checked element, recording the left-aligned and
     * right-aligned said elements' information (the node object, its position and
     * its alignment). If there are less then two elements satisfied with
     * conditions, we do not continue.
     *
     * Try to enlarge the width of the element, we get the new position of the
     * elements satisfied with conditions. By comparing the changes in the
     * position to determine that if there may have the compatibility issue.
     * At last, restore the style of the element.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'align_nowrap',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         // We just check these elements whose align=left|right means floating. Refer
    //         // to http://www.w3.org/TR/html401/present/graphics.html#h-15.1.3.1
    //         this.ALIGNED_ELEMENT_LIST = {
    //             IMG: true,
    //             OBJECT: true,
    //             IFRAME: true,
    //             TABLE: true,
    //             APPLET: true,
    //             EMBED: true
    //         };

    //         /**
    //    * Get the next sibling node, this node may the element node or text node, but
    //    * it cannot be whitespace text node and absolutely positioned element node.
    //    * Because this compatibility issue only happens when these nodes appear after
    //    * the aligned tested element.
    //    * @param {Node} node the tested DOM element node.
    //    * @return {Node} the DOM node.
    //    */
    //         this.getNextUnpositionedSiblingNode = function(element) {
    //             var nextSibling = element.nextSibling;
    //             // Make sure the node we are finding is an element node or a non-whitespace
    //             // text node. We also must ignore the BR element, because BR do not occupy
    //             // any space.
    //             while (nextSibling && (nextSibling.nodeType != Node.ELEMENT_NODE || nextSibling.tagName == 'BR') && (nextSibling.nodeType != Node.TEXT_NODE || (nextSibling.nodeValue && nextSibling.nodeValue.trim() == ''))) {
    //                 nextSibling = nextSibling.nextSibling;
    //             }
    //             if (!nextSibling) return null;
    //             if (nextSibling.nodeType == Node.ELEMENT_NODE) {
    //                 // The absolutely positioned elements may trigger other compatibility
    //                 // issues here, so we must ignore them.
    //                 var position = chrome_comp.getComputedStyle(nextSibling).position;
    //                 if (position != 'absolute' && position != 'fixed') return nextSibling;
    //             } else if (nextSibling.nodeType == Node.TEXT_NODE) {
    //                 // There will not exist two consecutive whitespace text nodes, so there
    //                 // must be a non-whitespace text node after the whitespace text node.
    //                 if (nextSibling.nodeValue.trim() == '') nextSibling = nextSibling.nextSibling;
    //                 return nextSibling;
    //             }
    //             return null;
    //         }

    //         /**
    //    * Determine if the previous sibling node is normal flow inline level, this
    //    * node may the element node or text node, but it cannot be whitespace text
    //    * node and the BR element, because they do not cause the compatibility issue.
    //    * @param {Node} node the tested DOM element node.
    //    * TODO: put this function into framework.
    //    * @return {Node} the DOM node.
    //    */
    //         this.isPreviousNormalFlowSiblingNodeInline = function(element) {
    //             var previousSibling = element.previousSibling;
    //             if (element.nodeType == Node.TEXT_NODE && !previousSibling) previousSibling = element.parentElement.previousSibling;
    //             while (previousSibling && (previousSibling.nodeType != Node.ELEMENT_NODE) && (previousSibling.nodeType != Node.TEXT_NODE || (previousSibling.nodeValue && previousSibling.nodeValue.trim() == ''))) {
    //                 previousSibling = previousSibling.previousSibling;
    //             }
    //             if (!previousSibling) return false;
    //             if (previousSibling.nodeType == Node.TEXT_NODE) return true;
    //             if (!chrome_comp.isInNormalFlow(previousSibling)) return false;
    //             if (previousSibling.tagName == 'BR') return false;
    //             return chrome_comp.getComputedStyle(previousSibling).display.indexOf('inline') != -1;
    //         }

    //         /**
    //    * Get the rect information including ClientRect and ClientRectList of the
    //    * specified node.
    //    * @param {Node} node the DOM element node or the DOM text node.
    //    * @param {boolean} returnList determine the object type to return, if true
    //    *     return the ClientRectList object, if false return the ClientRect
    //    *     object.
    //    * @return {Object} the ClientRect or ClientRectList object about the node.
    //    * TODO: put this function into framework.
    //    */
    //         this.getRects = function(node, returnList) {
    //             if (!node) return null;
    //             if (node.nodeType == Node.ELEMENT_NODE) {
    //                 // For the element nodes, return the ClientRect object and the
    //                 // ClientRectList object of the node directly.
    //                 // note: Since the shape of a block element is always rectangular, the
    //                 // returned ClientRectList collection contains only one ClientRect
    //                 // object for block elements.
    //                 return (returnList) ? node.getClientRects() : node.getBoundingClientRect();
    //             } else if (node.nodeType == Node.TEXT_NODE) {
    //                 // For the text nodes, since the text node object does not support to
    //                 // retrieve the ClientRect object and the ClientRectList object, we need
    //                 // to use the range object loading the text node to return the objects
    //                 // we want.
    //                 var range = document.createRange();
    //                 range.selectNodeContents(node);
    //                 var rects = (returnList) ? range.getClientRects() : range.getBoundingClientRect();
    //                 return rects;
    //             }
    //             return null;
    //         }

    //         /**
    //    * Get all descendant non-whitespace text nodes under the specified element
    //    * sub tree.
    //    * @param {Node} element the DOM element node.
    //    * @return {Array} the array including all qualified text nodes.
    //    */
    //         this.getDescendantTextNode = function(element) {
    //             var result = [];
    //             if (!element || element.nodeType != Node.ELEMENT_NODE) return result;
    //             // Find all text nodes under the specified element through XPath.
    //             var allTextNode = document.evaluate('./descendant::text()', element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    //             for (var i = 0,
    //             j = allTextNode.snapshotLength; i < j; ++i) {
    //                 var textNode = allTextNode.snapshotItem(i);
    //                 var nodeValue = textNode.nodeValue;
    //                 // The white space text nodes are no use here, because they do not affect
    //                 // the layout.
    //                 if (nodeValue && nodeValue.trim() != '') result.push(textNode);
    //             }
    //             return result;
    //         }

    //         /**
    //    * Get all descendant empty element nodes under the specified element sub
    //    * tree.
    //    * @param {Node} element the DOM element node.
    //    * @return {Array} the array including all qualified element nodes.
    //    */
    //         this.getDescendantEmptyElement = function(element) {
    //             var result = [];
    //             if (!element || element.nodeType != Node.ELEMENT_NODE) return result;
    //             // We consider the aligned tested elements as indivisible, so do not check
    //             // their descendant elements, such as the PARAM element in the OBJECT
    //             // element.
    //             if (element.tagName in this.ALIGNED_ELEMENT_LIST) return result;
    //             var allElement = element.getElementsByTagName('*');
    //             for (var i = 0,
    //             j = allElement.length; i < j; ++i) {
    //                 var ele = allElement[i];
    //                 // if innerHTML is equal to empty string, it means the element does not
    //                 // contain any content, the element containing context has been detect
    //                 // when calling the getDescendantTextNode method. The BR elements also do
    //                 // not cause the issue.
    //                 if (ele.innerHTML == '' && ele.tagName != 'BR') result.push(ele);
    //             }
    //             return result;
    //         }

    //         /**
    //    * Get the original position of the tested element and its relative nodes.
    //    * @param {Node} node the DOM element node.
    //    * @param {Node} nextSibling the DOM element node.
    //    * @return {Object} the object including rect object about the tested element
    //    *     and its relative nodes.
    //    */
    //         this.getOldNodesRect = function(node, nextSibling, containingBlock) {
    //             var result = {
    //                 // The rect object about the tested element.
    //                 node: null,
    //                 // Each element in the array contains two keys, the key node stands the
    //                 // DOM node (text node or element node) which is related to the tested
    //                 // element, the key nodeRect stands the rect object of the node.
    //                 nextSibling: []
    //             };
    //             if (nextSibling.nodeType == Node.ELEMENT_NODE) {
    //                 result.node = this.getRects(node, false);
    //                 var descendantTextNode = this.getDescendantTextNode(nextSibling);
    //                 var descendantEmptyElement = this.getDescendantEmptyElement(nextSibling);
    //                 if (nextSibling.tagName in this.ALIGNED_ELEMENT_LIST || (descendantTextNode.length == 0 && descendantEmptyElement.length == 0)) {
    //                     result.nextSibling.push({
    //                         node: nextSibling,
    //                         nodeRect: this.getRects(nextSibling, false)
    //                     });
    //                 } else {
    //                     for (var i = 0,
    //                     j = descendantTextNode.length; i < j; ++i) {
    //                         var textNode = descendantTextNode[i];
    //                         if (this.isPreviousNormalFlowSiblingNodeInline(textNode)) continue;
    //                         result.nextSibling.push({
    //                             node: textNode,
    //                             // We just get and check the first line box of the text node,
    //                             // because if the text node is divided into several line, we should
    //                             // just compare the position of the first line.
    //                             nodeRect: this.getRects(textNode, true)[0]
    //                         });
    //                     }
    //                     for (var i = 0,
    //                     j = descendantEmptyElement.length; i < j; ++i) {
    //                         result.nextSibling.push({
    //                             node: descendantEmptyElement[i],
    //                             nodeRect: this.getRects(descendantEmptyElement[i], false)
    //                         });
    //                     }
    //                 }
    //             } else if (nextSibling.nodeType == Node.TEXT_NODE) {
    //                 result.node = this.getRects(node, false);
    //                 result.nextSibling.push({
    //                     node: nextSibling,
    //                     nodeRect: this.getRects(nextSibling, true)[0]
    //                 });
    //             }
    //             return result;
    //         }

    //         /**
    //    * Get the new position of the tested element and its relative nodes after
    //    * changing the width of the node's containing block, and restore the style we
    //    * modified.
    //    * @param {Node} node the DOM element node.
    //    * @param {Node} nextSibling the DOM element node.
    //    * @param {Node} containingBlock the node' containing block.
    //    * @return {Object} the object including rect object about the tested element
    //    *     and its relative nodes after changing the width of the node's
    //    *     containing block.
    //    */
    //         this.getNewNodesRect = function(node, nextSibling, containingBlock) {
    //             var result = {
    //                 // The rect object about the tested element.
    //                 node: null,
    //                 // Each element in the array contains two keys, the key node stands the
    //                 // DOM node (text node or element node) which is related to the tested
    //                 // element, the key nodeRect stands the rect object of the node.
    //                 nextSibling: [],
    //                 // The containing block of the tested element.
    //                 containingBlock: null
    //             };
    //             // Cache the original inline width style.
    //             var inlineWidthValue = containingBlock.style.getPropertyValue('width');
    //             var inlineWidthPriority = containingBlock.style.getPropertyPriority('width');
    //             // Set the containing block's width be wide enough for observing the
    //             // position's change of the tested element and its relative nodes.
    //             containingBlock.style.setProperty('width', '100000px', 'important');
    //             if (nextSibling.nodeType == Node.ELEMENT_NODE) {
    //                 result.node = this.getRects(node, false);
    //                 result.containingBlock = this.getRects(containingBlock, false);
    //                 var descendantTextNode = this.getDescendantTextNode(nextSibling);
    //                 var descendantEmptyElement = this.getDescendantEmptyElement(nextSibling);
    //                 if (nextSibling.tagName in this.ALIGNED_ELEMENT_LIST || (descendantTextNode.length == 0 && descendantEmptyElement.length == 0)) {
    //                     result.nextSibling.push({
    //                         node: nextSibling,
    //                         nodeRect: this.getRects(nextSibling, false)
    //                     });
    //                 } else {
    //                     for (var i = 0,
    //                     j = descendantTextNode.length; i < j; ++i) {
    //                         var textNode = descendantTextNode[i];
    //                         if (this.isPreviousNormalFlowSiblingNodeInline(textNode)) continue;
    //                         result.nextSibling.push({
    //                             node: textNode,
    //                             // We just get and check the first line box of the text node,
    //                             // because if the text node is divided into several line, we should
    //                             // just compare the position of the first line.
    //                             nodeRect: this.getRects(textNode, true)[0]
    //                         });
    //                     }
    //                     for (var i = 0,
    //                     j = descendantEmptyElement.length; i < j; ++i) {
    //                         result.nextSibling.push({
    //                             node: descendantEmptyElement[i],
    //                             nodeRect: this.getRects(descendantEmptyElement[i], false)
    //                         });
    //                     }
    //                 }
    //             } else if (nextSibling.nodeType == Node.TEXT_NODE) {
    //                 result.node = this.getRects(node, false);
    //                 result.containingBlock = this.getRects(containingBlock, false);
    //                 result.nextSibling.push({
    //                     node: nextSibling,
    //                     nodeRect: this.getRects(nextSibling, true)[0]
    //                 });
    //             }
    //             // Restore the original inline width style.
    //             containingBlock.style.removeProperty('width');
    //             if (inlineWidthValue) containingBlock.style.setProperty('width', inlineWidthValue, inlineWidthPriority);
    //             return result;
    //         }

    //         /**
    //    * Determine if the position of all tested element's relative nodes will be
    //    * affected by the left-aligned or right-aligned tested element.
    //    * @param {object} oldRectObj the original position.
    //    * @param {object} newRectObj the new position after changing the width of
    //    *     the node's containing block.
    //    * @param {string} alignDirection left or right.
    //    * @return {Array} the array including the nodes affected by tested element.
    //    */
    //         this.getDifferentPositionNodeList = function(oldRectObj, newRectObj, alignDirection) {
    //             var result = [];
    //             if (!oldRectObj || !newRectObj || !oldRectObj.nextSibling || !newRectObj.nextSibling || oldRectObj.nextSibling.length != newRectObj.nextSibling.length) return result;
    //             var oldNodeRect = oldRectObj.node;
    //             var oldContainingBlockRect = oldRectObj.containingBlock;
    //             var oldNextSiblingRectList = oldRectObj.nextSibling;
    //             var newNodeRect = newRectObj.node;
    //             var newContainingBlockRect = newRectObj.containingBlock;
    //             var newNextSiblingRectList = newRectObj.nextSibling;
    //             if (oldNextSiblingRectList.length == 0 || newNextSiblingRectList.length == 0) return result;
    //             var oldNodeLeft = oldNodeRect.left;
    //             var oldNodeRight = oldNodeRect.right;
    //             var oldNodeTop = oldNodeRect.top;
    //             var newNodeLeft = newNodeRect.left;
    //             var newNodeRight = newNodeRect.right;
    //             var newNodeTop = newNodeRect.top;
    //             for (var i = 0,
    //             j = oldNextSiblingRectList.length; i < j; ++i) {
    //                 var oldNextSiblingLeft = oldNextSiblingRectList[i].nodeRect.left;
    //                 var oldNextSiblingRight = oldNextSiblingRectList[i].nodeRect.right;
    //                 var oldNextSiblingTop = oldNextSiblingRectList[i].nodeRect.top;
    //                 var newNextSiblingLeft = newNextSiblingRectList[i].nodeRect.left;
    //                 var newNextSiblingRight = newNextSiblingRectList[i].nodeRect.right;
    //                 var newNextSiblingTop = newNextSiblingRectList[i].nodeRect.top;
    //                 // If the current node's position does not change, we consider it cannot
    //                 // be affected by the tested element.
    //                 if ((newNextSiblingLeft - newNodeLeft) > (oldNextSiblingLeft - oldNodeLeft) || (newNextSiblingTop - newNodeTop) < (oldNextSiblingTop - oldNodeTop)) {
    //                     // If the original position of the current node is on the right side of
    //                     // the left-aligned tested element or the left side of the right-aligned
    //                     // tested element, we consider it cannot be affected by the tested
    //                     // element.
    //                     if (alignDirection == 'left' && oldNextSiblingLeft >= oldNodeRight) continue;
    //                     if (alignDirection == 'right' && oldNextSiblingRight <= oldNodeLeft) continue;
    //                     result.push(oldNextSiblingRectList[i].node);
    //                 }
    //             }
    //             return result;
    //         }
    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         // Only check the element having the align attribute, and the align attribute
    //         // means floating. Refer to
    //         // http://www.w3.org/TR/html401/present/graphics.html#h-15.1.3
    //         if (! (node.tagName in this.ALIGNED_ELEMENT_LIST)) return;
    //         var alignDirection = (node.align + '').toLowerCase();
    //         // This issue happens when the align attribute is left or right.
    //         if (alignDirection != 'left' && alignDirection != 'right') return;
    //         // Do not check the absolutely positioned elements and the node in table.
    //         var position = chrome_comp.getComputedStyle(node).position;
    //         if (position == 'absolute' || position == 'fixed') return;
    //         // Do not check the invisible elements.
    //         if (node.offsetWidth == 0 || node.offsetHeight == 0) return;
    //         // The aligned tested element may only affect its next siblings in IE.
    //         var nextSibling = this.getNextUnpositionedSiblingNode(node);
    //         if (!nextSibling) return;
    //         var containingBlock = chrome_comp.getContainingBlock(node);
    //         var nodeList = this.getDifferentPositionNodeList(this.getOldNodesRect(node, nextSibling, containingBlock), this.getNewNodesRect(node, nextSibling, containingBlock), alignDirection);
    //         if (nodeList.length > 0) {
    //             // Add the tested element to the front of the list.
    //             nodeList.unshift(node);
    //             this.addProblem('RX8015', {
    //                 nodes: nodeList,
    //                 details: node.tagName + '[align="' + alignDirection + '"]'
    //             });
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check FONT element's color will be applied to its parent's
     * decoration color in some situations.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=25
     *
     * First if the ancestor element has no feature of text-decoration ,
     * there will be no problem.
     * Otherwise , the color of node is not equal the color of it's ancestor while
     * in standard mode, color attribute causes problem in IE6 and IE7 and
     * in quirks mode, color attribute causes problem in Chrome and Safari.
     *
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'decoration_font_color',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone() || node.tagName != 'FONT') return;

    //         var parentStyle = chrome_comp.getComputedStyle(node.parentNode);
    //         if (parentStyle.webkitTextDecorationsInEffect == 'none') return;

    //         var nodeStyleColor = chrome_comp.getComputedStyle(node).color;
    //         var quirksMode = chrome_comp.inQuirksMode();
    //         var hasColor = node.hasAttribute('color');
    //         // In standard mode, color attribute causes problem in IE6 and IE7;
    //         // In quirks mode, color style causes problem in Chrome and Safari.
    //         if (nodeStyleColor != parentStyle.color && ((quirksMode == false && hasColor == true) || (quirksMode == true && hasColor == false))) this.addProblem('RX3011', {
    //             nodes: [node],
    //             details: 'font color = ' + nodeStyleColor + '' + ', parent node color =  ' + parentStyle.color
    //         });
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if the HTMLElementObjects attempt to call the 'click'
     * method.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=59
     *
     * The 'click' method for the INPUT elements whose type has one of the following
     * value: "button", "checkbox", "radio", "reset", "submit" simulate a mouse
     * click, this is the description in W3C DOM specification, and in reality,
     * The BUTTON elements and all types of the INPUT elements have the 'click'
     * method in all browsers. But the other elements do not have this method in
     * Firefox, Chrome and Safari, so if these elements attempt to call the 'click'
     * method, there will throw an error.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'element_click',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         var This = this;
    //         // Some JavaScript libraries may add the click method to the prototype of the
    //         // DOM object of the HTML Element, to avoid the False-Positive, we hook the
    //         // prototype of Node. If there is click method called and its constructor's
    //         // prototype has not been added the click method (no Prototype library), the
    //         // callback below will be triggered.
    //         Node.prototype.click = function() {
    //             var callerString = arguments.callee.caller ? arguments.callee.caller.toString() : "";
    //             // jQuery's trigger method may try to call the element's native event method
    //             // if has, like
    //             // try {
    //             //     elem[ type ]();
    //             // } catch (e) {}
    //             // But there is a bug in old IE browsers, if we call the focus method on the
    //             // hidden element, refer to http://bugs.jquery.com/ticket/1486, testcase:
    //             // <input id="input" type="hidden" onfocus="alert('focus')" />
    //             // <script> document.getElementById('input').focus(); </script>
    //             // So the trigger method uses a try-catch statement to avoid the bug.
    //             // So we must ignore this situation.
    //             if (window.jQuery && callerString.indexOf('trigger') != -1) return;
    //             This.addProblem('SD9025', {
    //                 nodes: [this],
    //                 details: 'No such method: ' + this.tagName + '.click().'
    //             });
    //             throw 'TypeError: Object # has no method \'click\'';
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Checking the empty cells.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=11
     *      https://code.google.com/p/compatibility-detector/issues/detail?id=12
     *
     * In the separated borders model, the border of the empty cell will disappear
     * in some cases. And the 'padding-top' and 'padding-bottom' of the empty cell
     * will disappear in IE6, IE7 and IE8 quirks mode.
     *
     * The detector check all table cell elements (TD and TH), ignoring the
     * invisible and 'empty-cells:hidden' elements.
     * Check that if the table is using the separated borders model and the present
     * cell is set the border.
     * Check the descendant elements to determine that the cell is real empty, then
     * report this issue.
     */

    // addScriptToInject(function() {

    //     function isEmptyNode(node, cell) {
    //         switch (node.nodeType) {
    //         case Node.TEXT_NODE:
    //             var whiteSpace = chrome_comp.getComputedStyle(node.parentNode).whiteSpace;
    //             return ! (whiteSpace == 'pre' ? node.nodeValue: chrome_comp.trim(node.nodeValue));
    //         case Node.ELEMENT_NODE:
    //             if (node.tagName == 'BR' || node.tagName == 'HR') return false;
    //             var style = chrome_comp.getComputedStyle(node);
    //             switch (style.display) {
    //             case 'none':
    //                 return true;
    //             case 'inline':
    //                 if (chrome_comp.isReplacedElement(node)) return false;
    //                 if (chrome_comp.hasMargin(node) || chrome_comp.hasPadding(node) || chrome_comp.hasBorder(node)) {
    //                     console.log(node);
    //                     return false;
    //                 }
    //                 break;
    //             case 'block':
    //                 if (chrome_comp.hasPadding(node) || chrome_comp.hasBorder(node)) {
    //                     if (cell) {
    //                         var lastChildOfCell = cell.lastChild;
    //                         if (Node.TEXT_NODE == lastChildOfCell.nodeType) lastChildOfCell = lastChildOfCell.previousSibling;
    //                         if (node == lastChildOfCell) return true;
    //                     }
    //                     return false;
    //                 }
    //                 break;
    //             default:
    //                 return false;
    //             }
    //             var position = style.position;
    //             if (position == 'absolute') return true;
    //             if (style.position == 'relative' || chrome_comp.hasLayoutInIE(node) || node.tagName == 'IFRAME' || node.tagName == 'OBJECT' || node.tagName == 'EMBED') return false;
    //             for (var child = node.firstChild; child; child = child.nextSibling) {
    //                 if (!isEmptyNode(child, null)) return false;
    //             }
    //             return true;
    //         default:
    //             return true;
    //         }
    //     }

    //     function isEmptyCell(cell) {
    //         for (var node = cell.firstChild; node; node = node.nextSibling) {
    //             if (!isEmptyNode(node, cell)) return false;
    //         }
    //         if (chrome_comp.trim(cell.innerText) == '') return true;
    //         return false;
    //     }

    //     chrome_comp.CompDetect.declareDetector(

    //     'empty_cell',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         if (! (node.tagName == 'TD' || node.tagName == 'TH')) return;

    //         var style = chrome_comp.getComputedStyle(node);
    //         if (style.emptyCells == 'hide') return;

    //         var mayHaveRE1012 = style.borderCollapse != 'collapse' && chrome_comp.hasBorder(node);
    //         var mayHaveRE1013 = false;
    //         var nodePaddingTop = chrome_comp.toInt(style.paddingTop);
    //         var nodePaddingBottom = chrome_comp.toInt(style.paddingBottom);

    //         // Fix empty cell padding is 1px.
    //         nodePaddingTop = (nodePaddingTop == 1) ? 0 : nodePaddingTop;
    //         nodePaddingBottom = (nodePaddingBottom == 1) ? 0 : nodePaddingBottom;

    //         if (nodePaddingTop || nodePaddingBottom) {
    //             // Fix cell getComputStyle height is null.
    //             var nodeHeight = chrome_comp.toInt(chrome_comp.getSpecifiedStyleValue(node, 'height')) || chrome_comp.toInt(node.getAttribute('height'));

    //             var nodeClientHeight = node.clientHeight;
    //             var nodePaddingHeight = nodePaddingTop + nodePaddingBottom;

    //             // Check set height and padding top to bottom height value,
    //             // client height is table-cell actual render height.
    //             // if empty cell, the cell set height value less the padding height value,
    //             // then IE padding fail render cell hight will hava different.
    //             // if the cell distraction by other cells, then IE has not render different.
    //             if (nodeHeight < nodePaddingHeight && !(nodePaddingHeight < nodeClientHeight - nodeHeight)) mayHaveRE1013 = true;
    //         }

    //         // Filter child nodes is haslayout and empty elements.
    //         if (mayHaveRE1012 && isEmptyCell(node)) this.addProblem('RE1012', [node]);
    //         if (mayHaveRE1013 && isEmptyCell(node)) this.addProblem('RE1013', [node]);

    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if there is invisbile absolutely positioned element
     * overflowing the containing block which will establish the scroll bar.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=70
     *
     * In CSS2.1 specification, the overflow property specifies whether content of a
     * block container element is clipped when it overflows the element's box. It
     * affects the clipping of all of the element's content except any descendant
     * elements (and their respective content and descendants) whose containing
     * block is the viewport or an ancestor of the element.
     * But the specification does not describe if the descendants are invisble and
     * overflow the containing block, does the browsers need to establish the scroll
     * bar.
     *
     * So We check the invisible absolutely positioned elements and its containing
     * block. Get and compare their position rects, if there is such element, we
     * report the issue.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'invisible_element_overflow',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         // Only check the invisible elements.
    //         if (node.offsetWidth > 0 && node.offsetHeight > 0) return;
    //         // Only check the absolutely positioned elements.
    //         if (chrome_comp.getComputedStyle(node).position != 'absolute') return;
    //         var containingBlock = chrome_comp.getContainingBlock(node);
    //         if (!containingBlock) return;
    //         var containingBlockOverflow = chrome_comp.getComputedStyle(containingBlock).overflow;
    //         // Only check the containing block which will establish the scroll bar.
    //         if (containingBlockOverflow != 'auto' && containingBlockOverflow != 'scroll') return;

    //         var nodeRect = node.getBoundingClientRect();
    //         var containingBlockRect = containingBlock.getBoundingClientRect();
    //         // Determine if the node overflows by comparing its position with the
    //         // containing block's.
    //         if (nodeRect.top < containingBlockRect.top || nodeRect.right > containingBlockRect.right || nodeRect.bottom > containingBlockRect.bottom || nodeRect.left < containingBlockRect.left) {
    //             // All browsers will optimize the scrollbar when element's offsetWidth and
    //             // offsetHeight are zero.
    //             if (nodeRect.width == 0 && nodeRect.height == 0) return;
    //             this.addProblem('BX8037', [node, containingBlock]);
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check the HTML INPUT[type=radio] elements for all elements.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=106
     *
     * SGML basic types:
     * ID and NAME tokens must begin with a letter ([A-Za-z]) and may be followed
     * by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_"),
     * colons (":"), and periods (".").
     * Refer to: http://www.w3.org/TR/html4/types.html#type-cdata
     *
     * If you do not meet the above specifications, will result in all the
     * different browsers of INPUT[type=radio] select options.
     *
     * The detector checks all nodes, and do the following treatment:
     * 1. Check all INPUT[type=radio] element
     * 2. If not set HTML name attribute, So have differences in all browsers.
     * 3. If name value is not SGML basic types of NAME tokens, So have
          differences in all browsers.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'radio_name',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {
    //         this.PROPERTY_VALUE_REGEXP = /^[A-Za-z][\w\-\:\.]*$/;
    //         this.addCustomProblem = function(node, details) {
    //             this.addProblem('HF9009', {
    //                 nodes: [this.node],
    //                 details: details
    //             });
    //         };
    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         if (node.tagName != 'INPUT') return;

    //         var inputTypeValue = node.getAttribute('type');

    //         if (inputTypeValue != 'radio') return;

    //         this.node = node;
    //         // Check <input type='radio' /> format
    //         if (!node.hasAttribute('name')) {
    //             this.addCustomProblem(node, 'radio with no name');
    //             return;
    //         }

    //         // Check <input type='radio' name /> format
    //         var inputNameValue = node.getAttribute('name');
    //         if (inputNameValue == null) {
    //             this.addCustomProblem(node, 'radio name = null');
    //             return;
    //         }

    //         // Check name value is not SGML basic types
    //         if (!this.PROPERTY_VALUE_REGEXP.test(inputNameValue)) this.addCustomProblem(node, 'radio name = "' + inputNameValue + '"');

    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check the compatibility issues when adding or removing the
     * OPTION elements from the SELECT element.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=42
     *
     * We can add or remove the SELECT element's options by using select.add(),
     * select.remove(), select.options.add() or select.options.remove(). And some
     * methods have the compatibility issue, these may throw errors.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'select_options_add_remove_option',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         var This = this;

    //         this.isHTMLOptionElement = function(element) {
    //             return element instanceof HTMLOptionElement;
    //         }

    //         this.getSelectElementByOptionCollection = function(collection) {
    //             var select = null;
    //             if (collection.length < 1) {
    //                 var option = new Option('inserted', 'inserted');
    //                 collection.add(option);
    //                 select = collection[0].parentElement;
    //                 collection.remove(option);
    //             } else {
    //                 select = collection[0].parentElement;
    //             }
    //             return select;
    //         }

    //         /*
    //    * Hook select.add() method, the followings situations will have the
    //    * compatibility issue.;
    //    * select.add(option, index)
    //    * select.add(option)
    //    */
    //         this.selectAddHandler = function(result, originalArguments, callStack) {
    //             var arg0 = originalArguments[0];
    //             var arg1 = originalArguments[1];
    //             if (originalArguments.length < 1 || !This.isHTMLOptionElement(arg0)) return result;
    //             // Some non-IE browsers do not support missing second argument or the
    //             // second argument's value is a number.
    //             if (arg1 == 0 || arg1 | 0 == arg1 || arg1 === undefined) {
    //                 This.addProblem('SD9030', {
    //                     nodes: [this],
    //                     needsStack: true
    //                 });
    //             }
    //         }

            
    //    * Hook options.add() method, the following situations will have the
    //    * compatibility issue:
    //    * options.add(option, null)
    //    * options.add(option, option)
       
    //         this.optionsAddHandler = function(result, originalArguments, callStack) {
    //             var arg0 = originalArguments[0];
    //             var arg1 = originalArguments[1];
    //             if (originalArguments.length < 1 || !This.isHTMLOptionElement(arg0)) return result;
    //             // Only in IE8(S) and Opera, the second argument can be an HTMLOptionElement
    //             // object. In Firefox, Chrome and Safari, The new option will be inserted
    //             // into the head of the list when the second argument is null.
    //             if (arg1 === null || This.isHTMLOptionElement(arg1)) {
    //                 This.addProblem('SD9030', {
    //                     nodes: [This.getSelectElementByOptionCollection(this)],
    //                     needsStack: true
    //                 });
    //             }
    //         }
    //     },

    //     function setUp() {
    //         // We cannot get the HTMLOptionCollection directly, so we need to create an
    //         // HTMLSelectElement object temporarily to cache it.
    //         this.HTMLOptionsCollection = document.createElement('select').options.constructor;
    //         // Check the method called by the HTMLSelectElement object.
    //         chrome_comp.CompDetect.registerExistingMethodHook(HTMLSelectElement.prototype, 'add', this.selectAddHandler);
    //         // Check the method called by the HTMLOptionCollection object.
    //         chrome_comp.CompDetect.registerExistingMethodHook(this.HTMLOptionsCollection.prototype, 'add', this.optionsAddHandler);
    //     },

    //     function cleanUp() {
    //         chrome_comp.CompDetect.unregisterExistingMethodHook(HTMLSelectElement.prototype, 'add', this.selectAddHandler);
    //         chrome_comp.CompDetect.unregisterExistingMethodHook(this.HTMLOptionsCollection.prototype, 'add', this.optionsAddHandler);
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if there is percentage width's element in the
     * containing block being using shrink-to-fit width.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=6
     *
     * In CSS2.1 specification, a floating or absolutely positioned or the inline
     * block element will use the shrink-to-fit width if its 'width' is computed as
     * 'auto'. Calculation of the shrink-to-fit width will refer to its contents,
     * and if it contains the children elements setting percentage width, the result
     * is not defined in the specification explicitly. Thus, each browser will
     * render differently, and this issue also involves the almost standards mode.
     *
     * We check the elements using shrink-to-fit width, ignoring the replaced
     * elements and the root element.
     * Determine the element using available width as its shrink-to-fit width, we
     * must ignore such elements because there is no difference in this case.
     * Then get all percentage width descendants. if the length of the result is
     * larger than 0, we continue.
     * Ignore the absolutely positioned and invisible elements, then record the
     * offset width of present descendant, setting its width property to 'auto',
     * and record the new offset width. If the new value is different from the old
     * one, we consider that there may have the compatibility issue.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'shrink_to_fit_percentage_child',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         this.isInlineElement = function(element) {
    //             return chrome_comp.getComputedStyle(element).display == 'inline';
    //         }

    //         /**
    //    * Determine if an element whose width is shrink-to-fit is using the
    //    * containing block's available width. About shrink-to-fit refer to
    //    * http://www.w3.org/TR/CSS21/visudet.html#shrink-to-fit-float
    //    * @param {Node} element the DOM node to test.
    //    * @return {boolean} true if using available width.
    //    */
    //         this.isUsingAvailableWidth = function(element) {
    //             // Cache the original width and the inline position style of the element.
    //             var width = element.offsetWidth;
    //             var inlinePositionValue = element.style.getPropertyValue('position');
    //             var inlinePositionPriority = element.style.getPropertyPriority('position');
    //             // The fixed positioned element's width is also shrink-to-fit, and its
    //             // available width is the viewport's width. So offsetWidth looks like the
    //             // preferred width now.
    //             element.style.setProperty('position', 'fixed', 'important');
    //             var preferredWidth = element.offsetWidth;
    //             // Restore the inline position style of the element.
    //             element.style.removeProperty('position');
    //             if (inlinePositionValue) {
    //                 element.style.setProperty('position', inlinePositionValue, inlinePositionPriority);
    //             }
    //             // width is the original width of the element in the layout.
    //             // preferredWidth is the width of the element when there is no any other
    //             // element to astrict it in the horizontal direction.
    //             // So if preferredWidth is larger than width, it means that the element's
    //             // shrink-to-fit width is using the containing block's available width.
    //             return preferredWidth > width;
    //         }

    //         this.isPercentageWidthAndNotOneHundredPercent = function(width) {
    //             return width.slice( - 1) == '%' && width != '100%';
    //         }

    //         /**
    //    * Get the visible children elements whose width are percentage unit.
    //    * @param {Node} element the DOM node to test.
    //    * @return {Array} the array including visible percentage width child element.
    //    */
    //         this.getAllPercentageWidthDescendant = function(element) {
    //             var children = element.children;
    //             var descendantList = [];
    //             for (var i = 0,
    //             j = children.length; i < j; ++i) {
    //                 if (!chrome_comp.isElementTrulyDisplayable(children[i])) continue;
    //                 var width = chrome_comp.getSpecifiedStyleValue(children[i], 'width');
    //                 if (chrome_comp.isAutoOrNull(width) && !chrome_comp.isShrinkToFit(children[i]) && !chrome_comp.hasLayoutInIE(children[i]) && chrome_comp.getComputedStyle(children[i]).display == 'block') {
    //                     descendantList = descendantList.concat(this.getAllPercentageWidthDescendant(children[i]));
    //                 }
    //                 if (!width) continue;
    //                 if (this.isPercentageWidthAndNotOneHundredPercent(width)) {
    //                     descendantList.push(children[i]);
    //                 }
    //             }
    //             return descendantList;
    //         }

    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         var tagName = node.tagName;
    //         var SKIPPING_ELEMENT_LIST = {
    //             HTML: true,
    //             BODY: true,
    //             MARQUEE: true
    //         };
    //         if (tagName in SKIPPING_ELEMENT_LIST) return;

    //         if (chrome_comp.isReplacedElement(node)) return;
    //         if (chrome_comp.isTableElement(node)) return;
    //         if (this.isInlineElement(node)) return;
    //         if (!chrome_comp.isShrinkToFit(node)) return;
    //         if (this.isUsingAvailableWidth(node)) return;

    //         var descendantList = this.getAllPercentageWidthDescendant(node);
    //         if (descendantList.length < 1) return;
    //         for (var i = 0,
    //         j = descendantList.length; i < j; i++) {
    //             var style = chrome_comp.getComputedStyle(descendantList[i]);
    //             // Do not check the absolutely positioned element.
    //             if (style.position == 'fixed' || style.position == 'absolute') continue;
    //             // Do not check the invisible element.
    //             if (descendantList[i].offsetWidth == 0 || descendantList[i].offsetHeight == 0) continue;
    //             // Cache the original width of the current descendant child element and its
    //             // inline width style.
    //             var oldWidth = descendantList[i].offsetWidth;
    //             var inlineWidthValue = descendantList[i].style.getPropertyValue('width');
    //             var inlineWidthPriority = descendantList[i].style.getPropertyPriority('width');
    //             // In this case, IE8(S) and other non-IE browsers will treat the percentage
    //             // width as 'auto' first, and after calculating the available width of its
    //             // shrink-to-fit containing block, then calculating the computed width
    //             // according to.its percentage width and the containing block's available
    //             // width.
    //             descendantList[i].style.setProperty('width', 'auto', 'important');
    //             var newWidth = descendantList[i].offsetWidth;
    //             // Restore the inline width style.
    //             descendantList[i].style.removeProperty('width');
    //             if (inlineWidthValue) descendantList[i].style.setProperty('width', inlineWidthValue, inlineWidthPriority);
    //             // If we set 'width' to 'auto' and there is no difference between the
    //             // old offsetWidth and the new offsetWidth, we consider that there is no
    //             // compatibility issue.
    //             if (oldWidth != newWidth) {
    //                 var details = node.tagName + ((node.id) ? '[id="' + node.id + '"]': '') + ((node.className) ? '[class="' + node.className + '"]': '') + ' ---> ' + descendantList[i].tagName + ' { width: ' + chrome_comp.getSpecifiedStyleValue(descendantList[i], 'width') + ' }';
    //                 this.addProblem('RX8017', {
    //                     nodes: [descendantList[i], node],
    //                     details: details
    //                 });
    //             }
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check problems about 'border-spacing' property and cellspacing
     * attribute in the collapsing border model.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=24
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=119
     *
     * 'border-spacing' property specifies the horizontal and vertical distance
     * that separates adjoining cell borders. The effect of setting cellspacing
     * attribute is the same as set 'border-spacing' property. IE6 IE7 IE8(Q)
     * doesn't support 'border-spacing' property, and cellspacing attribute is
     * still works in the collapsing border model('border-collapse:collapse').
     *
     * First we check all 'display : table' and 'display : inline-table' elements,
     * then detect problems in two cases:
     * 1. table-like-element use collapsing border model. If the element has
     * attribute cellspacing and it's value is nonzero, then report problem RX1008.
     * 2. table-like-element use separated borders model. If the element has
     * attribute cellspacing and it's value is unequal to the value of
     * border-horizontal-spacing or border-vertical-spacing, then report problem
     * RE1020. If the table-like-element has no attribute cellspacing and the value
     * of 'border-horizontal-spacing' or 'border-vertical-spacing' greater than
     * 2px, then report problem RE1020(TABLE has 2px border-spacing default in IE
     * and omiting difference causes by 1px).
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'table_cellspacing_border_collapse',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {
    //         this.THRESHOLD_OF_COLLAPSE = 2;
    //         this.THRESHOLD_OF_SEPARATE = 5;
    //         this.reportProblemRE1020 = function(node, hSpacing, vSpacing) {
    //             this.addProblem('RE1020', {
    //                 nodes: [node],
    //                 details: 'hSpacing = ' + hSpacing + 'px' + ', vSpacing = ' + vSpacing + 'px'
    //             });
    //         }
    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         var computedStyle = chrome_comp.getComputedStyle(node);
    //         var display = computedStyle.display;
    //         if (display == 'table' || display == 'inline-table') {
    //             var borderCollapse = computedStyle.borderCollapse;
    //             var cellspacing = node.getAttribute('cellspacing');
    //             switch (borderCollapse) {
    //             case 'collapse':
    //                 if (chrome_comp.toInt(cellspacing) > this.THRESHOLD_OF_COLLAPSE && node.childElementCount > 0) {
    //                     this.addProblem('RX1008', {
    //                         nodes: [node],
    //                         details: 'cellspacing = ' + cellspacing
    //                     });
    //                 }
    //                 break;
    //             case 'separate':
    //                 var hSpacing = chrome_comp.toInt(computedStyle.WebkitBorderHorizontalSpacing, 10);
    //                 var vSpacing = chrome_comp.toInt(computedStyle.WebkitBorderVerticalSpacing, 10);

    //                 if (node.tagName == 'TABLE') {
    //                     if (node.hasAttribute('cellspacing')) {
    //                         var spacing = chrome_comp.toInt(node.getAttribute('cellspacing'));
    //                         if (hSpacing != spacing || vSpacing != spacing) {
    //                             this.reportProblemRE1020(node, hSpacing, vSpacing);
    //                             return;
    //                         }
    //                     } else {
    //                         // TABLE has 2px border-spacing default in IE and omiting
    //                         // difference causes by 1px.
    //                         if (hSpacing > this.THRESHOLD_OF_SEPARATE || vSpacing > this.THRESHOLD_OF_SEPARATE) {
    //                             this.reportProblemRE1020(node, hSpacing, vSpacing);
    //                             return;
    //                         }
    //                     }
    //                     // Other elements which set 'display:table' or 'display:inline-table'.
    //                 } else {
    //                     if (hSpacing > this.THRESHOLD_OF_SEPARATE || vSpacing > this.THRESHOLD_OF_SEPARATE) this.reportProblemRE1020(node, hSpacing, vSpacing);
    //                 }
    //                 break;
    //             }
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check that 'text-decoration' is not rendered in the same way
     * for elements andtheir descendant in all browsers.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=29
     *
     * In W3C CSS 2.1 specification, the description aboout the inheritence of the
     * 'text-decoration' property is not very clear.
     *
     * This makes the realization of different browsers may arise in specific
     * differences.
     * The detector checks all nodes, and do the following treatment:
     * 1. Filter all text nodes, invisible nodes and the nodes which have no parent
     *    element.
     * 2. Filter quirks mode on the 'position: absolute' and 'position: fixed'
     *    elements.
     * 3. Filter the element set 'top' and 'left' properties less than -100,
     *    because they may be invisible.
     * 4. At last, report the issue according to WebkitTextDecorationsInEffect
     *    property.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'text_decoration_propagation',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         if (!node.parentNode) return;

    //         var computedStyle = chrome_comp.getComputedStyle(node);
    //         var display = computedStyle.display;

    //         var THRESHOLD = -100;

    //         var position = computedStyle.position;
    //         // All browsers propagates decoration into absolute positioned block in
    //         // Quirks mode.
    //         if (position == 'absolute' || position == 'fixed') {
    //             if (chrome_comp.inQuirksMode()) return;
    //             // Position style element content box left or right less than zero,
    //             // text may not be visible.
    //             var contentBox = chrome_comp.getLayoutBoxes(node).contentBox;
    //             if (contentBox.right < 0 || contentBox.bottom < 0) return;
    //         } else if (display != 'inline-table' && display != 'inline-block') {
    //             return;
    //         }

    //         // The text-indent style value is less than threshold value,
    //         // text may not be visible.
    //         if (chrome_comp.toInt(computedStyle.textIndent) < THRESHOLD) return;

    //         if (!node.innerText) return;

    //         var parentComputedStyle = chrome_comp.getComputedStyle(node.parentNode);
    //         var textDecoration = parentComputedStyle.WebkitTextDecorationsInEffect
    //         if (textDecoration != 'none') this.addProblem('RT3002', {
    //             nodes: [node],
    //             details: 'textDecoration = ' + textDecoration
    //         });
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check the alignment of the CENTER element.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=33
     *
     * The CENTER element will make its descendants align center, but In IE, the
     * CENTER element also make itself align center.
     *
     * This detector will check all nodes, and do the following things:
     * 1. Check CENTER tag.
     * 2. Ignore CENTER is not normal flow layout.
     * 3. Check for child elements whose width is less than the parent. if it is
     *    large, then not continue to detector.
     * 4. Calculate the left rect position， whether the location is expected
     *    match the IE rendering. if it is true, then not continue to detector.
     * 5. The remaining cases has problems.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'center_element',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {
    //         this.THRESHOLD_OF_CENTER = 5;
    //         this.THRESHOLD_OF_HEIGHT = 3;
    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone() || node.tagName != 'CENTER') return;

    //         if (chrome_comp.mayAffectNormalFlow(node) != 1 || (node.offsetHeight <= this.THRESHOLD_OF_HEIGHT && node.innerText == '' && !chrome_comp.hasBorder(node) && !chrome_comp.hasBackground(node))) return;

    //         var parentNode = node.parentElement;

    //         var styleWidth = chrome_comp.getSpecifiedStyleValue(node, 'width');
    //         // If element width is auto or 100%, will full container, not detector.
    //         if (chrome_comp.isAutoOrNull(styleWidth) || '100%' == styleWidth) return;

    //         // If element marginLeft and marginRight value is 'auto',
    //         // and width value is not 'auto', the layout is auto align center,
    //         // use chrome_comp.isCenterAlignedByMarginAndWidth methods deteciton.
    //         // if return true, then text-align invalid in IE6/7, not detecor.
    //         if (chrome_comp.isCenterAlignedByMarginAndWidth(node)) return;

    //         // Element margin-left or margin-right style is auto. element marginBox will
    //         // full parent container content box, text-align layout invalid in IE6/7.
    //         if (chrome_comp.isMarginLeftAuto(node) || chrome_comp.isMarginRightAuto(node)) return;

    //         if (chrome_comp.isVisuallyCenterAligned(parentNode, node, this.THRESHOLD_OF_CENTER)) return;

    //         var containerContentWidth = chrome_comp.util.width(chrome_comp.getLayoutBoxes(parentNode).contentBox);
    //         var childMarginBoxWidth = chrome_comp.util.width(chrome_comp.getLayoutBoxes(node).marginBox);

    //         this.addProblem('HA8001', {
    //             nodes: [node, parentNode],
    //             details: 'container content box width: ' + containerContentWidth + 'px' + ', CENTER element width: ' + childMarginBoxWidth + 'px'
    //         });
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check the contents overflow the container.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=36
     *
     * In IE6 IE7(Q) IE8(Q), if an element's size is not big enouth to contain its
     * child elements, and its specified value of 'overflow-x' or 'overflow-y' is
     * 'visible', the element's size will be stretch by these child elements.
     * We check every element whether its content is overflow from it, and on the
     * overflow direction, the overflow property is setted by 'visible', if so,
     * report a problem.
     */

    addScriptToInject(function() {

        chrome_comp.CompDetect.declareDetector(

        'child_overflow_container',

        chrome_comp.CompDetect.ScanDomBaseDetector,

        function constructor() {
            this.THRESHOLD_X = 20;
            this.THRESHOLD_Y = this.THRESHOLD_X / 2;

            // TODO: Move this function into framework.
            this.getVisuallyNextElementSibling = function(element) {
                var nextElement = element;
                while (nextElement = nextElement.nextElementSibling) {
                    var style = chrome_comp.getComputedStyle(nextElement);
                    if (style.display != 'none' && (style.position != 'absolute' || style.position == 'absolute' && style.top == 'auto' && style.right == 'auto' && style.bottom == 'auto' && style.left == 'auto')) return nextElement;
                }
                return null;
            };

            /**
           * Merge two arrays into one, and remove any duplicate values.
           * @param {array} arrayA Array you wang to merge.
           * @param {array} arrayB Array you wang to merge.
           * @return {array} The new array which merged from arrayA and arrayB.
           */
            this.mergeArrays = function(arrayA, arrayB) {
                var i = arrayB.length;
                while (i--) {
                    var item = arrayB[i];
                    if (arrayA.indexOf(item) == -1) arrayA.push(item);
                }
                return arrayA;
            };
        },
        // constructor

        

        function checkNode(node, context) {


            if (node.nodeType != Node.ELEMENT_NODE || context.isDisplayNone()) return;

            if (chrome_comp.isReplacedElement(node) || chrome_comp.isTableElement(node) || node.tagName == "HTML" || node.tagName == "BODY") return;

            var nodeStyle = chrome_comp.getComputedStyle(node);
            if (nodeStyle.display == 'inline') return;

            var overflowX = chrome_comp.getSpecifiedStyleValue(node, 'overflow-x') || 'visible';
            var overflowY = chrome_comp.getSpecifiedStyleValue(node, 'overflow-y') || 'visible';
            var doHorizontalCheck = overflowX == 'visible';
            var doVerticalCheck = overflowY == 'visible';
            if (!doHorizontalCheck && !doVerticalCheck) return;

            // These child elements will stretch current node.
            var childrenOverflowHorizontally = [];
            var childrenOverflowVertically = [];

            // If contentBoxInIE is different with contentBoxInChrome, problem detected.
            var contentBoxInChrome = chrome_comp.getLayoutBoxes(node).contentBox;
            var contentBoxInIE = {
                top: contentBoxInChrome.top,
                right: contentBoxInChrome.right,
                bottom: contentBoxInChrome.bottom,
                left: contentBoxInChrome.left
            };

            var children = node.children;
            for (var i = 0,
            c = children.length; i < c; ++i) {
                var child = children[i];
                var childIsOverflowInHorizontal = false;
                var childIsOverflowInVertical = false;
                var childStyle = chrome_comp.getComputedStyle(child);
                var childDisplay = childStyle.display;
                var childPosition = childStyle.position;
                // Absolutely positioned element will not stretch its parent element.
                // Inline element will not have much impact on the layout.
                if (childDisplay == 'none' || childDisplay == 'inline' || childPosition == 'absolute') continue;
                var childMarginBox = chrome_comp.getLayoutBoxes(child).marginBox;
                // Relatively positioned element will stretch its parent element, like it
                // has no offset (dosn't setted 'top', 'right', 'bottom', 'left'). So adjust
                // its coordinates is necessary.
                // If its 'top' and 'bottom' is both setted, 'bottom' will be ignored.
                // If its 'left' and 'right' is both setted, 'right' will be ignored when
                // its container block's direction is 'ltr', or 'left' will be ignored when
                // its container block's direction is 'rtl'.
                if (childPosition == 'relative') {
                    var specifiedTop = chrome_comp.getSpecifiedStyleValue(child, 'top');
                    var specifiedRight = chrome_comp.getSpecifiedStyleValue(child, 'right');
                    var specifiedBottom = chrome_comp.getSpecifiedStyleValue(child, 'bottom');
                    var specifiedLeft = chrome_comp.getSpecifiedStyleValue(child, 'left');
                    var offsetX = 0;
                    var offsetY = 0;
                    if (specifiedRight) offsetX = -parseInt(childStyle.right);
                    if (specifiedLeft && (nodeStyle.direction == 'ltr' || !specifiedRight)) offsetX = parseInt(childStyle.left);
                    if (specifiedBottom) offsetY = -parseInt(childStyle.bottom);
                    if (specifiedTop) offsetY = parseInt(childStyle.top);
                    childMarginBox.top -= offsetY;
                    childMarginBox.right -= offsetX;
                    childMarginBox.bottom -= offsetY;
                    childMarginBox.left -= offsetX;
                }
                if (doHorizontalCheck) {
                    // For "direction:rtl".
                    if (childMarginBox.left < contentBoxInIE.left - this.THRESHOLD_X) {
                        childIsOverflowInHorizontal = true;
                        contentBoxInIE.left = childMarginBox.left;
                    }
                    if (childMarginBox.right > contentBoxInIE.right + this.THRESHOLD_X) {
                        childIsOverflowInHorizontal = true;
                        contentBoxInIE.right = childMarginBox.right;
                    }
                }
                if (doVerticalCheck) {
                    // The top edge will only be stretch if child node's margin-top is not
                    // collapsed with its parent element in IE. In fact, if this happens, the
                    // bottom edge will be bigger in IE, but not top edge be smaller.
                    if (childMarginBox.top < contentBoxInIE.top - this.THRESHOLD_Y) {
                        // If margin collapsed in IE, continue.
                        if ((Math.ceil(contentBoxInChrome.top - childMarginBox.top) == parseInt(childStyle.marginTop)) && parseInt(nodeStyle.paddingTop) == 0 && parseInt(nodeStyle.borderTopWidth) == 0 && !chrome_comp.hasLayoutInIE(node)) {
                            continue;
                        }
                        childIsOverflowInVertical = true;
                        contentBoxInIE.top = childMarginBox.top;
                    }
                    if (childMarginBox.bottom > contentBoxInIE.bottom + this.THRESHOLD_Y) {
                        // If margin collapsed in IE, continue.
                        if (Math.ceil(childMarginBox.bottom - contentBoxInChrome.bottom) == parseInt(childStyle.marginBottom) && parseInt(nodeStyle.paddingBottom) == 0 && parseInt(nodeStyle.borderBottomWidth) == 0 && !chrome_comp.hasLayoutInIE(node)) {
                            continue;
                        }
                        childIsOverflowInVertical = true;
                        contentBoxInIE.bottom = childMarginBox.bottom;
                    }
                }
                if (childIsOverflowInHorizontal) {
                    childrenOverflowHorizontally.push(child);
                }
                if (childIsOverflowInVertical) {
                    childrenOverflowVertically.push(child);
                }
            }

            var widthInChrome = chrome_comp.util.width(contentBoxInChrome);
            var heightInChrome = chrome_comp.util.height(contentBoxInChrome);
            var widthInIE = chrome_comp.util.width(contentBoxInIE);
            var heightInIE = chrome_comp.util.height(contentBoxInIE);

            // No problem.
            if (widthInChrome == widthInIE && heightInChrome == heightInIE) return;

            // Check whether has visually affect, and filter affected elements.
            // If this node has no border and background, do more check.
            // TODO: Do more check in parent element: floats/absolutely positioned...
            if (!chrome_comp.hasBorder(node) && !chrome_comp.hasBackground(node)) {
                var nextElement = this.getVisuallyNextElementSibling(node);
                // Has visually next sibling element, if the next sibling element's vertical
                // position is the same position in IE, don't report problem, because there
                // has no visually difference in this case.
                if (nextElement) {
                    var nextElementMarginBox = chrome_comp.getLayoutBoxes(nextElement).marginBox;
                    if (childrenOverflowVertically.length && nextElementMarginBox.top >= contentBoxInIE.bottom + parseInt(nodeStyle.marginBottom) + parseInt(nodeStyle.paddingBottom) - this.THRESHOLD_Y) childrenOverflowVertically.length = 0;
                }
                // Element's height is 0, or has no visually next sibling element, these
                // cases is generally caused by forget to clear floats, if this node is not
                // overflow from its parent element's content box in IE, don't report
                // problem too.
                if (heightInChrome == 0 || !nextElement) {
                    var parent = node.parentElement;
                    var parentContentBox = chrome_comp.getLayoutBoxes(parent).contentBox;
                    if (childrenOverflowHorizontally.length && contentBoxInIE.left - parseInt(nodeStyle.marginLeft) - parseInt(nodeStyle.paddingLeft) >= parentContentBox.left - this.THRESHOLD_X && contentBoxInIE.right + parseInt(nodeStyle.marginRight) + parseInt(nodeStyle.paddingRight) <= parentContentBox.right + this.THRESHOLD_X) childrenOverflowHorizontally.length = 0;
                    if (childrenOverflowVertically.length && contentBoxInIE.top - parseInt(nodeStyle.marginTop) - parseInt(nodeStyle.paddingTop) >= parentContentBox.top - this.THRESHOLD_Y && contentBoxInIE.bottom + parseInt(nodeStyle.marginBottom) + parseInt(nodeStyle.paddingBottom) <= parentContentBox.bottom + this.THRESHOLD_Y) childrenOverflowVertically.length = 0;
                }
            }

            var affectedElements = this.mergeArrays(childrenOverflowHorizontally, childrenOverflowVertically);
            console.log("affectedElements=%o",affectedElements);
            console.log("node=%o",node);
            if (affectedElements.length == 0) return;

            // The first highlight element is the stretched element.
            affectedElements.unshift(node);
            console.log("affectedElements=%o",affectedElements);
            var details = "Content box's size in Chrome: " + widthInChrome + ' * ' + heightInChrome + ', in IE: ' + widthInIE + ' * ' + heightInIE + '.';
            this.addProblem('RD1002', {
                nodes: affectedElements,
                details: details
            });
        }); // declareDetector
    });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check floating layout of not clear floating or
     * clear floating fail or use IE hasLayout.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=155
     * Floating layout is a common layout. IE will calculate the height of the
     * container which is hasLayout. In CSS2.1 only the container which
     * establishes new block formatting context will have this behaviour.
     * And if a have 'clearance' style element appears after the floating elements,
     * there is no difference in all browsers.
     *
     * Detecting steps:
     * 1. Ignore the HTML BODY FORM A elements.
     * 2. Ignore the element who has no descendant floats.
     * 3. Ignore the elements which is hasLayout and establishes new block
     *    formatting context.
     * 4. Ignore normal floating layout without ':after' pseudo-elements on which
     *    setting 'clear' property, and not hasLayout, and not establishes a block
     *    formatting context.
     * 5. Ignore this case: If a element who is not established a block
     *    formatting context and its descendant floats are not overflow.
     * 6. Ignore set the element hight layout (this is set hasLayout in IE) of
     *    the not use ':after' pseudo-element processing floating Layout, and
     *    floating layout is not overflow ancestor element, and element not set
     *    new block formatting context.
     * 7. Ignore set pseudo element ':after' clear floating, and triggered
     *    IE hasLayout.
     * 8. Check if childer have the floating, and layout is not clear floating,
     *    and use pseudo element ':after' clear floating, report the IE6 issue.
     * 9. Check if the element triggered hasLayout in IE or block formatting
     *    contexts, if childer have not clear the floating elements.
     *    report the IE or other issue.
     * 10.Check if the element display style is 'table-xxxx', if childer have
     *    not clear the floating elements, report the IE6/7 issue.
     * 11.Check if the element layout clear floating fail, and set hasLayout
     *    in IE or new block formatting context, report the IE or other issue.
     *
     * ps: This detector not detection use CSS hack.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'clear_float',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {

    //         this.floatNode = null;

    //         /**
    //    * Get child nodes float or clear style is not 'none'.
    //    * @param {Element} node
    //    * @param {string} styleName is 'float' or 'clear'
    //    * @return {Array.<Element>} node array
    //    */
    //         this.getVisibleChildrenByFloatOrClear = function(node, styleName) {
    //             var children = Array.prototype.slice.call(node.children);
    //             var nodes = [];
    //             for (var i = 0,
    //             c = children.length; i < c; ++i) {
    //                 var childNode = children[i];
    //                 var computedStyle = chrome_comp.getComputedStyle(childNode);
    //                 if (styleValue = computedStyle[styleName] != 'none' && computedStyle.display != 'none' && childNode.offsetHeight > 0) nodes.push(childNode);
    //             }
    //             return nodes;
    //         };

    //         /**
    //    * Check subsequent element clear floating of the node.
    //    *
    //    * A.
    //    * +--------------------------------------------+
    //    * |  +-------------------------------+         |
    //    * |  |   float node                  |         |
    //    * |  +-------------------------------+         |
    //    * |  +--------------------------------------+  |
    //    * |  |   clear node                         |  |
    //    * |  +--------------------------------------+  |
    //    * +--------------------------------------------+
    //    * +--------------------------------------------+
    //    * |      other layout block                    |
    //    * +--------------------------------------------+
    //    *
    //    * B.
    //    * +--------------------------------------------+
    //    * |  +-------------------------------+         |
    //    * +--|   float node                  |---------+
    //    *    +-------------------------------+
    //    * +--------------------------------------------+
    //    * |   clear node                               |
    //    * +--------------------------------------------+
    //    * +--------------------------------------------+
    //    * |      other layout block                    |
    //    * +--------------------------------------------+
    //    *
    //    * C.
    //    * +--------------------------------------------+
    //    * |  +-------------------------------------+   |
    //    * |  |  +-------------------------------+  |   |
    //    * |  +--|   float node                  |--+   |
    //    * +-----|                               |----- +
    //    *       +-------------------------------+
    //    * +--------------------------------------------+
    //    * |   clear node                               |
    //    * +--------------------------------------------+
    //    * +--------------------------------------------+
    //    * |      other layout block                    |
    //    * +--------------------------------------------+
    //    *
    //    * D.
    //    * +--------------------------------------------+
    //    * |  +-------------------------------------+   |
    //    * |  |  +-------------------------------+  |   |
    //    * |  +--|   float node                  |--+   |
    //    * |     |                               |      |
    //    * |     +-------------------------------+      |
    //    * |  +--------------------------------------+  |
    //    * |  |   clear node                         |  |
    //    * |  +--------------------------------------+  |
    //    * +--------------------------------------------+
    //    * +--------------------------------------------+
    //    * |      other layout block                    |
    //    * +--------------------------------------------+
    //    */
    //         this.isNextElementClear = function(node) {
    //             var nextSibling = this.getNextAffectFloatingLayoutElementByNode(node);
    //             var parentNextSibling = this.getNextAffectFloatingLayoutElementByParentNode(node);
    //             if (nextSibling) return this.hasClearStyle(nextSibling);
    //             // The layout has no problem if it's the last node of DOM tree.
    //             if (!nextSibling && !parentNextSibling) return true;
    //             // The next slibling clear success of parent elment.
    //             if (!this.hasClearStyle(parentNextSibling)) return false;
    //             return false;
    //         };

    //         this.hasClearStyle = function(node) {
    //             return (chrome_comp.getComputedStyle(node).clear != 'none');
    //         };

    //         /**
    //    * Check parent node of the node, if it is visual non-inline elment
    //    * of normal flow.
    //    * @param {Node} node
    //    * @return {Node} It is null or it is noraml flow or floats node.
    //    *    If node is BODY return is null.
    //    */
    //         this.getNextAffectFloatingLayoutElementByParentNode = function(node) {
    //             // The last element of the document and no impact is not clear float.
    //             if (!node || node.tagName == 'BODY' || node.tagName == 'HTML') return null;
    //             node = node.parentNode;
    //             var nextSibling = this.getNextAffectFloatingLayoutElementByNode(node);
    //             if (!nextSibling) return this.getNextAffectFloatingLayoutElementByParentNode(node);
    //             else return nextSibling;
    //         };

    //         /**
    //    * Get the next sibling element which is visible, non-inline and in normal
    //    * flow.
    //    * @param {Element} node
    //    * @return {Element} null if not found
    //    */
    //         this.getNextAffectFloatingLayoutElementByNode = function(node) {
    //             node = node.nextSibling;
    //             for (; node; node = node.nextSibling) {
    //                 if (Node.ELEMENT_NODE != node.nodeType) continue;
    //                 var style = chrome_comp.getComputedStyle(node);
    //                 if (style.display != 'none' && style.display.indexOf('inline') != 0 && (node.childElementCount == 0 || this.isAffectedByChildrenLayout(node))) return node;
    //             }
    //             return null;
    //         };

    //         /**
    //    * Check childer element, if it is in normal flow or floats return true,
    //    * else return false.
    //    */
    //         this.isAffectedByChildrenLayout = function(node) {
    //             var children = Array.prototype.slice.call(node.children);
    //             for (var i = 0,
    //             c = children.length; i < c; ++i) {
    //                 var computedStyle = chrome_comp.getComputedStyle(children[i]);
    //                 if (! (computedStyle.display == 'none' || computedStyle.position == 'absolute' || computedStyle.position == 'fixed')) return true;
    //             }
    //             return false;
    //         };

    //         this.isPseudoElementClear = function(node) {
    //             // Temporary use window.getComputedStyle method,
    //             // wait framework.js fixed, replace the window.getComputedStyle method
    //             // to the chrome_comp.getComputedStyle method.
    //             var pseudoStyle = window.getComputedStyle(node, ':after');
    //             // Triggered ie hasLayout features and use ':after' pseudo-element
    //             // processing floating Layout, not detection.
    //             return pseudoStyle.display == 'block' && pseudoStyle.clear != 'none';
    //         }

    //         this.isClearSuccess = function(floatNodes, clearNodes) {
    //             if (clearNodes == 0) return false;
    //             var lastFloatNode = floatNodes[floatNodes.length - 1];
    //             var lastClearNode = clearNodes[clearNodes.length - 1];
    //             // Used to compareDocumentPosition method compare two elements
    //             // of position, if the A element in the B element after, return 2.
    //             if (lastClearNode.compareDocumentPosition(lastFloatNode) != 2) {
    //                 this.floatNode = lastFloatNode;
    //                 return false;
    //             }
    //             return true;
    //         };

    //         this.isFloatsOverflowContainer = function(floatNodes, container) {
    //             var containerBottom = container.getBoundingClientRect().bottom + parseInt(chrome_comp.getComputedStyle(container).marginBottom, 10);
    //             for (var i = 0,
    //             c = floatNodes.length; i < c; ++i) {
    //                 var floatNodeBottom = floatNodes[i].getBoundingClientRect().bottom;
    //                 if (containerBottom < floatNodeBottom) {
    //                     this.floatNode = floatNodes[i];
    //                     return true;
    //                 }
    //             }
    //             return false;
    //         };

    //         this.hasBackground = function(nodeStyle) {
    //             return (nodeStyle.backgroundImage != 'none' || nodeStyle.backgroundColor != 'rgba(0, 0, 0, 0)');
    //         };

    //         this.hasBorder = function(nodeStyle) {
    //             return (parseInt(nodeStyle.borderTopWidth, 10) > 0 || parseInt(nodeStyle.borderRightWidth, 10) > 0 || parseInt(nodeStyle.borderBottomWidth, 10) > 0 || parseInt(nodeStyle.borderLeftWidth, 10) > 0);
    //         };

    //         this.setProblem = function(node) {
    //             this.addProblem('RM8002', {
    //                 nodes: [node, this.floatNode],
    //                 details: 'Problem Element height is ' + chrome_comp.getComputedStyle(node).height
    //             });
    //         };
    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         var IGNORED_TAGS = {
    //             HTML: true,
    //             BODY: true,
    //             FORM: true
    //         };
    //         if (node.tagName in IGNORED_TAGS) return;

    //         var computedStyle = chrome_comp.getComputedStyle(node);
    //         if (computedStyle.display == 'inline') return;

    //         var floatNodes = this.getVisibleChildrenByFloatOrClear(node, 'float');
    //         // Stop detection if it has no descendant floats.
    //         if (floatNodes.length == 0) return;

    //         var hasLayout = chrome_comp.hasLayoutInIE(node);
    //         var hasBFC = chrome_comp.isBlockFormattingContext(node);

    //         // Stop detection if it hasLayout in IE and established
    //         // a BFC in other browsers.
    //         if (hasLayout && hasBFC) return;

    //         var hasBorder = this.hasBorder(computedStyle);
    //         var hasBackground = this.hasBackground(computedStyle);

    //         if (this.isNextElementClear(node) && !hasBorder && !hasBackground) return;

    //         var isPseudoElementClear = this.isPseudoElementClear(node);
    //         var isOverflow = this.isFloatsOverflowContainer(floatNodes, node);
    //         var clearNodes = this.getVisibleChildrenByFloatOrClear(node, 'clear');
    //         var clearNodeCount = clearNodes.length;

    //         // Stop detection if it's not established a BFC and its descendant
    //         // floats are not overflow.
    //         if (!isOverflow && !isPseudoElementClear && !hasBFC) return;

    //         // Normal float layout is not detection.
    //         if (clearNodeCount == 0 && !isPseudoElementClear && !hasLayout && !hasBFC && !hasBorder && !hasBackground) return;

    //         // Node is set hasLayout in IE, sub-element is float layout and not overfolw
    //         // ancestor element, not detection.
    //         // ps: set height triggered hasLayout in IE.
    //         if (clearNodeCount == 0 && !isPseudoElementClear && !isOverflow && !hasBFC) return;

    //         // Use pseudo element ':after' clear floating, and triggered IE hasLayout,
    //         // not detection.
    //         if (clearNodeCount == 0 && isPseudoElementClear && hasLayout) return;

    //         // Only use pseudo element ':after' clear floating.
    //         if (clearNodeCount == 0 && isPseudoElementClear && !hasLayout) {
    //             this.addProblem('RS8010', {
    //                 nodes: [node],
    //                 details: 'Problem Element set ":after" pseudo element.'
    //             });
    //         }

    //         // Detection the element triggered hasLayout in IE or Block Formatting
    //         // Contexts, if childer have not clear the floating elements.
    //         // report the issue.
    //         if (clearNodeCount == 0 && (hasLayout || hasBFC)) {
    //             this.floatNode = floatNodes[0];
    //             this.setProblem(node);
    //             return;
    //         }

    //         // Detection the element display style is 'table-xxxx',
    //         // if childer have not clear the floating elements.
    //         // report the issue.
    //         if (clearNodeCount == 0 && computedStyle.display.indexOf('table') == 0) {
    //             this.floatNode = floatNodes[0];
    //             this.setProblem(node);
    //             return;
    //         }

    //         // Detection sub-elements clear floating fail, and triggered hasLayout
    //         // in IE or Block Formatting Contexts, report the issue.
    //         if (!this.isClearSuccess(floatNodes, clearNodes) && !(!isOverflow && hasLayout && hasBFC) && !isPseudoElementClear) {
    //             this.setProblem(node);
    //             return;
    //         }

    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the 'License');
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an 'AS IS' BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if document type is different in IE and Chrome.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=56
     *
     * The comment or XML declaration before DTD will make the DTD be invalid in IE
     * so that the HTML document will be in quirks mode in IE. So We get the real
     * document mode in framework_shared.js, and save the state on
     * chrome_comp.documentMode object because it is useful in some detectors.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'comment_before_doctype',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     null, // constructor
    //     function postAnalyze() {
    //         // Get the real document mode values from chrome_comp.documentMode object.
    //         var documentMode = chrome_comp.documentMode;
    //         var doctypeInIE = documentMode.IE;
    //         var doctypeInWebKit = documentMode.WebKit;
    //         var hasCommentBeforeDTD = documentMode.hasCommentBeforeDTD;
    //         var details = 'IE: ' + (doctypeInIE == 'Q' ? 'Quirks Mode': 'Standards Mode') + ', Chrome: ' + (doctypeInWebKit == 'Q' ? 'Quirks Mode': 'Standards Mode');
    //         // Detect HG8001 issue.
    //         if (hasCommentBeforeDTD && doctypeInIE == 'Q' && doctypeInWebKit == 'S') {
    //             this.addProblem('HG8001', {
    //                 details: details
    //             });
    //         }
    //     }); // declareDetector
    // });
    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the 'License');
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an 'AS IS' BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check the real document mode in IE and WebKit browsers, and
     * the box which the 'width' and 'height' properties apply.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=57
     *
     * The comment or XML declaration before DTD will make the DTD be invalid in IE
     * so that the HTML document will be in quirks mode in IE. We must get the real
     * document mode in IE and WebKit first, and save this state because it is
     * useful in checkNode function. To improve the performance, the said steps have
     * to execute in the constructor function. Note that there are several strange
     * DTDs that have the document mode in IE and non-IE browser be different. We
     * must consider them.
     * Check the box which the 'width' and 'height' properties apply for all kinds
     * of elements according to the root cause article RD8001 (refer to
     * http://www.w3help.org/zh-cn/causes/RD8001).
     * We also must notice the -webkit-box-sizing property the author uses.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'document_type_and_boxsizing',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         var THRESHOLD = 10;
    //         // Save some important values for detecting each node here.
    //         this.doctypeInIE = chrome_comp.documentMode.IE;
    //         this.doctypeInWebKit = chrome_comp.documentMode.WebKit;

    //         // There is no difference in Standards Mode. We can not detect RD8001 issue
    //         // If the document mode is undefined in IE. More information about RD8001,
    //         // please refer to:
    //         // http://www.w3help.org/zh-cn/causes/RD8001
    //         // About IE box model bug:
    //         //  IE Quirks Mode: border-box                Others: content-box
    //         //
    //         //                                     ---------------------------------
    //         //                                     |            margin             |
    //         //                                     | ----------------------------- |
    //         //                                     | |          border           | |
    //         //   -------------------------         | | ------------------------- | |
    //         //   |        margin         |         | | |        padding        | | |
    //         //   | --------------------- |  -----  | | | --------------------- | | |
    //         //   | |      border       | |    |    | | | |      content      | | | |
    //         //   | | ----------------- | |    |    | | | |                   | | | |
    //         //   | | |    padding    | | |    2    | | | |                   | | | |
    //         //   | | | ------------- | | |    0    | | | |                   | | | |
    //         //   | | | |  content  | | | |    0    | | | |                   | | | |
    //         //   | | | |           | | | |    p    | | | |                   | | | |
    //         //   | | | |           | | | |    x    | | | |                   | | | |
    //         //   | | | ------------- | | |    |    | | | |                   | | | |
    //         //   | | ----------------- | |    |    | | | |<======150px======>| | | |
    //         //   | --------------------- |  -----  | | | --------------------- | | |
    //         //   | |<======150px======>| |         | | ------------------------- | |
    //         //   -------------------------         | ----------------------------- |
    //         //                                     ---------------------------------
    //         // IE box model bug is a software bug in the implementation of CSS in earlier
    //         // versions of IE. IE6 and newer are not affected in their Standards Mode,
    //         // but for compatibility reasons, the bug is still present when a page is
    //         // rendered in Quirks Mode. If doctypeInIE is undefined, in this case, we are
    //         // not sure that IE is rendering in quirks mode. So ignore it.
    //         // More information refer to:
    //         // http://en.wikipedia.org/wiki/Internet_Explorer_box_model_bug
    //         this.isIEInQuirksMode = this.doctypeInIE && !(this.doctypeInIE == 'S' && this.doctypeInWebKit == 'S');

    //         this.reportProblem = function(difference, node, details) {
    //             if (difference >= THRESHOLD) this.addProblem('RD8001', {
    //                 nodes: [node],
    //                 details: details
    //             });
    //         }

    //         this.hasHorizontalBorder = function(style) {
    //             var borderRight = parseInt(style.borderRightWidth, 10);
    //             var borderLeft = parseInt(style.borderLeftWidth, 10);
    //             return borderRight || borderLeft;
    //         }

    //         this.hasVerticalBorder = function(style) {
    //             var borderTop = parseInt(style.borderTopWidth, 10);
    //             var borderBottom = parseInt(style.borderBottomWidth, 10);
    //             return borderTop || borderBottom;
    //         }

    //         this.hasHorizontalPadding = function(style) {
    //             var paddingRight = parseInt(style.paddingRight, 10);
    //             var paddingLeft = parseInt(style.paddingLeft, 10);
    //             return paddingRight || paddingLeft;
    //         }

    //         this.hasVerticalPadding = function(style) {
    //             var paddingTop = parseInt(style.paddingTop, 10);
    //             var paddingBottom = parseInt(style.paddingBottom, 10);
    //             return paddingTop || paddingBottom;
    //         }

    //         /**
    //    * Do not consider the non-replaced inline elements, table elements and the
    //    * invisible elements, because:
    //    * 1. The 'width' and 'height' can not apply to the non-replaced inline
    //    *    elements, table rows, and row groups. Refer to:
    //    *    http://www.w3.org/TR/CSS21/visudet.html#the-width-property
    //    * 2. The visual layout of table contents is different from the visual layout
    //    *    of others. It has the particular width and height algorithms. We need to
    //    *    detect the table elements separately. Refer to:
    //    *    http://www.w3.org/TR/CSS21/tables.html#table-layout
    //    * 3. Since a display of 'none' causes an element to not appear, its
    //    *    descentant elements do not generate any boxes either, so for these
    //    *    elements, we do not need to detect. Refer to:
    //    *    http://www.w3.org/TR/CSS21/visuren.html#display-prop
    //    */
    //         this.isBlockOrReplacedElement = function(style, element) {
    //             var display = style.display;
    //             if ((display == 'inline' && !chrome_comp.isReplacedElement(element)) || display == 'none' || chrome_comp.isTableElement(element)) return false;
    //             return true;
    //         }

    //         /**
    //    * Some authors may use CSS3 box-sizing property to make the values of width
    //    * and height apply on border box in WebKit browsers. So we must ignore this
    //    * situation. We should also consider -webkit-box-sizing property for the
    //    * older Chrome.
    //    */
    //         this.isBoxSizingOnBorderBox = function(styleObject) {
    //             var boxSizing = styleObject.boxSizing;
    //             var webkitBoxSizing = styleObject.webkitBoxSizing;
    //             if (boxSizing == 'border-box' || webkitBoxSizing == 'border-box') return true;
    //             return false;
    //         }

    //         /**
    //    * The 'auto' width and height do not have this compatibility issue. Since IE
    //    * in Quirks Mode includes the content, padding and borders within a specified
    //    * width or height, if an element does not have the horizontal padding and
    //    * borders, in other words, the horizontal content box and border box are
    //    * overlaps, and the same on vertical.
    //    */
    //         this.hasPaddingOrBorderWithNonAutoWidthAndHeight = function(computedStyle, specifiedWidth, specifiedHeight) {
    //             if (!specifiedWidth || !specifiedHeight || chrome_comp.isAutoOrNull(specifiedWidth) || chrome_comp.isAutoOrNull(specifiedHeight)) return false;
    //             var hasHorizontalProblem = this.hasHorizontalPadding(computedStyle) || this.hasHorizontalBorder(computedStyle);
    //             var hasVerticalProblem = this.hasVerticalPadding(computedStyle) || this.hasVerticalBorder(computedStyle);
    //             if (hasHorizontalProblem || hasVerticalProblem) return true;
    //             // TODO: Do consider the container stretched by its children when IE is
    //             // Quirks Mode.
    //             return false;
    //         }

    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         var tagName = node.tagName;

    //         // Only check when IE is Quirks Mode.
    //         if (!this.isIEInQuirksMode) return;

    //         var specifiedWidth = chrome_comp.getSpecifiedStyleValue(node, 'width');
    //         var specifiedHeight = chrome_comp.getSpecifiedStyleValue(node, 'height');
    //         var computedStyle = chrome_comp.getComputedStyle(node);

    //         // The 'width' and 'height' of images apply on the content box in all
    //         // browsers. In following cases, there are no differences.
    //         if (tagName == 'IMG') return;

    //         // Only check the block or replaced element.
    //         if (!this.isBlockOrReplacedElement(computedStyle, node)) return;
    //         if (!this.hasPaddingOrBorderWithNonAutoWidthAndHeight(computedStyle, specifiedWidth, specifiedHeight)) return;

    //         var details = '{ width: ' + specifiedWidth + ';\n    border-left-width: ' + computedStyle.borderLeftWidth + ';\n    padding-left: ' + computedStyle.paddingLeft + ';\n    padding-right: ' + computedStyle.paddingRight + ';\n    border-right-width: ' + computedStyle.borderRightWidth + ';\n' + 'height: ' + specifiedHeight + ';\n    border-top-width: ' + computedStyle.borderTopWidth + ';\n    padding-top: ' + computedStyle.paddingTop + ';\n    padding-bottom: ' + computedStyle.paddingBottom + ';\n    border-bottom-width: ' + computedStyle.borderBottomWidth + '; }';

    //         // Check If the iframe has padding because the 'width' and 'height' of the
    //         // IFRAME elements apply on padding box when IE is Quirks Mode.
    //         if (tagName == 'IFRAME') {
    //             if (this.hasHorizontalPadding(computedStyle) || this.hasVerticalPadding(computedStyle)) this.addProblem('RD8001', {
    //                 nodes: [node],
    //                 details: details
    //             });
    //             return;
    //         }

    //         if (this.isBoxSizingOnBorderBox(computedStyle)) return;

    //         // Here the node's 'box-sizing' in WebKit is content box.
    //         var layoutBoxes = chrome_comp.getLayoutBoxes(node);
    //         var differeceInHorizontal = (layoutBoxes.borderBox.right - layoutBoxes.borderBox.left) - (layoutBoxes.contentBox.right - layoutBoxes.contentBox.left);
    //         var differeceInVertical = (layoutBoxes.borderBox.bottom - layoutBoxes.borderBox.top) - (layoutBoxes.contentBox.bottom - layoutBoxes.contentBox.top);
    //         var difference = Math.max(differeceInHorizontal, differeceInVertical);
    //         if (!chrome_comp.isReplacedElement(node)) {
    //             this.reportProblem(difference, node, details);
    //         } else {
    //             if (tagName == 'OBJECT' || tagName == 'EMBED') {
    //                 // The OBJECT and EMBED are quite strange, the 'width' and 'height' apply
    //                 // to border-box subtracting the scrollbar's size. So If there are OBJECT
    //                 // and EMBED set 'width' or 'height' and borders or padding, we may report
    //                 // this issue.
    //                 this.reportProblem(difference, node, details);
    //             } else {
    //                 // For other replaced elements, we may report the issue when Chrome is
    //                 // Standards Mode and '-webkit-box-sizing:content-box', because the
    //                 // 'width' and 'height' apply to border-box for these elements in IE's
    //                 // Quirks Mode.
    //                 if (this.doctypeInWebKit == 'S') {
    //                     this.reportProblem(difference, node, details);
    //                 }
    //             }
    //         }
    //     }); // declareDetector
    // });
    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check flash OBJECT and it's child EMBED element
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=159
     *
     * If you introduce Flash objects by using OBJECT element's classid attribute
     * only, or using nested OBJECT and EMBED elements and their parameters are
     * discrepant, the Flash maybe not be introduced in some browsers.
     */

    // addScriptToInject(function() {

    //     var FLASH_TYPES = {
    //         'application/x-shockwave-flash': true,
    //         'application/x-oleobject': true
    //     };

    //     var FLASH_CLSID = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';

    //     chrome_comp.CompDetect.declareDetector(

    //     'flash_object_embed',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {

    //         /**
    //    * Get all attributes.
    //    * All keys are converted to lower case.
    //    * @return {Object.<string, string>}
    //    */
    //         this.getAllAttributes = function(element) {
    //             var attributes = {};
    //             for (var i = 0,
    //             c = element.attributes.length; i < c; ++i) {
    //                 var attr = element.attributes[i];
    //                 attributes[attr.name.toLowerCase()] = attr.value;
    //             }
    //             return attributes;
    //         };

    //         /**
    //    * Get attributes defined by PARAM child nodes.
    //    * All keys are converted to lower case.
    //    * @param {Element} element
    //    * @param {Object.<string, string>} attributes Optional object to hold the
    //    *  result
    //    * @return {Object.<string, string>}
    //    */
    //         this.getAttributesDefinedByParam = function(element, attributes) {
    //             var children = element.children;
    //             if (!attributes) attributes = {};
    //             for (var i = 0,
    //             c = children.length; i < c; ++i) {
    //                 var child = children[i];
    //                 if (child.tagName == 'PARAM') {
    //                     var name = child.getAttribute('name') || '';
    //                     name = name.toLowerCase();
    //                     if (name) attributes[name] = child.getAttribute('value') || '';
    //                 }
    //             }
    //             return attributes;
    //         };

    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;
    //         if (node.tagName != 'OBJECT') return;

    //         // Ignore non-flash OBJECT
    //         var classid = node.getAttribute('classid') || '';
    //         if (classid && classid.toLowerCase() != FLASH_CLSID) return;
    //         var type = node.getAttribute('type') || '';
    //         if (type && !(type.toLowerCase() in FLASH_TYPES)) return;

    //         var embedElements = node.getElementsByTagName('embed');
    //         if (embedElements.length == 0) {
    //             return;
    //         } else if (embedElements.length > 1) {
    //             embedElements = Array.prototype.slice.call(embedElements);
    //             var oldLength = embedElements.length;
    //             embedElements.unshift(node);
    //             this.addProblem('HO8001', {
    //                 nodes: embedElements,
    //                 // TODO: localize this
    //                 details: 'There are ' + oldLength + ' EMBED elements in OBJECT element.',
    //                 severityLevel: 9
    //             });
    //             return;
    //         }

    //         var embed = embedElements[0];
    //         var bError = false;
    //         var details = [];

    //         var embedType = embed.getAttribute('type') || '';
    //         if (! (embedType in FLASH_TYPES)) {
    //             bError = true;
    //             details.push('EMBED type="' + embedType + '"');
    //         }

    //         var objectAttributes = this.getAllAttributes(node);
    //         this.getAttributesDefinedByParam(node, objectAttributes);
    //         var objectSrc = objectAttributes['movie'];
    //         // Get object's source from movie/data/src attribute.
    //         if (!objectSrc) objectSrc = objectAttributes['data'];
    //         if (!objectSrc) objectSrc = objectAttributes['src']

    //         var embedSrc = embed.getAttribute('src') || '';
    //         // IE8 and other browsers support OBJECT's data attribute.
    //         // IE6/7 support PARAM element named 'movie'.
    //         if (objectSrc != embedSrc) {
    //             bError = true;
    //             details.push('OBJECT movie="' + objectSrc + '", EMBED src="' + embedSrc + '"');
    //         }

    //         var objectWidth = objectAttributes['width'] || '';
    //         var embedWidth = embed.getAttribute('width') || '';
    //         var objectHeight = objectAttributes['height'] || '';
    //         var embedHeight = embed.getAttribute('height') || '';
    //         if (objectWidth != embedWidth || objectHeight != embedHeight) {
    //             bError = true;
    //             details.push('OBJECT ' + objectWidth + ' * ' + objectHeight + ', EMBED ' + embedWidth + ' * ' + embedHeight);
    //         }

    //         var objectId = objectAttributes['id'] || '';
    //         var embedName = embed.getAttribute('name') || '';
    //         if (objectId && embedName && objectId != embedName) {
    //             details.push('OBJECT id="' + objectId + '", EMBED name="' + embedName + '"');
    //         }

    //         // Refer to:
    //         // http://kb2.adobe.com/cps/127/tn_12701.html
    //         // http://kb2.adobe.com/cps/403/kb403183.html
    //         var OTHER_ATTRIBUTES = {
    //             align: true,
    //             allowscriptaccess: true,
    //             base: true,
    //             bgcolor: true,
    //             flashvars: true,
    //             loop: true,
    //             menu: true,
    //             play: true,
    //             quality: true,
    //             salign: true,
    //             scale: true,
    //             wmode: true
    //         };

    //         // Flash attribute default values table.
    //         var DEFAULT_VALUES = {
    //             // Allowscriptaccess default value is 'sameDomain' in Flash Player
    //             // versions 9.0.115.0
    //             allowscriptaccess: 'sameDomain',
    //             loop: 'true',
    //             play: 'true',
    //             wmode: 'window'
    //         }

    //         for (var name in OTHER_ATTRIBUTES) {
    //             var objectValue = objectAttributes[name] || '';
    //             var embedValue = embed.getAttribute(name) || '';

    //             var defaultValue = DEFAULT_VALUES[name];
    //             if (embedValue == '' && defaultValue) embedValue = defaultValue;
    //             if (objectValue == '' && defaultValue) objectValue = defaultValue;

    //             // -1 == false, 1 == true
    //             if (embedValue == '-1') embedValue = 'false';
    //             if (embedValue == '1') embedValue = 'true';
    //             if (objectValue == '-1') objectValue = 'false';
    //             if (objectValue == '1') objectValue = 'true';

    //             if (objectValue.toLowerCase() != embedValue.toLowerCase()) {
    //                 details.push('OBJECT ' + name + '="' + objectValue + '", EMBED ' + name + '="' + embedValue + '"');
    //             }
    //         }

    //         if (details.length > 0) {
    //             var severityLevel = bError ? 9 : 1;
    //             this.addProblem('HO8001', {
    //                 nodes: [node, embed],
    //                 details: details.join('\n'),
    //                 severityLevel: severityLevel
    //             });
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check non-replaced inline element's height and width
     * settings only take effect in quirks mode in IE problems.
     * 
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=91
     *
     * Check document mode, when in quirks mode and found a inline non-replaced
     * element sets width or height, report problem.
     */

    // addScriptToInject(function() {

    //     if (chrome_comp.documentMode.IE != 'Q') return;

    //     chrome_comp.CompDetect.declareDetector(

    //     'inline_no_relpace_width_height',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         // Filter out some special tags, such as OPTION in:
    //         // http://amuse.nen.com.cn/73749755317977088/20100906/2661446.shtml
    //         if (node.tagName == 'OPTION') return;
    //         // And v:roundrect in:
    //         // http://www.zhrtvu.net/
    //         if ( - 1 != node.tagName.indexOf(':')) return;

    //         var style = chrome_comp.getComputedStyle(node);
    //         if (style.display == 'inline' && !chrome_comp.isReplacedElement(node)) {
    //             var specifiedWidth = chrome_comp.getSpecifiedStyleValue(node, 'width');
    //             var specifiedHeight = chrome_comp.getSpecifiedStyleValue(node, 'height');
    //             if (!chrome_comp.isAutoOrNull(specifiedWidth) || !chrome_comp.isAutoOrNull(specifiedHeight)) {
    //                 var severityLevel = 1;
    //                 // If the inline non-replace element's width/height is specified, and it
    //                 // has background image but no content, the layout will be very different
    //                 // in IE and Chrome. Increase the severity level for this case.
    //                 if (style.backgroundImage != 'none' && (!node.hasChildNodes() || node.innerText.trim() == "")) severityLevel = 9;

    //                 specifiedWidth = specifiedWidth || 'auto';
    //                 specifiedHeight = specifiedHeight || 'auto';
    //                 this.addProblem('RD1014', {
    //                     nodes: [node],
    //                     details: node.tagName + ' ' + specifiedWidth + ' * ' + specifiedHeight,
    //                     severityLevel: severityLevel
    //                 });
    //             }
    //         }
    //     }

    //     ); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview: Check problem of IE6 IE7 IE8(Q) will ignore LI DD DT element's
     * end tag.
     * @bug: https://code.google.com/p/compatibility-detector/issues/detail?id=8
     *
     * Find nodes whose name is one of LI DT DD, then check its next sibling node,
     * if there is a text node, or the node has a invalid tag name, report problem.
     * The DOM tree will be different between IE6 IE7 IE8(Q) and other browsers.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'invalid_list_item',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {
    //         this.VALID_LIST_NEXT_TAGS = {
    //             LI: ['LI'],
    //             DT: ['DT', 'DD'],
    //             DD: ['DT', 'DD']
    //         };
    //     },
    //     // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         // Find list element.
    //         var tagName = node.tagName;
    //         if (!this.VALID_LIST_NEXT_TAGS.hasOwnProperty(tagName)) return;

    //         var validNextTags = this.VALID_LIST_NEXT_TAGS[tagName];
    //         var whiteSpaceIsPre = chrome_comp.getComputedStyle(node.parentElement).whiteSpace == 'pre';
    //         var details = null;

    //         // Check the found list element's next visible sibling node.
    //         for (var sibling = node.nextSibling; sibling; sibling = sibling.nextSibling) {
    //             switch (sibling.nodeType) {
    //             case Node.TEXT_NODE:
    //                 // If the text node is not blank, or the text node's style 'white-space'
    //                 // is 'pre', report problem.
    //                 var text = sibling.nodeValue;
    //                 if ((text && whiteSpaceIsPre) || chrome_comp.trim(text)) {
    //                     details = tagName + ' + TEXT_NODE';
    //                 }
    //                 break;
    //             case Node.ELEMENT_NODE:
    //                 // Met a valid list element, stop checking.
    //                 var siblingTagName = sibling.tagName;
    //                 if (validNextTags.indexOf(siblingTagName) != -1) return;
    //                 // Met a visible element.
    //                 if (chrome_comp.getComputedStyle(sibling).display != 'none') {
    //                     details = tagName + ' + ' + siblingTagName;
    //                 }
    //                 break;
    //             }
    //             // Problem detected.
    //             if (details) {
    //                 this.addProblem('HY1005', {
    //                     nodes: [sibling],
    //                     details: details
    //                 });
    //                 return;
    //             }
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if the default values of 'display' property on table like
     * elements are changed.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=72
     *
     * Some values including the string "table" of 'display' property are different
     * with the others, they cause an element to behave like a table element. In
     * HTML 4, the semantics of the various table elements (TABLE, CAPTION, THEAD,
     * TBODY, TFOOT, COL, COLGROUP, TH, and TD) are well-defined, and the CSS
     * 'display' property of the said elements may have been defined default value
     * by user agent. The CSS2.1 specification says that user agents may ignore
     * these 'display' property values for HTML table elements, since HTML tables
     * may be rendered using other algorithms intended for backwards compatible
     * rendering. But some browsers will not ignore these 'display' value for table
     * elements, and the table elements' behavior may be changed after that.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'modifying_display_property_on_table_elements',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         // Determine the severity level when reporting the issue.
    //         this.THRESHOLD = 5;
    //         // Get the document mode in Chrome, we will use it later.
    //         this.documentModeInWebKit = chrome_comp.documentMode.WebKit;
    //         // This list contains all table like elements and its values which cannot
    //         // cause differences in all browsers.
    //         this.TABLE_ELEMENT_MAP = {
    //             TABLE: {
    //                 table: true,
    //                 'inline-table': true
    //             },
    //             TR: {
    //                 'table-row': true
    //             },
    //             TD: {
    //                 'table-cell': true
    //             },
    //             TH: {
    //                 'table-cell': true
    //             },
    //             TBODY: {
    //                 'table-row-group': true
    //             },
    //             THEAD: {
    //                 'table-header-group': true
    //             },
    //             TFOOT: {
    //                 'table-footer-group': true
    //             }
    //         };
    //         /**
    //    * Determine if 2 arrays (one or two dimensional array) are the same perfectly
    //    * (including the structure and the content) and get the max difference
    //    * between the arrays.
    //    * @param {Array} array1 the first array.
    //    * @param {Array} array2 the second array.
    //    * @return {number} the max difference.
    //    */
    //         this.getDifferenceBetweenArrays = function(array1, array2) {
    //             var maxDifference = 0;
    //             var difference = 0;
    //             for (var i = 0,
    //             j = array1.length; i < j; ++i) {
    //                 // Use this way to determine if the object is a pure array.
    //                 if ((array1[i] instanceof Array) && (array2[i] instanceof Array)) {
    //                     // The arrays are two dimensional array.
    //                     for (var m = 0,
    //                     n = array1[i].length; m < n; ++m) {
    //                         if (array1[i][m] != array2[i][m]) {
    //                             difference = Math.abs(array1[i][m] - array2[i][m]);
    //                             maxDifference = Math.max(maxDifference, difference);
    //                         }
    //                     }
    //                 } else if (array1[i] != array2[i]) {
    //                     difference = Math.abs(array1[i] - array2[i]);
    //                     maxDifference = Math.max(maxDifference, difference);
    //                 }
    //             }
    //             return maxDifference;
    //         }
    //         /**
    //    * Determine if the problematic display property on the table element affects
    //    * the layout and get the severity level.
    //    * @param {Element} node the DOM node to test.
    //    * @return {number} the severity level.
    //    */
    //         this.getSeverityLevelIfAffectingLayout = function(node) {
    //             var severityLevel = -1;
    //             var tagName = node.tagName;
    //             // Webkit has bug. A table contains more than one cell, if we change the
    //             // display property of the cell, the table's layout may be rendered wrong.
    //             // So we ingore this situation.
    //             // Testcase is modifying_display_property_on_table_elements_webkit_bug.html
    //             if (tagName == 'TD' || tagName == 'TH') {
    //                 var table = node.parentElement.offsetParent;
    //                 if (!table || table.tagName != 'TABLE') return severityLevel;
    //                 if (table.rows.length > 1) return severityLevel;
    //                 if (table.rows.length > 0 && table.rows[0].cells.length > 1) return severityLevel;
    //             }
    //             // Cache the old offsetWidth and offsetHeight of the node.
    //             var oldOffsetWidth = node.offsetWidth;
    //             var oldOffsetHeight = node.offsetHeight;
    //             // For the TR and TABLE elements, we should record their cells' offsetWidth
    //             // into the array first.
    //             var oldCellsWidthArray = [];
    //             var oldCellsHeightArray = [];
    //             if (tagName == 'TR') {
    //                 for (var i = 0,
    //                 len = node.cells.length; i < len; ++i) {
    //                     oldCellsWidthArray.push(node.cells[i].offsetWidth);
    //                     oldCellsHeightArray.push(node.cells[i].offsetHeight);
    //                 }
    //             }
    //             if (tagName == 'TABLE' || tagName == 'TBODY' || tagName == 'TFOOT' || tagName == 'THEAD') {
    //                 for (var i = 0,
    //                 len = node.rows.length; i < len; ++i) {
    //                     var cellsWidth = [];
    //                     var cellsHeight = [];
    //                     for (var j = 0,
    //                     length = node.rows[i].cells.length; j < length; ++j) {
    //                         cellsWidth.push(node.rows[i].cells[j].offsetWidth);
    //                         cellsHeight.push(node.rows[i].cells[j].offsetHeight);
    //                     }
    //                     oldCellsWidthArray.push(cellsWidth);
    //                     oldCellsHeightArray.push(cellsHeight);
    //                 }
    //             }
    //             // Back up the inline style and simulate display:table.
    //             var oldInlineDisplayValue = node.style.display;
    //             var displayValue = '';
    //             switch (tagName) {
    //             case 'TD':
    //             case 'TH':
    //                 displayValue = 'table-cell';
    //                 break;
    //             case 'TR':
    //                 displayValue = 'table-row';
    //                 break;
    //             case 'TABLE':
    //                 displayValue = (chrome_comp.getComputedStyle(node).display.indexOf('inline') >= 0) ? 'inline-table': 'table';
    //             }
    //             node.style.setProperty('display', displayValue, true);
    //             // Get the new information.
    //             var newOffsetWidth = node.offsetWidth;
    //             var newOffsetHeight = node.offsetHeight;
    //             // After modifying the style, we should record the cells' offsetWidth and
    //             // offsetHeight again.
    //             var newCellsWidthArray = [];
    //             var newCellsHeightArray = [];
    //             if (tagName == 'TR') {
    //                 for (var i = 0,
    //                 len = node.cells.length; i < len; ++i) {
    //                     newCellsWidthArray.push(node.cells[i].offsetWidth);
    //                     newCellsHeightArray.push(node.cells[i].offsetHeight);
    //                 }
    //             }
    //             if (tagName == 'TABLE') {
    //                 for (var i = 0,
    //                 len = node.rows.length; i < len; ++i) {
    //                     var cellsWidth = [];
    //                     var cellsHeight = [];
    //                     for (var j = 0,
    //                     length = node.rows[i].cells.length; j < length; ++j) {
    //                         cellsWidth.push(node.rows[i].cells[j].offsetWidth);
    //                         cellsHeight.push(node.rows[i].cells[j].offsetHeight);
    //                     }
    //                     newCellsWidthArray.push(cellsWidth);
    //                     newCellsHeightArray.push(cellsHeight);
    //                 }
    //             }
    //             // Restore the inline style.
    //             node.style.display = null;
    //             node.style.display = (oldInlineDisplayValue) ? oldInlineDisplayValue: null;
    //             // Get the differences about the table.
    //             var offsetWidthDifference = Math.abs(oldOffsetWidth - newOffsetWidth);
    //             var offsetHeightDifference = Math.abs(oldOffsetHeight - newOffsetHeight);
    //             var maxWidthDifferenceInArrays = this.getDifferenceBetweenArrays(oldCellsWidthArray, newCellsWidthArray);
    //             var maxHeightDifferenceInArrays = this.getDifferenceBetweenArrays(oldCellsHeightArray, newCellsHeightArray);
    //             // If there is difference, we consider that the layout is affected. And if
    //             // the difference is more than the THRESHOLD, it should be error level,
    //             // otherwise it should be warning level. And -1 stands no difference.
    //             if (offsetWidthDifference >= this.THRESHOLD || offsetHeightDifference >= this.THRESHOLD || maxWidthDifferenceInArrays >= this.THRESHOLD || maxHeightDifferenceInArrays >= this.THRESHOLD) {
    //                 severityLevel = 9;
    //             } else if (offsetWidthDifference > 0 || offsetHeightDifference > 0 || maxWidthDifferenceInArrays > 0 || maxHeightDifferenceInArrays > 0) {
    //                 severityLevel = 1;
    //             }
    //             return severityLevel;
    //         }
    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType) return;
    //         var tagName = node.tagName;
    //         // Only check the visible table elements.
    //         if (! (tagName in this.TABLE_ELEMENT_MAP)) return;
    //         // The 'display' property values for the TABLE, TD and TH elements cannot be
    //         // modified when Chrome is Quirks Mode.
    //         if (this.documentModeInWebKit == 'Q' && (tagName == 'TABLE' || tagName == 'TD' || tagName == 'TH')) return;
    //         // Only check the element in normal flow.
    //         if (!chrome_comp.isInNormalFlow(node)) return;
    //         var display = chrome_comp.getComputedStyle(node).display;
    //         // The 'display' property value is not the default value.
    //         if (display in this.TABLE_ELEMENT_MAP[tagName]) return;
    //         // Ignore the invisible element.
    //         if (node.offsetWidth == 0 || node.offsetHeight == 0) return;
    //         var severityLevel = this.getSeverityLevelIfAffectingLayout(node);
    //         if (severityLevel != -1) this.addProblem('RE8015', {
    //             nodes: [node],
    //             severityLevel: severityLevel,
    //             details: tagName + ' { display: ' + display + '; }'
    //         });
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /*
     * @fileoverview Check nowrap attribute on all elements.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=43
     *
     * Check DIV DT DD elmement.
     * If meet all of the following 3 conditions, then report issue 'HE1003':
     * 1. It has nowrap attribute or node.noWrap is true.
     * 2. The computed 'white-space' is not 'nowrap'
     * 3. The child is wider than parent.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'nowrap_attribute',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {
    //         this.isTextNodeOverflowContainer = function(container) {
    //             var containerWidth = container.getBoundingClientRect().width;
    //             var oldWhiteSpace = container.style.whiteSpace;
    //             // Set container style property, in order to accurately calculate
    //             // width vale of the text does not wrap.
    //             container.style.whiteSpace = 'nowrap !important';
    //             var childNodes = container.childNodes;
    //             var result = false;
    //             for (var i = 0,
    //             c = childNodes.length; i < c; ++i) {
    //                 if (childNodes[i].nodeType == Node.TEXT_NODE) {
    //                     var textNodeWidth = chrome_comp.getTextNodeRect(childNodes[i]).width;
    //                     if (textNodeWidth > containerWidth) {
    //                         result = true;
    //                         break;
    //                     }
    //                 }
    //             }
    //             container.style.whiteSpace = null;
    //             container.style.whiteSpace = oldWhiteSpace;
    //             return result;
    //         };
    //     },

    //     function checkNode(node, context) {
    //         // Only detect ELEMENT_NODE and visible Element.
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;
    //         var tagName = node.tagName;

    //         // BODY tag can set nowrap attribute too, it can affect its descendant
    //         // inline elements, but this situation is very rare in practice, so we
    //         // do not detect it.
    //         var CHECK_TAGNAMES = {
    //             DIV: true,
    //             DT: true,
    //             DD: true
    //         };

    //         if (! (tagName in CHECK_TAGNAMES)) return;

    //         var computedStyle = chrome_comp.getComputedStyle(node);

    //         if (computedStyle.whiteSpace == 'nowrap') return;

    //         var hasNoWrapAttribute = node.hasAttribute('nowrap');
    //         var hasNoWrapProperty = node.hasOwnProperty('noWrap');
    //         // As long as the node.noWrap is false and whiteSpace style is not
    //         // nowrap and has nowrap attribute, then IE is no problem.
    //         // TODO: IE has node.noWrap property, Chrome without it.
    //         // If js set node.noWrap = true, will is add custom Property in Chrome.
    //         if (hasNoWrapAttribute && hasNoWrapProperty && !node.noWrap) return;

    //         // HTML has nowrap attribute and node object has not nowrap property.
    //         if (hasNoWrapAttribute && !hasNoWrapProperty) {
    //             if (this.isTextNodeOverflowContainer(node)) this.addProblem('HE1003', {
    //                 nodes: [node],
    //                 details: node.tagName + ' nowrap="' + node.getAttribute('nowrap') + '"'
    //             });
    //         }

    //         // HTML has not nowrap attribute and node has nowrap property and it is true.
    //         if (!hasNoWrapAttribute && hasNoWrapProperty && node.noWrap) {
    //             if (this.isTextNodeOverflowContainer(node)) this.addProblem('HE1003', {
    //                 nodes: [node],
    //                 details: node.tagName + '.noWrap=true'
    //             });
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if a table cell is stretched and its width's specified
     *  value is smaller than the computed value.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=35
     *
     * When we set the width for a table cell, it does not mean that the value will
     * be used. The cell's width may be computed as another value, for reasons such
     * as: the table's width is larger, or the content inside the cell is too wide.
     * When a cell is stretched, and its computed width is bigger than the specified
     * value(which is not auto), the content width in the cell will be limited to
     * the specified value in IE6, IE7 and IE8(Q).
     *
     * 1. Check all table cells whose width is set(not 'auto') and is not a
     *    percentage value.
     * 2. Get the value of 'text-align', because we do not consider the
     *    left-aligned elements.
     * 3. If the cell is stretched by the table and not by its contents, and
     *    contains inflow content, we report this as a problem.
     */

    // addScriptToInject(function() {

    //     // TODO: put these into framework.js
    //     function endsWith(str, suffix) {
    //         // Refer to:
    //         // http://stackoverflow.com/questions/280634/endswith-in-javascript
    //         return str.indexOf(suffix, str.length - suffix.length) != -1;
    //     }

    //     function startsWith(str, prefix) {
    //         return str.lastIndexOf(prefix, 0) == 0;
    //     }

    //     function isCellStretchedByTable(cell) {
    //         // This function may cause performance issue. It will cause table reflow.
    //         var table = cell.offsetParent;
    //         var oldInlineTableWidth = table.style.width;
    //         var oldCellOffsetWidth = cell.offsetWidth;

    //         // Set table's width to 0px, so that the cell will not be stretched.
    //         table.style.width = '0px !important';
    //         var newCellOffsetWidth = cell.offsetWidth;

    //         // Restore table's inline width.
    //         table.style.width = null;
    //         table.style.width = oldInlineTableWidth;

    //         return oldCellOffsetWidth == newCellOffsetWidth;
    //     }

    //     /**
    //  * Whether there is inflow content in the child elements.
    //  * Ignore absolute/fixed positioned elements and float elements.
    //  */
    //     function hasInflowContent(element) {
    //         var childNodes = element.childNodes;
    //         // Check direct child text nodes.
    //         for (var i = 0,
    //         len = childNodes.length; i < len; ++i) {
    //             var childNode = childNodes[i];
    //             if (childNode.nodeType == Node.TEXT_NODE) {
    //                 if (!/^\s+$/g.test(childNode.nodeValue)) return true;
    //             }
    //         }
    //         // Check child element nodes.
    //         for (var i = 0,
    //         len = childNodes.length; i < len; ++i) {
    //             var childNode = childNodes[i];
    //             if (childNode.nodeType == Node.ELEMENT_NODE) {
    //                 var style = chrome_comp.getComputedStyle(childNode);
    //                 if (style.position == 'absolute' || style.position == 'fixed' || style['float'] != 'none' || style.display == 'none') continue;
    //                 // TODO: check for visibility
    //                 var result = hasInflowContent(childNode);
    //                 if (result) return true;
    //             }
    //         }
    //         return false;
    //     }

    //     chrome_comp.CompDetect.declareDetector(

    //     'stretched_cell_align',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         if (node.tagName != 'TD' && node.tagName != 'TH') return;

    //         // Check width attribute first, width style second.
    //         var specifiedWidthStr = node.getAttribute('width');
    //         if (!specifiedWidthStr) specifiedWidthStr = chrome_comp.getSpecifiedStyleValue(node, 'width');
    //         if (specifiedWidthStr && endsWith(specifiedWidthStr, 'px')) {
    //             // Remove the 'px' suffix.
    //             specifiedWidthStr = specifiedWidthStr.slice(0, -2);
    //         }
    //         // TODO: how about style:width: 800pt ? We just ignore it now.
    //         if (!specifiedWidthStr || endsWith(specifiedWidthStr, '%') || isNaN(specifiedWidthStr)) return;

    //         var computedWidth = parseInt(chrome_comp.getComputedStyle(node).width, 10);
    //         var specifiedWidthPixel = parseInt(specifiedWidthStr, 10);
    //         // TODO: use SHRESHOLD here
    //         if ((computedWidth <= specifiedWidthPixel)) return;

    //         var textAlign = chrome_comp.getComputedStyle(node).textAlign;
    //         if (!textAlign || textAlign.indexOf('left') != -1 || textAlign.indexOf('auto') != -1) return;

    //         if (!isCellStretchedByTable(node) && hasInflowContent(node)) {
    //             this.addProblem('RE8014', {
    //                 nodes: [node],
    //                 details: 'specifiedWidth=' + specifiedWidthPixel + ', computedWidth=' + computedWidth
    //             });
    //         }
    //     }

    //     ); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check the differences in performance of the 'text-align'
     * property on block level elements.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=34
     *
     * The 'text-align' property can apply to all kinds of elements including the
     * block level elements in W3C CSS 1 specification which IE6, IE7 and IE8
     * quirks mode follow, but in CSS2.1 specification, it changes to applying to
     * only the inline level elements or contents. So, this property can apply to
     * the block level elements in IE6/7/8.
     *
     * In CSS 1 specification, 'text-align' property describes how text is aligned
     * within the element, and all block-level elements in this element will be
     * affected.
     * IE6 IE7 IE8(Q) implemented in accordance with this specification.
     * In CSS2.1 specification, 'text-align' property describes how inline-level
     * content of a block container is aligned, so block-level elements in this
     * element will be affected.
     * IE8(S) Chrome implemented in accordance with this specification.
     *
     * This detector will check all nodes as the following:
     * 1. Ignore all text nodes, invisible elements and the elements having no
     *    parent.
     * 2. Ignore sub-elmement is have floats layout.
     * 3. Check the elements set the 'text-align' property, and it is not empty
     *    node, its offsetHeight is bigger than 0.
     * 4. Check for child elements whose width is less than the parent.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'text_align',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {
    //         this.THRESHOLD_OF_CENTER = 5;
    //         this.THRESHOLD_OF_LEFT = this.THRESHOLD_OF_CENTER;
    //         this.THRESHOLD_OF_RIGHT = this.THRESHOLD_OF_CENTER;
    //         this.THRESHOLD_OF_HEIGHT = 3;

    //         this.isVisibleElement = function(element) {
    //             if (element.tagName == 'BR') return false;
    //             if (chrome_comp.mayAffectNormalFlow(element) != 1) return false;
    //             if (!chrome_comp.hasBorder(element) && !chrome_comp.hasBackground(element) && element.innerText.trim() == '' && element.offsetHeight <= this.THRESHOLD_OF_HEIGHT) return false;
    //             return true;
    //         };

    //         /**
    //    * @param {Element} node
    //    * @param {function(Element, Element, number)} isAligned
    //    * @param {number} threshold
    //    */
    //         this.checkChild = function(node, isAligned, threshold) {
    //             var child = node.firstElementChild;
    //             while (child) {
    //                 if (!this.isVisibleElement(child) || chrome_comp.isCenterAlignedByMarginAndWidth(child)) {
    //                     child = child.nextElementSibling;
    //                     continue;
    //                 }
    //                 if (chrome_comp.isMarginLeftAuto(child) || chrome_comp.isMarginRightAuto(child)) {
    //                     child = child.nextElementSibling;
    //                     continue;
    //                 }
    //                 if (isAligned(node, child, threshold)) {
    //                     child = child.nextElementSibling;
    //                     continue;
    //                 }
    //                 var containerContentWidth = chrome_comp.util.width(chrome_comp.getLayoutBoxes(node).contentBox);
    //                 var childMarginBoxWidth = chrome_comp.util.width(chrome_comp.getLayoutBoxes(child).marginBox);
    //                 this.addProblem('RT8003', {
    //                     nodes: [node, child],
    //                     // TODO: localize
    //                     details: 'container element content box width: ' + containerContentWidth + 'px' + ', child element maring box width: ' + childMarginBoxWidth + 'px'
    //                 });
    //                 child = child.nextElementSibling;
    //             }
    //         };

    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         var style = chrome_comp.getComputedStyle(node);
    //         var display = style.display;
    //         var textAlign = style.textAlign;
    //         var direction = style.direction;
    //         var CHECK_DISPLAY_LIST = {
    //             block: true,
    //             'inline-block': true,
    //             'table-cell': true,
    //             'list-item': true
    //         };

    //         if (! (display in CHECK_DISPLAY_LIST)) return;

    //         if (chrome_comp.hasVisibleFloatingChild(node)) return;

    //         if (textAlign == 'center') {
    //             this.checkChild(node, chrome_comp.isVisuallyCenterAligned, this.THRESHOLD_OF_CENTER);
    //             return;
    //         }

    //         if (direction == 'ltr' && textAlign == 'right') {
    //             this.checkChild(node, chrome_comp.isVisuallyRightAligned, this.THRESHOLD_OF_RIGHT);
    //             return;
    //         }

    //         if (direction == 'rtl' && textAlign == 'left') {
    //             this.checkChild(node, chrome_comp.isVisuallyLeftAligned, this.THRESHOLD_OF_LEFT);
    //             return;
    //         }

    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if the argument of document.createElement is HTML
     * markup.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=145
     * 
     * Hook the existing createElement method of the document object, and get its
     * original argument string, check whether the string starts with the less than
     * character (<).
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'createelement_argument',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         var This = this;
    //         // The map for recording the errors, we make the argument of the method as the
    //         // key.
    //         this.errorArgumentMap = {};
    //         this.lastErrorArgument = '';
    //         // The last function which calls the createElement method. We initialize it
    //         // with an empty function to avoid "caller == This.lastCaller" when the method
    //         // is running in the global context at the first hook.
    //         this.lastCaller = function() {};

    //         this.createElementHandler = function(result, originalArguments, callStack) {
    //             // caller 1 is ExistingMethodHookObject.newMethodHandler_.
    //             // caller 2 is the original caller.
    //             var caller = arguments.callee.caller.caller;
    //             var arg0 = (originalArguments[0] + '').trim();
    //             // Mootools tries to use document.createElement('<input name=x>') to tell if
    //             // the current browser can accept HTML String in the createElement method.
    //             // So we must ignore the pages using Mootools. Refer to:
    //             // http://mootools.net/download/get/mootools-core-1.3.1-full-compat.js
    //             // Another version uses '<input name="x">'.
    //             if (!arg0 || arg0 == '<input name=x>' || arg0 == '<input name="x">') {
    //                 This.lastErrorArgument = '';
    //                 This.lastCaller = function() {};
    //                 return;
    //             }

    //             // Only IE supports using a HTML markup string as argument. We just check
    //             // the first character after trim.
    //             if (arg0[0] == '<') {
    //                 // Record the error information for postAnalyze.
    //                 This.errorArgumentMap[arg0] = {
    //                     stack: chrome_comp.dumpStack(),
    //                     caller: caller
    //                 };
    //                 // Record these values for the next hook.
    //                 This.lastErrorArgument = arg0;
    //                 This.lastCaller = caller;
    //             } else {
    //                 // Some pages use a buggy way such as
    //                 // try {
    //                 //   var a = document.createElement('<input name="aa" />'); // For IE
    //                 // } catch(e) {
    //                 //   var a = document.createElement('input');  // For non-IE
    //                 //   a.setAttribute('name', 'aa');
    //                 // }
    //                 // to create new element. In this case, there is no compatibility issue in
    //                 // all browsers.
    //                 // If the caller this time is equal to the last one, it means the
    //                 // continual called createElement methods are in the same function or
    //                 // context. We can not report the issue in this situation, so delete this
    //                 // error in the errorArgumentMap object.
    //                 if (caller == This.lastCaller) {
    //                     delete This.errorArgumentMap[This.lastErrorArgument];
    //                 }
    //                 This.lastErrorArgument = '';
    //                 This.lastCaller = function() {};
    //             }
    //         };
    //     },

    //     function setUp() {
    //         chrome_comp.CompDetect.registerExistingMethodHook(document, 'createElement', this.createElementHandler);
    //     },

    //     function cleanUp() {
    //         chrome_comp.CompDetect.unregisterExistingMethodHook(document, 'createElement', this.createElementHandler);
    //     },

    //     function postAnalyze() {
    //         // If the script in a page throws this createElement method error, the rest of
    //         // scripts will not be executed. So in general the errorArgumentMap object
    //         // just has one key.
    //         for (var arg in this.errorArgumentMap) {
    //             // Some pages may modify Object.prototype and add new functions. We should
    //             // ignore them when iterating this.errorArgumentMap.
    //             if (typeof this.errorArgumentMap[arg] != 'object' || !this.errorArgumentMap[arg].stack) continue;
    //             var stack = this.errorArgumentMap[arg].stack;
    //             var caller = this.errorArgumentMap[arg].caller;
    //             if (caller) caller = chrome_comp.ellipsize(caller.toString(), 200);
    //             else caller = 'global context';
    //             this.addProblem('SD9010', {
    //                 stack: stack,
    //                 details: 'document.createElement("' + arg + '")' + '\nError in: ' + caller
    //             });
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview: One detector implementation for checking the HTML disabled
     * attribute for all elements.
     * @bug: https://code.google.com/p/compatibility-detector/issues/detail?id=20
     * @bug: https://code.google.com/p/compatibility-detector/issues/detail?id=115
     *
     * The disabled attribute can set for a form control. The following elements
     * support the disabled attribute: BUTTON, INPUT, OPTGROUP, OPTION, SELECT, and
     * TEXTAREA. But IE6 and IE7 do not support the disable attribute for the
     * OPTGROUP and OPTION elements. And IE6, IE7 and IE8 support the disabled
     * attribute for some non-form elements such as anchors, and the attribute
     * can be inherited.
     * So the detector report the issues according to the said conditions.
     *
     * The detector checks all nodes, and do the following treatment:
     * 1. Filter all text nodes, and the node is not visible.
     * 2. Detect the presence of 'disabled' attribute of the tag.
     * 3. If the tagName is OPTION or OPTGROUP, that other browsers IE6 and IE7
     *    and the display is different.
     * 4. If the tagName is not BUTTON INPUT SELECT TEXTAREA and IMG,
     *    and the node in sub-tree have the text content, to that other browsers
     *    IE6 IE7 have the display different.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'disabled_attribute',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         if (node.hasAttribute('disabled')) {
    //             var tagName = node.tagName;
    //             var isOpt = tagName == 'OPTGROUP' || tagName == 'OPTION';
    //             if (isOpt) {
    //                 this.addProblem('HF3013', [node]);
    //             } else if (tagName != 'BUTTON' && tagName != 'INPUT' && tagName != 'SELECT' && tagName != 'TEXTAREA' &&
    //             // Filter empty element and img element
    //             tagName != 'IMG' && node.innerText.trim().length > 0) {
    //                 this.addProblem('HF3005', [node]);
    //             }
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview: Check the load method of the Document object created by the
     * createDocument method of the DOMImplementation object.
     * @bug: https://code.google.com/p/compatibility-detector/issues/detail?id=123
     * 
     * Chrome supports to use document.implementation.createDocument to create a
     * DOMImplementation object associated with the current document, its returned
     * value is a Document object, but this object does not have the load method
     * which is described in the W3C deprecated Working Draft (refer to
     * http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html
     * #LS-DocumentLS).
     * First Hook the existing createDocument method of the
     * DOMImplementation.prototype object, second, hook the load property of the
     * Document.prototype in its handler, and report the issue in the second
     * handler.
     */

    // addScriptToInject(function() {

    //     // The flag for the load method hook.
    //     var documentHooked = false;

    //     chrome_comp.CompDetect.declareDetector(

    //     'documentls',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         var This = this;
    //         this.createDocumentHandler_ = function(result, originalArguments, callStack) {
    //             // To avoid hooking repeatedly.
    //             if (!documentHooked) {
    //                 // Use registerSimplePropertyHook because the load method of the Document
    //                 // object is not a exist method, so we use the property hook which can
    //                 // hook its execution too.
    //                 chrome_comp.CompDetect.registerSimplePropertyHook(Document.prototype, 'load', This.loadHandler_);
    //             }
    //         };
    //         this.loadHandler_ = function(oldValue, newValue, reason) {
    //             documentHooked = true;
    //             This.addProblem('SD9008', {
    //                 nodes: [this],
    //                 needsStack: true
    //             });
    //         };
    //     },

    //     function setUp() {
    //         chrome_comp.CompDetect.registerExistingMethodHook(DOMImplementation.prototype, 'createDocument', this.createDocumentHandler_);
    //     },

    //     function cleanUp() {
    //         chrome_comp.CompDetect.unregisterExistingMethodHook(DOMImplementation.prototype, 'createDocument', this.createDocumentHandler_);
    //         if (documentHooked) {
    //             chrome_comp.CompDetect.unregisterSimplePropertyHook(Document.prototype, 'load', this.loadHandler_);
    //             documentHooked = false;
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Detector for document.getElementById and
     * document.getElementsByName problems.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=1
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=44
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=117
     *
     * In IE6 IE7 IE8(Q), the argument of document.getElementById(elementId) is case
     * insensitive. And for some elements, document.getElementById(elementName) can
     * work too, for these element, elementId and elementName are equal, and,
     * elementName is case-insensitive too.
     *
     * In IE6 IE7 IE8, for some elements, the argument of
     * document.getElementsByName(elementName) is case-insensitive.
     *
     * For the first problem, hook document.getElementById, so that we can get the
     * argument, it may means id or name.
     * Then, simulate IE's document.getElementById method, put the argument in it,
     * compare return values of the original one and the simulate one, if they are
     * dismatch, report problem.
     *
     * For the second problem, hook document.getElementsByName, so that we can get
     * the argument, it is a name value.
     * Then, simulate IE's document.getElementsByName method, put the argument in
     * it, check its return values, if there are any element which 'name'
     * attribute's value is not equals the argument by case sensitive, report
     * problem.
     *
     * Note: document.getElementsByName can only get elements whose tag name in
     * MIX_UP_TAGS and its name is matched (case-insensitive), but Chrome can
     * get all elements whose name is matched. We only check the case-insensitive
     * problem here. Detection of this problem may be added in the future.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'getelementbyid_and_getelementsbyname',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         var This = this;
    //         var MIX_UP_TAGS = ['a', 'applet', 'button', 'embed', 'form', 'iframe', 'img', 'input', 'map', 'meta', 'object', 'select', 'textarea'];

    //         /**
    //    * Get an xpath expression, match elements whose tag name is 'tagName', and
    //    * its attribute 'attribute' equals 'value' in case-insensitive.
    //    * @return An xpath expression, like:
    //    * //*[translate(@id,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    //    * "abcdefghijklmnopqrstuvwxyz")="foo"]
    //    */
    //         function getXpathExpression(tagName, attribute, value) {
    //             return '//' + tagName + '[translate(@' + attribute + ',"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")="' + value.toLowerCase() + '"]';
    //         }

    //         /**
    //    * Get all elements whose id and name is mixed in IE6 IE7 IE8(Q), and only
    //    * these elements can use method document.getElementsByName() in IE.
    //    * @return An xpath expression, like:
    //    * //a[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    //    * "abcdefghijklmnopqrstuvwxyz")="foo"] |
    //    * //applet[translate(@name,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    //    * "abcdefghijklmnopqrstuvwxyz")="foo"] |
    //    * //...
    //    * TODO: Find a better xpath expression.
    //    */
    //         function getXpathExpressionOfMixUpTags(value) {
    //             var xpathExpressions = [];
    //             MIX_UP_TAGS.forEach(function(tagName) {
    //                 xpathExpressions.push(getXpathExpression(tagName, 'name', value));
    //             });
    //             return xpathExpressions.join('|');
    //         }

    //         /**
    //    * Simulate IE's document.getElementById.
    //    */
    //         function getElementByIdInIE(idOrName) {
    //             // Match *[id=value] and MixUpTags[name=value], case-insensitive.
    //             var xpathExpression = getXpathExpression('*', 'id', idOrName) + '|' + getXpathExpressionOfMixUpTags(idOrName);
    //             // Returns a ordered node snapshot, that includes all elements whose id or
    //             // name is case-insensitive equal to argument 'idOrName'.
    //             var elements = document.evaluate(xpathExpression, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    //             // elements.snapshotItem(0) may be null.
    //             return elements.snapshotItem(0);
    //         }

    //         // Hook document.getElementById.
    //         this.getElementById_ = function(result, originalArguments, callStack) {
    //             // Variable result will be undefined in an illegal invocation.
    //             if (originalArguments.length == 0 || typeof result == 'undefined') return;
    //             var idOrName = originalArguments[0];
    //             if (typeof idOrName != 'string') return;
    //             // Ignore calling by JQurey, JQuery will create an element with a name
    //             // 'script' + new Date().getTime(), and try to call document.getElementById
    //             // by using that name.
    //             if (/^script\d+$/.test(idOrName)) return;
    //             // Compare gotten elements.
    //             var elementInIE = getElementByIdInIE(idOrName);
    //             if (result == elementInIE) return;
    //             // Get a wrong element, problem detected.
    //             var issueId;
    //             var details;
    //             if (elementInIE.id.toLowerCase() == idOrName.toLowerCase()) {
    //                 issueId = 'SD9002';
    //                 details = 'argument = ' + idOrName + ', id = ' + elementInIE.id + '.';
    //                 // The elementInIE's id not case-insensitive equal to idOrName, its name
    //                 // must be case-insensitive equal to idOrName.
    //             } else {
    //                 issueId = 'SD9001';
    //                 details = 'argument = ' + idOrName + ', name = ' + elementInIE.name + '.';
    //             }
    //             This.addProblem(issueId, {
    //                 nodes: [elementInIE],
    //                 details: details,
    //                 stack: chrome_comp.dumpStack(),
    //                 severityLevel: 3
    //             });
    //         };

    //         /**
    //    * Simulate IE's document.getElementsByName.
    //    */
    //         function getElementsByNameInIE(name) {
    //             var xpathExpression = getXpathExpressionOfMixUpTags(name);
    //             var elements = document.evaluate(xpathExpression, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    //             var returnElements = [];
    //             for (var i = 0,
    //             length = elements.snapshotLength; i < length; i++) {
    //                 returnElements.push(elements.snapshotItem(i));
    //             }
    //             return returnElements;
    //         }

    //         // Hook document.getElementsByName.
    //         this.getElementsByName_ = function(result, originalArguments, callStack) {
    //             // Variable result will be undefined in an illegal invocation.
    //             if (originalArguments.length == 0 || typeof result == 'undefined') return;
    //             var name = originalArguments[0];
    //             if (typeof name != 'string') return;
    //             // If get one wrong element, report problem.
    //             var elementsInIE = getElementsByNameInIE(name);
    //             // If result is not empty and elementsInIE is empty, it's another problem.
    //             // FF & Chrome can get <div name='foo'></div> by this method, but IE can't.
    //             // Problem SD9012 only detect the name value is case-insensitive.
    //             if (!elementsInIE) return;
    //             for (var i = 0,
    //             length = elementsInIE.length; i < length; i++) {
    //                 var element = elementsInIE[i];
    //                 if (element.name != name) {
    //                     This.addProblem('SD9012', {
    //                         nodes: [element],
    //                         details: 'argument = ' + name + ', name = ' + element.name + '.',
    //                         stack: chrome_comp.dumpStack(),
    //                         severityLevel: 3
    //                     });
    //                 }
    //             }
    //         };
    //     },
    //     //constructor
    //     function setUp() {
    //         chrome_comp.CompDetect.registerExistingMethodHook(document, 'getElementById', this.getElementById_);
    //         chrome_comp.CompDetect.registerExistingMethodHook(document, 'getElementsByName', this.getElementsByName_);
    //     },

    //     function cleanUp() {
    //         chrome_comp.CompDetect.unregisterExistingMethodHook(document, 'getElementById', this.getElementById_);
    //         chrome_comp.CompDetect.unregisterExistingMethodHook(document, 'getElementsByName', this.getElementsByName_);
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check auto-width MARQUEE elements.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=13
     *
     * Check all MARQUEE elements.
     * Get the width of the parent element of the present MARQUEE element.
     * Ignore the MARQUEE element that do not in the table cell, and ignore the
     * table that is not in automatic table layout algorithm.
     * Record the rects of the parent element. Then, set the MARQUEE element
     * be invisible. If the rects of the parent elements are changed,
     * report the issue and restore the style of the MARQUEE element.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'marquee_width',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     function constructor() {
    //         this.canStretchAutoLayoutTable = function(node) {
    //             var computedStyle = chrome_comp.getComputedStyle(node);
    //             while (computedStyle.display != 'table' && computedStyle.display != 'inline-table' && node.tagName != 'BODY') {
    //                 var width = chrome_comp.getSpecifiedStyleValue(node, 'width');
    //                 var htmlAttributeWidth = node.getAttribute('width');
    //                 if (chrome_comp.isAutoOrNull(width) && htmlAttributeWidth) width = htmlAttributeWidth;
    //                 if (computedStyle.display == 'block' && width) return false;
    //                 node = node.parentElement;
    //                 computedStyle = chrome_comp.getComputedStyle(node);
    //             }

    //             // The node ancestor is table or inline talbe,
    //             // if the ancestor tableLayout style is the 'auto',
    //             // can stretch auto Layout, reutrn true.
    //             if (node.tagName != 'BODY') return computedStyle.tableLayout == 'auto';
    //             else return false;
    //         };

    //         this.getAncestorTableElement = function(node) {
    //             node = node.parentNode;
    //             while (node) {
    //                 var computedStyle = chrome_comp.getComputedStyle(node);
    //                 if (computedStyle.display == 'table' || computedStyle.display == 'inline-table') break;
    //                 node = node.parentNode;
    //             }
    //             return node;
    //         };

    //         this.addCustomProblem = function(node, level) {
    //             this.addProblem('BX1030', {
    //                 nodes: [node],
    //                 severityLevel: level,
    //                 details: 'MARQUEE Tag width is: ' + node.offsetWidth + 'px'
    //             });
    //         };
    //     },

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         if (node.tagName != 'MARQUEE') return;

    //         var WARNING_THRESHOLD = 10;
    //         var ERROR_THRESHOLD = Math.max(WARNING_THRESHOLD, Math.floor(window.innerWidth / 10));
    //         var isRelativeWidth = false;
    //         var width = chrome_comp.getSpecifiedStyleValue(node, 'width');
    //         var htmlAttributeWidth = node.getAttribute('width');
    //         if (width == null && htmlAttributeWidth) width = htmlAttributeWidth;
    //         if (chrome_comp.isAutoOrNull(width) || width.indexOf('%') != -1) isRelativeWidth = true;

    //         // If a MARQUEE element's width is "auto" or a percentage length, and its
    //         // ancestor elements in a TABLE element whose width are "auto" or percentage
    //         // length too, and if the TABLE element's "table-layout" is "auto",
    //         // the actual width of these ancestor elements may be stretched by
    //         // the MARQUEE element in IE8(Q) Chrome, but not in IE6 IE7 IE8(Q).
    //         var parentElement = node.parentElement;
    //         if (this.canStretchAutoLayoutTable(parentElement) && isRelativeWidth) {
    //             var ancestor = this.getAncestorTableElement(node);
    //             if (!ancestor) return;
    //             var originalParentWidth = ancestor.offsetWidth;
    //             var oldDisplayStyle = node.style.display;
    //             node.style.display = 'none !important;';
    //             var changeWidth = Math.abs(originalParentWidth - ancestor.offsetWidth);
    //             node.style.display = null;
    //             node.style.display = oldDisplayStyle;
    //             if (changeWidth > ERROR_THRESHOLD) {
    //                 this.addCustomProblem(node, 8);
    //             } else if (changeWidth > WARNING_THRESHOLD) {
    //                 this.addCustomProblem(node, 1);
    //             }
    //         }
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check if the "ThisBinding" of some DOM/BOM method has been
     * modified when invoke this method.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=151
     * 
     * The DOM/BOM methods depend on its 'ThisBinding' in Chrome (and FF / Opera /
     * Safari), but not in IE. If change these method's 'ThisBinding' and invoke
     * them, they will execute good in IE and an error (TypeError: Illegal
     * invocation) will occured in other browsers.
     * For these methods, save the default 'ThisBinding', and check 'ThisBinding'
     * when these methods be called, if they are different, we can assert the
     * 'ThisBinding' of them has been modified, and report problem.
     * About 'ThisBinding' refer to:
     * http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'native_code_this_binding',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         var This = this;
    //         this.objectCallFrom = null;
    //         // For example, document.getElementById('XXX')
    //         // getElementById is a property of document object, its value is an internal
    //         // native method, so we can call it as the function.
    //         // Like this code (in global context):
    //         //   var $ = document.getElementById;
    //         //   var id = $('id');
    //         // $'s 'ThisBinding' is window(global). So when $('id') is called,
    //         // Here the 'ThisBinding' of the DOM method - getElementById is modified.
    //         this.methodHandler = function(result, originalArguments, callStack, methodName, hookedObject) {
    //             var caller = arguments.callee.caller.caller;
    //             if (caller) caller = chrome_comp.ellipsize(caller, 200);
    //             else caller = "global context";
    //             if (this != hookedObject) {
    //                 This.addProblem('SD9005', {
    //                     details: hookedObject.constructor.name + '.' + methodName + ' method "ThisBinding" error in:\n' + caller + '\n[' + hookedObject.constructor.name + '] --> [' + this.constructor.name + ']',
    //                     needStack: true
    //                 });
    //             }
    //         };
    //     },

    //     function setUp() {
    //         // This issue usually occurs on the document object (such as
    //         // document.getElementById()).
    //         this.hookList = {
    //             'document': {
    //                 object: document,
    //                 methods: {
    //                     'getElementById': true,
    //                     'getElementsByTagName': true
    //                 }
    //             }
    //         };
    //         for (var object in this.hookList) for (var method in this.hookList[object].methods) chrome_comp.CompDetect.registerExistingMethodHook(this.hookList[object].object, method, this.methodHandler);
    //     },

    //     function cleanUp() {
    //         for (var object in this.hookList) for (var method in this.hookList[object].methods) chrome_comp.CompDetect.unregisterExistingMethodHook(this.hookList[object].object, method, this.methodHandler);
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview: One detector implementation for checking problems - VBScript,
     * JScript.Encode and VBScript.Encode are only supported by IE.
     *
     * @bug: https://code.google.com/p/compatibility-detector/issues/detail?id=3
     *       https://code.google.com/p/compatibility-detector/issues/detail?id=116
     *
     * VBScript is only supported by IE, if a SCRIPT tag is declared as VBScript,
     * other browsers will not execute that code.
     * The same is true for 'JScript.Encode' and 'VBScript.Encode'.
     *
     * So the code in following tags will only be executed correctly in IE:
     * <script type='text/vbscript'>...</script>
     * <script type='text/vbs'>...</script>
     * <script language='vbscript'>...</script>
     * <script language='vbs'>...</script>
     * <script language='jscript.encode'>...</script>
     * <script language='vbscript.encode'>...</script>
     * (The attribute 'language' is not recommended, but there are still some pages
     * using it now.)
     *
     * A more detailed list:
     *                              IE6/7/8   Chrome 9.0.597.0 dev
     * [type]
     * text/javascript:              OK        OK
     * text/ecmascript:              OK        OK
     * text/livescript:              OK        OK
     * text/javascript1.1:           OK        OK
     * text/javascript1.2:           OK        OK
     * text/javascript1.3:           OK        OK
     * text/jscript:                 OK        OK
     * text/vbscript:                OK
     * text/vbs:                     OK
     * application/javascript:                 OK
     *
     * [Language]
     * javascript:                   OK        OK
     * ecmascript:                   OK        OK
     * livescript:                   OK        OK
     * javascript1.0:                          OK
     * javascript1.1:                OK        OK
     * javascript1.2:                OK        OK
     * javascript1.3:                OK        OK
     * javascript1.4:                          OK
     * javascript1.5:                          OK
     * javascript1.6:                          OK
     * javascript1.7:                          OK
     * jscript:                      OK        OK
     * vbscript:                     OK
     * vbs:                          OK
     *
     * [Language Encode]
     * jscript.encode:               OK
     * vbscript.encode:              OK
     *
     * [Mix]
     * text/javascript language=vbs: OK        OK
     * (We didn't check this situation now.)
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'script_language_type',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null,

    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || node.tagName != 'SCRIPT') return;

    //         var type = node.getAttribute('type');
    //         if (type) type = type.toLowerCase();
    //         var language = node.getAttribute('language');
    //         if (language) language = language.toLowerCase();
    //         if (type == 'text/vbscript' || type == 'text/vbs' || language == 'vbscript' || language == 'vbs') this.addProblem('BT9005', {
    //             nodes: [node],
    //             severityLevel: 3
    //         });
    //         if (language == 'jscript.encode' || language == 'vbscript.encode') this.addProblem('BT9006', {
    //             nodes: [node],
    //             severityLevel: 3
    //         });
    //     }); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check whether the page uses the non-standard scrollTop and
     * scrollLeft properties.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=16
     *
     * http://w3help.org/zh-cn/causes/BX9008
     * The scrollTop and scrollLeft properties are not included in any public
     * standard, and have different behavior in different browsers.
     * In IE and Firefox, document.body.scrollTop/Left work in quirks mode but not
     * in standards mode, while document.documentElement.scrollTop/Left work
     * in standards mode but not quirks mode.
     * In Webkit, only document.body.scrollTop/Left work, both in quirks mode and
     * standars mode. And document.documentElement.scrollTop/Left always return 0,
     * according to https://bugs.webkit.org/show_bug.cgi?id=5991
     *
     * To detect these, we define a new scrollTop/Left getter/setter for both
     * document.documentElement and document.body. If the page only uses
     * scrollTop/Left on document.documentElement but not on document.body,
     * we will report it.
     */

    // addScriptToInject(function() {

    //     // Only check when browser is in standards mode, since IE and Chrome are the
    //     // same in quirks mode.
    //     if (chrome_comp.inQuirksMode()) return;

    //     chrome_comp.CompDetect.declareDetector(

    //     'scroll_top_left',

    //     chrome_comp.CompDetect.NonScanDomBaseDetector,

    //     function constructor(rootNode) {
    //         // Index into the array: 0: docElement.scrollLeft, 1: docElement.scrollTop,
    //         // 2: body.scrollLeft, 3: body.scrollTop.
    //         this.getterCallStacks_ = [];
    //         this.getterResults_ = [];
    //         this.lastCaller_ = null;

    //         this.onGetterCalled_ = function(id, result) {
    //             // caller 1 is anonymous function parameter in registerSimplePropertyHook.
    //             // caller 2 is ExistingMethodHookObject.newMethodHandler_.
    //             // caller 3 is the original caller.
    //             var caller = arguments.callee.caller.caller.caller;
    //             if (caller == this.lastCaller_) {
    //                 // Only record the first occurrence in one function.
    //                 if (this.getterCallStacks_[id]) return;
    //             } else {
    //                 this.checkUnpairedGetterCalls_();
    //                 this.lastCaller_ = caller;
    //             }

    //             var callerSource = caller.toString();

    //             switch (id) {
    //             case 0:
    //                 if (callerSource.indexOf('pageXOffset') != -1 || callerSource.indexOf('scrollX') != -1 || callerSource.indexOf('body.scrollLeft') != -1) return;
    //                 break;
    //             case 1:
    //                 if (callerSource.indexOf('pageYOffset') != -1 || callerSource.indexOf('scrollY') != -1 || callerSource.indexOf('body.scrollTop') != -1) return;
    //                 break;
    //             case 2:
    //                 if (callerSource.indexOf('pageXOffset') != -1 || callerSource.indexOf('scrollX') != -1 || callerSource.indexOf('documentElement.scrollLeft') != -1) return;
    //                 break;
    //             case 3:
    //                 if (callerSource.indexOf('pageYOffset') != -1 || callerSource.indexOf('scrollY') != -1 || callerSource.indexOf('documentElement.scrollTop') != -1) return;
    //                 break;
    //             }

    //             var stack = chrome_comp.dumpStack();
    //             if (!chrome_comp.isCalledFromExtension(stack)) {
    //                 this.getterCallStacks_[id] = stack;
    //                 this.getterResults_[id] = result;
    //             }
    //         };

    //         this.checkUnpairedGetterCalls_ = function() {

    //             if (this.getterCallStacks_[0] && !this.getterCallStacks_[2]) {
    //                 // documentElement.scrollLeft without paired body.scrollLeft.
    //                 this.addProblem('BX9008', {
    //                     stack: this.getterCallStacks_[0]
    //                 });
    //             } else if (!this.getterCallStacks_[0] && this.getterCallStacks_[2] && !this.getterResults_[2]) {
    //                 // body.scrollLeft without paired documentElement.scrollLeft.
    //                 // Omit the case when body.scrollLeft is not zero, because in
    //                 // 'body.scrollLeft || docElement.scrollLeft', 'docElement.scrollLeft'
    //                 // won't be called.
    //                 this.addProblem('BX9008', {
    //                     stack: this.getterCallStacks_[2]
    //                 });
    //             }

    //             if (this.getterCallStacks_[1] && !this.getterCallStacks_[3]) {
    //                 // docElement.scrollTop without paired body.scrollTop
    //                 this.addProblem('BX9008', {
    //                     stack: this.getterCallStacks_[1]
    //                 });
    //             } else if (!this.getterCallStacks_[1] && this.getterCallStacks_[3] && !this.getterResults_[3]) {
    //                 // body.scrollTop without paired docElement.scrollTop.
    //                 // Omit the case when body.scrollTop is not zero, because in
    //                 // 'body.scrollTop || docElement.scrollTop', 'docElement.scrollTop'
    //                 // won't be called.
    //                 this.addProblem('BX9008', {
    //                     stack: this.getterCallStacks_[3]
    //                 });
    //             }

    //             this.getterCallStacks_ = [];
    //             this.getterResults_ = [];
    //         };

    //         this.setUpDocumentElementHooks_ = function() {
    //             var docElement = document.documentElement;
    //             var This = this;
    //             chrome_comp.CompDetect.registerSimplePropertyHook(docElement, 'scrollLeft',
    //             function(oldValue, newValue, reason) {
    //                 if (reason == 'get') This.onGetterCalled_(0, 0);
    //                 return 0;
    //             },
    //             false, true);
    //             chrome_comp.CompDetect.registerSimplePropertyHook(docElement, 'scrollTop',
    //             function(oldValue, newValue, reason) {
    //                 if (reason == 'get') This.onGetterCalled_(1, 0);
    //                 return 0;
    //             },
    //             false, true);
    //         };

    //         this.bodyHooksReady_ = false;

    //         // Hook document.body.scrollTop/Left.
    //         this.setUpBodyHooks_ = function() {
    //             if (this.bodyHooksReady_) return;
    //             this.bodyHooksReady_ = true;
    //             var This = this;
    //             chrome_comp.CompDetect.registerSimplePropertyHook(document.body, 'scrollLeft',
    //             function(oldValue, newValue, reason) {
    //                 if (reason == 'get') {
    //                     var result = window.scrollX;
    //                     This.onGetterCalled_(2, result);
    //                     return result;
    //                 } else {
    //                     window.scrollTo(newValue, window.scrollY);
    //                 }
    //             },
    //             false, true);
    //             chrome_comp.CompDetect.registerSimplePropertyHook(document.body, 'scrollTop',
    //             function(oldValue, newValue, reason) {
    //                 if (reason == 'get') {
    //                     var result = window.scrollY;
    //                     This.onGetterCalled_(3, result);
    //                     return result;
    //                 } else {
    //                     window.scrollTo(window.scrollX, newValue);
    //                 }
    //             },
    //             false, true);
    //         };

    //     },

    //     function setUp() {
    //         this.setUpDocumentElementHooks_();

    //         if (document.body) {
    //             this.setUpBodyHooks_();
    //             return;
    //         }

    //         // The document.body may not be present here. If so, we create a
    //         // document.body property hook that returns the first element with tag name
    //         // 'body'.
    //         var originalGetter = document.__lookupGetter__('body');
    //         if (!originalGetter) {
    //             var body = null;
    //             originalGetter = function() {
    //                 if (!body) {
    //                     var bodies = document.getElementsByTagName('body');
    //                     if (bodies) body = bodies[0];
    //                 }
    //                 return body;
    //             };
    //         }
    //         var This = this;
    //         chrome_comp.CompDetect.registerSimplePropertyHook(document, 'body',
    //         function(oldValue, newValue, reason) {
    //             if (reason == 'get') {
    //                 var body = originalGetter.apply(document);
    //                 if (body) This.setUpBodyHooks_();
    //             }
    //             return body;
    //         },
    //         true, true);
    //     },

    //     function cleanUp() {
    //         // We can do nothing here, since we cannot remove the simple property hooks
    //         // and document.body hook.
    //         // Remove them will cause some standard page features broken.
    //     },

    //     function postAnalyze() {
    //         this.checkUnpairedGetterCalls_();
    //         this.lastCaller_ = null;
    //     }

    //     ); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Check the CSS margin property which affects table element whose
     * HTML 'align' attribute is 'center'.
     * @bug https://code.google.com/p/compatibility-detector/issues/detail?id=4
     *
     * http://w3help.org/zh-cn/causes/RX8004
     * The align attribute of table elements make the table itself align center
     * being relative to its containing block. In non-IE browsers, it will be
     * transformed to CSS property - 'margin-left:auto' and 'margin-right:auto'.
     * So the detector first check the center-aligned table elements by HTML align
     * attribute, ignoring the empty table element and invisible table (the width
     * or height is zero).
     *
     * Record the inline style value of 'margin-left' and 'margin-right', then
     * get the absolute left position of the table (called original position).
     * Now set the inline 'margin-left' and 'margin-right' properties be 'auto' for
     * table, it would be best to use !important to make its specificity be the
     * highest, then also get the absolute left position (called new position).
     * Restore the 'margin-left' and 'margin-right' properties of the table, and if
     * the new position is different from the original position, we think that the
     * CSS margin property which affects the center-aligned table element by HTML
     * align attribute.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'table_margin_affects_align_center',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;

    //         if (node.tagName != 'TABLE' || chrome_comp.getAttributeLowerCase(node, 'align') != 'center') return;

    //         if (node.offsetWidth == 0 || node.offsetHeight == 0 || node.innerText == '') return;

    //         // Save old style.
    //         var oldInlineMarginLeft = node.style.marginLeft;
    //         var oldInlineMarginRight = node.style.marginRight;
    //         var oldOffsetLeft = node.offsetLeft;

    //         // Change marginLeft/Right to auto.
    //         node.style.marginLeft = 'auto !important';
    //         node.style.marginRight = 'auto !important';
    //         var newOffsetLeft = node.offsetLeft;

    //         // Restore old style.
    //         // Must set marginLeft/Right to null first, or it will not change if the
    //         // old value is empty string.
    //         node.style.marginLeft = null;
    //         node.style.marginRight = null;
    //         node.style.marginLeft = oldInlineMarginLeft;
    //         node.style.marginRight = oldInlineMarginRight;

    //         // Check if table moves.
    //         var THRESHOLD = 5;
    //         if (Math.abs(oldOffsetLeft - newOffsetLeft) > THRESHOLD) {
    //             var severityLevel = 1;
    //             if (0 == oldOffsetLeft) severityLevel = 9;
    //             this.addProblem('RX8004', {
    //                 nodes: [node],
    //                 severityLevel: severityLevel,
    //                 details: 'oldOffsetLeft=' + oldOffsetLeft + ', newOffsetLeft=' + newOffsetLeft
    //             });
    //         }
    //     }

    //     ); // declareDetector
    // });

    ;
    /**
     * Copyright 2010 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview: One detector implementation for checking 'text-overflow:
     * ellipsis can cause compatibility issues' problems
     * @bug: https://code.google.com/p/compatibility-detector/issues/detail?id=30
     *
     * 'text-overflow' is the new CSS3 feature, in draft form;
     * This feature can be applied to block-level elements,
     * inline elements and cells, when its value is 'ellipsis',
     * the text will be cut off with an ellipsis said.
     * Therefore, not all browsers support this new feature , such as Firefox.
     *
     * When the trigger the following conditions may cause compatibility problems:
     * An element to set this feature,
     * Set the width of the element,
     * Set the overflow: hidden,
     * 'word-wrap' value is not a break-word.
     */

    // addScriptToInject(function() {

    //     chrome_comp.CompDetect.declareDetector(

    //     'text_overflow_ellipsis',

    //     chrome_comp.CompDetect.ScanDomBaseDetector,

    //     null, // constructor
    //     function checkNode(node, context) {
    //         if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone()) return;
    //         if (node.tagName == 'SCRIPT') return;

    //         // Recursively check if the length of sub-elements than the parent element
    //         function loopForNode(nodeElement, nodeWidth) {
    //             var node = nodeElement;
    //             if (node.childNodes.length > 0) {
    //                 for (var i = 0; i < node.childNodes.length; i++) {
    //                     if (node.childNodes[i].nodeType != 3) {
    //                         if (node.childNodes[i].childNodes.length == 1 && node.childNodes[i].childNodes[0].nodeType == 3) {
    //                             if (getComputedStyle(node.childNodes[i]).display == 'block' && getComputedStyle(node.childNodes[i])['float'] == 'none') {
    //                                 var tempNode = node.childNodes[i].cloneNode(true);
    //                                 // To obtain the actual length of the block elements
    //                                 tempNode.style['float'] = 'left';
    //                                 document.body.appendChild(tempNode);
    //                                 childrenWidth = window.getComputedStyle(tempNode).width;
    //                                 // Remove the temporary elements
    //                                 document.body.removeChild(tempNode);
    //                                 if (parseInt(childrenWidth, 10) > parseInt(nodeWidth, 10)) {
    //                                     This.flag = true;
    //                                     return;
    //                                 }
    //                             }
    //                         }
    //                         if (node.childNodes.length > 0) loopForNode(node.childNodes[i], nodeWidth, this.flag);
    //                     }
    //                 }
    //             }
    //         }
    //         // Check whether the element to set the width
    //         function isAutoWidth(element) {
    //             var inlineDisplay = element.style.display;
    //             element.style.display = 'none !important';
    //             var width = chrome_comp.getComputedStyle(element).width;
    //             element.style.display = null;
    //             element.style.display = (inlineDisplay) ? inlineDisplay: null;
    //             return width == 'auto';
    //         }
    //         var This = this;
    //         var style = chrome_comp.getComputedStyle(node);
    //         var textOverflow = style.textOverflow;
    //         var overflow = style.overflow;
    //         var wordWrap = style.wordWrap;

    //         if (style && textOverflow == 'ellipsis' && overflow == 'hidden' && node.tagName != 'TD' && wordWrap != 'break-word' && !isAutoWidth(node)) {
    //             var nodeWidth = chrome_comp.getComputedStyle(node).width;
    //             This.flag = false;
    //             // When the length of sub-element is more than parent element ,point out
    //             // this problem
    //             loopForNode(node, nodeWidth);
    //             if (This.flag == true) this.addProblem('RT3005', [node]);
    //         }
    //     }); // declareDetector
    // });



    addScriptToInject(function() {

        chrome_comp.CompDetect.declareDetector(

        'url_check',

        chrome_comp.CompDetect.ScanDomBaseDetector,

        function constructor() {

        },

        function checkNode(node, context) {

            this.addProblem('test', {
                nodes: annotation_test,
                details: details
            });
        });
    
    
    

    });




    var pidynamicCheck = function(){
        this.cache = {
            config: null,
            callback: null
        };
    };
    pitestCheck.prototype = {
        init: function(config, callback){
            var self = this;
            self.cache.config = config;
            self.cache.callback = callback;

            // 调用检测方法
            getBaseDetectionMessages(self.buildResult, this);
        },
        
        buildResult: function(checkMsg){
            var cache = this.cache;
            var errorHtml = [];
            var errorNum = 0;

            for(var i = 0,len=checkMsg.length; i<len; i++) {
                var issueurl = checkMsg[i]['problem']['issueUrl'];
                var errorId = issueurl.replace(/.*?\/([\w\d]+)$/gi, '$1');

                errorHtml.push(
                    '<div class="error-box">',
                        '<h6 data-action="SHOWBALLOON" data-param="', i, '" title="点击查看详细错误">错误ID: ', errorId ,' <a target="_blank" href="', issueurl ,'">查看详细错误描述</a></h6>',
                        '<ul class="error-item">',
                            '<li><b>[问题]：</b>', checkMsg[i]['problem']['issueDescription'] +'</li>',
                            '<li><b>[影响]：</b>', checkMsg[i]['details'] ,'</li>',
                            '<li><b>[建议]：</b>', checkMsg[i]['problem']['suggestion'] +'</li>',
                        '</ul>',
                    '</div>'
                );

                errorNum++;
            };

            if(errorNum == 0){
                errorHtml.push('<dl><dt>没有错误</dt><dd></dd></dl>');
            }else{
                errorHtml.unshift(
                    '<dl class="pan-error">',
                        '<dt>', errorNum ,'条建议',
                        '<span>使用 <a href="http://f2etest/" target="_blank">多浏览器测试环境</a> 调试页面</span>',
                        '</dt>',
                    '<dd>'
                );

                errorHtml.push('</dd></dl>');
            };

            if(cache.callback){
                cache.callback({
                    type: 'pidynamic',
                    msg: errorHtml.join(''),
		    errorNum: errorNum
                });
            }
        }
    };

    window.F2EQUALITY = window.F2EQUALITY || {};
    window.F2EQUALITY.pitestCheck = pitestCheck;

})();
