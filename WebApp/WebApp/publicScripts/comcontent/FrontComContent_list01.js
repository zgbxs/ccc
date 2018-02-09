var FrontComContent_list01={
	//交替显示或隐藏通用内容列表，compId：组件实例名标识
	alternate : function(compId) {
     $("#"+compId+" h5").each(function(i){
				$(this).toggle(
				  function () {
				    $("#"+compId+"UL"+i).hide();
						$(this).find(":first-child").attr("src", "../../images/comcontent/2.jpg");
				  },
				  function () {
				    $("#"+compId+"UL"+i).show();
						$(this).find(":first-child").attr("src", "../../images/comcontent/1.jpg");
				  }
				);
		 })
  },

	getUrlParam:function(name){	//获取URL参数
      var   reg   =   new   RegExp("(^|&)"+   name   +"=([^&]*)(&|$)");
	  //针对c参数前面没有&符号，导致无法获取分类id信息，无法执行选中样式  http://www.20170509.com/111/c=1&i=1&comContentId=1.html
	  if(name=='c')
	  {
		 var temp = window.location.toString().split('c=');
		 if(temp!=null&&temp.length>=2)
		 {
			return temp[1].split('&')[0];
		 }
		 
	  }
      var   r   =   window.location.toString().match(reg);
      if   (r!=null)   return   unescape(r[2]);   return   null;
  },

	//扩展样式1显示分类时的事件处理
	d1extContainCategoryAlternate : function(compId) {
		//设置当前组件实例展开的分类及内容项
		var curComcontentIds = this.getUrlParam(compId+"CurrentIds"); 
		var type="3";  //默认为有分类正常的
		if(curComcontentIds==null){
			curComcontentIds=this.getUrlParam(compId+"ContId");
			type="2";  //有分类不正常的
			if(curComcontentIds==null){
				curComcontentIds = this.getUrlParam("c");
		  		type="1";	  //全新的
			}
		}
		var contId = ""; 
	//	alert(curComcontentIds);   // 2__7
		var categoryId = "";
		if(curComcontentIds != null){
			/*
			if(type=="old"){
				var pos = curComcontentIds.indexOf("__");
				categoryId = "comContent_" + curComcontentIds.substring(0, pos);
				contId = curComcontentIds.substring(pos+2);
				$("#"+compId+" #comContent2_"+contId).addClass("current");
			}*/
			if(type=="1"){
				contId=this.getUrlParam("i");
				if(contId!=null){
					contId=contId.replace(".html","");
				}
				categoryId = "comContent_" +curComcontentIds;
			}else{
				contId=this.getUrlParam("comContentId");
				if(contId!=null){
					contId=contId.replace(".html","");
				}
				var pos = curComcontentIds.indexOf("__");
				categoryId = "comContent_" + curComcontentIds.substring(0, pos);
				// categoryId = "comContent_" +curComcontentIds;
			}
				$("#"+compId+" #comContent2_"+contId).addClass("current");
			
			
		}else{
			categoryId = $("#"+compId+" .menu-first ul li:first a:first").attr("id");
			contId = $("#"+compId+" .menu-first ul li:first ul li:first a").attr("id");
			$("#"+compId+" #"+contId).addClass("current");
		}

		$("#"+compId+" #"+categoryId).addClass("current");
		$("#"+compId+" #"+categoryId+"_second").show();

		$("#"+compId+" .menu-first ul li a.menu-text1").click(function(){
			if($(this).attr("id") == categoryId){
				if(!$(this).parent().hasClass("menu-none")){
					if($("#"+compId+" #"+categoryId+"_second").is( ":hidden")){
						$(this).removeClass("current2");
						$(this).addClass("current");
						$("#"+compId+" #"+categoryId+"_second").show();
					}else{
						$(this).removeClass("current");
						$(this).addClass("current2");
						$("#"+compId+" #"+categoryId+"_second").hide();
					}
				}
			}else{
				$("#"+compId+" #"+categoryId).removeClass("current current2");
				if(!$("#"+compId+" #"+categoryId).parent().hasClass("menu-none")){
					$("#"+compId+" #"+categoryId+"_second").hide();
				}

				$(this).addClass("current");
				categoryId = $(this).attr("id");

				if(!$(this).parent().hasClass("menu-none")){
					if(!$("#"+compId+" #"+categoryId+"_second").find("a").hasClass("current")){
						$("#"+compId+" #"+categoryId+"_second").find("a:first").addClass("current");
					}
					$("#"+compId+" #"+categoryId+"_second").show();
				}
			}
		});

		$("#"+compId+" .menu-second ul li a.menu-text2").click(function(){
			$(this).parent().parent().find("a").removeClass("current");
			$(this).addClass("current");
		});
	},

	//扩展样式1不显示分类时的事件处理
	d1extNoContainCategoryAlternate : function(compId) {
	
		var contId = this.getUrlParam("comContentId");
	//	alert(contId);
		if(contId==null){
		 contId = this.getUrlParam("i");
		if(contId!=null){
			contId=contId.replace(".html","");
		}
		}else{
			contId=contId.replace(".html","");
			//contId=compId+contId;
		}
		
	//	alert(contId);
		var error = '0';
		if(contId!=null && (contId.toLowerCase().indexOf('alert')!=-1 || contId.toLowerCase().indexOf('onload')!=-1))
		{
			error='1';
		}
			
		if(contId==null || error=='1'){
			$("#"+compId+" .menu-first ul li:first a").addClass("current");
		}else{
			    $("#"+compId+" #comContent_"+contId).addClass("current");
				$("#"+compId+" #comContent2_"+contId).addClass("current");
		}
		$("#"+compId+" .menu-first ul li a.menu-text1").click(function(){
			$("#"+compId+" .menu-first ul li a.menu-text1").removeClass("current");
			$(this).addClass("current");
		});
	}
	
}


