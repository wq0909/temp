(function() {

  var annotations = [];
  var annotationsDiv = null;
  var highlightDivs = [];
  var balloonDiv = null;

  function compareAnnotations(a1, a2) {
    var result = a1.top - a2.top;
    if (result)
      return result;
    result = a1.left - a2.left;
    return result ? result : a1.originalSequence - a2.originalSequence;
  }
  function getRgbaStr( rgb, opacity ){
    var rgba = [];
    for (var i = 0; i< 3; i++ ) {
      rgba.push( parseInt(rgb.substr( i * 2, 2 ),16) );
    };
    rgba.push( opacity );

    return 'rgba('+rgba.join(',')+')';
  }
  function updateAnnotationTopLeft(annotation) {
    annotation.rectangles = [];
    var rectsFromAncestor = [];
    for (var i = 0, c = annotation.nodes.length; i < c; ++i) {
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
      var problems = window.F2EQUALITY.pitmall11Check.getAllProblems();
      //var issusId = document.documentElement.getAttribute('issusId');
      //document.documentElement.removeAttribute('issusId');
      // TODO: rename typeId to reason
      for (var typeId in problems) {
        //if (issusId && issusId.split(',').indexOf(typeId) != -1) {
          var problem = problems[typeId];
          // Sanity check to ensure this entry is valid (not an injected property
          // by the host page.
          if (problem && problem.occurrences && problem.occurrences.length) {
            for (var i = 0, c = problem.occurrences.length; i < c; ++i) {
              var annotation = problem.occurrences[i];
              annotation.problem = problem;
              // This sequence is to ensure the sorting is stable when multiple
              // annotations has the same position.
              annotation.originalSequnece = sequence++;
              annotations.push(annotation);
              updateAnnotationTopLeft(annotation);
            }
          }
        //}
      }
      annotations.sort(compareAnnotations);
    }
  }

  // The 'this' object should be the tag div or balloon div.
  function showHighlight() {
    hideHighlight();
    var annotation = annotations[this.annotationIndex];
    //var className = annotation.isError ? 'alidev-f2e-highlight-error' : 'alidev-f2e-highlight-warning';
    var bgc = '';
      if( annotation.isError ){
        bgc = getRgbaStr( annotation.problem.color.errorRgb , 1 );
      }else{
        bgc = getRgbaStr( annotation.problem.color.warningRgb , 1 )
      }
    for (var i = 0, c = annotation.rectangles.length; i < c; ++i) {
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
      highlightDiv.className = 'alidev-f2e-highlight';
      highlightDiv.style.backgroundColor = bgc;
      highlightDiv.style.left = rect.left + 'px';
      highlightDiv.style.top = rect.top + 'px';
      highlightDiv.style.width = rect.width + 'px';
      highlightDiv.style.height = rect.height + 'px';
    }
  }

  function hideHighlight() {
    for (var i = 0, c = highlightDivs.length; i < c; ++i)
      highlightDivs[i].style.display = 'none';
  }

  function showBalloon(index, isScrollIntoView) {
    if (index < 0 || index >= annotations.length)
      return;

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
      balloonDiv.className = 'alidev-f2e-balloon';
      balloonDiv.onmouseover = showHighlight;
      balloonDiv.onmouseout = hideHighlight;

      var closeLink = document.createElement('a');
      closeLink.className = 'alidev-f2e-utils-float-right';
      closeLink.innerHTML = '关闭';
      closeLink.href = '#';
      closeLink.onclick = function() {
        balloonDiv.style.display = 'none';
        return false;
      };
      balloonDiv.appendChild(closeLink);

      navigationDiv = document.createElement('div');
      navigationDiv.className = 'alidev-f2e-nav';
      navigationDiv.innerHTML = '#';
      // Just a place holder.
      previousLink = document.createElement('a');
      previousLink.innerHTML = '上一个';
      previousLink.href = '#';
      previousLink.onclick = function() {
        showBalloon(this.annotationIndex - 1, true);
        return false;
      };
      navigationDiv.appendChild(previousLink);
      nextLink = document.createElement('a');
      nextLink.innerHTML = '下一个';
      nextLink.href = '#';
      nextLink.onclick = function() {
        showBalloon(this.annotationIndex + 1, true);
        return false;
      };
      navigationDiv.appendChild(nextLink);
      balloonDiv.appendChild(navigationDiv);

      descriptionDiv = document.createElement('div');
      descriptionDiv.className = 'alidev-f2e-description';
      balloonDiv.appendChild(descriptionDiv);
      detailsDiv = document.createElement('div');
      detailsDiv.className = 'alidev-f2e-details';
      balloonDiv.appendChild(detailsDiv);
      suggestionDiv = document.createElement('div');
      suggestionDiv.className = 'alidev-f2e-suggestion';
      balloonDiv.appendChild(suggestionDiv);
      moreInfoDiv = document.createElement('div');
      moreInfoDiv.className = 'alidev-f2e-more-info';
      var moreInfo = document.createElement('a');
      moreInfo.innerHTML = "更多信息";
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

    navigationDiv.firstChild.nodeValue = "第 "+(index + 1)+" 个 共 "+annotations.length+" 个" + ' ';
    previousLink.annotationIndex = index;
    nextLink.annotationIndex = index;
    previousLink.setAttribute('disabled', String(index == 0));
    nextLink.setAttribute('disabled', String(index == annotations.length - 1));

    var problem = annotation.problem;
    descriptionDiv.innerHTML = problem.issueDescription;
    var details = annotation.details;
    if (annotation.stack) {
      // Insert a zero-width space before all '/'s to make them line-breakable.
      details = ( details ? details + '\n' : '') + annotation.stack.replace(/\//g, '\u200B/');
    }
    if (details) {
      detailsDiv.innerHTML = details;
      detailsDiv.style.display = 'block';
    } else {
      detailsDiv.style.display = 'none';
    }
    if (problem.suggestion) {
      suggestionDiv.innerHTML = '建议:' + problem.suggestion + (problem.issueUrl ? '...' : '');
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

    if (isScrollIntoView)
      tagDiv.scrollIntoView();

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
    window.console.log(annotation.problem.issueDescription);
    // Show the primary node in the console. In developer tool, the user can
    // see the details of the node in the console panel.
    if (annotation.nodes && annotation.nodes.length)
      window.console.log(annotation.nodes);
    if (annotation.stack)
      window.console.log(annotation.stack);
  }

  function onTagClick() {
    showBalloon(this.annotationIndex);
  }

  function isDescendentOf(e1, e2) {
    while (e1) {
      if (e1 == e2)
        return true;
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
    for (var i = 0, c = annotations.length; i < c; ++i) {
      var annotation = annotations[i];
      var x = annotation.left;
      var y = annotation.top;
      if (x < lastOriginalLeft) {
        y = Math.max(lastBottom, y);
      } else if (x < lastRight) {
        if (y > lastOriginalTop)
          y = Math.max(lastBottom, y);
        else
          x = lastRight;
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
    if (!annotationsDiv)
      return;
    var positionChanged = false;
    for (var i = 0, c = annotations.length; i < c; ++i) {
      if (updateAnnotationTopLeft(annotations[i]))
        positionChanged = true;
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
      if (balloonDiv && balloonDiv.style.display == 'block')
        showBalloon(balloonDiv.annotationIndex);
    }
  }

  function showAnnotations() {
    console.log('showAnnotations');
    annotations = [];
    if (annotationsDiv)
      return;
    preprocessAnnotations();
    if (!annotations.length)
      return;

    annotationsDiv = document.createElement('div');
    annotationsDiv.className = 'alidev-f2e-annotations';
    document.body.appendChild(annotationsDiv);
    var styleElement = document.createElement('style');
    var cssArr = [];
    cssArr.push('.alidev-f2e-annotations *, .alidev-f2e-annotations a:link { ');
    cssArr.push('  margin: 0; ');
    cssArr.push('  padding: 0; ');
    cssArr.push('  border: none; ');
    cssArr.push('  border-spacing: 0; ');
    cssArr.push('  border-radius: 0; ');
    cssArr.push('  background: transparent; ');
    cssArr.push('  opacity: 1; ');
    cssArr.push('  visibility: visible; ');
    cssArr.push('  font-size: 12px; ');
    cssArr.push('  font-family: Arial, Helvetica, sans-senif; ');
    cssArr.push('  text-indent: 0; ');
    cssArr.push('  text-decoration: none; ');
    cssArr.push('  text-align: left; ');
    cssArr.push('  color: black; ');
    cssArr.push('  direction: ltr; ');
    cssArr.push('  line-height: normal; ');
    cssArr.push('  letter-spacing: 0; ');
    cssArr.push('  vertical-align: baseline; ');
    cssArr.push('  white-space: normal; ');
    cssArr.push('  float: none; ');
    cssArr.push('  min-width: 0; ');
    cssArr.push('  min-height: 0; ');
    cssArr.push('  max-width: none; ');
    cssArr.push('  max-height: none; ');
    cssArr.push('  width: auto; ');
    cssArr.push('  height: auto; ');
    cssArr.push('  overflow: display; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-annotations * { ');
    cssArr.push('  color: black; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-annotations div { ');
    cssArr.push('  display: block; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-number{ ');
    cssArr.push('  position: absolute; ');
    cssArr.push('  color: white; ');
    cssArr.push('  font-size: 10px; ');
    cssArr.push('  padding: 1px; ');
    //cssArr.push('  border-radius: 3px; ');
    cssArr.push('  min-width: 12px; ');
    cssArr.push('  opacity: 0.9; ');
    cssArr.push('  text-align: center; ');
    cssArr.push('  cursor: pointer; ');
    cssArr.push('  z-index: 100000000; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-number:hover{ ');
    cssArr.push('  opacity: 1;');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-highlight { ');
    cssArr.push('  position: absolute; ');
    cssArr.push('  box-sizing: border-box; ');
    cssArr.push('  z-index: 99999999; ');
    cssArr.push('  opacity: 0.5; ');
    cssArr.push('  border:solid thin #A10;');
    cssArr.push('}');
    cssArr.push('.alidev-f2e-balloon { ');
    cssArr.push('  position: absolute; ');
    cssArr.push('  z-index: 100000001; ');
    cssArr.push('  background: #FFC; ');
    cssArr.push('  padding: 5px; ');
    cssArr.push('  border: solid thin #888; ');
    cssArr.push('  opacity: 0.9; ');
    cssArr.push('  width: 350px; ');
    cssArr.push('  overflow: hidden; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-navigation { ');
    cssArr.push('  text-align: left; ');
    cssArr.push('  white-space: pre; ');
    cssArr.push('  padding-bottom: 3px; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-description { ');
    cssArr.push('  font: bold 14px sans-serif; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-details { ');
    cssArr.push('  white-space: pre-wrap; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-suggestion { ');
    cssArr.push('  white-space: normal; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-more-info { ');
    cssArr.push('  white-space: normal;'); 
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-annotations a, .alidev-f2e-annotations a:link { ');
    cssArr.push('  display: inline; ');
    cssArr.push('  text-decoration: underline; ');
    cssArr.push('  color: #11C; ');
    cssArr.push('  cursor: pointer; ');
    cssArr.push('  margin: 0px 3px; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-annotations a:hover { ');
    cssArr.push('  color: #11C; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-annotations a:active { ');
    cssArr.push('  color: #11C; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-annotations a[disabled="true"] { ');
    cssArr.push('  text-decoration: none; ');
    cssArr.push('  color: #666; ');
    cssArr.push('  cursor: default; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-nav{ ');
    cssArr.push('  padding-bottom:5px; ');
    cssArr.push('  margin-bottom:5px; ');
    cssArr.push('  border-bottom:1px solid #aaa; ');
    cssArr.push('} ');
    cssArr.push('.alidev-f2e-balloon a.alidev-f2e-utils-float-right{');
    cssArr.push('  float: right;');
    cssArr.push('}');

    var cssTextElement = document.createTextNode(cssArr.join('\n'));  
    styleElement.appendChild( cssTextElement );
    annotationsDiv.appendChild( styleElement );

    for (var i = 0, c = annotations.length; i < c; ++i) {
      var annotation = annotations[i];
      var tag = document.createElement('div');
      annotation.isError = (annotation.severityLevel || annotation.problem.severityLevel) >= 2;
      tag.className = 'alidev-f2e-number';//annotation.isError ? 'alidev-f2e-error' : 'alidev-f2e-warning';
      var bgc = '';
      if( annotation.isError ){
        bgc = getRgbaStr( annotation.problem.color.errorRgb , 1 );
      }else{
        bgc = getRgbaStr( annotation.problem.color.warningRgb , 1 )
      }
      tag.style.backgroundColor = bgc;
      tag.innerHTML = String(i + 1);
      annotationsDiv.appendChild(tag);
      annotation.tagDiv = tag;
      tag.annotationIndex = i;
      tag.onmouseover = showHighlight;
      tag.onmouseout = hideHighlight;
      tag.onclick = onTagClick;
    }

    setAnnotationTagsPosition(annotations);
    showBalloon(0, true);
    document.addEventListener('keydown', onDocumentKeyDown, true);
    refreshTimer = window.setInterval(refreshAnnotations, 300);
  }

  function hideAnnotations() {
    if (!annotationsDiv)
      return;

    document.body.removeChild(annotationsDiv);
    annotationsDiv = null;
    highlightDivs = [];
    balloonDiv = null;
    document.removeEventListener('keydown', onDocumentKeyDown, true);
    window.clearInterval(refreshTimer);
  }

  function showIndex( e ){
    if( e.eventObject ){
      showBalloon( e.eventObject.index );
    }
  }

  document.documentElement.addEventListener('alidev_annotationOn', showAnnotations);
  document.documentElement.addEventListener('alidev_annotationOff', hideAnnotations);
  document.documentElement.addEventListener('alidev_annotationShowIndex', showIndex);
})();

(function(){
  var PageUtil = {
    // Gets ele's left coordinate related to current page
    pageLeft: function(ele) {
      return ele.offsetParent ?
        ele.offsetLeft + this.pageLeft(ele.offsetParent) :
        ele.offsetLeft;
    },

    // Gets ele's top coordinate related to current page
    pageTop: function(ele) {
      return ele.offsetParent ?
          ele.offsetTop + this.pageTop(ele.offsetParent) :
          ele.offsetTop;
    },

    // Gets ele's left coordinate related to its parent node
    parentLeft: function(ele) {
      var parentNode = ele.parentNode;
      return parentNode == ele.offsetParent ?
          ele.offsetLeft : this.pageLeft(ele) - this.pageLeft(parentNode);
    },

    // Gets ele's top coordinate related to its parent node
    parentTop: function(ele) {
      var parentNode = ele.parentNode;
      return parentNode == ele.offsetParent ?
          ele.offsetTop : this.pageTop(ele) - this.pageTop(parentNode);
    },

    getNodeRects: function(node) {
      if (!node)
        return [];
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
        if (clientRects && clientRects.length)
          break;
        // For a node that has no location, returns rectangle of its
        // nearest parent.
        node = node.parentNode;
        useAncestor = true;
      }
      if (!node)
        return [];

      var useWidth = 0;
      var useHeight = 0;
      var style = node.ownerDocument.defaultView.getComputedStyle(node);
      if (style && style.overflow == 'visible') {
        useWidth = node.scrollWidth;
        useHeight = node.scrollHeight;
      }
      var rects = [];
      for (var i = 0, c = clientRects.length; i < c; i++) {
        var clientRect = clientRects[i];
        rects.push({
          left: clientRect.left + window.pageXOffset,
          top: clientRect.top + window.pageYOffset,
          width: c == 1 && useWidth ? useWidth : clientRect.width,
          height: c == 1 && useHeight ? useHeight : clientRect.height
        });
      }
      if (useAncestor)
        rects.fromAncestor = true;
      return rects;
    }
  };

  window.F2EQUALITY = window.F2EQUALITY || {};
  window.F2EQUALITY.PageUtil = PageUtil;
})();

(function() {
  //hello
  arrstatus = new Array();
  itemStatus = {
    "0" : "正常",
    "1" : "正常",
    "-1" : "用户删除",
    "-2" : "用户下架",
    "-3" : "小二下架",
    "-4" : "小二删除",
    "-5" : "从未上架",
    "-9" : "CC",
    "状态查询异常" : "查询状态异常"
  };
  var items = new Array();

  var pitmall11Check = function() {
    this.cache = {
      config : null,
      callback : null
    };
  };

  pitmall11Check.prototype = {
    init : function(config, callback) {
      console.log("init=" + new Date().getTime());
      //var data = JSON.parse(config);

      this.config = config;
      this.callback = callback;

      //genQueryStr();
      //getItemStatus(getItems);
      this.checkUrl();
      //checkId();
      this.buildResult();
      
      
      var event = document.createEvent('Event');
      event.initEvent('alidev_annotationOn', true, true);
      document.documentElement.dispatchEvent(event);
    },
    getAllProblems : function(){
      return this.problems;
    },
    validatorRules : [
      {
        type : 'href',
        reg : /(http|http:\/\/){2,}/,
        layer : 2,
        description : 'http重复'
      },{
        type : 'href',
        reg : /(http|http:\/\/){1,}$/,
        layer : 2,
        description : 'http重复'
      },{
        type : 'lost-href',
        reg : /(http){1}/,
        layer : 2,
        description : 'http缺失'
      },
    ],
    validator : function( node ){
      var that = this;
      for( var i = 0, count = that.validatorRules.length; i< count; i++ ){
        var rule = that.validatorRules[i],
          href = node.href;
        if( rule.type === 'href' && rule.reg.test( href ) ){
          return rule;
        }else if( rule.type === 'lost-href' && !rule.reg.test( href )){
          if (/^#/.test(href) || /^(javascript)/.test(href) || href.length === 0) {
            continue;
          }else{
            return rule;
          }
        }
      }
      return null;
    },
    
    buildResult : function() {
      console.log("buildResult=" + new Date().getTime());
      var that = this,
        errorHtml = [],
        errorNum = 0;

      for (var i = 0, len = that.problems.length; i < len; i++) {
        var problem = that.problems[i];
        errorHtml.push('<div class="error-box">',
                  '<h6>['+problem.issueDescription+'], 出错链接:'+problem.url+' , 对应文案['+problem.text+']</h6>', 
                '</div>');
        errorNum++;
      }

      if (errorNum == 0) {
        errorHtml.push('<dl><dt>没有错误</dt><dd></dd></dl>');
      } else {
        errorHtml.unshift('<dl class="pan-error"><dt>共'+errorNum+'个错误。</dt><dd>');
        errorHtml.push('</dd></dl>');
      }

      if (that.callback) {
        that.callback({
          type : 'pitmall11',
          msg : errorHtml.join(''),
          errorNum : errorNum
        });
      }
    },

    //检查链接
    checkUrl : function() {
      var msg = "此处链接有问题,请检查！",
        that = this,
        links = document.querySelectorAll("a"),
        problems = [],
        errorCount = 0;

      for (var i = 0; i <= links.length - 1; i++) {
        var link = links[i],
          result = that.validator(link);
        if( result ){
          problems.push({
            color: {
              errorRgb: 'ff0000',
              warningRgb: 'ff9900'
            },
            issueDescription: result.description,
            occurrences: [{
              nodes: [link],
              severityLevel: result.layer,
              rectCallback:  window.F2EQUALITY.PageUtil.getNodeRects
            }],
            text : link.text || link.title,
            url : link.href
          });
          errorCount++;
        }
      }
      this.problems = problems;
    },

    showIndex : function( index ){
      var event = document.createEvent('Event');
      event.eventObject = { 'index' : index};
      event.initEvent('alidev_annotationShowIndex', true, true);
      document.documentElement.dispatchEvent(event);
    },

    annotationOff : function(){
      var event = document.createEvent('Event');
      event.initEvent('alidev_annotationOff', true, true);
      document.documentElement.dispatchEvent(event);
    },

    annotationOn : function(){
      var event = document.createEvent('Event');
      event.initEvent('alidev_annotationOn', true, true);
      document.documentElement.dispatchEvent(event);
    }
  };
  window.F2EQUALITY = window.F2EQUALITY || {};
  window.F2EQUALITY.pitmall11Check = new pitmall11Check;
})();