let jeffHeight =5
let toddHeight =8

let jeffMass=52
let toddMass=74

let bmiJeff=jeffMass/(jeffHeight*jeffHeight)
console.log(`BMI of JEFF is ${bmiJeff}`)

let bmiTodd=toddMass/(toddHeight*toddHeight)
console.log(`BMI of TODD  is ${bmiTodd}`)

let bmiComparison = (bmiJeff < bmiTodd) ? true:false;
console.log(`BMI of Jeff is less than BMI of Todd :${bmiComparison}`)
