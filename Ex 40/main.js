function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toLocaleUpperCase() + artist.slice(1),
        title: title.charAt(0).toLocaleUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Ali", "light");
console.log(album);
album = makeAlbum("Bilal", "red wave");
console.log(album);
album = makeAlbum("Mubashir", "seenbreez");
console.log(album);
