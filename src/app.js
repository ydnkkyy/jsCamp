console.log("Merhaba Kodlama.io")

// JS type safe değildir
let dolarDun = 9.20
let dolarBugun = 9.30

const euroDun = 11.20

console.log(euroDun)

//array
let konutKredileri = ["Özel Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Taşıt Kredileri"]

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"<li>")
    
}


console.log(konutKredileri)



let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},

]

console.log("<ul>")
products.map(product=>console.log('<li>'+product.name+'</li>'))
console.log("</ul>")


let filteredProducts = products.filter(product=>product.unitPrice>12000)

console.log(filteredProducts)

let cartTotal = products.reduce((acc, product)=>acc + product.unitPrice, 0)

console.log(cartTotal)

let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p 
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)