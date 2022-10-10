const recherche = document.getElementById("recherche");
const rechercher = document.getElementById("rechercher");

const nutriscore = document.getElementById("nutriscoreLogo");
const ecoscore = document.getElementById("ecoscoreLogo");
const nova = document.getElementById("novaLogo");

const imageProduit = document.getElementById("imageProduit");

let nutri, eco, nov, img;
let graisse, sel, graissesSat, sucre;

const qteGraisses = document.getElementById("qteGraisses");
const qteSel = document.getElementById("qteSel");
const qteGraissesSaturees = document.getElementById("qteGraissesSaturees");
const qteSucre = document.getElementById("qteSucre");

const donner = document.getElementById("donner");

rechercher.addEventListener("click", search);

function search() {
  const url =
    "https://world.openfoodfacts.org/api/v0/product/" +
    recherche.value +
    ".json";

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      if (data.status == 1) {
        nutri = data.product.nutriscore_grade;
        eco = data.product.ecoscore_data.grade;
        nov = data.product.nova_groups;
        img = data.product.image_url;
        graisse = data.product.nutriments.fat_100g;
        sel = data.product.nutriments.salt_100g;
        graissesSat = data.product.nutriments["saturated-fat_100g"];
        sucre = data.product.nutriments.sugars_100g;
      } else {
        imageProduit.innerHTML = "Le code barre rentré n'est pas référencé";
      }
    })
    .then(showResults);
}
function resultNutriscore() {
  nutriscore.setAttribute(
    "src",
    "./img/240px-Nutri-score-" + nutri + ".svg.png"
  );
}

function resultEcoscore() {
  ecoscore.setAttribute("src", "./img/Eco-score " + eco + ".svg");
}

function resultNova() {
  nova.setAttribute("src", "./img/NOVA_group_" + nov + ".svg.png");
}

function showResults() {
  resultNutriscore();
  resultEcoscore();
  resultNova();
  imageProduit.setAttribute("src", img);
  qteGraisses.innerHTML = graisse + " g";
  qteSel.innerHTML = sel + " g";
  qteGraissesSaturees.innerHTML = graissesSat + " g";
  qteSucre.innerHTML = sucre + " g";
}

donner.addEventListener("click", goTo);

function goTo() {
  window.location.href =
    "https://fr.openfoodfacts.org/faire-un-don-a-open-food-facts?utm_source=off&utm_medium=web&utm_campaign=donate-2022&utm_term=en-text-button";
}
