/* Your Code Here */
const calculatePayroll = function(records){
  let employeeTotal = records.map((employee) => {
    return allWagesFor.call(employee)
});

let payroll = employeeTotal.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);
return payroll;
}

const createEmployeeRecord = function (arrayOfRecords) {
  let testEmployee = {
   firstName: arrayOfRecords[0],
   familyName: arrayOfRecords[1],
   title:arrayOfRecords[2],
   payPerHour: arrayOfRecords[3],
   timeInEvents: [],
   timeOutEvents: [],
 };
 return testEmployee;
};


const createEmployeeRecords = function (recordsArray){
return recordsArray.map(element => {
 return  createEmployeeRecord(element);
})
}

const createTimeInEvent = function(date){
 let myDate = date.split(" ");
 let inTime = {
   type: "TimeIn",
   hour: parseInt(myDate[1]),
   date: myDate[0],
 };
this.timeInEvents = [...this.timeInEvents, inTime];
return this;
}


const createTimeOutEvent = function(date){
 let myDate = date.split(" ");
 let outTime = {
   type: "TimeOut",
   hour: parseInt(myDate[1]),
   date: myDate[0],
 };

 this.timeOutEvents = [...this.timeOutEvents, outTime];
 return this;
}


const hoursWorkedOnDate = function(date){
for (let i = 0; i < this.timeInEvents.length; i++) {
 if (date === this.timeInEvents[i].date) {
   let arrivalTime = this.timeInEvents[i].hour;
   let departureTime = this.timeOutEvents[i].hour;
   let timeTaken = departureTime - arrivalTime;
   return timeTaken / 100;
 }
}
}


const wagesEarnedOnDate = function(date){
 let timeTaken = hoursWorkedOnDate.call(this, date);
 return timeTaken * this.payPerHour;
}


const findEmployeeByFirstName = function(srcArray,firstName){
let selectedArray = srcArray.find((element)=>{
return element.firstName === firstName;
})
return selectedArray;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
