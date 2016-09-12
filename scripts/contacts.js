function insertContacts() {
    var div = document.createElement("div");
    div.className = "contacts";
   div.innerHTML = '<h2 class="contacts__heading">Мы находимся по адресу:</h2><p class="contacts__text">г. Ирпень<br>ул. Лермонтова, 6-Е</p><h3 class="contacts__heading">Запись по телефону: (068)152 32 52</h3>';
    
    var mapDiv = document.createElement("div");
    mapDiv.className = "contacts__map";
    div.appendChild(mapDiv);

   var script = document.createElement("script");
   script.setAttribute("src","https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=Q5_Lt5RHKja1vd9zfwqEa92asJR24BLF&amp;width=100%&amp;height=400&amp;lang=ru_UA&amp;sourceType=constructor&amp;scroll=true");
   mapDiv.appendChild(script);

   document.getElementById('content').appendChild(div);
}