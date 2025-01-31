const headers = document.querySelectorAll('.accordion-item-header');

  headers.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active")
    })
  })


















 