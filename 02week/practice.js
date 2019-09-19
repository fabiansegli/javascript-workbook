let fruit1 = {
    name: "melon",
    possibleColors: ["yellow", "green", "white"],
    size: "medium",
    singleSeed: false
  }
  let fruit2 = {
    name: "peach",
    possibleColors: ["yellow", "orange", "peach"],
    size: "medium",
    singleSeed: true
  }
  
  let myFruits = [];
  myFruits.push(fruit1);
  myFruits.push(fruit2);
  //if i am hardcoding it would be:
  //console.log("The peach is a medium sized fruit with many seeds.")
  
  printDescription(fruit1);
  printDescription(fruit2);
  
  // let seedSubstring = "";
  // if(fruit1.singleSeed) {
  //   seedSubstring = "with a single seed";
  // } else {
  //   seedSubstring = "with many seeds";
  // }
  
  // console.log("The"+fruit1.name+"is a"+fruit1.size+"sized fruit with many seeds.")
  //helper function that prints a description of the fruit
  function printDescription(myFruit) {
  let seedSubstring = "";
  if(fruit1.singleSeed) {
    seedSubstring = "with a single seed";
  } else {
    seedSubstring = "with many seeds";
  }
  console.log("The "+fruit1.name+" is a "+fruit1.size+" sized fruit "+seedSubstring+",")
}
  
  