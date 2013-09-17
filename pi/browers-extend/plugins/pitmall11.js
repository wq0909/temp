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
			var data = JSON.parse(config);
			
			this.cache.config = config;
			this.cache.callback = callback;
			this.cache.errorNum = 0;
			this.cache.errLinkNum = 0;
			this.cache.errNodes = [];

			//genQueryStr();
			//getItemStatus(getItems);
			this.checkUrl();
			//checkId();
			this.buildResult();

		},
		buildResult : function() {
			console.log("buildResult=" + new Date().getTime());
			var self = this.cache;
			var errorHtml = [];
			var errorNum = 0;

			for (var i = 0, len = self.errNodes.length; i < len; i++) {
				errorHtml.push('<div class="error-box">', '<h6>【', self.errNodes[i].type, '】, 出错链接:', self.errNodes[i].url, ' , 对应文案【', self.errNodes[i].text, '】</h6>',
				'</div>');

				errorNum++;
			}

			if (errorNum == 0) {
				errorHtml.push('<dl><dt>没有错误</dt><dd></dd></dl>');
			} else {
				errorHtml.unshift('<dl class="pan-error">', '<dt>共', errorNum, '个错误。', '</dt>', '<dd>');
				errorHtml.push('</dd></dl>');
			}

			if (self.callback) {
				self.callback({
					type : 'pitmall11',
					msg : errorHtml.join(''),
					errorNum : errorNum
				});
			}
		},

		//检查链接
		checkUrl : function() {
			var msg = "此处链接有问题,请检查！";
			var self = this.cache;
			var links = document.querySelectorAll("a");
			//匹配重复
			var regx0 = /(http|http:\/\/){2,}/;
			var regx1 = /(http|http:\/\/){1,}$/;
			//匹配缺少
			var regx2 = /(http){1}/;

			for (var i = 0; i <= links.length - 1; i++) {
				var li = links[i].href;
				var errNode = {};
				if (regx0.test(li)) {
					errNode.url = links[i].href;
					errNode.type = "http重复";
					errNode.text = links[i].text || links[i].title;
					links[i].style.backgroundColor = "#f00";
					links[i].style.color = "#633";
					this.cache.errNodes.push(errNode);
					self.errLinkNum++;
				} else if (regx1.test(li)) {
					errNode.url = links[i].href;
					errNode.type = "http结尾";
					errNode.text = links[i].text || links[i].title;
					links[i].style.backgroundColor = "#f00";
					links[i].style.color = "#633";
					this.cache.errNodes.push(errNode);
					self.errLinkNum++;
				} else if (!(regx2.test(li))) {
					if (/^#/.test(li) || /^(javascript)/.test(li) || li.length === 0) {
						continue;
					}
					errNode.url = links[i].href;
					errNode.type = "http缺失";
					errNode.text = links[i].text || links[i].title;
					links[i].style.backgroundColor = "#f00";
					links[i].style.color = "#633";
					self.errNodes.push(errNode);
					self.errLinkNum++;
				}

			}

		}
	};
	window.F2EQUALITY = window.F2EQUALITY || {};
	window.F2EQUALITY.pitmall11Check = pitmall11Check;
})();

