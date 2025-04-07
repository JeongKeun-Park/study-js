// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

function Martcustomer(name, age, point) {
    this.name = name;
    this.age = age;
    this.point = point;
}

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500
const hong = new Martcustomer("홍길동", 30, 3500);

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0
const lee = new Martcustomer("이순신", 22, 0);

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500
const jang = new Martcustomer("장보고", 66, 9500);

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
const mart = [hong, lee, jang];
console.log(mart[1].name, mart[1].point);
// const mart = {
//     customer1: hong,
//     customer2: lee,
//     customer3: jang,
// };

// for (let i = 0; i < 3; i++) {
//     console.log(mart[`customer${i + 1}`].name);
// }
