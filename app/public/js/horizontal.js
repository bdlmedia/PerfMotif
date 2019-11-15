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
    var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

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

// ANIMATIONS
var headers = document.querySelectorAll("section");
  
var controller = new ScrollMagic.Controller();

var horizontalSlide = new TimelineMax()
// animate panels
.to("#js-slideContainer", 1,   {x: "-20%", onComplete:addActive,onCompleteParams:[1],onReverseComplete:addActive,onReverseCompleteParams:[0]})    
.to("#js-slideContainer", 1,   {x: "-40%", onComplete:addActive,onCompleteParams:[2],onReverseComplete:addActive,onReverseCompleteParams:[1]})
.to("#js-slideContainer", 1,   {x: "-60%", onComplete:addActive,onCompleteParams:[3],onReverseComplete:addActive,onReverseCompleteParams:[2]})
.to("#js-slideContainer", 1,   {x: "-80%", onComplete:addActive,onCompleteParams:[4],onReverseComplete:addActive,onReverseCompleteParams:[3]})


// create scene to pin and link animation
new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%"
})
  .setPin("#js-wrapper")
  .setTween(horizontalSlide)
  .addTo(controller);

function addActive(index){
//console.log(headers[index]);
for(i=0;i<headers.length;i++)       
  if(i === index) {headers[i].classList.add("active");}
  else{headers[i].classList.remove("active");}
}

//line scroll
TweenMax.from(".find-out-more-container hr", 2, {width:0}, {width:100}).repeat(1000);
