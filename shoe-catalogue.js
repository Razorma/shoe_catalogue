
let allShoes = [];
var otherArray = [];
var searchArray = [];
let arrayofObjects =[]

function shoeCatalogue() {
  let theShoe = {};
  let stockMessage = ''
  let addshoeMessage = ''


  function setTheShoe(shoes, color, brand, size) {
    allShoes = []
    theShoe = {};
    searchArray = []
    for (let i = 0; i < shoes.length; i++) {
      if (shoes[i].color === color && shoes[i].brand === brand && shoes[i].size === size) {
        searchArray.push(shoes[i])
        theShoe = shoes[i]
        shoes[i].stock = theShoe.stock
      } else {
        stockMessage = `we have no ${shoes[i].color} ${shoes[i].brand} that are size ${shoes[i].size} left in storage`
      }
    }
  }
  function setsTheShoe(addToCart) {
    allShoes.push(addToCart)
  }
  function allSearchedShoes() {
    return searchArray
  }

  function addTheShoe(arrayofObjects, nameshoe, color, brand, photo, price, size,stock) {//, stock
    if (nameshoe === "" || color === "" || brand === "" || photo === "" || price === "" || size === "" || stock === "") {
      addshoeMessage = "please enter all the inputs"
    } else {
      let newShoe = {
        name: nameshoe,
        color: (color.toLowerCase()),
        brand: brand,
        photo: photo,
        price: parseFloat(price),
        size: parseFloat(size),
        stock : parseFloat(stock),
        qty: 0,
        ogPrice: parseFloat(price),
        ogStock: parseFloat(stock)
      };

      arrayofObjects.push(newShoe);
    }
  }
  function getaddshoemessage() {
    return addshoeMessage
  }
  function setShoeStock() {
    theShoe.stock--
  }


  function getShoe() {
    return theShoe
  }
  function getAllShoes() {

    searchArray.forEach(function (shoe) {
      var found = otherArray.some(function (otherShoe) {

        return (
          shoe.color === otherShoe.color &&
          shoe.brand === otherShoe.brand &&
          shoe.price === otherShoe.price &&
          shoe.size === otherShoe.size //&&
          // shoe.stock === otherShoe.stock
        );
      });

      if (!found) {
        otherArray.push(shoe);
      }
    });
    return otherArray;

  }
  function getAllShoe() {

    allShoes.forEach(function (shoe) {
      var found = otherArray.some(function (otherShoe) {

        return (
          shoe.color === otherShoe.color &&
          shoe.brand === otherShoe.brand &&
          shoe.price === otherShoe.price &&
          shoe.size === otherShoe.size //&&
          // shoe.stock === otherShoe.stock
        );
      });

      if (!found) {
        otherArray.push(shoe);
      }
    });
    return otherArray;

  }

  function deleteShoes(objectToRemove) {
    var index = allShoes.findIndex(function (shoe) {
      return (
        shoe.name === objectToRemove.name &&
        shoe.color === objectToRemove.color &&
        shoe.brand === objectToRemove.brand &&
        shoe.price === objectToRemove.price &&
        shoe.size === objectToRemove.size //&&
        // shoe.stock === objectToRemove.stock
      );
    });

    if (index !== -1) {
      allShoes.splice(index, 1);
    }
    var indexTwo = otherArray.findIndex(function (shoe) {
      return (
        shoe.name === objectToRemove.name &&
        shoe.color === objectToRemove.color &&
        shoe.brand === objectToRemove.brand &&
        shoe.price === objectToRemove.price &&
        shoe.size === objectToRemove.size //&&
        // shoe.stock === objectToRemove.stock
      );
    });

    if (indexTwo !== -1) {
      otherArray.splice(indexTwo, 1);
    }
  }
  function getTotalCost() {
    let cost = 0;
    otherArray.forEach(function (shoePrice) {
      cost += shoePrice.ogPrice
    });
    return cost.toFixed(2)
  }

  function getStock() {
    return theShoe.stock
  }
  function theStockMessage() {
    return stockMessage
  }

  return {
    getAllShoes,
    setTheShoe,
    getStock,
    getShoe,
    getAllShoe,
    theStockMessage,
    getTotalCost,
    deleteShoes,
    setShoeStock,
    addTheShoe,
    getaddshoemessage,
    setsTheShoe,
    allSearchedShoes
  }
}





