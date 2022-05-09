
// let arr = JSON.parse(localStorage.getItem("mail")) || [];
let arr = JSON.parse(localStorage.getItem("data")) || [];
let x = arr[arr.length-1];

let  mailID = document.getElementById("mailormobl").value = x.mail;

function proceed() {

    window.location.href="mailsent.html";

}
