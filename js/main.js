document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".decowrap span").forEach((el) => {
    const pos = el.getAttribute("data-value");
    const x = (window.innerWidth - e.pageX * pos) / 90;
    const y = (window.innerHeight - e.pageY * pos) / 90;
    el.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
