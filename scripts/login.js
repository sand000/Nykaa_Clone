// let arr2 = JSON.parse(localStorage.getItem("mailName"));
let arr2 = JSON.parse(localStorage.getItem("data"));
let x = (arr2[arr2.length-1])
let mail = document.getElementById("mailName").value = x.mail;


function verify() {
    let enterotp = document.getElementById("enterotp").value;
    
    if(enterotp === "123456") {
        alert("Login success")
        window.location.href="index.html";

    }
    else{
        alert("Incorrect OTP");
    }
 
}