const weightFont = document.querySelectorAll(".noneFont");
const listView = document.querySelectorAll(".listHide");
const hide = document.querySelector(".Explore_emptyTagList__hF1or");

weightFont.forEach((weightFont, i) => {
    let hideList = listView[i];

    weightFont.addEventListener("mouseenter", () => {
        weightFont.classList.add("weightFont");
        hideList.classList.add("listView");
        hideList.classList.remove("listHide");
        hide.classList.add("hidden");
        hide.classList.remove("Explore_emptyTagList__hF1or");
    });

    weightFont.addEventListener("mouseleave", () => {
        weightFont.classList.remove("weightFont");
        hideList.classList.add("listHide");
        hideList.classList.remove("listView");
        hide.classList.add("Explore_emptyTagList__hF1or");
        hide.classList.remove("hidden");
    });
});
