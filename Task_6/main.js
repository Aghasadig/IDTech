const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.textContent = "Adding to Cart...";
  btn.disabled = true;

  setTimeout(() => {
    alert("ADDED TO CARD");

    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.disabled = false;
    }, 2000);
  }, 3000);
});
