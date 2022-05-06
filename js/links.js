let links = [
  "https://letterboxd.com/film/jurassic-park/",
  "https://letterboxd.com/film/spirited-away/",
  "https://letterboxd.com/film/happy-as-lazzaro/",
];

document.getElementById("film").addEventListener("click", (e) => {
  let min = Math.ceil(0);
  let max = Math.floor(links.length);
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  let url = links[num];
  window.open(url, "_blank").focus();
});
