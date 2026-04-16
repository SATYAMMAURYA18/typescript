let num:number=10;

//interface
interface person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number//question mark gives optional.
}

const obj:person={
    name:"Rohit",
    age:30,
    gender:"Common",
}

interface customer{
    name:string,
    age:number,
    balance:number
}


//interface ke sare property are optional.
const obj2:Partial<customer>={
name:"rohit",
balance:210
}


//interface ke sare property ko lena hai
const obj3:Required<customer>={
name:"rohit",
balance:210,
age:30
}


//interface ke kisi bhi property ko change nhi kr skte
const obj4:Readonly<customer>={
name:"rohit",
balance:210,
age:30
}
//obj4.age=50//it will give error because obj4 is readonly.


//we also can build array of object
let arr:customer[]=[{
    name:"Rohit",
    age:45,
    balance:89834
},
{
    name:"Mohit",
    age:25,
    balance:747848
}
]


//function in ts
function greet(a:number):number
{
   console.log(a);
   return a+5;
}
let b=greet(10);
console.log(b);

function meet(msg:string,val:number):void
{
    console.log(msg,val);
}
meet("Ellie Nova",43);

//default parameter
function neet(msg:string="Satyam")
{
    console.log(msg);
}
neet();
neet("Bittu");

//optional parameter
function Gate(person?:string)
{
    console.log(person||"Satyam");
}
Gate("Rohit");
Gate();

//arrow function
const sum=(a:number,b:number)=>{
    return a+b;
}
console.log(sum(4,5));

//callback
type chill=(amount:number)=>void;
function placeOrder(order:number,callback:chill):void
{
   const amount=order+10;
   callback(amount);
}
placeOrder(10,(amount)=>{
    console.log(amount);
})
//rest parameter
function total(...arr:number[])
{
   let ans=0;
   arr.forEach((val)=>{
    ans+=val;
   });
   console.log(ans);
}
total(1,2,3,4,3,2,1,56,765);
