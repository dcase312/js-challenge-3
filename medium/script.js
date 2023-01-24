// Write a function that will allow you to calculate how many slices of pizza x 
//each person y would get if they shared evenly. The function should return an 
//interpolated string like Each person gets 4.00 slices of pizza; from our 8 slice 
//pizza x being a decimal in case there is no way to split the pizza evenly.

//const x = slicesOfPizza
//const y = numberOfPeople
const slicesPerPerson = (slicesOfPizza, numOfPeople) => {
    let sum = slicesOfPizza/numOfPeople
   const calculatedOutcome = () => {
   console.log(`Between ${numOfPeople} people, each person gets ${sum.toFixed(2)} slices of pizza from our ${slicesOfPizza} sliced pizza`)
}
calculatedOutcome()
}
slicesPerPerson(8,3)
slicesPerPerson(10,5)
slicesPerPerson(21,13)



