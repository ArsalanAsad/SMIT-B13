//Objects

//let  testObj  =  {};
//console.log(typeof  testObj);  //  ->  object

//Creation of Objects

let  testObj  =  {
	nr:  600,
	str:  "text"
};
console.log(testObj.nr);  //  ->  600
console.log(testObj.str);  //  ->  text

let  name1  =  "Calvin";
let  surname1  =  "Hart";
let  age1  =  66;
let  email1  =  "CalvinMHart@teleworm.us";
   
let  name2  =  "Mateus";
let  surname2  =  "Pinto";
let  age2  =  21;
let  email2  =  "MateusPinto@dayrep.com";

let  user1  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};

//add in object
console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557

//delete in object
console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined

//ARRAY

let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
   
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined

let animals  =  [];
console.log(animals[0]);  //  ->  undefined
   
animals[0]  =  "dog";
animals[2]  =  "cat";
   
console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat

let  values  =  ["Test",  7,  12.3,  false];

let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
   
let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia
