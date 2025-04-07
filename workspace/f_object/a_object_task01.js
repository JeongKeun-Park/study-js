// 상품 정보를 객체로 구성한다.
// 상품 번호, 상품명, 가격, 재고-1, 재고-2
// 각 정보를 출력하되, 재고-1과 재고-2는 반복문을 사용해서 출력한다.
// 재고-1이 실재고이고, 재고-2는 기타재고이다. 단, key값을 동일한 stock이다.
// 상품 정보에 재고-1을 사용하여 총 가격을 리턴하는 메소드를 선언한다.

// const information ={};
// information.number = 10;
// information.name = "객체";...
const information = {
    number: 10,
    name: "객체",
    price: 1000,
    "stock-1": 5,
    "stock-2": 10,
    totalPrice: () => {
        return information.price * information["stock-1"];
    },
};

//with(객체명){}
//중괄호 안에서 사용하는 것들은 with에 작성한 객체의 프로퍼티에서도 찾아준다.
// 반복적으로 객체명을 사용해야 할때 사용한다.
with (information) {
    console.log(number, name, price);
    information["stock-1"];
    console.log("check1");
    for (let i = 0; i < 2; i++) {
        console.log(information[`stock-${i + 1}`]);
    }
    console.log(totalPrice());
}
