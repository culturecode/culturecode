// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var NavHelper = {
    // Smooth scrolls to the anchor
    scrollOnClick: function(navLink){
        var anchor = navLink.href.gsub(/.*#/, '');
        var targetSelector = 'a[name=' + anchor + ']';
        console.log(targetSelector)
        var target = $(document.body.down(targetSelector))
        console.log(target)
        Element.observe(navLink, 'click', function(event, targetElement){
            event.stop();
            Effect.ScrollTo(targetElement, {
                offset:-300,
                duration:0.5
            });
        }.bindAsEventListener(this, target));
        
    }
}
// Bind the nav links with smooth scrolling action
$$('#page_nav li a').each(function(navLink){
    NavHelper.scrollOnClick(navLink)
})