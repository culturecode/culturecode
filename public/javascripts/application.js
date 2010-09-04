// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
    /* Apply fancybox to multiple items */
    $(".gallery_item a").fancybox({
        'cyclic'        : true,
        'titleShow'     : false,
        'autoScale'     : false
    });

    // Bind the nav links with smooth scrolling action
    $('#page_nav li a').each(function(index, navLink){
        var anchor = navLink.href.replace(/.*#/, '');
        var targetSelector = 'a[name=' + anchor + ']';
        $(navLink).click(function(event){
            event.preventDefault();
            Helpers.scrollToElement($(targetSelector)[0]);
        });
    });

    Helpers.floatInView('#page_nav_container');

});

var Helpers = {
    scrollToElement: function(element){
        $('html,body').animate({
            scrollTop: $(element).offset().top
        }, {
            duration: 'slow',
            easing: 'swing'
        });
    },
    floatInView: function(elementIdSelector){
        var element = $($(elementIdSelector)[0]);
        var pageCopy = $($('#page_copy')[0]);
        var floatStart = element.offset().top;
        var floatStop = pageCopy.offset().top + pageCopy.height();
        var navHeight = element.height();
        var padding = 10;

        var floatIt = function(){
            var scrollTop = $(document).scrollTop();
            if (Helpers._tooLowToFloat(scrollTop, navHeight, floatStop, padding)) {
                if (element._ccNavFloatPosition != 'tooLow'){
                    element._ccNavFloatPosition = 'tooLow';
                    element.css({
                        'position': 'absolute',
                        top: floatStop - navHeight + 'px'
                    });
                }
            } else if (Helpers._lowEnoughToFloat(scrollTop, floatStart, padding)){
                if (element._ccNavFloatPosition != 'lowEnough'){
                    element._ccNavFloatPosition = 'lowEnough';
                    element.css({
                        'position': 'fixed',
                        'top': padding + 'px'
                    });
                }
            } else if (Helpers._tooHighToFloat(scrollTop, floatStart, padding)) {
                if (element._ccNavFloatPosition != 'tooHigh'){
                    element._ccNavFloatPosition = 'tooHigh';
                    element.css({
                        'position': 'absolute',
                        top:null
                    });
                }
            }
        };
        $(document).scroll(floatIt);
        floatIt();
    },
    _tooHighToFloat: function(scrollTop, floatStart, padding){
        return scrollTop < floatStart - padding;
    },
    _tooLowToFloat: function(scrollTop, navHeight, floatStop, padding){
        return scrollTop + navHeight > floatStop - padding;
    },
    _lowEnoughToFloat: function(scrollTop, floatStart, padding){
        return scrollTop > floatStart - padding;
    }
}
