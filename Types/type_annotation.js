"use strict";
// let myFavNum:number=10;
// let myFullName:string="Primce Yadav"
// myFavNum="prince yadav" //you cant assign a string value in number type
// console.log(myFavNum.toString());
// let sum1=myFavNum+20;
// console.log(sum1);
//NUMBER TYPE => the number type represents numeric values, including integers and floating-point numbers.
let myNum = 18;
let myAge = 23;
let pi = 3.14;
let myNegVal = -50;
// let invalidResult:number= myAge+"years"; // type string is not assignable to number
// let invalidValue:number="123" // type string is not assignable to number
let computedValue = Math.sqrt(16);
console.log(computedValue);
let nanValue = NaN;
console.log("nanValue=> ", nanValue);
//--------------------------
// STRING TYPE=> any value under single or double quotes are treated as string, also any exp. result string as output
//--------------------------
let fistName = "Prince ";
let lastName = "Yadav";
let fullName = fistName + lastName;
console.log(fullName);
//String Length
let sentence = "hello i am a developer";
let sentenceLength = sentence.length;
console.log(sentenceLength);
// uppercase and lowercase
let text = "Hello I am Prince Yadav";
let uppercaseText = text.toLocaleUpperCase();
let lowercaseText = text.toLocaleLowerCase();
console.log("initial Text=> ", text);
console.log("UpperCase Text=> ", uppercaseText);
console.log("LowerCase Text=> ", lowercaseText);
//Substring
let longText = "hey i am learning TypeScript and Angular for becoming a frontend developer";
let shortText = longText.substring(0, 10); //Extract the first 10 characters from longText
console.log(shortText);
//String comparison
let str1 = "hey i am prince";
let str2 = "hey i am prince yadav";
let areEqual = str1.includes(str2);
console.log(areEqual);
//String Template
let product = "Nike";
let price = 25;
let res = `The product ${product} is priced at ${price} dollars`;
console.log(res);
