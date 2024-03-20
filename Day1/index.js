const ans = document.getElementById("ans");
const inputItem = document.getElementById("input");
ans.innerText = "Lol You did't Have enter the value";
inputItem.addEventListener("input", function (e) {
  const value = e.target.value;
  if (!value) {
    ans.innerText = "Lol You did't Have enter the value";
  }
  if (value) {
    const formattedValue = value.split("");
    const total = formattedValue.reverse().reduce((acc, val, i) => {
      val = parseInt(val) * 2 ** i;
      return acc + val;
    }, 0);
    ans.innerText = `Ans : ${total}`;
  }
});
