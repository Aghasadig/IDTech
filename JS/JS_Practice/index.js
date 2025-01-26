// // 1.

// let numString = "42";
// let boolString = "true";
// let mixedArray = ["123","456","789"];
// let nullValue = null;

// // 1 - answer
// let convertToNumber = Number(numString);
// let convertToBoolean = Boolean(boolString);
// let convertArrayToNumber = mixedArray.map((item) => Number(item));
// let convertNullToBoolean = Boolean(nullValue);

// console.log(convertArrayToNumber,convertNullToBoolean,convertToBoolean,convertToNumber);


// .2.

// let sample1 = NaN;
// let sample2 = [1,2,3];
// let sample3 ="";
// let sample4 = 0;
// let sample5 = {name:"John"};



// // 2 - answer

// console.log({
//     sample1: typeof sample1,
//     sample2: typeof sample2,
//     sample3: typeof sample3,
//     sample4: typeof sample4,
//     sample5: typeof sample5,
//   });

//   console.log({
//     isInstanceOfArray: sample2 instanceof Array,
//     isInstanceOfObject: sample5 instanceof Object,
//   });
  
//   console.log(Array.isArray(sample2));
  

// .3.

// let text = " Javascript is awsome ";

// 3 - answer

// text = text.trim(); 
// text = text.replaceAll(" ","");
// text = text.toLocaleUpperCase();
// text = text.replace("IS","WAS");
// text = text.split();

// let textLength = text.length;




// console.log(text, textLength);


// .4.

// let user={
//     firstName:"Ali",
//     lastName:"Memmedov",
//     age:25,
//     email:"ali@example.com",
// }

// // 4 - answer

//     console.log(
//         `Hormetli ${user.firstName} ${user.lastName}, sizin ${user.age} yasiniz var.`
//       );

//       console.table(user)

//       console.log(user.email.split('@'));
      




// .5.

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let fruits = ["alma", "armud", "banan", "gilas", "uzum"];

// // 5 - answer

// let number = numbers.filter((num) => num % 2 == 0);
// let numberCube = numbers.map( (num) => num**3);
// let numberSum = numbers.reduce((acc,cur) => acc+cur,0);
// let fruitsAlphabet = fruits.sort();
// let fruitsPush = fruits.push("alca");
// let fruitsPop = fruits.pop();
// let fruitsShift = fruits.shift();
// let fruitsUnshift = fruits.unshift("heyva")


      

// console.log(
//     number, numberCube, numberSum, fruitsAlphabet, fruitsPush, fruitsPop, fruitsShift, fruitsUnshift
// );


// .6.

let students = [
    { id: 1, name: "Aygun", grades: [85, 90, 92] },
    { id: 2, name: "Elcin", grades: [75, 85, 88] },
    { id: 3, name: "Nigar", grades: [95, 88, 91] },
    { id: 4, name: "Orxan", grades: [70, 65, 72] },
  ];

  
  




// 6 - answer

