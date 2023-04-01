let womenproducts= JSON.parse(localStorage.getItem("womenproducts"))||[]
let menproducts= JSON.parse(localStorage.getItem("menproducts"))||[]
//catching all anchor tags---------
let productHead= document.getElementById("products")
let orderHead= document.getElementById("orders")
let customerHead= document.getElementById("customers")
//------------
// catching all containers from displaycontainer----
let Containerproducts1 = document.getElementById("Containerproducts1")

//

let tbody1= document.getElementById("Menproducts");

//products display category--men or female
let inputMen= document.getElementById("inputMen")
let inputWomen= document.getElementById("inputWomen")
let checkBtn =document.getElementById("checkBtn")
let newProductBtn=document.getElementById("newProductBtn")
//


   

    checkBtn.addEventListener("click",function(){
        if(inputWomen.checked){
            Display(womenproducts)
        }
        else{
            Display(menproducts)
        }
        inputWomen.checked=false;
        inputMen.checked=false;
    })

    newProductBtn.addEventListener("click",function(){
        window.location.href="productPublish.html"
     })

    function Display(data){
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


productHead.addEventListener("click",function(e){
    e.preventDefault()
   
    Containerproducts1.style.display="block"
    Display(menproducts)
})
