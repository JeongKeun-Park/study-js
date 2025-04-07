const largeList = document.querySelectorAll(".hidden");
const touch = document.querySelector(".Menu_MenuItem__eIHY7");

touch.addEventListener("mouseover", () => {
    largeList.forEach((largeList) => {
        if (largeList.classList.contains("hidden")) {
            largeList.classList.add("viewList");
            largeList.classList.remove("hidden");
        }
    });
});

touch.addEventListener("mouseout", () => {
    largeList.forEach((largeList) => {
        if (largeList.classList.contains("viewList")) {
            largeList.classList.add("hidden");
            largeList.classList.remove("viewList");
        }
    });
});
