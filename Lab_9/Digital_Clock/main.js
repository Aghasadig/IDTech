let clockScreen = document.querySelector(".clock");

function clock() {
  const today = new Date();
  let h = today.getHours().toString().padStart(2, 0);
  let m = today.getMinutes().toString().padStart(2, 0);
  let s = today.getSeconds().toString().padStart(2, 0);
  setTimeout(clock, 1000);

  clockScreen.innerHTML = `
       <p>  ${h} : ${m} : ${s} </p>
     `;
}

clock();
