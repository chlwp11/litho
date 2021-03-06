;(function($){

    var litho = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
            
        },
        headerFn:function(){
            //네비게이션
            //메인버튼(메뉴) - 1 Depth
            //서브메뉴 - 2 Depth
            var $mainBtn = $('.main-btn');
            var $Sub = $('.sub');
            var $navUlLi = $('#nav>ul>li');

            
            //메인메뉴 마우스 오버시 해당 서브메뉴 보여라
            $mainBtn.on({
                mouseenter:function(){
                    $(this).next().show();
                }                                   
            });
            
            //메인메뉴와 서브메뉴 영역을 마우스가 떠나면 해당 서브메뉴 숨겨라
            $navUlLi.on({
                mouseleave:function(){
                    $Sub.hide();
                    $subSub.stop().hide();
                }    
            });
            
            //서브-서브 메뉴 - 3 Depth
            // 서브 메뉴버튼에 마우스 오버
            
            var $subBtn = $('.sub-btn');
            var $subSub = $('.sub-sub');
            var $navUlLi = $('#nav>ul>li');

                $subBtn.on({
                    mouseenter:function(){
                      $subSub.stop().hide();           //모든 서브 메뉴는 감춰라
                      $(this).next().stop().show();    //마우스 둔 서브 메뉴만 보여라
                    }
                });           
            
        },
        section1Fn:function(){ 
            //슬라이드의 너비와 높이를 창높이 창너비로 설정 반응형
            var $slide  = $('#section1 .slide'); // 로딩 시 변수 설정
            var $window = $(window);             // 로딩 시 변수 설정
            var $winW   = $(window).width();     // 창 너비 즉시 반환
            var $winH   = $(window).height();    // 창 높이 즉시 반환
            
                //슬라이드의 너비 높이 설정 완료  
                // 로딩시 설정 
                function resizeFn(){         
                    $winW   = $(window).width();
                    $winH   = $(window).height();
                    $slide.css({width:$winW, height:$winH}); //즉시 변환 너비 높이 적용 실행
                }
                resizeFn(); //로딩시 실행
                //화면의 크기가 (너비와 높이) 1픽셀만 변경되어도 동작되는 반응형 메서드
                // $window.resize();
                // $window.resize(function());
                $window.resize(function(){
                    //슬라이드의 너비 높이 설정 완료            
                    resizeFn();
                });
                
        },
        section2Fn:function(){ 
           
        },
        section3Fn:function(){ 
        
        },
        section4Fn:function(){ 
           
        },
        section5Fn:function(){ 
           
        },
        section6Fn:function(){ 
            
        },
        section7Fn:function(){ 
          
        },
        section8Fn:function(){ 
          
        },
        section9Fn:function(){ 
            
        },
        section10Fn:function(){ 
            
        },
        footerFn:function(){ 
         
        }
    }//객체 끝

    litho.init();

})(jQuery);