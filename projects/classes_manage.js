/*
Capstone number 3
Three employee classes will inherit from super Employee class, inheriting methods and classs attributes.
The various classes will override some methods to calcuate their monthly pay, based on different perentages of increase
and wage types / sales targets.
*/
class Employee {
    constructor(name, employeeType, salesTarget, salesNumber, monthlyPay) {
        this.name = name;
        this.employeeType = employeeType;
        this.salesTarget = salesTarget;
        this.salesNumber = salesNumber;
        this.monthlyPay = monthlyPay;
    } 
    getName() {
        console.log('Employee name is:',this.name);
    }
    getType() {
        console.log('Employee type:',this.employeeType);
    }
    addSalesFigure(sales) {
        this.salesNumber += sales;
    } 
    getSalesFigures() {
        console.log('Sales numbers', this.salesNumber);
    }
    monthlyPayOut() {
        console.log(`The monthly pay is: £${this.monthlyPay}`);
    }

}
// sub class to inherit from Employee
class SalariedEmployee extends Employee {
    constructor(name, employeeType, salesTarget, salesNumber, monthlyPay) {
        super(name, employeeType, salesTarget, salesNumber, monthlyPay);
        this.finalPay;
    }
    monthlyPayOut() {    
        let tenPercent = this.monthlyPay / 10;
        if(this.salesNumber > this.salesTarget) {
            this.finalPay = this.monthlyPay + tenPercent
            console.log(`Employee name: ${this.name}, employee type: ${this.employeeType}, payout: £${this.monthlyPay} + £${tenPercent} = final pay of: £${this.finalPay}`);
        } else {
            console.log(`Employee name: ${this.name}, employee type: ${this.employeeType}, payout: £${this.monthlyPay}`);
        }
    }

}
// sub class to inherit from Employee
class HourlyEmployee extends Employee {
    constructor(name, employeeType, salesTarget, salesNumber, monthlyPay, hourlyPay, hoursWorked) {
        super(name, employeeType, salesTarget, salesNumber, monthlyPay);
        this.hourlyPay = hourlyPay;
        this.hoursWorked = hoursWorked;
        this.finalPay;
    } // overridden class that calculates and adds hours worked.
    monthlyPayOut() {  
        let baseSalary = this.hourlyPay * this.hoursWorked;
        let increasedRate = this.hourlyPay + this.hourlyPay / 2;
        if(this.salesNumber > this.salesTarget) {
            this.finalPay = increasedRate * this.hoursWorked;
            console.log(`Employee name: ${this.name}, employee type: ${this.employeeType}, \n payout: because of your 50% increase due to hitting your sales targets. your pay is calculated as: \n ${this.hoursWorked} hours worked x £${increasedRate} = £${this.finalPay}`);
        } else {
            this.monthlyPay = baseSalary;
            console.log(`The monthly pay is: £${this.monthlyPay} \n calculated as: ${this.hourlyPay} * ${this.hoursWorked}`);
        }
    }
}
// sub class to inherit from Employee
class HybridEmployee extends HourlyEmployee {
    constructor(name, employeeType, salesTarget, salesNumber, monthlyPay, hourlyPay, hoursWorked) {
        super(name, employeeType, salesTarget, salesNumber, monthlyPay, hourlyPay, hoursWorked);
        this.finalPay;
    } 
    // overriden class that also takes into account a 20% increase if condition of hours met.
    monthlyPayOut() {  
        if(this.salesNumber > this.salesTarget) {
            this.hourlyPay += this.hourlyPay / 5;
            let additionalPay = this.hourlyPay * this.hoursWorked;
            this.finalPay = this.monthlyPay + additionalPay;
            console.log(`Employee name: ${this.name}, employee type: ${this.employeeType}, \n payout: because of your 20% increase due to hitting your sales targets. your pay is calculated as: \n £${this.hoursWorked} * £${this.hourlyPay } + ${this.monthlyPay} = £${this.finalPay}`);
        } else {
            let additionalPay = this.hourlyPay * this.hoursWorked;
            this.finalPay = this.monthlyPay + additionalPay;
            console.log(`The monthly pay is: £${this.finalPay} it is calculated as: \n ${this.monthlyPay} + ${this.hourlyPay} x ${this.hoursWorked}`)
        }
    }
}

// creating instances of the different sub classes
let dale = new SalariedEmployee('Dale', 'Salaried', 100, 0, 6000);
dale.addSalesFigure(50);
dale.getName();
dale.getSalesFigures();
dale.monthlyPayOut();
let grant = new SalariedEmployee('Grant', 'Salaried', 50, 0, 5000);
grant.addSalesFigure(100);
grant.monthlyPayOut();
//hourly employee
let sam = new HourlyEmployee('Sam', 'Hourly', 1000, 0, 0, 50, 500);
sam.addSalesFigure(1200);
sam.monthlyPayOut()
let orange = new HourlyEmployee('Don', 'Hourly', 100, 0, 0, 20, 300);
orange.addSalesFigure(90);
//hybrid employee;
let hybrid = new HybridEmployee('Hybrid', 'Hybrid', 5000, 0, 2000, 50, 100);
hybrid.monthlyPayOut()
let darren = new HybridEmployee('darren', 'bent', 1000, 0, 4000, 100, 200);
darren.monthlyPayOut();


