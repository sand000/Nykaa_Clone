// import {navbar} from "./navbar/navbar.js"
import { navbar } from "../navbar/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { footer } from "../navbar/footer.js";

// let m=document.getElementById("footer")
// m.innerHTML=footer();



document.getElementById("makeupbutton").addEventListener("click", accountabc);
function accountabc() {
      window.location.href = "offer.html";
}

document.getElementById("skincarebutton").addEventListener("click", myfun);
function myfun() {
      window.location.href = "hair.html";
}

let Data = [
      {
            img: "https://images-static.nykaa.com/uploads/b8270a04-0987-4917-8ec5-3d5a93141d43.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestselling Combos",
            sale: "Starting At ₹270",
      },

      {
            img: "https://images-static.nykaa.com/uploads/66a2ed58-36ef-44ca-8ed8-e7aa57ee16a8.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestsellers",
            sale: "",
      },

      {
            img: "https://images-static.nykaa.com/uploads/b750a456-438c-4f23-8e31-08294c3264bb.jpg?tr=w-400,cm-pad_resize",
            price: "On Singles | Add 3 To Bag Pay For 2",
            sale: "Add 1 to Cart & Get 10% Off",
      },

      {
            img: "https://images-static.nykaa.com/uploads/94ab236c-b899-460f-882c-9e60d125cd00.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick Worth ₹349",
            sale: "on Orders Over ₹700",
      },

      {
            img: "https://images-static.nykaa.com/uploads/27014577-4f80-4d0a-8d87-62c8b007cda2.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick On ₹799",
            sale: "Free Face Primer On ₹999",
      },

      {
            img: "https://images-static.nykaa.com/uploads/8e4e09ce-ed6c-4ae9-8d46-ad4d24985da7.jpg?tr=w-400,cm-pad_resize",
            price: "Free HighLighter Worth ₹3200 On ₹3500+",
            sale: "Extra 10% Off On ₹5500+",
      },

      {
            img: "https://images-static.nykaa.com/uploads/5b32cc1b-cb1f-43c9-8ea7-df0c9a7123c6.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestselling Combos",
            sale: "Starting At ₹270",
      },

      {
            img: "https://images-static.nykaa.com/uploads/48856c48-e34f-4684-bb57-f2670ebbdcd2.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestsellers",
            sale: "",
      },

      {
            img: "https://images-static.nykaa.com/uploads/2dfdf12f-239b-4264-97db-2a7ef24e8dd1.jpg?tr=w-400,cm-pad_resize",
            price: "On Singles | Add 3 To Bag Pay For 2",
            sale: "Add 1 to Cart & Get 10% Off",
      },

      {
            img: "https://images-static.nykaa.com/uploads/3f4d4264-6e8f-4248-bfbb-7cb319c80823.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick Worth ₹349",
            sale: "on Orders Over ₹700",
      },

      {
            img: "https://images-static.nykaa.com/uploads/bb3d3206-0479-449a-884f-f19bcf4ebcd1.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick On ₹799",
            sale: "Free Face Primer On ₹999",
      },

      {
            img: "https://images-static.nykaa.com/uploads/ae24a23b-e19e-45de-88b8-9b65c5b4bd32.jpg?tr=w-400,cm-pad_resize",
            price: "Free HighLighter Worth ₹3200 On ₹3500+",
            sale: "Extra 10% Off On ₹5500+",
      },
];

