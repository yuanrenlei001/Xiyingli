/**
 * Created by Administrator on 2017/5/22 0022.
 */
/***********************个人美妆start**********************/
Views.classificationView = $.extend({}, Views.PanelView, {
    options: {
        tmpl: 'classification',
        hasFootNav: true,
        footItemOrder: 0, // hasFootNav设置true才有效   表示现在远着的是底部第几个菜单 0开始
        itemClass: 'item'
    },

    willShow: function (param, isBackPage) {
        this.show(param, isBackPage);
    },

    didShow: function () {
        addEventListener();

        $('.dropDown').click(function(){
            $('.ciMask').css("display","block");
            $('.dropDownBox').css("display","block");
            $('html').css({'overflow':'hidden','height':'100%'});
            $('body').css({'overflow':'hidden','height':'100%'});
        })

        $('.ciMask').click(function(){
            $('.ciMask').css("display","none");
            $('.dropDownBox').css("display","none");
            $('html').css({'overflow':'auto'});
            $('body').css({'overflow':'auto'});
        })

        $('.whole .right').click(function(){
            $('.ciMask').css("display","none");
            $('.dropDownBox').css("display","none");
            $('html').css({'overflow':'auto'});
            $('body').css({'overflow':'auto'});
        })

    },

    goInCommodityList:function(){
        Views.commodityListView.show();
    },
})
/***********************个人美妆end**********************/

/***********************商品详情start**********************/
Views.commodityDetailsView = $.extend({}, Views.PanelView, {
    options: {
        tmpl: 'commodityDetails',
        //hasFootNav: true,
        //footItemOrder: 0, // hasFootNav设置true才有效   表示现在远着的是底部第几个菜单 0开始
        //itemClass: 'item'
    },

    willShow: function (param, isBackPage) {
        this.show(param, isBackPage);
    },

    didShow: function () {
        addEventListener();
        //头部
        window.onscroll = function () {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t > 5) {
                $('.headTwo').stop().slideDown(800);
                $('.headOne').stop().slideUp(100);
            }else{
                $('.headOne').stop().slideDown(800);
                $('.headTwo').stop().slideUp(500);

            }
        };
        addEventListener();
        function addcoll(){
            if($('#collection').hasClass('collection')){
                $('#collection').removeClass('collection').addClass('collections');
            }else{
                $('#collection').removeClass('collections').addClass('collection');
            }
        }

        $('.more').click(function (e) {
            if($('#sDNew').css('display')=='none'){
                $('#sDNew').show();
            }else{
                $('#sDNew').hide();
            }
            $(document).click(function(){
                $('#sDNew').hide();
            })
            e.stopPropagation();
        })



    },
    // 各链接跳转
    // 首页
    com_index:function(){
        Views.indexView.show();
    },
    // 客服
    com_customer:function(){
        Views.customerServiceView.show();
    },
    // 我的
    com_mine:function(){
        Views.indexMineView.show();
    },
    // 店铺简介
    com_dianpu:function(){
        Views.shopIntroductionView.show();
    },
    // 分享
    com_fenxiang:function(){
        Views.sweepCodeHomeView.show();
    },

    // 店铺详情
    shop_room:function(){
        Views.storeDetailsView.show();
    }

});
/***********************商品详情end**********************/

/***********************商品列表start**********************/
Views.commodityListView = $.extend({}, Views.PanelView, {
    options: {
        tmpl: 'commodityList',
        //hasFootNav: true,
        //footItemOrder: 0, // hasFootNav设置true才有效   表示现在远着的是底部第几个菜单 0开始
        //itemClass: 'item'
    },

    willShow: function (param, isBackPage) {
        this.show(param, isBackPage);
    },

    didShow: function () {
        addEventListener();

        $(function() {
            //导航条的显示隐藏
            $('#more').click(function(){
                alert(1);
                var state =$('#sDNew').attr("data-state");
                if(state == "hide"){
                    $('#sDNew').show();
                    $('#sDNew').attr("data-state","show")
                }else{
                    $('#sDNew').hide();
                    $('#sDNew').attr("data-state","hide")
                }

            })

            //选择
            $('.screen .theme .listName').click(function(){
                if($(this).hasClass('listName')){
                    $(this).removeClass('listName');
                    $(this).addClass('selected');
                    $(this).append("<div class='delete'></div>");
                }else{
                    $(this).children('.delete').remove();
                    $(this).removeClass('selected');
                    $(this).addClass('listName');
                }

            })

            //筛选打开
            $('.sort .right').click(function(){
                $('.screen').show();
                $('.mask').show();
            })

            //筛选关闭
            $('.screen .close').click(function(){
                $('.screen').hide();
                $('.mask').hide();
            })
            $('.mask').click(function(){
                $('.screen').hide();
                $('.mask').hide();
            })

            //价格范围选择
            $('.theme .most').click(function(){
                var range = $(this).children('.range').html();
                var rangeArray = range.split("-");
                $('.theme .choice .minimum ').val(rangeArray[0]);
                $('.theme .choice .highest ').val(rangeArray[1]);
            })

            //重置
            $('.reset').click(function(){
                $('.screen .theme .selected').children('.delete').remove();
                $('.screen .theme .selected').removeClass('selected').addClass('listName');
            })

            //完成
            $('.complete').click(function(){
                var screen =[];
                var len =  $('.screen .theme .selected').length;
                for(var i=0; i<len; i++){
                    screen[i] = $('.screen .theme .selected').eq(i).text();
                }
                //var aa = $('.screen .theme .selected').text()+",";
                console.log(screen);
            })
        })
    },

    //商品详情
    commodityDetails:function(){
        Views.commodityDetailsView.show();
    },
})
/***********************商品列表end**********************/