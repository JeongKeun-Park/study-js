const button = document.getElementById("get-album");

button.addEventListener("click", (e) => {
    albumService.getAlbums(albumLayout.showAlbum);
});
