let A1 = document.getElementById("A");
let a1 = document.getElementById("a1");
let clickcountA1 = 0;
let clickcounta1 =0;
A1.addEventListener("click", ()=>{
   clickcountA1++;
   if(clickcountA1===1){
    document.body.style.backgroundColor="#a2a8d3";
   }else if(clickcountA1===2){
    document.body.style.backgroundColor ="#bae8e8";
    clickcountA1=0;
   }
})
a1.addEventListener("click",()=>{
clickcounta1++;
if(clickcounta1===1){
    document.body.style.color ="#a2a8d3";
}else{
    document.body.style.color="black";
    clickcounta1 =0;
}
})