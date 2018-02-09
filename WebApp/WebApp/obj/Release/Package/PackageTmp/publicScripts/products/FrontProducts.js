var FrontProducts = {

	openWindow : function(url, target, name) {
		var windowName = "";
		if (name) {
			windowName = name;
		}
		if (target) {
			if (target == '_blank') {
				window
						.open(
								url,
								windowName,
								"toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=yes");
			} else if (target == '_self') {
				document.location.href = url;
			} else {
				document.location.href = url;
			}
		} else {
			document.location.href = url;
		}
	},
	/*
	 * 购买按钮 参数1：商品id 参数2：购买url，未经过标签转义的 参数3：商品url，经过标签转义的 参数4：弹出与否标示
	 */
	buy : function(pid, buyhref, producthref, targetOpen) {
		// 判读是否有规格或用户输入项，如果有直接进入商品详细信息，否则直接购买 2010-5-12
		var ynbuy = FrontProducts.directBuy(pid);
		if (ynbuy) {
			FrontOrders_showMiniCart01.addProduct("&productId=" + pid
					+ "&action_page=" + buyhref, targetOpen);
		} else {
			if (targetOpen == '_blank') {
				window
						.open(
								producthref,
								"",
								"toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=yes");
			} else if (targetOpen == '_self') {
				document.location.href = producthref;
			} else {
				document.location.href = producthref;
			}
		}
	},
	backOrder : function(pid, buyhref, producthref, targetOpen) {
		// 判读是否有规格，如果有直接进入商品详细信息，否则直接缺货登记
		var ynbuy = FrontProducts.directBackOrder(pid);
		if (ynbuy) {
			if (targetOpen == '_blank') {
				window
						.open(
								buyhref,
								"",
								"toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=yes");
			} else {
				document.location.href = buyhref;
			}
		} else {
			if (targetOpen == '_blank') {
				window
						.open(
								producthref,
								"",
								"toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=yes");
			} else if (targetOpen == '_self') {
				document.location.href = producthref;
			} else {
				document.location.href = producthref;
			}
		}
	},
	/* 创建动层窗口 */
	createModalDialog : function(name, width, height, title) {
		var divWidth = "auto";
		var divHeight = "auto";
		if (width) {
			divWidth = width;
		}
		if (height) {
			divHeight = height;
		}
		jQuery("body")
				.append(
						"<div id=\""
								+ name
								+ "\" title=\""
								+ title
								+ "\" style=\"overflow:hidden;padding:0;\"><iframe src=\"\" height=\"100%\" width=\"100%\" frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"auto\" allowtransparency=\"yes\"></iframe></div>");
		jQuery("#" + name).dialog( {
			autoOpen : false,
			bgiframe : false,
			closeOnEscape : false,
			resizable : false,
			modal : true,
			width : divWidth,
			height : divHeight
		});
	},

	/* 打开浮动层窗口 */
	openModalDialog : function(name, url, width, height) {
		jQuery("#" + name + " iframe").attr("src", url);
		if (width) {
			jQuery("#" + name).dialog('option', 'width', width);
			// jQuery("#" + name + " iframe").attr("width",jQuery("#" +
			// name).innerWidth() + "px");
		} else {
		}
		if (height) {
			jQuery("#" + name).dialog('option', 'height', height);
			// jQuery("#" + name + " iframe").attr("height",jQuery("#" +
			// name).innerHeight() + "px");
		} else {
		}
		jQuery("#" + name).dialog("open");
	},

	/* 关闭浮动层窗口 */
	closeModalDialog : function(name) {
		jQuery("#" + name).dialog("close");
	},
	createModalDiv : function(name, width, height) {
		jQuery("body").append(
				"<div id=\"" + name + "\" style=\"overflow:hidden;padding:0;\"></div>");
		jQuery("#" + name).dialog( {
			autoOpen : false,
			bgiframe : false,
			closeOnEscape : false,
			resizable : false,
			modal : true,
			width : 'auto',
			height : 'auto'
		});
		if (width) {
			jQuery("#" + name).dialog('option', 'width', width);
		}
		if (height) {
			jQuery("#" + name).dialog('option', 'height', height);
		}
	},
	/* 打开浮动层窗口 */
	openModalDiv : function(name, content, width, height) {
		jQuery("#" + name).html(content);
		if (width) {
			jQuery("#" + name).dialog('option', 'width', width);
		}
		if (height) {
			jQuery("#" + name).dialog('option', 'height', height);
		}
		jQuery("#" + name).dialog("open");
	},
	/* 关闭浮动层窗口 */
	closeModalDiv : function(name) {
		jQuery("#" + name).dialog("close");
	},
	// 异步请求获得商品库存，商品ID 参数1
	getStock : function(prodcutId) {
		var stock = "0";
		jQuery.ajax( {
			type : "POST",
			url : "/FrontProducts.do?method=getStock",
			data : {
				"productId" : prodcutId
			},
			dataType : "json",
			cache : false,
			async : false,
			success : function(jsonData, textStatus) {
				if (typeof (jsonData.stock) != "undefined") {
					stock = jsonData.stock;
				}
			}
		});
		return stock;
	},

	// 异步请求判断商品是否可以直接购买，商品ID 参数1
	directBuy : function(prodcutId) {
		var ynbuy = false;
		jQuery.ajax( {
			type : "POST",
			url : "/FrontProductsAsyn.do?method=directBuy",
			data : {
				"productId" : prodcutId
			},
			dataType : "json",
			cache : false,
			async : false,
			success : function(data, textStatus) {
				if (data.directBuy) {
					ynbuy = data.directBuy;
				}
			}
		});
		return ynbuy;
	},
	directBackOrder : function(prodcutId) {
		var ynbuy = false;
		jQuery.ajax( {
			type : "POST",
			url : "/FrontProductsAsyn.do?method=directBuy&disabledOrder=true",
			data : {
				"productId" : prodcutId
			},
			dataType : "json",
			cache : false,
			async : false,
			success : function(data, textStatus) {
				if (data.directBuy) {
					ynbuy = data.directBuy;
				}
			}
		});
		return ynbuy;
	},
	getMemberLevelId : function() {
		var cookieString = document.cookie;
		var starIndex = cookieString.indexOf('c_memberInfo=');
		if (starIndex == -1) {
			return "";
		}
		var endIndex = cookieString.indexOf(';', starIndex);
		if (endIndex == -1) {
			endIndex = cookieString.length;
		}
		starIndex = 'c_memberInfo'.length + 1 + starIndex;
		var cookieContent = unescape(cookieString.substring(starIndex, endIndex));
		return cookieContent;
	},
	/* 创建等待中浮动层窗口 */
	createWaitingDialog : function(width, height) {
		if (jQuery("#dialog-waiting").length == 0) {
			jQuery("body")
					.append(
							"<div id=\"dialog-waiting\" class=\"dialog-waiting\" style=\"overflow:hidden;padding:0;\"></div>");
			jQuery("#dialog-waiting").dialog( {
				autoOpen : false,
				bgiframe : false,
				closeOnEscape : false,
				resizable : true,
				modal : true,
				width : 'auto',
				height : 'auto'
			});
			if (width) {
				jQuery("#dialog-waiting").dialog('option', 'width', width);
			}
			if (height) {
				jQuery("#dialog-waiting").dialog('option', 'height', height);
			}
			jQuery("#dialog-waiting").prev("div.ui-dialog-titlebar").hide();
		}
	},
	/* 打开等待中浮动层窗口 */
	openWaitingDialog : function(width, height) {
		if (width) {
			jQuery("#dialog-waiting").dialog('option', 'width', width);
		}
		if (height) {
			jQuery("#dialog-waiting").dialog('option', 'height', height);
		}
		jQuery("#dialog-waiting").dialog("open");
	},
	/* 关闭等待中浮动层窗口 */
	closeWaitingDialog : function() {
		jQuery("#dialog-waiting").dialog("close");
	},
	/* html分页 */
	showHTML:function(compId,csshtml,idhtml){
		jQuery("#"+compId+" ."+csshtml).hide();
		jQuery("#"+compId+" #"+idhtml).show();
	}
	
}