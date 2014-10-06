var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '244',
  width: '400',
  loadPlaylist: {
  	listType:'playlist',
//add new video ids here.
  	list: ['5NRuD9Y0JQ0', 'KNByf1o4T_8', 'RPyQAF2SkrE', 'UPW8y6woTBI', '0YuSg4mts9E', '_nW5AF0m9Zw', 'dCCXq9QB-dQ', '3j4I0PqNzKE', 'fmI_Ndrxy14', 'YlUKcNNmywk'],
  	index: parseInt(0),
  	suggestedQuality: 'small'
  },
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});
}

function onPlayerReady(event) {
	event.target.loadPlaylist(['5NRuD9Y0JQ0', 'KNByf1o4T_8', 'RPyQAF2SkrE', 'UPW8y6woTBI', '0YuSg4mts9E', '_nW5AF0m9Zw', 'dCCXq9QB-dQ', '3j4I0PqNzKE', 'fmI_Ndrxy14', 'YlUKcNNmywk']);
// event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING) {
	  setTimeout(nextVideo, 20000);
	  var plIndex = player.getPlaylistIndex(); 
	  	if (plIndex == 0) player.seekTo(39);
	  	if (plIndex == 1) player.seekTo(50);
	  	if (plIndex == 2) player.seekTo(25);
	  	if (plIndex == 3) player.seekTo(20);
	  	if (plIndex == 4) player.seekTo(35);
	  	if (plIndex == 5) player.seekTo(55);
	  	if (plIndex == 6) player.seekTo(120);
	  	if (plIndex == 7) player.seekTo(73);
	  	if (plIndex == 8) player.seekTo(83);
	  	if (plIndex == 9) player.seekTo(85);
	}
}
function nextVideo() {
	var plIndex = player.getPlaylistIndex();
	if (plIndex == 9) {
		showFinal();
	} else {
		player.nextVideo();
		$('input').prop('checked', false);
	}
}
function stopVideo() {
	player.stopVideo();
}

function showFinal() {
	stopVideo();
	$('#player').hide();
	$('.options').hide();
	$('.final').html('<p><b>"Mosh Pit": </b><ul><li>Crunk:<div id="two"></div></li><li>Energetic:<div id="one"></div></li></ul></p><p><b>"The Funeral": </b><ul><li>Sad:<div id="four"></div></li><li>Depressed:<div id="two"></div></li><li>Angsty:<div id="one"></div></li></ul></p><p><b>"Californication": </b><ul><li>Chill:<div id="four"></div></li><li>Laidback:<div id="three"></div></li><li>Relaxed:<div id="two"></div></li><li>Catchy:<div id="one"></div></li></ul></p>');
}
