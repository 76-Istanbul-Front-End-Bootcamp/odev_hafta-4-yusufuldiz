const data = {
  USD: {EUR: 0.82, GBP: 0.74, ETH: 0.0016},
  EUR: {USD: 1.23, GBP: 0.91, ETH: 0.0020},
  GBP: {USD: 1.35, EUR: 1.10, ETH: 0.0022},
  ETH: {USD: 617.75, EUR:505.08, GBP: 460.96},
};

const currencyKeys = Object.keys(data);

function createCurrencyElements(elements, root, inputName){
  for(let i =0; i< elements.length; i++){
    const currencyKeyDiv   = document.createElement("div");
    const currencyKeyInput = document.createElement("input");
    currencyKeyInput.setAttribute("type", "radio");
    currencyKeyInput.setAttribute("name", inputName);
    currencyKeyInput.setAttribute("id", inputName + elements[i]);
    currencyKeyInput.setAttribute("value", elements[i]);

    const currencyKeyLabel = document.createElement("label");
    currencyKeyLabel.setAttribute("for", inputName + elements[i]);
    currencyKeyLabel.textContent = elements[i];

    currencyKeyDiv.appendChild(currencyKeyInput);
    currencyKeyDiv.appendChild(currencyKeyLabel);
    root.appendChild(currencyKeyDiv);
  }
}

//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

// to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);


const calculateButton = document.querySelector("#calculate-button");
calculateButton.addEventListener("click", function(){
  const currencyResult = document.querySelector("#currency-result");

    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var radioCheck = radios.length>0?radios[0].value: null;
    console.log(radioCheck)

    if(radioCheck == null){
        currencyResult.innerHTML = "seçim yapmalısınız";
    }
   // kimden ceviriyourz
   const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
   // kime ceviriyoruz
   const toTarget   = document.querySelector("input[name='currency_to']:checked").value;
   // amountu alalim
   const amount     = document.querySelector("input[name='amount']").value;

   const currentCurrencyObject = data[fromTarget];
   const resultForOne = currentCurrencyObject[toTarget];
   const result = amount * resultForOne;

    var typeCheck = isNaN(amount);
    console.log(typeCheck);

    if(typeCheck){
        return currencyResult.innerHTML = "lütfen sayi girin";
    }
    if(fromTarget === toTarget){
        currencyResult.innerHTML = "farkli değerleri seçmelisiniz";
    }
    else{
        currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
    }
    
});

function nightMode(){
    var nightHeader = document.querySelector("header");
    var nightBody = document.querySelector("body");
    nightHeader.classList.toggle("headerNight");
    nightBody.classList.toggle("bodyNight");
}