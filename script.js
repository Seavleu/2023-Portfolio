gsap.registerPlugin(ScrollTrigger);


// gsap.to('.img-container',{
//     scale:50,
//     ease:"ease",
//     scrollTrigger:{
//         trigger: '.video-section',
//         scrub: 1,
//         start: "top top",
//         end:"buttom",
//         pin:true
//     }
// })


// gsap.to('.right', {
//     autoAlpha: 0,
//     x:500,
//     duration: 1.5,
//     scrollTrigger:{
//         start:1
//     }
// })
// gsap.to('.left', {
//     autoAlpha: 0,
//     x:-500,
//     duration: 1.5,
//     scrollTrigger:{
//         start:1
//     }
// })


const timeline = gsap.timeline();

timeline
  .from(".title span", {
    y: 150,
    skewY: 7,
    duration: 2,
  })
  .from('.txt-bottom',{
    letterSpacing:5,
    opacity:0,
    duration: 2
  })
