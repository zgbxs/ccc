var FrontNewsCategory_tree01 = {
	newsListHref:"",
	categoryId :"",
	tree :"",
	newsListHrefTarget:"_self",
	showCurrent:"",
	/*创建一个dhtml树*/
	createTree : function(compId, width, height, rootId) {
		this.tree = new dhtmlXTreeObject(compId, width, height, rootId);
		this.tree.setOnClickHandler(this.setOnClickHandler);
	},
	/*设置点击结点的回调函数*/
	setOnClickHandler: function(cid){
		FrontNewsCategory_tree01.tree.selectedId = cid;
//		if(FrontNewsCategory_tree01.showCurrent == "Y"){
//			FrontNewsCategory_tree01.tree.closeAllItems("1");
//			FrontNewsCategory_tree01.tree.openItem(cid);
//		}
		if(FrontNewsCategory_tree01.newsListHrefTarget=="_blank"){
			window.open(FrontNewsCategory_tree01.newsListHref.replace("newsListHrefParamValue",cid),"");
		}else{
			window.location.href = FrontNewsCategory_tree01.newsListHref.replace("newsListHrefParamValue",cid);
		}
	}

}