let Data1 = [
      {
            img: "https://images-static.nykaa.com/uploads/91b89bb4-d4ef-4cc8-ba1f-2307adc8268f.jpg?tr=w-400,cm-pad_resize",
            price: "On Bodycare & Mists",
            sale: "Flat 30% Off On Eau de Parfums",
      },

      {
            img: "https://images-static.nykaa.com/uploads/f11c4c79-889f-4ead-a306-1af712eb4068.jpg?tr=w-400,cm-pad_resize",
            price: "Buy 2, Get 2 minis free",
            sale: "",
      },

      {
            img: "https://images-static.nykaa.com/uploads/12eff7db-4f52-44e5-9f7e-75968353f634.jpg?tr=w-400,cm-pad_resize",
            price: "On Bath & Body Bestsellers",
            sale: "Flat 30% Off On Combos",
      },

      {
            img: "https://images-static.nykaa.com/uploads/77242919-9e7b-4767-8523-7abb52b1bc52.jpg?tr=w-400,cm-pad_resize",
            price: "3 Free Minis Worth ₹2950 On ₹3000",
            sale: "4 Free Minis Worth ₹4950 On ₹5000",
      },

      {
            img: "https://images-static.nykaa.com/uploads/ceb3747b-36ca-4988-8587-3735378205a5.jpg?tr=w-400,cm-pad_resize",
            price: "Add 3 To Bag Pay For 2",
            sale: "Flat 10% Off On Singles",
      },

      {
            img: "https://images-static.nykaa.com/uploads/9d83182b-adb9-467f-a36e-18d9cddcc724.jpg?tr=w-400,cm-pad_resize",
            price: "Combos At Min 30% Off",
            sale: "Summer Haircare Bestsellers",
      },

      {
            img: "https://images-static.nykaa.com/uploads/91b89bb4-d4ef-4cc8-ba1f-2307adc8268f.jpg?tr=w-400,cm-pad_resize",
            price: "On Bodycare & Mists",
            sale: "Flat 30% Off On Eau de Parfums",
      },

      {
            img: "https://images-static.nykaa.com/uploads/f11c4c79-889f-4ead-a306-1af712eb4068.jpg?tr=w-400,cm-pad_resize",
            price: "Buy 2, Get 2 minis free",
            sale: "",
      },

      {
            img: "https://images-static.nykaa.com/uploads/12eff7db-4f52-44e5-9f7e-75968353f634.jpg?tr=w-400,cm-pad_resize",
            price: "On Bath & Body Bestsellers",
            sale: "Flat 30% Off On Combos",
      },

      {
            img: "https://images-static.nykaa.com/uploads/77242919-9e7b-4767-8523-7abb52b1bc52.jpg?tr=w-400,cm-pad_resize",
            price: "3 Free Minis Worth ₹2950 On ₹3000",
            sale: "4 Free Minis Worth ₹4950 On ₹5000",
      },

      {
            img: "https://images-static.nykaa.com/uploads/ceb3747b-36ca-4988-8587-3735378205a5.jpg?tr=w-400,cm-pad_resize",
            price: "Add 3 To Bag Pay For 2",
            sale: "Flat 10% Off On Singles",
      },

      {
            img: "https://images-static.nykaa.com/uploads/9d83182b-adb9-467f-a36e-18d9cddcc724.jpg?tr=w-400,cm-pad_resize",
            price: "Combos At Min 30% Off",
            sale: "Summer Haircare Bestsellers",
      },
];

