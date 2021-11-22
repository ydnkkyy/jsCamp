function addToCart(quantity, productName='Elma') {
    console.log("Sepete eklendi : " + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

function addToCard2(productName, quantity, unitPrice) {
    
}

addToCard2("Elma", 2, 10)
addToCard2("Armut", 5, 15)
addToCard2("Limon", 3, 22)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)

}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3

product2.productName = "Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(...numbers) { //rest
    let total = 0 
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]   
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30,20,500,250,600,70]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name: "İç Anadolu", popolation: "20M"}, 
    {name: "Marmara", popolation: "30M"}, 
    {name: "Karadeniz", popolation: "15"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ] 
]

console.log(icAnadolu)
console.log(marmara)

console.log(icAnadolu.name)
console.log(icAnadolu.popolation)

console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
    = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

