// data라는 변수명을 let이라는 선언자를 통해 전역변수로 선언
// 10의 값이 data라는 변수로 들어가게 된다.
let data = 10;

// 출력 함수
console.log(data);

// data에 들어가있는 10이라는 값을 지우고 20이라는 값을 설정한다.
data = 20;
console.log(data);
// 변수에 타입을 확인하기 위한 출력 함수.
// 정수 타입이기에 number로 표기
console.log(typeof data);

data = "안녕";
console.log(data);
// 문자열 이기에 string으로 표기
console.log(typeof data);
