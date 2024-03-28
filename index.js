// function addFive(someNumber) {

// let result
//   if (someNumber > 0){
//     result = someNumber + 5
//   }
//   return result
// }
// addFive(10)

// addFive(20)

// addFive(-5)



function scuberGreetingForFeet(feet){
  
  if(feet<= 400){
    return "This one is on me!"
  } 
  else if (feet >= 400 && feet <= 2000){
    return "That will be twenty bucks."
  }
  else if (feet > 2000 && feet <= 2500 ){
    return "I will gladly take your thirty bucks."
  }
  else 
    return "No can do."
  
  
}
console.log(feet(200))




function ternaryCheckCity(destination){
return  destination === "NYC"?"Ok, sounds good." : "No go."

}
  ternaryCheckCity("NYC")


function switchOnCharmFromTip(Tip){
let charm =""
  switch (true) {
    case Tip === "generous" :
      charm = "Thank you so much."
      break;
  case Tip === "not as generous":
    charm = "Thank you."
    break
  default:
      charm =  "Bye."
      break;

  }
  return charm
 }
// console.log(switchOnCharmFromTip("not as generous"))