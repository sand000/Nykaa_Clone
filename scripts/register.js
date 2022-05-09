
let array = JSON.parse(localStorage.getItem("data")) || [];

function registerBut() {
   let obj = {
       name: document.getElementById("name").value,
       mobl: document.getElementById("mobl").valuel,
       mail: document.getElementById("mail").value,
       pass: document.getElementById("pass").value
   }


array.push(obj);

localStorage.setItem("data",JSON.stringify(array));

if(obj.name === "" || obj.mobl === "" || obj.mail === "" || obj.pass === ""){
    alert("All the feilds are required");
}
else{
    window.location.href="log_register.html";
 }



//  array.map( function(e) {
   
//     if(e.mail === obj.mail && e.pass === obj.pass) {
//           console.log("hii") 
//           window.location.href="login.html";  
                
//         }
//         else{
           
//           window.location.href="log_register.html";
//         }
// });


}