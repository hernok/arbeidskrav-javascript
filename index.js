/*function loadPage() {
  alert("Velkommen til din handleliste");
  alert(
    "For å legge til varer skriver du inn navnet på varen i input-feltet merket med vare"
  );
  alert(
    "Etter du har skrevet navnet til varen må du velge prisen per vare i feltet under merket pris (kan kun bruke tall)"
  );
  alert(
    "Når du har skrevet pris og navn på varen må du skrive antallet du ønsker i feltet under"
  );
}
*/

var vareContainer = document.getElementById("vare-container");
var vareList = document.getElementById("vare-list");

var vareArray = [];

function addVare() {
  let vareInput = document.getElementById("vare-input").value;
  let priceInput = document.getElementById("price-input").value;
  let amountInput = document.getElementById("amount-input").value;

  vareArray.push({ name: vareInput, price: priceInput, amount: amountInput });

  console.log(vareArray);
  forArray();
}

function forArray() {
  vareList.innerHTML = "";
  for (let i = 0; i < vareArray.length; i++) {
    vareList.innerHTML += `<li id="vare-item">
        <h1 id="vare-name">
            Navn på vare: ${vareArray[i].name}
        </h1>
        <h2 id="vare-pris">
          Pris per vare: kr ${vareArray[i].price},-
        </h2> 
        <h3 id="antall">
          Antall varer: ${vareArray[i].amount}
        </h3>
        <h2>
          Total pris: ${vareArray[i].arrayPrice}
        <button id="delete-btn" onclick="deleteVare(${i})">Slett</button>
        </li>
        `;
  }
}
function deleteVare(i) {
  let confirmDelete = prompt(
    `Ønsker du å slette "${vareArray[i].name}"?
    ja / nei.`
  );
  if (confirmDelete == "ja") {
    alert(`${vareArray[i].name} er nå slettet.`);
    vareArray.splice(i, 1);
    forArray();
  } else {
    alert("Sletting kansellert.");
  }
}

// Feilmelding hvis input = 0
function priceError(priceInput) {
  if (priceInput.value == "0") {
    alert("Verdi må være høyere enn 0");
    return false;
  }
  return true;
}
//function amountError()
