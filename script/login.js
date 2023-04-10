let loginBtn= document.getElementById("loginBtn")
let registerBtn= document.getElementById("registerBtn")
let userBtn=document.getElementById("userBtn")
let adminBtn=document.getElementById("adminBtn")
let backToType1= document.getElementById("backToType1")
let backToType2= document.getElementById("backToType2")
//catching all coontainers--------------
let type= document.getElementById("type");
let loginSection= document.getElementById("loginSection")
let loginSectionAdmin=document.getElementById("loginSectionAdmin")

// ------------------------------------
let LoginForm= document.getElementById("LoginForm")
let RegForm = document.getElementById("RegForm")
let AdminForm =document.getElementById("LoginFormAdmin")


let show= document.getElementById("show")
let showAnchor=document.getElementById("showAnchor")
let regDetails= JSON.parse(localStorage.getItem("regDetails"))||[]

// LS for admin----------------
let adminData= JSON.parse(localStorage.getItem("adminData"))||[];
// -----------------------------------------

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

adminBtn.addEventListener("click",function(){
   
    type.style.display="none"
    loginSection.style.display="none"
    loginSectionAdmin.style.display="block"

    let Data=
    {
         adminUsername: "Sharma",
         adminPass: "Sharma123",

    }
    adminData.push(Data);
    localStorage.setItem("adminData",JSON.stringify(adminData))
})
userBtn.addEventListener("click",function(){
   
    type.style.display="none"
    loginSection.style.display="block"
   
})

backToType1.addEventListener("click",function(){
    loginSection.style.display="none"
    // loginSectionAdmin.style.display="none"
    type.style.display="block"
  
})
backToType2.addEventListener("click",function(){
    // loginSection.style.display="none"
    loginSectionAdmin.style.display="none"
    type.style.display="block"
  
})


// user login--------------------


LoginForm.addEventListener("submit",function(e){
e.preventDefault();
let flag=false;
 for(let i=0; i<regDetails.length; i++){
    if(`${LoginForm.Username.value}` ===regDetails[i].username && LoginForm.Password.value ===regDetails[i].pass){
        flag=true;
    }
 }
if(flag){
    alert("SignIn Successful")
    window.location.href="men.html";
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
        username: `${RegForm.username.value}`,
        pass: RegForm.pass.value,
        email: RegForm.email.value,
    }

    regDetails.push(registrationData);
    localStorage.setItem("regDetails",JSON.stringify(regDetails))
    alert("Registration Successful")
    window.location.href="men.html"
})

// ----------------------------------------------

// Admin login----------------------------------


AdminForm.addEventListener("submit",function(e){
    e.preventDefault();
    let flag=false;
     for(let i=0; i<adminData.length; i++){
        if(`${AdminForm.AdminUsername.value}` ===adminData[i].adminUsername && AdminForm.AdminPassword.value ===adminData[i].adminPass){
            flag=true;
        }
     }
    if(flag){
        alert("Welcome Admin")
        window.location.href="admin.html";
    }
    else{
        alert("Wrong credentials")
    }
    })