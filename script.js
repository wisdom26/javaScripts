var S="hello world"; //String
var N=26; //number
var B=true; //Boolean
var A=["HTML","CSS","JS"]; //Array
var O={first:"Vivek",last:"Maurya"};  //Object
var N=null;  //null
var U; //Undefined

let Aa="hello world"; 
const PI= 3.14;



document.write(S);
document.write(A);
document.write(PI);
document.write(typeof D);

//Arithmetic Operators

var a=40;
var b=30;

var c=a+b; // Addition
var c=a-b; //Subtraction
var c=a*b; //Multiplication
var c=a*b; //Exponentiation
var c=a/b; // Division
var c=a%b; //Modulus(Remainder)
var c=a++; //Increment
var c=b--; //Decrement

document.write(c);

// Assignment Operators
a=b
a+=b; //a=a+b
a-=b; //a=a-b
a*=b; //a=a*b
a/=b; //a=a/b
a%=b; //a=a%b
a**=b; //a=a**b
document.write(a);
//comparison Operators true or false
a==b; //equal to
a===b; //equal value and equal type
a!=b; //not equal
a!==b;// not equal value and not equal type
a>b; // greater than
a<b; //less than
a>=b; //greater than or equal to
a<=b; //less than or equal to

//my topic  

//If Statement
 var z=19;

 if (z>18){
document.write("Z is greater");
 };

 //logical Operators

//  && Logical AND
//  || Logical OR
//  !  Logical NOT
var age =20;
if(age>=18 &&age<=21){
    document.write("Logical AND");
}
if(age>=18||age<=21){
    document.write("Logical OR");
}
if (!age>=18){
    document.write("Logical NOT");
}

//If and Else
if(age>=18){
    document.write("You are 18 are 18+");
}else{
    document.write("You are not 18 are 18+");
}

var name='Vivek';
var gender="male";

if(gender =="male"){
    document.write("Hello Mr."+ name);
}else{
    document.write("Hello Miss"+ name);
}
 
//If and Else If
var time=9;
if(time<10){
    document.write("Hello! Good Morning "+ name);
}else if(time>10){
    document.write("Hello! Good Afternoon "+ name);
}else{
    document.write("Hello! Good Night "+ name);
}


// ternary Operator
var q=78;
var t ="Value is :"+(q>50?t="True":t="False");
document.write(t);

//Switch Statement
var day=3;
switch(day){
    case 1:document.write("Today is Monday");
    break;
    case 2:document.write("Today is Tuesday");
    break;
    case 3:document.write("Today is Wednesday");
    break;
    case 4:document.write("Today is Thursday");
    break;
    case 5:document.write("Today is Friday");
    break;
    case 6:document.write("Today is Saturday");
    break;
    case 7:document.write("Today is Sunday");
    break;
    default: document.write("Enter the valid day");
}
 
var f=20;
switch(true){
    case (f>=15&&f<=20):document.write("You are Eligible");
    break;
    case (f>=21&&f<=30):document.write("You are not Eligible");
    break;
    default: document.write("Enter the valid age");
}
alert("hello"); 

//longhand 
function add(a,b){
    return a+b;
}
// shortHand
const add=(a,b)=>a+b;

//for loop

const sub=['English','math','science'];
//longhand
for(let i=0;i<sub.length;i++){
    document.write(sub[i]);
}
// shortHand
for (let s of sub){
    document.write(sub);
}

// swap two variables
let a=10; b=30;
//longhand
const temp=a;
a=b;
b=temp;
// shortHand
[a,b]=[b,a]

//longhand
let str='';
for(let i=0;i<3;i++){
str+='hello\n';
}
document.write(str);
// shortHand
let strs='hello\n';
a=strs.repeat(3);
document.write(a);