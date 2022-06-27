document.querySelector("form").addEventListener("submit",myfunction)

let arr=JSON.parse(localStorage.getItem("signupdata"))
function myfunction(){
event.preventDefault();
let obj={
name:myform.name.value,
contact:myform.contact.value,
email:myform.email.value,
password:myform.password.value,

}
if(obj.email==""||obj.name==""||obj.contact==""||obj.password==""){
    alert("plz create account");
}
else{
    window.location.href="login.html";
}
localStorage.setItem("signupdata",JSON.stringify(obj));

}