/*Object prototype chain and prototypal inheritance exercise.
1 Create a Person constructor that has three properties: name, job, and age.
2 Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3 Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
4 Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5 Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6 Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7 Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8 Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to incorporate the syntax.
 */


//classes are a template for creating objects
//classes allow you to set up blueprints for specific objects and extend the object. It organizes code and makes it reusable.
//classes can extend and inherit properties from other classes

//class declaration
class Person {
    //constructor is a method for creating and initializing an object created with a class (think of it like parameters of a function)
    constructor(name, job, age) {
        //"this" keyword specifies from which object to grab value/data from
        //this.name for example is saying name is a parameter of Person class
        this.name = name
        this.job = job
        this.age = age
    }
    //this is a function within a class 
    exercise ()  {
        console.log("Running is fun! - said no one ever")
    }
    //this is a function within a class
    fetchJob () {
        console.log(`${this.name} is a ${this.job}`)
    }
}

 
class Programmer extends Person{
    constructor( name, job, age, language = []) {
        super( name, job, age)
        this.language = language
        this.isBusy = true
    }

completeTask () {
    this.isBusy = false
}

acceptNewTask () {
    this.isBusy = true
}

offerNewTask () {
    this.isBusy === true ? console.log(`${this.name} can't accept any new tasks right now`) :  console.log(`${this.name} would love to accept any new tasks right now`)
}

learnLanguage (languageBeingLearned) {

    this.language.push(languageBeingLearned)
}

listLanguages () {

    console.log(this.language)
} 

}

 
const manny = new Programmer("Manny", "Software Engineer", 23, ["javscript"])
const deborah = new Programmer("Deborah", "Software Engineer Apprentice", 23, ["javscript"])


manny.completeTask()
manny.offerNewTask()
manny.listLanguages()
manny.learnLanguage("java")
manny.listLanguages()

 
deborah.completeTask()
deborah.offerNewTask()
deborah.listLanguages()
deborah.learnLanguage("java")
deborah.learnLanguage("python")
deborah.listLanguages()
 

manny.fetchJob()
manny.exercise()

 
const martin = new Person("Martin", "Engineer", 20)
 

martin.fetchJob()
martin.exercise()

 






