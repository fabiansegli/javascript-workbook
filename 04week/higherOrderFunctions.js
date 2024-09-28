//Array.prototype.forEach

  // const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

  // colors.forEach((color) => {
  //   console.log(`My favorite color is ${color}`);
  // });
 
//  let friends = ['Mike', 'Stacy', 'Andy','Rick'];

//  friends.forEach(function(eachName, index){
//    console.log(index + 1 + '.' + eachName);
//  });

// let recipe = ['Ingredients', 'Time', 'Directions']

// recipe.forEach(function(eachStep, index){

//   console.log("Step ", index + 1 +'.' + eachStep);
// });


//  //Array.prototype.map

// const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

//   const tieDyes = colors.map((color) => {
//     return `tieDyed-${color}`;
//   });

//   console.log(tieDyes);

  //Array.prototype.filter

  // const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

  // const chosenLength = colors.filter((color) => {
  //   //return color.length > 5;
  //   return color.length === 5;
  // });
  
  // console.log(chosenLength);

//forEach loop

// const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

// //   colors.forEach((color) => {
// //     console.log(`My favorite color is ${color}`);
// //   });

// // build a function that returns the sentence: "The color we're on right now is: orange"
// //   // remember to invoke the function
// //   const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

// colors.forEach((color) => {
// console.log(`The color we're on right now is: ${colors[0]}`);
// });

//map
 // Build a function that return the sentence: `The user's name is: ${name}`
  // remember to invoke the function
  // const users = ['Olivia', 'Victoria', 'Paulina', 'Yolanda', 'Georgina', 'Bill'];

  //   const usersName = users.map(name =>  `${name}`);
  //     console.log("The user's name is:", `${usersName}`);
    
//filter
// build a function that only returns words that are less than 4 letters in length
  // remember to invoke the function
//   const colors = ['peaceful', 'red', 'ants', 'lovely', 'bud', 'witness', 'purple', 'clouds'];
//   const fourWordsLetters = colors.filter((color) => {
//   return color.length < 4;
//   });
//   console.log(fourWordsLetters);

  //***Practice forEach- filter- map- sort - reduce - List of Companies ***//
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company NIne', category: 'Retail', start: 1981, end: 1989},

];

const ages = [ 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop

// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

//forEach

// companies.forEach(function(company, index, companies) {
// console.log(company);
// });

//*** for loop***

// let canDrink = [];
// for(let i=0; i < ages.length; i++){
// if(ages[i] >= 21){
//     canDrink.push(ages[i]);
// }
// }
// console.log(canDrink, " You are not a minor!");

//filter 

// const canDrink = ages.filter(function(age) {
//     if(age >= 21){
//         return true;
//     }

// });

// const canDrink = ages.filter(age  => age >= 21);
// console.log(canDrink);

//Filter the retail companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === "Retail")
// console.log(retailCompanies);

//Get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <=1990));//company.end <=2000
// console.log(eightiesCompanies);

//Get companies that lasted 10 years of more

// const lastedTenYears = companies.filter(company => (company.end - company.start === 10));
// console.log(lastedTenYears);

//map

 //Create array of company names
//  const companyNames = companies.map(function(company){
//      return company.name;
//  });
//  console.log(companyNames);

//Get companies names and start/end dates

//  const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

//ES6 fat arrow function
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);


//Get companies name and categories

//ES6 fat arrow function

// const nameAndCategory = companies.map(company => `${company.name} - ${company.category}`);
// console.log(nameAndCategory);

// Square root Math.sqrt()

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimeTwo = ages.map(age => age * 2);
// console.log(agesTimeTwo);

// // Square all the numbers and multiply them by 2

// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// // console.log(ageMap);

//sort
//By start year

// const sortedCompanies = companies.sort(function(c1, c2) {
// if(c1.start > c2.start) {
//     return 1;
// } else {
//     return -1;
// }
// });
// console.log(sortedCompanies);

//***Conditional (ternary) operator "?" and (else) ":"***//
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
 
//Sort ages *b -a* reverse sort//
// const sortAges =ages.sort((a, b) => a - b); //**b -a** reverse sort//
// console.log(sortAges);


// let legalAge = 18;
// let beverage = (legalAge >= 21) ? "Beer" : "Juice";
// console.log(beverage);

//Reduce
//for Loop
// let ageSum = 0;
// for(let i=0; i < ages.length; i++) {
//     ageSum += ages[i];
// };
// console.log(ageSum);

//function 
// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

// console.log(ageSum);

//ES6 fat arrow
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//Get total years for all companies
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);
//ES6 fat arrow
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);
// console.log(totalYears);

//***Combine Methods ***//

// const combined = ages
// .map(age => age * 2)
// .filter(age => age >= 40)
// .sort((a, b) => a - b)
// .reduce((a, b) => a + b, 0)

// console.log(combined);

// some()
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 
const nums = [33, 12, 21, 18, 6, 60, 9, 42, 63, 24, 15, 48, 27, 51, 54];

// nums.some(num => num >= 5);
// nums.some(num => num >=100);

//every()
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 

// nums.every(num => num >= 100);
//nums.every(num => num < 100);

//reduce()
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let totalNums = nums.reduce((total, sums) => total + sums, 0);
console.log(totalNums);