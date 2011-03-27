$(document).ready(function() {
    /* Apply fancybox to multiple items */
    $(".gallery_item a").fancybox({
        'cyclic'            : true,
        'titlePosition'     : 'inside',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) { return "<span id='photo_number'><a href='#' onclick='$.fancybox.next(); return false;' title='Next Image'>" + (currentIndex + 1) + "/" + currentArray.length + "</a></span> " + title;},
        'autoScale'     : false
    });

    // Bind the nav links with smooth scrolling action
    $('#page_nav li a').live('click', function(event){
        var anchor = this.href.replace(/.*#/, '');
        var targetSelector = 'a[name=' + anchor + ']';
        event.preventDefault();
        Helpers.scrollToElement(targetSelector);
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
        var element = $(elementIdSelector);
        var pageCopy = $('#page_copy');
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
