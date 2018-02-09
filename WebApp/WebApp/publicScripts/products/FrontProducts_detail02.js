var FrontProducts_detail02 = {

      //提交购买 参数1 form 名
    buySbmitQuick: function(formId){
        var checknumber = /^[1-9][0-9]*$/;
        var theform = document.getElementById(formId);
        var action_target=theform.action_target;
        
        var order0 = theform.order0_value;
        var order1 = theform.order1_value;
        var order2 = theform.order2_value;
        var order3 = theform.order3_value;
        var order4 = theform.order4_value;
        var order5 = theform.order5_value;
        var order6 = theform.order6_value;
        var order7 = theform.order7_value;
        var order8 = theform.order8_value;
        var order9 = theform.order9_value;
        var order10 = theform.order10_value;
        var order11 = theform.order11_value;
        var order12 = theform.order12_value;
        var order13 = theform.order13_value;
        var order14 = theform.order14_value;
        
        if (order0) {
            var order0_title = theform.order0_title.value;
            if(!checkOrder(order0,order0_title)){return false;}
            theform.order0_hidden.value = encodeURIComponent(order0_title + ":" + order0.value);
        }
        if (order1) {
            var order1_title = theform.order1_title.value;
            if(!checkOrder(order1,order1_title)){return false;}
            theform.order1_hidden.value = encodeURIComponent(order1_title + ":" + order1.value);
        }
        if (order2) {
            var order2_title = theform.order2_title.value;
            if(!checkOrder(order2,order2_title)){return false;}
            theform.order2_hidden.value = encodeURIComponent(order2_title + ":" + order2.value);
        }
        if (order3) {
            var order3_title = theform.order3_title.value;
            if(!checkOrder(order3,order3_title)){return false;}
            theform.order3_hidden.value = encodeURIComponent(order3_title + ":" + order3.value);
        }
        if (order4) {
            var order4_title = theform.order4_title.value;
            if(!checkOrder(order4,order4_title)){return false;}
            theform.order4_hidden.value = encodeURIComponent(order4_title + ":" + order4.value);
        }
        if (order5) {
            var order5_title = theform.order5_title.value;
            if(!checkOrder(order5,order5_title)){return false;}
            theform.order5_hidden.value = encodeURIComponent(order5_title + ":" + order5.value);
        }
        if (order6) {
            var order6_title = theform.order6_title.value;
            if(!checkOrder(order6,order6_title)){return false;}
            theform.order6_hidden.value = encodeURIComponent(order6_title + ":" + order6.value);
        }
        if (order7) {
            var order7_title = theform.order7_title.value;
            if(!checkOrder(order7,order7_title)){return false;}
            theform.order7_hidden.value = encodeURIComponent(order7_title + ":" + order7.value);
        }
        if (order8) {
            var order8_title = theform.order8_title.value;
            if(!checkOrder(order8,order8_title)){return false;}
            theform.order8_hidden.value = encodeURIComponent(order8_title + ":" + order8.value);
        }
        if (order9) {
            var order9_title = theform.order9_title.value;
            if(!checkOrder(order9,order9_title)){return false;}
            theform.order9_hidden.value = encodeURIComponent(order9_title + ":" + order9.value);
        }
        if (order10) {
            var order10_title = theform.order10_title.value;
            if(!checkOrder(order10,order10_title)){return false;}
            theform.order10_hidden.value = encodeURIComponent(order10_title + ":" + order10.value);
        }
        if (order11) {
            var order11_title = theform.order11_title.value;
            if(!checkOrder(order11,order11_title)){return false;}
            theform.order11_hidden.value = encodeURIComponent(order11_title + ":" + order11.value);
        }
        if (order12) {
            var order12_title = theform.order12_title.value;
            if(!checkOrder(order12,order12_title)){return false;}
            theform.order12_hidden.value = encodeURIComponent(order12_title + ":" + order12.value);
        }
        if (order13) {
            var order13_title = theform.order13_title.value;
            if(!checkOrder(order13,order13_title)){return false;}
            theform.order13_hidden.value = encodeURIComponent(order13_title + ":" + order13.value);
        }
        if (order14) {
            var order14_title = theform.order14_title.value;
            if(!checkOrder(order14,order14_title)){return false;}
            theform.order14_hidden.value = encodeURIComponent(order14_title + ":" + order14.value);
        }
        
        //如果有规格货品，货品Id(productItemId) 必须不能为空
        var productItemId="";
        if (theform.productItemId) {
        	productItemId=theform.productItemId.value;
        	if (productItemId=="") {
	            alert(i18n_FrontProducts_detail02_noProductItemId);
	            return false;
	        }
        }
   
        
        //购买数据量校验
        if(theform.amount){
        	if (isNull(theform.amount.value)) {
	            alert(i18n_FrontProducts_detail02_error_102);
	            return false;
	        }
	        
	        if (!checknumber.test(theform.amount.value)) {
	            alert(i18n_FrontProducts_detail02_error_101);
	            return false;
	        }
        }
        
        /**
        //判读购买数量是否大于库存
        var url=theform.ctx.value+"/FrontProducts.do?method=getStock";
        var yn=true;
        jQuery.ajax({
           type: "post",
           url: url,
           data:{"productId":theform.productId.value,"productItemId":productItemId},
           dataType: "json",
           cache: false,
           async: false,
           success: function(jsonData, textStatus){
            	if(typeof(jsonData.stock) != "undefined"){
            		var pamount=1;
          			if(theform.amount.value!=null && theform.amount.value!=""){
			           	pamount=parseInt(theform.amount.value);
			        }
			        if(jsonData.stock!=null && jsonData.stock.toString()!=""){
			        	if((pamount > parseInt(jsonData.stock))){
			        		yn=false;
			        	}
			        }
             	}
			}           
        });

        if(!yn){
        	alert(i18n_FrontProducts_detail02_Lessstock);
        	return false;
        }
        */
        
        
	    //序列化表单数据，调用购物车js接口，进行购买
	    var data = jQuery("#"+formId).serialize();
	   FrontOrders_quickPurchaseCart01.addProductQuick(data,action_target.value);
		
		
		
		
		
		//用户需填项值有效校验
		function checkOrder(orderX,orderTitle){
			if (jQuery(orderX).hasClass("orderNotNull")){
        		if(jQuery(orderX).val()==""){
        			alert(orderTitle+i18n_FrontProducts_detail02_orderXNotNull);
        			jQuery(orderX).focus();
        			return false;
        		}
        	}
        	return true;
		}
		
    },
	
	
	
    //提交购买 参数1 form 名
    buySbmit: function(formId){
        var checknumber = /^[1-9][0-9]*$/;
        var theform = document.getElementById(formId);
        var action_target=theform.action_target;
        
        var order0 = theform.order0_value;
        var order1 = theform.order1_value;
        var order2 = theform.order2_value;
        var order3 = theform.order3_value;
        var order4 = theform.order4_value;
        var order5 = theform.order5_value;
        var order6 = theform.order6_value;
        var order7 = theform.order7_value;
        var order8 = theform.order8_value;
        var order9 = theform.order9_value;
        var order10 = theform.order10_value;
        var order11 = theform.order11_value;
        var order12 = theform.order12_value;
        var order13 = theform.order13_value;
        var order14 = theform.order14_value;
        
        if (order0) {
            var order0_title = theform.order0_title.value;
            if(!checkOrder(order0,order0_title)){return false;}
            theform.order0_hidden.value = encodeURIComponent(order0_title + ":" + order0.value);
        }
        if (order1) {
            var order1_title = theform.order1_title.value;
            if(!checkOrder(order1,order1_title)){return false;}
            theform.order1_hidden.value = encodeURIComponent(order1_title + ":" + order1.value);
        }
        if (order2) {
            var order2_title = theform.order2_title.value;
            if(!checkOrder(order2,order2_title)){return false;}
            theform.order2_hidden.value = encodeURIComponent(order2_title + ":" + order2.value);
        }
        if (order3) {
            var order3_title = theform.order3_title.value;
            if(!checkOrder(order3,order3_title)){return false;}
            theform.order3_hidden.value = encodeURIComponent(order3_title + ":" + order3.value);
        }
        if (order4) {
            var order4_title = theform.order4_title.value;
            if(!checkOrder(order4,order4_title)){return false;}
            theform.order4_hidden.value = encodeURIComponent(order4_title + ":" + order4.value);
        }
        if (order5) {
            var order5_title = theform.order5_title.value;
            if(!checkOrder(order5,order5_title)){return false;}
            theform.order5_hidden.value = encodeURIComponent(order5_title + ":" + order5.value);
        }
        if (order6) {
            var order6_title = theform.order6_title.value;
            if(!checkOrder(order6,order6_title)){return false;}
            theform.order6_hidden.value = encodeURIComponent(order6_title + ":" + order6.value);
        }
        if (order7) {
            var order7_title = theform.order7_title.value;
            if(!checkOrder(order7,order7_title)){return false;}
            theform.order7_hidden.value = encodeURIComponent(order7_title + ":" + order7.value);
        }
        if (order8) {
            var order8_title = theform.order8_title.value;
            if(!checkOrder(order8,order8_title)){return false;}
            theform.order8_hidden.value = encodeURIComponent(order8_title + ":" + order8.value);
        }
        if (order9) {
            var order9_title = theform.order9_title.value;
            if(!checkOrder(order9,order9_title)){return false;}
            theform.order9_hidden.value = encodeURIComponent(order9_title + ":" + order9.value);
        }
        if (order10) {
            var order10_title = theform.order10_title.value;
            if(!checkOrder(order10,order10_title)){return false;}
            theform.order10_hidden.value = encodeURIComponent(order10_title + ":" + order10.value);
        }
        if (order11) {
            var order11_title = theform.order11_title.value;
            if(!checkOrder(order11,order11_title)){return false;}
            theform.order11_hidden.value = encodeURIComponent(order11_title + ":" + order11.value);
        }
        if (order12) {
            var order12_title = theform.order12_title.value;
            if(!checkOrder(order12,order12_title)){return false;}
            theform.order12_hidden.value = encodeURIComponent(order12_title + ":" + order12.value);
        }
        if (order13) {
            var order13_title = theform.order13_title.value;
            if(!checkOrder(order13,order13_title)){return false;}
            theform.order13_hidden.value = encodeURIComponent(order13_title + ":" + order13.value);
        }
        if (order14) {
            var order14_title = theform.order14_title.value;
            if(!checkOrder(order14,order14_title)){return false;}
            theform.order14_hidden.value = encodeURIComponent(order14_title + ":" + order14.value);
        }
        
        //如果有规格货品，货品Id(productItemId) 必须不能为空
        var productItemId="";
        if (theform.productItemId) {
        	productItemId=theform.productItemId.value;
        	if (productItemId=="") {
	            alert(i18n_FrontProducts_detail02_noProductItemId);
	            return false;
	        }
        }
   
        
        //购买数据量校验
        if(theform.amount){
        	if (isNull(theform.amount.value)) {
	            alert(i18n_FrontProducts_detail02_error_102);
	            return false;
	        }
	        
	        if (!checknumber.test(theform.amount.value)) {
	            alert(i18n_FrontProducts_detail02_error_101);
	            return false;
	        }
        }
        
        /**
        //判读购买数量是否大于库存
        var url=theform.ctx.value+"/FrontProducts.do?method=getStock";
        var yn=true;
        jQuery.ajax({
           type: "post",
           url: url,
           data:{"productId":theform.productId.value,"productItemId":productItemId},
           dataType: "json",
           cache: false,
           async: false,
           success: function(jsonData, textStatus){
            	if(typeof(jsonData.stock) != "undefined"){
            		var pamount=1;
          			if(theform.amount.value!=null && theform.amount.value!=""){
			           	pamount=parseInt(theform.amount.value);
			        }
			        if(jsonData.stock!=null && jsonData.stock.toString()!=""){
			        	if((pamount > parseInt(jsonData.stock))){
			        		yn=false;
			        	}
			        }
             	}
			}           
        });

        if(!yn){
        	alert(i18n_FrontProducts_detail02_Lessstock);
        	return false;
        }
        */
        
        
	    //序列化表单数据，调用购物车js接口，进行购买
	    var data = jQuery("#"+formId).serialize();
	    FrontOrders_showMiniCart01.addProduct(data,action_target.value);
		
		
		//用户需填项值有效校验
		function checkOrder(orderX,orderTitle){
			if (jQuery(orderX).hasClass("orderNotNull")){
        		if(jQuery(orderX).val()==""){
        			alert(orderTitle+i18n_FrontProducts_detail02_orderXNotNull);
        			jQuery(orderX).focus();
        			return false;
        		}
        	}
        	return true;
		}
		
    },
    
    //缺货登记 mainFormId 详细信息主表单Id，lackFormId 取货登记表单Id
    lackSbmit: function(mainFormId,lackFormId){
    	var mainForm = document.getElementById(mainFormId);
    	var lackForm = document.getElementById(lackFormId);
        if (mainForm.productItemId) {
        	if(mainForm.productItemId.value!=""){
        		lackForm.productItemId.value=mainForm.productItemId.value;
        	}else{
        		alert(i18n_FrontProducts_detail02_noProductItemId);
        		return false;
        	}
        }
        lackForm.submit();
    },
    
    //异步请求url地址  参数1， 商品ID 参数2 ，showid 显示容器Id
    init_addHitnumber: function(url,prodcutid, showid){
        jQuery.ajax({
           type: "GET",
           url: url,
           data:{"productId":prodcutid},
           dataType: "text",
           cache: false,
		   error:function (XMLHttpRequest, textStatus, errorThrown) {
		   },
           success: function(data, textStatus){
           		data=jQuery.trim(data);
            	if(data!=""){
             		var isnum= /^(0|[1-9]\d*)?$/;
	         		var val=isnum.test(data);	                     
	         		var showojb=jQuery("#"+showid);
             		if(val&&(showojb.length>0)){
						showojb.text(data);				
             		}
             	}
			}           
       });
    },
    /**
	 * 页面加载完毕，根据当前tab情况，初始化默认tab页和对应的div
	 * @param compId:组件id
	 */
	defaultTab:function (compId) {
	    if(jQuery("#"+compId+"_tabsFlag li").length>0){
	    	var firstOjb=jQuery("#"+compId+"_tabsFlag li:first-child");
			firstOjb.addClass("current");
			var divId=firstOjb.find("a").attr("name");
			jQuery(".showtabdiv").hide();
			jQuery("#"+divId).show(); 
		}
	},
	/**
	 * 切换tab页
	 * @param compId:组件id${compId}_tabsFlag
	 */
	changeTab:function (compId) {
		jQuery("#"+compId+"_tabsFlag li").click(function(){
		  	jQuery("#"+compId+"_tabsFlag li").removeClass("current");
		  	jQuery(this).addClass("current");
	     	jQuery(".showtabdiv").hide();
	     	var divId=jQuery(this).find("a:first-child").attr("name");
		    jQuery("#"+divId).show(); 
		});
	},
    //不允许提示(目前已经不用了，暂时留着)
    notAllowed: function(){
        alert(i18n_FrontProducts_detail02_down);
        return false;
    },
    //下载附件   参数 下载人群权限 参数2连接地址 参数3连接地址 参数4下载文件ID
    changeLinkHref: function(fileOpenObject, href1, href2, downloadlinkId){
     	var $= jQuery ;
        downloadlinkId = "#" + downloadlinkId;
        if (fileOpenObject != null && fileOpenObject != "") {
            if(fileOpenObject == "0"){
            	$(downloadlinkId).attr("href", href1);
            }else{
            	$(downloadlinkId).attr("href", href2);
            }
        }else{
        	$(downloadlinkId).attr("href", href2);
        }
    },
    //获得cookie 参数1 cookie 名称
    getCookie: function(cookie_name){
        var allcookies = document.cookie;
        var cookie_pos = allcookies.indexOf(cookie_name);
        // 如果找到了索引，就代表cookie存在，
        // 反之，就说明不存在。
        if (cookie_pos != -1) {
            // 把cookie_pos放在值的开始，只要给值加1即可。
            cookie_pos += cookie_name.length + 1;
            var cookie_end = allcookies.indexOf(";", cookie_pos);
            if (cookie_end == -1) {
                cookie_end = allcookies.length;
            }
            
            var value = unescape(allcookies.substring(cookie_pos, cookie_end));
        }
        
        return value;
    },
    
    //按会员级别显示价格 参数1 input name
    laodComp: function(memberlvId){
        var memberlvid = document.getElementsByName(memberlvId);
        //var memberlvid =_getElementById(compId, "input", "memberlvid");
        var cookieString = document.cookie;
        
        var starIndex = cookieString.indexOf('c_memberInfo=');
        if (starIndex == -1) {
        
            for (var i = 0; i < memberlvid.length; i++) {
                memberlvid[i].parentNode.style.display = "none";
            }
            return;
        }
        
        var endIndex = cookieString.indexOf(';', starIndex);
        if (endIndex == -1) {
            endIndex = cookieString.length;
            
        }
        starIndex = 'c_memberInfo'.length + 1 + starIndex;
        var cookieContent = unescape(cookieString.substring(starIndex, endIndex));
        
        for (var i = 0; i < memberlvid.length; i++) {
            if (memberlvid[i].value != cookieContent) {
                memberlvid[i].parentNode.style.display = "none";
            }else{
            	memberlvid[i].parentNode.style.display = "block";
            }
        }
        
    },
    
    /*
     *	校验浏览人群权限
     *
     *	compId	组件id
     *	openrights	浏览权限标示
     *
     */
    checkCrowd: function(compId, openright,returnPage){
        // 组件
        var compDiv = document.getElementById(compId);
        compDiv.style.display = "none";
		var returnURL = "";
		if(returnPage){
			//  document.location.href ='<ce:escape scope='js' value='${href_loginpage}'/>' + '?returnUrl=' + window.location.pathname;
			returnURL = returnPage + "?returnUrl=" + window.location.pathname;
		}
        
		jQuery.ajax({
			url :"/FrontProducts.do?method=checkMember",
			type :'post',
			cache: false,
			dataType :'text',
			success : function(memberLogin) {
			    //读取cookie，解析c_memberInfo=XXX;
	             var cookieString = document.cookie;
			     if(memberLogin == "true"){
			    	 
					if (openright == '3') {// 任意登录用户
						compDiv.style.display = "";
						return;
					}
			        
					var starIndex = cookieString.indexOf('c_memberInfo=');
					
					if (starIndex == -1) {//cookie无值
			            alert(i18n_FrontProducts_detail02_noright);
			            //window.location.href = returnURL;
			            if(returnPage){
			            	window.location.href = returnURL;
			            }else{
			            	FrontProducts_detail02.pageReturn();
			            }
			            return;
			        }
					
			        var endIndex = cookieString.indexOf(';', starIndex);
			        if (endIndex == -1) {
			            endIndex = cookieString.length;
			        }
			        starIndex = 'c_memberInfo'.length + 1 + starIndex;
			        var cookieContent = unescape(cookieString.substring(starIndex, endIndex));
			        
			        
			        //校验"c_memberInfo=XXX"与FrontProducts_detail02_rights的权限
			        var memberlvid = document.getElementsByName("FrontProducts_detail02_rights");
			        var flag = false;
			        for (var i = 0; i < memberlvid.length; i++) {
			            if (memberlvid[i].value == cookieContent) {
			                flag = true;
			                 break;
			            }
			        }
			        if (!flag) {
			            alert(i18n_FrontProducts_detail02_noright);
			            //window.location.href = returnURL;
			            // FrontProducts_detail02.pageReturn();
			            if(returnPage){
			            	window.location.href = returnURL;
			            }else{
			            	FrontProducts_detail02.pageReturn();
			            }
			        }
			        else {
			            compDiv.style.display = "";
			        }
			      }else{
						//login,c_memberaccount
						alert(i18n_FrontProducts_detail02_unlogin);
						//FrontProducts_detail02.pageReturn();
						if(returnPage){
			            	window.location.href = returnURL;
			            }else{
			            	FrontProducts_detail02.pageReturn();
			            }
			            return;
			      }
			  }
		});
        
    },
    
    /*
     *
     *	校验浏览人群权限,无权限浏览
     *
     */
    pageReturn: function(){
        var pageNO = history.length;
        if (document.all) {
            //IE代码
            if (pageNO == 0) {
                window.close();
            }
            else {
                history.go(-1);
            }
        }
        else {
            //其他
            if (pageNO == 1) {
                window.close();
            }
            else {
                history.go(-1);
            }
        }
    },
    
     /*
     * 功能：商品多图，左右移动
     * 参数：divId div ID
     *       px   每次移动的像素
     */
    scroll: function(divId, px){
    	jQuery("#"+divId).animate({left: "+="+px}, 1000);
    },
    /*
     * 功能：数量加减
     * 参数：amountId  inputid
     *       step   步长
     */
    amountPlusMinus: function(amountId,step){
     	var amount=jQuery("#"+amountId)[0];
      if (amount.value == "" || isNaN(amount.value)) {
       	amount.value =0;
      }
  		amount.value=parseInt(amount.value)+step;
  		if(parseInt(amount.value)<=0){
  			amount.value =1;
  		}
    },
	/*
     * 功能：关键词提交
     *	formId	组件id
     * 在 FrontProducts_detail02-d1_c1样式中使用
     */
	keywordSubmit:function(formId){
		 var theform=document.getElementById(formId);
		 theform.submit();
	},
	/*
     * 功能：关键词分拆
     *	formId	组件id
     * 在 FrontProducts_detail02-d1_c1样式中使用
     */
	setKeyWord:function(str,formId)
	{
		var theform = document.getElementById(formId);
		theform.keyword.value=str;
	}
};