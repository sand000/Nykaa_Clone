
// var  arr1 = JSON.parse(localStorage.getItem("mail"));
var  arr1 = JSON.parse(localStorage.getItem("data"));   
        var  x = (arr1 [arr1.length-1])
        var final = (x.mail);
    
        var  mail = document.getElementById("mail").value = final;
 

function sent() {

        alert("OTP :"+ " " + "123456")
        window.location.href="login.html";     
}
