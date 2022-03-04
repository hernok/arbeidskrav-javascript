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

  vareArray.push({
    name: vareInput,
    price: priceInput,
    amount: amountInput,
  });

  console.log(vareArray);
  forArray();
}

//Array
function forArray() {
  vareList.innerHTML = "";
  for (let i = 0; i < vareArray.length; i++) {
    vareList.innerHTML += `<div id="item-wrapper"><li id="vare-item">
        <h1 id="vare-name">
            Navn på vare: ${vareArray[i].name}
        </h1>
        <h2 id="vare-pris">
          Pris per vare: kr ${vareArray[i].price},-
        </h2> 
        <h3 id="antall">
          Antall varer: <input type="button" onclick="plusCounter(${i})" value="+" id="plus-btn" /> 
          <span id="number-place"> ${vareArray[i].amount} </span> 
          <input type="button" onclick="minusCounter(${i})" value="-" id="minus-btn" />
        </h3>
        <h2>
          Total pris: ${vareArray[i].arrayPrice}
        </h2>
        <button id="delete-btn" onclick="deleteVare(${i})">Slett</button>
        </li></div>
        `;
  }
  //Total pris
}

//Fjerne varer
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
/////////////////////////////////

Counter;
let counter = `${vareArray[i].amount}`;

var plusBtn = document.getElementById("plus-btn");
var minusBtn = document.getElementById("minus-btn");
var antallVare = document.getElementById("antall");

function plusCounter() {
  counter++;
  antallVare.innerHTML = counter;
}
function minusCounter() {
  counter--;
  antallVare.innerHTML = counter;
}

if (antallVare.value <= 5) {
  antallVare.style.color = "orange";
}
plusBtn.onclick = plusCounter(antallVare);
minusBtn.onclick = minusCounter();

////////////////////////////////
//Feilmelding hvis input = 0
/*
function priceError(priceInput) {
  if (priceInput.value == 0) {
    alert("Verdi må være høyere enn 0");
    return false;
  }
  return true;
}
function amountError()

function amountError() {
  var empt = document.forms["form1"]["text1"].value;
  if (empt == "") {
    alert("Please input a Value");
    return false;
  } else {
    alert("Code has accepted : you can try another");
    return true;
  }
}
*/
/////////////////////////////////
//Ny counter
/*
  var minusBtn = document.getElementById("minus-btn"),
    plusBtn = document.getElementById("plus-btn"),
    numberPlace = document.getElementById("number-place"),
    number = amountInput,
    min = 1,
    max = 1000;
  minusBtn.onclick = function () {
    if (number > min) {
      number = number - 1;
      numberPlace.innerText = number;
    }
    if (number == min) {
      numberPlace.style.color = "red";
    } else {
      numberPlace.style.color = "white";
    }
  }
  plusBtn.onclick = function(){
    if(number<max)
    {
      number = number+1;
      numberPlace.innerText = number;}
      if(number == max)
    {
      numberPlace.style.color="red";
    }
else{
  numberPlace.style.color= "white";
  }
  }*/
