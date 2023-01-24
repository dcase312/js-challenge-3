/* Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. 
The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called 
through a public function. The ssn property should not be accessible at all. Creating private objects and private properties helps 
you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers 
from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, 
people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn */


//a variable that takes in a function with 2 parameters 
const personDetails = function(personName, personSsn){
    //has an object holding the two parameters 
    let pii = {
        name : personName,
        ssn : personSsn

     }
     //function returns an object that holds 2 methods
     return {
        getName : () => {
            return pii.name
        },
        getSsn : () => {
            return pii.ssn
        }
     }
}

const patientOne = personDetails('Deborah', 312312312)


// when calling on a method, you need () to let javascript know you're calling on a method which is a funtion within an object 
console.log(patientOne.getName())
console.log(patientOne.getSsn())

//undefined
console.log(patientOne.name)
//undefined
console.log(patientOne.ssn)
