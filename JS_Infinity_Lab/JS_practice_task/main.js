// task - 1

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", ()=>{
//     document.body.classList.toggle("white-btn")
// })


// task - 2

// let count = 0;
// let minus = document.querySelector(".minus");
// let plus = document.querySelector(".plus");

// minus.addEventListener("click", () => {
//     count--
//     let p = document.querySelector(".counter").innerHTML=count;
// });

// plus.addEventListener("click", () => {
//     count++
//     let p = document.querySelector(".counter").innerHTML=count;
// });


// task 3

// let btn = document.querySelector(".btn");
// let input = document.querySelector(".input")
// btn.addEventListener("click", (e) => {
// e.preventDefault()
//     if(input.type == "password"){
//         input.setAttribute("type","text");
//          btn.innerHTML = "Bagla"
//     }
//     else{
//         input.setAttribute("type","password");
//         btn.innerHTML = "Goster"

//     }
   
// })



// task 6

const btn = document.querySelector("#btn");

btn.addEventListener("click" , () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Zəhmət olmasa, bütün sahələri doldurun!");
        return false;
    }
    return true; 
})





























// task 7


// document.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         alert("Enter düyməsi basıldı!");
//     } else if (event.key === "Escape") {
//         console.log("Escape düyməsi basıldı. Konsolda görəcəksiniz.");
//     } else if (event.key === "ArrowUp") {
//         console.log("Yuxarı ox düyməsi basıldı.");
//     } else if (event.key === "ArrowDown") {
//         console.log("Aşağı ox düyməsi basıldı.");
//     }
// });