const button = document.querySelector(".listTouch");
const hideMore = document.querySelectorAll(".noneMore");

button.addEventListener("mouseenter", () => {
    hideMore.forEach((hideMore) => {
        if (hideMore.classList.contains("noneMore")) {
            hideMore.classList.add("viewList");
            hideMore.classList.remove("noneMore");
        }
    });
});

button.addEventListener("mouseleave", () => {
    hideMore.forEach((hideMore) => {
        if (hideMore.classList.contains("viewList")) {
            hideMore.classList.add("noneMore");
            hideMore.classList.remove("viewList");
        }
    });
});
