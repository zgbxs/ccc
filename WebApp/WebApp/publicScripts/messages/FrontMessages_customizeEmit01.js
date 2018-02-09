var FrontMessages_customizeEmit01={
	/**
	 * 截取电话字符串。
	 *
	 * @param s 
	 * @return
	 */
	isValidPhone:function(s) {
		if (!/^[\d\-()、]{7,32}$/.test(s)) return false;
		var stack = [];
		for (var i=0,c; c=s.charAt(i); i++) {
			if (c == '(') {
				stack.push(c);
			} else if (c == ')') {
				if (stack.pop() != '(') return false;
			}
		}
		return !stack.length;
	},
	isIdCard:function (str)    
	{   
	    var patrn = /^\s*\d{15}\s*$/;   
	    var patrn1 = /^\s*\d{16}[\dxX]{2}\s*$/;   
	    if(!patrn.exec(str) && !patrn1.exec(str))   
	    {   
	        return false;   
	    }    
	    return true;   
	} 
	,
	/**
	 * 显示相应的提示信息。
	 *
	 * @param data 已经填写好的表单的数据
	 * @return
	 */

	displayInfo:function(disInfo){
		document.getElementById(disInfo).style.display="block";
		//$("#"+disInfo).css({display:"block"});
	},
	/**
	 * 隐藏相应的提示信息。
	 *
	 * @param data 已经填写好的表单的数据
	 * @return
	 */
	
	hideInfo:function(hideInfo){ 	
		document.getElementById(hideInfo).style.display="none";
		//$("#"+hideInfo).css({display:"none"});
	},
	/**
	 * 显示相应的提示信息。
	 *
	 * @param flag 
	 * @return
	 */
	showinfo:function(flag){
		strarr=flag.split("_")
		laststr=strarr[strarr.length-1];
		strinfo="";
		strno="";
		strerr="";
		strpast="";
		for(i=0;i<strarr.length-1;i++){
			if(i==0){
				strinfo=strinfo+strarr[i];
				strno=strno+strarr[i];
				strerr=strerr+strarr[i];
				strpast=strpast+strarr[i];
			}else{
				strinfo=strinfo+"_"+strarr[i];
				strno=strno+"_"+strarr[i];
				strerr=strerr+"_"+strarr[i];
				strpast=strpast+"_"+strarr[i];
			}
		}
		strinfor=strinfo+"_info"+laststr
		strinfo_black=strinfo+"_info"+laststr+"_black";
		strno=strno+"_no"+laststr;
		strerr=strerr+"_err"+laststr;
		strpast=strpast+"_past"+laststr;
		if(document.getElementById(strinfor))
		{document.getElementById(strinfor).style.display="none";}
		if(document.getElementById(strno))
		{document.getElementById(strno).style.display="none";}
		if(document.getElementById(strerr))
		{document.getElementById(strerr).style.display="none";}
		if(document.getElementById(strinfo_black))
		{document.getElementById(strinfo_black).style.display="block";}
		if(document.getElementById(strpast))
		{document.getElementById(strpast).style.display="none";}
		//$("span[@flag="+flag+"w]").css({display:"none"});
		//$("span[@flag="+flag+"r]").css({display:"none"});
		//$("span[@flag="+flag+"m]").css({display:"block"});
	},
	/**
	 * 表单验证
	 *
	 * @param form 页面提交的表单
	 * @return
	 */
    checkForm:function(form,item,compid,attributeType,attributeConstraint){
    
    
    	var subitem=item;
    	var isSub=true;
    	//验证邮件
    	if((item=="all"||item=="mail")&&form.mail){
    		form.mail.value = form.mail.value.replace(/^\s+|\s+$/g, "");
    		//如果后台选择必填，或前台勾选邮件联系，那么邮件为必填，且必须正确
    		if(form.isByMail||form.isDisplayMail.value=='1'){
	    		if(form.isDisplayMail.value=='1'||form.isByMail.checked){
	    		    if(!isEmail(form.mail.value)){
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomail");
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomail_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_nomail");
						FrontMessages_customizeEmit01.displayInfo(compid+"_errmail");
						isSub=false;
					}
				 	if (/^\s*$/.test(form.mail.value)) {
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_infomail");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_infomail_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_errmail");
						FrontMessages_customizeEmit01.displayInfo(compid+"_nomail");
						isSub=false;
				 	}
		    	}
	    	}
	    	if(form.isDisplayMail.value=='0'){
	    	  	if(!isEmail(form.mail.value)&&!/^\s*$/.test(form.mail.value)){
					FrontMessages_customizeEmit01.hideInfo(compid+"_infomail");
					FrontMessages_customizeEmit01.hideInfo(compid+"_infomail_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_nomail");
					FrontMessages_customizeEmit01.displayInfo(compid+"_errmail");
					isSub=false;
				}
	    	}
			if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infomail_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infomail");
			}
		}
		if((item=="all"||item=="author")&&form.author){
		 	form.author.value = form.author.value.replace(/^\s+|\s+$/g, "");
			 	if(specialCharactersCheck(form.author.value)){
			 	    FrontMessages_customizeEmit01.hideInfo(compid+"_infoauthor");
			 	    FrontMessages_customizeEmit01.hideInfo(compid+"_infoauthor_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_noauthor");
					FrontMessages_customizeEmit01.displayInfo(compid+"_errauthor");
					isSub=false;
			 	}
		 	
		 	if(form.isDisplayAuthor.value=='1'){
			 	if (/^\s*$/.test(form.author.value)) {
					FrontMessages_customizeEmit01.hideInfo(compid+"_infoauthor");
					FrontMessages_customizeEmit01.hideInfo(compid+"_infoauthor_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_errauthor");
					FrontMessages_customizeEmit01.displayInfo(compid+"_noauthor");
					isSub=false;
			 	}
		 	}
		 	if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infoauthor_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infoauthor");
			}
	    }
	    //手机验证
	    if((item=="all"||item=="mobile")&&form.mobile){
	    	form.mobile.value = form.mobile.value.replace(/^\s+|\s+$/g, "");
	    	var mobile =  trim(form.mobile.value);
	    	if(form.isByNote||form.isDisplayMobile.value=='1'){
		    	if(form.isDisplayMobile.value=='1'||form.isByNote.checked){
			    	if (/^\s*$/.test(form.mobile.value)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile");
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_errmobile");
						FrontMessages_customizeEmit01.displayInfo(compid+"_nomobile");
						isSub=false;
				 	}else if(!isMobileNumber(mobile)||!(/^1[3|4|5|7|8]\d{9}$/.test(form.mobile.value))){
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile");
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_nomobile");
						FrontMessages_customizeEmit01.displayInfo(compid+"_errmobile");
						isSub=false;
					}
				}
			}
			if(form.isDisplayMobile.value=='0'){
				if (!/^\s*$/.test(form.mobile.value)) {
					if(!isMobileNumber(mobile)||!(/^1[3|4|5|7|8]\d{9}$/.test(form.mobile.value))){
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile");
						FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_nomobile");
						FrontMessages_customizeEmit01.displayInfo(compid+"_errmobile");
						isSub=false;
					}
				}
			}
		
			if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infomobile");
			}
	    }
	    
	    if((item=="all"||item=="phone")&&form.phone){
	    	form.phone.value = form.phone.value.replace(/^\s+|\s+$/g, "");
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(form.phone.value)) {
			    	if (!FrontMessages_customizeEmit01.isValidPhone(form.phone.value)) {
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_infophone");
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_infophone_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_nophone");
						FrontMessages_customizeEmit01.displayInfo(compid+"_errphone");
						isSub=false;
			    	}
	    		}
	    	if(form.isDisplayPhone.value=='1'){
		    	if (/^\s*$/.test(form.phone.value)) {
		    		FrontMessages_customizeEmit01.hideInfo(compid+"_infophone");
		    		FrontMessages_customizeEmit01.hideInfo(compid+"_infophone_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_errphone");
					FrontMessages_customizeEmit01.displayInfo(compid+"_nophone");
					isSub=false;
		    	}
	    	}
			if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infophone_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infophone");
			}
	    }

	   /* if((item=="all"||item=="address")&&form.address){  
			form.address.value = form.address.value.replace(/^\s+|\s+$/g, "");
			if(form.isDisplayAddress.value=='1'){
				if (/^\s*$/.test(form.address.value)) {
		    		FrontMessages_customizeEmit01.displayInfo(compid+"_noaddress");
					isSub=false;
				}
			}
		}*/
        if((item=="all"||item=="address")&&form.address){  
			form.address.value = form.address.value.replace(/^\s+|\s+$/g, "");
			//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				   	if (!/^\s*$/.test(form.address.value)) {
				    	if(specialCharactersCheck(form.address.value)){
				    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoaddress");
				    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoaddress_black");
					 		FrontMessages_customizeEmit01.hideInfo(compid+"_noaddress");
							FrontMessages_customizeEmit01.displayInfo(compid+"_erraddress");
							isSub=false;
				    	}
		    		}
			if(form.isDisplayAddress.value=='1'){
				if (/^\s*$/.test(form.address.value)) {
		    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoaddress");
		    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoaddress_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_noaddress");
		    		FrontMessages_customizeEmit01.displayInfo(compid+"_noaddress");
					isSub=false;
				}
			}
			if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infoaddress_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infoaddress");
			    }
		}
		/*if((item=="all"||item=="area")&&form.area){
			form.area.value = form.area.value.replace(/^\s+|\s+$/g, "");
			if(form.isDisplayArea.value=='1'){
				if (/^\s*$/.test(form.area.value)) {
					FrontMessages_customizeEmit01.displayInfo(compid+"_noarea");
					isSub=false;
				}
			}
		}*/
		if((item=="all"||item=="area")&&form.area){
			form.area.value = form.area.value.replace(/^\s+|\s+$/g, "");
			     //首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				   	if (!/^\s*$/.test(form.area.value)) {
				    	if(specialCharactersCheck(form.area.value)){
				    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoarea");
				    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoarea_black");
					 		FrontMessages_customizeEmit01.hideInfo(compid+"_noarea");
							FrontMessages_customizeEmit01.displayInfo(compid+"_errarea");
							isSub=false;
				    	}
		    		}
			
					if(form.isDisplayArea.value=='1'){
						if (/^\s*$/.test(form.area.value)) {
						    FrontMessages_customizeEmit01.hideInfo(compid+"_infoarea");
				    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoarea_black");
					 		FrontMessages_customizeEmit01.hideInfo(compid+"_noarea");
							FrontMessages_customizeEmit01.displayInfo(compid+"_noarea");
							isSub=false;
						}
					}
					if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_infoarea_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_infoarea");
				    }
		}
		/*if((item=="all"||item=="corpName")&&form.corpName){
			form.corpName.value = form.corpName.value.replace(/^\s+|\s+$/g, "");
			if(form.isDisplayCorpName.value=='1'){
				if (/^\s*$/.test(form.corpName.value)) {
					FrontMessages_customizeEmit01.displayInfo(compid+"_nocorpName");
					isSub=false;
				}
			}
		}	*/
		  if((item=="all"||item=="corpName")&&form.corpName){
				form.corpName.value = form.corpName.value.replace(/^\s+|\s+$/g, "");
			               //首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				   	if (!/^\s*$/.test(form.corpName.value)) {
				    	if(specialCharactersCheck(form.corpName.value)){
				    		FrontMessages_customizeEmit01.hideInfo(compid+"_infocorpName");
				    		FrontMessages_customizeEmit01.hideInfo(compid+"_infocorpName_black");
					 		FrontMessages_customizeEmit01.hideInfo(compid+"_nocorpName");
							FrontMessages_customizeEmit01.displayInfo(compid+"_errcorpName");
							isSub=false;
				    	}
		    		}
		    		
				if(form.isDisplayCorpName.value=='1'){
					if (/^\s*$/.test(form.corpName.value)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_infocorpName");
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_infocorpName_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_errcorpName");
						FrontMessages_customizeEmit01.displayInfo(compid+"_nocorpName");
						isSub=false;
					}
				}
	            if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_infocorpName_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_infocorpName");
				}
			}
		//选择分类
		if(item=="all"||item=="messagesCategoryId"){
			if(form.messagesCategoryId){
				FrontMessages_customizeEmit01.showinfo(compid+"_messagesCategoryId");
			    if(document.getElementById("messagesCategoryId").selectedIndex==0){
					FrontMessages_customizeEmit01.displayInfo(compid+"_errmessagesCategoryId");
					isSub=false;
			    }
			}	
			
	    }
	    if((item=="all"||item=="content")&&form.content){
		    if (/^\s*$/.test(form.content.value)) {
	    			FrontMessages_customizeEmit01.hideInfo(compid+"_infocontent");
	    			FrontMessages_customizeEmit01.hideInfo(compid+"_infocontent_black");
		 			FrontMessages_customizeEmit01.hideInfo(compid+"_errcontent");
					FrontMessages_customizeEmit01.displayInfo(compid+"_nocontent");
					isSub=false;
		       }else if(form.content.value.length >form.maxContent.value){
		        	FrontMessages_customizeEmit01.hideInfo(compid+"_infocontent");
		        	FrontMessages_customizeEmit01.hideInfo(compid+"_infocontent_black");
		 			FrontMessages_customizeEmit01.hideInfo(compid+"_nocontent");
					FrontMessages_customizeEmit01.displayInfo(compid+"_errcontent");
					isSub=false;
		    }
		    if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infocontent_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infocontent");
			}
	    }

	/*if((item=="all"||item=="messagesTitle")&&form.messagesTitle){
			form.messagesTitle.value = form.messagesTitle.value.replace(/^\s+|\s+$/g, "");
			if(form.isDisplayMessagesTitle.value=='1'){
				if (/^\s*$/.test(form.messagesTitle.value)) {
					FrontMessages_customizeEmit01.displayInfo(compid+"_nomessagesTitle");
					
					isSub=false;
				}
			}
		}*/
		if((item=="all"||item=="messagesTitle")&&form.messagesTitle){
			form.messagesTitle.value = form.messagesTitle.value.replace(/^\s+|\s+$/g, "");
               //首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
			   	if (!/^\s*$/.test(form.messagesTitle.value)) {
			    	if(specialCharactersCheck(form.messagesTitle.value)){
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_infomessagesTitle");
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_infomessagesTitle_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_nomessagesTitle");
						FrontMessages_customizeEmit01.displayInfo(compid+"_errmessagesTitle");
						isSub=false;
			    	}
	    		}
	    		
			if(form.isDisplayMessagesTitle.value=='1'){
				if (/^\s*$/.test(form.messagesTitle.value)) {
					FrontMessages_customizeEmit01.hideInfo(compid+"_infomessagesTitle");
		    		FrontMessages_customizeEmit01.hideInfo(compid+"_infomessagesTitle_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_errmessagesTitle");
					FrontMessages_customizeEmit01.displayInfo(compid+"_nomessagesTitle");
					isSub=false;
				}
			}
            if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infomessagesTitle_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infomessagesTitle");
			}
		}
	    
	    
		/*if((item=="all"||item=="weburl")&&form.weburl){
			var netStr =/^((http|https|ftp):(\/\/|\\\\))?((\w)+[.]){1,}/;
			if(form.isDisplayUrl.value=='1'){
				if(form.weburl.value==""||form.weburl.value=="http://"){
					FrontMessages_customizeEmit01.displayInfo(compid+"_noweburl");
		            isSub=false;
				 }else if (!netStr.test(form.weburl.value)){
		            FrontMessages_customizeEmit01.displayInfo(compid+"_errweburl");
		            isSub=false;
		        }
			}else {
				 if(form.weburl.value!=""&&form.weburl.value!="http://"){
					 if (!netStr.test(form.weburl.value)){
			            FrontMessages_customizeEmit01.displayInfo(compid+"_errweburl");
			            isSub=false;
			         }
		         }
			}
		}*/
		if((item=="all"||item=="weburl")&&form.weburl){
			var netStr =/^((http|https|ftp):(\/\/|\\\\))?((\w)+[.]){1,}/;
			if(form.isDisplayUrl.value=='1'){
				if(form.weburl.value==""||form.weburl.value=="http://"){
				    FrontMessages_customizeEmit01.hideInfo(compid+"_infoweburl");
		    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoweburl_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_errweburl");
					FrontMessages_customizeEmit01.displayInfo(compid+"_noweburl");
		            isSub=false;
				 }else if (!netStr.test(form.weburl.value)){
				    FrontMessages_customizeEmit01.hideInfo(compid+"_infoweburl");
		    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoweburl_black");
			 		FrontMessages_customizeEmit01.hideInfo(compid+"_errweburl");
		            FrontMessages_customizeEmit01.displayInfo(compid+"_errweburl");
		            isSub=false;
		        }
			}else {
				 if(form.weburl.value!=""&&form.weburl.value!="http://"){
					 if (!netStr.test(form.weburl.value)){
					    FrontMessages_customizeEmit01.hideInfo(compid+"_infoweburl");
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_infoweburl_black");
				 		FrontMessages_customizeEmit01.hideInfo(compid+"_errweburl");
			            FrontMessages_customizeEmit01.displayInfo(compid+"_errweburl");
			            isSub=false;
			         }
		         }
			}
			  if(isSub==true){
				FrontMessages_customizeEmit01.hideInfo(compid+"_infoweburl_black");
				FrontMessages_customizeEmit01.displayInfo(compid+"_infoweburl");
			}
		}
		
		if(item=="all"||item=="verifyCode"){
			
			if (form.verifyCode.value.length ==0) {
			    FrontMessages_customizeEmit01.hideInfo(compid+"_pastverifyCode");
			 	FrontMessages_customizeEmit01.hideInfo(compid+"_errverifyCode");
				FrontMessages_customizeEmit01.displayInfo(compid+"_noverifyCode");
				isSub=false;
			}else{  //修改验证码为后台校验 2017.8.21
					if(!FrontMessages_customizeEmit01.checkVerifyCodeInput(form.verifyCode.value,compid)){
					FrontMessages_customizeEmit01.hideInfo(compid+"_pastverifyCode");
					FrontMessages_customizeEmit01.displayInfo(compid+"_errverifyCode");
					FrontMessages_customizeEmit01.hideInfo(compid+"_noverifyCode");
					isSub=false;
				}
			}
			
		}
		if(item=="all"||attributeType=="0"){
			// 所有字符
			if(attributeConstraint=="0"){
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
				if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
			    	
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
			}
			// email地址
			if(attributeConstraint=="1"){
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!isEmail(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// 手机
			if(attributeConstraint=="2"){
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!isMobileNumber(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// 电话
			if(attributeConstraint=="3"){
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!FrontMessages_customizeEmit01.isValidPhone(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// 邮编
			if(attributeConstraint=="4"){
				zip = /^\d{6}$/
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!zip.test(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// 身份证
			if(attributeConstraint=="5"){
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!FrontMessages_customizeEmit01.isIdCard(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// 网站地址
			if(attributeConstraint=="6"){
			    netStr =/^((http|https|ftp):(\/\/|\\\\))?((\w)+[.]){1,}/;
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if(isDisplayAttribute=='1'){
					if(extendAtrributeValue==""||extendAtrributeValue=="http://"){
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
			            isSub=false;
					 }else if (!netStr.test(extendAtrributeValue)){
			            FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
			            isSub=false;
			        }
				}else {
					 if(extendAtrributeValue!=""&&extendAtrributeValue!="http://"){
						 if (!netStr.test(extendAtrributeValue)){
						     FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
							 FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
					         isSub=false;
				         }
			         }
				}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// qq
			if(attributeConstraint=="7"){
				qq = /^[1-9]\d{4,9}$/
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!qq.test(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// 整数
			if(attributeConstraint=="8"){
				str = /^[-]{0,1}[0-9]{1,}$/;
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!str.test(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			// 数字
			if(attributeConstraint=="9"){
				str = /^(-?\d+)(\.\d+)?$/;
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
	    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
	    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
	    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
		    	if (!/^\s*$/.test(extendAtrributeValue)) {
			    	if (!str.test(extendAtrributeValue)) {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    	}
	    		}
		    	if(isDisplayAttribute=='1'){
			    	if (/^\s*$/.test(extendAtrributeValue)) {
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}
		    	}
				if(isSub==true){
					FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
					FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
			
		}
		//多行文本验证
		if(item=="all"||attributeType=="1"){
			if(document.getElementById("extendAtrribute"+item)&&document.getElementById("isDisplayAttribute"+item)){
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
		    	extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
		    	isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value
		    	attributeMaxContent = document.getElementById("maxContent"+item).value
				if (/^\s*$/.test(extendAtrributeValue)&&isDisplayAttribute=='1') {
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
						FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			       }else if(extendAtrributeValue.length >attributeMaxContent){
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
						FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
						isSub=false;
			    }
			    if(isSub==true){
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
						FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
				}
			}
		}
		//选项
		if(item=="all"||attributeType=="2"){
			if(document.getElementById("isDisplayAttribute"+item)){
		    	//是否必填的标志
				isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value
				if(document.getElementById("extendAtrribute"+item)){
					extendAtrribute=document.getElementById("extendAtrribute"+item);
				}
				//判断单选是否必填
				option = document.getElementsByName("extendAtrribute"+item);
				//判断复选是否必填
				arrCheckbox = document.getElementsByName("checkboxExtendAtrribute"+item);
				if(arrCheckbox.length>0){
					//复选判断是否必填所用
					option = document.getElementsByName("checkboxExtendAtrribute"+item);
				}
		    	if(isDisplayAttribute=='1'){
		    		var flag = false;
			    	for(i=0;i<option.length;i++){
			    		if(option[i].checked){
			    			flag = true;
			    		}
			    	}
			    	if(extendAtrribute.type=="select-one"){
						if(extendAtrribute.selectedIndex!=0){
							flag = true;
						}
					}
			    	if(!flag){
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
						FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						isSub=false;
			    	}else{
			    		FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
						FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
			    	}
		    	}
	    	}
	    	
		}
		//日期时间
		if(item=="all"||attributeType=="3"){
			if(document.getElementById("extendAtrribute"+item)&&document.getElementById("isDisplayAttribute"+item)){
				document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
		    	extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
		    	isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value
				if(isDisplayAttribute=='1'){
				    if (/^\s*$/.test(extendAtrributeValue)) {
						 FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
						 FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
						 FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
						 FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
						 isSub=false;
				    }
			    }
			    //判断字符串格式
			    
		    }
		}
		if(item=="all"){
			arrAttribute = document.getElementsByName(compid+"_isDisplayAttribute");
			
			//自定义验证
			//单行文本验证
			for(i=0;i<arrAttribute.length;i++){
				otherAttribute=arrAttribute[i].getAttribute("otherAttribute");
				allOtherAttribute = otherAttribute.split("_attribute_");
				attributeType=allOtherAttribute[0];
				attributeConstraint=allOtherAttribute[1];
				item=arrAttribute[i].id.substr(18,arrAttribute[i].id.length);
				if(item=="all"||attributeType=="0"){
					// 所有字符
					if(attributeConstraint=="0"){
					
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
						if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
					}
					// email地址
					if(attributeConstraint=="1"){
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!isEmail(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// 手机
					if(attributeConstraint=="2"){
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!isMobileNumber(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// 电话
					if(attributeConstraint=="3"){
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!FrontMessages_customizeEmit01.isValidPhone(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// 邮编
					if(attributeConstraint=="4"){
						zip = /^\d{6}$/
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!zip.test(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// 身份证
					if(attributeConstraint=="5"){
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!FrontMessages_customizeEmit01.isIdCard(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// 网站地址
					if(attributeConstraint=="6"){
					    netStr =/^((http|https|ftp):(\/\/|\\\\))?((\w)+[.]){1,}/;
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if(isDisplayAttribute=='1'){
							if(extendAtrributeValue==""||extendAtrributeValue=="http://"){
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
					            isSub=false;
							 }else if (!netStr.test(extendAtrributeValue)){
					            FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
					            isSub=false;
					        }
						}else {
							 if(extendAtrributeValue!=""&&extendAtrributeValue!="http://"){
								 if (!netStr.test(extendAtrributeValue)){
								     FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
									 FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
									 FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
									 FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
							         isSub=false;
						         }
					         }
						}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// qq
					if(attributeConstraint=="7"){
						qq = /^[1-9]\d{4,9}$/
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!qq.test(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// 整数
					if(attributeConstraint=="8"){
						str = /^[-]{0,1}[0-9]{1,}$/;
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!str.test(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					// 数字
					if(attributeConstraint=="9"){
						str = /^(-?\d+)(\.\d+)?$/;
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
			    		extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
			    		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value;
			    		//首先判断是否为空，如果为空则不判断了，如果不为空则判断一下是否合理。
				    	if (!/^\s*$/.test(extendAtrributeValue)) {
					    	if (!str.test(extendAtrributeValue)) {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    	}
			    		}
				    	if(isDisplayAttribute=='1'){
					    	if (/^\s*$/.test(extendAtrributeValue)) {
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							 	FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}
				    	}
						if(isSub==true){
							FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
							FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
					
				}
				//多行文本验证
				if(item=="all"||attributeType=="1"){
					if(document.getElementById("extendAtrribute"+item)&&document.getElementById("isDisplayAttribute"+item)){
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
				    	extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
				    	isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value
				    	attributeMaxContent = document.getElementById("maxContent"+item).value
						if (/^\s*$/.test(extendAtrributeValue)&&isDisplayAttribute=='1') {
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
								FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					       }else if(extendAtrributeValue.length >attributeMaxContent){
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
								FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
								isSub=false;
					    }
					    if(isSub==true){
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
								FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
						}
					}
				}

				//选项
				if(item=="all"||attributeType=="2"){
					if(document.getElementById("isDisplayAttribute"+item)){
						//是否必填的标志
						isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value
						if(document.getElementById("extendAtrribute"+item)){
							extendAtrribute=document.getElementById("extendAtrribute"+item);
						}
						//判断单选是否必填将选择的内容存储
				    	option = document.getElementsByName("extendAtrribute"+item);
						//复选将所有的值以字符串的格式存储
						arrCheckbox = document.getElementsByName("checkboxExtendAtrribute"+item);
						if(arrCheckbox.length>0){
							strCheckbox = "";
							for(m=arrCheckbox.length-1;m>=0;m--){
						    	if(arrCheckbox[m].checked){
						    		strCheckbox = arrCheckbox[m].value+","+strCheckbox;
						    	}
							}
							strCheckbox = strCheckbox.substr(0,strCheckbox.length-1);
							//复选框的最终值
							extendAtrribute.value = strCheckbox;
							//复选判断是否必填所用
							option = document.getElementsByName("checkboxExtendAtrribute"+item);
						}
						
					    if(isDisplayAttribute=='1'){
					    	var flag = false;
						    for(j=0;j<option.length;j++){
						    	if(option[j].checked){
						    		flag = true;
						    	}
						   	}
						    if(extendAtrribute.type=="select-one"){
							   	if(extendAtrribute.selectedIndex!=0){
									flag = true;
							    }
						   	}
						   	if(!flag){
						   		FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
								FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								isSub=false;
					    	}else{
					    		FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
								FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
					    	}
					   	}
			    	}
				}
				//日期时间
				
				if(item=="all"||attributeType=="3"){
					if(document.getElementById("extendAtrribute"+item)&&document.getElementById("isDisplayAttribute"+item)){
						document.getElementById("extendAtrribute"+item).value=document.getElementById("extendAtrribute"+item).value.replace(/^\s+|\s+$/g, "");
				    	extendAtrributeValue=document.getElementById("extendAtrribute"+item).value;
				    	isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value
						if(isDisplayAttribute=='1'){
						    if (/^\s*$/.test(extendAtrributeValue)) {
								 FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
								 FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
								 FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
								 FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
								 isSub=false;
						    }
					    }
				    }
				}
			}
		}
		if(!form.content){
			isSub=false;
		}
		//isSub=false;
		if(isSub&&subitem=="all"){
			var hdnFilePath = document.createElement('input');  //创建input节点
			var rssd=form.verifyCode.value;
			var abc=document.getElementsByName("vlidationSet",compid);
			if(abc.length==0){
				hdnFilePath.setAttribute('type', 'hidden');  //定义类型是文本输入
				hdnFilePath.name = 'vlidationSet';
				hdnFilePath.value = rssd;
				form.appendChild(hdnFilePath); //添加到form中显示	
			}else{
				abc.value = rssd;
			}
			
			form.orignal_url.value = window.location.href;
			document.getElementById(compid+"_submit").disabled='disabled';
			form.submit();
		}
	},
	
	/**
	 * 选择表情。
	 *
	 * @param e 被选择的表情
	 * @return
	 */
	selectEmotion:function(e,compid){
		var firstSrc=e.src;
		var secondSrc=firstSrc.replace("mesa-","mes-"); 
		var eleEmotion = document.getElementById(compid+"_emotion");
		var imageId = document.getElementById(compid+"_imageId");
		//先将以前选中的图片效果清除
		if(imageId.value !=null && imageId.value !=""){
			var oldimg = document.getElementById(imageId.value);
			oldimg.src=imageId.name;
		}
		
		//将当前选中的图片加样式效果
		//e.className="imgstyle2";
		e.src=secondSrc;
		//获取图片SRC
		var imgSrc = e.src;
		imgSrc = imgSrc.substring(imgSrc.lastIndexOf("/")+1);
		eleEmotion.value = imgSrc;
		document.getElementById(compid+"_imageId").value = e.id;
		if(imageId.name.substring(imageId.name.length-6,imageId.name.length)!=e.src.substring(e.src.length-6,e.src.length)){
			document.getElementById(compid+"_imageId").name = firstSrc;
		}
		document.getElementById(compid+"_emotion").value = e.name;
		
	},
	/**
	 * 提取是否邮件联系。
	 *
	 * @param obj 
	 * @param compid
	 * @return
	 */
	addIsByMailValue:function(obj,compid){
		FrontMessages_customizeEmit01.hideInfo(compid+"_infomail_black");
		FrontMessages_customizeEmit01.hideInfo(compid+"_nomail");
		FrontMessages_customizeEmit01.hideInfo(compid+"_errmail");
		FrontMessages_customizeEmit01.displayInfo(compid+"_infomail");
		if(obj.checked){
			$("#isByMail").attr("value","1");
		}else{
			$("#isByMail").attr("value","0");
		}
	},
	/**
	 * 提取是否短信联系。
	 *
	 * @param obj 
	 * @param compid
	 * @return
	 */
	addIsByNoteValue:function(obj,compid){
		FrontMessages_customizeEmit01.hideInfo(compid+"_infomobile_black");
		FrontMessages_customizeEmit01.hideInfo(compid+"_nomobile");
		FrontMessages_customizeEmit01.hideInfo(compid+"_errmobile");
		FrontMessages_customizeEmit01.displayInfo(compid+"_infomobile");
		if(obj.checked){
			$("#isByNote").attr("value","1");
		}else{
			$("#isByNote").attr("value","0");
		}
	},
  
	/**
	 * 判断字符串中是否都是数字,返回true则不全是数字，返回false 则全是数字。
	 *
	 * @param String 字符串
	 * @return 
	 */
	checknumber:function(String){ 
		var Letters = "1234567890"; 
		var i; 
		var c; 
		for( i = 0; i < String.length; i ++ ){ 
			c = String.charAt( i ); 
			if (Letters.indexOf( c ) ==-1){ 
				return true; 
			} 
		} 
		return false; 
	},
	/**
	 * 会员表单自动填写。
	 *
	 * @param data 已经填写好的表单的数据
	 * @return
	 */
	callback:function(data)
	{
		arrsp=data.split("***");
	 	authorarr=arrsp[0].split(":");
	 	authorarr[1]=authorarr[1].substr(1, authorarr[1].length-2); 
		$("#mail").attr("value",authorarr[1]==null?'': authorarr[1]);
		if(data['mail'] != null)
		{
			$('#mail').attr("readonly","true");
		}
		authorarr=arrsp[1].split(":");
		authorarr[1]=authorarr[1].substr(1, authorarr[1].length-2); 
		$("#author").attr("value",authorarr[1]==null?'': authorarr[1]);
		authorarr=arrsp[3].split(":");
		authorarr[1]=authorarr[1].substr(1, authorarr[1].length-2); 
		$("#phone").attr("value",authorarr[1]==null?'': authorarr[1]);
		authorarr=arrsp[4].split(":");
		authorarr[1]=authorarr[1].substr(1, authorarr[1].length-2); 
		$("#mobile").attr("value",authorarr[1]==null?'': authorarr[1]);
		authorarr=arrsp[7].split(":");
		authorarr[1]=authorarr[1].substr(1, authorarr[1].length-2); 
		$("#address").attr("value",authorarr[1]==null?'': authorarr[1]);
		authorarr=arrsp[8].split(":");
		authorarr[1]=authorarr[1].substr(1, authorarr[1].length-2); 
		$("#corpName").attr("value",authorarr[1]==null?'': authorarr[1]);
	
		authorarr=arrsp[2].split(":");
		authorarr[1]=authorarr[1].substr(1, authorarr[1].length-2); 
		if(authorarr[1] != null && authorarr[1] == '0')
			$('#sex1').attr("checked","checked");
	
		else if (authorarr[1] != null && authorarr[1] == '1')
		{
			$('#sex2').attr("checked","checked");
		}
	
		if(data['isByMail'] != null && data['isByMail'] == '0')
			$('#isByMail2').attr("checked","checked");
		else if (data['isByMail'] != null && data['isByMail'] == '1')
		{
			$('#isByMail1').attr("checked","checked");
		}
		if(data['isByNote'] != null && data['isByNote'] == '0')
				$('#isByNote2').attr("checked","checked");
		else if (data['isByNote'] != null && data['isByNote'] == '1')
		{
			$('#isByNote1').attr("checked","checked");
		}
	
	},
	/**
	* 动态显示留言字数
	* 参数 formId 表单id , obj 留言页面对象
	*/
	dynamicNum:function(formId,obj,item){
	  		var lBrowser = {};
			lBrowser.agt = navigator.userAgent.toLowerCase();
			lBrowser.isW3C = document.getElementById ? true:false;
			lBrowser.isIE = ((lBrowser.agt.indexOf("msie") != -1) && (lBrowser.agt.indexOf("opera") == -1) && (lBrowser.agt.indexOf("omniweb") == -1));
			lBrowser.isNS6 = lBrowser.isW3C && (navigator.appName=="Netscape") ;
			lBrowser.isOpera = lBrowser.agt.indexOf("opera") != -1;
			lBrowser.isGecko = lBrowser.agt.indexOf("gecko") != -1;
			lBrowser.ieTrueBody =function (){
			  return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
			};
		
			//为Firefox下的DOM对象增加innerText属性  ff下无innerText属性 有等同效果的textContent属性
			if(lBrowser.isNS6){ //firefox innerText define
			 HTMLElement.prototype.__defineGetter__( "innerText",
				 function(){
				 	return this.textContent;
				 }
			 );
			 HTMLElement.prototype.__defineSetter__( "innerText",
				 function(sText){
				 	this.textContent=sText;
			 	 }
			 );
			}
	
			
	  	  var formObj = document.getElementById(formId);
	  	  if(item=="null"){
	  	  var dynamicNum = document.getElementById('dynamicNum');
	  	  }else{
	  	  var dynamicNum = document.getElementById('dynamicNum'+item);
	  	  }
	  	  var num = obj.value;
	  	  dynamicNum.innerText = num.length;
	  },
	/**
	 * 提取星级设置。
	 *
	 * @param parameter
	 * @return
	 */
	setStarValue:function(parameter){
		document.getElementById("star").value=parameter.innerHTML;
	},	
	/**
	 * ajax验证码替换。
	 *
	 * @return
	 */
//	getajaxverifyCode:function(){
//		$.get("/FrontMessages.do?method=getVerifyCode",
//		 function(data){
//		 if($("#ajaxverifyCode").attr("value")==data){
//		 	//FrontMessages_customizeEmit01.getajaxverifyCode();
//		 }else{
//		 	//$("#ajaxverifyCode").attr("value",data);
//		 }
//		});
//	},
	/**
	 * ajax验证码提取。
	 *
	 * @return
	 */
//	getajaxverifyCodeforonblur:function(){
//		$.get("/FrontMessages.do?method=getVerifyCode",
//		 function(data){
//		 if($("#ajaxverifyCode").attr("value")!=data){
//		 	//$("#ajaxverifyCode").attr("value",data);
//		 }
//		});
//	},
	/**新增2017.08.21
	 * ajax验证验证码 修改为后台验证
	 * 
	 * @param {Object}
	 *            compId 组件ID
	 * 
	 */
	 checkVerifyCodeInput: function(verifyCodeInput, compid){
		 if(verifyCodeInput == ''){
			 FrontMessages_customizeEmit01.hideInfo(compid+"_pastverifyCode");
			 FrontMessages_customizeEmit01.displayInfo(compid+"_noverifyCode");
			 FrontMessages_customizeEmit01.hideInfo(compid+"_errverifyCode");
			 return;
		 }
		 var  verifyCodestate= false;
		$.ajax({
					type: "post",
					dataType: "json", // 返回json格式的数据
					async: false, // 同步方式
					url: "/FrontMessages.do?method=checkVerifyCode",
					data: { 
							verifyCodeInput:verifyCodeInput
						  },
					success: function(message){
						$.each(message, function(i, returnStr){
							//如果ajax返回校验失败
							if(returnStr == 'wrong'){
								//提示验证码输入错误
								FrontMessages_customizeEmit01.hideInfo(compid+"_pastverifyCode");
								FrontMessages_customizeEmit01.hideInfo(compid+"_noverifyCode");
								FrontMessages_customizeEmit01.displayInfo(compid+"_errverifyCode");
							
							}else{
								FrontMessages_customizeEmit01.hideInfo(compid+"_errverifyCode");
								FrontMessages_customizeEmit01.hideInfo(compid+"_noverifyCode");
								FrontMessages_customizeEmit01.hideInfo(compid+"_pastverifyCode");
								verifyCodestate = true;
							}
						});
					}	
					
			 });
			 return verifyCodestate;
	},
	/**
	 * 当鼠标划过显示手型。
	 *
	 * @return
	 */
	showHand:function(objthis){
		objthis.style.cursor = 'pointer';
	},
	/**
	 * 验证码校验。
	 *
	 * @return
	 */
	chkverifyCode:function(objid,compid){
		 if (objid=="0") {
			FrontMessages_customizeEmit01.hideInfo(compid+"_errverifyCode");
			FrontMessages_customizeEmit01.hideInfo(compid+"_noverifyCode");
			FrontMessages_customizeEmit01.displayInfo(compid+"_pastverifyCode");

		 }else if (objid=="1") {
			FrontMessages_customizeEmit01.hideInfo(compid+"_pastverifyCode");
			FrontMessages_customizeEmit01.hideInfo(compid+"_noverifyCode");
			FrontMessages_customizeEmit01.displayInfo(compid+"_errverifyCode");
		 }
	},
	/**
	 * 根据状态是否显示提示信息 divName 层对象 divName2 层对象 divName3 层对象 status 是否显示 1为显示 其他为隐藏
	 */
	displayDiv : function(divName, status, divName2, divName3) {
		var divObj = document.getElementById(divName);
		if (null != divObj) {
			if (status == 1) {
				divObj.style.display = '';
			} else {
				divObj.style.display = 'none';
			}
		}

		var divObj = document.getElementById(divName2);
		if (null != divObj) {
			if (status == 1) {
				divObj.style.display = '';
			} else {
				divObj.style.display = 'none';
			}
		}

		var divObj = document.getElementById(divName3);
		if (null != divObj) {
			if (status == 1) {
				divObj.style.display = '';
			} else {
				divObj.style.display = 'none';
			}
		}

	},

	/**
	 * 校验出生日期。
	 * 
	 * @param compId
	 * @param form
	 *            表单对象。
	 * @return
	 */
	checkBirthDay : function(compid, form, item) {
		attributeDate = document.getElementById("extendAtrribute"+item);
		isDisplayAttribute=document.getElementById("isDisplayAttribute"+item).value
		if (!isDate(trim(attributeDate.value), true)) {
			attributeDate.value="";
		}
		if(isDisplayAttribute=='1'){
			if (isNull(attributeDate.value)
						|| trim(attributeDate.value) == "yyyy-mm-dd"
						|| trim(attributeDate.value) == "YYYY-MM-DD") {
				FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
				FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
				FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
				FrontMessages_customizeEmit01.displayInfo(compid+"_no"+item);
					// birthday.focus();
				return false;
			}
			if (!isDate(trim(attributeDate.value), true)) {
				FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item);
				FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
				FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
				FrontMessages_customizeEmit01.displayInfo(compid+"_err"+item);
				// birthday.focus();
				return false;
			}
			FrontMessages_customizeEmit01.hideInfo(compid+"_err"+item);
			FrontMessages_customizeEmit01.hideInfo(compid+"_no"+item);
			FrontMessages_customizeEmit01.hideInfo(compid+"_info"+item+"_black");
			FrontMessages_customizeEmit01.displayInfo(compid+"_info"+item);
		}
		return true;
	}
}

