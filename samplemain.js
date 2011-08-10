var clearLink = document.getElementById('clear');
var anchorTags = clearLink.getElementsByTagName('a');

function mouseHover(){
	for (var i = 0, j = anchorTags.length; i < j; i++){
		anchorTags[i].style.color = "#37382C";
	}
};

function mouseOut(){
	for (var i = 0, j = anchorTags.length; i < j; i++){
		anchorTags[i].style.color = "#990000";
	}
};

function storeItems(id){
	var name = document.getElementById('name').value;
	var favoriteColor = document.getElementById('favoriteColor').value;
	localStorage.setItem('appName', name);
	localStorage.setItem('appfavoriteColor', favoriteColor);
};

function getItems(){
	if (localStorage.getItem('appName')) {
		var name = localStorage.getItem('appName');
		var favoriteColor = localStorage.getItem('appfavoriteColor');
		
		var viewForm = [
		name,
		favoriteColor
		];
		alert(viewForm);
		document.getElementById('main').style.display = "none";
		document.getElementById('clear').style.display = "block";

	}
};

function clearlocal(){
	localStorage.clear();
	return false;
};
