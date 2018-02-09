﻿var FrontNews_list01 = {

//友好提示 - “您没有浏览此条信息的权限”
friendlyWords:function(){
	alert(i18n_FrontNews_list01_news_page_haveNoRight);
},

//根据参数获取问卷状态、浏览次数、评论次数
/**参数说明：
	infoId:资讯ID
	infoStatus：资讯状态（资讯还是RSS）
	showDegree：是否显示浏览次数
	showMessageCount:是否显示评论次数
	showQuestionTag：是否显示问卷标记
	degreeStr：浏览次数所在标签ID
	mesStr：评论次数所在标签ID
	quesStr：问卷标记所在标签ID
**/
getAjaxValueByNewsId:function(infoId,infoStatus,showDegree,showMessageCount,showQuestionTag,degreeStr,mesStr,quesStr){
	if(infoStatus){
	$.post("/FrontNews.do", "method=getAjaxValueByNewsId&newsId="+infoId+"&infoStatus="+infoStatus+"&showDegree="+showDegree+"&showMessageCount="+showMessageCount+"&showQuestionTag="+showQuestionTag, function(res){
		// res = fail|0|0
		var resInfo = res.split("|");
			if(showQuestionTag == '1'){
				var target = document.getElementsByName(quesStr);
				if(resInfo[0]=='fail'){	
					 for(var i=0;i<target.length;i++){
						 target[i].innerHTML = "";
				       }
					//$(quesStr).hide();
				}else if(resInfo[0]=='suc'){
					for(var i=0;i<target.length;i++){
					   target[i].style.display = "";
			       }
				}
			}
			if(showMessageCount == '1'){
				var msgTarget = document.getElementsByName(mesStr);
				for(var i=0;i<msgTarget.length;i++){
					msgTarget[i].innerHTML = resInfo[1];
				}
			}
			if(showDegree == '1'){
				var degreeTarget = document.getElementsByName(degreeStr);
				for(var i=0;i<degreeTarget.length;i++){
					degreeTarget[i].innerHTML = resInfo[2];
				}

			}
		
	});
	}else{
		$(quesStr).hide();
	}
	
}
}
