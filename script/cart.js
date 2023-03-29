let CartData= JSON.parse(localStorage.getItem("CartData"))

let productContainer= document.getElementById("productContainer")

Display(CartData)

function Display(data){
  productContainer.innerHTML="";
// child div
// box1
// box2
// productContainer
/* <select name="Size" id="Size" >
<option value="M" >M</option>
 <option value="S">S</option>
  <option value="L">L</option>
   <option value="XL">XL</option>
</select>
<select name="" id="Quantity">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select> */
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

  const option1= document.createElement("option")
option1.setAttribute("value","M")
option1.innerText="SIze: M";

const option2= document.createElement("option")
option2.setAttribute("value","S")
option2.innerText="SIze: S";

const option3= document.createElement("option")
option3.setAttribute("value","L")
option3.innerText="SIze: L";

const option4= document.createElement("option")
option4.setAttribute("value","XL")
option4.innerText="SIze: XL";

selectSize.append(option1,option2,option3,option4)
  const selectQty= document.createElement("select")
  selectQty.setAttribute("id","quantity")

  const opt1= document.createElement("option")
  opt1.setAttribute("value","1")
  opt1.innerText="1";

const opt2= document.createElement("option")
opt2.setAttribute("value","2")
opt2.innerText="2";

const opt3= document.createElement("option")
opt3.setAttribute("value","3")
opt3.innerText="3";

const opt4= document.createElement("option")
opt4.setAttribute("value","4")
opt4.innerText="4";

const opt5= document.createElement("option")
opt5.setAttribute("value","5")
opt5.innerText="5";

selectQty.append(opt1,opt2,opt3,opt4,opt5)
  

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
  box2.append(type,price,selectSize,selectQty,remove)
box1.append(img)
child.append(box1,box2)
productContainer.append(child)
    })


}