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


//randomly place icons
var iconGroupOne = $(".icon-view-1").children();
var iconGroupTwo = $(".icon-view-2").children();
var iconGroupThree = $(".icon-view-3").children();

console.log(iconGroupOne);
console.log(iconGroupTwo);
console.log(iconGroupThree);

for (var i = 0; i < iconGroupOne.length; i++) {
  // console.log(iconGroupOne[i]);
  // let overlapping = false;
  // let canvasWidth = $(".icon-view-1").width();
  // console.log('canvas width' + canvasWidth);
  let canvasHeight = $(".icon-view-1").height();
  // console.log('canvas height' + canvasHeight);
  let y = Math.floor(Math.random() * (canvasHeight + 1)) +1;
  // console.log('y' + y);
  let eachIcon = iconGroupOne[i];
  eachIcon.style.top = y;
  eachIcon.style.position = 'relative';
}

for (var i = 0; i < iconGroupTwo.length; i++) {
  let canvasHeight = $(".icon-view-2").height();
  let y = Math.floor(Math.random() * (canvasHeight + 1)) + 1;
  let eachIcon = iconGroupTwo[i];
  eachIcon.style.top = y;
  eachIcon.style.position = 'relative';
}

for (var i = 0; i < iconGroupThree.length; i++) {
  console.log(iconGroupThree[i]);
  let canvasHeight = $(".icon-view-3").height();
  let y = Math.floor(Math.random() * (canvasHeight + 1)) + 1;
  let eachIcon = iconGroupThree[i];
  eachIcon.style.top = y;
  eachIcon.style.position = 'relative';
}

});

//line scroll
TweenMax.from(".find-out-more-container hr", 2, {width:0}, {width:100}).repeat(1000);

// entrance timeline
    var tl = new TimelineMax();
    tl
      .from(".txt-1", .5, {opacity: 0, y: 50})
      .from(".txt-2", .3, {opacity: 0, y: 50})
      .from(".txt-3", .3, {opacity: 0, y: 50})
      .from(".txt-4", .3, {opacity: 0, y: 50});
      // .from(".logo-main", 1, { scaleX: 0, transformOrigin: "left" }, "-=0.5");
    
TweenMax.defaultEase = Power0.easeNone;
;
var controller = new ScrollMagic.Controller({vertical: false});
var tl = new TimelineMax();
tl
.from(".s2-img2-cont", 4, {x: 50})
.from(".s3-skew", 2, {x: -80})
// .from(".s4-svg-cont", 4, {x: 100});

new ScrollMagic.Scene({
  triggerElement: "#section02",
  triggerHook: .07,
  duration: "1000"
})
  .setTween(tl)
  .addIndicators({
    colorTrigger: "#000",
    colorStart: "#000",
    colorEnd: "#000",
  })
  .addTo(controller);

// portfolio animations

TweenMax.defaultEase = Power0.easeNone;
;
var controller = new ScrollMagic.Controller({vertical: false});
var tl2 = new TimelineMax();
tl2
.from(".s4-svg-cont", 4, {x: 100})

new ScrollMagic.Scene({
  triggerElement: "#section04",
  triggerHook: .07,
  duration: "1000"
})
  .setTween(tl2)
  .addIndicators({
    colorTrigger: "#000",
    colorStart: "#000",
    colorEnd: "#000",
  })
  .addTo(controller);

// blog animations

TweenMax.defaultEase = Power0.easeNone;
;
var controller = new ScrollMagic.Controller({vertical: false});
var tl3 = new TimelineMax();
tl3
.from(".s4-skew", 4, {x: 80});

new ScrollMagic.Scene({
  triggerElement: "#section05",
  triggerHook: .05,
  duration: "300"
})
  .setTween(tl3)
  .addIndicators({
    colorTrigger: "#000",
    colorStart: "#000",
    colorEnd: "#000",
  })
  .addTo(controller);

// contact animations
TweenMax.defaultEase = Power0.easeNone;
;
var controller = new ScrollMagic.Controller({vertical: false});
var tl4 = new TimelineMax();
tl4
.from(".s6-skew", 4, {x: 100});

new ScrollMagic.Scene({
  triggerElement: ".s4-skew",
  triggerHook: 0.5,
  duration: "400"
})
  .setTween(tl4)
  .addIndicators({
    colorTrigger: "#000",
    colorStart: "#000",
    colorEnd: "#000",
  })
  .addTo(controller);

  
// animate icons

TweenMax.to(".icon-view-1", 275, {
  x: "+=550",
  modifiers: {
    x: function(x) {
      return x % 550; 
    }
  },
  repeat: -1
});

TweenMax.to(".icon-view-2", 230, {
  x: "-=550", //move each box 500px to right
  modifiers: {
    x: function(x) {
      return x % 550; //force x value to be between 0 and 500 using modulus
    }
  },
  repeat: -1
});

TweenMax.to(".icon-view-3", 200, {
  x: "+=550", //move each box 500px to right
  modifiers: {
    x: function(x) {
      return x % 550; //force x value to be between 0 and 500 using modulus
    }
  },
  repeat: -1
});

//toggle overflow
$overflow.on("change", applyOverflow);