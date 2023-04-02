let womenproducts= JSON.parse(localStorage.getItem("womenproducts"))
let menproducts= JSON.parse(localStorage.getItem("menproducts"))
let CartData= JSON.parse(localStorage.getItem("CartData"))
let clientData= JSON.parse(localStorage.getItem("clientdata"))
let BillingData= JSON.parse(localStorage.getItem("billDetails"))
let adminData= JSON.parse(localStorage.getItem("adminData"));
//catching all anchor tags---------
let productHead= document.getElementById("products")
let orderHead= document.getElementById("orders")
let customerHead= document.getElementById("customers")
//------------
// catching all containers from displaycontainer----
let Containerproducts1 = document.getElementById("Containerproducts1")
let Sex= document.getElementById("Sex")
let Orders=document.getElementById("Orders")
//

let tbody1= document.getElementById("Menproducts");
let tbody2=document.getElementById("orderDetails")

//products display category--men or female
let inputMen= document.getElementById("inputMen")
let inputWomen= document.getElementById("inputWomen")
let checkBtn =document.getElementById("checkBtn")
let newProductBtn=document.getElementById("newProductBtn")
//
let AdminID=document.getElementById("AdminID")
AdminID.innerText=adminData[0].adminUsername

// showOrders();
ProductDisplay(menproducts)

let LogOut= document.getElementById("LogOut")
LogOut.addEventListener("click",function(){
    alert("Loging Out")
    window.location.href="index.html"
 })

    checkBtn.addEventListener("click",function(){
        if(inputWomen.checked){
            ProductDisplay(womenproducts)
            console.log("Women")
            inputWomen.checked=false;
           
            // Containerproducts1.style.display="block"
        }
        else{
            ProductDisplay(menproducts)
            console.log("men")
            inputMen.checked=false;
        }
       
        
    })

    newProductBtn.addEventListener("click",function(){
        window.location.href="productPublish.html"
     })

    function ProductDisplay(data){
        tbody1.innerHTML="";
    
        data.forEach(function(element){
        
            let tr= document.createElement("tr")
            let td1= document.createElement("td")
            let td2= document.createElement("td")
            let td3= document.createElement("td")
            let td4= document.createElement("td")
    
    
            td1.innerText= `${element.type}_#00${element.id}`;
            td2.innerText= element.type;
            td3.innerText= element.price;
            td4.innerText= `${Math. floor((Math. random() * 455) + 1)} in stock for ${Math. floor((Math. random() * 6) + 1)} variant(s)`;
    
            tr.append(td1,td2,td3,td4);
            tbody1.append(tr);
        })
    }

//event listeners on diff options of admin page----------

productHead.addEventListener("click",function(e){
    e.preventDefault()
    orderHead.style.color="rgb(72, 72, 72)"
    productHead.style.color="purple"
    Orders.style.display="none"
    Sex.style.display="block";
    Containerproducts1.style.display="block"
    ProductDisplay(menproducts)
    
})

orderHead.addEventListener("click",function(e){
    e.preventDefault()
    productHead.style.color="rgb(72, 72, 72)"
    orderHead.style.color="purple"
   Sex.style.display="none";
    Containerproducts1.style.display="none"
    Orders.style.display="block"
    showOrders()
})


//-------------------------------------------------------
// showOrders()

// product option(table)--------------------------
function showOrders(){
    orderDetails.innerHTML="";
    let value;
CartData.forEach(function(el){
    let tr= document.createElement("tr")
   
    let td1= document.createElement("td")
    let td2= document.createElement("td")
    let td3= document.createElement("td")
    let td5= document.createElement("td")
    let td4= document.createElement("td")
    let td6= document.createElement("td")
    let td7= document.createElement("td")
 
    td1.innerText= `${el.type}_#00${el.id}`;
    td2.innerText= `${Math. floor((Math. random() * 18) + 1)}/04/23`;
    td6.innerText= el.quantity;
    td7.innerText= el.price;
    clientData.forEach(function(el){
    
        td3.innerText= `${el.firstName} ${el.lastName}`;
        td5.innerText= `${el.line1}, ${el.line2}, ${el.city}, Postal Code: ${el.code}, ${el.state}, Mb NO: ${el.number}`;
        
    })

    BillingData.forEach(function(el){
console.log(el)
        td4.innerText= el.Transaction;
       
        value=el.TotalBill;
    })

    
     

    tr.append(td1,td2,td3,td4,td5,td6,td7);
    // tr2.append(td7)
    tbody2.append(tr);

})
let tr2=document.createElement("tr")
let td1= document.createElement("td")
let td2= document.createElement("td")
let td3= document.createElement("td")
let td5= document.createElement("td")
let td4= document.createElement("td")
let td6= document.createElement("td")
let td7= document.createElement("td")

td7.innerText=value;
tr2.append(td1,td2,td3,td4,td5,td6,td7);
  tbody2.append(tr2);
}