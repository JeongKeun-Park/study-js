const bigImage = document.querySelectorAll("img");
const upImage = document.querySelectorAll(".BannerItem_BannerItem__75Nv4");

bigImage.forEach((bigImage) => {
    bigImage.addEventListener("mouseover", () => {
        bigImage.style.transform = "scale(1.1)";
        bigImage.style.transition = "transform 0.1s";
    });

    bigImage.addEventListener("mouseout", () => {
        bigImage.style.transform = "scale(1)";
    });
});

upImage.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "translateY(-10px)";
        image.style.transition = "transform 0.2s ease";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "translateY(0)";
    });
});
