var menu = document.querySelector("#nav-prt2 a");
var full = document.querySelector("#full-scn-nav");

var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    (full.style.top = "0%"),
      (document.querySelector("#nav h2").style.color = "#222");
    document.querySelector("#nav h3").style.color = "#222";
    document.querySelector("#nav a").style.color = "#222";
    flag = 1;
  } else {
    (full.style.top = "-100%"),
      (document.querySelector("#nav h2").style.color = "#dadada");
    document.querySelector("#nav h3").style.color = "#dadada";
    document.querySelector("#nav a").style.color = "#dadada";
    flag = 0;
  }
});

var tl = gsap.timeline();

tl.from("#page1 h1", {
  y: 100,
  opacity: 0,
  duration: 0.7,
});
tl.from("#page1 h2", {
  y: 100,
  opacity: 0,
  duration: 0.5,
});
tl.from("#page1 h3", {
  y: 100,
  opacity: 0,
  duration: 0.5,
});

gsap.from("#page2 img", {
  scale: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 3,
  },
});
gsap.from("#page2 h1", {
  rotateX: "-90deg",
  y: 10,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 0%",
    scrub: 5,
    delay: 0.5,
  },
});

document
  .querySelector("#element1")
  .addEventListener("mousemove", function (dets) {
    document.querySelector("#element1 img").style.opacity = "1";
    document.querySelector("#element1 img").style.left = `${dets.x - 200}px`;
    document.querySelector("#element1 img").style.top = `${dets.y - 200}px`;
  });

document
  .querySelector("#element1")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#element1 img").style.opacity = "0";
  });

document
  .querySelector("#element2")
  .addEventListener("mousemove", function (dets) {
    document.querySelector("#element2 img").style.opacity = "1";
    document.querySelector("#element2 img").style.left = `${dets.x - 200}px`;
    document.querySelector("#element2 img").style.top = `${dets.y - 200}px`;
  });

document
  .querySelector("#element2")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#element2 img").style.opacity = "0";
  });
