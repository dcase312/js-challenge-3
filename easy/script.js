//A local gym wants to implement an "exercise of the day" program where there is a 
//free class that day that promotes a certain exercise. The gym needs some backend 
//logic that will update its system to reflect which exercise will be promoted that 
//day. Write a function that will take as an input the name of an exercise and console
//log a message like Today's exercise: running Note: you should only write one 
//function that can dynamically print the value of the exercise for that day, and it 
//must be a closure


const exercise = (string) => {
    let todaysExercise = string
    const displayExercise = () => {
        console.log(` Today's exercise is: ${todaysExercise} `)
    }
    displayExercise()
}


exercise("swimming")
exercise("running")