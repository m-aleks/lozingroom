function loadSpecials() {
	var div = document.createElement("div");
	div.className = "specialsBox";
	document.getElementById('content').appendChild(div);

	for(var i=1; i<=2; i++){
		var panel = document.createElement("div");
		panel.className = ("specials__panel");
		var img = document.createElement("img");
		img.className = ("specials__img");
		img.setAttribute("src", "images/specials/" + i + ".jpg");
		panel.appendChild(img);
		div.appendChild(panel);
	}
}