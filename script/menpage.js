let productContainer= document.getElementById("products");
let CartData= JSON.parse(localStorage.getItem("CartData"))||[]
let Filter= document.getElementById("Filter")
let data=[
    {
        id: 1,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677596479_4108551.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 699,
        
    },
    {
        id: 2,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1671109788_5621836.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 999,
    },
    {
        id: 3,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1666431708_4779814.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1500,
    },
    {
        id: 4,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678882374_5588567.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 899,
    },
    {
        id: 5,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1674455643_2017557.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 699,
    },
    {
        id: 6,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678355685_7807227.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Polos",
        price: 780,
    },
    {
        id: 7,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1644995209_6783717.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 1099,
    },
    {
        id: 8,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677596330_7732611.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 709,
    },
    {
        id: 9,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1656667944_1746013.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 1159,
    },
    {
        id: 10,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1669701450_9813281.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Polos",
        price: 880,
    },
    {
        id: 11,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677592990_8308818.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 699,
    },
    {
        id: 12,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667461862_7711050.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 13,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668847309_1974426.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1800,
    },
    {
        id: 14,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1669700437_4238439.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Polos",
        price: 880,
    },
    {
        id: 15,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1675180440_5865792.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1590,
    },
    {
        id: 16,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677590185_4507875.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Polos",
        price: 860,
    },
    {
        id: 17,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667461862_7711050.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 599,
    },
    {
        id: 18,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1666440075_6932603.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1890,
    },
    {
        id: 19,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677595420_1999572.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 20,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677596479_4108551.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 599,
    },
    {
        id: 21,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678883483_8445605.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1600,
    },
    {
        id: 22,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677596479_4108551.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 899,
    },
    {
        id: 23,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1664631272_7818899.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1750,
    },
    {
        id: 24,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677596479_4108551.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 789,
    },
    {
        id: 25,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1671109788_5621836.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 26,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677596479_4108551.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 999,
    },
    {
        id: 27,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670344096_9495688.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1820,
    },
    {
        id: 28,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668834249_7220867.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 1099,
    },
    {
        id: 29,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678882086_6293631.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 1089,
    },
    {
        id: 30,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677596479_4108551.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 799,
    },
    {
        id: 31,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677591273_1746973.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 989,
    },
    {
        id: 32,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670580881_7734364.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 1500,
    },
    {
        id: 33,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1674455752_1178191.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized Full sleeve T-Shirts",
        price: 2200,
    },
    {
        id: 34,
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678882086_6293631.jpg?format=webp&w=300&dpr=1.3",
        type: "Oversized-T-Shirts",
        price: 1699,
    }
]



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
            CartData.push({...el,quantity:1,size:"S"})
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
