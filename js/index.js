$('.video').css({
    width:'100%',
    height:'100%'
});
$('.fa-play-circle-o').click(function (e) { 
    e.preventDefault();
    $('iframe,.geng_x').css({display:'block'})
    $('.container1,.f1').css({background:'#0f0f1e'})
    $('.container1').css({width:'100%'})
    $('iframe').attr('src','https://v.qq.com/x/page/v3023yg143i.html')
});
$('.fa-window-close').click(function () {
    $('iframe').attr('src','none')
    $('.container1').css({width:'100%'})
    $('iframe,.geng_x').css({display:'none'})
    $('.container1,.f1').css({background:'none'})
})
$('.fix>i').click(function () {
    
     $(this).toggleClass('fa-circle-thin').siblings().removeClass('fa-circle-thin').addClass('fa-circle');;
})
$('.spark').mouseover(function () {
    dis_about_le()
})
function dis_about_le() {
    $('.le_1').fadeIn();
    setTimeout(() => {
        $('.le_2').fadeIn();
    }, 200);
    setTimeout(() => {
        $('.le_3').fadeIn();
    }, 400);
}
$('.more').mouseover(function () {
    dis_about_ri();
})
function dis_about_ri() {
    $('.ri_1').fadeIn();
    setTimeout(() => {
        $('.ri_2').fadeIn();
    }, 200);
    setTimeout(() => {
        $('.ri_3').fadeIn();
    }, 400);
    setTimeout(() => {
        $('.ri_4').fadeIn();
    }, 600);
}
$('.more').mouseout(function () { 
    $('.ri_1,.ri_2,.ri_3,.ri_4').css({display:'none'})
});
$('.spark').mouseout(function () {
    $('.le_1,.le_2,.le_3').css({display:'none'})
})
$(window).resize(function () {

var geng_height=$(window).height();
var geng_width=$(window).width();
// ---------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
$('.f3').css({height:geng_height})
$('.f2').css({height:geng_height})
$('.f1').css({height:geng_height})
$('.f1_about').css({height:geng_height})
$('.bottom_1').click(function () {
    if(geng_width>500){
        $('.one_four').css({display:'block',display:'flex'})
    $('.bottom_1').css({display:'none'})
    $('.bottom_2').css({display:'block',display:'flex'})
    }
    if(geng_width<500){
        $('.one_four').css({display:'block',display:'flex'})
        $('.one_seven').css({display:'block',display:'flex'})
        $('.bottom_1').css({display:'none'})
        $('.bottom_2').css({display:'block',display:'flex'})
    }
})
$('.bottom_2').click(function () {
    if(geng_width>500){
        $('.one_four').css({display:'none'})
    $('.bottom_2').css({display:'none'})
    $('.bottom_1').css({display:'block',display:'flex'})
    }
    if(geng_width<500){
        $('.one_four').css({display:'none'});
        $('.one_seven').css({display:'none'})
    $('.bottom_2').css({display:'none'})
    $('.bottom_1').css({display:'block',display:'flex'})
    }
    
})

$('.f2_1').css({top:geng_height*0.08})
$('.f2_2').css({top:geng_height*0.55})
$('.f2_3').css({top:geng_height*0.85});
if(geng_width<500){
    $('.one_seven').css({display:'none'})
    aa();
    $('.f2_1').css({top:geng_height*0.2})
$('.f2_2').css({top:geng_height*0.4})
$('.f2_3').css({top:geng_height*0.75});
}
if(geng_width>500){
    $('.one_seven').css({display:'block',display:'flex'})
}
if(geng_width<867){
    console.log('.last_f2')
    $('.f1_about').css({height:geng_height*0.7})
    $('.last_f2').css({height:geng_height*1})
    $('.geng_love').find('a').css({display:'none'})
    $('.geng_love').find('a').find('div[class^="last_item"]').css({display:'none'})
}
if(geng_width>=867){
    $('.geng_love').find('a').css({display:'block'})
    $('.geng_love').find('a').find('div[class^="last_item"]').css({display:'block'})
}
$('.geng_love').click(function () {
    if (geng_width<867) {
        
    $('.geng_love').find('a').css({display:'none'})
    $('.geng_love').find('a').find('div[class^="last_item"]').css({display:'none'})
    $(this).find('a').css({height:"30px",width:'100%',display:'inline-block'})
    $(this).find('a').find('div[class^="last_item"]').css({display:'block'})
    }else{

    }

})
})

function aa() {
    for (let a = 0; a < $('.one_nine>div:nth-child(2)>div').length; a++) {
        $('.one_nine>div:nth-child(2)>div').eq(a).html(phone_date[a]);

        console.log($('.one_nine>div:nth-child(2)>div').length)
    }
    for (let b = 0; b < $('.one_seven>div:nth-child(2)>div').length; b++) {
        $('.one_seven>div:nth-child(2)>div').eq(b).html(phone_date[($('.one_nine>div:nth-child(2)>div').length+b)]);
        
    }
    for (let c = 0; c < $('.one_four>div:nth-child(2)>div').length; c++) {
        $('.one_four>div:nth-child(2)>div').eq(c).html(phone_date[($('.one_seven>div:nth-child(2)>div').length+$('.one_nine>div:nth-child(2)>div').length+c)]);
        
    }
}
function bb() {
    for (let a = 0; a < $('.one_nine>div:nth-child(2)>div').length; a++) {
        $('.one_nine>div:nth-child(2)>div').eq(a).html(date[a]);

        
    }
    for (let b = 0; b < $('.one_seven>div:nth-child(2)>div').length; b++) {
        $('.one_seven>div:nth-child(2)>div').eq(b).html(date[($('.one_nine>div:nth-child(2)>div').length+b)]);
        
    }
    for (let c = 0; c < $('.one_four>div:nth-child(2)>div').length; c++) {
        $('.one_four>div:nth-child(2)>div').eq(c).html(date[($('.one_seven>div:nth-child(2)>div').length+ $('.one_nine>div:nth-child(2)>div').length+c)]);
        
    }
}
bb();
$(window).trigger('resize');
$('.dis_bottom').mouseover(function () { 
    $('.f1_1').css({display:'block'})
    $('.f1_1').css({display:'flex'})
    $('.f1_1').animate({right:'100'},400)
});
//因为使用swiper插件的某些功能，原来写好的功能只能为了大局放弃掉
//此部分是导航条右部分显示与隐藏的切换
// var topju=$(document).scrollTop();

//             $(document).scroll(function () { 
//                 topju=$(document).scrollTop();
//                console.log(topju)
//                 if(topju>960){
//                     $('.dis_bottom').css({display:'block'});
//                     $('.f1_1').css({display:'none'})
//                 }
//                 if(topju<960){
//                     $('.dis_bottom').css({display:'none'});
//                     $('.f1_1').css({display:'block'})
//                     $('.f1_1').css({display:'flex'})
//                 }
                
//             });

$('.dis_phone').click(function () {
    $('.dis_phone_1').css({display:'block'})
    $('.fix_phone').css({display:'block'})
    $('.dis_phone').removeClass('fa-bars')
})
$('.dis_phone_1').click(function () {
    $('.dis_phone').addClass('fa-bars')
    $('.fix_phone').css({display:'none'})
    $('.dis_phone_1').css({display:'none'})
})

