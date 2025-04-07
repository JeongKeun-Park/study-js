const bannerThird = document.querySelectorAll(".slideBannerThird");
// 슬라이드가 돌아가야하는 배너가 5개 All로 받는다
let checkTrue = document.querySelectorAll(".wds-di6ctj");
let checkFalse = document.querySelectorAll(".wds-13trpip");
// 화살표 색을 바꿀때 사용할 클래스 두개
// css에 클래스마다 색이 입혀져있다.
let rightButton = document.querySelectorAll("button.nextButton");
let leftButton = document.querySelectorAll(".previousButton");
// 버튼 클래스 두개.

bannerThird.forEach((bannerThird, i) => {
    // 5개를 봐야하기때문에 forEach사용
    let count = 0; // 조건문과 슬라이드 이동범위를 정하기 위한 변수
    let right = rightButton[i];
    let left = leftButton[i];
    // disabled값을 받기 위해 생성한 객체변수
    let attackRight = checkTrue[i];
    let attackLeft = checkFalse[i];
    // 클래스를 추가하고 삭제하기 위한 객체변수

    left.addEventListener("click", () => {
        // 왼쪽 화살표를 누를때에 이벤트
        if (count > 0) {
            // count가 0보다 클때
            count--; // count의 숫자가 1씩 감소
            bannerThird.style.transform = `translate(-${1420 * count}px)`;
            // count의 수에따라 이미지가 1420 * count 값의 픽셀로 이동
            bannerThird.style.transition = `transform 0.6s ease-in-out`;
            // transform이 변하는 시간 0.5초
            attackRight.classList.add("wds-di6ctj");
            // 왼쪽화살표를 눌렀을때 위의 클래스를 오른쪽화살표에 추가하여
            // 화살표 버튼이 막혔던걸 풀어준다.
            if (count === 0) {
                // count가 0이라는건 더이상 왼쪽으로 갈 수 없기때문에
                attackLeft.classList.remove("wds-di6ctj");
                // 왼쪽화살표버튼을 더 누를 수 없도록 막아주기위해 위의 클래스를 지워준다.
            }
        }
        right.disabled = false;
        left.disabled = count === 0;
    });

    right.addEventListener("click", () => {
        if (count < 3) {
            count++;
            bannerThird.style.transform = `translate(-${1420 * count}px)`;
            bannerThird.style.transition = `transform 0.6s ease-in-out`;
            attackLeft.classList.add("wds-di6ctj");
            if (count === 3) {
                attackRight.classList.add("wds-13trpip");
                attackRight.classList.remove("wds-di6ctj");
            }
        }
        left.disabled = false;
        right.disabled = count === 3;
    });
});
