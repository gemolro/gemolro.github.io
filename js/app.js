let workOption = 1;
let currentPic = null;

document.getElementById("optionWeb").addEventListener("click", (e) => {
  document.getElementById("optionWeb_Btn").classList.remove("opacity-25");

  if (workOption == 1) {
    document.getElementById("optionGraphic_Btn").classList.add("opacity-25");
    document.getElementById("worksGraphic").style.display = "none";
  } else if (workOption == 2) {
    document.getElementById("optionWeb_Btn").classList.add("opacity-25");
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
  if (currentPic) return;

  let target = e.target.closest(".card");

  if (!target) return;

  currentPic = target;

  onEnter(currentPic);
});

document.getElementById("works").addEventListener("mouseout", (e) => {
  if (!currentPic) return;

  let relatedTarget = e.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentPic) return;
    relatedTarget = relatedTarget.parentNode;
  }

  onLeave(currentPic);
  currentPic = null;
});

function onEnter(elem) {
  let imagen = elem.querySelector("img");
  imagen.classList.add("opacity-25");
  let division = elem.querySelector("div");
  division.style = "display: block";
}

function onLeave(elem) {
  let imagen = elem.querySelector("img");
  imagen.classList.remove("opacity-25");
  let division = elem.querySelector("div");
  division.style = "display: none";
}
