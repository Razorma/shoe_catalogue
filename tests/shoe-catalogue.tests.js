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
  // describe('shoeCatalogue Function should be able to get the shoe stock', function () {
  //   var shoes = [
  //     {
  //       name: "Air Jordans",
  //       color: 'blue',
  //       brand: "Nike",
  //       price: 650,
  //       size: 5,
  //       stock: 5
  //     },
  //     {
  //       name: "Air Jordans",
  //       color: 'orange',
  //       brand: "adidas",
  //       price: 575,
  //       size: 6,
  //       stock: 3
  //     }
  //   ];
  //   it('should decrease the stock of the bought shoe', function () {
  //       let display = shoeCatalogue();
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       assert.deepEqual(display.getStock(), 3);
  //     });
  
  //   it('should return out of stock if the shoe stock runs out', function () {
  //     let display = shoeCatalogue();
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     assert.deepEqual(display.setTheStockMessage(), "out of stock");
  //   });
  //   it('should return an empty string if the stock is still available', function () {
  //       let display = shoeCatalogue();
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       assert.deepEqual(display.setTheStockMessage(), "");
  //     });
  // });
  // describe('shoeCatalogue Function should be able to get all the shoes that were sdded to the cart', function () {
  //   var shoes = [
  //     {
  //       name: "Air Jordans",
  //       color: 'blue',
  //       brand: "Nike",
  //       price: 650,
  //       size: 5,
  //       stock: 5
  //     },
  //     {
  //       name: "Air Jordans",
  //       color: 'orange',
  //       brand: "adidas",
  //       price: 575,
  //       size: 6,
  //       stock: 3
  //     }
  //   ];
  //   it('should decrease the stock of the bought shoe', function () {
  //       let display = shoeCatalogue();
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       assert.deepEqual(display.getStock(), 3);
  //     });
  
  //   it('should return out of stock if the shoe stock runs out', function () {
  //     let display = shoeCatalogue();
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     display.setTheShoe(shoes, "orange", "adidas", 6);
  //     assert.deepEqual(display.setTheStockMessage(), "out of stock");
  //   });
  //   it('should return an empty string if the stock is still available', function () {
  //       let display = shoeCatalogue();
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       display.setTheShoe(shoes, "blue", "Nike", 5);
  //       assert.deepEqual(display.setTheStockMessage(), "");
  //     });
  // });