const recherche = document.getElementById("recherche");
const rechercher = document.getElementById("rechercher");

// const nutriscore = document.getElementById("nutriscoreLogo");
// // const ecoscore = document.getElementById("ecoscoreLogo");
// const nova = document.getElementById("novaLogo");

// const imageProduit = document.getElementById("imageProduit");

// let nutri, eco, nov, img;
let graisse, sel, graissesSat, sucre;

const qteGraisses = document.getElementById("qteGraisses");
const qteSel = document.getElementById("qteSel");
const qteGraissesSaturees = document.getElementById("qteGraissesSaturees");
const qteSucre = document.getElementById("qteSucre");

const url =
  "https://world.openfoodfacts.org/api/v0/product/" + recherche.value + ".json";

rechercher.addEventListener("click", search());

function search() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // nutri = data.product.nutriscore_grade;
      // // eco = data.product.ecoscore_data.adjustments;
      // nov = data.product.nova_groups;
      // img = data.product.selected_images.front.display.en;
      graisse = data.product.nutriments.fat_100g;
      sel = data.product.nutriments.salt_100g;
      graissesSat = data.product.nutriments["saturated-fat_100g"];
      sucre = data.product.nutriments.sugars_100g;
    })
    .then(showResults);
}
// function resultNutriscore() {
//   if (nutri.value === "d") {
//     nutriscore.setAttribute();
//   }
// }
function showResults() {
  // nutriscore.setAttribute(nutri);
  // // ecoscore.setAttribute(eco);
  // nova.setAttribute(nov);
  // imageProduit.setAttribute(img);
  qteGraisses.innerHTML = graisse + " g";
  qteSel.innerHTML = sel + " g";
  qteGraissesSaturees.innerHTML = graissesSat + " g";
  qteSucre.innerHTML = sucre + " g";
}
