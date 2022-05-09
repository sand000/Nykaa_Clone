let addr = JSON.parse(localStorage.getItem("Address")) || [];

console.log(addr);

addr.forEach((e) => {

      // console.log(e)
      let add = document.createElement("address");
      let name = document.createElement("p");
      name.innerText = `Name:-${e.name}`;
      let adress = document.createElement("p");
      adress.innerText = e.address;
      let num = document.createElement("p");
      num.innerText = `+91${e.mob}`;

      add.append(name, adress, num);
      // document.getElementById("address12").append(add);
});
