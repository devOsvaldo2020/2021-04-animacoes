
const h = document.querySelector("#h");
const b = document.body;
/*****************/
/*****************/
const base = e => {
  var x = e.pageX / window.innerWidth - 0.5;
  var y = e.pageY / window.innerHeight - 0.5;
  h.style.transform = `
        perspective(20000px)
        rotateX(${y * 20 + 60}deg)
        rotateZ(${-x * 360}deg)
        translateZ(-10vw)
    `;
};
/*****************/
/*****************/
b.addEventListener("pointermove", base);
//# sourceURL=pen.js