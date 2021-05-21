var a=5,b=4
console.log(a+b);
var a=5,b=34,c=54,d=32
console.log(a+b+c);
let item={
    item1:"orange",
    item2:"Mango",
    item3:"Kiwi",
    item4:"peach",
    cost:function(orangePrice,mangoPrice,kiwiPrice,peachPrice){
        return `I am buying 3 ${item.item1} at ${orangePrice*3} ,6 ${item.item2}
        at ${mangoPrice*6},2 ${item.item4} at ${peachPrice*2} and ${item.item3}
        at 1 ${kiwiPrice}`
    },
};
console.log(item.cost(20,45,65,50))
let Car={
    color:"white",
    make:"subari",
    origin:"japan",
    other:(country)=>{
        console.log(`These cars are exported to ${country}`)
    }
};
Car. other(`Rwanda`)
