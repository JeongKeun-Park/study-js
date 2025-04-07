const element = document.querySelector(".Button_Button__label__K0sBs");

function toggleClass() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        element.innerHTML = `
        <span class="mobileView">회원가입</span>
        `;
    } else {
        element.innerHTML = `
        <span class="Typography_Typography__root__RdAI1 Typography_Typography__label2__svmAA Typography_Typography__weightBold__KkJEY">회원가입/로그인</span>
        `;
    }
}

toggleClass();
window.addEventListener("resize", toggleClass);
