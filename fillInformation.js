function fillInformation(planetInfo, type) {
  let planetNameElement = document.getElementsByClassName("planetName")[0];
  let textContent = document.getElementsByClassName("textContent")[0];
  let rotationTime = document
    .getElementsByClassName("info")[0]
    .children[0].getElementsByClassName("infoNumber")[0];
  let revolutionTime = document
    .getElementsByClassName("info")[0]
    .children[1].getElementsByClassName("infoNumber")[0];
  let radius = document
    .getElementsByClassName("info")[0]
    .children[2].getElementsByClassName("infoNumber")[0];
  let temp = document
    .getElementsByClassName("info")[0]
    .children[3].getElementsByClassName("infoNumber")[0];
  let planetImage = document.getElementsByClassName("mainImg")[0];

  if (type === "overview") {
    textContent.innerHTML = planetInfo.overview.content;
    planetImage.src = planetInfo.images.planet;
  } else if (type === "internal") {
    textContent.innerHTML = planetInfo.structure.content;
    planetImage.src = planetInfo.images.internal;
  } else if (type === "geology") {
    textContent.innerHTML = planetInfo.geology.content;
    planetImage.src = planetInfo.images.geology;
  }

  planetNameElement.innerHTML = planetInfo.name;
  rotationTime.innerHTML = planetInfo.rotation;
  revolutionTime.innerHTML = planetInfo.revolution;
  radius.innerHTML = planetInfo.radius;
  temp.innerHTML = planetInfo.temperature;
}
