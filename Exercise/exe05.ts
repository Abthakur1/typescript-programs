//https://www.scaler.com/topics/typescript/typescript-date/

let date  = new Date();
console.log(date.getFullYear()); // 2024
console.log(date.getDate()); //19
console.log(date.getDay()); //2
console.log(date); // 2024-03-19T05:25:58.649Z

// date.setFullYear(2022);
// console.log(date); //2022-03-19T05:27:38.807Z

let datePrev = new Date();
datePrev.setFullYear(2020);
console.log(date > datePrev) // true

let date1 = new Date('2023-09-29');
console.log(date1);