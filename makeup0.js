
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Horizontal scroll data---------
let arrOfObject = 
[
  // 1
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904330900721_1.jpg",
  productTitle:"Swiss Beauty Long Lasting Makeup Fixer Natural Aloe",
  quantity:"50ml",rating:"21344",price:"₹299"},
//  - 01 I'll Be Black(1....2
  {bestSellers:"",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/c/2ce9017N_8904052428978_1.jpg",
  productTitle:"SUGAR Wingman Waterproof Microliner",
  quantity:"50ml",rating:"21344",price:"499"},
// 3
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/4/c49e9998903380000399_1.jpg",
  productTitle:"Faces Canada Ultime Pro Makeup Fixer",
  quantity:"50ml",rating:"21344",price:"₹459"},
// 4
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/7/279c0c58904245710927_0.jpg",
  productTitle:"Nykaa So Creme! Creamy Matte Lipstick - Wakeup Makeup",
  quantity:"50ml",rating:"21344",price:"₹299"},
// ----5
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
  productTitle:"LOreal Paris Voluminous Lash Paradise Mascara - ",
  quantity:"50ml",rating:"21344",price:"₹299"},
// 6
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/4/24821_h-8901030790591m.jpg",
  productTitle:"Lakme Forever Matte Liquid Lip Color",
  quantity:"50ml",rating:"21344",price:"₹299"},
// 7
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/7/773602575534_mini.jpg",
  productTitle:"M.A.C Strobe Cream / Mini Hydratant Lumineux Pinklite",
  quantity:"50ml",rating:"21344",price:"₹299"},
  // 8
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904330900721_1.jpg",
  productTitle:"Kay Beauty Matte Blush SUPER COLOR AVAILABLE",
  quantity:"50ml",rating:"21344",price:"₹299"},
// 9
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/1/81555979546.jpg",
  productTitle:"Maybelline New York Fit Me Matte+Poreless Liquid ",
  quantity:"50ml",rating:"21344",price:"₹299"},
// 10
  {bestSellers:"BEST SELLER",productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/9/39000098904325001211_1.jpg",
  productTitle:"L.A. Girl Pro Conceal HD SUPER COLOR AVAILABLE",
  quantity:"50ml",rating:"21344",price:"₹299"},
]
// Data of horizontal scroll ends-----------

arrOfObject.forEach(({bestSellers,productImage,productTitle,quantity,rating,price})=>{
  
  let div0 = document.createElement("div");

  let p1 = document.createElement("p");
  p1.setAttribute("class","bestseller");
  p1.innerText = bestSellers;

  let prodImg = document.createElement("img");;
  prodImg.src = productImage;

  let p2 = document.createElement("p");
  p2.setAttribute("class","horizontaldes");
  p2.innerText = productTitle;

  let p3 = document.createElement("p");
  p3.setAttribute("class","fiftyml");
  p3.innerText = quantity;
// class start div-----------
  let stardiv = document.createElement("div");
  stardiv.setAttribute("class","stardiv");

  let startimg =  document.createElement("img");;
  startimg.setAttribute("class","star");
  startimg.src = "star.png";

  let p4 = document.createElement("p");
  p4.setAttribute("class","rating");
  p4.innerText = rating;

  stardiv.append(startimg,p4);
  // -----------------------
  let mrpdiv = document.createElement("div");
  mrpdiv.setAttribute("class","mrpdiv");

  let mrp0 =  document.createElement("p");;
  mrp0.setAttribute("class","mrp");
  mrp0.innerText = "MRP:";
 
  let twonine = document.createElement("h2");
  twonine.setAttribute("class","twonine");
  twonine.innerText = price;
  mrpdiv.append(mrp0,twonine)
// -----------

let view = document.createElement("p");
view.setAttribute("class","view");
view.innerText = "View";

div0.append(p1,prodImg,p2,p3,stardiv,mrpdiv,view)

document.querySelector("#horizontalscroll").append(div0)
});



let getData0 = async ()=>{
  let res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=almay");
  let data0 = await res.json();
console.log(data0);
append0(data0)

}
let i=0;
getData0();

let append0 = (data1) =>{

data1.forEach(({image_link})=>{

let div1 = document.createElement("div");

let image = document.createElement("img");

image.src = image_link;
image.setAttribute("id","Manvswild")
let h2 = document.createElement("h1");

h2.innerText = "Upto 40% Off"


let h3 = document.createElement("h3");
h3.innerText = "On Entire Range";


div1.append(image,h2,h3);
document.querySelector("#amazingDiscount").append(div1);
})
}
// ---------------------





// document.querySelector("#inputfinal").addEventListener("keydown",funcSearch);

// function funcSearch(el){
//   let inp = document.querySelector("#inputfinal").value;
//   if(el.key=="Enter"){
//     localStorage.setItem("input0",JSON.stringify(inp));
//     window.location.href = "../search/search.html"
//   }
// console.log(el.key);
// }
// ---------------------------

import {navbar} from "../navbar/navbar.js";
// window.navbar = navbar
document.querySelector("#navbar00").innerHTML = navbar()

import {footer} from "../navbar/footer.js";

document.querySelector("#myFoot").innerHTML=footer();







// ----------------------------

document.querySelector("#navsearchPd").addEventListener("keydown",funSearch0);

function funSearch0(el){
  let inn = document.querySelector("#navsearchPd").value
console.log(inn);
// console.log(el.key);
if(el.key=="Enter"){
  localStorage.setItem("inpu",JSON.stringify(inn))
  window.location.href = "search.html";
}
}

document.querySelector("#index").addEventListener("click",funlate);

function funlate(){
  window.location.href ="index.html";
}