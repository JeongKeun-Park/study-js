const albumLayout = (() => {
    const showAlbum = (albums) => {
        const div = document.getElementById("albums");

        let text = ``;

        albums.forEach(({ userId, id, title }) => {
            text += `
                <ul ${userId == 1 && "class='back'"}>
                    <li>UserId: ${userId}</li>
                    <li ${"class=blue"}>Id: ${id}</li>
                    <li ${"class=purple"}>Title: ${title}</li>
                 </ul>
                `;
        });

        div.innerHTML = text;
    };
    return {
        showAlbum: showAlbum,
    };
})();
