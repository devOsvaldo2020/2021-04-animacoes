//solved bug in editor view
var lock = document.getElementById("lock");
var keylock = document.getElementById("keylock");
var movement = document.getElementById("movement");

window.addEventListener(
  "scroll",
  () => {
    if (lock.className != "closed") {
      document.body.style.setProperty(
        "--scroll",
        (window.pageYOffset /
          (document.body.offsetHeight - window.innerHeight)) *
          100
      );
    }
    if (document.querySelector(".door").offsetHeight == window.innerHeight) {
      keylock.classList.remove("off");
      if (lock.className == "open") lock.classList.add("active");
    } else {
      keylock.classList.add("off");
      if (lock.className == "open active") lock.classList.remove("active");
    }
  },
  false
);

lock.addEventListener("click", function () {    
  if (document.querySelector(".door").offsetHeight == window.innerHeight) {
    if (this.className == "closed") {
      this.className = "open";      
      keylock.classList.add("off");
      movement.classList.remove("off");
      keylock.innerText = "lock";
      window.scrollTo(0, window.innerHeight);
      setTimeout(function () {
        window.scrollTo({
          top: window.innerHeight - 30,
          behavior: "smooth"
        });
      }, 150);
      setTimeout(function () {
        window.scrollTo({
          top: window.innerHeight - 25,
          behavior: "smooth"
        });
      }, 300);
    } else {
      this.className = "closed";
      movement.classList.add("off");
      keylock.classList.remove("off");
      keylock.innerText = "unlock";
    }
  }
});

window.onload = function () {
  setTimeout(function () {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }, 500);
  setTimeout(function () {
    lock.classList.add("closed");
    keylock.classList.remove("off");
  }, 1500);
};