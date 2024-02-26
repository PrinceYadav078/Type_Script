console.log("I am Prince Yadav");
let num: number = 25;

// num="prince";  this gives a error because num is number type so string value cant assign in number type variable

num = 50;
console.log(num);

const sum = (a: number, b: number): number => {
    return a + b;
};

console.log(sum(2, 8));
