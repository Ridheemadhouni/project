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
let B1 = document.getElementById("B");
let clickB1 =0;
let b1 = document.getElementById("a2");
let clickb1 = 0;
B1.addEventListener("click",()=>{
    clickB1++;
    if(clickB1===1){
        document.body.style.backgroundColor="#5585b5";
    }else{
        document.body.style.backgroundColor ="#bae8e8";
        clickB1=0;
    }
})
b1.addEventListener("click",()=>{
    clickb1++;
    if(clickb1===1){
        document.body.style.color="#5585b5";
    }else{
        document.body.style.color="black";
        clickb1=0;
    }
})
let C = document.getElementById("C");
let clickC =0;
let c = document.getElementById("a3");
let clickc = 0;
C.addEventListener("click",()=>{
    clickC++;
    if(clickC===1){
        document.body.style.backgroundColor="#ffb5b5";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        clickC=0;
    }
})
c.addEventListener("click",()=>{
    clickc++;
    if(clickc===1){
        document.body.style.color="#ffb5b5";
    }else{
        document.body.style.color="black";
        clickc=0;
    }
})
let D = document.getElementById("D");
let Dclick = 0;
let d = document.getElementById("a4");
let clickd =0;
D.addEventListener("click",()=>{
    Dclick++;
    if(Dclick===1){
        document.body.style.backgroundColor="#118a7e";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        Dclick=0;
    }
})
d.addEventListener("click",()=>{
    clickd++;
    if(clickd===1){
        document.body.style.color="#118a7e";
    }else{
        document.body.style.color="black";
        clickd=0;
    }
})
let E = document.getElementById("E");
let E_click =0;
let e1 = document.getElementById("a5");
let a5_click =0;
E.addEventListener("click",()=>{
    E_click++;
    if(E_click===1){
        document.body.style.backgroundColor="#005689";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        E_click=0;
    }
})
e1.addEventListener("click",()=>{
    a5_click++;
    if(a5_click===1){
        document.body.style.color="#005689";
    }else{ document.body.style.color="black";
        a5_click=0;}
})
let F = document.getElementById("F");
let F_click =0;
let f1 = document.getElementById("a6");
let a6_click =0;
F.addEventListener("click",()=>{
    F_click++;
    if(F_click===1){
        document.body.style.backgroundColor="#f7f7f7";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        F_click=0;
    }
})
f1.addEventListener("click",()=>{
    a6_click++;
    if(a6_click===1){
        document.body.style.color="#f7f7f7";
    }else{ document.body.style.color="black";
        a6_click=0;}
})
let G = document.getElementById("G");
let G_click =0;
let g1 = document.getElementById("a7");
let a7_click =0;
G.addEventListener("click",()=>{
    G_click++;
    if(G_click===1){
        document.body.style.backgroundColor="#e79e85";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        G_click=0;
    }
})
g1.addEventListener("click",()=>{
    a7_click++;
    if(a7_click===1){
        document.body.style.color="#e79e85";
    }else{ document.body.style.color="black";
        a7_click=0;}
})
let H = document.getElementById("H");
let H_click =0;
let h1 = document.getElementById("a8");
let h7_click =0;
H.addEventListener("click",()=>{
    H_click++;
    if(H_click===1){
        document.body.style.backgroundColor="#8ef6e4";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        H_click=0;
    }
})
h1.addEventListener("click",()=>{
    h7_click++;
    if(h7_click===1){
        document.body.style.color="#8ef6e4";
    }else{ document.body.style.color="black";
        h7_click=0;}
})
let I = document.getElementById("I");
let I_click =0;
let i1 = document.getElementById("a9");
let i7_click =0;
I.addEventListener("click",()=>{
    I_click++;
    if(I_click===1){
        document.body.style.backgroundColor="#a21232";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        I_click=0;
    }
})
i1.addEventListener("click",()=>{
    i7_click++;
    if(i7_click===1){
        document.body.style.color="#a21232";
    }else{ document.body.style.color="black";
        i7_click=0;}
})
let J = document.getElementById("J");
let J_click =0;
let j1 = document.getElementById("a10");
let j7_click =0;
J.addEventListener("click",()=>{
    J_click++;
    if(J_click===1){
        document.body.style.backgroundColor="#835af1";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        J_click=0;
    }
})
j1.addEventListener("click",()=>{
    j7_click++;
    if(j7_click===1){
        document.body.style.color="#835af1";
    }else{ document.body.style.color="black";
        j7_click=0;}
})
let K = document.getElementById("K");
let K_click =0;
let j2 = document.getElementById("a11");
let j2_click =0;
K.addEventListener("click",()=>{
    K_click++;
    if(K_click===1){
        document.body.style.backgroundColor="#f70776";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        K_click=0;
    }
})
j2.addEventListener("click",()=>{
    j2_click++;
    if(j2_click===1){
        document.body.style.color="#f70776";
    }else{ document.body.style.color="black";
        j2_click=0;}
})
let l = document.getElementById("L");
let l_click =0;
let j3 = document.getElementById("a12");
let j3_click =0;
l.addEventListener("click",()=>{
    l_click++;
    if(l_click===1){
        document.body.style.backgroundColor="#8dc6ff";
    }else{
        document.body.style.backgroundColor="#bae8e8";
        l_click=0;
    }
})
j3.addEventListener("click",()=>{
    j3_click++;
    if(j3_click===1){
        document.body.style.color="#8dc6ff";
    }else{ document.body.style.color="black";
        j3_click=0;}
})
