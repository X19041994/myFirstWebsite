function getName() {
  document.querySelector(".wellcomeWord").style.display = "none";
  document.getElementById("personName").style.display = "none";
  document.getElementById("enterBtn").style.display = "none";
  document.querySelector(".startBtnDisappear").style.display = "none";
  document.querySelector(".firstTextDisappear").style.display = "none";
  document.getElementById("menu").style.display = "flex";
  let personName = document.querySelector("#personName").value;
  document.querySelector(".name").innerHTML =
    "Hi " + personName + "! Welcome to my CV site";
  document.querySelector(".name").style.display = "flex";
}

document
  .querySelector(".menuHome")
  .addEventListener("click", menuHomeClickAnimation);
function menuHomeClickAnimation() {
  document.querySelector(".textWork").style.display = "none";
  document.querySelector(".textAbout").style.display = "none";
  document.querySelector(".imageAbout").style.display = "none";
  document.querySelector(".menuHome").classList.add("menuClickAnimation");
  document.querySelector(".contentWork").classList.add("contentWorkDisappear");
  document
    .querySelector(".contentAbout")
    .classList.add("contentAboutDisappear");
}
document
  .querySelector(".menuHome")
  .addEventListener("click", menuHomeClickDisappear);
function menuHomeClickDisappear() {
  setTimeout(menuHomeClick, 4000);
}
function menuHomeClick() {
  document.querySelector(".name").style.display = "flex";
  document.querySelector(".contentWork").style.display = "none";
  document.querySelector(".contentAbout").style.display = "none";
  document
    .querySelector(".contentWork")
    .classList.remove("contentWorkDisappear");
  document
    .querySelector(".contentAbout")
    .classList.remove("contentAboutDisappear");
}
document
  .querySelector(".menuInsta")
  .addEventListener("click", menuHomeClickAnimation);
function menuHomeClickAnimation() {
  document.querySelector(".textWork").style.display = "none";
  document.querySelector(".textAbout").style.display = "none";
  document.querySelector(".imageAbout").style.display = "none";
  document.querySelector(".menuHome").classList.add("menuClickAnimation");
  document.querySelector(".contentWork").classList.add("contentWorkDisappear");
  document
    .querySelector(".contentAbout")
    .classList.add("contentAboutDisappear");
}
document
  .querySelector(".menuInsta")
  .addEventListener("click", menuHomeClickDisappear);
function menuHomeClickDisappear() {
  setTimeout(menuHomeClick, 4000);
}

document
  .querySelector(".menuWork")
  .addEventListener("click", menuWorkClickAnimation);
function menuWorkClickAnimation() {
  document.querySelector(".menuWork").classList.add("menuClickAnimation");
  document.querySelector(".contentWork").style.display = "flex";
  document.querySelector(".textWork").style.display = "flex";
  document.querySelector(".name").style.display = "none";
  document.querySelector(".contentAbout").style.display = "none";
}
document
  .querySelector(".menuWork")
  .addEventListener("animationend", menuWorkDisappear);
function menuWorkDisappear() {
  document
    .querySelector(".contentWork")
    .classList.remove("contentWorkDisappear");
}
document
  .querySelector(".menuInsta")
  .addEventListener("click", menuInstaClickAnimation);
function menuInstaClickAnimation() {
  document.querySelector(".menuInsta").classList.add("menuClickAnimation");
}
document
  .querySelector(".menuAbout")
  .addEventListener("click", menuAboutClickAnimation);
function menuAboutClickAnimation() {
  document.querySelector(".menuAbout").classList.add("menuClickAnimation");
  let personName = document.querySelector("#personName").value;
  document.querySelector(".name").style.display = "none";
  document.querySelector(".contentWork").style.display = "none";
  document.querySelector(".contentAbout").style.display = "flex";
  document.querySelector(".textAbout").style.display = "flex";
  document.querySelector(".imageAbout").style.display = "flex";
  document.querySelector(".textAbout").innerHTML =
    "<br />Hi " +
    personName +
    ", nice to meet U!<br /><br />I am glad to welcome you to my first website.<br/>Let me tell you a little about myself...<br/>I am a novice web developer, but I am motivated and enthusiastic to become the BEST web developer in your life.<br/><br/>If u want to work with me or just send me<br/>a few words,<br/>click on the button at the top! ⬆";
}

document
  .querySelector(".menuHome")
  .addEventListener("animationend", animationHandler, false);
document
  .querySelector(".menuWork")
  .addEventListener("animationend", animationHandler, false);
document
  .querySelector(".menuInsta")
  .addEventListener("animationend", animationHandler, false);
document
  .querySelector(".menuAbout")
  .addEventListener("animationend", animationHandler, false);
function animationHandler() {
  document.querySelector(".menuHome").classList.remove("menuClickAnimation");
  document.querySelector(".menuWork").classList.remove("menuClickAnimation");
  document.querySelector(".menuInsta").classList.remove("menuClickAnimation");
  document.querySelector(".menuAbout").classList.remove("menuClickAnimation");
}

document
  .querySelector(".startBtnSpawn")
  .addEventListener("animationend", startBtnSpawn);
function startBtnSpawn() {
  document.querySelector(".startBtnSpawn").classList.add("startBtn");
}
document
  .querySelector(".startBtnSpawn")
  .addEventListener("click", startDisappear);
function startDisappear() {
  document.querySelector(".startBtnSpawn").classList.add("startBtnDisappear");
  document.querySelector(".firstText").classList.add("firstTextDisappear");
  document.querySelector(".wellcomeWord").style.display = "flex";
  document.querySelector("#personName").style.display = "flex";
  document.querySelector("#enterBtn").style.display = "flex";
  document.querySelector(".backgroundVideoMedia").play(0);
}
