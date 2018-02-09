function tab(id){
	var selector="#"+id;
	var $layout=$(selector);
	if($layout.size()==0)
		return;

	var containerContent = $layout.children("div[class=containerContent]");
	if(containerContent.size()>0){		
		selector+=">div[class=containerContent]";	
	}else{
		var border = $layout.children("div[class^=border_]");
		if(border.size()>0)		
			selector+=" div[class=containerContent]:first";	
	}
	
	var eventType="click";
	$tabHead=$(selector+">ul>li");
	var layoutClass=$layout.attr("class");
	if(layoutClass && layoutClass.indexOf("_mouseover")!=-1){
		eventType="mouseover";
		$tabHead.click(function(e){e.preventDefault();});
	}
	
	$tabHead.bind(eventType,function(e){
		e.preventDefault();

		if(!$("#"+id).hasClass("tabboxId")){
			$("#"+id).addClass("tabboxId");
		}

		if(!$(this).parent().hasClass("tabhead"))
			$(this).parent().addClass("tabhead");
		
		//tab
		$(selector+">ul>li").attr("class","MultiPageTab_link");
		$(this).attr("class","MultiPageTab_hover");
		
		//content area
		var i=$(selector+">ul>li").index($(this));
		$(selector+">div[class!=clear]").attr("class","tabArea_b").eq(i).attr("class","tabArea_a");
	});	
	//init select tab 
	var auto_i = "";
	var hs = window.location.hash;
	//针对url后面带非法参数进行过滤http://www.kaifa3.com/#"><img src=1 onerror=alert(5)>
	var isChar="0";
	if(hs.indexOf('<')!=-1 || hs.indexOf('>')!=-1 || hs.indexOf('alert')!=-1 || hs.indexOf('error')!=-1)
	{
		isChar="1";
	}
	if(hs && hs.length>1 && isChar=="0"){
		hs = hs.substring(1);//get anchor id
		if($("#"+id+" #"+hs).length>0 && hs.indexOf(id)>=0){
			//get anchor index'
			var s = hs.indexOf(id);
			auto_i = hs.substring(s+id.length+4);
		}
	}
	if(parseInt(auto_i) && auto_i>1){
		$(selector+">ul>li").eq(parseInt(auto_i)-1).trigger(eventType);
	}else{
		$(selector+">ul>li").eq(0).trigger(eventType);
	}
}