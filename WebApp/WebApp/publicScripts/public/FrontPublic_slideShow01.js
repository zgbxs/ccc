
var FrontPublic_slideShow01 = function ()
{
    //变量初始化
    this.ce_slide_effect_style = null; //展示效果类型 1:左右移动 2：右左移动 3：上下移动 4：下上移动 5：渐隐切换
    this.ce_slide_index = 0; //文章索引值存储器
    this.ce_slide_pic_temple = null; //内容临时存储器
    this.ce_slide_open_type = null; //链接打开方式
    this.ce_slide_show_title = null; //是否显示标题 1:显示 0:不显示
    this.ce_slide_show_content = null; //是否显示内容 1:显示 0：不显示
    this.ce_slide_tag_style = null; //展示样式类型 0:缩略图展示 1:纯文字标签 
    this.ce_slide_recursion_times = null; //轮播延时时间
    this.ce_slide_id = ""; // 幻灯片块唯一ID
    this.ce_requestDataFilePath = "";
    this.ce_slide_settimeout = null;
    this.ce_slide_autoPlay = null; //是否自动播放 0:不自动播放 1:自动播放
    this.ce_slide_totle = null; //幻灯片总数



    //UI界面参数 所有UI参数单位为px
    this.ce_slide_img_width = null; //主图宽度
    this.ce_slide_img_height = null; //主图高度
    this.ce_slide_thumbnail_width = null; //缩略图宽度
    this.ce_slide_thumbnail_height = null; //缩略图高度
    this.ce_slide_tag_text_width = 16; //幻灯片数字页签宽度
    this.ce_slide_tag_text_height = 16; //幻灯片数字页签高度
    this.ce_slide_info_mark_height = 60; //文章信息区遮罩层高度
    this.ce_slide_thumbnail_max_width = 0; //缩略图列表总长度
    this.ce_slide_thumbnail_show_width = 0; //展示区域宽度
    this.ce_slide_thumbnail_pages = 1; //幻灯片页数
    this.ce_slide_thumbnail_groups = 0; //幻灯片分页组宽度
    this.ce_slide_thumbnail_tmp = 0; //翻页计数器


    //数据容器
    this.ce_slide_contes_obj = Object(); //内容数据对象
    this.ce_slide_imgs = new Array(); //主图数据
    this.ce_slide_imgs_hrefs = new Array(); //文章链接数据
    this.ce_slide_thumbnails = new Array(); //缩略图数据
    this.ce_slide_titles = new Array(); //文章标题数据
    this.ce_slide_memos = new Array(); //文章摘要数据

    //DOM对象数据
    this.ce_slide_frame = null; //幻灯片主体对象
    this.ce_slide_contente = null; //幻灯片主区域对象
    this.ce_slide_pic = null;  //主图区域对象
    this.ce_slide_tag_thumbnail = null; //缩略图区域对象
    this.ce_slide_thumbnail_list = null; //缩略图区域外层容器对象
    this.ce_slide_thumbnail_arrowhead = null; //缩略图翻页按钮对象
    this.ce_slide_tag_text = null; //文字页区域对象

    this.ce_slide_info_mark = null; //透明遮罩层对象
    this.ce_slide_info = null; //文章信息内容区对象
    this.ce_slide_info_title = null; //文章信息区-标题对象
    this.ce_slide_text_memo = null; //说明文信息区-概要对象

    this.ce_slide_arrowhead_left = null; //缩略图翻页左
    this.ce_slide_arrowhead_right = null; //缩略图翻页右

    this.FrontPublic_slideShow01_tempSetTimeout = null; //时间


    /*
    * 幻灯片初始化方法
    * 参数说明：
    *	setJsonData 是通过JSP赋值获取放有幻灯片配置参数的字符串，通过 this.ce_slide_strToJson() 方法解析并转换成JSON数据
    *	querySegment 为展示内容数据请求时的URL参数片断
    */
    this.ce_slide_init = function (setJsonData, querySegment,tempData)
    {

        //初始化函数	
        //this.ce_slide_frame.css("width",this.ce_slide_img_width); //根据需求该处暂时关
        //将所有DOM对象进行初始化
        window.clearTimeout(this.FrontPublic_slideShow01_tempSetTimeout);

        if (setJsonData)
        {
            var setJsonData = this.ce_slide_strToJson(setJsonData);

            this.ce_slide_open_type = setJsonData.openType;
            this.ce_slide_tag_style = setJsonData.showType;
            this.ce_slide_recursion_times = setJsonData.changeTimes;
            this.ce_slide_show_title = setJsonData.isShowSlideTitle;
            this.ce_slide_show_content = setJsonData.isShowSlideContent;
            this.ce_requestDataFilePath = setJsonData.requestDataFilePath;
            this.ce_slide_id = this.ce_requestDataFilePath.replace("/comp-FrontSlide_listJson01", "FrontPublic_slideShow01");

            //外部数据
            //var tempData = getjQueryData(setJsonData.requestDataFilePath, querySegment);
			var d = new Date();
			var t = ""+d.getFullYear()+d.getMonth()+d.getDate();
/*			var tempData = $.ajax({
				type: "post",
				url: setJsonData.requestDataFilePath+"?"+t,
				data: querySegment,
				async: false
				}).responseText;
			*/
//			this.ce_slide_contes_obj = eval("(" + tempData + ")");
            this.ce_slide_contes_obj =tempData;

            this.ce_slide_frame = $("#" + this.ce_slide_id + "");

            //alert("csfh" + this.ce_slide_frame.height());

            this.ce_slide_contente = $("#" + this.ce_slide_id + " .slide-contente");

            //alert(this.ce_slide_contente.height());

            this.ce_slide_pic = $("#" + this.ce_slide_id + " .slide-pic ul");
            this.ce_slide_tag_thumbnail = $("#" + this.ce_slide_id + " .slide-tag-thumbnail ul");
            this.ce_slide_thumbnail_list = $("#" + this.ce_slide_id + " .thumbnail-list");
            this.ce_slide_thumbnail_arrowhead = $("#" + this.ce_slide_id + " .slide-tag-thumbnail .arrowhead");
            this.ce_slide_tag_text = $("#" + this.ce_slide_id + " .slide-tag-text ul");

            this.ce_slide_info_mark = $("#" + this.ce_slide_id + " .slide-info-mark");
            this.ce_slide_info = $("#" + this.ce_slide_id + " .slide-info");
            this.ce_slide_info_title = $("#" + this.ce_slide_id + " .slide-info h3");
            this.ce_slide_text_memo = $("#" + this.ce_slide_id + " .slide-text");

            this.ce_slide_arrowhead_left = $("#" + this.ce_slide_id + " .arrowhead-left");
            this.ce_slide_arrowhead_right = $("#" + this.ce_slide_id + " .arrowhead-right");

            this.ce_slide_totle = this.ce_slide_contes_obj["contents"].length;
            this.ce_slide_contents_init();
            this.ce_slide_tag_init();
            this.ce_slide_img_init();
            this.ce_slide_run();

            //alert(this.ce_slide_frame.attr("id"));
            //alert($("#" + this.ce_slide_id + " .slide-tag-text").attr("class"));

            //alert(this.ce_slide_id);

 	        var thise = this;
            // 控制鼠标移入大图停止自动播放。
            this.ce_slide_pic.hover(
                function (event) {
                    window.clearTimeout(thise.FrontPublic_slideShow01_tempSetTimeout);
                },
                function (event) {
                    thise.ce_slide_loop();
                }
            ); 
        }


    };


    /*
    * 展示内容文字区域内容初始化方法
    */
    this.ce_slide_contents_init = function ()
    {
        this.ce_slide_effect_style = this.ce_slide_contes_obj["setData"].changeStyle;
        this.ce_slide_autoPlay = this.ce_slide_contes_obj["setData"].isPlaysSet;

        for (var i = 0; i < this.ce_slide_totle; i++)
        {
            this.ce_slide_imgs[i] = this.ce_slide_contes_obj["contents"][i].bigPicPath;
            this.ce_slide_imgs[i] = this.ce_slide_contes_obj["contents"][i].bigPicPath;
            this.ce_slide_imgs_hrefs[i] = this.ce_slide_contes_obj["contents"][i].plink;
            this.ce_slide_thumbnails[i] = this.ce_slide_contes_obj["contents"][i].smallPicPath;
            this.ce_slide_titles[i] = this.ce_slide_contes_obj["contents"][i].slideName;
            this.ce_slide_memos[i] = this.ce_slide_contes_obj["contents"][i].descriPtion;
        }
    };


    /*
    * 文字页签初始化
    */
    this.ce_slide_tag_text_init = function ()
    {
        for (var i = 0; i < this.ce_slide_totle; i++)
        {
            if (i == 0)
            {
                this.ce_slide_tag_text.append("<li class='slide-hover'>" + (i + 1) + "</li>");
            }
            else
            {
                this.ce_slide_tag_text.append("<li>" + (i + 1) + "</li>");
            }
        }

        //关闭JS控制样式规格
        //this.ce_slide_tag_text.find("ul").find("li").width(this.ce_slide_tag_text_width);
        //this.ce_slide_tag_text.find("ul").find("li").height(this.ce_slide_tag_text_height);
    };


    /*
    * 缩略图页签初始化方法
    * 在初始化过程中检查缩略图的列表的总长度是否超出了缩略图展示区域的长度，如果超出则显示在缩略图列表左右增加左右翻页按钮
    */
    this.ce_slide_tag_thumbnail_init = function ()
    {   //缩略图页签初始化
        if (this.ce_slide_thumbnails.length)
        {
            for (var i = 0; i < this.ce_slide_totle; i++)
            {
                this.ce_slide_tag_thumbnail.append("<li><img src='" + this.ce_slide_thumbnails[i] + "' /></li>");
            }
            /* 根据需求该处暂时关闭
            this.ce_slide_tag_thumbnail.find("img").width(this.ce_slide_thumbnail_width);
            this.ce_slide_tag_thumbnail.find("img").height(this.ce_slide_thumbnail_height);
            */
        }

        //检查缩略图列表总长度是否超出，展示区域长度
        //计算缩略图总长度,总长度的计算方式为 li_width + margin-left + margin-right + padding-left + padding-right
        this.ce_slide_thumbnail_max_width += parseInt(this.ce_slide_tag_thumbnail.find("li").width());
        this.ce_slide_thumbnail_max_width += parseInt(this.ce_slide_tag_thumbnail.find("li").css("margin-left").replace("px", ""));
        this.ce_slide_thumbnail_max_width += parseInt(this.ce_slide_tag_thumbnail.find("li").css("margin-right").replace("px", ""));
        this.ce_slide_thumbnail_max_width += parseInt(this.ce_slide_tag_thumbnail.find("li").css("padding-left").replace("px", ""));
        this.ce_slide_thumbnail_max_width += parseInt(this.ce_slide_tag_thumbnail.find("li").css("padding-right").replace("px", ""));
        this.ce_slide_thumbnail_max_width = parseInt(this.ce_slide_thumbnail_max_width * this.ce_slide_totle);

        //对比缩略图总长度是否超出幻灯片总长度
        if (parseInt(this.ce_slide_frame.width()) < this.ce_slide_thumbnail_max_width)
        { //如果超出则展示左右翻页按钮
            //计算展示区域宽度 
            this.ce_slide_thumbnail_show_width = this.ce_slide_frame.width() - parseInt(this.ce_slide_tag_thumbnail.parent().parent().find(".arrowhead").width() * 2);

            this.ce_slide_tag_thumbnail.parent().width(this.ce_slide_thumbnail_show_width);
            //计算缩略图列表总宽度并赋值
            this.ce_slide_tag_thumbnail.width(this.ce_slide_thumbnail_max_width);
            //计算分页页数
            this.ce_slide_thumbnail_groups = this.ce_slide_thumbnail_max_width / this.ce_slide_thumbnail_show_width;
            this.ce_slide_thumbnail_groups = (Math.floor(this.ce_slide_thumbnail_groups) > 0) ? parseInt(this.ce_slide_thumbnail_groups) + 1 : this.ce_slide_thumbnail_groups;
            this.ce_slide_arrowhead_left.addClass("no-arrowhead");
        }
        else
        {
            //根据缩略图数量计算平均长度 平均长度 = 幻灯长度 / 图片长度 同时清除li表内所有margin和padding
            var li_width = parseInt(this.ce_slide_frame.width()) / parseInt(this.ce_slide_totle);
            li_width = li_width / parseInt(this.ce_slide_frame.width()) * 100;
            //清除margin和padding
            this.ce_slide_tag_thumbnail.find("li").attr("style", "padding:0px;margin:0px;width:" + li_width + "%");
            this.ce_slide_tag_thumbnail.width(parseInt(this.ce_slide_frame.width()));
            this.ce_slide_tag_thumbnail.parent().width(parseInt(this.ce_slide_frame.width()));
            this.ce_slide_thumbnail_arrowhead.attr("style", "display:none");
        }

    };


    /*
    * 缩略图和数字页签展示效果初始化
    */
    this.ce_slide_tag_init = function ()
    {
        switch (parseInt(this.ce_slide_tag_style))
        {
            case 1:
                this.ce_slide_tag_text.parent().css("display", "block");
                this.ce_slide_tag_text_init();
                break;
            case 0:
                this.ce_slide_tag_thumbnail.parent().parent().css("display", "block");
                this.ce_slide_tag_thumbnail_init();
                break;
        }

    };


    /*
    * 页签翻页效果方法
    */
    this.ce_slide_tag_changeStyle = function ()
    {
        //页签轮播变换样式
        var nowObj = null;
        if (this.ce_slide_tag_text.length)
        { //如果页签数据存在
            this.ce_slide_tag_text.find("li").removeClass();
            nowObj = this.ce_slide_tag_text.find("li:eq(" + this.ce_slide_index + ")");
            nowObj.addClass("slide-hover");
        }
        if (this.ce_slide_thumbnails.length)
        { //如果缩略图数据存在
            this.ce_slide_tag_thumbnail.find("li").removeClass();
            nowObj = this.ce_slide_tag_thumbnail.find("li:eq(" + this.ce_slide_index + ")")
            nowObj.addClass("slide-hover");
        }
    };


    /*
    * 大图内容展示区初始化方法
    */
    this.ce_slide_img_init = function ()
    {
        this.ce_slide_pic.html("");
        this.ce_slide_contente.css("height", this.ce_slide_img_height);
        //alert(this.ce_slide_img_height);

        for (var i = 0; i < this.ce_slide_totle; i++)
        {
            if (parseInt(this.ce_slide_imgs_hrefs[i].length) > 0)
            {
                this.ce_slide_pic.append("<li><a href='" + this.ce_slide_imgs_hrefs[i] + "' target='" + this.ce_slide_open_type + "'><img src='" + this.ce_slide_imgs[i] + "' /></a></li>");
            }
            else if (parseInt(this.ce_slide_imgs_hrefs[i].length) <= 0)
            {
                this.ce_slide_pic.append("<li><img src='" + this.ce_slide_imgs[i] + "' /></li>");
            }
        }
    };


    /*
    * 根据后台参数赋予的参数值来初始化指定的切换效果，
    * 参数名为： style
    * 参数值： 1 淡出淡入效果
    *  		  2 向右滚动效果
    *		  3 向左滚动效果
    *		  4 向下滚动效果
    *		  5 向上滚动效果
    */
    this.ce_slide_effect_init = function (style)
    { //效果类型选择

        switch (style)
        {
            case 1: //淡出淡入效果
                if (!this.ce_slide_pic_temple)
                { //如果存储器为空，则表明幻灯为第一次显示
                    this.ce_slide_pic_temple = this.ce_slide_pic.find("li:eq(" + (this.ce_slide_imgs.length - 1) + ")");
                }
                this.ce_slide_effect_gradual();
                break;
            case 2: //向右滚动效果
                this.ce_slide_pic_temple = (this.ce_slide_pic_temple) ? this.ce_slide_pic_temple : 1;
                this.ce_slide_pic_temple = (this.ce_slide_index == null) ? this.ce_slide_pic_temple : (this.ce_slide_index + 1);
                this.ce_slide_effect_aspect_x("right");
                break;
            case 3: //向左滚动效果
                this.ce_slide_pic_temple = (this.ce_slide_pic_temple) ? this.ce_slide_pic_temple : 1;
                this.ce_slide_pic_temple = (this.ce_slide_index == null) ? this.ce_slide_pic_temple : (this.ce_slide_index + 1);
                this.ce_slide_effect_aspect_x("left");
                break;
            case 4: //向下滚动效果
                this.ce_slide_pic_temple = (this.ce_slide_pic_temple) ? this.ce_slide_pic_temple : 1;
                this.ce_slide_pic_temple = (this.ce_slide_index == null) ? this.ce_slide_pic_temple : (this.ce_slide_index + 1);
                this.ce_slide_effect_aspect_y("bottom");
                break;
            case 5: //向上滚动效果
                this.ce_slide_pic_temple = (this.ce_slide_pic_temple) ? this.ce_slide_pic_temple : 1;
                this.ce_slide_pic_temple = (this.ce_slide_index == null) ? this.ce_slide_pic_temple : (this.ce_slide_index + 1);
                this.ce_slide_effect_aspect_y("top");
                break;
        }
    };


    /*
    * 水平切换效果，其中 aspect 参数为指定的某一个水平方向，参数值分别为： left 和 right
    */
    this.ce_slide_effect_aspect_x = function (aspect)
    {

        var aspect_float;
        var slide_pic_width = this.ce_slide_frame.width() * this.ce_slide_imgs.length;
        var now_position;

        if (aspect == "left")
        {
            aspect_float = "right";
            now_position = -(slide_pic_width - this.ce_slide_frame.width() * this.ce_slide_pic_temple);
        }
        if (aspect == "right")
        {
            aspect_float = "left";
            now_position = (this.ce_slide_pic_temple == 1) ? 0 : -(this.ce_slide_frame.width() * (this.ce_slide_pic_temple - 1));
        }

        this.ce_slide_pic.css("position", "absolute");
        this.ce_slide_pic.css("width", slide_pic_width);

        this.ce_slide_pic.animate({ left: now_position }, "slow");
        this.ce_slide_pic.find("li").css("float", aspect_float);
        this.ce_slide_pic_temple = (this.ce_slide_pic_temple >= this.ce_slide_imgs.length) ? 1 : this.ce_slide_pic_temple + 1;
    };


    /*
    * 垂直切换效果，其中 aspect 参数为指定的某一个水平方向，参数值分别为： left 和 right
    */
    this.ce_slide_effect_aspect_y = function (aspect)
    {
        if (aspect == "top")
        { //从上到下
            this.ce_slide_pic.html("");
            this.ce_slide_pic.css("position", "absolute");

            for (var i = this.ce_slide_imgs.length - 1; i >= 0; i--)
            {
                if (parseInt(this.ce_slide_imgs_hrefs[i].length))
                    this.ce_slide_pic.append("<li><a href='" + this.ce_slide_imgs_hrefs[i] + "'><img src='" + this.ce_slide_imgs[i] + "' /></a></li>");
                else this.ce_slide_pic.append("<li><img src='" + this.ce_slide_imgs[i] + "' /></li>");
            }

            var now_position = -(this.ce_slide_pic.height() - this.ce_slide_pic.find("li").height() * this.ce_slide_pic_temple);
            this.ce_slide_pic.animate({ top: now_position }, "slow");
        }
        if (aspect == "bottom")
        { //从下到上
            this.ce_slide_pic.css("position", "absolute");

            var now_position = (this.ce_slide_pic_temple == 1) ? 0 : -(this.ce_slide_pic.find("li").height() * (this.ce_slide_pic_temple - 1));
            this.ce_slide_pic.animate({ top: now_position }, "slow");
        }
        this.ce_slide_pic_temple = (this.ce_slide_pic_temple >= this.ce_slide_imgs.length) ? 1 : this.ce_slide_pic_temple + 1;
    };


    /*
    * 淡出淡入效果，初始化方法
    */
    this.ce_slide_effect_gradual = function ()
    {
        //alert("{{{{:" + this.ce_slide_recursion_times);
        //alert("ce_slide_pic}}}}}}}:" + this.ce_slide_pic.parent().parent().parent().attr("id"));
        this.ce_slide_pic.find("li").css("position", "absolute");
        this.ce_slide_pic.find("li").css("top", "0");
        this.ce_slide_pic.find("li").css("left", "0");
        this.ce_slide_pic.find("li").css("display", "none");
        var nowOBJ = this.ce_slide_pic.find("li:eq(" + this.ce_slide_index + ")");
        nowOBJ.fadeIn("slow");
    };


    /*
    * 在页面输出展示内容的方法
    */
    this.ce_slide_show = function ()
    {
        this.ce_slide_effect_init(this.ce_slide_effect_style);
        //同步缩略图主展示区宽度
        this.ce_slide_contente.width(this.ce_slide_frame.width());
        //同步幻灯片宽度与大图宽度
        this.ce_slide_pic.find("img").width(this.ce_slide_frame.width());
        //同步幻灯片展示区域高度与大图区域的高度
        this.ce_slide_pic.find("img").height(this.ce_slide_contente.height());
        this.ce_slide_pic.parent().width(this.ce_slide_frame.width());

        //alert(this.ce_slide_frame.height());


        //文章信息展示
        //原始数据清理
        this.ce_slide_info_title.html("");
        this.ce_slide_text_memo.html("");
        this.ce_slide_tag_changeStyle(); //页签轮播变换样式
        if (parseInt(this.ce_slide_show_title))
        {
            this.ce_slide_info_title.html(this.ce_slide_titles[this.ce_slide_index]); //更新文章标题
        }
        if (parseInt(this.ce_slide_show_content))
        {
            this.ce_slide_text_memo.html(this.ce_slide_memos[this.ce_slide_index]); //更新文章摘要
        }

        //蒙版初始化 蒙板暂时为固定高 所以暂时关闭
        //var mark_height  = (this.ce_slide_info_mark_height)?this.ce_slide_info_mark_height:(this.ce_slide_info.height()+this.ce_slide_tag_text_height);
        //this.ce_slide_info_mark.height(mark_height+"px");

        this.ce_slide_index = (this.ce_slide_index >= (this.ce_slide_imgs.length - 1)) ? 0 : (this.ce_slide_index + 1);
    };


    /*
    * 自动轮播方法
    */
    this.ce_slide_loop = function ()
    {
          this.ce_slide_show();
        //		ce_slide.ce_slide_settimeout = setTimeout("ce_slide.ce_slide_loop()",ce_slide.ce_slide_recursion_times);

        var thise = this;

        if (this.ce_slide_autoPlay)
        {
            thise.FrontPublic_slideShow01_tempSetTimeout = setTimeout
			(
			    function ()
			    {
			        thise.ce_slide_loop();
			    },
			    thise.ce_slide_recursion_times
			);
        }
    };


    /*
    * 鼠标点击某一个内容块的事情处理方法，参数 obj 为鼠标点击到的某一个对象 
    */
    this.ce_slide_hover_init = function (obj, thise)
    {
        obj.click(function ()
        {
            thise.ce_slide_index = obj.index(this);
            thise.ce_slide_show();
            if (this.ce_slide_autoPlay)
            {
                window.clearTimeout(thise.FrontPublic_slideShow01_tempSetTimeout);
                thise = setTimeout(function ()
                {
                    thise.ce_slide_loop();
                },
				thise.ce_slide_recursion_times);
            }
        });
    };


    /*
    * 鼠标点击按钮，根据按钮的CLASS名来执行左移动或右移动的事件
    */
    this.ce_slide_arrowhead_click_init = function (obj, thise)
    {
        obj.click(function ()
        {
            var arrowhead = $(this).attr("class").split(" ");

            switch (arrowhead[0].replace(/(^\s*)|(\s*$)/g, ""))
            {
                case "arrowhead-left":
                    if (thise.ce_slide_thumbnail_pages > 1 && thise.ce_slide_thumbnail_pages != 1)
                    {
                        thise.ce_slide_thumbnail_tmp += thise.ce_slide_thumbnail_show_width;
                        thise.ce_slide_tag_thumbnail.animate({ left: thise.ce_slide_thumbnail_tmp }, "slow");
                        thise.ce_slide_thumbnail_pages = ((thise.ce_slide_thumbnail_pages - 1) < 0) ? 0 : (thise.ce_slide_thumbnail_pages - 1);
                    }

                    if (thise.ce_slide_thumbnail_pages <= 1)
                    {
                        $(this).addClass("no-arrowhead");
                        thise.ce_slide_arrowhead_right.removeClass("no-arrowhead");
                    }

                    if (thise.ce_slide_thumbnail_pages < thise.ce_slide_thumbnail_groups)
                    {
                        thise.ce_slide_arrowhead_right.removeClass("no-arrowhead");
                    }

                    break;
                case "arrowhead-right":
                    if (thise.ce_slide_thumbnail_pages < thise.ce_slide_thumbnail_groups)
                    {
                        thise.ce_slide_thumbnail_tmp -= thise.ce_slide_thumbnail_show_width;
                        thise.ce_slide_tag_thumbnail.animate({ left: thise.ce_slide_thumbnail_tmp }, "slow");
                        thise.ce_slide_thumbnail_pages += 1;
                    }

                    if (thise.ce_slide_thumbnail_pages >= thise.ce_slide_thumbnail_groups)
                    {
                        $(this).addClass("no-arrowhead");
                        thise.ce_slide_arrowhead_left.removeClass("no-arrowhead");
                    }

                    if (thise.ce_slide_thumbnail_pages > 1 && thise.ce_slide_thumbnail_pages != 1)
                    {
                        thise.ce_slide_arrowhead_left.removeClass("no-arrowhead");
                    }
                    break;
            }
        })
    };


    /*
    * 主体内容初始化完毕后，执行幻灯展示的方法
    */
    this.ce_slide_run = function ()
    { //执行
        var arrowhead_h; //临时悬浮记录器

        this.ce_slide_hover_init(this.ce_slide_tag_thumbnail.find("li"), this);
        this.ce_slide_hover_init(this.ce_slide_tag_text.find("li"), this);

        //分页箭头操作
        this.ce_slide_arrowhead_click_init(this.ce_slide_tag_thumbnail.parent().parent().find(".arrowhead"), this);

        var thise = this;
        this.ce_slide_tag_thumbnail.parent().parent().find(".arrowhead").hover
		(
			function ()
			{
			    arrowhead_h = $(this).attr("class").split(" ");
			    switch (arrowhead_h[0].replace(/(^\s*)|(\s*$)/g, ""))
			    {
			        case "arrowhead-left":
			            if (thise.ce_slide_thumbnail_pages > 1)
			                $(this).addClass("arrowhead-left-hover");
			            break;
			        case "arrowhead-right":
			            if (thise.ce_slide_thumbnail_pages < thise.ce_slide_thumbnail_groups)
			                $(this).addClass("arrowhead-right-hover");
			            break;
			    }
			},

			function ()
			{
			    arrowhead_h = $(this).attr("class").split(" ");
			    switch (arrowhead_h[0].replace(/(^\s*)|(\s*$)/g, ""))
			    {
			        case "arrowhead-left":
			            $(this).removeClass("arrowhead-left-hover");
			            break;
			        case "arrowhead-right":
			            $(this).removeClass("arrowhead-right-hover");
			            break;
			    }
			}

		);

        this.ce_slide_loop();
    };

    this.d5_slide = function(userW,userH){
    	var sWidth = $("#slider_name").width();
    	
    	 $("#slider_name").width(userW);
    	 $("#slider_name").height(userH);
    	var len = $("#slider_name .silder_panel").length;
    	var index = 0;
    	var picTimer;
    	
    	var btn = "<a class='prev'>Prev</a><a class='next'>Next</a>";
    	$("#slider_name").append(btn);

    	$("#slider_name .silder_nav li").css({"opacity":"0.6","filter":"alpha(opacity=60)"}).mouseover(function() {																		
    		index = $("#slider_name .silder_nav li").index(this);
    		showPics(index);
    	}).eq(0).trigger("mouseover");

    	$("#slider_name .prev,#slider_name .next").css({"opacity":"0.2","filter":"alpha(opacity=20)"}).hover(function(){
    		$(this).stop(true,false).animate({"opacity":"0.6","filter":"alpha(opacity=60)"},300);
    	},function() {
    		$(this).stop(true,false).animate({"opacity":"0.2","filter":"alpha(opacity=20)"},300);
    	});


    	// Prev
    	$("#slider_name .prev").click(function() {
    		index -= 1;
    		if(index == -1) {index = len - 1;}
    		showPics(index);
    	});

    	// Next
    	$("#slider_name .next").click(function() {
    		index += 1;
    		if(index == len) {index = 0;}
    		showPics(index);
    	});

    	// 
    	$("#slider_name .silder_con").css("width",sWidth * (len));
    	
    	// mouse 
    	$("#slider_name").hover(function() {
    		clearInterval(picTimer);
    	},function() {
    		picTimer = setInterval(function() {
    			showPics(index);
    			index++;
    			if(index == len) {index = 0;}
    		},3000); 
    	}).trigger("mouseleave");
    	
    	// showPics
    	function showPics(index) {
    		var nowLeft = -index*sWidth; 
    		$("#slider_name .silder_con").stop(true,false).animate({"left":nowLeft},300);
    		$("#slider_name .silder_nav li").removeClass("current").eq(index).addClass("current"); 
    		$("#slider_name .silder_nav li").stop(true,false).animate({"opacity":"0.5"},300).eq(index).stop(true,false).animate({"opacity":"1"},300);
    	};
    };


    /*
    * 将URL参数形式的字符串转化成JSON数据的数据格式化方法。参数值str 为参数的URL字符串
    */
    this.ce_slide_strToJson = function (str)
    {
        segs = str.match(/=/g).length;
        for (var i = 0; i < segs; i++)
        {
            str = str.replace("=", ":'").replace("&", "',");
        }
        str += "'";
        return eval("str = {" + str + "};");
    };
};

