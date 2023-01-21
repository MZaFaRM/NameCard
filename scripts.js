var music = document.getElementById("music");
music.play()
music.pause()

function pageLoaded() {
  document.querySelector("body").classList.remove("clear");
}

document
  .querySelector(".container")
  .addEventListener("mouseenter", function () {
    document.querySelector("body").classList.add("bg_image");
    music.play();
  });

document
  .querySelector(".container")
  .addEventListener("mouseleave", function () {
    document.querySelector("body").classList.remove("bg_image");
    music.pause();
  });

