//logo

var logo= document.getElementsByClassName("logo-main");

TweenMax.from(logo, 1, {x: -500});

//Scroll Logos
var rate = 100;
var adjustJank = 4;

var eachImg = document.getElementsByClassName('scroll-img');
// console.log(eachImg);

for (let i = 0; i < eachImg.length; i++) {
  var cont = document.getElementById('scrollContainer');
  var d = cont.clientWidth * 2;
  var t = d/rate;

  var cln = eachImg[i].cloneNode(true);
  console.log(cln);

//   document.getElementById('lists').appendChild(cln);

   TweenMax.to(eachImg, t, {x:'-'+(d+adjustJank), ease: Linear.easeNone,repeat:-1,}
   );
};


