import * as n from "./nav.js";

let workOption = 0;
let currentCard = null;

document.getElementById("optionWeb").addEventListener("click", (e) => {
  document.getElementById("optionWeb_Btn").classList.remove("opacity-25");

  if (workOption == 1) {
    document.getElementById("optionGraphic_Btn").classList.add("opacity-25");
    document.getElementById("worksGraphic").style.display = "none";
    document.getElementById("mainText").classList.remove("text-b");
    document.getElementById("smile").classList.remove("text-b");
  } else if (workOption == 2) {
    document.getElementById("optionSim_Btn").classList.add("opacity-25");
    document.getElementById("worksSim").style.display = "none";
    document.getElementById("mainText").classList.remove("text-g");
    document.getElementById("smile").classList.remove("text-g");
  }

  document.getElementById("worksWeb").style.display = "block";
  document.getElementById("mainText").classList.add("text-r");
  document.getElementById("smile").classList.add("text-r");
  //document.getElementById("main_img").src = "./images/logos/Port1_0.png";

  workOption = 0;
  n.setTheme(workOption);
});

document.getElementById("optionGraphic").addEventListener("click", (e) => {
  document.getElementById("optionGraphic_Btn").classList.remove("opacity-25");

  if (workOption == 0) {
    document.getElementById("optionWeb_Btn").classList.add("opacity-25");
    document.getElementById("worksWeb").style.display = "none";
    document.getElementById("mainText").classList.remove("text-r");
    document.getElementById("smile").classList.remove("text-r");
  } else if (workOption == 2) {
    document.getElementById("optionSim_Btn").classList.add("opacity-25");
    document.getElementById("worksSim").style.display = "none";
    document.getElementById("mainText").classList.remove("text-g");
    document.getElementById("smile").classList.remove("text-g");
  }

  document.getElementById("worksGraphic").style.display = "block";
  document.getElementById("mainText").classList.add("text-b");
  document.getElementById("smile").classList.add("text-b");
  //document.getElementById("main_img").src = "./images/logos/Port1_1.png";

  workOption = 1;
  n.setTheme(workOption);
});

document.getElementById("optionSim").addEventListener("click", (e) => {
  document.getElementById("optionSim_Btn").classList.remove("opacity-25");

  if (workOption == 0) {
    document.getElementById("optionWeb_Btn").classList.add("opacity-25");
    document.getElementById("worksWeb").style.display = "none";
    document.getElementById("mainText").classList.remove("text-r");
    document.getElementById("smile").classList.remove("text-r");
  } else if (workOption == 1) {
    document.getElementById("optionGraphic_Btn").classList.add("opacity-25");
    document.getElementById("worksGraphic").style.display = "none";
    document.getElementById("mainText").classList.remove("text-b");
    document.getElementById("smile").classList.remove("text-b");
  }

  document.getElementById("worksSim").style.display = "block";
  document.getElementById("mainText").classList.add("text-g");
  document.getElementById("smile").classList.add("text-g");
  //document.getElementById("main_img").src = "./images/logos/Port1_2.png";

  workOption = 2;
  n.setTheme(workOption);
});

document.getElementById("works").addEventListener("mouseover", (e) => {
  let target = e.target.closest(".card");
  let current = currentCard;
  currentCard = handleOnEnter(target, current);
});

document.getElementById("works").addEventListener("mouseout", (e) => {
  let relatedTarget = e.relatedTarget;
  let current = currentCard;
  currentCard = handleOnLeave(relatedTarget, current);
});

function handleOnEnter(target, current) {
  if (current) return;

  if (!target) return;

  current = target;
  if (current.tagName == "SPAN") onEnterOpt(current);
  else onEnterCard(current);

  return current;
}

function handleOnLeave(relatedTarget, current) {
  if (!current) return;

  while (relatedTarget) {
    if (relatedTarget == current) return;
    relatedTarget = relatedTarget.parentNode;
  }

  if (current.tagName == "SPAN") onLeaveOpt(current);
  else onLeaveCard(current);

  current = null;
  return current;
}

function onEnterCard(elem) {
  let imagen = elem.querySelector("img");
  imagen.classList.add("opacity-25");
  let division = elem.querySelector("div");
  division.style = "display: block";
}

function onLeaveCard(elem) {
  let imagen = elem.querySelector("img");
  imagen.classList.remove("opacity-25");
  let division = elem.querySelector("div");
  division.style = "display: none";
}
