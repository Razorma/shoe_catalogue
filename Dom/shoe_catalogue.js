document.addEventListener('DOMContentLoaded', function () {


const addCart = document.querySelector(".cart")
const orderCart = document.querySelector(".items")
const openCartElem = document.querySelector(".openCart")
const closeCart = document.querySelector(".closeCart")
const selectColor = document.querySelector(".selectColor")
const selectBrand = document.querySelector(".selectBrand")
const selectSize = document.querySelector(".selectSize")
const search = document.querySelector(".search")
const photo = document.querySelector(".photos")
const money = document.querySelector(".money")
const amount = document.querySelector(".amount")
const shoeColor = document.querySelector(".shoeColor")
const brandDisplay = document.querySelector(".brandDisplay")
const nameOfShoe = document.querySelector(".name")
const messageElem = document.querySelector(".message")
const buyEmote = document.querySelector(".cartAdd")
const boughtEmote = document.querySelector(".bi-check-circle-fill")
const buyButton = document.querySelector(".buyButton")
const totalElem = document.querySelector(".totalElem")
const totalCart = document.querySelector(".totalCart")

openCartElem.addEventListener("click",function(){
    orderCart.style.right = "0";
})
closeCart.addEventListener("click",function(){
    orderCart.style.right = "-300px";
})


let shoeFunction = shoeCatalogue()

var shoes = [
    {
      name  : "Air Force 1",
      color : 'White',
      brand : "Nike",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 6
    },
    {
        name  : "Air Force 1",
        color : 'White',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 6,
        stock : 12
    },
    {
        name  : "Air Force 1",
        color : 'White',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 7,
        stock : 3
    },
    {
        name  : "Air Force 1",
        color : 'White',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 8,
        stock : 2
    },
    {
        name  : "All Star",
        color : 'black-and-white',
        brand : "All Star",
        photo : "Photos/black  and white converse all star.jpg",
        price : 750,
        size  : 5,
        stock : 14
    },
    {
        name  : "All-Star",
        color : 'black-and-white',
        brand : "All-Star",
        photo : "Photos/black  and white converse all star.jpg",
        price : 750,
        size  : 6,
        stock : 12
    },
    {
        name  : "All Star",
        color : 'black-and-white',
        brand : "All Star",
        photo : "Photos/black  and white converse all star.jpg",
        price : 750,
        size  : 7,
        stock : 6
    },
    {
        name  : "All Star",
        color : 'black and white',
        brand : "All Star",
        photo : "Photos/black  and white converse all star.jpg",
        price : 750,
        size  : 8,
        stock : 5
    },
    {
        name  : "Air Force 1",
        color : 'black',
        brand : "Nike",
        photo : "Photos/black air force 1ns.jpg",
        price : 650,
        size  : 5,
        stock : 4
    },
    {
        name  : "Air Force 1",
        color : 'black',
        brand : "Nike",
        photo : "Photos/black air force 1ns.jpg",
        price : 650,
        size  : 6,
        stock : 2
    },
    {
        name  : "Air Force 1",
        color : 'black',
        brand : "Nike",
        photo : "Photos/black air force 1ns.jpg",
        price : 650,
        size  : 7,
        stock : 7
    },
    {
        name  : "Air Force 1",
        color : 'black',
        brand : "Nike",
        photo : "Photos/black air force 1ns.jpg",
        price : 650,
        size  : 8,
        stock : 9
    },
    {
        name  : "Air Jordan 13",
        color : 'black-and-white',
        brand : "Nike",
        photo : "Photos/black and white air jordans.jpg",
        price : 650,
        size  : 5,
        stock : 9
    },
    {
        name  : "Air Jordan 13",
        color : 'black-and-white',
        brand : "Nike",
        photo : "Photos/black and white air jordans.jpg",
        price : 650,
        size  : 6,
        stock : 3
    },
    {
        name  : "Air Jordan 13",
        color : 'black-and-white',
        brand : "Nike",
        photo : "Photos/black and white air jordans.jpg",
        price : 650,
        size  : 7,
        stock : 9
    },
    {
        name  : "Air Jordan 13",
        color : 'black-and-white',
        brand : "Nike",
        photo : "Photos/black and white air jordans.jpg",
        price : 650,
        size  : 8,
        stock : 5
    },
    
    {
        name  : "Puma Smash",
        color : 'black-and-white',
        brand : "Puma",
        photo : "Photos/black puma.jpg",
        price : 450,
        size  : 5,
        stock : 4
    },
    {
        name  : "Puma Smash",
        color : 'black-and-white',
        brand : "Puma",
        photo : "Photos/black puma.jpg",
        price : 450,
        size  : 6,
        stock : 4
    },
    {
        name  : "Puma Smash",
        color : 'black-and-white',
        brand : "Puma",
        photo : "Photos/black puma.jpg",
        price : 450,
        size  : 7,
        stock : 4
    },
    {
        name  : "Puma Smash",
        color : 'black-and-white',
        brand : "Puma",
        photo : "Photos/black puma.jpg",
        price : 450,
        size  : 8,
        stock : 4
    },
    {
        name  : "Vans",
        color : 'black',
        brand : "Vans",
        photo : "Photos/black vans.jpg",
        price : 750,
        size  : 5,
        stock : 7
    },
    {
        name  : "Vans",
        color : 'black',
        brand : "Vans",
        photo : "Photos/black vans.jpg",
        price : 750,
        size  : 6,
        stock : 6
    },
    {
        name  : "Vans",
        color : 'black',
        brand : "Vans",
        photo : "Photos/black vans.jpg",
        price : 750,
        size  : 7,
        stock : 4
    },
    {
        name  : "Vans",
        color : 'black',
        brand : "Vans",
        photo : "Photos/black vans.jpg",
        price : 750,
        size  : 8,
        stock : 2
    },
    {
        name  : "Air force 1",
        color : 'blue',
        brand : "Nike",
        photo : "Photos/blue air force 1s.jpg",
        price : 950,
        size  : 5,
        stock : 1
    },
    {
        name  : "Air force 1",
        color : 'blue',
        brand : "Nike",
        photo : "Photos/blue air force 1s.jpg",
        price : 950,
        size  : 6,
        stock : 2
    },
    {
        name  : "Air force 1",
        color : 'blue',
        brand : "Nike",
        photo : "Photos/blue air force 1s.jpg",
        price : 950,
        size  : 7,
        stock : 2
    },
    {
        name  : "Air force 1",
        color : 'blue',
        brand : "Nike",
        photo : "Photos/blue air force 1s.jpg",
        price : 950,
        size  : 8,
        stock : 4
    },
    {
        name  : "Air Jordan 1",
        color : 'red',
        brand : "Nike",
        photo : "Photos/red nike air jordans.jpg",
        price : 850,
        size  : 5,
        stock : 3
    },
    {
        name  : "Air Jordan 1",
        color : 'red',
        brand : "Nike",
        photo : "Photos/red nike air jordans.jpg",
        price : 850,
        size  : 6,
        stock : 8
    },
    {
        name  : "Air Jordan 1",
        color : 'red',
        brand : "Nike",
        photo : "Photos/red nike air jordans.jpg",
        price : 850,
        size  : 7,
        stock : 2
    },
    {
        name  : "Air Jordan 1",
        color : 'red',
        brand : "Nike",
        photo : "Photos/red nike air jordans.jpg",
        price : 850,
        size  : 8,
        stock : 5
    },
    {
        name  : "Schotch Vans",
        color : 'black-and-white',
        brand : "Vans",
        photo : "Photos/schotch vans.jpg",
        price : 350,
        size  : 5,
        stock : 4
    },
    {
        name  : "Schotch Vans",
        color : 'black-and-white',
        brand : "Vans",
        photo : "Photos/schotch vans.jpg",
        price : 350,
        size  : 6,
        stock : 1
    },
    {
        name  : "Schotch Vans",
        color : 'black-and-white',
        brand : "Vans",
        photo : "Photos/schotch vans.jpg",
        price : 350,
        size  : 7,
        stock : 6
    },
    {
        name  : "Schotch Vans",
        color : 'black-and-white',
        brand : "Vans",
        photo : "Photos/schotch vans.jpg",
        price : 350,
        size  : 8,
        stock : 5
    },
    {
        name  : "Advantage",
        color : 'White',
        brand : "adidas",
        photo : "Photos/white addidas.jpg",
        price : 650,
        size  : 5,
        stock : 2
    },
    {
        name  : "Advantage",
        color : 'White',
        brand : "adidas",
        photo : "Photos/white addidas.jpg",
        price : 650,
        size  : 6,
        stock : 2
    },
    {
        name  : "Advantage",
        color : 'White',
        brand : "adidas",
        photo : "Photos/white addidas.jpg",
        price : 650,
        size  : 7,
        stock : 2
    },
    {
        name  : "Advantage",
        color : 'White',
        brand : "adidas",
        photo : "Photos/white addidas.jpg",
        price : 650,
        size  : 8,
        stock : 2
    },
    
    {
        name  : "Fila Disruptor",
        color : 'White',
        brand : "Fila",
        photo : "Photos/white fila shoes.jpg",
        price : 950,
        size  : 5,
        stock : 6
    },
    {
        name  : "Fila Disruptor",
        color : 'White',
        brand : "Fila",
        photo : "Photos/white fila shoes.jpg",
        price : 950,
        size  : 6,
        stock : 8
    },
    {
        name  : "Fila Disruptor",
        color : 'White',
        brand : "Fila",
        photo : "Photos/white fila shoes.jpg",
        price : 950,
        size  : 7,
        stock : 7
    },
    {
        name  : "Fila Disruptor",
        color : 'White',
        brand : "Fila",
        photo : "Photos/white fila shoes.jpg",
        price : 950,
        size  : 8,
        stock : 4
    },
    {
        name  : "All star",
        color : 'White',
        brand : "All-Star",
        photo : "Photos/white high top all star.jpg",
        price : 350,
        size  : 5,
        stock : 9
    },
    {
        name  : "All star",
        color : 'White',
        brand : "All-Star",
        photo : "Photos/white high top all star.jpg",
        price : 350,
        size  : 6,
        stock : 4
    },
    {
        name  : "All star",
        color : 'White',
        brand : "All-Star",
        photo : "Photos/white high top all star.jpg",
        price : 350,
        size  : 7,
        stock : 7
    },
    {
        name  : "All star",
        color : 'White',
        brand : "All-Star",
        photo : "Photos/white high top all star.jpg",
        price : 350,
        size  : 8,
        stock : 8
    },
    {
        name  : "white Puma",
        color : 'White',
        brand : "Puma",
        photo : "Photos/white puma.jpg",
        price : 750,
        size  : 5,
        stock : 7
    },
    {
        name  : "white Puma",
        color : 'White',
        brand : "Puma",
        photo : "Photos/white puma.jpg",
        price : 750,
        size  : 6,
        stock : 8
    },
    {
        name  : "white Puma",
        color : 'White',
        brand : "Puma",
        photo : "Photos/white puma.jpg",
        price : 750,
        size  : 7,
        stock : 6
    },
    {
        name  : "white Puma",
        color : 'White',
        brand : "Puma",
        photo : "Photos/white puma.jpg",
        price : 750,
        size  : 8,
        stock : 5
    },
   
    {
        name  : "Air Jordan 1",
        color : 'Yellow',
        brand : "Nike",
        photo : "Photos/Yellow and white air jordans.jpg",
        price : 950,
        size  : 5,
        stock : 2
    },
    {
        name  : "Air Jordan 1",
        color : 'Yellow',
        brand : "Nike",
        photo : "Photos/Yellow and white air jordans.jpg",
        price : 950,
        size  : 6,
        stock : 3
    },
    {
        name  : "Air Jordan 1",
        color : 'Yellow',
        brand : "Nike",
        photo : "Photos/Yellow and white air jordans.jpg",
        price : 950,
        size  : 7,
        stock : 1
    },
    {
        name  : "Air Jordan 1",
        color : 'Yellow',
        brand : "Nike",
        photo : "Photos/Yellow and white air jordans.jpg",
        price : 950,
        size  : 8,
        stock : 9
    },
    {
        name  : "Yellow Vans",
        color : 'Yellow',
        brand : "Vans",
        photo : "Photos/yellow vans.jpg",
        price : 850,
        size  : 5,
        stock : 9
    },
    {
        name  : "Yellow Vans",
        color : 'Yellow',
        brand : "Vans",
        photo : "Photos/yellow vans.jpg",
        price : 850,
        size  : 6,
        stock : 9
    },
    {
        name  : "Yellow Vans",
        color : 'Yellow',
        brand : "Vans",
        photo : "Photos/yellow vans.jpg",
        price : 850,
        size  : 7,
        stock : 9
    },
    {
        name  : "Yellow Vans",
        color : 'Yellow',
        brand : "Vans",
        photo : "Photos/yellow vans.jpg",
        price : 850,
        size  : 8,
        stock : 9
    },

  ];
addCart.addEventListener("click",function(){

       
})

  
search.addEventListener("click",function(){
    shoeFunction.setTheShoe(shoes,selectColor.value,selectBrand.value,parseInt(selectSize.value))
    if (JSON.stringify(shoeFunction.getShoe()) === JSON.stringify({})) {
        messageElem.classList.add("info")
        messageElem.innerHTML = `we have no size ${selectSize.value} ${selectColor.value} ${selectBrand.value} left in storage`
        setTimeout(function () {
            messageElem.classList.remove("info")
            messageElem.innerHTML = '';
          }, 3500);
    }else{
    
    photo.src = shoeFunction.getShoe().photo
    // console.log(photo.src)
    money.innerHTML = shoeFunction.getShoe().price

    messageElem.innerHTML = `we have  ${shoeFunction.getShoe().stock} ${shoeFunction.getShoe().color} ${shoeFunction.getShoe().brand} shoes left in storage`
    // amount.innerHTML = shoeFunction.getShoe().stock
    // shoeColor.innerHTML = shoeFunction.getShoe().color
    // brandDisplay.innerHTML = shoeFunction.getShoe().brand
    nameOfShoe.innerHTML  = shoeFunction.getShoe().name
    // console.log(shoeFunction.getShoe())
    // console.log(selectColor.value)
    // console.log(selectBrand.value)
    // console.log(parseInt(selectSize.value))
    buyEmote.style.fontSize = "13px";
    boughtEmote.style.fontSize = "0px";
    buyButton.style.backgroundColor = ""
}
  
       
})
// function createCart(list){

    
// }
addCart.addEventListener("click",function(){
    // shoeFunction.setTheShoe(shoes,selectColor.value,selectBrand.value,parseInt(selectSize.value))

    const data = { list: shoeFunction.getAllShoe() };

    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var template = Handlebars.compile(templateSource);
    const theItems = template(data);
    const itemContainer = document.getElementById("busket");
    itemContainer.innerHTML = theItems;
    // let cost = 0
    // shoeFunction.getAllShoe().forEach(function(shoe) {
    //     //cost.push(shoe.price);shoe.price
    //     cost+=shoe.price
    //     console.log(cost)
    //   });
    // console.log(shoeFunction.getAllShoe()[0].color)
    totalElem.innerHTML = shoeFunction.getTotalCost()
    
    totalCart.innerHTML = 0|| shoeFunction.getAllShoe().length
    if(shoeFunction.getAllShoe().length!=0){
        buyEmote.style.fontSize = "0px";
        boughtEmote.style.fontSize = "15px";
        buyButton.style.backgroundColor = "blueviolet"
    }

})

// if(shoeFunction.getCartMessage() != ""){
    //     messageElem.innerHTML = shoeFunction.getCartMessage()
    //     messageElem.classList.add("warning")
    //     setTimeout(function () {
    //         messageElem.classList.remove("warning")
    //         messageElem.innerHTML = '';
    //       }, 3500);
    // }

   
});
























