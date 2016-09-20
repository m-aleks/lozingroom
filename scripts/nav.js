
function Nav(sId) {
	var n = document.getElementById(sId);
	n.menu = this.fbc("sidebar__list");
	n.link = this.fbc("sidebar__link");
	n.toggle = this.fbc("toggle");

	n.showHide = function(){
		if(!n.classList.contains("sidebar-shown")){
			n.show();
		}else{
			n.hide();
		}
	}
	n.show =function() {
		n.classList.add("sidebar-shown");
	}
	n.hide = function() {
		n.classList.remove("sidebar-shown");
	}
	n.navItem = function(event) {
		document.getElementsByClassName("container-main")[0].style.display = "none";
		document.getElementsByClassName("container")[0].style.display = "block";
		document.getElementById("content").innerHTML = "";
		n.hide();
		switch(event.target.dataset.navtarget){
			case "groomer": groomerInfo();
			break;
			case "prices": getPrices();
			break;
			case "gallery": loadInsta(gallerryLoadData);
			break;
			case "specials": loadSpecials();
			break;
			case "contacts": insertContacts();
			break;
			default: ;
		}
	}

	n.toggle[0].onclick = n.showHide;
	n.menu[0].onclick = n.navItem;
}

Nav.prototype.fbc = function (sClass) {
	return document.getElementsByClassName(sClass);
}

var n1 = new Nav("sidebar");