// function decraration
var x=function patatoes(){

}
x()

// function depretion
// var x=function Patatoes(){


//     }
//     function add (a,b){
//         return a+b;
//     }
//     console.log(add(2,5))

// arrow function
    let add=(a,b)=> {return a+b};
    console.log(add(4,9));

    let sum=(d,f)=>{
        let x=42;
        return d+f+x;
    }
    console.log(sum(4,7));

//immediately invocked function
(function(){
    console.log("hy anitaB")
})();

((x,y)=>{
    console.log(x+y+100);
})(1,2)

// let sum=(a,b)=>a+b+100
// console.log((3,4))

// an object
let Car={
    color:"white",
    make:"subari",
    origin:"japan",
    other:(country)=>{
        console.log(`These cars are exported to ${country}`)
    }
};
Car. other(`kenya`)

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

// callback
function favNumber(x,callback){
    console.log(x+ 'is my favorite number');
    callback();
}
function otherNumber(){
    console.log(456);
}
favNumber(56,otherNumber)

// function findLargest(f,r,r,t,y,y,t){
//     let number=[t,y,u,i,t];
//     let largest=e;
//     for(let num of number){
//         if(num>largest)
//     }
// }



