/**
 * Created by Administrator on 2017/5/19 0019.
 */
/***********************首页**********************/
Views.indexView = $.extend({}, Views.PanelView, {
    options: {
        tmpl: 'index',
        hasFootNav: true,
        footItemOrder: 0, // hasFootNav设置true才有效   表示现在远着的是底部第几个菜单 0开始
        itemClass: 'item'
    },

    willShow: function (param, isBackPage) {
        this.show(param, isBackPage);
        $('#tel').css('display','none');
        $('#index').css('display','block');
        $('#asd').css('display','none');


    },

    didShow: function () {
        var swiper1 = new Swiper('.swiper1', {
            loop: true,
            autoplay: 3000,

        });
        var swiper2 = new Swiper('.swiper2', {
            loop: true,
            freeMode : true,
            freeModeMomentumRatio :0.5,
            slidesPerView:2.2,
            spaceBetween:10,
        });
    },

    //跳转到消息
    information:function(){
        Views.informationView.show();
    },

    //搜索
    seach:function(){
        Views.rakeThroughView.show();
    },

    //公益
    raise:function(){
        Views.raiseListView.show();
        $('#tel').css('display','none');
        $('#index').css('display','none');
        $('#asd').css('display','block');
    },

    //扫码支付
    payment:function(){
        Views.sweepCodeHomeView.show();
    },

    //个人美妆
    classification:function(){
        Views.classificationView.show();
    },

    //充值
    recharge:function(){
        Views.voucherCenterView.show();
    },

    //商品详情
    commodityDetails:function(){
        Views.commodityDetailsView.show();
    },
})


