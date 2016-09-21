function showPreview(event) {
  var target = event.target;
  if(target!=this){
    if(target.tagName =="IMG"){
      new Preview(target.cloneNode());
    }else{
      new Preview(target.firstChild.cloneNode());
    }
  }
}
function Preview(oImg) {
  var p = this;
  p.img = oImg;
  p.img.className = "preview__img";
  p.div = document.getElementById("preview");

  p.show = function() {
    p.div.innerHTML = "";
    p.div.appendChild(p.img);
    p.div.classList.add("preview_visible");
  }
  p.show();

  p.hide = function() {
    p.div.classList.remove("preview_visible");
  }

  p.div.onclick = p.hide;
  window.onkeypress = p.hide;
}