function addClass(e, classes) {
  e.classList && e.classList.add(...classes.split(" "));
}

function removeClass(e, classes) {
  e.classList && e.classList.remove(...classes.split(" "));
}

const sliders = document.getElementsByClassName("slider");

for (let iCarousel = 0; iCarousel < sliders.length; iCarousel++) {
  const carousel = sliders[iCarousel];

  const items = carousel.querySelectorAll(".slider .item");
  const preview = carousel.querySelector("div > .preview");

  for (let item = 0; item < items.length; item++) {
    const itemTrigger = items[item];

    itemTrigger.addEventListener("click", function () {
      const dataImg = this.attributes?.["data-img"].value;
      for (let j = 0; j < items.length; j++) {
        const rmSelected = items[j];
        removeClass(rmSelected, "selected");
      }
      addClass(itemTrigger, "selected");

      preview.querySelector("img").setAttribute("src", dataImg);
    });
  }
}
