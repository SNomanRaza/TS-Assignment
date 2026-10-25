//Q1:

// const { setTimeout } = require("node:timers/promises")
// let numbers = [10,20,30,40,50,60]
// let [A,B,C,D,E,F] =numbers
// console.log(A);
// console.log(B);
// console.log(D);


//Q2: 

// let student ={
//     name : "Rahul",
//     age : 21,
//     city : "Mumbai"
// };
// let {name,age, city:studentCity,course="unknown"} = student
// console.log(name);
// console.log(age);
// console.log(studentCity);
// console.log(course);


// Q3:

// let numbers = [2,5,8,10,15,20]
// let square = numbers.map(numbers=> numbers*numbers)
// let greater = numbers.filter(numbers=>numbers>=20)
// let sum = numbers.reduce((total,numbers)=> total+numbers)
// console.log(square);
// console.log(greater);
// console.log(sum);


// Q4 

// let student = [
//     {name:"Amit",marks:75},
//     {name:"Priya",marks:90},
//      {name:"Rahul",marks:45},
//      {name:"Sneha",marks:80},

// ]

// let passedStudents = student.filter(student=>student.marks>60);
// console.log(passedStudents);
// let names = student.map(student=> student.name);
// console.log(names);
// let total = student.reduce((sum,student)=> sum+student.marks,0)
// let average = total/student.length;
// console.log(average);


//Q5:

// class BankAccount {
//     accountHolder=12565;
//     balance=10000;
//     deposit(amount){
//         console.log("Balance"+(amount+this.balance));     
//     }
//     withdraw(amount){
//         console.log("Withdraw"+amount);
//     }
// }
// const b = new BankAccount();
// b.deposit(2000);
// b.withdraw(7000);

//Q6:  

// class Person {
//     name;
//     age;
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
// }
// class Emp extends Person{
//     employeeId;
//     salary
//     constructor(employeeId, salary , name , age){
//         super(age,name)
//         this.employeeId = employeeId;
//         this.salary = salary
//     }
//     displayInfo(){
//         console.log(this.name+this.age+this.employeeId+this.salary);
//     }
// }
// const e = new Emp(1,98300,"Noman",21);
// e.displayInfo();


//Q7:

// class InvalidAgeNumber extends Error{    
//     constructor(message){
//         super(message);
//         this.name = "invalid age"
//     }
// }
// function check_age(age){
//     try {
//         if(age>18){
//             console.log("Valid Age");           
//         }else{
//             throw new InvalidAgeNumber("Invalid Age")
//         }
//     } catch (error) {
//         console.log(error.name+":"+error.message);
//     }
// }
// console.log(check_age(12))


//Q8:

//  class InvalidAmountError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "invalidAmountError"
//     }
//  }

//  class InsufficentAmountError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "InsufficentAmountError"
//     }
//  }

//  let balance = 1000;
//  function withdraw(amount) {
//     try {
//     if (amount<=0) {
//         throw new InvalidAmountError("Invalid Amount")
//     } else if(amount>balance) {
//         throw new InsufficentAmountError("Insufficient Balance ")
//     }else{
//         console.log(this.balance-amount);
//     }
//  } catch (error) {
//        console.log(this.name+":"+this.message);
//     }
// }
//  withdraw(0)
// withdraw(500)


//Q9: 

// const taskPromise =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task completed sucessfully....");
//   }, 2000);
// })
// taskPromise.then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log("error"+":"+error);
// })


//Q10 

// function checkNumber (number) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (number>0) {
//             resolve("Positive Number")
//         } else {
//             reject("Invalid number")
//         }
//       }, 2000);
//     })
// }
// checkNumber(-10).then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


// Q11:

// const mysql = require('mysql2');
// const db = mysql.createConnection({
//     host : "localhost",
//     user:"root",
//     password: "Sayyed@21",
//     database: "SMS"
// });
// db.connect((err)=>{
//     if (err) {
//         throw err
//     } else {
//         console.log("DB Connected Sussecfully");
//     }
// })

// function insertData(id,name,course,email) {
//     sql = "insert into students values(?,?,?,?,?)"
//     db.query(sql,[id,name,course,email],(err,result)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Data inserted ");
//         }
//     })
// }

// function showData() {
//     sql="select * from students";
//     db.query(sql,(err,result)=>{
//        if (err) {
//          console.log(err);
//        } else {
//         console.log(result);
//        }
//     })
// }


// function deleteData(id) {
//     sql = "delete from students where id = ?"
//     db.query(sql,[id],(err,result)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Data deleted ");
//         }
//     })
// }

// function UpdateData(id,name) {
//     const sql = "update students set name =? where id =?"
//     db.query(sql,[name,id],(err,result)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Data updated ");
//         }
//     })
// }

// function SearchData(data) {
//     const sql = "select * from students where name like ?"
//     db.query(sql,[`%${data }%`],(err,result)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//     })
// }

//insertData(1,"Tom",21,"IT","NR@gmail.com")
//UpdateData(1,"Jerry")
//SearchData("J")
//deleteData(1)
//showData()


