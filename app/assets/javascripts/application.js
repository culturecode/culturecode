// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery-migrate-1.0.0
//= require_tree .

$(document).ready(function() {
    /* Apply fancybox to multiple items */
    $(".gallery_item a").fancybox({
        overlayColor: '#111',
        titlePosition: 'outside'
    });


    // Bind the nav links with smooth scrolling action
    $('#page_nav').on('click', 'li a', function(event){
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
                    element.css({'position': 'absolute', top: floatStop - navHeight + 'px'});
                }
            } else if (Helpers._lowEnoughToFloat(scrollTop, floatStart, padding)){
                if (element._ccNavFloatPosition != 'lowEnough'){
                    element._ccNavFloatPosition = 'lowEnough';
                    element.css({'position': 'fixed', 'top': padding + 'px'});
                }
            } else if (Helpers._tooHighToFloat(scrollTop, floatStart, padding)) {
                if (element._ccNavFloatPosition != 'tooHigh'){
                    element._ccNavFloatPosition = 'tooHigh';
                    element.css({ 'position': 'absolute', top: ''});
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
