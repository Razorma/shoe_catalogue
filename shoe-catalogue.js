
let allShoes = [];
var otherArray = [];

function shoeCatalogue(){
    let counter = 0;
    let theShoe = {};
    let stockQuantity = 0;
    let stockMessage = ''
    
    
    function setTheShoe(shoes,color,brand,size){
        allShoes = []
        theShoe = {};
        for(let i = 0;i<shoes.length;i++){       
            if(shoes[i].color===color && shoes[i].brand===brand && shoes[i].size===size){
                    allShoes.push(shoes[i])
                    theShoe = shoes[i]
                    shoes[i].stock = theShoe.stock 
                    allShoes.push(shoes[i])         
            }else{
                stockMessage = `we have no ${shoes[i].color} ${shoes[i].brand} that are size ${shoes[i].size} left in storage`
            }   
        }
    }
    
    // function setTheStockMessage(NumberOfShoes,shoeStock){
    //     if(NumberOfShoes>=shoeStock){
    //        return  stockMessage = "out of stock"     
    //     }else{
    //         return stockMessage = ""
    //     }
    // }
    function setShoeStock(){ 
      theShoe.stock-- 
  }
    
    
    function getShoe(){ 

        return theShoe  
    }
     function getAllShoe(){
      
        allShoes.forEach(function(shoe) {
        var found = otherArray.some(function(otherShoe) {
            return (
              shoe.color === otherShoe.color &&
              shoe.brand === otherShoe.brand &&
              shoe.price === otherShoe.price &&
              shoe.size === otherShoe.size &&
              shoe.stock === otherShoe.stock
            );
        });

  if (!found) {
    otherArray.push(shoe);
    
     }//else {
      //      counter++;
      //  }
    });
    return otherArray;
        
    }
   
    function deleteShoes(objectToRemove){
        var index = allShoes.findIndex(function(shoe) {
            return (
              shoe.name === objectToRemove.name &&
              shoe.color === objectToRemove.color &&
              shoe.brand === objectToRemove.brand &&
              shoe.price === objectToRemove.price &&
              shoe.size === objectToRemove.size &&
              shoe.stock === objectToRemove.stock
            );
          });
          
          if (index !== -1) {
            allShoes.splice(index, 1);
          }
          var indexTwo = otherArray.findIndex(function(shoe) {
            return (
              shoe.name === objectToRemove.name &&
              shoe.color === objectToRemove.color &&
              shoe.brand === objectToRemove.brand &&
              shoe.price === objectToRemove.price &&
              shoe.size === objectToRemove.size &&
              shoe.stock === objectToRemove.stock
            );
          });
          
          if (indexTwo !== -1) {
            otherArray.splice(indexTwo, 1);
          }
    }
    function getTotalCost(){
        let cost = 0;
        otherArray.forEach(function(shoePrice) {
            cost+=shoePrice.price
      });
      return cost.toFixed(2)
    }
    
    function getStock(){
        return theShoe.stock
    }
    function theStockMessage(){
        return stockMessage
    }
    return{
        setTheShoe,
        getStock,
        getShoe,
        // setTheStockMessage,
        getAllShoe,
        theStockMessage,
        getTotalCost,
        deleteShoes,
        setShoeStock
    }
}



