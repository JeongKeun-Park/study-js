// 숫자가 양수면 The number is positive. 를 출력
// 숫자가 0이면 The number is zero. 를 출력
// 숫자가 음수면 The number is negative. 를 출력

// let number = -1;
// let plus = number > 0;
// let minus = number < 0;
// let plusMessage = "The number is positive.";
// let zeroMessage = "The number is zero.";
// let minusMessage = "The number is negative.";
// let resultMessage = null;

// if (plus) {
//     resultMessage = plusMessage;
// } else if (minus) {
//     resultMessage = minusMessage;
// } else {
//     resultMessage = zeroMessage;
// }

// console.log(resultMessage);

// 사용자가 입력한 나이에 따라 다음과 같은 메시지를 출력하세요
// 18세 미만이면 "미성년자입니다."
// 18이상 65미만이면 "성인입니다."
// 65이상이면 "노년층입니다."

let age = 16;
let child = 18 > age;
let old_age = 65 <= age;

let childMessage = `미성년자입니다.`;
let adultMessage = `성인입니다.`;
let old_ageMessage = `노년층입니다.`;
let resultMessage = null;

if (child) {
    console.log(childMessage);
} else if (old_age) {
    console.log(old_ageMessage);
} else {
    console.log(adultMessage);
}

// if문 박살냄
