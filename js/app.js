let workOption = 1;
let currentCard = null;
let currentOpt = null;

/*
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // add padding top to show content behind navbar
      //navbar_height = document.querySelector(".navbar").offsetHeight;
      //document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // remove padding top from body
      //document.body.style.paddingTop = "0";
    }
  });
});
*/

document.getElementById("optionWeb").addEventListener("click", (e) => {
  document.getElementById("optionWeb_Btn").classList.remove("opacity-25");

  if (workOption == 1) {
    document.getElementById("optionGraphic_Btn").classList.add("opacity-25");
    document.getElementById("worksGraphic").style.display = "none";
  } else if (workOption == 2) {
    document.getElementById("optionSim_Btn").classList.add("opacity-25");
    document.getElementById("worksSim").style.display = "none";
  }

  document.getElementById("worksWeb").style.display = "block";

  workOption = 0;
});

document.getElementById("optionGraphic").addEventListener("click", (e) => {
  document.getElementById("optionGraphic_Btn").classList.remove("opacity-25");

  if (workOption == 0) {
    document.getElementById("optionWeb_Btn").classList.add("opacity-25");
    document.getElementById("worksWeb").style.display = "none";
  } else if (workOption == 2) {
    document.getElementById("optionSim_Btn").classList.add("opacity-25");
    document.getElementById("worksSim").style.display = "none";
  }

  document.getElementById("worksGraphic").style.display = "block";

  workOption = 1;
});

document.getElementById("optionSim").addEventListener("click", (e) => {
  document.getElementById("optionSim_Btn").classList.remove("opacity-25");

  if (workOption == 0) {
    document.getElementById("optionWeb_Btn").classList.add("opacity-25");
    document.getElementById("worksWeb").style.display = "none";
  } else if (workOption == 1) {
    document.getElementById("optionGraphic_Btn").classList.add("opacity-25");
    document.getElementById("worksGraphic").style.display = "none";
  }

  document.getElementById("worksSim").style.display = "block";

  workOption = 2;
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

document
  .getElementById("nav-placeholder")
  .addEventListener("mouseover", (e) => {
    let target = e.target.querySelector("span");
    if (target.id != "opt") return;
    let current = currentOpt;
    currentOpt = handleOnEnter(target, current);
  });

document.getElementById("nav-placeholder").addEventListener("mouseout", (e) => {
  let relatedTarget = e.relatedTarget;
  let current = currentOpt;
  currentOpt = handleOnLeave(relatedTarget, current);
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

function onEnterOpt(elem) {
  elem.classList.add("text-r");
}

function onLeaveCard(elem) {
  let imagen = elem.querySelector("img");
  imagen.classList.remove("opacity-25");
  let division = elem.querySelector("div");
  division.style = "display: none";
}

function onLeaveOpt(elem) {
  elem.classList.remove("text-r");
}
