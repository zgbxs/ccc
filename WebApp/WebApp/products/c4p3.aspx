<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="c4p3.aspx.cs" Inherits="WebApp.products.c4p3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<!-- InstanceBegin template="/Templates/about.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <link href="/styles/page_products_detail.css" rel="stylesheet" type="text/css" />
    <title>上海爱佑化工新材料有限公司</title>
    <meta name="keywords" content="上海爱佑化工新材料有限公司" />
    <meta name="description" content="上海爱佑化工新材料有限公司主要从事化工产品" />

    <script type="text/javascript" src="/publicScripts/common/jquery.js"></script>
    <script type="text/javascript" src="/publicScripts/lib.min.js"></script>
</head>
<body id="products_detail">
    <div class="pageWidth" id="box_root">
        <!-- 头部导航开始 -->
        <div id="box_header">
            <div id="box_header_top">
                <div id="box_logo">
                    <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1454566694480" name="说明页">
                        <div id="FrontSpecifies_show01-1454566694480" class="FrontSpecifies_show01-d1_c1">
                            <p>
                                <a href="/home.aspx">
                                    <img alt="" src="/images/a/logo.jpg" /></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="box_seach">
                    <div xmlns="" class="columnSpace" id="elem-FrontColumns_navigation01-1454567950644" name="栏目导航">
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
                        <div xmlns="" class="columnSpace" id="elem-FrontSpecifies_show01-1339496395516" name="说明页">
                            <div id="FrontSpecifies_show01-1339496395516" class="FrontSpecifies_show01-d1_c1">
                                <p>
                                    <img alt="" src="/imageRepository/f7d81c4f-88e5-45dc-a20c-7a6c6666dbae.jpg" />
                                </p>
                            </div>
                        </div>
                        <!--InstanceEndEditable-->
                    </div>
                    <div id="box_left_sub1_sub2">
                        <!--InstanceBeginEditable name="box_left_sub1_sub2"-->
                        <div xmlns="" class="columnSpace" id="elem-FrontProductsCategory_show01-1339496384106" name="商品分类">
                            <script type="text/javascript" src="/publicScripts/products/FrontProductsCategory_show01.js"></script>
                            <script type="text/javascript">
                                //<![CDATA[
                                FrontProductsCategory_show01['FrontProductsCategory_show01-1339496384106_init'] = function ()
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
                                jQuery(document).ready(FrontProductsCategory_show01['FrontProductsCategory_show01-1339496384106_init']);
                                //]]>
                            </script>
                            <div id="FrontProductsCategory_show01-1339496384106" class="FrontProductsCategory_show01-d1_c1">
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
                               <%-- <p>
                                    <a href="/messages_list.html">
                                        <img alt="" src="/imageRepository/9a4e7528-d208-4308-a28a-4fe701fbf613.jpg" /></a>
                                </p>--%>
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
                    <div xmlns="" class="columnSpace" id="elem-FrontProducts_detail02-001" name="商品详细信息">
                        <script type="text/javascript"
                            src="/publicScripts/products/FrontProducts.js"></script>
                        <!-- 装饰器样式开始 -->
                        <div class="border_00">
                            <div class="border_00-topr">
                                <div class="border_00-topl">
                                </div>
                            </div>
                            <div class="border_00-mid">
                                <div class="borderContent">
                                    <div id="FrontProducts_detail02-001" class="FrontProducts_detail02-d1_c1">
                                        <div class="comptitle_00"><strong class="titlestyle_00">产品详细</strong></div>
                                        <script type="text/javascript" src="/publicScripts/products/FrontProducts_detail02.js"></script>
                                        <script type="text/javascript">
                                            //<![CDATA[
                                            var i18n_FrontProducts_detail02_down = "对不起，您没有下载该文件的权限！";
                                            var i18n_FrontProducts_detail02_error_101 = "数量应输入半角数字！";
                                            var i18n_FrontProducts_detail02_error_102 = "请填写数量！";
                                            var i18n_FrontProducts_detail02_noright = "您所在的会员级别没有权限查看该商品！";
                                            var i18n_FrontProducts_detail02_unlogin = "请登录后查看该商品！";
                                            var i18n_FrontProducts_detail02_noProductItemId = "请选择货品！";
                                            var i18n_FrontProducts_detail02_orderXNotNull = "不能为空！";
                                            var i18n_FrontProducts_detail02_panorama = "全景展示商品";
                                            //]]>
                                        </script>
                                        <script type="text/javascript" src="/widgets/jquery-plugin/jquery.metadata.js"></script>
                                        <script type="text/javascript" src="/publicScripts/products/FrontProducts.js"></script>
                                        <script type="text/javascript">
                                            jQuery(document).ready(function ()
                                            {
                                                var productIshave = "false";
                                                FrontProducts_detail02_images();
                                                jQuery("li.user-choose div.choose-property span.specValue").click(function ()
                                                {
                                                    var detail02 = jQuery("#FrontProducts_detail02-001");
                                                    var productImgs = detail02.find("div.picarea div.imgbox ul li");
                                                    if (jQuery(this).hasClass("click"))
                                                    {
                                                        jQuery(this).removeClass("click");
                                                        jQuery(this).parent("li").children("input[type='hidden']").val("");
                                                    } else
                                                    {
                                                        jQuery(this).parent("li").children("span.specValue").removeClass("click");
                                                        jQuery(this).addClass("click");
                                                        var specValueId = jQuery(this).metadata().specValueId;
                                                        jQuery(this).parent("li").children("input[type='hidden']").val(specValueId);
                                                    }
                                                    if (productIshave == "true")
                                                    {
                                                        jQuery("#FrontProducts_detail02-001_buyBtn").show();
                                                    } else
                                                    {
                                                        jQuery("#FrontProducts_detail02-001_lackBtn").hide();
                                                    }
                                                    FrontProducts_detail02_images();
                                                    var productSpecs = jQuery(this).parents("div.choose-property");
                                                    var noChooseSpec = productSpecs.find("input[type='hidden'][name^='spec'][value='']");
                                                    var productItem = productSpecs.children("ul.specifications");
                                                    if (noChooseSpec.length == 0)
                                                    {
                                                        jQuery.ajax({
                                                            url: "/comp-FrontProductsItem_detailBySpecJson01-001",
                                                            type: 'post',
                                                            dataType: 'json',
                                                            data: jQuery(this).parents("form:first").serialize(),
                                                            timeout: 5000,
                                                            cache: false,
                                                            async: true,
                                                            error: function ()
                                                            {
                                                            },
                                                            success: function (json)
                                                            {
                                                                if (typeof (json.id) == "undefined")
                                                                {
                                                                    productSpecs.children("input[type='hidden'][name='productItemId']").val("");
                                                                    productItem.hide();
                                                                } else
                                                                {
                                                                    productSpecs.children("input[type='hidden'][name='productItemId']").val(json.id);
                                                                    productItem.children("li.item").children("span:last").text(json.itemCode);
                                                                    productItem.children("li.price").children("span:last").text(json.finalPrice.toFixed(2));
                                                                    productItem.children("li.weight").children("span:last").text(json.weight.toFixed(2));
                                                                    productItem.show();
                                                                }
                                                            }
                                                        });
                                                    } else
                                                    {
                                                        productSpecs.children("input[type='hidden'][name='productItemId']").val("");
                                                        productItem.hide();
                                                    }
                                                });
                                            });
                                            function FrontProducts_detail02_images()
                                            {
                                                jQuery.ajax({
                                                    url: "/comp-FrontProductsItem_imagesBySpecJson01-001",
                                                    type: 'post',
                                                    dataType: 'json',
                                                    data: jQuery("#FrontProducts_detail02-001 form").serialize(),
                                                    timeout: 5000,
                                                    cache: false,
                                                    async: true,
                                                    error: function ()
                                                    {
                                                    },
                                                    success: function (json)
                                                    {
                                                        var imagesLi = jQuery("#FrontProducts_detail02-001 div.picarea div.imgbox ul li");
                                                        imagesLi.empty();
                                                        for (var i = 0; i < json.length; i++)
                                                        {
                                                            imagesLi.append("<a href='javascript:'><img onclick='changeBigImg(this)' src='" + json[i] + "' alt='' onerror=\"this.src='/images/common/noimage.jpg'\"/></a>");
                                                        }
                                                        var firstImg = imagesLi.find("a:first img");
                                                        if (firstImg.length > 0)
                                                        {
                                                            changeBigImg(firstImg.get(0));
                                                        }
                                                        FrontProducts_detail02_initScrollCount();
                                                        if (jQuery("#FrontProducts_detail02-001_key10ScrollDiv").length > 0)
                                                        {
                                                            FrontProducts_detail02_initScroll();
                                                        }
                                                    }
                                                });
                                            }
                                            function FrontProducts_detail02_initScrollCount()
                                            {
                                                var maxImageNum = jQuery("#FrontProducts_detail02-001_key10Picarea").innerWidth() / jQuery("#FrontProducts_detail02-001_key10imglist > a").outerWidth(true);
                                                jQuery("#FrontProducts_detail02-001_key10imglist > a").hide();
                                                jQuery("#FrontProducts_detail02-001_key10imglist > a").each(function (i)
                                                {
                                                    if (i < maxImageNum - 1)
                                                    {
                                                        jQuery(this).show();
                                                    }
                                                });
                                            }
                                            function FrontProducts_detail02_recalculated()
                                            {
                                                var j = 0;
                                                var maxImageNum = jQuery("#FrontProducts_detail02-001_key10Picarea").innerWidth() / jQuery("#FrontProducts_detail02-001_key10imglist > a").outerWidth(true);
                                                jQuery("#FrontProducts_detail02-001_key10imglist > a").each(function (i)
                                                {
                                                    if (jQuery(this).is(":visible"))
                                                    {
                                                        if (maxImageNum < j)
                                                        {
                                                            jQuery(this).hide();
                                                        }
                                                        j = j + 1;
                                                    }
                                                });
                                            }
                                            function FrontProducts_detail02_initScroll()
                                            {
                                                var nextNOImg = "/images/products/next-no.gif";
                                                var nextCurrentImg = "/images/products/next-current.gif";
                                                var preNOImg = "/images/products/pre-no.gif";
                                                var preCurrentImg = "/images/products/pre-current.gif";
                                                if (jQuery("#FrontProducts_detail02-001_key10imglist > a:first").is(":visible"))
                                                {
                                                    jQuery("#FrontProducts_detail02-001_clickimgL").attr("src", preNOImg);
                                                } else
                                                {
                                                    jQuery("#FrontProducts_detail02-001_clickimgL").attr("src", preCurrentImg);
                                                }
                                                if (jQuery("#FrontProducts_detail02-001_key10imglist > a:last").is(":visible"))
                                                {
                                                    jQuery("#FrontProducts_detail02-001_clickimgR").attr("src", nextNOImg);
                                                } else
                                                {
                                                    jQuery("#FrontProducts_detail02-001_clickimgR").attr("src", nextCurrentImg);
                                                }
                                                jQuery("#FrontProducts_detail02-001_clickimgR").parent().show();
                                                jQuery("#FrontProducts_detail02-001_clickimgL").parent().show();
                                            }
                                            function FrontProducts_detail02_scroll(divId, px)
                                            {
                                                if (px > 0 && jQuery("#FrontProducts_detail02-001_key10imglist > a:first").is(":hidden"))
                                                {
                                                    var a = jQuery("#FrontProducts_detail02-001_key10imglist > a:visible:first").prevAll("a:first");
                                                    var b = jQuery("#FrontProducts_detail02-001_key10imglist > a:visible:last");
                                                    jQuery(a).show("normal", FrontProducts_detail02_initScroll);
                                                    jQuery(b).hide();
                                                } else if (px < 0 && jQuery("#FrontProducts_detail02-001_key10imglist > a:last").is(":hidden"))
                                                {
                                                    var a = jQuery("#FrontProducts_detail02-001_key10imglist > a:visible:last").nextAll("a:first");
                                                    var b = jQuery("#FrontProducts_detail02-001_key10imglist > a:visible:first");
                                                    jQuery(a).show();
                                                    jQuery(b).hide("normal", FrontProducts_detail02_initScroll);
                                                }
                                                FrontProducts_detail02_recalculated();
                                            }
                                            function changeBigImg(thisobj)
                                            {
                                                var imgUrl = jQuery(thisobj).attr("src");
                                                var bigImgUrlObj = jQuery("#FrontProducts_detail02-001_bigImgUrl");
                                                jQuery("#FrontProducts_detail02-001_bigImg").attr("src", imgUrl);
                                                jQuery("#FrontProducts_detail02-001_bigImg").attr("jqimg", imgUrl);
                                                if (bigImgUrlObj.length > 0)
                                                {
                                                    if (bigImgUrlObj.hasClass("bigforImg"))
                                                    {
                                                        bigImgUrlObj.attr("href", imgUrl);
                                                    }
                                                }
                                                jQuery(document).ready(function ()
                                                {
                                                    jQuery("#FrontProducts_detail02-001 div.picarea div.imgbox ul li img").hover(function ()
                                                    {
                                                        $(this).addClass("currentSmallImg");
                                                    }, function ()
                                                    {
                                                        $(this).removeClass("currentSmallImg");
                                                        jQuery(".currentSmallImg").removeAttr("class");
                                                        jQuery(thisobj).attr("class", "currentSmallImg");
                                                    })
                                                })
                                            }
                                        </script>
                                        <form name="FrontProducts_detail02-001_subm" id="FrontProducts_detail02-001_subm" method="post">
                                            <div class="content">
                                                <input type="hidden" value="7" name="v_id" id="v_id"></input>
                                                <input type="hidden" value="液氨" name="v_nm" id="v_nm"></input>
                                                <input type="hidden" value="缺省模板" name="v_tp" id="v_tp"></input>
                                                <input type="hidden" value="液氨" name="v_ct"></input>
                                                <input type="hidden" value="" name="v_br" id="v_br"></input>
                                                <div class="pic-module">
                                                    <div class="pic">
                                                        <a href="javascript:">
                                                            <div id="FrontProducts_detail02-001_isjqzoom" class='jqzoom'>
                                                                <img id="FrontProducts_detail02-001_bigImg" class="pic-img"
                                                                    src="/imageRepository/a387e024-b47c-43b3-b0b2-6ef36147948e.jpg"
                                                                    alt="液氨"
                                                                    jqimg="/imageRepository/a387e024-b47c-43b3-b0b2-6ef36147948e.jpg"
                                                                    onerror="this.src='/images/common/noimage.jpg';this.jqimg='/images/common/noimage.jpg'" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <span class="zoom"></span>
                                                    <span class="lab"></span>
                                                    <div class="btnarea" style='display: none'>
                                                    </div>
                                                    <div id="FrontProducts_detail02-001_moreImgdiv" class="show">
                                                        <a class="clickL" style="display: none" href="javaScript:FrontProducts_detail02_scroll('FrontProducts_detail02-001_key10ScrollDiv',84)" title="请点击 ">
                                                            <img src="/../../images/products/pre-no.gif" id="FrontProducts_detail02-001_clickimgL" alt="请点击 " /></a>
                                                        <div id="FrontProducts_detail02-001_key10Picarea" class="picarea">
                                                            <div id="FrontProducts_detail02-001_key10ScrollDiv" class="imgbox">
                                                                <ul>
                                                                    <li id="FrontProducts_detail02-001_key10imglist" class="mutilimg"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <a class="clickR" style="display: none" href="javaScript:FrontProducts_detail02_scroll('FrontProducts_detail02-001_key10ScrollDiv',-84)" title="请点击 ">
                                                            <img src="/../../images/products/next-current.gif" id="FrontProducts_detail02-001_clickimgR" alt="请点击 " /></a>
                                                    </div>
                                                    <div class="skimpro">
                                                        <%-- <h4><em class="focustext"><a href="/products_list/pmcId=21.html" target="_self">浏览同类商品</a></em></h4>
                                                        <p class="pre">
                                                            <span>上一页：</span>
                                                            <a href="/products_detail/productId=24.html" target="_self" title="液氨">液氨</a>
                                                        </p>
                                                        <p class="next">
                                                            <span>下一页：</span>
                                                            <a href="/products_detail/productId=26.html" target="_self" title="液氨">液氨</a>
                                                        </p>--%>
                                                    </div>
                                                </div>
                                                <div class="pro-module">
                                                    <ul class="basic">
                                                        <li class="name1"><span>商品名称：</span>
                                                            润滑油3号</li>
                                                        <li class="code">
                                                            <span>运动粘度（40℃ mm2/s）：</span>
                                                            170-230</li>
                                                        <li class="code">
                                                            <span>倾点℃：</span>
                                                            0</li>
                                                        <li class="code">
                                                            <span>比色号：</span>
                                                           5
                                                        </li>
                                                    </ul>
                                                   <%-- <ul class="choose">
                                                    </ul>
                                                    <p class="buttonP">
                                                        <a class="btna btna-unimp-04" href="/public_recommend_products/dataID=27.html" target="_blank" title="好友推荐">
                                                            <span class="btna-s">好友推荐</span>
                                                        </a>
                                                    </p>--%>
                                                </div>
                                            </div>
                                            <div class="detail">
                                                <%--<ul id="FrontProducts_detail02-001_tabsFlag">
                                                    <li class="current"><a name="FrontProducts_detail02-001_description" href="javascript:" title="详细介绍">详细介绍</a></li>
                                                </ul>
                                                <div id="FrontProducts_detail02-001_description" class="describe htmledit showtabdiv">
                                                </div>--%>
                                            </div>
                                            <div class="other">
                                                <%-- <p class="keyword">
                                                    <span>关键词：</span>
                                                    <a href="javascript:FrontProducts_detail02.setKeyWord('','FrontProducts_detail02-001_keywordForm');FrontProducts_detail02.keywordSubmit('FrontProducts_detail02-001_keywordForm')"></a>
                                                </p>--%>
                                            </div>
                                            <input name="ctx" type="hidden" value="" />
                                            <input name="productId" id="productid" type="hidden" value="27" />
                                            <input type="hidden" name="action_page" value="" />
                                            <input type="hidden" name="action_target" value="_self" />
                                            <input type="hidden" name="order0_hidden" value="" />
                                            <input type="hidden" name="order1_hidden" value="" />
                                            <input type="hidden" name="order2_hidden" value="" />
                                            <input type="hidden" name="order3_hidden" value="" />
                                            <input type="hidden" name="order4_hidden" value="" />
                                            <input type="hidden" name="order5_hidden" value="" />
                                            <input type="hidden" name="order6_hidden" value="" />
                                            <input type="hidden" name="order7_hidden" value="" />
                                            <input type="hidden" name="order8_hidden" value="" />
                                            <input type="hidden" name="order9_hidden" value="" />
                                            <input type="hidden" name="order10_hidden" value="" />
                                            <input type="hidden" name="order11_hidden" value="" />
                                            <input type="hidden" name="order12_hidden" value="" />
                                            <input type="hidden" name="order13_hidden" value="" />
                                            <input type="hidden" name="order14_hidden" value="" />
                                        </form>
                                        <form id="FrontProducts_detail02-001_keywordForm" action="/FrontProducts.do?method=submit" target="_self" method="post">
                                            <input type="hidden" name="keyword" value="" />
                                            <input type="hidden" id="FrontProducts_detail02-001_searchType" name="searchType" value="1" />
                                            <input type="hidden" name="action_page" value="/products_list.html" />
                                        </form>
                                        <form id="FrontProducts_detail02-001_lackForm" action="/FrontProducts.do?method=submit" target="_blank" method="post">
                                            <input type="hidden" name="productId" value="27" />
                                            <input type="hidden" name="productItemId" value="" />
                                            <input type="hidden" name="action_page" value="/order_oos_book.html" />
                                        </form>
                                        <input type="hidden" id="FrontProducts_detail02-001_panoramaUrl" value="/panorama/panoramaid=27.html" />
                                        <script type="text/javascript">
                                            //<![CDATA[
                                            FrontProducts_detail02['FrontProducts_detail02-001_init'] = function ()
                                            {
                                                var showimage = jQuery("#FrontProducts_detail02-001 #small_image");
                                                if (showimage.length > 0 && showimage.attr("src") == "")
                                                {
                                                    showimage.attr("src", "/images/common/noimage.jpg");
                                                }
                                                FrontProducts_detail02.init_addHitnumber('/FrontProducts.do?method=addHitnumber', '27', 'FrontProducts_detail02-001_showhitnumber');
                                                if (jQuery("#FrontProducts_detail02-001_isjqzoom").hasClass("jqzoom"))
                                                {
                                                    jQuery(".jqzoom").jqueryzoom({ xzoom: 300, yzoom: 300, offset: 10, position: "right", preload: 1, lens: 1 });
                                                }
                                                FrontProducts_detail02.defaultTab("FrontProducts_detail02-001");
                                                FrontProducts_detail02.changeTab("FrontProducts_detail02-001");
                                                perpareChangeLink();
                                                if (jQuery("#FrontProducts_detail02-001 #btnpanorama").length > 0)
                                                {
                                                    FrontProducts.createModalDialog("panoramaModalDialog", 765, 640, i18n_FrontProducts_detail02_panorama);
                                                    jQuery("#btnpanorama").click(function ()
                                                    {
                                                        var url = jQuery("#FrontProducts_detail02-001_panoramaUrl").val()
                                                        FrontProducts.openModalDialog("panoramaModalDialog", url);
                                                    });
                                                }
                                            }
                                            function perpareChangeLink()
                                            {
                                            }
                                            jQuery(document).ready(FrontProducts_detail02['FrontProducts_detail02-001_init']);
                                            function checkLessAmt(comId)
                                            {
                                                String.prototype.trim = function ()
                                                {
                                                    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                                                }
                                                var buyAmt = $("#" + comId).find("#amount").val();
                                                var needAmt = "";
                                                var _flag = $("#" + comId).find(".lessnum").html() == null ? false : true;
                                                if (_flag)
                                                {
                                                    needAmt = $("#" + comId).find(".lessnum").html().trim().split('>')[2].trim().split('\<')[0].trim();
                                                }
                                                if (null != needAmt && typeof (needAmt) != "undefined" && "" != needAmt)
                                                {
                                                    if (parseInt(buyAmt) < parseInt(needAmt))
                                                    {
                                                        alert("购买数量不能低于最低购买量");
                                                        return false;
                                                    } else
                                                    {
                                                        return true;
                                                    }
                                                } else
                                                {
                                                    return true;
                                                }
                                            };
                                            //]]>
                                        </script>
                                    </div>
                                    <div class="clearBoth"></div>
                                </div>
                            </div>
                        </div>
                        <!-- 装饰器样式结束 -->
                    </div>
                    <!--InstanceEndEditable-->
                </div>
            </div>
            <!-- 主体内容结束 -->
            <div class="clearBoth"></div>
        </div>
        <!-- 一列版式结束 -->
        <!--#include virtual ="/footer.aspx"-->
        <!-- 默认隐藏样式(可编辑区域) 开始-->
        <!-- 默认隐藏样式(可编辑区域) 结束-->
    </div>
    <!-- InstanceEnd -->
</body>
</html>
