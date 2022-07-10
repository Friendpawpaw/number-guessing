let lifeStill = 5;
const ranNum = Math.ceil(Math.random() * 99);
let LowerNum = 0;
let HigherNum = 100;

while (lifeStill > 0) {
  console.log(ranNum);
  let UserInput = prompt(
    `you need to guess a number inside ${LowerNum} - ${HigherNum} and you have ${lifeStill} chance(s) left`
  );
  if (UserInput > ranNum && UserInput < HigherNum) {
    HigherNum = UserInput;
  } else if (UserInput < ranNum && UserInput > LowerNum) {
    LowerNum = UserInput;
  }
  if (Number(UserInput) === ranNum) {
    alert(`Game Over, you win~ You still have ${lifeStill} chance(s)`);
    break;
  }
  lifeStill--;
}
if (lifeStill === 0) {
  alert("Game Over, you lose");
}
