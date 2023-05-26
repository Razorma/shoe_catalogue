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
        stock : 6
      },
      {
        name  : "Air Force",
        color : 'orange',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6
      },
      {
        name  : "low",
        color : 'White',
        brand : "adidas",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6
      },
    ];
    it('should return an array of the shoes odered', function () {
        let display = shoeCatalogue();
        display.setTheShoe(Shoes, "orange", "Nike", 5);
        display.getAllShoe()
        display.setTheShoe(Shoes, "White", "adidas", 5);
        display.getAllShoe()

    
        assert.deepEqual(otherArray, [{name  : "Air Force",
        color : 'orange',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6}, 
        {
        name  : "low",
        color : 'White',
        brand : "adidas",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6
        }]);
      });
      it('should not add the same shoe twice in the array', function () {
        let display = shoeCatalogue();
        display.setTheShoe(Shoes, "orange", "Nike", 5);
        display.getAllShoe()
        display.setTheShoe(Shoes, "White", "adidas", 5);
        display.getAllShoe()
        display.setTheShoe(Shoes, "White", "adidas", 5);
        display.getAllShoe()

      
        assert.deepEqual(otherArray, [{name  : "Air Force",
        color : 'orange',
        brand : "Nike",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6}, 
        {
        name  : "low",
        color : 'White',
        brand : "adidas",
        photo : "Photos/air force white nike.jpg",
        price : 750,
        size  : 5,
        stock : 6
        }]);
        
    
    });
    it('should decrease the stock when a shoe is bought', function () {
      let display = shoeCatalogue();
      display.setTheShoe(Shoes, "orange", "Nike", 5);
      display.getAllShoe()
      display.setShoeStock()
      display.setTheShoe(Shoes, "White", "adidas", 5);
      display.getAllShoe()
      display.setShoeStock()
      display.setShoeStock()

      
      assert.deepEqual(otherArray, [{name  : "Air Force",
      color : 'orange',
      brand : "Nike",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 5}, 
      {
      name  : "low",
      color : 'White',
      brand : "adidas",
      photo : "Photos/air force white nike.jpg",
      price : 750,
      size  : 5,
      stock : 4
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
      stock : 4
    };
    display.deleteShoes(object)
    assert.deepEqual(otherArray, [{name  : "Air Force",
    color : 'orange',
    brand : "Nike",
    photo : "Photos/air force white nike.jpg",
    price : 750,
    size  : 5,
    stock : 5} 
   ]);
});
it('should delete the shoe from the display array when a the shoe is removed from the cart', function () {
  let display = shoeCatalogue();
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoe()
  var object = {
    name  : "low",
    color : 'White',
    brand : "adidas",
    photo : "Photos/air force white nike.jpg",
    price : 750,
    size  : 5,
    stock : 4
  };
  display.deleteShoes(object)
  assert.deepEqual(allShoes, []);
});
it('should be able to get the current shoe stock after purchase', function () {
  let display = shoeCatalogue();
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoe()
  display.setShoeStock()
  assert.deepEqual(display.getStock(), 3);
});
it('should get the total cost of all the shoes bought', function () {
  let display = shoeCatalogue();
  display.setTheShoe(Shoes, "orange", "Nike", 5);
  display.getAllShoe()
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoe()
  display.setTheShoe(Shoes, "White", "adidas", 5);
  display.getAllShoe()
 let initial = 1500

  assert.deepEqual(display.getTotalCost(), initial.toFixed(2));
  

});

  });
