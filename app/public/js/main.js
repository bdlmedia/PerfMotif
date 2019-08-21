const tl = new TimelineMax();

// Intro and hero TL

// tl.from('.intro-container',{scaleY: 1, height: '-100vh', ease: Circ.easeOut });

function introAnimation() {
r = 150;
adjustJank = 4; 

$(".scroll-txt-left p").each(function() {
  var leftObj = $(this);
  var d = leftObj.width();
  leftObj.clone().appendTo(leftObj.parent());
  leftObj
    .parent()
    .parent()
    .width(d);
  var t = d / r;

TweenMax.to(leftObj.parent(), t,{x: "-" + (d + adjustJank),ease: Linear.easeNone,repeat: -1});

});

$(".scroll-txt-right p").each(function() {
  var rightObj = $(this);
  var d = rightObj.width();
  rightObj.clone().prependTo(rightObj.parent());
  rightObj
    .parent()
    .parent()
    .width(d);
  var t = d / r;

TweenMax.to(rightObj.parent(), t,{x: "+" + (d + adjustJank),ease: Linear.easeNone,repeat: -1});
});

};

introAnimation();



//top logo fade in left
// var logo= document.getElementsByClassName("logo-main");

// tl.from(logo, 1, {x: -500});

// Scroll Logos
// var rate = 100;
// var adjustJank = 4;

// var eachImg = document.getElementsByClassName('scroll-img');

// for (let i = 0; i < eachImg.length; i++) {
//   var cont = document.getElementById('scrollContainer');
//   var d = cont.clientWidth * 2;
//   var t = d/rate;

//   var cln = eachImg[i].cloneNode(true);
//   // console.log(cln);
//   //   document.getElementById('lists').appendChild(cln);
//    TweenMax.to(eachImg, t, {x:'-'+(d+adjustJank), ease: Linear.easeNone,repeat:-1,}
//    );
// };


