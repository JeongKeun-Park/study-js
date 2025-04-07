// 반복문은 항상 몇 번 반복인지부터 확인한다.
// 나중을 위해서 i의 초기값은 0으로 설정한다.
// 어렵다면 i의 초기값을 원하는 값으로 설정한다.

// 1 ~ 100까지 출력
// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
// }

// 100 ~ 1까지 출력
// for (let i = 0; i < 100; i++) {
//     console.log(100 - i);
// }

// 1 ~ 100까지 중 짝수만 출력
// for (let i = 0; i < 50; i++) {
//     console.log((i + 1) * 2);
// }

// 1 ~ 10까지 총 합 출력
// total을 기본값으로 준다. for문 안에서 i+1 값을 따로 저장해놓기 위해서
let total = 0;
for (let i = 0; i < 10; i++) {
    //     // total = total + i + 1;
    total += i + 1;
    //      total = 0 + 0 + 1;
    //      total = 1 + 1 + 1
    //      total = 3 + 2 + 1
    //      total = 6 + 3 + 1
    //      total = 10 + 4 + 1
    //      total = 15 + 5 + 1
    //      total = 21 + 6 + 1
    //      total = 28 + 7 + 1
    //      total = 36 + 8 + 1
    //      total = 45 + 9 + 1
}
console.log(total);

// 0 1 2 0 1 2 0 1 2 출력
// for (let i = 0; i < 9; i++) {
//     console.log(i % 3);
// }

// 1 ~ 5까지 중 2 제외하고 출력
// for (let i = 0; i < 4; i++) {
// 0 1 2 3
// 1 3 4 5
//     console.log(i > 0 ? i + 2 : i + 1);
// }

// 1~10까지 중 3 6 제외하고 출력
// 0 1 2 3 4 5 6 7
// 1 2 4 5 7 8 9 10
// for (let i = 0; i < 8; i++) {
//     console.log(i < 2 ? i + 1 : i < 4 ? i + 2 : i + 3);
// }
