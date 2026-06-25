/*import { add, divide, minus, multiply,modulus } from "./math.js";
/*import * as Math from "./math.js";   ถ้าต้องการทั้งหมดใช้แบบนี้ได้*/
/*
const a =38;
const b = 19;

console.log(`${a} + ${b} = ${add(a,b)}`);
console.log(`${a} - ${b} = ${minus(a,b)}`);
console.log(`${a} * ${b} = ${multiply(a,b)}`);
console.log(`${a} / ${b} = ${divide(a,b)}`);
console.log(`${a} % ${b} = ${modulus(a,b)}`);
*/

/*
console.log(`${a} + ${b} = ${Math.add(a,b)}`);
console.log(`${a} - ${b} = ${Math.minus(a,b)}`);
console.log(`${a} * ${b} = ${Math.multiply(a,b)}`);
console.log(`${a} / ${b} = ${Math.divide(a,b)}`);
console.log(`${a} % ${b} = ${Math.modulus(a,b)}`);
*/

import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);


