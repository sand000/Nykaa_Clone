import {navbar} from "../navbar/navbar.js";

let  n =document.getElementById("navbar");
n.innerHTML=navbar();




import {footer} from "../navbar/footer.js";

let  b =document.getElementById("footer");
b.innerHTML=footer();


// document.querySelector("#index").addEventListener("click",funlate);

// function funlate(){
//   window.location.href ="index.html";
// }







let outerfun=document.getElementById("main-carousel").children
for(let ele of outerfun)
{
    ele.addEventListener("click",outerfunction)
}
function outerfunction()
{
   window.location.href="./product.html"
}




let outerfun1=document.getElementById("maincarousel").children
for(let ele of outerfun1)
{
    ele.addEventListener("click",outerfunction1)
}
function outerfunction1()
{
   window.location.href="./product.html"
}