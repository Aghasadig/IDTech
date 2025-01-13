// // 1

// function getElementIndex(array, index) {
//     const element = array.find((array, i) => i === index);
//     return element; 
//   }
  
//   console.log(getElementIndex([10, 20, 30, 40], 2)); 





//  2

// function removeElements(array) {
    
//     const result = array.slice(3);
//     console.log(result); 
//   }
  
 
//   const myArray = [1, 2, 3, 4, 5, 6];
//   removeElements(myArray); 
  
  



//  3

// function removeElement(array=[], a) {
//     const filteredArray = array.filter(element => element !== a);
//     return filteredArray; 
//   }
  
 
//   console.log(removeElement([1, 2, 3], 2)); 



// // 4

// function countNegativeValues(array) {

//     const negativeValues = array.filter(element => element < 0);
//     return negativeValues;
//   }
  

//   console.log(countNegativeValues([1, -2, 2, -4])); 


// // 5

// function calculateAverage(array) {
   
//     const sum = array.reduce((acc, curr) => acc + curr, 0);
    

//     const average = sum / array.length;
    
//     return average; 
//   }
  
//   console.log(calculateAverage([10, 100, 45])); 