// {
    //     name  : "Running shoes",
    //     color : 'black and white',
    //     brand : "Nike",
    //     photo : "Photos/black and white running shoes.jpg",
    //     price : 600,
    //     size  : 5,
    //     stock : 4
    // },
    // {
    //     name  : "Running shoes",
    //     color : 'black and white',
    //     brand : "Nike",
    //     photo : "Photos/black and white running shoes.jpg",
    //     price : 600,
    //     size  : 6,
    //     stock : 3
    // },
    // {
    //     name  : "Running shoes",
    //     color : 'black and white',
    //     brand : "Nike",
    //     photo : "Photos/black and white running shoes.jpg",
    //     price : 600,
    //     size  : 7,
    //     stock : 8
    // },
    // {
    //     name  : "Running shoes",
    //     color : 'black and white',
    //     brand : "Nike",
    //     photo : "Photos/black and white running shoes.jpg",
    //     price : 600,
    //     size  : 8,
    //     stock : 4
    // },
// {
    //     name  : "Air max 95",
    //     color : 'White',
    //     brand : "Nike",
    //     photo : "Photos/white airmax.jpg",
    //     price : 950,
    //     size  : 5,
    //     stock : 7
    // },
    // {
    //     name  : "Air max 95",
    //     color : 'White',
    //     brand : "Nike",
    //     photo : "Photos/white airmax.jpg",
    //     price : 950,
    //     size  : 6,
    //     stock : 5
    // },
    // {
    //     name  : "Air max 95",
    //     color : 'White',
    //     brand : "Nike",
    //     photo : "Photos/white airmax.jpg",
    //     price : 950,
    //     size  : 7,
    //     stock : 14
    // },
    // {
    //     name  : "Air max 95",
    //     color : 'White',
    //     brand : "Nike",
    //     photo : "Photos/white airmax.jpg",
    //     price : 950,
    //     size  : 8,
    //     stock : 4
    // },