let products = [];
let productContainer = document.getElementById("input-container");
let inputProductName = document.getElementById("input-product-name");
let inputPrice = document.getElementById("input-price");
let inputAmount = document.getElementById("input-amount");
let productElements = document.getElementById("product-list");
/*
function loadPage() {
  alert("Velkommen til din handleliste");
  alert(
    "For å legge til varer skriver du inn navnet på varen i input-feltet merket med Navn på vare"
  );
  alert(
    "Deretter må du velge prisen per vare i feltet under merket pris (kan kun bruke tall som er lik eller høyere enn 1)"
  );
  alert(
    "Når du har skrevet pris og navn på varen må du skrive antallet du ønsker i feltet under merket Antall varer"
  );
  alert(
    "Du kan endre antall varer etter du har lagt til ved å trykke på + og - knappene i ruten"
  );
  alert("For å slette varer kan du trykke på slett knappen nederst i ruten"
  );
  alert("Når du nesten er tom for en vare vil boksen bytte farge til oransje"
  );
}
*/
function addProduct() {
  products.push({
    name: inputProductName.value,
    price: inputPrice.value,
    amount: inputAmount.value,
  });
  console.log(
    "La til vare: " +
      inputProductName.value +
      ", " +
      inputPrice.value +
      ", " +
      inputAmount.value
  );
  updateProductList();
}

function removeProduct(index) {
  let confirmDelete = prompt(
    "Ønsker du å slette " + products[index].name + "?" + " (ja/nei)"
  );
  if (confirmDelete.toLowerCase() == "ja") {
    let productName = products[index].name;
    products.splice(index, 1);
    updateProductList();
    alert(productName + " er nå slettet.");
  } else {
    alert("Sletting kansellert.");
  }
}

function updateProductList() {
  productElements.innerHTML = "";
  let productPriceSum = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].amount > 5) {
      productAmountText =
        "<p class='product-amount-text'>" + products[i].amount + "</p>";
    } else {
      productAmountText =
        "<p class='product-amount-text' style='color: orange;'>" +
        products[i].amount +
        "</p>";
    }
    productElements.innerHTML +=
      "<div class='product-wrapper' id='product-" +
      i +
      "'>" +
      "<p>Navn på vare: " +
      products[i].name +
      "</p>" +
      "<p>Pris per vare: kr " +
      products[i].price +
      ",-</p>" +
      "<div style='display: inline-block'>" +
      "Antall varer:" +
      productAmountText +
      "</div>" +
      "<div class='plus-minus-wrapper'>" +
      "<input class='plus-button' type='button' value='+' onclick='onPlusClicked(" +
      i +
      ")'/>" +
      "<input class='minus-button' type='button' value='-' onclick='onMinusClicked(" +
      i +
      ")'/>" +
      "</div>" +
      "<p> Total pris: " +
      products[i].amount * products[i].price +
      " kr" +
      "</p>" +
      "<button onclick='removeProduct(" +
      i +
      ")'>Slett</button>" +
      "</div>";

    if (products[i].amount < 6) {
      document.getElementById("product-" + i).style.borderColor = "orange";
    } else {
      document.getElementById("product-" + i).style.borderColor = "#272323";
    }

    productPriceSum += products[i].amount * products[i].price;
  }
  document.getElementById("total-sum-all-products").innerHTML =
    "Total sum av alle varer: " + productPriceSum + " kr";
}

function onPlusClicked(index) {
  products[index].amount = parseInt(products[index].amount, 10) + 1;
  updateProductList();
}

function onMinusClicked(index) {
  let productAmount = products[index].amount;
  let productName = products[index].name;
  if (productAmount == 6) {
    alert("Det er snart tomt for " + productName);
  }

  if (products[index].amount == 1) {
    alert("Antall varer kan ikke være lavere enn 1");
    return;
  }

  products[index].amount = parseInt(productAmount, 10) - 1;
  updateProductList();
}

function filterInput(value) {
  if (value <= 0) {
    value = 1;
    alert("Kan kun bruke tall som er høyere enn 1");
  }
  return value;
}
