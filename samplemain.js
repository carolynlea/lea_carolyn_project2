

function storeItems(id){
	var name = document.getElementById('name').value;
	var favoriteColor = document.getElementById('favoriteColor').value;
	localStorage.setItem('appName', name);
	localStorage.setItem('appfavoriteColor', favoriteColor);
	document.getElementById('main').style.display = "none";
	document.getElementById('clear').style.display = "block";
	
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
		

	}
};

function clearlocal(){
	localStorage.clear();
	return false;
};
