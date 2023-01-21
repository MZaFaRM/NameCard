document
  .querySelector(".container")
  .addEventListener("mouseenter", function () {
    document.querySelector("body").classList.add("bg_image");
  });

document
  .querySelector(".container")
  .addEventListener("mouseleave", function () {
    document.querySelector("body").classList.remove("bg_image");
  });
