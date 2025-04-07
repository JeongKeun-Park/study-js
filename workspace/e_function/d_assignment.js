// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력

// const fullname = (first, last, callback) => {
//     let result = first + last;
//     if (callback) {
//         callback(result);
//     }
// };
// // name 자리에는 fullname함수의 result값이 들어감
// const add = (name) => {
//     console.log(`${name}님`);
// };

// let result = fullname("박", "정근", add);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴

// const check = (price, total, callback) => {
//     let count = total / price;
//     let result = count <= 5;
//     if (callback) {
//         callback(count, result);

//     }
//     return result;
// };

// const result = (count, result) => {
//     console.log(`총 갯수 : ${count}`);
//     console.log(`5개 이하 여부 : ${result}`);
// };

// check(1000, 6000, result);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력

const sum = (price, count, callback) => {
    if (callback) {
        callback(price, count);
    }
    // return count;
};

const pay = (price, status) => {
    if (status === true) {
        console.log(`${price}원 결제 완료`);
    } else {
        console.log(`${price}원 결제 취소`);
    }
};

sum(1000, true, pay);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력
// const farm = (cow, pig, callback) => {
//     if (callback) {
//         callback(cow, pig);
//     }
// };

// const compare = (cow, pig) => {
//     if (cow > pig) {
//         console.log(`${pig}`);
//     } else {
//         console.log(`${cow}`);
//     }
// };

// farm(5, 6, compare);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격

// const score = (korean, english, meth, callback) => {
//     let total = korean + english + meth;
//     let totalscore = total / 3;
//     if (callback) {
//         callback(totalscore);
//     }
//     // return totalscore;
// };

// const printresult = (totalscore) => {
//     if (totalscore >= 60) {
//         console.log(`${totalscore}점 합격입니다.`);
//     } else {
//         console.log(`${totalscore}점 불합격입니다.`);
//     }
// };

// score(60, 70, 70, printresult);

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력

// const sum = (number, callback) => {
//     let score = 0;
//     for (let i = 0; i < number; i++) {

//         score += i + 1;
//     }
//     if (callback) {
//         callback(score);
//     }
// };

// const printresult = (score) => {
//     if (score >= 5000) {
//         console.log(`${score - 5000}점 입니다.`);
//     } else {
//         console.log(`${score}점 입니다.`);
//     }
// };

// sum(90, printresult);

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// const find = (n, m, callback) => {
//     let evennumber = 0;
//     for (let i = n; n < m; i++) {
//         if (i % 2 === 0) {
//             evennumber = i;
//             break;
//         }
//     }
//     if (callback) {
//         callback(evennumber);
//     }
// };

// const printresult = (evennumber) => {
//     if (evennumber % 2 === 0 && evennumber >= 10) {
//         console.log(`${evennumber}은 ture`);
//     } else {
//         console.log(`${evennumber}은 false`);
//     }
// };

// find(5, 100, printresult);

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false

// const result = (number1, number2, callback) => {
//     let minus = number1 - number2;
//     let multiply = number1 * number2;
//     if (callback) {
//         callback(minus, multiply);
//     }
// };

// const printresult = (minus, multiply) => {
//     if (minus >= 5 || multiply >= 50) {
//         console.log(`true`);
//     } else {
//         console.log(`false`);
//     }
// };

// result(7, 5, printresult);
