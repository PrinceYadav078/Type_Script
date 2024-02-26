
// let myFavNum:number=10;
// let myFullName:string="Primce Yadav"

// myFavNum="prince yadav" //you cant assign a string value in number type

// console.log(myFavNum.toString());

// let sum1=myFavNum+20;
// console.log(sum1);

//NUMBER TYPE => the number type represents numeric values, including integers and floating-point numbers.

let myNum:number=18;
let myAge:number=23;
let pi:number=3.14;
let myNegVal:number=-50;

// let invalidResult:number= myAge+"years"; // type string is not assignable to number

// let invalidValue:number="123" // type string is not assignable to number

let computedValue:number= Math.sqrt(16);
console.log(computedValue);

let nanValue:number=NaN;
console.log("nanValue=> ", nanValue)


//--------------------------
// STRING TYPE=> any value under single or double quotes are treated as string, also any exp. result string as output
//--------------------------

let fistName="Prince "
let lastName="Yadav";
let fullName=fistName+lastName;

console.log(fullName);


//String Length
let sentence:string="hello i am a developer";
let sentenceLength:number= sentence.length;
console.log(sentenceLength);


// uppercase and lowercase

let text:string="Hello I am Prince Yadav";
let uppercaseText:string=text.toLocaleUpperCase();
let lowercaseText:string=text.toLocaleLowerCase();

console.log("initial Text=> ",text)
console.log("UpperCase Text=> ",uppercaseText)
console.log("LowerCase Text=> ",lowercaseText)

//Substring

let longText:string="hey i am learning TypeScript and Angular for becoming a frontend developer";
let shortText:string=longText.substring(0,10); //Extract the first 10 characters from longText
console.log(shortText)

//String comparison

let str1="hey i am prince";
let str2="hey i am prince yadav";
let areEqual:boolean=str1.includes(str2);
console.log(areEqual)

//String Template

let product:string="Nike";
let price:number=25;
let res:string=`The product ${product} is priced at ${price} dollars`
console.log(res);

