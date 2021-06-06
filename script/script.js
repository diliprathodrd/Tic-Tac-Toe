let sign = "X";
function game(val) {
  const x = document.getElementById("r" + val);

  if (x.innerText === "") {
    x.innerText = sign;
    check();
    if (sign === "X") {
      sign = "O";
    } else sign = "X";

    document.getElementById("turn").innerText = `Player ${sign} Turn`;
  }
}
function getno(a) {
  b = document.getElementById("r" + a).innerHTML;
  return b;
}
function checkmove(a, b, c, z) {
  if (getno(a) == z && getno(b) == z && getno(c) == z) return true;
  else return false;
}
function check() {
  if (
    checkmove(1, 2, 3, sign) ||
    checkmove(4, 5, 6, sign) ||
    checkmove(7, 8, 9, sign) ||
    checkmove(1, 4, 7, sign) ||
    checkmove(2, 5, 8, sign) ||
    checkmove(3, 6, 9, sign) ||
    checkmove(1, 5, 9, sign) ||
    checkmove(7, 5, 3, sign)
  ) {
    cleardata();

    document.getElementById(
      "winner"
    ).innerHTML = `Player ${sign} is the Winner!!! <br> Click on Refresh to start new Game`;
  } else {
    if (
      getno(1) != "" &&
      getno(2) != "" &&
      getno(3) != "" &&
      getno(4) != "" &&
      getno(5) != "" &&
      getno(6) != "" &&
      getno(7) != "" &&
      getno(8) != "" &&
      getno(9) != ""
    ) {
      document.getElementById("tie").innerHTML =
        `Its a tie <br> Click on Refresh to start new Game`;
      cleardata();
    }
  }
}
function cleardata() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("r" + i).innerHTML = "";
  }
  document.getElementById("turn").innerHTML = "";
}
function refreshPage() {
  window.location.reload();
}
