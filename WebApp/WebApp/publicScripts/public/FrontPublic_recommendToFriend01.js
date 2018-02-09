var FrontPublic_recommendToFriend01 = {
	/**
	 * 验证特殊字符
	 * 
	 * @param {Object}
	 *            name 元素名称
	 */
	hasSpecSymbol_name : function(name) {
//		for ( var i = 0; i < name.length; i++) {
//			var ch = name.charAt(i);
//			if ((ch == "`") || (ch == "~") || (ch == "!") || (ch == "@")
//					|| (ch == "#") || (ch == "%") || (ch == "^") || (ch == "&")
//					|| (ch == "*") || (ch == "(") || (ch == ")") || (ch == "+")
//					|| (ch == "=") || (ch == "|") || (ch == "{") || (ch == "}")
//					|| (ch == "[") || (ch == "]") || (ch == ":") || (ch == ";")
//					|| (ch == "'") || (ch == '"') || (ch == "<") || (ch == ">")
//					|| (ch == ",") || (ch == ".") || (ch == "\\")
//					|| (ch == "?") || (ch == "/")) {
//
//				return true;
//			}
//		}
		return specialCharactersCheck(name);
	},
	getLocalHtml :function (){
		document.getElementById("action_page").value=window.location.pathname;
	},
	/**
	 * 验证好友姓名
	 * 
	 * @param {Object,Object}
	 *            thisForm  当前From,filedId 当前ID
	 * 
	 */
	checkFriendName : function(thisForm,filedId) {
		//验证是否为空
		if (thisForm[filedId]!= undefined) {
			// 获取名称
			var _name = trim(thisForm[filedId].value);
			// 验证好友名称非空
			if (_name == '' || _name.length <= 0) {
				// 提示"好友姓名为必填项，请填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error1,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			// 验证好友姓名非特殊字符
			if (FrontPublic_recommendToFriend01.hasSpecSymbol_name(_name)) {
				// 提示"不能接受的字符，请输入适合的信息！"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error3,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			// 验证好友姓名字符长度
			if (_name.length > 20) {
				// 提示"好友姓名不允许超过20个字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error2,filedId);
				////thisForm[filedId].focus();
				return false;
			}
			FrontPublic_recommendToFriend01.hideError(filedId);
		}
		return true;
	},
	/**
	 * 验证好友邮箱
	 * 
	 * @param {Object,Object}
	 *            thisForm  当前From,filedId 当前ID
	 * 
	 */
	checkFriendMail : function(thisForm,filedId) {
		//验证是否为空
		if(thisForm[filedId]!= undefined){
			// 获取邮箱
			var _email = trim(thisForm[filedId].value);
			// 验证邮箱非空
			if (_email == '' || _email.length <= 0) {
				// 提示"好友邮箱为必填项，请填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error4,filedId);
				return false;
			}
			// 验证您的邮箱字符长度
			if (_email.length > 50) { 
				// 提示"好友邮箱不允许超过50个字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error5,filedId);
				return false;
			}
			// 验证您的邮箱格式
			if (!isEmail(_email, false)) {
				// 提示"好友邮箱中应该包含 @ 和.字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error6,filedId);
				return false;
			}
			FrontPublic_recommendToFriend01.hideError(filedId);
		}
		return true;
	},
	/**
	 * 验证你的姓名
	 * 
	 * @param {Object,Object}
	 *            thisForm  当前From,filedId 当前ID
	 * 
	 */
	checkYourName : function(thisForm,filedId) {
		//验证是否为空
		if (thisForm[filedId]!= undefined) {
			// 获取你的名称
			var _name = trim(thisForm[filedId].value);
			// 验证你的名称非空
			if (_name == '' || _name.length <= 0) {
				// 提示"你的姓名为必填项，请填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error7,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			// 验证好友姓名非特殊字符
			if (FrontPublic_recommendToFriend01.hasSpecSymbol_name(_name)) {
				// 提示"不能接受的字符，请输入适合的信息！"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error3,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			// 验证好友姓名字符长度
			if (_name.length > 20) {
				// 提示"你的姓名不允许超过20个字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error8,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			FrontPublic_recommendToFriend01.hideError(filedId);
		}
		return true;
	},
	/**
	 * 验证你的邮箱
	 * 
	 * @param {Object,Object}
	 *            thisForm  当前From,filedId 当前ID
	 * 
	 */
	checkYourMail : function(thisForm,filedId) {
		//验证是否为空
		if(thisForm[filedId]!= undefined){
			// 获取邮箱
			var _email = trim(thisForm[filedId].value);
			// 验证你的邮箱非空
			if (_email == '' || _email.length <= 0) {
				// 提示"你的邮箱为必填项，请填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error9,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			// 验证您的邮箱字符长度
			if (_email.length > 50) {
				// 提示"你的邮箱不允许超过50个字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error10,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			// 验证您的邮箱格式
			if (!isEmail(_email, false)) {
				// 提示"你的邮箱中应该包含 @ 和.字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error11,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			FrontPublic_recommendToFriend01.hideError(filedId);
		}
		return true;
	},
	/**
	 * 验证主题
	 * 
	 * @param {Object}
	 *            compId 组件ID
	 * 
	 */
	checkSubject : function(thisForm,filedId) {
		//验证是否为空
		if(thisForm[filedId]!= undefined){
			// 获取主题
			var _subject = trim(thisForm[filedId].value);
			// 验证主题字符长度
			if (_subject.length > 50) {
				// 提示"主题不允许超过50个字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error12,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			FrontPublic_recommendToFriend01.hideError(filedId);
		}
		return true;
	},
	/**
	 * 验证留言
	 * 
	 * @param {Object}
	 *            compId 组件ID
	 * 
	 */
	checkMessage : function(thisForm,filedId) {
		//验证是否为空
		if(thisForm[filedId]!= undefined){
			// 获取留言
			var _message = trim(thisForm[filedId].value);
			// 验证留言字符长度
			if (_message.length > 500) {
				// 提示"留言不允许超过200个字符，请重新填写。"
				FrontPublic_recommendToFriend01.showError(i18n_frontpublic_recommendToFriend01_error13,filedId);
				//thisForm[filedId].focus();
				return false;
			}
			FrontPublic_recommendToFriend01.hideError(filedId);
		}
		return true;
	},
	/**新增2017.08.10
	 * 验证验证码
	 * 
	 * @param {Object}
	 *            compId 组件ID
	 * 
	 */
	checkVerifyCode : function(verifyCodeInput,compId) {
		//验证是否为空
		if(verifyCodeInput.length<=0){
			var pormptSpan = document.getElementById("_verifyCodePrompt");
			var okSpan = document.getElementById("_verifyCodeOK");
			pormptSpan.style.display="inline";
			pormptSpan.innerHTML="验证码为必填项，请填写。";
			okSpan.style.display="none";	
		}
	},
	/**新增2017.08.10
	 * ajax验证验证码
	 * 
	 * @param {Object}
	 *            compId 组件ID
	 * 
	 */
	 checkVerifyCodeInput: function(verifyCodeInput, compId){
		 var  verifyCodestate= false;
		$.ajax({
					type: "post",
					dataType: "json", // 返回json格式的数据
					async: false, // 同步方式
					url: "/FrontPublic.do?method=checkVerifyCode",
					data: { 
							verifyCodeInput:verifyCodeInput
						  },
					success: function(message){
						$.each(message, function(i, returnStr){
							//如果ajax返回校验失败
							if(returnStr == 'wrong'){
								//提示验证码输入错误
								FrontPublic_recommendToFriend01.showError("验证码输入错误，请重新填写。","_verifyCode");
							
							}else{
								FrontPublic_recommendToFriend01.hideError("_verifyCode");	
								verifyCodestate = true;
							}
						});
					}	
					
			 });
			 return verifyCodestate;
	},
	
	/**
	 * 验证所有
	 * 
	 * @param {Object}
	 *            compId 组件ID
	 * 
	 */
	checkAll : function(compId) {
		var hasError = true;
		// 获取form对象
		var friendForm = document.forms[compId + "_recommendToFriendForm"];
		// 验证好友名称
		if(!FrontPublic_recommendToFriend01.checkFriendName(friendForm,"_friendName")){
			hasError = false;
		};
		// 验证好友邮箱
		if(!FrontPublic_recommendToFriend01.checkFriendMail(friendForm,"_friendEmail")){
			hasError = false;
		};
		// 验证你的名称
		if(!FrontPublic_recommendToFriend01.checkYourName(friendForm,"_yourName")){
			hasError = false;
		};
		// 验证你的邮箱
		if(!FrontPublic_recommendToFriend01.checkYourMail(friendForm,"_yourEmail")){
			hasError = false;
		};
		// 验证主题
		if(!FrontPublic_recommendToFriend01.checkSubject(friendForm,"_subject")){
			hasError = false;
		};
		// 验证留言
		if(!FrontPublic_recommendToFriend01.checkMessage(friendForm,"_messages")){
			hasError = false;
		};
		//新增2017.08.10
		//验证验证码
		if(!FrontPublic_recommendToFriend01.checkVerifyCodeInput(friendForm.verifyCode.value,"_verifyCode")){
			hasError = false;
		};
		return hasError;
	},
	/**
	 * 提交表单数据
	 * 
	 * @param {Object}
	 *            compId 组件ID
	 * 
	 */
	submitForm : function(compId) {
		if (FrontPublic_recommendToFriend01.checkAll(compId)) {
			var mailForm = document
					.getElementById(compId + '_recommendToFriendForm');// 获取form对象
			//mailForm.action = "/FrontPublic.do?method=recommendToFriend01&compId="
			//		+ compId;
			
			var directHtml = (document.location).pathname;
			mailForm.action = "/FrontPublic.do?method=recommendToFriend01&compId="+compId+ "&directHtml=" + directHtml;
			mailForm.submit();
		}
	},
	/**
	 * 显示用户输入错误的提示
	 *
	 * @param prompt 要显示的提示内容
	 * @param fileldId 输入域的Id
	 */
	showError : function(prompt,fieldId){
		//获得显示数据约束信息的span
		var messageSpan = document.getElementById(fieldId+"Message");
		//获得显示用户输入数据错误提示的span
		var pormptSpan = document.getElementById(fieldId+"Prompt");
		//获得显示成功信息的span
		var okSpan = document.getElementById(fieldId+"OK");
		//获得显示数据约束信息的span
		var remindSpan = document.getElementById(fieldId+"Remind");
		//将显示数据约束信息的span设置为不显示
		if(messageSpan){
			messageSpan.style.display="none";
		}
		//设置显示数据约束信息提示的span为不显示
		if(remindSpan){
			remindSpan.style.display="none";
		}
		//设置显示成功提示的span为不显示
		if(okSpan){
			okSpan.style.display="none";
		}
		//设置显示错误提示的span为显示，并设置显示内容
		if(pormptSpan){
			pormptSpan.style.display="inline";
			pormptSpan.innerHTML=prompt;
		}
	},
	hideError :function (fieldId){
		//获得显示默认信息的span
		var messageSpan = document.getElementById(fieldId+"Message");
		//获得显示用户输入数据错误提示的span
		var pormptSpan = document.getElementById(fieldId+"Prompt");
		//获得显示成功信息的span
		var okSpan = document.getElementById(fieldId+"OK");
		//获得显示数据约束信息的span
		var remindSpan = document.getElementById(fieldId+"Remind");
		//将显示默认信息的span设置为不显示
		if(messageSpan){
			messageSpan.style.display="none";
		}
		//设置显示错误提示的span为不显示
		if(pormptSpan){
			pormptSpan.style.display="none";
		}
		//设置显示数据约束信息提示的span为不显示
		if(remindSpan){
			remindSpan.style.display="none";
		}
		//设置显示成功提示的span为不显示
		if(okSpan){
			okSpan.style.display="inline";
		}
	},
	displayMessage : function (fieldId){
		//获得显示默认信息的span
		var messageSpan = document.getElementById(fieldId+"Message");
		//获得显示用户输入数据错误提示的span
		var pormptSpan = document.getElementById(fieldId+"Prompt");
		//获得显示成功信息的span
		var okSpan = document.getElementById(fieldId+"OK");
		//获得显示数据约束信息的span
		var remindSpan = document.getElementById(fieldId+"Remind");
		//将显示默认信息的span设置为不显示
		if(messageSpan){
			messageSpan.style.display="none";
		}
		//设置显示错误提示的span为不显示
		if(pormptSpan){
			pormptSpan.style.display="none";
		}
		//设置显示成功提示的span为不显示
		if(okSpan){
			okSpan.style.display="none";
		}
		//设置显示数据约束信息提示的span为不显示
		if(remindSpan){
			remindSpan.style.display="inline";
		}
	},
	/**
	 * 关闭当前页面
	 */
	close : function() {
		window.close();
	},
	/**
	 * 返回上一页面
	 */
	goBack : function(directHtml) {
		document.location.href = directHtml;
	},
	
	goToPage:function (directHtml) {
		document.location.href = directHtml;
	}
}