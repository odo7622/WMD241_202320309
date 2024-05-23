let elemBody = document.body;
elemBody.style.backgroundColor = "#0000ff";
// let aCard = document.querySelector(".card");
// // let aCard = document.querySelector(".card:nth-child(2)"); - card에서 두번째 애한테만 적용됨. (첫번째 애가 안됨))
// aCard.addEventListener("click", function () {
//   console.log("클릭!");
//   aCard.classList.toggle("card--state-clicked");
//   console.log(aCard.classList);
// });

let cards = document.querySelectorAll(".card");
console.log(cards);

for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    eachCard.classList.toggle("card--state-clicked");
  });
}

// cards.forEach((eachCard) => {
//   eachCard.addEventListener("click", function () {});
// });
// 각각의 요소를 부르기(forEach)
