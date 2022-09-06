const display = document.querySelector(".number");
const IncreaseBtn = document.getElementById("increase");
const DecreaseBtn = document.getElementById("decrease");


let value = 0;

IncreaseBtn.addEventListener('click',() => {
   value += 1;
   display.textContent = value;
})

DecreaseBtn.addEventListener('click',() => {
    value -= 1;
    display.textContent = value;
})

//counter = (e) => {
    //const btn = e.target.id;
    //if(btn === 'IncreaseBtn'){
       // value += 1;
       // display.textContent = value;
    //}else if(btn === 'DecreaseBtn'){
      // value -= 1;
      // display.textContent = value;
    //}else{
       // value = 0;
    //}
//}
