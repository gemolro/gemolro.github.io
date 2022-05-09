let links = [
  "https://letterboxd.com/film/jurassic-park/",
  "https://letterboxd.com/film/spirited-away/",
  "https://letterboxd.com/film/happy-as-lazzaro/",
  "https://letterboxd.com/film/parasite-2019/",
  "https://letterboxd.com/film/the-godfather/",
  "https://letterboxd.com/film/spider-man-into-the-spider-verse/",
  "https://letterboxd.com/film/the-dark-knight/",
  "https://letterboxd.com/film/schindlers-list/",
  "https://letterboxd.com/film/the-lord-of-the-rings-the-return-of-the-king/",
  "https://letterboxd.com/film/james-acaster-repertoire/",
  "https://letterboxd.com/film/the-empire-strikes-back/",
  "https://letterboxd.com/film/whiplash-2014/",
  "https://letterboxd.com/film/paris-texas/",
  "https://letterboxd.com/film/rear-window/",
  "https://letterboxd.com/film/pulp-fiction/",
  "https://letterboxd.com/film/the-shining/",
  "https://letterboxd.com/film/se7en/",
  "https://letterboxd.com/film/fight-club/",
  "https://letterboxd.com/film/the-grand-budapest-hotel/",
  "https://letterboxd.com/film/akira/",
  "https://letterboxd.com/film/the-lion-king/",
  "https://letterboxd.com/film/back-to-the-future/",
  "https://letterboxd.com/film/interstellar/",
  "https://letterboxd.com/film/inception/",
  "https://letterboxd.com/film/the-iron-giant/",
  "https://letterboxd.com/film/django-unchained/",
  "https://letterboxd.com/film/toy-story/",
  "https://letterboxd.com/film/chicken-run/",
  "https://letterboxd.com/film/mad-max-fury-road/",
  "https://letterboxd.com/film/kill-bill-vol-1/",
  "https://letterboxd.com/film/ratatouille/",
  "https://letterboxd.com/film/trainspotting/",
  "https://letterboxd.com/film/reservoir-dogs/",
  "https://letterboxd.com/film/forrest-gump/",
  "https://letterboxd.com/film/blade-runner/",
  "https://letterboxd.com/film/wild-tales/",
  "https://letterboxd.com/film/monty-python-and-the-holy-grail/",
  "https://letterboxd.com/film/1917/",
  "https://letterboxd.com/film/arrival-2016/",
  "https://letterboxd.com/film/monsters-inc/",
  "https://letterboxd.com/film/logan-2017/",
  "https://letterboxd.com/film/klaus/",
  "https://letterboxd.com/film/her/",
  "https://letterboxd.com/film/finding-nemo/",
  "https://letterboxd.com/film/no-country-for-old-men/",
];

document.getElementById("film").addEventListener("click", (e) => {
  let min = Math.ceil(0);
  let max = Math.floor(links.length);
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  let url = links[num];
  window.open(url, "_blank").focus();
});
