// 4개의 자물쇠가 있다.
// 각 좌물쇠는 조건식으로 이루어져있고,
// 모든 조건식이 true가 되어야 자물쇠가 열린다.
// 각 자물쇠의 조건식은 아래와 같다.

// 1. 첫 번째 정수가 짝수인지
// 2. 두 번째 정수가 양수인지
// 3. 세 번째 숫자가 0이 아닌지
// 4. 네 번째 숫자가 5의 배수인지

// 정수 4개를 정해서서

// 위의 모든 조건식이 true라면 좌물쇠가 열린다.
// swtich문을 사용해서 해결한다.
// 단, 논리 연산자는 사용하지 않는다.

let first = 2 % 2 === 0;
console.log(first);
let second = 6 > 0;
console.log(second);
let third = 7 !== 0;
console.log(third);
let fourth = 5 % 5 === 0;
console.log(fourth);
let result = first + second + third + fourth;
console.log(result);
let trueMessage = "OPEN";
let falseMessage = "FALSE";
let resultMessage = null;

switch (result) {
    case 1:
        resultMessage = falseMessage;
        break;
    case 2:
        resultMessage = falseMessage;
        break;
    case 3:
        resultMessage = falseMessage;
        break;
    case 4:
        resultMessage = trueMessage;
        break;
    default:
        resultMessage = falseMessage;
        break;
}

console.log(resultMessage);
