let loginBtn= document.getElementById("loginBtn")
let registerBtn= document.getElementById("registerBtn")
let LoginForm= document.getElementById("LoginForm")
let RegForm = document.getElementById("RegForm")
let show= document.getElementById("show")
let showAnchor=document.getElementById("showAnchor")
let regDetails= JSON.parse(localStorage.getItem("regDetails"))||[]





loginBtn.addEventListener("click",function(){
    loginBtn.style.backgroundColor="#117a7a"
    loginBtn.style.color="white"
    registerBtn.style.backgroundColor="white"
    registerBtn.style.color="rgb(72, 72, 72)"
    LoginForm.style.display="block"
    RegForm.style.display="none"
    show.style.display="block"
})

showAnchor.addEventListener("click",function(e){
    e.preventDefault()
    registerBtn.style.backgroundColor="#117a7a"
    registerBtn.style.color="white"
    loginBtn.style.backgroundColor="white"
    loginBtn.style.color="rgb(72, 72, 72)"
    LoginForm.style.display="none"
    RegForm.style.display="block"
    show.style.display="none"  
})

registerBtn.addEventListener("click",function(){
    registerBtn.style.backgroundColor="#117a7a"
    registerBtn.style.color="white"
    loginBtn.style.backgroundColor="white"
    loginBtn.style.color="rgb(72, 72, 72)"
    LoginForm.style.display="none"
    RegForm.style.display="block"
    show.style.display="none"
})


LoginForm.addEventListener("submit",function(e){
e.preventDefault();
let flag=false;
 for(let i=0; i<regDetails.length; i++){
    if(`${LoginForm.Username.value}@user` ===regDetails[i].username && LoginForm.Password.value ===regDetails[i].pass){
        flag=true;
    }
 }
if(flag){
    alert("SignIn Successful")
}
else{
    alert("Wrong credentials")
}
})

RegForm.addEventListener("submit",function(e){
    e.preventDefault();

    let registrationData={
        name:RegForm.firstname.value,
        surname:RegForm.lastname.value,
        username: `${RegForm.username.value}@user`,
        pass: RegForm.pass.value,
        email: RegForm.email.value,
    }

    regDetails.push(registrationData);
    localStorage.setItem("regDetails",JSON.stringify(regDetails))
})