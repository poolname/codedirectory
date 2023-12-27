let maximum = parseInt(prompt("Enter the maximum number!")); // 
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!")); // 
}

const targetNum = Math.floor(Math.random() * maximum) + 1; // 랜덤 정수 값

let guess = parseInt(prompt("Enter your first guess!")); // 정수(프롬포트(첫 수치(?)를 넣으세요))
let attempts = 1; // 무한루프 막는 초기화 값(?)

while(parseInt(guess) !== targetNum) { // 반복문 while의 정수 guess가 targetNum이 아닌 경우
    if (guess === 'q') break; // guess가 'q'일 때 멈춤
    attempts++; // 1로 초기화
    if (guess > targetNum) { // guess가 targetNum보다 클 때
        guess = prompt("Too high! Enter a new guess:"); // guess가 "더 높습니다! 새로 guess 값을 넣어 주세요"
    } else {
        guess = prompt("Too low! Enter a new guess:"); // guess가 "더 낮습니다! 새로 guess 값을 넣어 주세요"
    }
}
console.log(`You got it! It took you ${attempts} guesses`); // 맞췄습니다! (?)