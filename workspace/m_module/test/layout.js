const photoLayout = (() => {
    const showPhotos = (photos) => {
        const wrap = document.getElementById("photo-wrap");
        let text = ``;
        photos.forEach(({ thumbnailUrl }) => {
            text += `<div><img src="${thumbnailUrl}"></div>`;
        });

        wrap.innerHTML = text;
    };

    return { showPhotos: showPhotos };
})();
