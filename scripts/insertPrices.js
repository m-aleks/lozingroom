function getPrices() {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'pricelist.txt', true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if(xmlhttp.status == 200) {
				insertPrices(xmlhttp.responseText);
			}
		}
	};
	xmlhttp.send(null);
}

function insertPrices(sPrices) {
	var div = document.createElement("div");
	div.className = "prices";
	document.getElementById('content').appendChild(div);

	var priceStringsArray = sPrices.split(/\n/g);
	var priceTable = document.createElement("table");
	document.getElementsByClassName("prices")[0].appendChild(priceTable);
	priceTable.className = "prices__list";
	var oRow
	,oCell;
	for(var priceString in priceStringsArray){
		var priceArray = priceStringsArray[priceString].split(/_/);
		oRow = priceTable.insertRow(-1);
		oCell = oRow.insertCell(-1);
		oCell.innerHTML = priceArray[0];

		if(priceArray[1]){
			oRow.className = "prices__service";
			oCell.className = "prise__servise_name";
			oCell = oRow.insertCell(-1);
			oCell.className = "prise__service_toPay";
			oCell.innerHTML = priceArray[1];
		} else {
			oRow.className = "prices__heading";
		}
	}
}