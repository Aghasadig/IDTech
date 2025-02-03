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


// sertli operatorlar
// tek/cut func

// function myFunc(x){
//     if(x%2==0){
//         console.log("bu eded cutdur");
//     } else{
//         console.log("bu eded tekdir");
//     }
// }

// console.log(myFunc(5));

// en boyuyu tapan func
// function myFunc(x,y,z){
//     if(x>=y && x>=z){
//         console.log(x ,"bu eded en boyukdur");
//     } else if(y>=x && y>=z){
//         console.log(y , "bu eded en boyukdur");
//     } else{
//         console.log(z ," bu eded en boyukdur");
//     }
// }

// console.log(myFunc(5,7,9));


// fesil tapan func

// function myFunc(x){
//     if(x==12 || x==1 || x==2){
//         console.log("hal hazirda qi$dasiz");
//     } else if(x==3 || x==4 || x==5){
//         console.log("hal hazirda yazdasiz");
//     } else if(x==6 || x==7 || x==8){
//         console.log("hal hazirda yaydasiz");
//     } else{
//         console.log("hal hazirda payizdasiz");
//     }
// }

// console.log(myFunc(8));


// sade eded func


// const sadeEded=(eded) =>{
//     if(eded<2) return false;

//     for( let i=2; i<eded; i++){
//         if(eded%i===0) return false;
//     }

//     return true;
// }

// console.log(sadeEded(3));



//   getElementById ilə elementi tapın və mətnini dəyişin

//    const newTitle = document.getElementById('title').innerText="New Title";


   

// querySelector ilə elementi tapın və class əlavə edin =>

// const addNewClass = document.querySelector('p').classList.add('new-class');


//  Yeni element yaradın və DOM-a əlavə edin

// const p = document.getElementById('title');

// const newElement = document.createElement('p');
// newElement.textContent = "This is a new paragraph"

// p.appendChild(newElement);


//  Elementi silin  =>

    // const elementRemove = document.getElementById('title');

    // elementRemove.remove()




    // 5. Element attributlarını dəyişin =>

        // const newAtributeSet = document.getElementById('title');
        
        // newAtributeSet.setAttribute('title','new-title');
