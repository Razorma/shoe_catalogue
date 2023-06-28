describe('shoeCatalogue Function tests', function () {
    var shoes = [
      {
        name: "Air Jordans",
        color: 'blue',
        brand: "Nike",
        price: 650,
        size: 5,
        stock: 5
      },
      {
        name: "Air Jordans",
        color: 'orange',
        brand: "adidas",
        price: 575,
        size: 6,
        stock: 3
      }
    ];
  
    it('should get the required shoe', function () {
      let display = shoeCatalogue();
      display.setTheShoe(shoes, "orange", "adidas", 6);
      assert.deepEqual(display.getShoe(), {name: "Air Jordans",color: "orange", brand: "adidas", price: 575, size: 6, stock: 3 });
    });
    it('should get the required shoe', function () {
        let display = shoeCatalogue();
        display.setTheShoe(shoes, "blue", "Nike", 5);
        assert.deepEqual(display.getShoe(), {name: "Air Jordans",color: "blue", brand: "Nike", price: 650, size: 5, stock: 5 });
      });
  });
  describe('', function () {//shoeCatalogue Function should be able to return all the shoes odered
    var Shoes = [
      {
        name  : "Air Force",
        color : 'White',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6,
        qty: 0,
        ogPrice: 750,
        ogStock: 6
      },
      {
        name  : "Air Force",
        color : 'orange',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6,
        qty: 0,
        ogPrice: 750,
        ogStock: 6
      },
      {
        name  : "low",
        color : 'White',
        brand : "adidas",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6,
        qty: 0,
        ogPrice: 750,
        ogStock: 6
      },
    ];
    it('should return an array of the shoes odered', function () {
        let display = shoeCatalogue();
        display.setTheShoe(Shoes, "orange", "Nike", 5);
        display.getAllShoes()
        display.setTheShoe(Shoes, "White", "adidas", 5);
        display.getAllShoes()

    
        assert.deepEqual(otherArray, [
        {
        name  : "Air Force",
        color : 'orange',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6,
        qty: 0,
        ogPrice: 750,
        ogStock: 6
        }, 
        {
        name  : "low",
        color : 'White',
        brand : "adidas",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6,
        qty: 0,
        ogPrice: 750,
        ogStock: 6
        }]);
      });
      it('should not add the same shoe twice in the array', function () {
        let display = shoeCatalogue();
        display.setTheShoe(Shoes, "orange", "Nike", 5);
        display.getAllShoes()
        display.setTheShoe(Shoes, "White", "adidas", 5);
        display.getAllShoes()
        display.setTheShoe(Shoes, "White", "adidas", 5);
        display.getAllShoes()

      
        assert.deepEqual(otherArray, [
        {
        name  : "Air Force",
        color : 'orange',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6,
        qty: 0,
        ogPrice: 750,
        ogStock: 6
        }, 
        {
        name  : "low",
        color : 'White',
        brand : "adidas",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6,
        qty: 0,
        ogPrice: 750,
        ogStock: 6
        }]);
        
    
    });
    it('should decrease the stock when a shoe is bought', function () {
      let display = shoeCatalogue();
      display.setTheShoe(Shoes, "orange", "Nike", 5);
      display.getAllShoes()
      display.setShoeStock()
      display.setTheShoe(Shoes, "White", "adidas", 5);
      display.getAllShoes()
      display.setShoeStock()
      display.setShoeStock()

      
      assert.deepEqual(otherArray, [{name  : "Air Force",
      color : 'orange',
      brand : "Nike",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 5,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
      }, 
      {
      name  : "low",
      color : 'White',
      brand : "adidas",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 4,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
      }]);
  });
  it('should delete the shoe from the storing array when a the shoe is removed from the cart', function () {
    let display = shoeCatalogue();
    display.setTheShoe(Shoes, "orange", "Nike", 5);
    display.getAllShoe()
    
    display.setTheShoe(Shoes, "White", "adidas", 5);
    display.getAllShoe()
    var object = {
      name  : "low",
      color : 'White',
      brand : "adidas",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 4,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
    };
    display.deleteShoes(object)
    assert.deepEqual(otherArray, [
    {
    name  : "Air Force",
    color : 'orange',
    brand : "Nike",
    photo : "Photos/air force white nike.jpg",
    price : 750,
    size  : 5,
    stock : 5,
    qty: 0,
    ogPrice: 750,
    ogStock: 6
    } 
   ]);
});
it('should delete the shoe from the display array when a the shoe is removed from the cart', function () {
  let display = shoeCatalogue();
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoes()
  var object = {
    name  : "low",
    color : 'White',
    brand : "adidas",
    photo : "Photos/air force white nike.jpg",
    price : 750,
    size  : 5,
    stock : 4,
    qty: 0,
    ogPrice: 750,
    ogStock: 6
  };
  display.deleteShoes(object)
  assert.deepEqual(allShoes, []);
});
it('should be able to get the current shoe stock after purchase', function () {
  let display = shoeCatalogue();
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoes()
  display.setShoeStock()
  assert.deepEqual(display.getStock(), 3);
});
it('should get the total cost of all the shoes bought', function () {
  let display = shoeCatalogue();
  display.setTheShoe(Shoes, "orange", "Nike", 5);
  display.getAllShoes()
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoes()
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoes()
  let initial = 1500

  assert.deepEqual(display.getTotalCost(), initial.toFixed(2));
  

});
it('should be able to add a shoe in the object of shoes', function () {
  let theShoes =[
    {
      name  : "Air Force",
      color : 'White',
      brand : "Nike",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 5,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
    },
    {
      name  : "Air Force",
      color : 'orange',
      brand : "Nike",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 3,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
    },
    {
      name  : "low",
      color : 'White',
      brand : "adidas",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 4,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
    },
  ]
  let display = shoeCatalogue();
  display.addTheShoe(theShoes,"air jordans", "yellow", "Nike","Photos/Air force white nike.jpg","800", "5", "7")


  assert.deepEqual(theShoes,[
    {
      name  : "Air Force",
      color : 'White',
      brand : "Nike",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 5,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
    },
    {
      name  : "Air Force",
      color : 'orange',
      brand : "Nike",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 3,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
    },
    {
      name  : "low",
      color : 'White',
      brand : "adidas",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 4,
      qty: 0,
      ogPrice: 750,
      ogStock: 6
    },
    {
      name  : "air jordans",
      color : 'yellow',
      brand : "Nike",
      photo : "Photos/Air force white nike.jpg",
      price : 800,
      size  : 5,
      stock : 7,
      qty: 0,
      ogPrice: 800,
      ogStock: 7
    }
    
  ]);
});

it('should return the error message as an empty string if the the fields are entered', function () {
  let display = shoeCatalogue();
  display.addTheShoe(Shoes,"air jordans", "yellow", "Nike","Photos/Air force white nike.jpg","800", "5", "7")
 
  assert.deepEqual(display.getaddshoemessage(),"");
});

it('should return an error message if any of the entered values in an empty string', function () {
  let display = shoeCatalogue();
  display.addTheShoe(Shoes,"", "", "","","", "", "")
  assert.deepEqual(display.getaddshoemessage(),"please enter all the inputs");
});
});
