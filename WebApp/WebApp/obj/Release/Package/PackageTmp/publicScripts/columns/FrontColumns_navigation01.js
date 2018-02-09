var FrontColumns_navigation01={
	currentColumn : 0,			//当前选中栏目的位置
 	isShowSecondColumn : "",		//是否显示二级导航
	compId : "",	//组件ID

	addClickEvent:function(){		//给一级导航栏目就点击事件
		$(".navMenu li").each(function(i){
			$(this).bind("click", function(){

				$("#columns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).removeClass("navMenubg"+FrontColumns_navigation01.currentColumn);
				$(this).addClass("navMenubg"+i);

				if(FrontColumns_navigation01.isShowSecondColumn.length > 0){
					$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).hide();
					$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+i).show();
				}

				FrontColumns_navigation01.currentColumn = i;
			});

		});
	},

	addMouseOverEvent:function(){			//给一级导航栏目增加鼠标悬停事件
		$(".navMenu li").each(function(i){
			$(this).bind("mouseover", function(){
				$("#columns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).removeClass("navMenubg"+FrontColumns_navigation01.currentColumn);
				$(this).addClass("navMenubg"+i);

				if(FrontColumns_navigation01.isShowSecondColumn.length > 0){
					$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).hide();
					$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+i).show();
				}
			});
		});
	},

	addMouseOutEvent:function(){		//给一级导航栏目增加鼠标移出事件
		$(".navMenu li").each(function(i){
			$(this).bind("mouseout", function(){
				$(this).removeClass("navMenubg"+i);
				$("#columns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).addClass("navMenubg"+FrontColumns_navigation01.currentColumn);

				if(FrontColumns_navigation01.isShowSecondColumn.length > 0){
					$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+i).hide();
					$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).show();
				}
			});
		});
	},

	setSelectedColumn:function(index){	//获取当前页面要选中的栏目的位置,默认是0
		var curColumn = this.getUrlParam(index);
		if(curColumn != null){
			this.currentColumn = curColumn;
		}
	},

	setFocusColumn: function(){		//给当前选中的一级栏目增加背景及显示其二级栏目
		$("#columns-"+FrontColumns_navigation01.compId+"-"+this.currentColumn).addClass("navMenubg"+this.currentColumn);
		if(this.isShowSecondColumn.length > 0){
			$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+this.currentColumn).show();
		}
	},

	getUrlParam:function(name){	//获取URL参数
      var   reg   =   new   RegExp("(^|&)"+   name   +"=([^&]*)(&|$)");
      var   r   =   window.location.toString().match(reg);
      if   (r!=null)   return   unescape(r[2]);   return   null;
  },

	init:function(compId, index, secondColumn){		//初始化.index:表示栏目位置的参数名称,secondColumn:是否显示二级栏目
		this.compId = compId;
		this.isShowSecondColumn = secondColumn;
		this.setSelectedColumn(compId+"-"+index);
		this.addClickEvent();
		this.addMouseOverEvent();
		this.addMouseOutEvent();

		this.setFocusColumn();
	},

	//导航扩展样式效果
	extEvents:function(compId, showSecond){
		var extCurrentColumn = this.getUrlParam(compId+"FirstColumnId");
		var secondColumnId = this.getUrlParam(compId+"SecondColumnId");

		if(extCurrentColumn == null){
			extCurrentColumn =  $("#"+compId+" ul.nav-first .first").attr("id");
		}else{
			extCurrentColumn = "columns"+extCurrentColumn;
		}
		if(secondColumnId == null){
			secondColumnId =  $("#"+compId+" #"+extCurrentColumn+" .nav-second .nav-sec-main ul li:first a").attr("id");
		}else{
			secondColumnId = "cols"+secondColumnId;
		}

		$("#"+compId+" #"+extCurrentColumn).addClass("current");
		$("#"+compId+" #"+secondColumnId).addClass("current-a");
		$("#"+compId+" #"+extCurrentColumn+"Sub").show();

		if(showSecond){
			 $("#"+compId+" ul.nav-first li[id^='columns']").hover(
				  function () {
				    if($(this).attr("id") != extCurrentColumn){
							$("#"+compId+" #"+extCurrentColumn).removeClass("current");
							$("#"+compId+" #"+extCurrentColumn+"Sub").hide();

							$(this).addClass("current");
							$("#"+compId+" #"+$(this).attr("id")+"Sub").show();
							if(!$(this).find(".nav-second .nav-sec-main a").hasClass("current-a")){
								$(this).find(".nav-second .nav-sec-main a:first").addClass("current-a")
							}
						}
				  },
				  function () {
						$(this).removeClass("current");
						$("#"+compId+" #"+$(this).attr("id")+"Sub").hide();

				    $("#"+compId+" #"+extCurrentColumn).addClass("current");
						$("#"+compId+" #"+extCurrentColumn+"Sub").show();
				  }
				);

				$("#"+compId+" ul.nav-first li[id^='columns']").click(function(){
					$("#"+compId+" #"+extCurrentColumn).removeClass("current");
					$("#"+compId+" #"+extCurrentColumn+"Sub").hide();
					$(this).addClass("current");
					$("#"+compId+" #"+$(this).attr("id")+"Sub").show();

					extCurrentColumn = $("#"+compId+" ul.nav-first li.current").attr("id");
			  });

				$("#"+compId+" ul.nav-first .nav-second .nav-sec-main a").click(function(){
					$(this).parent().parent().find("a").removeClass("current-a");
					$(this).addClass("current-a");

					var curSecId = $(this).parents(".nav-second").attr("id");
					if(curSecId !== extCurrentColumn+"Sub"){
						$("#"+compId+" #"+extCurrentColumn).removeClass("current");
						$("#"+compId+" #"+extCurrentColumn+"Sub").hide();
						extCurrentColumn = curSecId.substring(0, curSecId.length-3);
						$("#"+compId+" #"+extCurrentColumn).addClass("current");
						$("#"+compId+" #"+curSecId).show();
					}
			  });
		}else{
			 $("#"+compId+" ul.nav-first li[id^='columns']").hover(
				  function () {
				    if($(this).attr("id") != extCurrentColumn){
							$("#"+compId+" #"+extCurrentColumn).removeClass("current");
							$(this).addClass("current");
						}
				  },
				  function () {
						$(this).removeClass("current");
				    $("#"+compId+" #"+extCurrentColumn).addClass("current");
				  }
				);

				$("#"+compId+" ul.nav-first li[id^='columns']").click(function(){
					$("#"+compId+" #"+extCurrentColumn).removeClass("current");
					$(this).addClass("current");

					extCurrentColumn = $("#"+compId+" ul.nav-first li.current").attr("id");
			  });
		}
	},
	
	
	//F2样式的js效果
	//** All Levels Navigational Menu- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com
	//** Script Download/ instructions page: http://www.dynamicdrive.com/dynamicindex1/ddlevelsmenu/
	//** Usage Terms: http://www.dynamicdrive.com/notice.htm
	//** Current version: 2.2 See changelog.txt for details
	
	ddlevelsmenu : {
	
		enableshim: true, //enable IFRAME shim to prevent drop down menus from being hidden below SELECT or FLASH elements? (tip: disable if not in use, for efficiency)
		
		arrowpointers:{
			downarrow: ["../images/columns/arrow-down.gif", 11,7], //[path_to_down_arrow, arrowwidth, arrowheight]
			rightarrow: ["../images/columns/arrow-right.gif", 12,12], //[path_to_right_arrow, arrowwidth, arrowheight]
			showarrow: {toplevel: true, sublevel: true} //Show arrow images on top level items and sub level items, respectively?
		},
		hideinterval: 200, //delay in milliseconds before entire menu disappears onmouseout.
		effects: {enableswipe: true, enablefade: true, duration: 200},
		httpsiframesrc: "blank.htm", //If menu is run on a secure (https) page, the IFRAME shim feature used by the script should point to an *blank* page *within* the secure area to prevent an IE security prompt. Specify full URL to that page on your server (leave as is if not applicable).
		
		///No need to edit beyond here////////////////////
		
		topmenuids: [], //array containing ids of all the primary menus on the page
		topitems: {}, //object array containing all top menu item links
		subuls: {}, //object array containing all ULs
		lastactivesubul: {}, //object object containing info for last mouse out menu item's UL
		topitemsindex: -1,
		ulindex: -1,
		hidetimers: {}, //object array timer
		shimadded: false,
		nonFF: !/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent), //detect non FF browsers
		getoffset:function(what, offsettype){
			return (what.offsetParent)? what[offsettype]+this.getoffset(what.offsetParent, offsettype) : what[offsettype]
		},
		
		getoffsetof:function(el){
			el._offsets={left:this.getoffset(el, "offsetLeft"), top:this.getoffset(el, "offsetTop")}
		},
		
		getwindowsize:function(){
			this.docwidth=window.innerWidth? window.innerWidth-10 : this.standardbody.clientWidth-10
			this.docheight=window.innerHeight? window.innerHeight-15 : this.standardbody.clientHeight-18
		},
		
		gettopitemsdimensions:function(){
			for (var m=0; m<this.topmenuids.length; m++){
				var topmenuid=this.topmenuids[m]
				for (var i=0; i<this.topitems[topmenuid].length; i++){
					var header=this.topitems[topmenuid][i]
					var submenu=document.getElementById(header.getAttribute('rel'))
					header._dimensions={w:header.offsetWidth, h:header.offsetHeight, submenuw:submenu.offsetWidth, submenuh:submenu.offsetHeight}
				}
			}
		},
		
		isContained:function(m, e){
			var e=window.event || e
			var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
			while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
			if (c==m)
				return true
			else
				return false
		},
		
		addpointer:function(target, imgclass, imginfo, BeforeorAfter){
			var pointer=document.createElement("img")
			pointer.src=imginfo[0]
			pointer.style.width=imginfo[1]+"px"
			pointer.style.height=imginfo[2]+"px"
			if(imgclass=="FrontColumn_navigation01_rightarrowpointer"){
				pointer.style.left=target.offsetWidth-imginfo[2]-2+"px"
			}
			pointer.className=imgclass
			var target_firstEl=target.childNodes[target.firstChild.nodeType!=1? 1 : 0] //see if the first child element within A is a SPAN (found in sliding doors technique)
			if (target_firstEl && target_firstEl.tagName=="SPAN"){
				target=target_firstEl //arrow should be added inside this SPAN instead if found
			}
			if (BeforeorAfter=="before")
				target.insertBefore(pointer, target.firstChild)
			else
				target.appendChild(pointer)
		},
		
		css:function(el, targetclass, action){
			var needle=new RegExp("(^|\\s+)"+targetclass+"($|\\s+)", "ig")
			if (action=="check")
				return needle.test(el.className)
			else if (action=="remove")
				el.className=el.className.replace(needle, "")
			else if (action=="add" && !needle.test(el.className))
				el.className+=" "+targetclass
		},
		
		addshimmy:function(target){
			var shim=(!window.opera)? document.createElement("iframe") : document.createElement("div") //Opera 9.24 doesnt seem to support transparent IFRAMEs
			shim.className="FrontColumn_navigation01_ddiframeshim"
			shim.setAttribute("src", location.protocol=="https:"? this.httpsiframesrc : "about:blank")
			shim.setAttribute("frameborder", "0")
			target.appendChild(shim)
			try{
				shim.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
			}
			catch(e){}
			return shim
		},
		
		positionshim:function(header, submenu, dir, scrollX, scrollY){
			if (header._istoplevel){
				var scrollY=window.pageYOffset? window.pageYOffset : this.standardbody.scrollTop
				var topgap=header._offsets.top-scrollY
				var bottomgap=scrollY+this.docheight-header._offsets.top-header._dimensions.h
				if (topgap>0){
					this.shimmy.topshim.style.left=scrollX+"px"
					this.shimmy.topshim.style.top=scrollY+"px"
					this.shimmy.topshim.style.width="99%"
					this.shimmy.topshim.style.height=topgap+"px" //distance from top window edge to top of menu item
				}
				if (bottomgap>0){
					this.shimmy.bottomshim.style.left=scrollX+"px"
					this.shimmy.bottomshim.style.top=header._offsets.top + header._dimensions.h +"px"
					this.shimmy.bottomshim.style.width="99%"
					this.shimmy.bottomshim.style.height=bottomgap+"px" //distance from bottom of menu item to bottom window edge
				}
			}
		},
		
		hideshim:function(){
			this.shimmy.topshim.style.width=this.shimmy.bottomshim.style.width=0
			this.shimmy.topshim.style.height=this.shimmy.bottomshim.style.height=0
		},
		
		
		buildmenu:function(mainmenuid, header, submenu, submenupos, istoplevel, dir){
			header._master=mainmenuid //Indicate which top menu this header is associated with
			header._pos=submenupos //Indicate pos of sub menu this header is associated with
			header._istoplevel=istoplevel
			if (istoplevel){
				this.addEvent(header, function(e){
				FrontColumns_navigation01.ddlevelsmenu.hidemenu(FrontColumns_navigation01.ddlevelsmenu.subuls[this._master][parseInt(this._pos)])
				}, "click")
			}
			this.subuls[mainmenuid][submenupos]=submenu
			header._dimensions={w:header.offsetWidth, h:header.offsetHeight, submenuw:submenu.offsetWidth, submenuh:submenu.offsetHeight}
			this.getoffsetof(header)
			//submenu.style.left=0
 			//submenu.style.top=0
			submenu.style.visibility="hidden"
			this.addEvent(header, function(e){ //mouseover event
				if (!FrontColumns_navigation01.ddlevelsmenu.isContained(this, e)){
					var submenu=FrontColumns_navigation01.ddlevelsmenu.subuls[this._master][parseInt(this._pos)]
					if (this._istoplevel){
						FrontColumns_navigation01.ddlevelsmenu.css(this, "selected", "add")
					clearTimeout(FrontColumns_navigation01.ddlevelsmenu.hidetimers[this._master][this._pos])
					}
					FrontColumns_navigation01.ddlevelsmenu.getoffsetof(header)
					var scrollX=window.pageXOffset? window.pageXOffset : FrontColumns_navigation01.ddlevelsmenu.standardbody.scrollLeft
					var scrollY=window.pageYOffset? window.pageYOffset : FrontColumns_navigation01.ddlevelsmenu.standardbody.scrollTop
					var submenurightedge=this._offsets.left + this._dimensions.submenuw + (this._istoplevel && dir=="topbar"? 0 : this._dimensions.w)
					var submenubottomedge=this._offsets.top + this._dimensions.submenuh
					//Sub menu starting left position
					var menuleft=(this._istoplevel? this._offsets.left + (dir=="sidebar"? this._dimensions.w : 0) : this._dimensions.w)
					if (submenurightedge-scrollX>FrontColumns_navigation01.ddlevelsmenu.docwidth){
						menuleft+= -this._dimensions.submenuw + (this._istoplevel && dir=="topbar" ? this._dimensions.w : -this._dimensions.w)
					}
					submenu.style.left=menuleft+"px"
					//Sub menu starting top position
					var menutop=(this._istoplevel? this._offsets.top + (dir=="sidebar"? 0 : this._dimensions.h) : this.offsetTop)
					if (submenubottomedge-scrollY>FrontColumns_navigation01.ddlevelsmenu.docheight){ //no room downwards?
						if (this._dimensions.submenuh<this._offsets.top+(dir=="sidebar"? this._dimensions.h : 0)-scrollY){ //move up?
							menutop+= - this._dimensions.submenuh + (this._istoplevel && dir=="topbar"? -this._dimensions.h : this._dimensions.h)
						}
						else{ //top of window edge
							menutop+= -(this._offsets.top-scrollY) + (this._istoplevel && dir=="topbar"? -this._dimensions.h : 0)
						}
					}
					submenu.style.top=menutop+"px"
					if (FrontColumns_navigation01.ddlevelsmenu.enableshim && (FrontColumns_navigation01.ddlevelsmenu.effects.enableswipe==false || FrontColumns_navigation01.ddlevelsmenu.nonFF)){ //apply shim immediately only if animation is turned off, or if on, in non FF2.x browsers
						FrontColumns_navigation01.ddlevelsmenu.positionshim(header, submenu, dir, scrollX, scrollY)
					}
					else{
						submenu.FFscrollInfo={x:scrollX, y:scrollY}
					}
					FrontColumns_navigation01.ddlevelsmenu.showmenu(header, submenu, dir)
				}
			}, "mouseover")
			this.addEvent(header, function(e){ //mouseout event
				var submenu=FrontColumns_navigation01.ddlevelsmenu.subuls[this._master][parseInt(this._pos)]
				if (this._istoplevel){
					if (!FrontColumns_navigation01.ddlevelsmenu.isContained(this, e) && !FrontColumns_navigation01.ddlevelsmenu.isContained(submenu, e)) //hide drop down ul if mouse moves out of menu bar item but not into drop down ul itself
						FrontColumns_navigation01.ddlevelsmenu.hidemenu(submenu)
				}
				else if (!this._istoplevel && !FrontColumns_navigation01.ddlevelsmenu.isContained(this, e)){
					FrontColumns_navigation01.ddlevelsmenu.hidemenu(submenu)
				}
		
			}, "mouseout")
		},
		
		setopacity:function(el, value){
			el.style.opacity=value
			if (typeof el.style.opacity!="string"){ //if it's not a string (ie: number instead), it means property not supported
				el.style.MozOpacity=value
				if (el.filters){
					el.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+ value*100 +")"
				}
			}
		},
		
		showmenu:function(header, submenu, dir){
			if (this.effects.enableswipe || this.effects.enablefade){
				if (this.effects.enableswipe){
					var endpoint=(header._istoplevel && dir=="topbar")? header._dimensions.submenuh : header._dimensions.submenuw
					submenu.style.width=submenu.style.height=0
					submenu.style.overflow="hidden"
				}
				if (this.effects.enablefade){
					this.setopacity(submenu, 0) //set opacity to 0 so menu appears hidden initially
				}
				submenu._curanimatedegree=0
				submenu.style.visibility="visible"
				clearInterval(submenu._animatetimer)
				submenu._starttime=new Date().getTime() //get time just before animation is run
				submenu._animatetimer=setInterval(function(){FrontColumns_navigation01.ddlevelsmenu.revealmenu(header, submenu, endpoint, dir)}, 10)
			}
			else{
				submenu.style.visibility="visible"
			}
		},
		
		revealmenu:function(header, submenu, endpoint, dir){
			var elapsed=new Date().getTime()-submenu._starttime //get time animation has run
			if (elapsed<this.effects.duration){
				if (this.effects.enableswipe){
					if (submenu._curanimatedegree==0){ //reset either width or height of sub menu to "auto" when animation begins
						submenu.style[header._istoplevel && dir=="topbar"? "width" : "height"]="auto"
					}
					submenu.style[header._istoplevel && dir=="topbar"? "height" : "width"]=(submenu._curanimatedegree*endpoint)+"px"
				}
				if (this.effects.enablefade){
					this.setopacity(submenu, submenu._curanimatedegree)
				}
			}
			else{
				clearInterval(submenu._animatetimer)
				if (this.effects.enableswipe){
					submenu.style.width="auto"
					submenu.style.height="auto"
					submenu.style.overflow="visible"
				}
				if (this.effects.enablefade){
					this.setopacity(submenu, 1)
					submenu.style.filter=""
				}
				if (this.enableshim && submenu.FFscrollInfo) //if this is FF browser (meaning shim hasn't been applied yet
					this.positionshim(header, submenu, dir, submenu.FFscrollInfo.x, submenu.FFscrollInfo.y)
			}
			submenu._curanimatedegree=(1-Math.cos((elapsed/this.effects.duration)*Math.PI)) / 2
		},
		
		hidemenu:function(submenu){
			if (typeof submenu._pos!="undefined"){ //if submenu is outermost UL drop down menu
				this.css(this.topitems[submenu._master][parseInt(submenu._pos)], "selected", "remove")
				if (this.enableshim)
					this.hideshim()
			}
			clearInterval(submenu._animatetimer)
			//submenu.style.left=0
			//submenu.style.top="-1000px"
			submenu.style.visibility="hidden"
		},
		
		
		addEvent:function(target, functionref, tasktype) {
			if (target.addEventListener)
				target.addEventListener(tasktype, functionref, false);
			else if (target.attachEvent)
				target.attachEvent('on'+tasktype, function(){return functionref.call(target, window.event)});
		},
		
		domready:function(functionref){ //based on code from the jQuery library
			if (dd_domreadycheck){
				functionref()
				return
			}
			// Mozilla, Opera and webkit nightlies currently support this event
			if (document.addEventListener) {
				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", function(){
					document.removeEventListener("DOMContentLoaded", arguments.callee, false )
					functionref();
					dd_domreadycheck=true
				}, false )
			}
			else if (document.attachEvent){
				// If IE and not an iframe
				// continually check to see if the document is ready
				if ( document.documentElement.doScroll && window == window.top) (function(){
					if (dd_domreadycheck){
						functionref()
						return
					}
					try{
						// If IE is used, use the trick by Diego Perini
						// http://javascript.nwbox.com/IEContentLoaded/
						document.documentElement.doScroll("left")
					}catch(error){
						setTimeout( arguments.callee, 0)
						return;
					}
					//and execute any waiting functions
					functionref();
					dd_domreadycheck=true
				})();
			}
			if (document.attachEvent && parent.length>0) //account for page being in IFRAME, in which above doesn't fire in IE
				this.addEvent(window, function(){functionref()}, "load");
		},
		
		
		init:function(mainmenuid, dir){
			this.standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body
			this.topitemsindex=-1
			this.ulindex=-1
			this.topmenuids.push(mainmenuid)
			this.topitems[mainmenuid]=[] //declare array on object
			this.subuls[mainmenuid]=[] //declare array on object
			this.hidetimers[mainmenuid]=[] //declare hide entire menu timer
			if (this.enableshim && !this.shimadded){
				this.shimmy={}
				this.shimmy.topshim=this.addshimmy(document.body) //create top iframe shim obj
				this.shimmy.bottomshim=this.addshimmy(document.body) //create bottom iframe shim obj
				this.shimadded=true
			}
			var menubar=document.getElementById(mainmenuid)
			var alllinks=menubar.getElementsByTagName("a")
			this.getwindowsize()
			for (var i=0; i<alllinks.length; i++){
				if (alllinks[i].getAttribute('rel')){
					this.topitemsindex++
					this.ulindex++
					var menuitem=alllinks[i]
					this.topitems[mainmenuid][this.topitemsindex]=menuitem //store ref to main menu links
					var dropul=document.getElementById(menuitem.getAttribute('rel'))
					//document.body.appendChild(dropul) //move main ULs to end of document
					dropul.style.zIndex=2000 //give drop down menus a high z-index
					dropul._master=mainmenuid  //Indicate which main menu this main UL is associated with
					dropul._pos=this.topitemsindex //Indicate which main menu item this main UL is associated with
					this.addEvent(dropul, function(){FrontColumns_navigation01.ddlevelsmenu.hidemenu(this)}, "click")
					var arrowclass=(dir=="sidebar")? "FrontColumn_navigation01_rightarrowpointer" : "FrontColumn_navigation01_downarrowpointer"
					var arrowpointer=(dir=="sidebar")? this.arrowpointers.rightarrow : this.arrowpointers.downarrow
					if (this.arrowpointers.showarrow.toplevel)
						this.addpointer(menuitem, arrowclass, arrowpointer, (dir=="sidebar")? "before" : "after")
					this.buildmenu(mainmenuid, menuitem, dropul, this.ulindex, true, dir) //build top level menu
					dropul.onmouseover=function(){
						clearTimeout(FrontColumns_navigation01.ddlevelsmenu.hidetimers[this._master][this._pos])
					}
					this.addEvent(dropul, function(e){ //hide menu if mouse moves out of main UL element into open space
						if (!FrontColumns_navigation01.ddlevelsmenu.isContained(this, e) && !FrontColumns_navigation01.ddlevelsmenu.isContained(FrontColumns_navigation01.ddlevelsmenu.topitems[this._master][parseInt(this._pos)], e)){
							var dropul=this
							if (FrontColumns_navigation01.ddlevelsmenu.enableshim)
								FrontColumns_navigation01.ddlevelsmenu.hideshim()
							FrontColumns_navigation01.ddlevelsmenu.hidetimers[this._master][this._pos]=setTimeout(function(){
								FrontColumns_navigation01.ddlevelsmenu.hidemenu(dropul)
							}, FrontColumns_navigation01.ddlevelsmenu.hideinterval)
						}
					}, "mouseout")
					var subuls=dropul.getElementsByTagName("ul")
					for (var c=0; c<subuls.length; c++){
						this.ulindex++
						var parentli=subuls[c].parentNode
						if (this.arrowpointers.showarrow.sublevel)
							this.addpointer(parentli.getElementsByTagName("a")[0], "FrontColumn_navigation01_rightarrowpointer", this.arrowpointers.rightarrow, "before")
						this.buildmenu(mainmenuid, parentli, subuls[c], this.ulindex, false, dir) //build sub level menus
					}
				}
			} //end for loop
			this.addEvent(window, function(){FrontColumns_navigation01.ddlevelsmenu.getwindowsize(); FrontColumns_navigation01.ddlevelsmenu.gettopitemsdimensions()}, "resize")
		}
	},
	
	
	//扩展样式2js效果
	//** All Levels Navigational Menu- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com
	//** Script Download/ instructions page: http://www.dynamicdrive.com/dynamicindex1/ddlevelsmenu/
	//** Usage Terms: http://www.dynamicdrive.com/notice.htm
	
	//** Current version: 2.2 See changelog.txt for details
	d2ddlevelsmenu:{
		enableshim: false, //enable IFRAME shim to prevent drop down menus from being hidden below SELECT or FLASH elements? (tip: disable if not in use, for efficiency)
		
		arrowpointers:{
			downarrow: ["../images/columns/arrow-down.gif", 11,7], //[path_to_down_arrow, arrowwidth, arrowheight]
			rightarrow: ["../images/columns/nav-arrow-03.gif", 7,10], //[path_to_right_arrow, arrowwidth, arrowheight]
			showarrow: {toplevel: false, sublevel: true} //Show arrow images on top level items and sub level items, respectively?
		},
		hideinterval: 200, //delay in milliseconds before entire menu disappears onmouseout.
		effects: {enableswipe: true, enablefade: true, duration: 200},
		httpsiframesrc: "blank.htm", //If menu is run on a secure (https) page, the IFRAME shim feature used by the script should point to an *blank* page *within* the secure area to prevent an IE security prompt. Specify full URL to that page on your server (leave as is if not applicable).
		
		///No need to edit beyond here////////////////////
		
		topmenuids: [], //array containing ids of all the primary menus on the page
		topitems: {}, //object array containing all top menu item links
		subuls: {}, //object array containing all ULs
		lastactivesubul: {}, //object object containing info for last mouse out menu item's UL
		topitemsindex: -1,
		ulindex: -1,
		hidetimers: {}, //object array timer
		shimadded: false,
		nonFF: !/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent), //detect non FF browsers
		getoffset:function(what, offsettype){
			return (what.offsetParent)? what[offsettype]+this.getoffset(what.offsetParent, offsettype) : what[offsettype]
		},
		
		getoffsetof:function(el){
			el._offsets={left:this.getoffset(el, "offsetLeft"), top:this.getoffset(el, "offsetTop")}
		},
		
		getwindowsize:function(){
			this.docwidth=window.innerWidth? window.innerWidth-10 : this.standardbody.clientWidth-10
			this.docheight=window.innerHeight? window.innerHeight-15 : this.standardbody.clientHeight-18
		},
		
		gettopitemsdimensions:function(){
			for (var m=0; m<this.topmenuids.length; m++){
				var topmenuid=this.topmenuids[m]
				for (var i=0; i<this.topitems[topmenuid].length; i++){
					var header=this.topitems[topmenuid][i]
					var submenu=document.getElementById(header.getAttribute('rel'))
					header._dimensions={w:header.offsetWidth, h:header.offsetHeight, submenuw:submenu.offsetWidth, submenuh:submenu.offsetHeight}
				}
			}
		},
		
		isContained:function(m, e){
			var e=window.event || e
			var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
			while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
			if (c==m)
				return true
			else
				return false
		},
		
		addpointer:function(target, imgclass, imginfo, BeforeorAfter){
			var pointer=document.createElement("img")
			pointer.src=imginfo[0]
			pointer.style.width=imginfo[1]+"px"
			pointer.style.height=imginfo[2]+"px"
			if(imgclass=="rightarrowpointer"){
				pointer.style.left=target.offsetWidth-imginfo[2]-2+"px"
			}
			pointer.className=imgclass
			var target_firstEl=target.childNodes[target.firstChild.nodeType!=1? 1 : 0] //see if the first child element within A is a SPAN (found in sliding doors technique)
			if (target_firstEl && target_firstEl.tagName=="SPAN"){
				target=target_firstEl //arrow should be added inside this SPAN instead if found
			}
			if (BeforeorAfter=="before")
				target.insertBefore(pointer, target.firstChild)
			else
				target.appendChild(pointer)
		},
		
		css:function(el, targetclass, action){
			var needle=new RegExp("(^|\\s+)"+targetclass+"($|\\s+)", "ig")
			if (action=="check")
				return needle.test(el.className)
			else if (action=="remove")
				el.className=el.className.replace(needle, "")
			else if (action=="add" && !needle.test(el.className))
				el.className+=" "+targetclass;
				
		},
		
		addshimmy:function(target){
			var shim=(!window.opera)? document.createElement("iframe") : document.createElement("div") //Opera 9.24 doesnt seem to support transparent IFRAMEs
			shim.className="ddiframeshim"
			shim.setAttribute("src", location.protocol=="https:"? this.httpsiframesrc : "about:blank")
			shim.setAttribute("frameborder", "0")
			target.appendChild(shim)
			try{
				shim.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
			}
			catch(e){}
			return shim
		},
		
		positionshim:function(header, submenu, dir, scrollX, scrollY){
			if (header._istoplevel){
				var scrollY=window.pageYOffset? window.pageYOffset : this.standardbody.scrollTop
				var topgap=header._offsets.top-scrollY
				var bottomgap=scrollY+this.docheight-header._offsets.top-header._dimensions.h
				if (topgap>0){
					this.shimmy.topshim.style.left=scrollX+"px"
					this.shimmy.topshim.style.top=scrollY+"px"
					this.shimmy.topshim.style.width="99%"
					this.shimmy.topshim.style.height=topgap+"px" //distance from top window edge to top of menu item
				}
				if (bottomgap>0){
					this.shimmy.bottomshim.style.left=scrollX+"px"
					this.shimmy.bottomshim.style.top=header._offsets.top + header._dimensions.h +"px"
					this.shimmy.bottomshim.style.width="99%"
					this.shimmy.bottomshim.style.height=bottomgap+"px" //distance from bottom of menu item to bottom window edge
				}
			}
		},
		
		hideshim:function(){
			this.shimmy.topshim.style.width=this.shimmy.bottomshim.style.width=0
			this.shimmy.topshim.style.height=this.shimmy.bottomshim.style.height=0
		},
		
		
		buildmenu:function(mainmenuid, header, submenu, submenupos, istoplevel, dir){
			header._master=mainmenuid //Indicate which top menu this header is associated with
			header._pos=submenupos //Indicate pos of sub menu this header is associated with
			header._istoplevel=istoplevel
			if (istoplevel){
				this.addEvent(header, function(e){
				FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(FrontColumns_navigation01.d2ddlevelsmenu.subuls[this._master][parseInt(this._pos)])
				}, "click")
			}
			this.subuls[mainmenuid][submenupos]=submenu
			header._dimensions={w:header.offsetWidth, h:header.offsetHeight, submenuw:submenu.offsetWidth, submenuh:submenu.offsetHeight}
			this.getoffsetof(header)
			//submenu.style.left=0
			//submenu.style.top=0
			submenu.style.visibility="hidden"
			this.addEvent(header, function(e){ //mouseover event
				if (!FrontColumns_navigation01.d2ddlevelsmenu.isContained(this, e)){
					var submenu=FrontColumns_navigation01.d2ddlevelsmenu.subuls[this._master][parseInt(this._pos)]
					if (this._istoplevel){
						FrontColumns_navigation01.d2ddlevelsmenu.css(this, "selected", "add")
					clearTimeout(FrontColumns_navigation01.d2ddlevelsmenu.hidetimers[this._master][this._pos])
					}
					FrontColumns_navigation01.d2ddlevelsmenu.getoffsetof(header)
					var scrollX=window.pageXOffset? window.pageXOffset : FrontColumns_navigation01.d2ddlevelsmenu.standardbody.scrollLeft
					var scrollY=window.pageYOffset? window.pageYOffset : FrontColumns_navigation01.d2ddlevelsmenu.standardbody.scrollTop
					var submenurightedge=this._offsets.left + this._dimensions.submenuw + (this._istoplevel && dir=="topbar"? 0 : this._dimensions.w)
					var submenubottomedge=this._offsets.top + this._dimensions.submenuh
					//Sub menu starting left position
					var menuleft=(this._istoplevel? this._offsets.left + (dir=="sidebar"? this._dimensions.w : 0) : this._dimensions.w)
					if (submenurightedge-scrollX>FrontColumns_navigation01.d2ddlevelsmenu.docwidth){
						menuleft+= -this._dimensions.submenuw + (this._istoplevel && dir=="topbar" ? this._dimensions.w : -this._dimensions.w)
					}
					submenu.style.left=menuleft+"px"
					//Sub menu starting top position
					var menutop=(this._istoplevel? this._offsets.top + (dir=="sidebar"? 0 : this._dimensions.h) : this.offsetTop)
					if (submenubottomedge-scrollY>FrontColumns_navigation01.d2ddlevelsmenu.docheight){ //no room downwards?
						if (this._dimensions.submenuh<this._offsets.top+(dir=="sidebar"? this._dimensions.h : 0)-scrollY){ //move up?
							menutop+= - this._dimensions.submenuh + (this._istoplevel && dir=="topbar"? -this._dimensions.h : this._dimensions.h)
						}
						else{ //top of window edge
							menutop+= -(this._offsets.top-scrollY) + (this._istoplevel && dir=="topbar"? -this._dimensions.h : 0)
						}
					}
					submenu.style.top=menutop+"px"
					if (FrontColumns_navigation01.d2ddlevelsmenu.enableshim && (FrontColumns_navigation01.d2ddlevelsmenu.effects.enableswipe==false || FrontColumns_navigation01.d2ddlevelsmenu.nonFF)){ //apply shim immediately only if animation is turned off, or if on, in non FF2.x browsers
						FrontColumns_navigation01.d2ddlevelsmenu.positionshim(header, submenu, dir, scrollX, scrollY)
					}
					else{
						submenu.FFscrollInfo={x:scrollX, y:scrollY}
					}
					FrontColumns_navigation01.d2ddlevelsmenu.showmenu(header, submenu, dir)
				}
			}, "mouseover")
			this.addEvent(header, function(e){ //mouseout event
				var submenu=FrontColumns_navigation01.d2ddlevelsmenu.subuls[this._master][parseInt(this._pos)]
				if (this._istoplevel){
					if (!FrontColumns_navigation01.d2ddlevelsmenu.isContained(this, e) && !FrontColumns_navigation01.d2ddlevelsmenu.isContained(submenu, e)) //hide drop down ul if mouse moves out of menu bar item but not into drop down ul itself
						FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(submenu)
				}
				else if (!this._istoplevel && !FrontColumns_navigation01.d2ddlevelsmenu.isContained(this, e)){
					FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(submenu)
				}
		
			}, "mouseout")
		},
		
		setopacity:function(el, value){
			el.style.opacity=value
			if (typeof el.style.opacity!="string"){ //if it's not a string (ie: number instead), it means property not supported
				el.style.MozOpacity=value
				if (el.filters){
					el.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+ value*100 +")"
				}
			}
		},
		
		showmenu:function(header, submenu, dir){
			if (this.effects.enableswipe || this.effects.enablefade){
				if (this.effects.enableswipe){
					var endpoint=(header._istoplevel && dir=="topbar")? header._dimensions.submenuh : header._dimensions.submenuw
					submenu.style.width=submenu.style.height=0
					submenu.style.overflow="hidden"
				}
				if (this.effects.enablefade){
					this.setopacity(submenu, 0) //set opacity to 0 so menu appears hidden initially
				}
				submenu._curanimatedegree=0
				submenu.style.visibility="visible"
				clearInterval(submenu._animatetimer)
				submenu._starttime=new Date().getTime() //get time just before animation is run
				submenu._animatetimer=setInterval(function(){FrontColumns_navigation01.d2ddlevelsmenu.revealmenu(header, submenu, endpoint, dir)}, 10)
			}
			else{
				submenu.style.visibility="visible"
			}
		},
		
		revealmenu:function(header, submenu, endpoint, dir){
			var elapsed=new Date().getTime()-submenu._starttime //get time animation has run
			if (elapsed<this.effects.duration){
				if (this.effects.enableswipe){
					if (submenu._curanimatedegree==0){ //reset either width or height of sub menu to "auto" when animation begins
						submenu.style[header._istoplevel && dir=="topbar"? "width" : "height"]="auto"
					}
					submenu.style[header._istoplevel && dir=="topbar"? "height" : "width"]=(submenu._curanimatedegree*endpoint)+"px"
				}
				if (this.effects.enablefade){
					this.setopacity(submenu, submenu._curanimatedegree)
				}
			}
			else{
				clearInterval(submenu._animatetimer)
				if (this.effects.enableswipe){
					submenu.style.width="auto"
					submenu.style.height="auto"
					submenu.style.overflow="visible"
				}
				if (this.effects.enablefade){
					this.setopacity(submenu, 1)
					submenu.style.filter=""
				}
				if (this.enableshim && submenu.FFscrollInfo) //if this is FF browser (meaning shim hasn't been applied yet
					this.positionshim(header, submenu, dir, submenu.FFscrollInfo.x, submenu.FFscrollInfo.y)
			}
			submenu._curanimatedegree=(1-Math.cos((elapsed/this.effects.duration)*Math.PI)) / 2
		},
		
		hidemenu:function(submenu){
			if (typeof submenu._pos!="undefined"){ //if submenu is outermost UL drop down menu
				this.css(this.topitems[submenu._master][parseInt(submenu._pos)], "selected", "remove")
				if (this.enableshim)
					this.hideshim()
			}
			clearInterval(submenu._animatetimer)
			//submenu.style.left=0
			//submenu.style.top="-1000px"
			submenu.style.visibility="hidden"
		},
		
		
		addEvent:function(target, functionref, tasktype) {
			if (target.addEventListener)
				target.addEventListener(tasktype, functionref, false);
			else if (target.attachEvent)
				target.attachEvent('on'+tasktype, function(){return functionref.call(target, window.event)});
		},
		
		init:function(mainmenuid, dir){
			this.standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body
			this.topitemsindex=-1
			this.ulindex=-1
			this.topmenuids.push(mainmenuid)
			this.topitems[mainmenuid]=[] //declare array on object
			this.subuls[mainmenuid]=[] //declare array on object
			this.hidetimers[mainmenuid]=[] //declare hide entire menu timer
			if (this.enableshim && !this.shimadded){
				this.shimmy={}
				this.shimmy.topshim=this.addshimmy(document.body) //create top iframe shim obj
				this.shimmy.bottomshim=this.addshimmy(document.body) //create bottom iframe shim obj
				this.shimadded=true
			}
			var menubar=document.getElementById(mainmenuid)
			var alllinks=menubar.getElementsByTagName("a")
			this.getwindowsize()
			for (var i=0; i<alllinks.length; i++){
				if (alllinks[i].getAttribute('rel')){
					this.topitemsindex++
					this.ulindex++
					var menuitem=alllinks[i]
					this.topitems[mainmenuid][this.topitemsindex]=menuitem //store ref to main menu links
					var dropul=document.getElementById(menuitem.getAttribute('rel'))
					//document.body.appendChild(dropul) //move main ULs to end of document
					dropul.style.zIndex=2000 //give drop down menus a high z-index
					dropul._master=mainmenuid  //Indicate which main menu this main UL is associated with
					dropul._pos=this.topitemsindex //Indicate which main menu item this main UL is associated with
					this.addEvent(dropul, function(){FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(this)}, "click")
					var arrowclass=(dir=="sidebar")? "rightarrowpointer" : "downarrowpointer"
					var arrowpointer=(dir=="sidebar")? this.arrowpointers.rightarrow : this.arrowpointers.downarrow
					if (this.arrowpointers.showarrow.toplevel)
						this.addpointer(menuitem, arrowclass, arrowpointer, (dir=="sidebar")? "before" : "after")
					this.buildmenu(mainmenuid, menuitem, dropul, this.ulindex, true, dir) //build top level menu
					dropul.onmouseover=function(){
						clearTimeout(FrontColumns_navigation01.d2ddlevelsmenu.hidetimers[this._master][this._pos])
					}
					this.addEvent(dropul, function(e){ //hide menu if mouse moves out of main UL element into open space
						if (!FrontColumns_navigation01.d2ddlevelsmenu.isContained(this, e) && !FrontColumns_navigation01.d2ddlevelsmenu.isContained(FrontColumns_navigation01.d2ddlevelsmenu.topitems[this._master][parseInt(this._pos)], e)){
							var dropul=this
							if (FrontColumns_navigation01.d2ddlevelsmenu.enableshim)
								FrontColumns_navigation01.d2ddlevelsmenu.hideshim()
							FrontColumns_navigation01.d2ddlevelsmenu.hidetimers[this._master][this._pos]=setTimeout(function(){
								FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(dropul)
							}, FrontColumns_navigation01.d2ddlevelsmenu.hideinterval)
						}
					}, "mouseout")
					var subuls=dropul.getElementsByTagName("ul")
					for (var c=0; c<subuls.length; c++){
						this.ulindex++
						var parentli=subuls[c].parentNode
						if (this.arrowpointers.showarrow.sublevel)
							this.addpointer(parentli.getElementsByTagName("a")[0], "rightarrowpointer", this.arrowpointers.rightarrow, "before")
						this.buildmenu(mainmenuid, parentli, subuls[c], this.ulindex, false, dir) //build sub level menus
					}
				}
			} //end for loop
			this.addEvent(window, function(){FrontColumns_navigation01.d2ddlevelsmenu.getwindowsize(); FrontColumns_navigation01.d2ddlevelsmenu.gettopitemsdimensions()}, "resize")
		}
	
	},
	
 /*******************************************************************************
 * author：郭金哲 
 * date: 2011-4-18 
 * explain：数商五级导航菜单
 ******************************************************************************/
	
	nativeMenu : function(menuid) {

		// 浏览器可视窗口宽度
		var _windowWidth;

		jQuery(document).ready(function($) {
			_windowWidth = screen.width ;

			// 取得div下所有的ul
			var $mainmenu = $("#" + menuid + ">ul")
			var $headers = $mainmenu.find("ul").parent()

			// 对ul进行迭代
			$headers.each(function(i) {
				var $curobj = $(this)
				var $subul = $(this).find('ul:eq(0)')
				this._dimensions = {
					w : this.offsetWidth,
					h : this.offsetHeight,
					subulw : $subul.outerWidth(),
					subulh : $subul.outerHeight()
				}

				// 是否是顶级菜单
				this.istopheader = $curobj.parents("ul").length == 1
						? true
						: false

				$curobj.hover(function(e) {
					var $targetul = $(this).children("ul:eq(0)")
					_offsets = {
						left : $(this).offset().left,
						top : $(this).offset().top
					}

					// 一级菜单添加高亮显示
					if ($(this).parents("ul").length == 1)
						$(this).attr("class", "current");
					var menuleft = this.istopheader ? 0 : this._dimensions.w

					// 当前LI是否有下一级菜单 如有则添加下一级 并判断下一级方向
					var $libul = $targetul.find("li");
					$libul.each(function(i) {
						if ($(this).children("ul").length != 0) {
							if (_offsets.left + menuleft
									+ this._dimensions.subulw * 2 > _windowWidth) {
								$(this).children("a").attr("class", "has-left");
							} else {
								$(this).children("a")
										.attr("class", "has-right");
							}
						}
					})

					// 是否是二级菜单折向还是多级菜单折向
					if (_offsets.left + menuleft + this._dimensions.subulw * 2 > _windowWidth) {
						$targetul.addClass($targetul.parents("ul").length == 1
								|| $targetul.parents("ul").attr("class")
										.indexOf("left-slid") != -1
								? "left-slid"
								: "left-forward");
					}

					// 当前LI添加层级关系
					$(this).attr(
							"style",
							$targetul.parents("ul").length == 1
									? "position:relative;z-index:12;"
									: "position:relative;");

					/***********************************************************
					 * 子菜单的弹出方向根据父级菜单的弹出方式弹出添加current
					 **********************************************************/
					var ulclass = $(this).children("a").attr("class");
					if(ulclass!=undefined){
					if (ulclass.indexOf("left") != -1) {
						$(this).children("a").addClass(" left-current")
					} else if (ulclass.indexOf("right") != -1) {
						$(this).children("a").addClass(" right-current")
					}}
					// 直接显示当前ul

					$(this).find("ul").attr("style", "visibility:visible");
					$(this).children("ul:eq(0)").find("ul").attr("style",
							"visibility:hidden");
				},

				function(e) {
					$(this).children("a").removeClass("right-current");
					$(this).children("a").removeClass("left-current");
					$(this).removeClass("current");
					$(this).find("ul").attr("style", "visibility:hidden");
				})
			})
		})
	}

	
}

$(document).ready(function(){
	var timerId = null;
	function itemShow(){
		if (timerId) return;
		timerId = setInterval(function(){
			$("#feature li.current a span").animate({top: "-55px" }, "fast");
			$("#feature li.current a p").animate({top: "-55px" }, "fast");
		}, 200);
	}
	function itemHide(){
		if (!timerId) return;
		$("#feature li.current a span").animate({top: "0px" }, "fast");
		$("#feature li.current a p").animate({top: "0px" }, "fast");
		$("#feature li.current").removeClass("current");
		clearInterval(timerId);
		timerId = null;
	}
	$("#feature li").hover(function(){
		$(this).addClass("current");
		itemShow();
	}, itemHide);
});