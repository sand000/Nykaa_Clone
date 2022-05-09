import { navbar } from "../navbar/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar();

document.getElementById("cart").addEventListener("click", onCartClick);

function onCartClick() {
      document.getElementById("cartData").style.display = "block";
}

document.getElementById("cartBack").addEventListener("click", cartBack);
function cartBack() {
      document.getElementById("cartData").style.display = "none";
}


let cartData = JSON.parse(localStorage.getItem("cart")) || [];
console.log("cartData: ", cartData);

//!append wrk start to "cartProduct"
let sum = 0;
cartData.forEach(function (el, i) {
      let productDiv = document.createElement("div");
      productDiv.setAttribute("id", "productDiv");
      let imgDiv = document.createElement("div");
      let bakisab = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("class", "cartImg");
      img.src = el.img;
      imgDiv.append(img);
      let name = document.createElement("p");
      name.innerText = el.name;
      let price = document.createElement("p");
      price.innerHTML = `Price :- ${el.Price} ₹`;
      sum = sum + Number(el.Price);
      // document.getElementById("grandTotal").innerText = `Grand Total : ${sum}`;
      let delimg = document.createElement("img");
      delimg.id = "delimg";

      delimg.onclick = function () {
            removeFromCart(el, i);
      };
      delimg.src =
            "https://www.pngkit.com/png/detail/123-1234607_recycling-bin-vector-delete-icon-png-black.png";
      bakisab.append(name, price);
      productDiv.append(imgDiv, bakisab, delimg);
      document.getElementById("cartProduct").append(productDiv);
});
// console.log(sum)

document.getElementById("grandTotal").innerText= `Grand total ${sum}`

function removeFromCart(el, i) {
      cartData.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cartData));

      let crtprdct= document.getElementById("cartProduct")
      crtprdct.window.location.reload();
      // ${ "cartData" }.load(window.location)
}


