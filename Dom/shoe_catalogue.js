document.addEventListener('DOMContentLoaded', function () {

    const orderCart = document.querySelector(".items")
    const openCartElem = document.querySelector(".openCart")
    const closeCart = document.querySelector(".closeCart")
    const selectColor = document.querySelector(".selectColorNav")
    const selectBrand = document.querySelector(".selectBrandNav")
    const selectSize = document.querySelector(".selectSizeNav")
    const search = document.querySelector(".backNav")
    const searchNav = document.querySelector(".searchNav")
    const messageElem = document.querySelector(".messageOfShoe")
    const totalElem = document.querySelector(".totalElem")
    const totalCart = document.querySelector(".totalCart")
    const messageStock = document.querySelector(".messageStock")
    const checkoutButton = document.querySelector(".checkoutButton")
    const settings = document.querySelector(".settings")
    const gearButton = document.querySelector(".bi-gear-fill")
    const closeSettingsButton = document.querySelector(".bi-x-octagon-fill")
    const product = document.querySelector("#product")
    const backNav = document.querySelector(".backNav")
    const element = document.querySelector(".messageOfShoe");
    const nameofShoe = document.querySelector(".nameofShoe")
    const colorOfshoe = document.querySelector(".colorOfshoe")
    const brandofShoe = document.querySelector(".brandofShoe")
    const photoofShoe = document.querySelector(".photoofShoe")
    const priceofShoe = document.querySelector(".priceofShoe")
    const sizeofShoe = document.querySelector(".sizeofShoe")
    const stockofShoe = document.querySelector(".stockofShoe")
    const addShoeButton = document.querySelector(".addShoe")
    const addshoeErrorElem = document.querySelector(".addshoeErrorElem")


    colorOfshoe.addEventListener('keydown', function (press) {
        const letterRegex = /^[a-zA-Z ]*$/;
        if (!letterRegex.test(press.key)) {
            addshoeErrorElem.innerHTML = "enter only letters";
            setTimeout(function () {
                addshoeErrorElem.innerHTML = '';
            }, 2500)
            press.preventDefault();
        }
    });
    brandofShoe.addEventListener('keydown', function (press) {
        const letterRegex = /^[a-zA-Z ]*$/;
        if (!letterRegex.test(press.key)) {
            addshoeErrorElem.innerHTML = "enter only letters";
            setTimeout(function () {
                addshoeErrorElem.innerHTML = '';
            }, 2500)
            press.preventDefault();
        }
    });


    Handlebars.registerHelper('jsonStringify', function (context) {
        return JSON.stringify(context);
    });
    let initial = 0;
    openCartElem.addEventListener("click", function () {
        orderCart.style.right = "0";
    })
    closeCart.addEventListener("click", function () {
        orderCart.style.right = "-400px";
    })
    gearButton.addEventListener("click", function () {
        settings.style.top = "0";
    })
    closeSettingsButton.addEventListener("click", function () {
        settings.style.top = "-450px";
    })
    function fadeIn() {
        element.style.opacity = '2';
    }
    function fadeOut() {
        element.style.opacity = '0';
    }

    let shoeFunction = shoeCatalogue()

    let myArrayOfShoes = [
        {
            name: "Air Force 1",
            color: 'white',
            brand: "Nike",
            photo: "Photos/air force white nike.jpg",
            price: 750,
            size: 7,
            stock: 6,
            qty: 0,
            ogPrice: 750,
            ogStock: 6
        },
        // {
        //     name: "Air Jordan 13",
        //     color: 'black',
        //     brand: "Nike",
        //     photo: "Photos/air jordan 13 swed black.jpg",
        //     price: 650,
        //     size: 5,
        //     stock: 9,
        //     qty: 0,
        //     ogPrice: 650,
        //     ogStock: 9
        // },
        {
            name: "Air Max 90",
            color: 'white',
            brand: "Nike",
            photo: "Photos/white air max.jpg",
            price: 750,
            size: 6,
            stock: 12,
            qty: 0,
            ogPrice: 750,
            ogStock: 12
        },
        {
            name: "All Star",
            color: 'black-and-white',
            brand: "All Star",
            photo: "Photos/black  and white converse all star.jpg",
            price: 750,
            size: 5,
            stock: 14,
            qty: 0,
            ogPrice: 750,
            ogStock: 14
        },
        {
            name: "All Star",
            color: 'blue',
            brand: "All-Star",
            photo: "Photos/Blue all star.jpg",
            price: 750,
            size: 6,
            stock: 12,
            qty: 0,
            ogPrice: 750,
            ogStock: 12
        },
        {
            name: "Air Force 1",
            color: 'black',
            brand: "Nike",
            photo: "Photos/black air force 1ns.jpg",
            price: 650,
            size: 5,
            stock: 4,
            qty: 0,
            ogPrice: 650,
            ogStock: 4
        },
        {
            name: "Witness",
            color: 'black',
            brand: "Nike",
            photo: "Photos/Black Nike witness.jpg",
            price: 650,
            size: 6,
            stock: 2,
            qty: 0,
            ogPrice: 650,
            ogStock: 2
        },
        {
            name: "Air Jordan 13",
            color: 'black-and-white',
            brand: "Nike",
            photo: "Photos/black and white air jordans.jpg",
            price: 650,
            size: 8,
            stock: 5,
            qty: 0,
            ogPrice: 650,
            ogStock: 5
        },
        {
            name: "Puma Smash",
            color: 'black-and-white',
            brand: "Puma",
            photo: "Photos/black puma.jpg",
            price: 450,
            size: 8,
            stock: 4,
            qty: 0,
            ogPrice: 450,
            ogStock: 4
        },
        {
            name: "Vans",
            color: 'black',
            brand: "Vans",
            photo: "Photos/black vans.jpg",
            price: 750,
            size: 5,
            stock: 7,
            qty: 0,
            ogPrice: 750,
            ogStock: 7
        },
        {
            name: "Vans",
            color: 'black',
            brand: "Vans",
            photo: "Photos/black vans u.jpg",
            price: 750,
            size: 6,
            stock: 6,
            qty: 0,
            ogPrice: 750,
            ogStock: 6
        },
        {
            name: "Vans",
            color: 'black',
            brand: "Vans",
            photo: "Photos/black with white line vans.jpg",
            price: 750,
            size: 7,
            stock: 4,
            qty: 0,
            ogPrice: 750,
            ogStock: 4
        },
        {
            name: "Air force 1",
            color: 'blue',
            brand: "Nike",
            photo: "Photos/blue air force 1s.jpg",
            price: 950,
            size: 5,
            stock: 1,
            qty: 0,
            ogPrice: 950,
            ogStock: 1
        },
        {
            name: "Air force 1",
            color: 'blue',
            brand: "Nike",
            photo: "Photos/blue vans white.jpg",
            price: 950,
            size: 6,
            stock: 2,
            qty: 0,
            ogPrice: 950,
            ogStock: 2
        },
        ///where i left off
        {
            name: "Air Jordan 1",
            color: 'red',
            brand: "Nike",
            photo: "Photos/red nike air jordans.jpg",
            price: 850,
            size: 5,
            stock: 3,
            qty: 0,
            ogPrice: 850,
            ogStock: 3
        },
        {
            name: "Schotch Vans",
            color: 'black-and-white',
            brand: "Vans",
            photo: "Photos/schotch vans.jpg",
            price: 350,
            size: 8,
            stock: 5,
            qty: 0,
            ogPrice: 350,
            ogStock: 5
        },
        {
            name: "Air Force 1",
            color: 'white',
            brand: "Nike",
            photo: "Photos/air force white nike.jpg",
            price: 750,
            size: 6,
            stock: 6,
            qty: 0,
            ogPrice: 750,
            ogStock: 6
        },
        {
            name: "Air Max 90",
            color: 'white',
            brand: "Nike",
            photo: "Photos/white air max.jpg",
            price: 750,
            size: 5,
            stock: 19,
            qty: 0,
            ogPrice: 750,
            ogStock: 12
        },
        {
            name: "Advantage",
            color: 'white',
            brand: "adidas",
            photo: "Photos/white addidas.jpg",
            price: 650,
            size: 5,
            stock: 2,
            qty: 0,
            ogPrice: 650,
            ogStock: 2
        },
        {
            name: "Superstar",
            color: 'white',
            brand: "adidas",
            photo: "Photos/White adidas.jpg",
            price: 650,
            size: 6,
            stock: 2,
            qty: 0,
            ogPrice: 650,
            ogStock: 2
        },
        {
            name: "Continental 80",
            color: 'white',
            brand: "adidas",
            photo: "Photos/contnental 80 white adidas.jpg",
            price: 650,
            size: 7,
            stock: 2,
            qty: 0,
            ogPrice: 650,
            ogStock: 2
        },
        {
            name: "Air Jordan 13",
            color: 'white',
            brand: "Nike",
            photo: "Photos/WHite air jordans 13.jpg",
            price: 950,
            size: 5,
            stock: 6,
            qty: 0,
            ogPrice: 950,
            ogStock: 6
        },
        {
            name: "Fila Disruptor",
            color: 'white',
            brand: "Fila",
            photo: "Photos/white fila shoes.jpg",
            price: 950,
            size: 6,
            stock: 8,
            qty: 0,
            ogPrice: 950,
            ogStock: 8
        },
        {
            name: "All star",
            color: 'white',
            brand: "All-Star",
            photo: "Photos/white high top all star.jpg",
            price: 350,
            size: 5,
            stock: 9,
            qty: 0,
            ogPrice: 350,
            ogStock: 9
        },
        {
            name: "white Puma",
            color: 'white',
            brand: "Puma",
            photo: "Photos/white puma.jpg",
            price: 750,
            size: 5,
            stock: 7,
            qty: 0,
            ogPrice: 750,
            ogStock: 7
        },
        {
            name: "Air Jordan 1",
            color: 'yellow',
            brand: "Nike",
            photo: "Photos/Yellow and white air jordans.jpg",
            price: 950,
            size: 5,
            stock: 2,
            qty: 0,
            ogPrice: 950,
            ogStock: 2
        },
        {
            name: "Yellow Vans",
            color: 'yellow',
            brand: "Vans",
            photo: "Photos/yellow vans.jpg",
            price: 850,
            size: 8,
            stock: 9,
            qty: 0,
            ogPrice: 850,
            ogStock: 9
        },
    ];

    var displayShoes = JSON.parse(localStorage.getItem("theArrayOfShoes"))
    let searchCheck = ''
    var searchColor = '';
    var searchBrand = '';
    var searchSize = 0;

    function searchShoesByCriteria(color, brand, size) {
        return displayShoes.filter(function(shoe) {
          return (
            shoe.color === color &&
            shoe.brand === brand &&
            shoe.size === size
          );
        });
      }

    localStorage.setItem("theArrayOfShoes", JSON.stringify(myArrayOfShoes));
    searchNav.addEventListener("click", function () {
        shoeFunction.setTheShoe(displayShoes, selectColor.value, selectBrand.value, parseInt(selectSize.value))
        if(selectColor.value===""&&selectSize.value===""&&selectBrand.value===""){
            messageElem.classList.add("warning")
            element.innerHTML = `Please select all the Search fields`
            fadeIn()
            setTimeout(fadeOut, 4000);
            setTimeout(function () {
                messageElem.classList.remove("warning")
                element.innerHTML = ""
            }, 6000);

        }else{
            if(selectColor.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please select Color`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
                
            }else if(selectBrand.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please select Brand`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else if(selectSize.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please select Size`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else{
                if (JSON.stringify(shoeFunction.getShoe()) === JSON.stringify({})) {
               
                    messageElem.classList.add("warning")
                    element.innerHTML = `We have no size ${selectSize.value} ${selectColor.value} ${selectBrand.value} left in storage`
                    fadeIn()
                    setTimeout(fadeOut, 4000);
                    setTimeout(function () {
                        messageElem.classList.remove("warning")
                        element.innerHTML = ""
                    }, 6000);
            } else {

                 searchColor = selectColor.value;
                 searchBrand = selectBrand.value;
                 searchSize = parseInt(selectSize.value);

                let filteredShoes = searchShoesByCriteria(searchColor, searchBrand, searchSize);

    
                const data = { list: filteredShoes };
                var templateSource = document.querySelector(".userTemplate").innerHTML;
                var template = Handlebars.compile(templateSource);
                const theItems = template(data);
    
                const itemContainer = document.getElementById("product");
                if (itemContainer) {
                    itemContainer.innerHTML = theItems;
                }
                backNav.style.display = "flex"
                }
            selectColor.value =""
            selectBrand.value=""
            selectSize.value =""
            searchCheck = 'filtered'
    
            }
        }
    })
    backNav.addEventListener("click", function () {
        backNav.style.display = "none"
        searchCheck = ""
    })


    otherArray = JSON.parse(localStorage.getItem("allTheShoes")) || [];

    function createDisplayHtml(display) {
        const data = { list: display };
        var templateSource = document.querySelector(".userTemplate").innerHTML;
        var template = Handlebars.compile(templateSource);
        const theItems = template(data);

        const itemContainer = document.getElementById("product");
        if (itemContainer) {
            itemContainer.innerHTML = theItems;
        }
    }
    const data = { list: displayShoes };
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var template = Handlebars.compile(templateSource);
    const theItems = template(data);

    const itemContainer = document.getElementById("product");
    if (itemContainer) {
        itemContainer.innerHTML = theItems;
    }
    totalElem.innerHTML = shoeFunction.getTotalCost() || 0;
    totalCart.innerHTML = shoeFunction.getAllShoe().length || "";

    function createCart(otherArrayCart) {
        const bucketList = otherArrayCart;
        const all = bucketList || [];

        const datalist = { list: all };
        var templateSource = document.querySelector(".myTemplate").innerHTML;
        var template = Handlebars.compile(templateSource);
        const TheItems = template(datalist);

        const ItemContainer = document.getElementById("busket");
        if (ItemContainer) {
            ItemContainer.innerHTML = TheItems;
        }
    }
    otherArray = JSON.parse(localStorage.getItem("allTheShoes")) || [];
    const bucketList = otherArray;
    const all = bucketList || [];

    const datalist = { list: all };
    var templateSource = document.querySelector(".myTemplate").innerHTML;
    var template = Handlebars.compile(templateSource);
    const TheItems = template(datalist);

    const ItemContainer = document.getElementById("busket");
    if (ItemContainer) {
        ItemContainer.innerHTML = TheItems;
    }

    search.addEventListener("click", function () {

        otherArray = JSON.parse(localStorage.getItem("allTheShoes")) || [];
        const mylist = otherArray;
        const allTheShoesArray = mylist || [];

        const data = { list: displayShoes };
        var templateSource = document.querySelector(".userTemplate").innerHTML;
        var template = Handlebars.compile(templateSource);
        const theItems = template(data);

        const itemContainer = document.getElementById("product");
        if (itemContainer) {
            itemContainer.innerHTML = theItems;
        }

    })

    var container = document.getElementById('busket');

    function decreaseStock(object, displayObject) {
        const index = displayShoes.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (displayObject.stock >= 0 && displayShoes[index].stock >= 0) {
            if (index !== -1) {
                displayShoes[index].stock--;
                displayShoes[index].qty++;
                displayShoes[index].ogPrice = displayShoes[index].price * displayShoes[index].qty;
                displayObject.stock--
                displayObject.qty++
                displayObject.ogPrice = displayObject.price * displayObject.qty;
                localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));
            }
        }
    }
    function increaseStock(object, displayObject) {
        const index = displayShoes.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (displayObject.stock >= 0 && displayShoes[index].stock >= 0) {
            if (index !== -1) {
                displayShoes[index].stock++;
                displayShoes[index].qty--;
                displayShoes[index].ogPrice = displayShoes[index].ogPrice - displayShoes[index].price
                displayObject.stock++
                displayObject.qty--
                displayObject.ogPrice = displayObject.ogPrice - displayObject.price;
                localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));
            }
        }
    }
    function DecreaseStock(object, indexArray, stockNumber, qtyNumber, priceNumber) {
        const index = indexArray.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (priceNumber >= 0) {
            if (index !== -1) {
                indexArray[index].stock = stockNumber;
                indexArray[index].qty = qtyNumber;
                indexArray[index].ogPrice = priceNumber;
            }
        }
    }
    function IncreaseStock(object, indexArray, stockNumber, qtyNumber, priceNumber) {
        const index = indexArray.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (priceNumber >= 0) {
            if (index !== -1) {
                indexArray[index].stock = stockNumber;
                indexArray[index].qty = qtyNumber;
                indexArray[index].ogPrice = priceNumber;
            }
        }
    }
    function ResetStock(object, displayObject) {
        const index = displayShoes.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);

        if (index !== -1) {
            displayShoes[index].qty = 0;
            displayShoes[index].ogPrice = 0;
            displayObject.qty = 0;
            displayObject.ogPrice = 0;
            localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));
        }
    }
    function resetStock(object, indexArray) {

        const index = indexArray.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (index !== -1) {
            indexArray[index].qty = 0;
            indexArray[index].ogPrice = 0;
        }
    }
    function returnShoeStock(object, displayObject) {
        const index = displayShoes.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);

        if (index !== -1) {
            displayShoes[index].stock = displayShoes[index].ogStock
            displayShoes[index].qty = 0;

            displayObject.stock = displayObject.ogStock
            displayObject.qty = 0;
            localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));
        }
    }
    function returnShoe(object, indexArray) {
        const index = indexArray.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (index !== -1) {
            indexArray[index].stock = indexArray[index].ogStock;
            indexArray[index].qty = 0;
        }
    }
    function checkoutShoeStock(object, displayObject) {
        const index = displayShoes.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);

        if (index !== -1) {
            displayShoes[index].ogStock = displayShoes[index].stock
            displayShoes[index].qty = 0;
            displayShoes[index].ogPrice = 0;

            displayObject.ogStock = displayObject.stock
            displayObject.qty = 0;
            localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));
        }
    }
    function checkoutShoe(object, indexArray) {
        const index = indexArray.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (index !== -1) {
            indexArray[index].ogStock = indexArray[index].stock;
            indexArray[index].qty = 0;
            indexArray[index].ogPrice= 0;
            
        }
    }
    function initialiseOutOfStockShoes(object, indexArray) {
        const index = indexArray.findIndex(obj => obj.name === object.name && obj.color === object.color && obj.brand === object.brand && obj.size === object.size);
        if (index !== -1) {
            indexArray[index].stock = 0;
            localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));
        }
    }



    product.addEventListener("click", function (event) {

        if (event.target.classList.contains('cartAdd')) {
            var cartShoeElement = event.target.closest('.photo');
            var object = JSON.parse(cartShoeElement.getAttribute('data-object'));
            var objectToAdd = object;
            if (objectToAdd.stock >= 0) {
                decreaseStock(objectToAdd, objectToAdd)
            }
            shoeFunction.setsTheShoe(objectToAdd)
            if (objectToAdd.stock >= 0) {
                DecreaseStock(objectToAdd, shoeFunction.getAllShoe(), objectToAdd.stock, objectToAdd.qty, objectToAdd.ogPrice)
            }
            else {
                initialiseOutOfStockShoes(objectToAdd, displayShoes)
                element.innerHTML = `${objectToAdd.brand}${objectToAdd.name} shoes are out of Stock`
                function fadeIn() {
                    element.style.opacity = '2';
                }
                function fadeOut() {
                    element.style.opacity = '0';
                }
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    element.innerHTML = ""
                }, 6000);
            }
            var index = allShoes.findIndex(function (shoe) {
                return (
                    shoe.name === objectToAdd.name &&
                    shoe.color === objectToAdd.color &&
                    shoe.brand === objectToAdd.brand &&
                    shoe.price === objectToAdd.price &&
                    shoe.size === objectToAdd.size 
                );
            });

            if (index !== -1) {
                allShoes.splice(index, 1);
            }
            if(searchCheck===""){
                createDisplayHtml(displayShoes)
            }else{
                let filteredShoes = searchShoesByCriteria(searchColor, searchBrand, searchSize);
                createDisplayHtml(filteredShoes)
            }
            

            const data = { list: shoeFunction.getAllShoe() };
            localStorage.setItem(
                "allTheShoes",
                JSON.stringify(otherArray)
            );

            var templateSource = document.querySelector(".myTemplate").innerHTML;
            var template = Handlebars.compile(templateSource);
            const theItems = template(data);
            const itemContainer = document.getElementById("busket");
            itemContainer.innerHTML = theItems;
            totalElem.innerHTML = shoeFunction.getTotalCost()

            if (parseFloat(totalCart.innerHTML) > 1) {
                totalCart.innerHTML = parseFloat(totalCart.innerHTML) - 1
                localStorage.setItem(
                    "totalCartLocal",
                    parseFloat(totalCart.innerHTML)
                );
            } else {
                totalCart.innerHTML = "";
            }
        }

        totalCart.innerHTML = shoeFunction.getAllShoe().length || ""

    })
    container.addEventListener('click', function (event) {
        if (event.target.classList.contains('bi-trash3-fill')) {
            var cartItemNumberElement = event.target.parentElement.querySelector('.cartItemNumber');
            var cartShoeElement = event.target.closest('.cartShoe');
            var object = JSON.parse(cartShoeElement.getAttribute('data-object'));
            var objectToRemove = object;

            shoeFunction.deleteShoes(objectToRemove)
            if (parseFloat(totalCart.innerHTML) > 1) {
                totalCart.innerHTML = parseFloat(totalCart.innerHTML) - 1
                localStorage.setItem(
                    "totalCartLocal",
                    parseFloat(totalCart.innerHTML)
                );
            } else {
                totalCart.innerHTML = "";
            }

            let currentTotal = parseFloat(totalElem.innerHTML)
            var cartItem = event.target.closest('.cartShoe');
            totalElem.innerHTML = (currentTotal - parseFloat(cartItemNumberElement.innerHTML) * parseFloat(cartItemNumberElement.getAttribute('data-price'))).toFixed(2)
            shoeFunction.deleteShoes(objectToRemove)
            ResetStock(objectToRemove, objectToRemove)
            resetStock(objectToRemove, displayShoes)
            returnShoeStock(objectToRemove, objectToRemove)
            returnShoe(objectToRemove, displayShoes)
            localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));

            if(searchCheck===""){
                createDisplayHtml(displayShoes)
            }else{
                let filteredShoes = searchShoesByCriteria(searchColor, searchBrand, searchSize);
                createDisplayHtml(filteredShoes)
            }
            localStorage.setItem("allTheShoes", JSON.stringify(otherArray));
            createCart(otherArray)

            cartItem.remove();
            shoeFunction.deleteShoes(objectToRemove)
        }

        if (event.target.classList.contains('minus')) {

            var cartItemNumberElement = event.target.parentElement.querySelector('.cartItemNumber');
            var currentNumber = parseInt(cartItemNumberElement.textContent);

            if (currentNumber > 1) {
                var cartItemNumberElement = event.target.parentElement.querySelector('.cartItemNumber');
                var cartShoeElement = event.target.closest('.cartShoe');
                var object = JSON.parse(cartShoeElement.getAttribute('data-object'));
                var objectToRemove = object;
                increaseStock(objectToRemove, objectToRemove)
                IncreaseStock(objectToRemove, shoeFunction.getAllShoe(), objectToRemove.stock, objectToRemove.qty, objectToRemove.ogPrice)

                if(searchCheck===""){
                    createDisplayHtml(displayShoes)
                }else{
                    let filteredShoes = searchShoesByCriteria(searchColor, searchBrand, searchSize);
                    createDisplayHtml(filteredShoes)
                }
                localStorage.setItem("allTheShoes", JSON.stringify(otherArray));
                createCart(otherArray)
                let currentTotal = parseFloat(totalElem.innerHTML)
                totalElem.innerHTML = currentTotal - parseFloat(cartItemNumberElement.getAttribute('data-price'))

            }
        }
        if (event.target.classList.contains('plus')) {

            var cartItemNumberElement = event.target.parentElement.querySelector('.cartItemNumber');
            let currentTotal = parseFloat(totalElem.innerHTML)
            var currentNumber = parseInt(cartItemNumberElement.textContent);

            var cartShoeElement = event.target.closest('.cartShoe');
            var object = JSON.parse(cartShoeElement.getAttribute('data-object'));
            var objectToRemove = object;
            if (currentNumber < objectToRemove.ogStock) {
                if (objectToRemove.stock >= 0) {
                    decreaseStock(objectToRemove, objectToRemove)
                }
                if (objectToRemove.stock >= 0) {
                    DecreaseStock(objectToRemove, shoeFunction.getAllShoe(), objectToRemove.stock, objectToRemove.qty, objectToRemove.ogPrice)
                }
                if(searchCheck===""){
                    createDisplayHtml(displayShoes)
                }else{
                    let filteredShoes = searchShoesByCriteria(searchColor, searchBrand, searchSize);
                    createDisplayHtml(filteredShoes)
                }
                localStorage.setItem("allTheShoes", JSON.stringify(otherArray));
                createCart(otherArray)
                totalElem.innerHTML = parseFloat(cartItemNumberElement.getAttribute('data-price')) + currentTotal
            } else {
                messageStock.innerHTML = `We have no ${objectToRemove.color} "${objectToRemove.name}" left in storage`
                setTimeout(function () {
                    messageStock.innerHTML = '';
                }, 3500);
            }

        }

    });



    addShoeButton.addEventListener("click", function () {
        if(nameofShoe.value===""&&colorOfshoe.value===""&&brandofShoe.value===""&&photoofShoe.value===""&& priceofShoe.value===""&&sizeofShoe.value===""&&stockofShoe.value===""){
            messageElem.classList.add("warning")
            element.innerHTML = `Please enter Shoe`
            fadeIn()
            setTimeout(fadeOut, 4000);
            setTimeout(function () {
                messageElem.classList.remove("warning")
                element.innerHTML = ""
            }, 6000);
        }else{
            if(nameofShoe.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please Enter Name of shoe`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else if(brandofShoe.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please Enter Brand of shoe`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else if(photoofShoe.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please Enter Photo URL of shoe`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else if(priceofShoe.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please Enter Price of shoe`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else if(sizeofShoe.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please Enter Size of shoe`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else if(stockofShoe.value===""){
                messageElem.classList.add("warning")
                element.innerHTML = `Please Enter Stock of shoe`
                fadeIn()
                setTimeout(fadeOut, 4000);
                setTimeout(function () {
                    messageElem.classList.remove("warning")
                    element.innerHTML = ""
                }, 6000);
            }else{
                
                shoeFunction.addTheShoe(displayShoes, nameofShoe.value, colorOfshoe.value, brandofShoe.value, photoofShoe.value, priceofShoe.value, sizeofShoe.value, stockofShoe.value)
                localStorage.setItem("theArrayOfShoes", JSON.stringify(displayShoes));
                shoes = JSON.parse(localStorage.getItem("theArrayOfShoes"))
                addshoeErrorElem.innerHTML = shoeFunction.getaddshoemessage()
                setTimeout(function () {
                    addshoeErrorElem.innerHTML = '';
                }, 3000);
                createDisplayHtml(displayShoes)

                nameofShoe.value = "";
                colorOfshoe.value = "";
                brandofShoe.value = "";
                photoofShoe.value = "";
                priceofShoe.value = "";
                sizeofShoe.value = "";
                stockofShoe.value = "";
                addShoeButton.value = "";
            }
            
        }
        
    })

checkoutButton.addEventListener("click", function () {
    var cartItems = document.querySelectorAll('.cartShoe');

    cartItems.forEach(function(item) {
      var cartItemNumberElement = item.querySelector('.cartItemNumber');
      let objectToInitialise = JSON.parse(cartItemNumberElement.getAttribute('data-object'))
      checkoutShoeStock(objectToInitialise, objectToInitialise)
      checkoutShoe(objectToInitialise, displayShoes)

    });
    if(searchCheck===""){
        createDisplayHtml(displayShoes)
    }else{
        let filteredShoes = searchShoesByCriteria(searchColor, searchBrand, searchSize);
        createDisplayHtml(filteredShoes)
    }
    createCart(otherArray)
  
    ItemContainer.innerHTML = "";
    localStorage.removeItem("totalCartLocal")
    localStorage.removeItem("allTheShoes")
    totalElem.innerHTML = initial.toFixed(2)
    totalCart.innerHTML = "";
    allShoes = [];
    otherArray = [];
    })

});

