/* ==== slider nameSpace ==== */
var FrontPublic_slideShow02 = function() {
	/* ==== private methods ==== */
	function getElementsByClass(object, tag, className) {
		var o = object.getElementsByTagName(tag);
		for ( var i = 0, n = o.length, ret = []; i < n; i++) {
			if (o[i].className == className) ret.push(o[i]);
		}
		if (ret.length == 1) ret = ret[0];
		return ret;
	}
	function setOpacity (obj,o) {
		if (obj.filters) obj.filters.alpha.opacity = Math.round(o);
		else obj.style.opacity = o / 100;
	}
	/* ==== Slider Constructor ==== */
	function Slider(oCont, speed, iW, iH, oP) {
		this.slides = [];
		this.over   = false;
		this.S      = this.S0 = speed;
		this.iW     = iW;
		this.iH     = iH;
		this.oP     = oP;
		this.oc     = document.getElementById(oCont);
		this.frm    = getElementsByClass(this.oc, 'div', 'slide');
		this.NF     = this.frm.length;
		this.resize();
		for (var i = 0; i < this.NF; i++) {
			this.slides[i] = new Slide(this, i);
		}
		this.oc.parent = this;
		this.view      = this.slides[0];
		this.Z         = this.mx;
		/* ==== on mouse out event ==== */
		this.oc.onmouseout = function () {
			this.parent.mouseout();
			return false;
		}
	}
	Slider.prototype = {
		/* ==== animation loop ==== */
		run : function () {
			this.Z += this.over ? (this.mn - this.Z) * .5 : (this.mx - this.Z) * .5;
			this.view.calc();
			var i = this.NF;
			while (i--) this.slides[i].move();
		},
		/* ==== resize  ==== */
		resize : function () {
			this.wh = this.oc.clientWidth;
			this.ht = this.oc.clientHeight;
			this.wr = this.wh * this.iW;
			this.r  = this.ht / this.wr;
			this.mx = this.wh / this.NF;
			this.mn = (this.wh * (1 - this.iW)) / (this.NF - 1);
		},
		/* ==== rest  ==== */
		mouseout : function () {
			this.over      = false;
			setOpacity(this.view.img, this.oP);
		}
	}
	/* ==== Slide Constructor ==== */
	Slide = function (parent, N) {
		this.parent = parent;
		this.N      = N;
		this.x0     = this.x1 = N * parent.mx;
		this.v      = 0;
		this.loaded = false;
		this.cpt    = 0;
		this.start  = new Date();
		this.obj    = parent.frm[N];
		this.img    = getElementsByClass(this.obj, 'img', 'diapo');
/*		this.bkg    = document.createElement('div');
		this.bkg.className = 'backgroundText';
		this.obj.insertBefore(this.bkg);*/
		if (N == 0) this.obj.style.borderLeft = 'none';
		this.obj.style.left = Math.floor(this.x0) + 'px';
		setOpacity(this.img, parent.oP);
		/* ==== mouse events ==== */
		this.obj.parent = this;
		this.obj.onmouseover = function() {
			this.parent.over();
			return false;
		}
	}
	Slide.prototype = {
		/* ==== target positions ==== */
		calc : function() {
			var that = this.parent;
			// left slides
			for (var i = 0; i <= this.N; i++) {
				that.slides[i].x1 = i * that.Z;
			}
			// right slides
			for (var i = this.N + 1; i < that.NF; i++) {
				that.slides[i].x1 = that.wh - (that.NF - i) * that.Z;
			}
		},
		/* ==== HTML animation : move slides ==== */
		move : function() {
			var that = this.parent;
			var s = (this.x1 - this.x0) / that.S;
			/* ==== lateral slide ==== */
			if (this.N && Math.abs(s) > .5) {
				this.obj.style.left = Math.floor(this.x0 += s) + 'px';
			}
			/* ==== vertical text ==== */
			var v = (this.N < that.NF - 1) ? that.slides[this.N + 1].x0 - this.x0 : that.wh - this.x0;
			if (Math.abs(v - this.v) > .5) {
				//this.bkg.style.top =  Math.floor(2 + that.ht - (v - that.Z) * that.iH * that.r) + 'px';
				this.v = v;
				this.cpt++;
			} else {
				if (!this.pro) {
					/* ==== adjust speed ==== */
					this.pro = true;
					var tps = new Date() - this.start;
					if(this.cpt > 1) {
						that.S = Math.max(2, (28 / (tps / this.cpt)) * that.S0);
					}
				}
			}
			if (!this.loaded) {
				if (this.img.complete) {
					this.img.style.visibility = 'visible';
					this.loaded = true;
				}
			}
		},
		/* ==== light ==== */
		over : function () {
			this.parent.resize();
			this.parent.over = true;
			setOpacity(this.parent.view.img, this.parent.oP);
			this.parent.view = this;
			this.start = new Date();
			this.cpt = 0;
			this.pro = false;
			this.calc();
			setOpacity(this.img, 100);
		}
	}
	/* ==== public method - script initialization ==== */
	return {
		init : function(speed) {
			// create instances of sliders here
			// parameters : HTMLcontainer name, speed (2 fast - 20 slow), Horizontal ratio, vertical text ratio, opacity
			this.s1 = new Slider("slider", speed, 1.84/3, 1/3.2, 70);
			setInterval("FrontPublic_slideShow02.s1.run();", speed);
		}
	}
}();



