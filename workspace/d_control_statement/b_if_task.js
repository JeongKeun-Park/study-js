const MESSAGE = `당신의 혈액형은?
1. A
2. B
3. O
4. AB`;
console.log(MESSAGE);

const A_MESSAGE = "꼼꼼하고 세심하다.";
const B_MESSAGE = "추진력이 좋다.";
const O_MESSAGE = "사교성이 좋다.";
const AB_MESSAGE = "착하다.";
const ERROR_MESSAGE = "다시 시도해주세요.";

let choice = 5;
let resultMESSAGE = null;

if (choice === 1) {
    // 분기
    resultMESSAGE = A_MESSAGE;
} else if (choice === 2) {
    // 분기
    resultMESSAGE = B_MESSAGE;
} else if (choice === 3) {
    // 분기
    resultMESSAGE = O_MESSAGE;
} else if (choice === 4) {
    // 분기
    resultMESSAGE = AB_MESSAGE;
} else {
    // 분기
    resultMESSAGE = ERROR_MESSAGE;
}

console.log(resultMESSAGE);
