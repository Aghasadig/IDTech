let addBtn = document.querySelector(".add-btn");
let inputValue = document.querySelector(".input");
let todoList = document.querySelector(".todo-list");
let counter = document.querySelector(".todo-counter");
let lastAddedTime = document.querySelector(".last-added-time-screen");

let myTodo = [];
let count = 0;

addBtn.addEventListener("click", () => {
  if (inputValue.value.length > 0) {
    count++;
    let currentTime = new Date().toLocaleString();
    myTodo.push({
      value: inputValue.value,
      id: count,
      time: currentTime,
    });
    addTodo();
    inputValue.value = "";
    updateLastAddedTime(currentTime);
  }
});

function addTodo() {
  todoList.innerHTML = "";
  myTodo.map((item) => {
    todoList.innerHTML += `
        <li class="todo-list-item"> ${item.value} <button class="btnRemove" data-id="${item.id}"> <b> X </b> </button>  </li>
        `;
  });
  updateCounter();
  removeToDo();
}

function removeToDo() {
  let removeBtn = document.querySelectorAll(".btnRemove");
  removeBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const toDoId = item.getAttribute("data-id");
      myTodo = myTodo.filter((item) => item.id !== Number(toDoId));
      addTodo();
    });
  });
}

function updateCounter() {
  counter.innerHTML = ` <p class="counter-screen"> ${myTodo.length} </p>   `;
}

function updateLastAddedTime(time) {
  lastAddedTime.innerHTML = `<p class="last-added-time-screen"> DATE:  <br>  ${time}</p>`;
}
