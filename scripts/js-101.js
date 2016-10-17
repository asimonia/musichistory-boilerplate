var songs = [];


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//  Each student must add one song to the beginning and the end of the array.
songs.unshift('Blasphemous Rumors - by Depeche Mode on the album Some Great');
songs.push('Fat Old Sun - by Pink Floyd on the album Atom Heart Mother');

//	Loop over the array and remove any words or characters that obviously don't belong.

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace(/\@|\*|\(|\!/g, "");
	console.log(songs[i]);
}

// Create a songs list object and add the songs to the object

songsList = {};
songsList.name = [];
songsList.artist = [];
songsList.album = [];



for (var j = 0; j < 4; j++) {
	songsList.name.push(songs[j].slice(0, songs[j].indexOf(" -")));
	songsList.artist.push(songs[j].slice(songs[j].indexOf("by ") + 3, songs[j].indexOf("album ") - 8));
	songsList.album.push(songs[j].slice(songs[j].indexOf("album ") + 6, songs[j].length));
}

// Display the songs on the DOM

for (var h = 0; h < 4; h++) {
	document.getElementById("name" + h).innerHTML = songsList.name[h];
	document.getElementById("artist" + h).innerHTML = songsList.artist[h];
	document.getElementById("album" + h).innerHTML = songsList.album[h];
}