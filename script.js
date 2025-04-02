function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1 ,.line h2", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function () {
      var h5 = document.querySelector("#line1-part1 h5");
      var count = 0;
      setInterval(function () {
        if (count < 99) {
          h5.textContent = count++;
        } else {
          count = 100;
          // h5.innerHTML=count++
          h5.textContent = count++;
        }
      }, 30);
    },
  });
  tl.to("#loader", {
    opacity: 0,
    delay: 4,
    duration: 0.4,
  });
  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: Power4,
  });
  //   tl.to("#loader", {
  //     display: none,
  //   });
  tl.from("#nav", {
    y: 120,
    stagger:0.2,
  });
  tl.from("#centre1 h1 , #centre2 h1, #centre3 h2, #centre4 h1", {
    y: 140,
    stagger:0.2,
  });
}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#nav2 h4");
}
cursorAnimation();

// function videoCursor2(){
//     document.addEventListener("mousemove",function(zets){
//         gsap.to("#video-cursor",{
//             left:zets.x,
//             top:zets.y
//         })
//     })
// }
// videoCursor2();