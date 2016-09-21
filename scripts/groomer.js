function groomerInfo() {
	var div = document.createElement("div");
	div.className = "imgBox";
	document.getElementById('content').appendChild(div);

	for(var i=11; i<=23; i++){
		var panel = document.createElement("div");
		panel.className = ("imgBox__panel");
		var img = document.createElement("img");
		img.className = ("imgBox__diplom");
		img.setAttribute("src", "images/diplomas/" + i + ".jpg");
		panel.appendChild(img);
		div.appendChild(panel);
	}

	div.onclick = showPreview;
}