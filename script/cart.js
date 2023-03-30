let CartData= JSON.parse(localStorage.getItem("CartData"))

let productContainer= document.getElementById("productContainer")
 
let paymentContainer= document.getElementById("paymentContainer")
let form= document.getElementById("FormData")
let clientData= JSON.parse(localStorage.getItem("clientdata"))||[]
let Total= document.createElement("h2");
let CartTotal= document.getElementById("Totalbill")
let GST= document.getElementById("GST")
GST.innerText= `₹${132.33}`
let gst=132.33;
let ShippingCharges= document.getElementById("Shippingcharges")

ShippingCharges.innerText= `₹${0}`
let TotalAmount= document.getElementById("Totalamount")
 let OrderBtn= document.getElementById("PlaceOrder")
// function CartValue(CartData){
//   let sum=0;
//   CartData.forEach(function(el){
//   sum+= el.

//   })

Display(CartData)

function Display(data){
  productContainer.innerHTML="";

  sum(data)
// console.log(data)
    data.forEach(function (el,index){
const child=document.createElement("div")
child.setAttribute("id","child")
let box1= document.createElement("div")
box1.setAttribute("id","box1")
let box2= document.createElement("div")
box2.setAttribute("id","box2")

  const img= document.createElement("img")
  const type= document.createElement("p")
  const price= document.createElement("h3")

  const selectSize=  document.createElement("select")
  selectSize.setAttribute("id","size")

  const option= document.createElement("option")
  option.setAttribute("value",selectSize.value)
  option.innerText= "Size:"+ el.size;

  const option1= document.createElement("option")
option1.setAttribute("value","M")
option1.innerText="Size: M";

const option2= document.createElement("option")
option2.setAttribute("value","S")
option2.innerText="Size: S";

const option3= document.createElement("option")
option3.setAttribute("value","L")
option3.innerText="Size: L";

const option4= document.createElement("option")
option4.setAttribute("value","XL")
option4.innerText="Size: XL";

selectSize.append(option,option1,option2,option3,option4)

  const selectQty= document.createElement("select")
  selectQty.setAttribute("id","quantity")

  const opt1= document.createElement("option")
  opt1.setAttribute("value",el.quantity)
  opt1.innerText=el.quantity;

const opt2= document.createElement("option")
opt2.setAttribute("value","1")
opt2.innerText="1";

const opt3= document.createElement("option")
opt3.setAttribute("value","2")
opt3.innerText="2";

const opt4= document.createElement("option")
opt4.setAttribute("value","3")
opt4.innerText="3";

const opt5= document.createElement("option")
opt5.setAttribute("value","4")
opt5.innerText="4";

const opt6= document.createElement("option")
opt6.setAttribute("value","5")
opt6.innerText="5";

selectQty.append(opt1,opt2,opt3,opt4,opt5,opt6)

const apply= document.createElement("button")
apply.innerText="Apply"

apply.addEventListener("click",function(){
 
   el.quantity=selectQty.value
   CartData.splice(index,1)
   localStorage.setItem("CartData", JSON.stringify(CartData))
CartData.push({...el,size:selectSize.value});
localStorage.setItem("CartData", JSON.stringify(CartData))
Display(CartData)



})


const remove= document.createElement("button")
remove.innerText="Remove"

remove.addEventListener("click",function(){
    CartData.splice(index,1);
 localStorage.setItem("CartData",JSON.stringify(CartData))
 Display(CartData);
})


  img.setAttribute("src",el.img);
  type.innerText=el.type;
  price.innerText=`₹${el.price}`
  box2.append(type,price,selectSize,selectQty,apply,remove)
box1.append(img)
child.append(box1,box2)
productContainer.append(child)
    })


}

function sum(){
  let total=0;

  for(let i=0; i<CartData.length; i++){
    total+= CartData[i].quantity* CartData[i].price;
  }
CartTotal.innerText= `₹${total}`
TotalAmount.innerText= total + gst;
}


OrderBtn.addEventListener("click",function(){

  productContainer.innerHTML=""

})


// form.addEventListener("submit",function(e){
//   e.preventDefault();

//   let user={
//     name:
//   }
// })