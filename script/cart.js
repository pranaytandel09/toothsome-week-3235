let CartData= JSON.parse(localStorage.getItem("CartData"))
// let globalData= JSON.parse(localStorage.getItem("globalData"))||[]
let productContainer= document.getElementById("productContainer")
 
let paymentContainer= document.getElementById("paymentContainer")
let form= document.getElementById("FormData")
//Form---> container && form---> actual form//
let Form= document.getElementById("Form")
let clientData= JSON.parse(localStorage.getItem("clientdata"))||[]
let Total= document.createElement("h2");
let CartTotal= document.getElementById("Totalbill")
let GST= document.getElementById("GST")

let gst=0;
function checkGST(){
  if(CartData.length==0){
    gst=0;
  }
  else if(CartData.length>=1 &&CartData.length<=2){
    gst=52.4
  }
  else if(CartData.length>=3){
    gst=132.33
  }
  GST.innerText= `₹${gst}`
}


let ShippingCharges= document.getElementById("Shippingcharges")

ShippingCharges.innerText= `₹${0}`
let TotalAmount= document.getElementById("Totalamount")
 let orderBtn1= document.getElementById("PlaceOrder1")
 let orderBtn2= document.getElementById("PlaceOrder2")
let Displayadd= document.getElementById("Displayadd")
let PaymentGateway= document.getElementById("PaymentGateway")
let PaymentGatewayData= document.getElementById("PaymentGatewayData")

let Transaction= document.getElementsByClassName("transaction")
//billing data info
let BillingData= JSON.parse(localStorage.getItem("billDetails"))||[];

let bill;
//------------//












Display(CartData)

function Display(data){
  productContainer.innerHTML="";
  checkGST()
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

let BtnDiv= document.createElement("div")
BtnDiv.append(apply,remove)
  img.setAttribute("src",el.img);
  type.innerText=el.type;
  price.innerText=`₹${el.price}`
  box2.append(type,price,selectSize,selectQty,BtnDiv)
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
  bill=total;
  billTotal=total+gst;
CartTotal.innerText= `₹${total}`
TotalAmount.innerText= `₹${total + gst}`;
}


form.addEventListener("submit",function(e){
  e.preventDefault();

  let user={
    firstName: form.firstname.value,
    lastName: form.lastname.value,
    line1: form.line1.value,
    line2: form.line2.value,
    line3: form.line3.value,
    code: form.code.value,
    city: form.city.value,
    country: form.country.value,
    state: form.state.value,
    number: form.mbnumber.value,
  }
  clientData.push(user);
  // console.log(clientData)
  localStorage.setItem("clientdata",JSON.stringify(clientData))
  Form.style.display="none"
  PaymentGateway.style.display="block";
  Displayadd.innerText=`Deliver To: ${clientData[0].firstName} ${clientData[0].lastName}, ${clientData[0].code}`
  // productContainer.style.display="block"
  // Display(CartData)
  // paymentContainer.style.display="none"
  orderBtn1.innerText="CONFIRM ORDER"
  orderBtn2.innerText="CONFIRM ORDER"
})

orderBtn1.addEventListener("click",function(){

  let Bill={
         productValue: bill,
          GST: gst,
          ShippingCharges:0,
          TotalBill: billTotal,
  }
  BillingData.push(Bill);
  localStorage.setItem("billDetails",JSON.stringify(BillingData))

  productContainer.style.display="none"
  Form.style.display="block"
})
orderBtn2.addEventListener("click",function(){

  let Bill={
    productValue: bill,
     GST: gst,
     ShippingCharges:0,
     TotalBill: billTotal,
}
BillingData.push(Bill);
localStorage.setItem("billDetails",JSON.stringify(BillingData))

  productContainer.style.display="none"
  Form.style.display="block"
})

PaymentGatewayData.addEventListener("submit",function(e){
  e.preventDefault();


  orderBtn1.innerText="ORDER CONFIRM!"
  orderBtn2.innerText="ORDER CONFIRM!"


  if(UPI.checked){
  console.log(UPI.value)
// globalData=[...CartData, {...BillingData,Transaction:PaymentGatewayData.UPI.value}, ...clientData];
//   localStorage.setItem("globalData",JSON.stringify(globalData))

BillingData.forEach(function(el,index){
  BillingData.push({...el,Transaction:"UPI"})
  BillingData.splice(index,1);
  localStorage.setItem("billDetails",JSON.stringify(BillingData))
})

  
  }
  else{
   
    // globalData=[...CartData, {...BillingData,Transaction:PaymentGatewayData.COD.value}, ...clientData];
    // localStorage.setItem("globalData",JSON.stringify(globalData))
    BillingData.forEach(function(el,index){
      BillingData.push({...el,Transaction:"COD"})
      BillingData.splice(index,1);
      localStorage.setItem("billDetails",JSON.stringify(BillingData))
    })

  }
// localStorage.removeItem("billDetails");
// localStorage.removeItem("clientdata");
// localStorage.removeItem("CartData");


  PaymentGateway.style.display="none";
  productContainer.style.display="grid"
  Display(CartData)
})