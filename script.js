const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", (e) => {
  console.log(e.pageY - btnE1.offsetleft);
  const x = e.pageX - btnE1.offsetleft;
  const y = e.pageY - btnE1.offsetTop;

  btnE1.style.setProperty("--xPos", x + "px");
  btnE1.style.setProperty("--yPos", y + "px");
});
