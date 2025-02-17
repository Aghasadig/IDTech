const input = document.querySelector("#my-input");
const playBtn = document.querySelector(".play-btn");
const message = document.querySelector(".message");
const guessCount = document.querySelector(".guess-count");
const btnWrapper = document.querySelector(".btn-wrapper");

let arr = [];
let counts = 3;
let randomNumber = Math.floor(Math.random() * 100 + 1);

console.log("your random number is ", randomNumber);

playBtn.innerHTML = "Başla";

playBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (counts === 3) {
    playBtn.innerHTML = "Yaxşı fikirləş";
  }

  let inputValue = Number(input.value);
  counts--;

  if (inputValue === randomNumber) {
    message.innerHTML = ` Təbriklər ${3 - counts} dəfəyə bildiniz`;
    playBtn.disabled = true;
  } else if (inputValue > randomNumber) {
    message.innerHTML = "Daha kiçik rəqəm qeyd et";
  } else if (inputValue < randomNumber) {
    message.innerHTML = "Daha böyük rəqəm qeyd et";
  }

  if (counts === 0) {
    // message.innerHTML = "Sadəcə 3 şansın var idi!";
    alert("Sadəcə 3 şansın var idi!");
    playBtn.disabled = true;
    btnWrapper.innerHTML = `<button class="play-btn" onclick="startNewGame()">Yeni Oyun</button>`;
  }

  arr.push(inputValue);
  guessCount.innerHTML = `Qalan şanslar: ${counts}  <br> Etdiyin təxminlər: ${arr.join(", ")}`;

  input.value = "";
});

function startNewGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log("your random number is ", randomNumber);
  counts = 3;
  arr = [];
  message.innerHTML = "Hələki heçnə fikirləşə bilməmisən";
  guessCount.innerHTML = `Qalan şanslar: ${counts}`;
  btnWrapper.innerHTML = `<button class="play-btn">Başla</button>`;
  playBtn.disabled = false;
}
