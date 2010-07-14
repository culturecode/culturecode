// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var NavHelper = {
    // Smooth scrolls to the anchor
    scrollOnClick: function(navLink){
        var anchor = navLink.href.gsub(/.*#/, '');
        var targetSelector = 'a[name=' + anchor + ']';
        var target = $(document.body.down(targetSelector))
        Element.observe(navLink, 'click', function(event, targetElement){
            event.stop();
            Effect.ScrollTo(targetElement, {
                offset:-300,
                duration:0.5
            });
        }.bindAsEventListener(this, target));
        
    },
    floatInView: function(nav){
        nav = $(nav);
        var floatStart = nav.cumulativeOffset().top;
        var floatStop = $('page_copy').cumulativeOffset().top + $('page_copy').getHeight();
        var navHeight = nav.getHeight();
        var padding = 10;
        Event.observe(window, 'scroll', function(){
            var scrollTop = document.viewport.getScrollOffsets().top;
            if (this._tooLowToFloat(scrollTop, navHeight, floatStop, padding)) {
                if (nav.getStyle('position') != 'absolute'){
                    nav.setStyle({
                        'position': 'absolute',
                        top: floatStop - navHeight + 'px'
                    });
                }
            } else if (this._lowEnoughToFloat(scrollTop, floatStart, padding)){
                if (nav.getStyle('position') != 'fixed'){
                    nav.setStyle({
                        'position': 'fixed',
                        'top': padding + 'px'
                    });
                }
            } else if (this._tooHighToFloat(scrollTop, floatStart, padding)) {
                if (nav.getStyle('position') == 'fixed'){
                    nav.setStyle({
                        'position': 'absolute',
                        top:null
                    });
                }
            }
        }.bind(this));
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
// Bind the nav links with smooth scrolling action
$$('#page_nav li a').each(function(navLink){
    NavHelper.scrollOnClick(navLink)
})
NavHelper.floatInView('page_nav_container');