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
const messageStock = document.querySelector(".messageStock")
const checkoutButton = document.querySelector(".checkoutButton")


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


  
search.addEventListener("click",function(){
    shoeFunction.setTheShoe(shoes,selectColor.value,selectBrand.value,parseInt(selectSize.value))
  
    if (JSON.stringify(shoeFunction.getShoe()) === JSON.stringify({})) {
        messageElem.classList.add("warning")
        messageElem.innerHTML = `We have no size ${selectSize.value} ${selectColor.value} ${selectBrand.value} left in storage`
        setTimeout(function () {
            messageElem.classList.remove("warning")
            messageElem.innerHTML = '';
          }, 3500);
    }else{
    
    photo.src = shoeFunction.getShoe().photo
    money.innerHTML = shoeFunction.getShoe().price

    messageElem.innerHTML = `We have  ${shoeFunction.getShoe().stock} ${shoeFunction.getShoe().color} ${shoeFunction.getShoe().brand} shoes left in storage`
    nameOfShoe.innerHTML  = shoeFunction.getShoe().name
    buyEmote.style.fontSize = "13px";
    boughtEmote.style.fontSize = "0px";
    buyButton.style.backgroundColor = ""
}
  
       
})
Handlebars.registerHelper('jsonStringify', function(context) {
    return JSON.stringify(context);
  });

  otherArray = JSON.parse(localStorage.getItem("allTheShoes")) || [];
const mylist = localStorage.getItem("allTheShoes");
const allTheShoesArray = JSON.parse(mylist) || [];

const data = { list: allTheShoesArray };
var templateSource = document.querySelector(".userTemplate").innerHTML;
var template = Handlebars.compile(templateSource);
const theItems = template(data);

const itemContainer = document.getElementById("busket");
if (itemContainer) {
  itemContainer.innerHTML = theItems;
}


addCart.addEventListener("click",function(){
   
    if(JSON.stringify(shoeFunction.getShoe()) === JSON.stringify({})){
        messageElem.classList.add("warning")
        messageElem.innerHTML = `please enter color size and brand`
        setTimeout(function () {
            messageElem.classList.remove("warning")
            messageElem.innerHTML = '';
          }, 3500);
    }
    
    const data = { list: shoeFunction.getAllShoe() };
    localStorage.setItem(
        "allTheShoes",
        JSON.stringify(otherArray)
      );
   
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var template = Handlebars.compile(templateSource);
    const theItems = template(data);
    const itemContainer = document.getElementById("busket");
    itemContainer.innerHTML = theItems;
    totalElem.innerHTML = shoeFunction.getTotalCost()
    localStorage.setItem(
        "totalone",
        parseFloat(totalElem.innerHTML).toFixed(2)
      );
    
    if(shoeFunction.getAllShoe().length!=0){
        totalCart.innerHTML = 0|| shoeFunction.getAllShoe().length
        buyEmote.style.fontSize = "0px";
        boughtEmote.style.fontSize = "15px";
        buyButton.style.backgroundColor = "blueviolet"
    }

})
var container = document.getElementById('busket');

  
 

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('bi-trash3-fill')) {
    var cartItemNumberElement = event.target.parentElement.querySelector('.cartItemNumber');
    var cartShoeElement = event.target.closest('.cartShoe');
    var object = JSON.parse(cartShoeElement.getAttribute('data-object'));
    var objectToRemove = object;

    shoeFunction.deleteShoes(objectToRemove)
    if(parseFloat(totalCart.innerHTML)>1){
        totalCart.innerHTML=parseFloat(totalCart.innerHTML)-1
    }else{
        totalCart.innerHTML = "";
    }

    let currentTotal = parseFloat(totalElem.innerHTML)
    var cartItem = event.target.closest('.cartShoe');
    totalElem.innerHTML = (currentTotal-parseFloat(cartItemNumberElement.innerHTML)*parseFloat(cartItemNumberElement.getAttribute('data-price'))).toFixed(2)

    cartItem.remove();
  }

  if (event.target.classList.contains('minus')) {

    var cartItemNumberElement = event.target.parentElement.querySelector('.cartItemNumber');
    var currentNumber = parseInt(cartItemNumberElement.textContent);

    if (currentNumber > 1) {
       
      cartItemNumberElement.textContent = (currentNumber - 1).toString();  
      let currentTotal = parseFloat(totalElem.innerHTML)
      totalElem.innerHTML = currentTotal-parseFloat(cartItemNumberElement.getAttribute('data-price'))
      
    }else{
        let currentTotal = parseFloat(totalElem.innerHTML)
        totalElem.innerHTML = (currentTotal-parseFloat(cartItemNumberElement.getAttribute('data-price'))).toFixed(2)
        var cartItem = event.target.closest('.cartShoe');
        cartItem.remove();
        var cartShoeElement = event.target.closest('.cartShoe');
        var object = JSON.parse(cartShoeElement.getAttribute('data-object'));
        var objectToRemove = object;
        if(parseFloat(totalCart.innerHTML)>1){
            totalCart.innerHTML=parseFloat(totalCart.innerHTML)-1
        }else{
            totalCart.innerHTML = "";
        }
        shoeFunction.deleteShoes(objectToRemove)
    }
    
  }
  if (event.target.classList.contains('plus')) {
    
    var cartItemNumberElement = event.target.parentElement.querySelector('.cartItemNumber');
    let currentTotal = parseFloat(totalElem.innerHTML)
    var currentNumber = parseInt(cartItemNumberElement.textContent);

    var cartShoeElement = event.target.closest('.cartShoe');
    var object = JSON.parse(cartShoeElement.getAttribute('data-object'));
    var objectToRemove = object;
    if(currentNumber < objectToRemove.stock){
        totalElem.innerHTML = parseFloat(cartItemNumberElement.getAttribute('data-price'))+currentTotal 
        cartItemNumberElement.textContent = (currentNumber + 1).toString();
    }else{
        messageStock.innerHTML=`We have only ${objectToRemove.stock} ${objectToRemove.color} "${objectToRemove.name}" left in storage`
        setTimeout(function () {
            messageStock.innerHTML = '';
          }, 3500);
    }
    
  }
  return otherArray;
});
let initial = 0;
  totalElem.innerHTML = localStorage.getItem("totalone")||initial.toFixed(2)
   

  checkoutButton.addEventListener("click",function(){
    
    itemContainer.innerHTML = "";
    localStorage.clear()
    totalElem.innerHTML = initial.toFixed(2)
    totalCart.innerHTML ="";
     allShoes = [];
     otherArray = [];
  })
});
























