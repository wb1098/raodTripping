var exports = module.exports = {};

// product and cargo objects
const productList = [];

const Product = function (prod_id, name, count, cost, weight, description, imgUrl) {
    this.prod_id = prod_id;
    this.name = name;
    this.count = count;
    this.cost = cost;
    this.weight = weight;
    this.description = description;
    this.imgUrl = imgUrl;
    this.totalPrice = (this.count * this.cost);
    this.totalWeight = (this.count * this.weight);
}

const luggageProduct = new Product(0, 'Lego Batman Quick Escape Bag', 1, 50, 50,
    `Everyone needs Luggage when they travel. Why not step out in style and go with the Batman Lego Bag for that carefree get away weekend!`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdWSBLQIjN-G9o3rxzHGyxz1ngHWepvUKClhOjQNNsO0abog2xA');
productList.push(luggageProduct);

var beerProduct = new Product(1, 'One Case of Beer', 1, 15, 15, `Hey! You better take something besides water to drink. And why not pack a bunch of cold ones that not only taste good but provide plenty of calories! Enjoy... It's the season of giving!`, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOWiglrerSLYdTubNAp9r-mz5vDdFsP4DagadYl-FD30CJj5Msw")
productList.push(beerProduct);

var foodProduct = new Product(2, 'One Picnic Lunch', 1, 10, 10, `How about a little bit of food to enjoy on your long and ardous road trip`, "http://www.mercurynews.com/wp-content/uploads/2017/05/sjm-l-picnic-0611-02.jpg?w=525")
productList.push(foodProduct);

var petsProduct = new Product(3, 'Pets for your Trip?', 2, 5, 5, `Might as well take your best friend along!`, `https://s3.amazonaws.com/lowres.cartoonstock.com/animals-dog-dog_behaviour-canine-pet_dog-window-dcrn798_low.jpg`)
productList.push(petsProduct);

exports.createCargoParts = function () {
    return (productList);
}

exports.runningCostTotal = function (cargoCart) {
    let totalCost = null;

    cargoCart.forEach(function (cargoItem) {
        totalCost += cargoItem.totalPrice();
    })

    return (totalCost);
}

exports.runningWeightTotal = function (cargoCart) {
    let totalWeight = null;

    cargoCart.forEach(function (cargoItem) {
        totalWeight += cargoItem.totalWeight();
    })

    return (totalWeight);
}

exports.valdateValues = function (currentVal, newVal) {
    if (200 >= (currentVal + newVal)) {
        return (true);
    }
    return (false);
}



//console.log(createCargoParts());
//var cargoItm = [];
//
//var cargo = new Cargo(0, 1, 1, 1.00, 20)
//cargoItm.push(cargo);
//var cargo = new Cargo(0, 1, 3, 2.00, 20)
//cargoItm.push(cargo);
//var cargo = new Cargo(0, 1, 4, 4.25, 20)
//cargoItm.push(cargo);

//console.log(cargo)
//console.log(cargo.totalPrice());
//console.log(cargo.totalWeight());
//
//console.log(runningCostTotal(cargoItm), 'running cost');
//console.log(runningWeightTotal(cargoItm), 'running weight');
//
//console.log(valdateValues(30, runningWeightTotal(cargoItm))); // true
//console.log(valdateValues(60, runningWeightTotal(cargoItm))); // false
