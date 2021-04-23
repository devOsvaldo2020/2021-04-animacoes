
const results = Splitting({
    target: ".images-list .figure",
    by: "cells",
    image: true,
    columns: 14,
    rows: 14 });
  
  
  const list = document.querySelector(".images-list");
  const items = list.querySelectorAll(".list-item");
  
  const options = {
    root: list,
    threshold: 0.5 };
  
  
  const oberver = new IntersectionObserver(observerCallback, options);
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }
  
  items.forEach(item => oberver.observe(item));
  