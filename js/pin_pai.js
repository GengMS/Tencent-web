
$('.pin_2_ban>li').click(function (e) { 
    e.preventDefault();
    $(this).addClass('pin_2_ban_active').siblings().removeClass('pin_2_ban_active')
    var tiao_top=$(this).index()+1
    $('.num').html(tiao_top)
    var tiao_next=tiao_top-3
    if(tiao_next<=0){
        tiao_next=0
    }
    if(tiao_next>=0){
        $('.pin_2_ban').css({transform:'translateX('+tiao_next*(-234)+'px)'})
    }


    $('.pin_2_left').click(function () {
        tiao_top--
        if(tiao_top<=1){
            tiao_top=1
        }
       
        $('.num').html(tiao_top)
        tiao_next=tiao_top-3
        if(tiao_top>0){
            $('.pin_2_ban>li').eq(tiao_top-1).addClass('pin_2_ban_active').siblings().removeClass('pin_2_ban_active')
        }
        if(tiao_next>=0){
            $('.pin_2_ban').css({transform:'translateX('+tiao_next*(-234)+'px)'})
        }
    })
    $('.pin_2_right').click(function () {
        tiao_top++
        if(tiao_top>=16){
            tiao_top=16
        }
       
        $('.num').html(tiao_top)
        tiao_next=tiao_top-3
        if(tiao_top>0){
            $('.pin_2_ban>li').eq(tiao_top-1).addClass('pin_2_ban_active').siblings().removeClass('pin_2_ban_active')
        }
        if(tiao_next>=0){
            $('.pin_2_ban').css({transform:'translateX('+tiao_next*(-234)+'px)'})
        }
    })
});
$('.f4_img').mouseover(function () { 
    var lujing=$(this).attr("src"); 
     
    $('.f4_zhu_img').attr("src",lujing);
});
//----------------------------------------------------------------------------------------
$('.f5_ban>li').click(function () {
    
    $('.f5_ban>li>div:nth-child(1)>div').css({opacity:'0'})
    $(this).addClass('f5_ban_active').siblings().removeClass('f5_ban_active')
    
        var newtime=setTimeout(() => {
            $('.f5_ban_active>div:nth-child(1)>div').animate({opacity:1},0)
        }, 400);
    
})
$('.f6_ban>li').click(function () {
    
    $('.f6_ban>li>div:nth-child(1)>div').css({opacity:'0'})
    $(this).addClass('f6_ban_active').siblings().removeClass('f6_ban_active')
    
        var newtime=setTimeout(() => {
            $('.f6_ban_active>div:nth-child(1)>div').animate({opacity:1},300)
        }, 600);
    
})
//--------------------------------------------------------------------
var f5_tr=0
$('.pin_5_right').click(function () {
   
    if(f5_tr===0){
        
        $('.f5_ban>li').eq(3).addClass('f5_ban_active').siblings().removeClass('f5_ban_active')
        $('.f5_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        var newtime=setTimeout(() => {
            $('.f5_ban_active>div:nth-child(1)>div').animate({opacity:1},0)
        }, 400);
        $('.f5_ban').css({transform:'translateX(-630.19px)'})
    }
    if(f5_tr===1){
        $('.f5_ban>li').eq(6).addClass('f5_ban_active').siblings().removeClass('f5_ban_active')
        $('.f5_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        var newtime=setTimeout(() => {
            $('.f5_ban_active>div:nth-child(1)>div').animate({opacity:1},0)
        }, 400);
        $('.f5_ban').css({transform:'translateX('+(-630.19)*2+'px)'})
    }
    f5_tr++
})
$('.pin_5_left').click(function () {
   
    if(f5_tr<=1){
        $('.f5_ban>li').eq(0).addClass('f5_ban_active').siblings().removeClass('f5_ban_active')
        $('.f5_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        var newtime=setTimeout(() => {
            $('.f5_ban_active>div:nth-child(1)>div').animate({opacity:1},0)
        }, 400);
        $('.f5_ban').css({transform:'translateX(0px)'})
        f5_tr=1
    }
    if(f5_tr>=2){
        $('.f5_ban>li').eq(3).addClass('f5_ban_active').siblings().removeClass('f5_ban_active')
        $('.f5_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        var newtime=setTimeout(() => {
            $('.f5_ban_active>div:nth-child(1)>div').animate({opacity:1},0)
        }, 400);
        $('.f5_ban').css({transform:'translateX(-630.19px)'})
        f5_tr=2
    }
    f5_tr--
})
//---------------------------------------------------------------------------------------------------
var f6_tr=0
$('.pin_6_right').click(function () {
   
    if(f6_tr===0){
        
        $('.f6_ban>li').eq(3).addClass('f6_ban_active').siblings().removeClass('f6_ban_active')
        $('.f6_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        var newtime=setTimeout(() => {
            $('.f6_ban_active>div:nth-child(1)>div').animate({opacity:1},300)
        }, 600);
        $('.f6_ban').css({transform:'translateX(-630.19px)'})
    }
    if(f6_tr===1){
        $('.f6_ban>li').eq(6).addClass('f6_ban_active').siblings().removeClass('f6_ban_active')
        $('.f6_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        var newtime=setTimeout(() => {
            $('.f6_ban_active>div:nth-child(1)>div').animate({opacity:1},300)
        }, 600);
        $('.f6_ban').css({transform:'translateX('+(-630.19)*2+'px)'})
    }
    f6_tr++
})
$('.pin_6_left').click(function () {
   
    if(f6_tr<=1){
        $('.f6_ban>li').eq(0).addClass('f6_ban_active').siblings().removeClass('f6_ban_active')
        $('.f6_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        $('.f6_ban').css({transform:'translateX(0px)'})
        var newtime=setTimeout(() => {
            $('.f6_ban_active>div:nth-child(1)>div').animate({opacity:1},300)
        }, 600);
       
        f6_tr=1
    }
    if(f6_tr>=2){
        $('.f6_ban>li').eq(3).addClass('f6_ban_active').siblings().removeClass('f6_ban_active')
        $('.f6_ban>li>div:nth-child(1)>div').css({opacity:'0'})
        $('.f6_ban').css({transform:'translateX(-630.19px)'})
        var newtime=setTimeout(() => {
            $('.f6_ban_active>div:nth-child(1)>div').animate({opacity:1},300)
        }, 600);
        
        f6_tr=2
    }
    f6_tr--
})
//这里本来想再手机端的情况下，f2中的滚动可以用手拖动，拖动实现了，但是缺点东西，所以就放弃这个特效了
// $('.pin_2_ban').on({
//     mousedown:function(e){
//         var el = $(this);
//         var os = el.offset();
//         dx = e.pageX - os.left;
//         $(document).on('mousemove',function(e){
           
//             el.offset({
//                 left: e.pageX - dx
//             })
            
//         }).on('mouseup',function(e){
//             $(document).off('mousemove');
            
//         })
        
//     }
// })
//-------------------------------------------------------------
var f2_phone_tr=0
$('.2_right_phone').click(function () {
    
        f2_phone_tr++
        
        if(f2_phone_tr<16){
            $('.2_left_phone').css({color:'white'})
            $('.pin_2_ban_phone').css({transform:'translateX('+-6.25*f2_phone_tr+'%)'})
        }
        if(f2_phone_tr>=15){
            $('.2_right_phone').css({color:'grey'})
            f2_phone_tr=15
        }
})
$('.2_left_phone').click(function () {
    
    f2_phone_tr--
    
    if(f2_phone_tr>=0){
        $('.2_right_phone').css({color:'white'})
        $('.pin_2_ban_phone').css({transform:'translateX('+-6.25*f2_phone_tr+'%)'})
    }
    if(f2_phone_tr<=0){
        $('.2_left_phone').css({color:'grey'})
        f2_phone_tr=0
    }
})
var f5_phone_tr=0
$('.5_right_phone').click(function () {
    
        f5_phone_tr++
        
        if(f5_phone_tr<6){
            $('.5_left_phone').css({color:'white'})
            $('.pin_5_ban_phone').css({transform:'translateX('+-6.25*f5_phone_tr+'%)'})
        }
        if(f5_phone_tr>=5){
            $('.5_right_phone').css({color:'grey'})
            f5_phone_tr=5
        }
})
$('.5_left_phone').click(function () {
    
    f5_phone_tr--
    
    if(f5_phone_tr>=0){
        $('.5_right_phone').css({color:'white'})
        $('.pin_5_ban_phone').css({transform:'translateX('+-6.25*f5_phone_tr+'%)'})
    }
    if(f5_phone_tr<=0){
        $('.5_left_phone').css({color:'grey'})
        f5_phone_tr=0
    }
})
var f6_phone_tr=0
$('.6_right_phone').click(function () {
    
        f6_phone_tr++
        
        if(f6_phone_tr<9){
            $('.6_left_phone').css({color:'white'})
            $('.pin_6_ban_phone').css({transform:'translateX('+-6.25*f6_phone_tr+'%)'})
        }
        if(f6_phone_tr>=8){
            $('.5_right_phone').css({color:'grey'})
            f6_phone_tr=8
        }
})
$('.6_left_phone').click(function () {
    
    f6_phone_tr--
    
    if(f6_phone_tr>=0){
        $('.6_right_phone').css({color:'white'})
        $('.pin_6_ban_phone').css({transform:'translateX('+-6.25*f6_phone_tr+'%)'})
    }
    if(f6_phone_tr<=0){
        $('.6_left_phone').css({color:'grey'})
        f6_phone_tr=0
    }
})