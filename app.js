let numberBox = document.querySelector("#numberBox");
const plus = document.querySelector("#plus");
const my_minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let my_number = 0;

plus.addEventListener("click", function () {
  my_number++;
  numberBox.value = my_number;
});

my_minus.addEventListener("click", function () {
  my_number--;
  numberBox.value = my_number;
});

reset.addEventListener("click", () => {
  my_number = 0;
  numberBox.value = my_number;
});
