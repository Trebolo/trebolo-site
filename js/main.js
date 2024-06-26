
/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Action Buttons
    3. Scroll plugins
    4. Newsletter
    5. PhotoSwipe Gallery Init
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    setTimeout(function(){
        $('#preloader').velocity({

            opacity: "0",

            complete: function(){
                $("#loading").velocity("fadeOut", {
                    duration: 500,
                    easing: [0.7,0,0.3,1],
                }); 
            }
        })
        $(".bauhaus").addClass("animate__slideInRight")
    },200);

    setTimeout(function(){
        $('.global-overlay').velocity({
            translateX : "100%",
            opacity : "1",
        },
        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })
        $(".map-container").addClass("fadeInRight").removeClass('opacity-0');
    },200);

    setTimeout(function(){
        $('#left-side').velocity({
            opacity : "1",
            complete: function(){
            setTimeout(function() {
                $('.text-intro').each(function(i) {
                    (function(self) {
                        setTimeout(function() {
                            $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                        },(i*150)+150);
                        })(this);
                    });
                }, 0);
            }
        },
        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })
        
    },800);
})

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 2. Action Buttons ................... */
    /* ------------------------------------- */
    $('a#open-more-info').on( "click", function() {
        $(".overlay").toggleClass("skew-part");
        $("#right-side").toggleClass("hide-right");
        $("#close-more-info").toggleClass("hide-close");
        $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });
            $("#email").val("");
            $("#text-area").val("");
        }, 350);
    });

    $('button#close-more-info').on( "click", function() {
        $(".overlay").addClass("skew-part");
        $("#right-side").addClass("hide-right");
        $("#close-more-info").addClass("hide-close");
        $('.mCSB_scrollTools').removeClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });
        }, 350);
    });
    

    /* ------------------------------------- */
    /* 3. Scroll plugins ................... */
    /* ------------------------------------- */

    $(function() {
        $('body').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
        });
    });

    var ifTouchDevices = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

    // ScrollBar on Desktop, not on Touch devices for a perfect ergonomy
    function scrollbar(){

        if (ifTouchDevices){
            $('body').addClass('scroll-touch');

            $('a#open-more-info').on( "click", function() {
                event.preventDefault();
                var target = "#" + this.getAttribute('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500);
            });
        } 

        else {
            $('body').mCustomScrollbar({
                scrollInertia: 150,
                axis            :"y"
            });  
        }
    }
  
    scrollbar();

    // Tooltips used on YouTube buttons
    if (window.matchMedia("(min-width: 1025px)").matches) { 
            
        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }
   

    

});