import { navbar } from "../navbar/navbar.js";
document.getElementById("container").innerHTML = navbar();


document.getElementById("index").addEventListener("click",gotoindex)
function gotoindex(){
      window.location.href="index.html"
}

let arr = [
      {
            name: "NykaaNatural",
            Price: 559,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/9/a9f4489NYNYKBC001421_2.jpg",
            stk: 559,
            Gender: "Male",
      },
      {
            name: "Loreal",
            Price: 2480,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nybndlp000017_0_1.jpg",
            stk: 2755,
            Gender: "Anyone",
      },
      {
            name: "Head&Shoulder",
            Price: 820,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/a/ea102aeHEADS00000007.jpg",
            stk: 1650,
            Gender: "Anyone",
      },
      {
            name: "Lorel Hair repair",
            Price: 860,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/6/d6eba80nyloprof00001_0.jpg",
            stk: 1650,
            Gender: "Female",
      },
      {
            name: "Lorel casting cream",
            Price: 511,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/0/e06ba4fn_8901526101108_1.jpg",
            stk: 850,
            Gender: "Anyone",
      },
      {
            name: "Parachute Advanced",
            Price: 105,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/efac31b8901088080293_1.jpg",
            stk: 250,
            Gender: "Anyone",
      },
      {
            name: "Loreal Paris Repair",
            Price: 601,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/e/ee114b28901526004171.jpg",
            stk: 1023,
            Gender: "Anyone",
      },
      {
            name: "Loreal ParisDream",
            Price: 579,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/2/825b55bLOREA00000033_1.jpg",
            stk: 1023,
            Gender: "Male",
      },
      {
            name: "Lotus oninon oil",
            Price: 601,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/c/ec6677f0806360003275_1.jpg",
            stk: 1023,
            Gender: "Female",
      },
      {
            name: "Nykaa oninon oil",
            Price: 501,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/a/5aa0f728904245713973_1.jpg",
            stk: 1000,
            Gender: "Female",
      },
      {
            name: "Herbal oil",
            Price: 455,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/0/106317d8001090222879.jpg",
            stk: 700,
            Gender: "Male",
      },
      {
            name: "Defabolous Hair repair",
            Price: 2219,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/0/609207880011.main.jpg",
            stk: 2700,
            Gender: "Anyone",
      },
      {
            name: "Streak hair serum ",
            Price: 104,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/6/36507eb8901247577039.jpg",
            stk: 130,
            Gender: "Female",
      },
      {
            name: "wow slin care",
            Price: 157,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904311902843.jpg",
            stk: 270,
            Gender: "Female",
      },
      {
            name: "Paris Length",
            Price: 219,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/d/ed9d430lorea00000036_new_update__1_.jpg",
            stk: 700,
            Gender: "Female",
      },
      {
            name: "Dove conditioner",
            Price: 124,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/b/9b1ecaa11374_h-8901030707834.jpg",
            stk: 200,
            Gender: "Female",
      },
      {
            name: "Head & Shoulder Shampoo",
            Price: 330,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/2/a2715ce4902430908047.jpg",
            stk: 400,
            Gender: "Female",
      },
      {
            name: "Wow skin",
            Price: 230,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904311902843.jpg",
            stk: 400,
            Gender: "Female",
      },

      {
            name: "Neem Face Wash",
            Price: 283,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/a/eaea13d8901138844172_1.jpg",
            stk: 300,
            Gender: "Female",
      },
      {
            name: "Dove Hair Fall",
            Price: 530,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/1/916034311421_H_8901030861338.jpg",
            stk: 600,
            Gender: "Female",
      },

      {
            name: "Himalaya Soaf",
            Price: 30,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8901138511593_2.jpg",
            stk: 35,
            Gender: "Female",
      },
      {
            name: "Dove Hair Fall",
            Price: 1130,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nykhmlcom0095.jpg",
            stk: 1200,
            Gender: "Male",
      },

      {
            name: "Himalaya Soaf oily",
            Price: 44,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8901138513061_new.jpg",
            stk: 55,
            Gender: "Male",
      },
      {
            name: "Parachute Mens Advanced",
            Price: 70,
            img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8901088108973.jpg",
            stk: 120,
            Gender: "Male",
      },
];

let arrdata = localStorage.setItem("data", JSON.stringify(arr));
let arr1 = JSON.parse(localStorage.getItem("data")) || [];
displayData(arr1);
console.log(arr1);
let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
function displayData(arr1) {
      let box = document.getElementById("rigthsidebar");
      box.innerHTML = null;
      arr1.forEach(function (ele) {
            let div2 = document.createElement("div");

            let div1 = document.createElement("div");
            let title = document.createElement("h2");
            title.innerHTML = ele.name;
            title.className = "titleclass";
            let poster = document.createElement("img");
            poster.src = ele.img;
            let btn = document.createElement("button");
            btn.innerHTML = "Add to Bag";
            btn.className = "buttonclass";
            btn.addEventListener("click", function () {
                  bagfun(ele);
            });
            div1.append(btn);

            div2.className = "div2class";
            let stkprice = document.createElement("h4");
            stkprice.innerHTML = `MRP: ${ele.stk}`;
            stkprice.className = "stkfeat";
            let price = document.createElement("h2");
            price.innerHTML = ele.Price;
            div2.append(poster, title, stkprice, price, div1);
            //let box=document.getElementById("rigthsidebar")
            box.append(div2);
      });
}
function bagfun(ele) {
      cartarr.push(ele);
      localStorage.setItem("cart", JSON.stringify(cartarr));

      console.log(ele);
}

// ------------------------------------------------------------------------------------------------------------
document.getElementById("sortNames").addEventListener("change", handname);
function handname() {
      let sortname = document.getElementById("sortNames").value;
      if (sortname == "ascending") {
            arr1.sort(function (a, b) {
                  if (a.name > b.name) return 1;
                  if (b.name > a.name) return -1;

                  return 0;
            });
            displayData(arr1);
      }

      if (sortname == "descending") {
            arr1.sort(function (a, b) {
                  if (a.name > b.name) return -1;
                  if (b.name > a.name) return 1;

                  return 0;
            });
            displayData(arr1);
      }

      if (sortname == "") {
            window.location.reload();
      }
}

document.getElementById("sortpri").addEventListener("change", handlepriceSort);
function handlepriceSort() {
      let selected = document.getElementById("sortpri").value;
      console.log(selected);
      if (selected == "htl") {
            arr1.sort(function (a, b) {
                  return b.Price - a.Price;
            });
            displayData(arr1);
            console.log(arr1);
      }
      if (selected == "") {
            window.location.reload();
      }

      if (selected == "lth") {
            arr1.sort(function (a, b) {
                  return a.Price - b.Price;
            });
            displayData(arr1);
            console.log(arr1);
      }
}
document.getElementById("filtergen").addEventListener("change", handgen);

function handgen() {
      var selected = document.querySelector("#filtergen").value;
      // filter will return array whenever it satifies the given condn

      var filteredList = arr1.filter(function (elem) {
            return elem.Gender == selected;
      });

      console.log(filteredList);
      displayData(filteredList);
}

//   document.querySelector("#index").addEventListener("click",funlate);

// function funlate(){
//   window.location.href ="index.html";
// }

// document.getElementById("cart").addEventListener("click", myfun7);
// function myfun7() {
//       document.getElementById("cartData").style.display = "block";
// }
