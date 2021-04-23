var rotateUP = gsap.
timeline({
  scrollTrigger: {
    trigger: "#wrap",
    pin: true,
    scrub: 3,
    start: "top top",
    end: "+=10000" } }).


to("#up", {
  backgroundPosition: "0px -2247px",
  duration: 1,
  ease: "none" });


var rotateDown = gsap.
timeline({
  scrollTrigger: {
    trigger: "#wrap",
    pin: true,
    scrub: 3,
    start: "top top",
    end: "+=10000" } }).


to("#down", {
  backgroundPosition: "0px 2247px",
  duration: 1,
  ease: "none" });


var rotate = gsap.
timeline({
  scrollTrigger: {
    trigger: "#wrap",
    pin: true,
    scrub: 3,
    start: "top top",
    end: "+=10000" } }).


to("#top", {
  rotation: 360 * 5,
  duration: 1,
  ease: "none" });


var rotate = gsap.
timeline({
  scrollTrigger: {
    trigger: "#wrap",
    pin: true,
    scrub: 3,
    start: "top top",
    end: "+=10000" } }).


to("#middle", {
  rotation: 360 * 5,
  duration: 1,
  ease: "none" });


var rotate = gsap.
timeline({
  scrollTrigger: {
    trigger: "#wrap",
    pin: true,
    scrub: 3,
    start: "top top",
    end: "+=10000" } }).


to("#bottom", {
  rotation: 360 * 5,
  duration: 1,
  ease: "none" });
//# sourceURL=pen.js