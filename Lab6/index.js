let menuIcon = document.querySelector(".menu-icon")
let menuNav = document.querySelector(".mobile-nav")
let remove = document.querySelector(".remove")


menuIcon.addEventListener('click', ()=>{
    menuNav.classList.add("active")
})

remove.addEventListener('click', ()=>{
     menuNav.classList.remove("active")
})



