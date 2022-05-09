let currentOpt = null;
let currentTheme = 0;

window.onload = function () {
  if (location.pathname.split("/")[3] == "webDevelopment") currentTheme = 0;
  else if (location.pathname.split("/")[3] == "graphicDesign") currentTheme = 1;
  else if (location.pathname.split("/")[3] == "simulation") currentTheme = 2;
};

export function setTheme(theme) {
  currentTheme = theme;
}

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
  onEnterOpt(current);

  return current;
}

function handleOnLeave(relatedTarget, current) {
  if (!current) return;

  while (relatedTarget) {
    if (relatedTarget == current) return;
    relatedTarget = relatedTarget.parentNode;
  }

  onLeaveOpt(current);

  current = null;
  return current;
}

function onEnterOpt(elem) {
  if (currentTheme == 0) elem.classList.add("text-r");
  else if (currentTheme == 1) elem.classList.add("text-b");
  else if (currentTheme == 2) elem.classList.add("text-g");
}

function onLeaveOpt(elem) {
  if (currentTheme == 0) elem.classList.remove("text-r");
  else if (currentTheme == 1) elem.classList.remove("text-b");
  else if (currentTheme == 2) elem.classList.remove("text-g");
}

document.getElementById("footer-placeholder").addEventListener("click", (e) => {
  let target = e.target.querySelector("a");
  console.log(e.target);
  //window.open(url, "_blank").focus();
});
