class Person{
    name:string;
    age:number;
    constructor(n1:string,n2:number)
    {
        this.name=n1;
        this.age=n2;
    }
    greet():void
    {
        console.log(`hii ${this.name}`)
    }
}

const obj1=new Person("Satyam",21);
const obj2=new Person("Ram",564);
console.log(obj1);
obj1.greet();

//public private protected
class Customer{
    name:string;
    age:number;
    balance:number

    constructor(name:string,age:number,balance:number)
    {
        this.name=name,
        this.balance=balance,
        this.age=age
    }
}
const p1=new Customer("Deepak",43,65474);
console.log(p1);

class Employee extends Customer{
    salary:number;
    constructor(salary:number,name:string,age:number,balance:number)
    {
        super(name,age,balance);
        this.salary=salary;
    }
}
const E1=new Employee(420,"Rohit",30,432);
console.log(E1);

//generic
//in generic data type ko generalize krte hai
function value<T>(a:T):T{
    return a;
}
console.log(value<number>(43));
console.log(value("Mohan"));
console.log(value([4,5,3,28]));
console.log(value(['ram','laxman','yadav']));

interface details<T>{
     name:string,
     age:number,
     salary:T
}
const obj6:details<number>={
    name:"Rohan",
    age:20,
    salary:43
}
console.log(obj6);

const obj7:details<string>={
    name:"Rohan",
    age:20,
    salary:"two thousand"
}
console.log(obj7);