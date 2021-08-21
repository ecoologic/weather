interface I1 {
  a: number;
}

interface I2 {
  a: number;
}

let i1: I1 = { a: 1 };
let i2: I2 = { a: 2 };

i2 = i1;



console.log(` i1, i2`, i1, i2);
