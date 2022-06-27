let getdata=JSON.parse(localStorage.getItem("signupdata"));
document.querySelector("form").addEventListener("submit",signfunction)

function signfunction(){
    event.preventDefault()
    let nam=document.getElementById("name").value;
    let pass=document.getElementById("passw").value;
if(getdata===null){
    alert("plz create account")
}
else if(nam===getdata.name &&pass===getdata.password){
alert("Sign Successfull");
window.location.href="index.html";

}
else{
    alert("invalid Credentials")
}





}