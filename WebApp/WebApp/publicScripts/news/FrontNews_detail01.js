
var FrontNews_detail01 = {
	//字号
	fontSize:-1,
	//没有下载权限
	notAllowed:function(){
	//对不起，您没有下载该文件的权限
	alert(i18n_FrontNews_detail01_norightfordownload);
	return false;
	},

	//根据文件浏览人群的不同，改变地址(如跳转到会员登录页面)
	changeLinkHref:function (fileOpenObject,href1,href2,downloadlinkId){
	/*参数说明
	fileOpenObject:文件下载人群(全部、会员)
	href1：下载权限为所有的链接
	href2：下载权限为会员的链接
	downloadlinkId：事件触发ID
	*/
	// 调用函数
		var cookie_val = FrontNews_detail01.getCookie("c_memberInfo");

		if(fileOpenObject==null||fileOpenObject==""){
			//没有设置下载人群，默认所有人不能下载
			$(downloadlinkId).click(FrontNews_detail01.notAllowed);
		}else if(fileOpenObject=="0"||(
				fileOpenObject.indexOf("0")==0)){
			//下载人群为所有或包含所有，则所有人可以下载
			$(downloadlinkId).attr("href",href1);
		}else if(!cookie_val){
			//下载人群不是所有，并且用户没有登录，则弹出登录页面
			$(downloadlinkId).attr("href",href2);
			$(downloadlinkId).attr("target","_blank")
		}else if(fileOpenObject=="1"){
			//如果已经登录，并且下载人群为会员（遗留数据）,则可以下载.
			$(downloadlinkId).attr("href",href1);

		}else if(fileOpenObject.indexOf(cookie_val)!=-1){
			//如果已经登录，并且下载人群中包含当前用户所处的会员级别，可以下载
			$(downloadlinkId).attr("href",href1);
		}else{
			$(downloadlinkId).click(FrontNews_detail01.notAllowed);
		}
	},
	//设置字号大小
	setFontSize:function(mode,fontSize1) {
		if(this.fontSize==-1){
			this.fontSize=fontSize1;
		}
		var fontSize2=this.fontSize.substring(0,this.fontSize.lastIndexOf('px'));
		 if(mode=='big'){
			 if(this.fontSize!=-1 && this.fontSize!=""){
				document.getElementById('infoContent').style.fontSize=parseInt(fontSize2)+2+'px';
			 }else{
				document.getElementById('infoContent').style.fontSize="16px";
			 }
		 }else if(mode=='small'){
			 if(this.fontSize!=-1 && this.fontSize!=""){
				document.getElementById('infoContent').style.fontSize=parseInt(fontSize2)-2+'px';
			 }else{
				document.getElementById('infoContent').style.fontSize="12px";
			 }
		 }else{
			 if(this.fontSize!=-1 && this.fontSize!=""){
				document.getElementById('infoContent').style.fontSize=this.fontSize;
			}else{
				document.getElementById('infoContent').style.fontSize="14px";
			 }
		 }
	},

	//获取指定名称的COOKIE
	getCookie:function(cookie_name){
		var allcookies = document.cookie;
		var cookie_pos = allcookies.indexOf(cookie_name);
		// 如果找到了索引，就代表cookie存在，
		// 反之，就说明不存在。
		if (cookie_pos != -1)
		{
		// 把cookie_pos放在值的开始，只要给值加1即可。
			cookie_pos += cookie_name.length + 1;
			var cookie_end = allcookies.indexOf(";", cookie_pos);
			if (cookie_end == -1)
			{
			cookie_end = allcookies.length;
			}
			var value = unescape(allcookies.substring(cookie_pos, cookie_end));
		}
		return value;
	},
	//根据status隐藏或显示问卷标记
	changeQuestionStatus:function(compId,status){
		if(status == 'fail'){
			var traget=document.getElementById(compId+"_showQuestionnaire");
			traget.style.display="none";
		}
	},
	//读取上一篇下一篇资讯	
	getPreAndNextInfoByAjax:function(ctx,categoryId,newsId,href_PreAndNext,openPreAndNext,no){
		$.post(ctx+"/FrontNews.do", "method=getPreAndNextInfoByAjax&newsCategoryId="+categoryId+"&newsId="+newsId+"&href_PreAndNext="+href_PreAndNext+"&openPreAndNext="+openPreAndNext, function(vcs){
				var vc = vcs.split("|---|");
				//在指定的位置显示上一篇资讯！
				if(vc[0]=="no"){
					$("#preInfo").html(no);
				}else{
					$("#preInfo").html(vc[0]);
				}
				//在指定的位置显示下一篇资讯！
				if(vc[1]=="no"){
					$("#nextInfo").html(no);
				}else{
					$("#nextInfo").html(vc[1]);
				}
		});
	},
	//打开关键字链接
	openKeywordUrl:function(openKeywordUrl,openKeyword){
		openKeywordUrl=openKeywordUrl.split("%").join("%25");
		if(openKeyword == 0){
			window.location=openKeywordUrl;
		}else{
			window.open(openKeywordUrl);
		}
	}

}
