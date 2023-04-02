let productContainer= document.getElementById("products");
let CartData= JSON.parse(localStorage.getItem("CartData"))||[]
let womenproducts= JSON.parse(localStorage.getItem("womenproducts"))||[]
let LogOut= document.getElementById("LogOut")
let LoginId=document.getElementById("LoginId")
let regDetails= JSON.parse(localStorage.getItem("regDetails"));

LoginId.innerText=regDetails[0].username;

LogOut.addEventListener("click",function(){
    alert("Loging Out")
    window.location.href="index.html"
 })


let data=[
    {
        id: 1,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1665851381_3175569.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Dolman Sleeve T-Shirts",
        price: 599,
        
    },
    {
        id: 2,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679120218_7033529.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 999,
    },
    {
        id: 3,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1674200629_4794689.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Full sleeve T-Shirts",
        price: 2000,
    },
    {
        id: 4,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680066962_2903396.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 499,
    },
    {
        id: 5,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1646982186_8190556.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Dolman Sleeve T-Shirts",
        price: 800,
    },
    {
        id: 6,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679376272_3332954.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 880,
    },
    {
        id: 7,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680066767_1707344.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 550,
    },
    {
        id: 8,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677221690_1906999.png?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 9,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1655281103_6098211.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Dolman Sleeve T-Shirts",
        price: 800,
    },
    {
        id: 10,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679120218_7033529.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 880,
    },
    {
        id: 11,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1661764299_1885632.jpg?format=webp&w=300&dpr=1.3",
        type: "Women-T-Shirts",
        price: 599,
    },
    {
        id: 12,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679745664_7205414.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 499,
    },
    {
        id: 13,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1671291146_2345067.jpg?format=webp&w=300&dpr=1.3",
        type: "Women T-Shirts",
        price: 1050,
    },
    {
        id: 14,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1671536142_4537265.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 880,
    },
    {
        id: 15,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654932551_9387598.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Full sleeve T-Shirts",
        price: 800,
    },
    {
        id: 16,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1674191581_2225555.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 880,
    },
    {
        id: 17,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1672923483_9936454.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 18,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1665227377_7261438.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Dolman Sleeve T-Shirts",
        price: 700,
    },
    {
        id: 19,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680073730_2097719.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 599,
    },
    {
        id: 20,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679745664_7205414.jpg?format=webp&w=300&dpr=1.3",
        type: " Women Oversized-T-Shirts",
        price: 699,
    },
    {
        id: 21,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1637142032_9811097.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Full sleeve T-Shirts",
        price: 700,
    },
    {
        id: 22,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1659807193_9338549.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Dolman Sleeve T-Shirts",
        price: 500,
    },
    {
        id: 23,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1644391685_1740318.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Full sleeve T-Shirts",
        price: 900,
    },
    {
        id: 24,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679376272_3332954.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 25,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680066767_1707344.jpg?format=webp&w=300&dpr=1.3",
        type: " Women Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 26,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670480535_2843277.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 699,
    },
    {
        id: 27,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1643266307_9624796.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Full sleeve T-Shirts",
        price: 550,
    },
    {
        id: 28,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1660053372_5773390.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 999,
    },
    {
        id: 29,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670678377_6855467.jpg?format=webp&w=300&dpr=1.3",
        type: " Women Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 30,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667373463_8346216.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Dolman Sleeve T-Shirts",
        price: 700,
    },
    {
        id: 31,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670480535_2843277.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 32,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654932551_9387598.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Full sleeve T-Shirts",
        price: 1200,
    },
    {
        id: 33,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1674200629_4794689.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Full sleeve T-Shirts",
        price: 600,
    },
    {
        id: 34,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1674191581_2225555.jpg?format=webp&w=300&dpr=1.3",
        type: "Women Oversized-T-Shirts",
        price: 1099,
    }
]



womenproducts=data;
localStorage.setItem("womenproducts",JSON.stringify(womenproducts))


Filter.addEventListener("submit",function(e){
    e.preventDefault();
    
    // if(Filter.SelectPrice.value=="Low"){
    //     price=799
    //    }
    //    if(Filter.SelectPrice.value=="Medium"){
    //     price=1499;
    //    }
   
    if(Filter.Selectcategory.value=="" && Filter.SelectPrice.value==""){
        Display(data);
        
    }
    else{  
let Filtered= data.filter(function (el){
       if(Filter.SelectPrice.value=="Low" && Filter.Selectcategory.value=="" ){
        if( el.price<=799){
            return true;
        }
       }
      else if(Filter.SelectPrice.value=="Medium" && Filter.Selectcategory.value=="" ){
        if( el.price>799 && el.price<=1499){
            return true;
        }
       }
       else if(Filter.SelectPrice.value=="High" && Filter.Selectcategory.value=="" ){
        if( el.price>1499){
            return true;
        }
       }

       else if(Filter.SelectPrice.value=="Low" && Filter.Selectcategory.value !=="" ){
        if( el.price<=799 && Filter.Selectcategory.value==el.type){
            return true;
        }
       }
      else if(Filter.SelectPrice.value=="Medium" && Filter.Selectcategory.value !=="" ){
        if( el.price>799 && el.price<=1499 && Filter.Selectcategory.value==el.type){
            return true;
        }
       }
       else if(Filter.SelectPrice.value=="High" && Filter.Selectcategory.value !=="" ){
        if( el.price>1499 && Filter.Selectcategory.value==el.type){
            return true;
        }
       }



      else if(Filter.SelectPrice.value=="" && Filter.Selectcategory.value !=="" ){
        if(Filter.Selectcategory.value==el.type){
            return true;
        }
       }

})    
    Display(Filtered);
}

})
Display(data);
function Display(data){
    productContainer.innerHTML="";

    data.forEach(function (el){
let Div= document.createElement("div");
let img= document.createElement("img");
let para= document.createElement("p");
let price= document.createElement("h3");
let CartBtn= document.createElement("button")
CartBtn.innerText="Add To Cart"

CartBtn.addEventListener("click",function(){
    if(check (el)){
        alert("Product added")
        CartData.push({...el,quantity:1,size:"S",price:el.price})
        localStorage.setItem("CartData",JSON.stringify(CartData))
    }
    else{
        alert("Product already in cart")
    }
})
img.setAttribute("src",el.img);
para.innerText= el.type;
price.innerText= `₹${el.price}`;

Div.append(img,para,price,CartBtn);
productContainer.append(Div);

    })
}
function check(product){
    for (let i=0; i<CartData.length; i++){
        if(CartData[i].id===product.id){
            return false;
        }
    }
    return true;
    
    }