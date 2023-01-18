$(document).ready(function(){
            
        
    
    //gnb pc버전
    // $('.gnb > ul').hover(function(){
    //     $('.sub').fadeIn();
    // },function(){
    //     $('.sub').fadeOut();
    // });

    $('#toggle').click(function(){
        $(this).children().eq(0).toggleClass('t_act01');
        $(this).children().eq(1).toggleClass('t_act02');
        $(this).children().eq(2).toggleClass('t_act03');
    });

    var toggle = $('#toggle');

    toggle.click(function(){
        $(this).next().toggleClass('act');
    });

    





    //슬라이드 이미지
    // $('.in_s > ul > li:last-child').insertBefore('.in_s > ul > li:first-child');

    // $('.in_s > ul').css('margin-left','-1200px');

    // function moveLeft(){
    //     $('.in_s > ul').animate({'margin-left':'-2400px'},function(){
    //         $('.in_s > ul > li:first-child').insertAfter('.in_s > ul > li:last-child');
    //         $('.in_s > ul').css('margin-left','-1200px');
    //     })
    // }
    // let Timer = setInterval(moveLeft,4000);

    $(function() {
        var winW = cnt = setId = 0;
        resizeFn();

        resizeFn();
        setTimeout(resizeFn, 100);

        function resizeFn(){
            winW = $(window).innerWidth();

            $('.slideWrap > li').css({width:winW});
        };

        $(window).resize(function(){
            resizeFn();
        });

        autoplayFn();

        function autoplayFn(){
            setId = setInterval(autoplayFn, 2500);
        };
        $(".pageBt").each(function(idx){
            $(this).click(function(){
                clearInterval(setId);
                cnt = idx;
                mainslideFn();
            });
        });
    });
    
    function prevCountFn(){
        cnt++;
        mainsLideFn();
    };
    function prevCountFn(){
        cnt--;
        mainslideFn();
    };

    function mainslideFn(){
        $('.slideWrap').stop().animate({
            left: (-100*cnt)+ "%"},600, function(){
                if(cnt>3){
                    cnt=0;
                }
                if(cnt<0){
                    cnt=3
                }
                $('.slideWrap').stop().animate({left:(-100*cnt)+"%"},0)
        });
        $('.pageBt').removeClass("addBt");
        $('.pageBt').eq(cnt>3?cnt=0:cnt).addClass("addBt")
    };

    // 탭메뉴
    const img_list = $('.g_list > li');
            const gbtn = $('.g_lnb > ul > li a');

            //전체보기에 먼저 서식을 적용하고
            $('.g_lnb > ul > li:first-child > a').addClass('act');

            //사용자가 클릭한 메뉴에만 서식을 적용한다.
            gbtn.click(function(){
                $('.g_lnb > ul > li > a').removeClass('act');
                $(this).addClass('act03');
            });

            //1. 이미지목록에 마우스오버하면 캡션이 나오게 한다.
            g_list.hover(function(){  //==mouseenter하고 동일
                $(this).find('.caption').stop().animate({'bottom':'0px'},200);

            //2. 이미지목록에 마우스아웃하면 갭션이 사라진다.
            },function(){  //mouseleave하고 동일
                $(this).find('.caption').stop().animate({'bottom':'-36px'},200);

            });

            const total = $('.g_lnb > ul > li:first-child');
            const weather = $('.g_lnb > ul > li:nth-child(2)');
            const clothes = $('.g_lnb > ul > li:last-child');

            total.click(function(){  

                $('.g_list li').hide();
                $('.g_list li').stop().fadeIn();
                return false;
            });

            weather.click(function(){
                $('.g_list li').hide();
                $('.weather').stop().fadeIn();
                return false;
            });

            clothes.click(function(){
                $('.g_list li').hide();
                $('.clothes').stop().fadeIn();
                return false;
            });


    return false;


});








