let indexBanner = 0;
let imgBanner = document.querySelector(".sc-img");
function doiBanner() {
  indexBanner += 1;
  if (indexBanner > 2) {
    indexBanner = 0;
  }
  imgBanner.src = `../image/Banner${indexBanner}.png`;
}

setInterval(doiBanner, 5000);
