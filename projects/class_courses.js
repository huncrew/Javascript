/*
Program to show the sub class subjects inherits the methods/class attributes from the parent Course class
We then create a few instances to demonstrate this.
*/
class Courses {
    constructor(courseName = 'CS', contactWebsite = 'CS.org') {
        this.courseName = courseName;
        this.contactWebsite = contactWebsite;
      
    }
    display() {
        console.log(`Course information,  ${this.courseName}, the website of the course- ${this.contactWebsite}`);
    }
} // sub class that inherits and will use the inherited method.
class Subjects extends Courses {
    constructor(courseName = 'CS', contactWebsite = 'CS.org', studentName = 'Dale', age='28') {
        super(courseName, contactWebsite);
        this.studentName = studentName;
        this.age = age;
    }
    //overrides parent class function
    display() {
        console.log(`The course name is ${this.courseName}, the website is ${this.contactWebsite}, the student name is ${this.studentName}, age is ${this.age}`)
    }
}
// instances
let maths = new Subjects('maths', 'math.org', 'dale', 28);
let computerScience = new Subjects('cs', 'cs.org', 'grant', '29');
let physics = new Subjects('physics', 'py.org', 'bradley', 30);

physics.display();