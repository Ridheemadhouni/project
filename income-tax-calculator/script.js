const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
const income = document.querySelector("#income");
const amount = parseInt(income.value);
const result = document.querySelector('h2');
let totaltax = 0;
if(amount<=1200000){
    totaltax = 0;
}else if(amount <= 1600000){
    totaltax = (amount-120000)*0.15;
}else if(amount <= 2000000){
    totaltax = (amount-160000)*0.15 + 60000;
}else if(amount <= 2400000){
    totaltax = (amount-200000)*0.25 +60000+80000;
}else {
    totaltax = (amount-240000)*0.30 + 60000+80000+100000;
}
result.textContent = `Total Tax : ${totaltax}`;
e.reset();
})