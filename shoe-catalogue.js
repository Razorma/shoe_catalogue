
let allShoes = [];
var otherArray = [];
let cost = 0
function shoeCatalogue(){
    let counter = 0;
    let theShoe = {};
    let stockQuantity = 0;
    let stockMessage = ''
    
    function setTheShoe(shoes,color,brand,size){
        theShoe = {};
        for(let i = 0;i<shoes.length;i++){       
            if(shoes[i].color===color && shoes[i].brand===brand && shoes[i].size===size){
                    theShoe = shoes[i]
                    // theShoe.stock--
                    shoes[i].stock = theShoe.stock 
                    allShoes.push(theShoe)         
            }else{
                stockMessage = `we have no ${shoes[i].color} ${shoes[i].brand} that are size ${shoes[i].size} left in storage`
            }   
        }
    }
    
    function setTheStockMessage(){
        if(theShoe.stock<=0){
           return  stockMessage = "out of stock"     
        }else{
            return stockMessage = ""
        }
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
        return otherArray
    }
    function getTotalCost(){
        
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
        setTheStockMessage,
        getAllShoe,
        theStockMessage,
        getTotalCost,
    }
}



