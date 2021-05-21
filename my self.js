console.log function greet(){
console.log('hello marie')

 function warlds(name, lastName){;
    console.log('hello' +  name +lastName)
   }
  warlds('marie','louise');
}
greet();

var a=5,b=4
console.log(a+b);

var a=5,b=34,c=54,d=32
console.log(a+b+c);
 
var x=5,y=9,z=23,d="35"
console.log(x+y+z+d);
console.log(x==d);

var a="34"
console.log(a)

function numbers(a,b){;
    return a+''+b
}
console.log(numbers(2,5))

class Name{
constructor (firstName,lastName){;
this.firstName= firstName,
this.lastName=lastName
}
 fullName() {
  let x= this.firstName+ ' ' + this.lastName;
    return x;
}
}
let name= new Name('Muteteyimana','Marie louise')
//console.log(names("marie","louise"))
console.log(name.firstName);
console.log(name.fullName());



class Name{
    constructor(firstName,lastName){;
    this.firstName=firstName
    this.lastName=lastName
    }
fullName() {
    let x=new Name(this.firstName)
}