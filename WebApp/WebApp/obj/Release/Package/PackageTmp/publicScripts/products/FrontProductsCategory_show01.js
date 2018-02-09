var FrontProductsCategory_show01 = {
	productListHref :"",
	categoryId :"",
	tree :"",
	productListHrefTarget :"_self",
	/* 创建一个dhtml树 compId：组件实例ID, width：宽度, height：高度, rootId：根ID */
	createTree : function(compId, width, height, rootId) {
		this.tree = new dhtmlXTreeObject(compId, width, height, rootId);
		this.tree.setOnClickHandler(this.setOnClickHandler);
		this.tree.setOnOpenHandler(this.tonopen);
	},
	/* 设置点击结点的回调函数 cid:商品分类ID */
	setOnClickHandler : function(cid) {
		if (FrontProductsCategory_show01.productListHrefTarget == "_blank") {
			window.open(FrontProductsCategory_show01.productListHref.replace(
					"productListHrefParamValue", cid), "",
					"toolbar=yes,location=yes,menubar=yes,resizable=yes");
		} else {
			window.location.href = FrontProductsCategory_show01.productListHref
					.replace("productListHrefParamValue", cid);
		}
	},
	tonopen : function(id, mode) {
		if (mode > 0) {
			FrontProductsCategory_show01.tree.setItemColor(id, jQuery(
					"div[class^=FrontProductsCategory_show01-d3] span.standartTreeRow")
					.css("color"), jQuery(
					"div[class^=FrontProductsCategory_show01-d3] span.standartTreeRow")
					.css("color"));
		} else {
			FrontProductsCategory_show01.tree.setItemColor(id, jQuery(
					"div[class^=FrontProductsCategory_show01-d3] span.standartTreeRow")
					.css("_color"), jQuery(
					"div[class^=FrontProductsCategory_show01-d3] span.standartTreeRow")
					.css("_color"));
		}
		return true;
	}
}