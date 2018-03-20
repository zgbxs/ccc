<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ProductsList.aspx.cs" Inherits="WebApp.ProductsList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<!-- InstanceBegin template="/Templates/about.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <!-- InstanceBeginEditable name="head" -->
    <link href="/favicon.ico" rel="shortcut icon" type="shortcut icon" />
    <link href="/styles/page_products_list.css" rel="stylesheet" type="text/css" />
    <!-- 推广优化组件开始 -->
    <title>上海爱佑化工新材料有限公司</title>
    <meta name="keywords" content="上海爱佑化工新材料有限公司" />
    <meta name="description" content="上海爱佑化工新材料有限公司主要从事化工产品" />
    <!-- 推广优化组件结束 -->
    <script type="text/javascript" src="/publicScripts/common/jquery.js"></script>
    <script type="text/javascript" src="/publicScripts/lib.min.js"></script>
    <!-- InstanceEndEditable -->
</head>
<body id="products_list">
    <div class="pageWidth" id="box_root">
        <!-- 头部导航开始 -->
        <div id="box_header">
            <div id="box_header_top">
                <div id="box_logo">
                    <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1454575752879" name="说明页">
                        <div id="FrontSpecifies_show01-1454575752879" class="FrontSpecifies_show01-d1_c1">
                            <p>
                                <img alt="" src="/imageRepository/befcc7ae-9c1a-4186-ba27-ccc7c19a9e0d.jpg" />
                            </p>
                        </div>
                    </div>
                </div>
                <div id="box_seach">
                    <div xmlns="" class="columnSpace" id="elem-FrontColumns_navigation01-1454575764599" name="栏目导航">
                        <script type="text/javascript" src="/publicScripts/columns/FrontColumns_navigation01.js"></script>
                        <script type="text/javascript">
                            //<![CDATA[
                            FrontColumns_navigation01['FrontColumns_navigation01-1454575764599_init'] = function ()
                            {
                                FrontColumns_navigation01.d2ddlevelsmenu.init("d2menubar_FrontColumns_navigation01-1454575764599", "topbar");
                            }
                            $(FrontColumns_navigation01['FrontColumns_navigation01-1454575764599_init']);
                            // ]]>
                        </script>
                        <div id="FrontColumns_navigation01-1454575764599" class="FrontColumns_navigation01-d2_c1">
                            <div id="d2menubar_FrontColumns_navigation01-1454575764599" class="mattblackmenu">
                                <ul class="nav-first">
                                      <li class="first">
                                        <a href="/home.aspx" title="网站首页">网站首页
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/CompanyProfile.aspx" rel="summenu_FrontColumns_navigation01-1454567950644_58" title=" 关于爱佑">关于爱佑
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ProductsList.aspx" rel="summenu_FrontColumns_navigation01-1454567950644_56" title="产品展示">产品展示
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/SaleNet.aspx" rel="summenu_FrontColumns_navigation01-1454567950644_39" title="销售网络">销售网络
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Question.aspx" rel="summenu_FrontColumns_navigation01-1454567950644_44" title="常见问题">常见问题
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Contact.aspx" title="联系我们">联系我们
                                        </a>
                                    </li>
                                    <li class="last"></li>
                                </ul>
                            </div>
                              <ul id="summenu_FrontColumns_navigation01-1454567950644_58" class="ddsubmenustyle">
                                <li>
                                    <a href="/CompanyProfile.aspx">公司介绍
                                    </a>
                                </li>
                                <li>
                                    <a href="/CompanyCuture.aspx">企业文化
                                    </a>
                                </li>
                                <li>
                                    <a href="/TheCertificate.aspx">资质荣誉
                                    </a>
                                </li>
                            </ul>
                            <ul id="summenu_FrontColumns_navigation01-1454567950644_56" class="ddsubmenustyle">
                                 <li>
                                    <a href="/Pro_Catagory/Catagory1.aspx">FT合成蜡
                                    </a>
                                </li>
                                <li>
                                    <a href="/Pro_Catagory/Catagory2.aspx">石油蜡微晶蜡
                                    </a>
                                </li>
                                <li>
                                    <a href="/Pro_Catagory/Catagory3.aspx">特种蜡
                                    </a>
                                </li>
                                <li>
                                    <a href="/Pro_Catagory/Catagory4.aspx">润滑油
                                    </a>
                                </li>
                                <li>
                                    <a href="/Pro_Catagory/Catagory5.aspx">相变蜡
                                    </a>
                                </li>
                                 <li>
                                    <a href="/Pro_Catagory/Catagory6.aspx">氯化石蜡
                                    </a>
                                </li>
                                <li>
                                    <a href="/Pro_Catagory/Catagory7.aspx">其他产品
                                    </a>
                                </li>
                            </ul>
                           <%-- <ul id="summenu_FrontColumns_navigation01-1454567950644_51" class="ddsubmenustyle">
                                <li>
                                    <a href="/news_list/columnsId=59&amp;&amp;newsCategoryId=4.html" target="_blank">公司新闻
                                    </a>
                                </li>
                            </ul>
                            <ul id="summenu_FrontColumns_navigation01-1454567950644_39" class="ddsubmenustyle">
                                <li>
                                    <a href="/xswl/FrontComContent_list01-1339494100625CurrentIds=4__4&amp;comContentId=4.html">销售网络
                                    </a>
                                </li>
                            </ul>
                            <ul id="summenu_FrontColumns_navigation01-1454567950644_44" class="ddsubmenustyle">
                                <li>
                                    <a href="/xswl/FrontComContent_list01-1339494100625CurrentIds=4__6&amp;comContentId=6.html">常见问题
                                    </a>
                                </li>
                            </ul>--%>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 头部导航结束 -->
        <!-- banner广告开始 -->
        <div id="box_banner">
            <div xmlns="" class="columnSpace" id="elem-FrontPublic_slideShow01-1454566497297" name="公用幻灯">
                <script type="text/javascript" src="/publicScripts/public/FrontPublic_slideShow01.js"></script>
                <script language="javascript">
                    //<![CDATA[
                    FrontPublic_slideShow01['FrontPublic_slideShow01-1454566497297_init'] = function ()
                    {
                        FrontPublic_slideShow01['FrontPublic_slideShow01-1454566497297_init'] = new FrontPublic_slideShow01();
                        FrontPublic_slideShow01['FrontPublic_slideShow01-1454566497297_init'].d5_slide("960", "");
                    }
                    $(FrontPublic_slideShow01['FrontPublic_slideShow01-1454566497297_init']);
                    // ]]>
                </script>
                <script type="text/javascript" src="/publicScripts/common/superslide.2.1.js"></script>
                <div id="FrontPublic_slideShow01-1454566497297" class="FrontPublic_slideShow01-d6_c1">
                    <div class="fullSlide">
                        <div class="bd">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)" class="f_pic">
                                        <img src="/images/a/home1.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" class="f_title"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="f_pic">
                                        <img src="/images/a/home2.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" class="f_title"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="f_pic">
                                        <img src="/images/a/home3.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" class="f_title"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="f_pic">
                                        <img src="/images/a/home4.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" class="f_title"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="f_pic">
                                        <img src="/images/a/home5.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" class="f_title"></a>
                                </li>
                            </ul>
                        </div>
                        <div class="hd">
                            <ul></ul>
                        </div>
                        <span class="prev"></span>
                        <span class="next"></span>
                    </div>
                    <script type="text/javascript">
                        $(".fullSlide").hover(function ()
                        {
                            $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
                        },
                        function ()
                        {
                            $(this).find(".prev,.next").fadeOut()
                        });
                        $(".fullSlide").slide({
                            titCell: ".hd ul",
                            mainCell: ".bd ul",
                            effect: "fold",
                            autoPlay: true,
                            autoPage: true,
                            trigger: "click",
                            interTime: "5" * 1000,
                            startFun: function (i)
                            {
                                var curLi = jQuery(".fullSlide .bd li").eq(i);
                                if (!!curLi.attr("_src"))
                                {
                                    curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
                                }
                            }
                        });
                    </script>
                </div>
            </div>
        </div>
        <!-- banner广告开始 -->
        <!-- 一列版式开始 -->
        <div id="box_main">
            <!-- 主体内容开始 -->
            <div id="box_left">
                <div id="box_left_sub1">
                    <div id="box_left_sub1_sub1">
                        <!--InstanceBeginEditable name="box_left_sub1_sub1"-->
                        <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1339492859175" name="说明页">
                            <div id="FrontSpecifies_show01-1339492859175" class="FrontSpecifies_show01-d1_c1"></div>
                        </div>
                        <!--InstanceEndEditable-->
                    </div>
                    <div id="box_left_sub1_sub2">
                        <!--InstanceBeginEditable name="box_left_sub1_sub2"-->
                        <div xmlns="" class="columnSpace" id="elem-FrontProductsCategory_show01-1339492834197" name="商品分类">
                            <script type="text/javascript" src="/publicScripts/products/FrontProductsCategory_show01.js"></script>
                            <script type="text/javascript">
                                //<![CDATA[
                                FrontProductsCategory_show01['FrontProductsCategory_show01-1339492834197_init'] = function ()
                                {
                                    jQuery("div[class^=FrontProductsCategory_show01-d1] > div.menu-first > ul > li").hover(function ()
                                    {
                                        jQuery("div[class^=FrontProductsCategory_show01-d1] .menu-second").hide();
                                        jQuery(this).children("div.menu-second").show();
                                        jQuery(this).children("div.menu-second > a.menu-text1").addClass("current");
                                    }, function ()
                                    {
                                        jQuery("div[class^=FrontProductsCategory_show01-d1] .menu-second").hide();
                                        jQuery(this).children("div.menu-second > a.menu-text1").removeClass("current");
                                    });
                                }
                                jQuery(document).ready(FrontProductsCategory_show01['FrontProductsCategory_show01-1339492834197_init']);
                                //]]>
                            </script>
                            <div id="FrontProductsCategory_show01-1339492834197" class="FrontProductsCategory_show01-d1_c1">
                                <div class="menu-first">
                                    <ul>
                                        <li class="menu-none">
                                            <a href="/Pro_Catagory/Catagory1.aspx" target="_self" class="menu-text1">FT合成蜡</a>
                                        </li>
                                         <li class="menu-none">
                                            <a href="/Pro_Catagory/Catagory2.aspx" target="_self" class="menu-text1">石油蜡微晶蜡</a>
                                        </li>
                                         <li class="menu-none">
                                            <a href="/Pro_Catagory/Catagory3.aspx" target="_self" class="menu-text1">特种蜡</a>
                                        </li>
                                         <li class="menu-none">
                                            <a href="/Pro_Catagory/Catagory4.aspx" target="_self" class="menu-text1">润滑油</a>
                                        </li>
                                         <li class="menu-none">
                                            <a href="/Pro_Catagory/Catagory5.aspx" target="_self" class="menu-text1">相变蜡</a>
                                        </li>
                                         <li class="menu-none">
                                            <a href="/Pro_Catagory/Catagory6.aspx" target="_self" class="menu-text1">氯化石蜡</a>
                                        </li>
                                        <li class="menu-none">
                                            <a href="/Pro_Catagory/Catagory7.aspx" target="_self" class="menu-text1">其他产品</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--InstanceEndEditable-->
                    </div>
                </div>
                <div id="box_left_sub2">
                    <div id="box_left_sub2_sub1">
                        <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1339488016849" name="说明页">
                            <div id="FrontSpecifies_show01-1339488016849" class="FrontSpecifies_show01-d1_c1">
                                <p>
                                   <%-- <a href="/messages_list.html">
                                        <img alt="" src="/imageRepository/9a4e7528-d208-4308-a28a-4fe701fbf613.jpg" /></a>--%>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="box_left_sub2_sub2">
                        <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1339488126451" name="说明页">
                            <div id="FrontSpecifies_show01-1339488126451" class="FrontSpecifies_show01-d1_c1">
                                <p>
                                    <img alt="" src="IMG/电话.jpg" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="box_right">
                <div id="box_right_sub1">
                    <!--InstanceBeginEditable name="box_right_sub1"-->
                    <div class="clearBoth"></div>
                    <div xmlns="" class="columnSpace" id="elem-FrontProducts_list01-00412" name="商品列表">
                        <script type="text/javascript" src="/publicScripts/products/FrontProducts_list01.js"></script>
                        <!-- 装饰器样式开始 -->
                        <div class="border_00">
                            <div class="border_00-topr">
                                <div class="border_00-topl">
                                </div>
                            </div>
                            <div class="border_00-mid">
                                <div class="borderContent">
                                    <div id="FrontProducts_list01-00412" class="FrontProducts_list01-d1_c1">
                                        <div class="comptitle_00"><strong class="titlestyle_00">产品展示</strong><em><span class="moreLink"></span></em></div>
                                        <form id="FrontProducts_list01-00412_Form" name="FrontProducts_list01-00412_Form" action="/FrontProducts.do?method=submit" method="post">
                                            <input type="hidden" name="action_page" value="/products_search_result.html" />
                                            <input type="hidden" name="pmcId" value="21" />
                                            <input type="hidden" name="pmscId" value="23" />
                                            <input type="hidden" name="keyword" value="" />
                                            <input type="hidden" name="propertyId" value="" />
                                            <input type="hidden" name="searchType" value="" />
                                            <input type="hidden" name="brandId" value="" />
                                            <input type="hidden" name="beginValue" value="" />
                                            <input type="hidden" name="endValue" value="" />
                                            <input type="hidden" name="orderby" value="8" />
                                            <input type="hidden" name="spType" value="" />
                                            <input type="hidden" name="pageNo_FrontProducts_list01-00412" value="1" />
                                            <input type="hidden" name="pageSize_FrontProducts_list01-00412" value="12" />
                                        </form>
                                        <div class="type">
                                            <span class="sort"></span>
                                        </div>
                                        <ul class="mainul productlist-02">
                                            <li class="content column-num4">
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="/products_detail/productId=26.html"
                                                            title="45号" target="_self">
                                                            <img src="/imageRepository/213713da-30a8-47f2-bd98-c51b4512b2ea.jpg" id="FrontProducts_list01-00412_26" alt="" title="45号" onerror="this.src='/images/common/noimage.jpg'" /></a>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="code">
                                                            <h1>
                                                                <span>商品名称：</span>
                                                                <strong>
                                                                    <a href="/products_detail/productId=26.html"
                                                                        title="45号"
                                                                        target="_self">45号</a>
                                                                </strong>
                                                            </h1>
                                                        </li>
                                                    </ul>
                                                    <p class="buttonP">
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="content column-num4">
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="/products_detail/productId=27.html"
                                                            title="52号" target="_self">
                                                            <img src="/imageRepository/334270c2-d20d-4e8a-b1e6-9e1ed1065046.jpg" id="FrontProducts_list01-00412_27" alt="" title="52号" onerror="this.src='/images/common/noimage.jpg'" /></a>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="code">
                                                            <h1>
                                                                <span>商品名称：</span>
                                                                <strong>
                                                                    <a href="/products_detail/productId=27.html"
                                                                        title="52号"
                                                                        target="_self">52号</a>
                                                                </strong>
                                                            </h1>
                                                        </li>
                                                    </ul>
                                                    <p class="buttonP">
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="content column-num4">
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="/products_detail/productId=24.html"
                                                            title="60号" target="_self">
                                                            <img src="/imageRepository/b62907e7-0aa9-4ba9-9b17-ead23b1c3abe.jpg" id="FrontProducts_list01-00412_24" alt="" title="60号" onerror="this.src='/images/common/noimage.jpg'" /></a>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="code">
                                                            <h1>
                                                                <span>商品名称：</span>
                                                                <strong>
                                                                    <a href="/products_detail/productId=24.html"
                                                                        title="60号"
                                                                        target="_self">60号</a>
                                                                </strong>
                                                            </h1>
                                                        </li>
                                                    </ul>
                                                    <p class="buttonP">
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="content column-num4">
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="/products_detail/productId=21.html"
                                                            title="70号" target="_self">
                                                            <img src="/imageRepository/93abce1b-0c65-4842-83a6-6ffeee8ee203.jpg" id="FrontProducts_list01-00412_21" alt="" title="70号" onerror="this.src='/images/common/noimage.jpg'" /></a>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="code">
                                                            <h1>
                                                                <span>商品名称：</span>
                                                                <strong>
                                                                    <a href="/products_detail/productId=21.html"
                                                                        title="70号"
                                                                        target="_self">70号</a>
                                                                </strong>
                                                            </h1>
                                                        </li>
                                                    </ul>
                                                    <p class="buttonP">
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="clearBoth"></li>
                                            <li class="content column-num4">
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="/products_detail/productId=28.html"
                                                            title="95号" target="_self">
                                                            <img src="/imageRepository/0273f474-8a0e-4555-95ce-3d1adb99b485.jpg" id="FrontProducts_list01-00412_28" alt="" title="95号" onerror="this.src='/images/common/noimage.jpg'" /></a>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="code">
                                                            <h1>
                                                                <span>商品名称：</span>
                                                                <strong>
                                                                    <a href="/products_detail/productId=28.html"
                                                                        title="95号"
                                                                        target="_self">95号</a>
                                                                </strong>
                                                            </h1>
                                                        </li>
                                                    </ul>
                                                    <p class="buttonP">
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="content column-num4">
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="/products_detail/productId=25.html"
                                                            title="105号" target="_self">
                                                            <img src="/imageRepository/8a0f1139-2428-4bc7-ad14-a808465412ee.jpg" id="FrontProducts_list01-00412_25" alt="" title="105号" onerror="this.src='/images/common/noimage.jpg'" /></a>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="code">
                                                            <h1>
                                                                <span>商品名称：</span>
                                                                <strong>
                                                                    <a href="/products_detail/productId=25.html"
                                                                        title="105号"
                                                                        target="_self">105号</a>
                                                                </strong>
                                                            </h1>
                                                        </li>
                                                    </ul>
                                                    <p class="buttonP">
                                                    </p>
                                                </div>
                                            </li>
                                             <li class="content column-num4">
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="/products_detail/productId=27.html"
                                                            title="110号" target="_self">
                                                            <img src="/imageRepository/334270c2-d20d-4e8a-b1e6-9e1ed1065046.jpg" id="FrontProducts_list01-00412_22" alt="" title="110号" onerror="this.src='/images/common/noimage.jpg'" /></a>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="code">
                                                            <h1>
                                                                <span>商品名称：</span>
                                                                <strong>
                                                                    <a href="/products_detail/productId=27.html"
                                                                        title="110号"
                                                                        target="_self">110号</a>
                                                                </strong>
                                                            </h1>
                                                        </li>
                                                    </ul>
                                                    <p class="buttonP">
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="clearBoth"></li>
                                        </ul>
                                        <div class="skip-pages">
                                        </div>
                                        <script type="text/javascript">
                                            //<![CDATA[
                                            FrontProducts_list01['FrontProducts_list01-00412_init'] = function ()
                                            {
                                                jQuery(".specChangeImg").click(function ()
                                                {
                                                    var data = $(this).metadata();
                                                    var srcStr = data.smallImgUrl;
                                                    var defaultImg = data.defaultImg;
                                                    $(this).parent().find(".specChangeImg").removeClass("click");
                                                    $(this).addClass("click")
                                                    if (srcStr != "")
                                                    {
                                                        jQuery("#FrontProducts_list01-00412_" + data.id).attr("src", srcStr);
                                                    } else
                                                    {
                                                        if (defaultImg != "")
                                                        {
                                                            jQuery("#FrontProducts_list01-00412_" + data.id).attr("src", defaultImg);
                                                        } else
                                                        {
                                                            jQuery("#FrontProducts_list01-00412_" + data.id).attr("src", "/images/common/noimage.jpg");
                                                        }
                                                    }
                                                });
                                            };
                                            jQuery(document).ready(FrontProducts_list01['FrontProducts_list01-00412_init']);
                                            //]]>
                                        </script>
                                    </div>
                                    <div class="clearBoth"></div>
                                </div>
                            </div>
                        </div>
                        <!-- 装饰器样式结束 -->
                        <script type="text/javascript">
                        </script>
                    </div>
                    <!--InstanceEndEditable-->
                </div>
                <div id="box_right_sub2">
                    <!--InstanceBeginEditable name="box_right_sub2"-->
                    <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1454578184185" name="说明页">
                        <div id="FrontSpecifies_show01-1454578184185" class="FrontSpecifies_show01-d1_c1"></div>
                    </div>
                    <!--InstanceEndEditable-->
                </div>
            </div>
            <!-- 主体内容结束 -->
            <div class="clearBoth"></div>
        </div>
        <!-- 一列版式结束 -->
        <div id="box_footer">
            <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1454408098260" name="说明页">
                <div id="FrontSpecifies_show01-1454408098260" class="FrontSpecifies_show01-d1_c1">
                     <p>
                        &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  <b>联系方式 : &nbsp 电话：021-58598507 传真：021-58598507 凌经理 15565358067 潘先生 18321912578 地址：上海浦东新区张杨路828-838号26楼 </b>
                    </p>
                </div>
            </div>
        </div>
        <!-- 默认隐藏样式(可编辑区域) 开始-->
        <!-- 默认隐藏样式(可编辑区域) 结束-->
    </div>
    <!-- InstanceEnd -->
</body>
</html>
