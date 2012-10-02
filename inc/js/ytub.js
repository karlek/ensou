var repeat = 1;
var end;
var start;

//A function which is periodically run to check if the movie has ended
function abRepeat(start, end) {
	var player = document.getElementById("yplayer");

	if (player.getCurrentTime() > end) {
		player.seekTo(start);
	}
}

//When the youtube player becomes "ready", this function fires off.
function onYouTubePlayerReady() {
	var player = document.getElementById("yplayer");

	if (end === "" || end == null) {
		end = (player.getDuration() * 0.99);
	}

	setInterval("abRepeat(start, end)", 1000);
}

//Used to valify if the youtube id is valid.
function isValidYoutubeId(id) {
	var isValid = false, pattern = /[A-z0-9_\-]/;

	if (id.length === 11 && pattern.test(id)) {
		isValid = true;	
	}

	return isValid;
}

//Extracs and valify the youtube id of links or single id input.
function extractYoutubeId(url) {
	var ytid = url.split("v=")[1];
	if (ytid === undefined) {
		ytid = url;
	} else {
		ytid = ytid.substring(0, 11);
	}

	if (isValidYoutubeId(ytid)) {
		return ytid;
	}

	return null;
}

//The function fired off by the user interface
function loadVideo(url, startTime, endTime) {
	//Try if the url/id supplied is valid
	var videoId = extractYoutubeId(url);
	if (videoId === null) {
		document.getElementById("playerDiv").innerHTML = "The entered ID isn't valid. A valid ID is 11 characters long and consists only of A-Z a-z 0-9 _ -";
		return
	}

	//If no start time was entered, we assume it shall play from the beginning.
	if (startTime === "") {
		startTime = 0;
	}

	//Youtube api
	var params = { allowScriptAccess: "always" };
	var atts = { id: "yplayer" };
	swf = swfobject.embedSWF("http://www.youtube.com/v/" + videoId + "?enablejsapi=1&version=3&playerapiid=ytplayer&start=" + startTime + "&autoplay=1", "playerDiv", "768", "600", "8", null, null, params, atts);

	//Sets global variables for the repeat function
	if (start !== startTime) {
		start = startTime;
	}

	if (end !== endTime) {
		end = endTime;
	}
}
