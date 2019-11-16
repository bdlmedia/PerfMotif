// ENABLE ONLY VERTICAL SCROLL

$( document ).ready(function() {
var scroller = {};
scroller.e = document.getElementById("js-wrapper");

if (scroller.e.addEventListener) {
    scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
    scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e;
    var delta = - 30 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

    var pst = $('#js-wrapper').scrollLeft() + delta;

    if (pst < 0) {
        pst = 0;
    } else if (pst > $('#js-slideContainer').width()) {
        pst = $('#js-slideContainer').width();
    }

    $('#js-wrapper').scrollLeft(pst);

    return false;
}
});

//line scroll
TweenMax.from(".find-out-more-container hr", 2, {width:0}, {width:100}).repeat(1000);

TweenMax.defaultEase = Power0.easeNone;
;
var img = document.getElementsByClassName(".logo-main img");
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax({ paused: true });

// create timeline
// this could also be created in a loop
tl.set(".logo-main img", {transformOrigin:"0% 100%"});
tl.fromTo(".logo-main img", 2.2, {width:"0%"}, {width:"100%",  ease:Power0.easeNone, repeat:-1, repeatDelay:2})
new ScrollMagic.Scene({
  triggerElement: "#section01",
  triggerHook: "onLeave",
  duration: "400%"
})
  .setPin("#section01")
  .setTween(tl)
  .addIndicators({
    colorTrigger: "#000",
    colorStart: "#000",
    colorEnd: "#000",
  })
  .addTo(controller);