let Data2 = [
      {
            img: "https://images-static.nykaa.com/uploads/6254b021-84a5-4c92-839e-70e1716adc0c.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestselling Combos",
            sale: "Starting At ₹270",
      },

      {
            img: "https://images-static.nykaa.com/uploads/3ee4a487-59ac-495f-be37-c247ab94009e.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestsellers",
            sale: "",
      },

      {
            img: "https://images-static.nykaa.com/uploads/faeb1ca5-c499-4f39-84b6-5f0c08be9451.jpg?tr=w-400,cm-pad_resize",
            price: "On Singles | Add 3 To Bag Pay For 2",
            sale: "Add 1 to Cart & Get 10% Off",
      },

      {
            img: "https://images-static.nykaa.com/uploads/448027e5-e02f-4bb4-86dd-18f1afdc85ba.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick Worth ₹349",
            sale: "on Orders Over ₹700",
      },

      {
            img: "https://images-static.nykaa.com/uploads/358a843c-ba01-4493-aef4-e7095c886174.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick On ₹799",
            sale: "Free Face Primer On ₹999",
      },

      {
            img: "https://images-static.nykaa.com/uploads/02aff89d-ccbe-4e3a-a83b-8ba845194f40.jpg?tr=w-400,cm-pad_resize",
            price: "Free HighLighter Worth ₹3200 On ₹3500+",
            sale: "Extra 10% Off On ₹5500+",
      },

      {
            img: "https://images-static.nykaa.com/uploads/a9f3baa5-55e3-4607-b7c3-d00b4eab72ac.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestselling Combos",
            sale: "Starting At ₹270",
      },

      {
            img: "https://images-static.nykaa.com/uploads/08b50116-5c54-4dec-86ca-67bacf84e5fb.jpg?tr=w-400,cm-pad_resize",
            price: "On Bestsellers",
            sale: "",
      },

      {
            img: "https://images-static.nykaa.com/uploads/b8fcdf83-6ba3-4cd5-93b2-188bf7d6999e.jpg?tr=w-400,cm-pad_resize",
            price: "On Singles | Add 3 To Bag Pay For 2",
            sale: "Add 1 to Cart & Get 10% Off",
      },

      {
            img: "https://images-static.nykaa.com/uploads/791da25c-fe2c-4134-9ca4-8ecdb197f77c.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick Worth ₹349",
            sale: "on Orders Over ₹700",
      },

      {
            img: "https://images-static.nykaa.com/uploads/11fb988a-8108-45cd-bf31-5984803de345.jpg?tr=w-400,cm-pad_resize",
            price: "Free Lipstick On ₹799",
            sale: "Free Face Primer On ₹999",
      },

      {
            img: "https://images-static.nykaa.com/uploads/ec877350-e693-4641-9182-64db66f4b0ab.JPG?tr=w-400,cm-pad_resize",
            price: "Free HighLighter Worth ₹3200 On ₹3500+",
            sale: "Extra 10% Off On ₹5500+",
      },
];

Data.map(function (el) {
      let div = document.createElement("div");
      div.setAttribute("class", "box3");

      let image = document.createElement("img");
      image.src = el.img;
      image.setAttribute("class", "image1");

      let price = document.createElement("h5");
      price.innerText = el.price;

      let sale = document.createElement("p");
      sale.innerText = el.sale;

      div.append(image, price, sale);

      document.querySelector("#container1").append(div);
});

Data1.map(function (el) {
      let div = document.createElement("div");
      div.setAttribute("class", "box3");

      let image = document.createElement("img");
      image.src = el.img;
      image.setAttribute("class", "image1");

      let price = document.createElement("h5");
      price.innerText = el.price;

      let sale = document.createElement("p");
      sale.innerText = el.sale;

      div.append(image, price, sale);

      document.querySelector("#container2").append(div);
});

Data2.map(function (el) {
      let div = document.createElement("div");
      div.setAttribute("class", "box3");

      let image = document.createElement("img");
      image.src = el.img;
      image.setAttribute("class", "image1");

      let price = document.createElement("h5");
      price.innerText = el.price;

      let sale = document.createElement("p");
      sale.innerText = el.sale;

      div.append(image, price, sale);

      document.querySelector("#container3").append(div);
});

let m = document.getElementById("footer");
m.innerHTML = footer();

// -----------------

document.querySelector("#salebutton").addEventListener("click", funTanu);

function funTanu() {
      window.location.href = "makeup0.html";
}

document.querySelector("#navsearchPd").addEventListener("keydown", funSearch0);

function funSearch0(el) {
      let inn = document.querySelector("#navsearchPd").value;
      console.log(inn);
      // console.log(inn);
      if (el.key == "Enter") {
            localStorage.setItem("inpu", JSON.stringify(inn));
            window.location.href = "search.html";
      }
}

document.querySelector("#index").addEventListener("click", funlate);

function funlate() {
      window.location.href = "index.html";
}


// document.querySelector("#account12").addEventListener("click",account0)
// function account0() {
//       window.location.href = "signup.html";
//       console.log("bj")
// }