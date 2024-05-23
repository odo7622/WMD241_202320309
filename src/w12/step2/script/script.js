console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "#d9d9d9";

let aCard = document.querySelector(".card");
console.log(aCard);
// html엘리먼트.addEventListener('이벤트종류', function () {할일});
aCard.addEventListener("click", function () {
  console.log("클릭!");
  // aCard.style.backgroundColor = '#ff0000';
  aCard.classList.toggle("card--state-clicked");
  // .안 쓰고 불러야함
  console.log(aCard.classList);
});

// document.querySelectorAll('card');
// 그냥 queryElector는 card 하나만 가져와줌. 처음에 있는것? / all은 card의 모든 친구를 가져와줌
// 토글
