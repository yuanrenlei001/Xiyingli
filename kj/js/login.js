/**
 * Created by Administrator on 2017/5/27 0027.
 */
/***********************登录start**********************/
Views.signInView = $.extend({}, Views.PanelView, {
    options: {
        tmpl: 'signIn',
        //hasFootNav: true,
        //footItemOrder: 0, // hasFootNav设置true才有效   表示现在远着的是底部第几个菜单 0开始
        //itemClass: 'item'
    },

    willShow: function (param, isBackPage) {
        this.show(param, isBackPage);
    },

    didShow: function () {
        $(function(){
            var ok1=false,ok2=false;
//            判断手机或邮箱格式是否正确
            var $phone = $('#account');
            function email(){
//                regs=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;//验证邮箱正则(输入前7位至11位)
                regs=/^\w+@[a-zA-Z0-9]+(\.[a-z]{2,3}){1,2}$/;
                if(!regs.test($phone.val())){
                    var str = '<div class="siPrompt">请填写正确邮箱！</div>';
                    $('#account').parent().parent().parent().find('.siPrompt').remove();
                    $('#account').parent().parent().parent().append(str);
                    ok1=false;
                }else {
                    $('#account').parent().parent().parent().find('.siPrompt').remove();
                    ok1=true;
                }
            }
            function phone(){
                reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)
                if(!reg.test($phone.val())){
                    var str = '<div class="siPrompt">请填写正确的手机号！</div>';
                    $('#account').parent().parent().parent().find('.siPrompt').remove();
                    $('#account').parent().parent().parent().append(str);
                    ok1=false;
                } else if(!($phone.val().length==11)){
                    var str = '<div class="siPrompt">手机号码位数不足11位！</div>';
                    $('#account').parent().parent().parent().find('.siPrompt').remove();
                    $('#account').parent().parent().parent().append(str);
                    ok1=false;
                }else {
                    $('#account').parent().parent().parent().find('.siPrompt').remove();
                    ok1=true;
                }
            }
            $phone.blur(function(){
                if($phone.val() == ''){
                    var str = '<div class="siPrompt">手机号/邮箱不能为空！</div>';
                    $(this).parent().parent().parent().find('.siPrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok1=false;
                }
                else if (!isNaN($phone.val())){
                    phone();
                }
                else if (isNaN($phone.val())){
                    email();
                }
            });

//            判断密码
            var $key = $('#password');
            $key.blur(function(){
                if( $key.val()==""){
                    var str = '<div class="siPrompt">密码不能为空！</div>';
                    $(this).parent().parent().parent().find('.siPrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok2=false;
                }
                else if ($key.val().replace(/(^s*)|(s*$)/g, "").length <6) {
                    var str='<div class="siPrompt">请输入6-16位的密码，区分大小写</div>';
                    $(this).parent().parent().parent().find('.siPrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok2=false;
                }
                else if ($key.val().replace(/(^s*)|(s*$)/g, "").length >18) {
                    var str='<div class="siPrompt">请输入6-18位的密码，区分大小写</div>';
                    $(this).parent().parent().parent().find('.siPrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok2=false;
                }
                else{
                    $(this).parent().parent().parent().find('.siPrompt').remove();
                    ok2=true;
                }
            });


// 所有条件 通过后才能提交
            $('#signInBtn').click(function(){
                if(ok1 && ok2){
                    $('#signInBtn').submit();
                }else{
                    $('.siDataBox').find("input").trigger("blur");
                    return false;
                }
            });
        });
    },

    goInRegister:function(){
        Views.registerView.show();
    },

    goInForgot:function(){
        Views.forgotPasswordView.show();
    }
})
/***********************登录end**********************/

/***********************注册start**********************/
Views.registerView = $.extend({}, Views.PanelView, {
    options: {
        tmpl: 'register',
        //hasFootNav: true,
        //footItemOrder: 0, // hasFootNav设置true才有效   表示现在远着的是底部第几个菜单 0开始
        //itemClass: 'item'
    },

    willShow: function (param, isBackPage) {
        this.show(param, isBackPage);
    },

    didShow: function () {
        $(function(){
            var ok1=false,ok2=false, ok3=false , ok4=false , ok5=false;
//            判断手机或邮箱格式是否正确
            var $phone = $('#account');
            function email(){
//                regs=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;//验证邮箱正则(输入前7位至11位)
                regs=/^\w+@[a-zA-Z0-9]+(\.[a-z]{2,3}){1,2}$/;
                if(!regs.test($phone.val())){
                    var str = '<div class="rePrompt">请填写正确邮箱！</div>';
                    $('#account').parent().parent().parent().find('.rePrompt').remove();
                    $('#account').parent().parent().parent().append(str);
                    ok1=false;
                }else {
                    $('#account').parent().parent().parent().find('.rePrompt').remove();
                    ok1=true;
                }
            }
            function phone(){
                reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)
                if(!reg.test($phone.val())){
                    var str = '<div class="rePrompt">请填写正确的手机号！</div>';
                    $('#account').parent().parent().parent().find('.rePrompt').remove();
                    $('#account').parent().parent().parent().append(str);
                    ok1=false;
                } else if(!($phone.val().length==11)){
                    var str = '<div class="rePrompt">手机号码位数不足11位！</div>';
                    $('#account').parent().parent().parent().find('.rePrompt').remove();
                    $('#account').parent().parent().parent().append(str);
                    ok1=false;
                }else {
                    $('#account').parent().parent().parent().find('.rePrompt').remove();
                    ok1=true;
                }
            }
            $phone.blur(function(){
                if($phone.val() == ''){
                    var str = '<div class="rePrompt">手机号/邮箱不能为空！</div>';
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok1=false;
                }
                else if (!isNaN($phone.val())){
                    phone();
                }
                else if (isNaN($phone.val())){
                    email();
                }
            });

//            判断密码
            var $key = $('#password');
            $key.blur(function(){
                if( $key.val()==""){
                    var str = '<div class="rePrompt">密码不能为空！</div>';
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok2=false;
                }
                else if ($key.val().replace(/(^s*)|(s*$)/g, "").length <6) {
                    var str='<div class="rePrompt">请输入6-16位的密码，区分大小写</div>';
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok2=false;
                }
                else if ($key.val().replace(/(^s*)|(s*$)/g, "").length >18) {
                    var str='<div class="rePrompt">请输入6-18位的密码，区分大小写</div>';
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok2=false;
                }
                else{
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    ok2=true;
                }
            });

//            判断两次密码是否一致
            var $keys = $('#passwords');
            $keys.blur(function(){
                if($keys.val() !== $key.val()){
                    var str='<div class="rePrompt">两次密码输入不一样!</div>';
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok3=false;
                }else {
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    ok3=true;
                }
            });

//            判断邀请码格式是否正确
            var $num = $('#yq_num');
            $num.blur(function(){
                if($num.val()==''){
                    var str='<div class="rePrompt">邀请码不能为空!</div>';
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    $(this).parent().parent().parent().append(str);
                    ok4=false;
                }else{
                    $(this).parent().parent().parent().find('.rePrompt').remove();
                    ok4=true;
                }
            });

            //	验证码栏失去焦点
            var $yan = $("#yan");
            $yan.blur(function(){
                if( $yan.val()==""){
                    var str='<div class="rePrompt">验证码不能为空!</div>';
                    $('.verification').find('.rePrompt').remove();
                    $('.verification').append(str);
                    ok5=false;
                }
                else{
                    $('.verification').find('.rePrompt').remove();
                    ok5=true;
                }
            });

// 所有条件 通过后才能提交
            $('#login_sub').click(function(){
                if(ok1 && ok2 && ok3 && ok4 && ok5){
                    $('#login_sub').submit();
                    alert(1)
                }else{
                    $('.account').find("input").trigger("blur");
                    alert(2)
                    return false;
                }
            });
        });
    },

    goInsignIn:function(){
        Views.signInView.show();
    }
})
/***********************注册end**********************/

/***********************忘记密码start**********************/
Views.forgotPasswordView = $.extend({}, Views.PanelView, {
    options: {
        tmpl: 'forgotPassword',
        //hasFootNav: true,
        //footItemOrder: 0, // hasFootNav设置true才有效   表示现在远着的是底部第几个菜单 0开始
        //itemClass: 'item'
    },

    willShow: function (param, isBackPage) {
        this.show(param, isBackPage);
    },

    didShow: function () {

    },

    goInsignIn:function(){
        Views.signInView.show();
    }
})
/***********************忘记密码end**********************/

