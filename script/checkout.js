import { pay } from "../components/payment.js ";

function clickpayment() {
      document.getElementById("bottamContainer").innerHTML = pay();

      let addr = JSON.parse(localStorage.getItem("Address"));

      let add = document.createElement("address");
      let name = document.createElement("p");
      name.innerText = addr.name;
      let adress = document.createElement("p");
      adress.innerText = addr.mob;
      let num = document.createElement("p");
      num.innerText = addr.address;
      add.append(name, adress, num);
      document.getElementById("address12").append(add);
      document.getElementById("cartTotal").append(total_cartPrice);
}
document.getElementById("payment").addEventListener("click", clickpayment);

// -----------------------------------------------------------------------------------------------------------------------------

document.getElementById("addForm").addEventListener("submit", addres);

function addres() {
      event.preventDefault();

      document.getElementById("myAddress").innerHTML = null;

      let name1 = document.getElementById("name").value;
      let number = document.getElementById("number").value;
      let address = document.getElementById("addres").value;

      let Obj = {
            name: name1,
            mob: number,
            address: address,
      };

      localStorage.setItem("Address", JSON.stringify(Obj));
      // window.location.reload();

      let add = document.createElement("address");
      let name = document.createElement("p");
      name.innerText = Obj.name;
      let adress = document.createElement("p");
      adress.innerText = Obj.mob;
      let num = document.createElement("p");
      num.innerText = Obj.address;
      let btn = document.createElement("button");
      btn.innerText = "SHIP TO THIS ADDRESS";
      btn.addEventListener("click", function () {
            clickpayment();
      });

      add.append(name, adress, num, btn);

      document.getElementById("myAddress").append(add);
}

let checkout_cart = JSON.parse(localStorage.getItem("cart"));

let sum = 0;
checkout_cart.forEach((e) => {
      // console.log(e)
      let cartProduct = document.createElement("div");
      cartProduct.setAttribute("id", "cartProduct");
      let img_div = document.createElement("div");
      let img = document.createElement("img");
      img.src = e.img;
      img_div.append(img);
      let detail = document.createElement("div");
      let name = document.createElement("p");
      name.innerText = e.name;
      let price = document.createElement("p");
      price.innerText = e.Price;

      sum += Number(e.Price);

      detail.append(name, price);
      cartProduct.append(img_div, detail);
      document.getElementById("cart").append(cartProduct);
});
// console.log(sum)

// let total_cartPrice = document.createElement("p");
// total_cartPrice.innerText = `Total Price: ${sum}`;

// document.getElementById("cart").append(total_cartPrice);

let total_cartPrice = (document.getElementById(
      "total_cartPriceDiv"
).innerText = `Grand Total :-₹${sum}`);

document.getElementById(
      "cartQ"
).innerText = `${checkout_cart.length} Items in your Bag`;
