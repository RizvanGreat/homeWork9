let buttonSum = document.createElement('button');
buttonSum.textContent = "show sum";
buttonSum.classList.add("show-sum");
document.body.append(buttonSum);

function showSum(){
  let products = document.querySelectorAll('.item');
  let sum = 0; 
  for(let i =0;i<products.length; i++){
    sum += +products[i].textContent;
  }
alert(sum)
}

buttonSum.addEventListener("click", showSum);

let buttonRemoveDivs = document.createElement('button');
buttonRemoveDivs.textContent = "Remove-Divs";
buttonRemoveDivs.classList.add("remove-divs");
document.body.append(buttonRemoveDivs);

// Добавим обработчик события для кнопки "Show Sum"
buttonSum.addEventListener("click", showSum);

// Добавим обработчик события для кнопки "Remove All Divs"
buttonRemoveDivs.addEventListener("click", removeAllDivs);

function showSum() {
  let products = document.querySelectorAll('.item');
  let sum = 0; 
  for (let i = 0; i < products.length; i++) {
    sum += +products[i].textContent;
  }
  alert(sum);
}

function removeAllDivs() {
  let divs = document.querySelectorAll('div.item');
  for (let i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
}