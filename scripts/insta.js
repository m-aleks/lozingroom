var gallerryLoadData ={
	/*template: '<a href="{{link}}" class="imgBox__link" target="_blank"><img src="{{image}}" class="imgBox__img" /></a>'*/
	template: '<div class="imgBox__panel"><img src="{{image}}" class="imgBox__diplom" /></div>'
	,filter: function(image) {
      return image.tags.indexOf('ilovemyjob') >= 0;
  }
  ,resolution:"standard_resolution"
};

/*var specialsLoadData ={
	template: '<a href="{{link}}" class="imgBox__link" target="_blank"><img src="{{image}}" class="imgBox__img" /></a>'
	,filter: function(image) {
      return image.tags.indexOf('specialoffer') >= 0;
  }
  ,resolution:"standard_resolution"
};*/

var loadInsta = function(instaData) {
	var div = document.createElement("div");
	div.className = "imgBox";
	div.id = "insta"; 
	document.getElementById("content").appendChild(div);

	var useTemplate = instaData.template || ''
	,useFilter = instaData.filter || ''
	useResolution = instaData.resolution || 'low_resolution';
	var instaParams = {
		get: 'user'
		,userId: 2943483007
		,accessToken: '2943483007.1677ed0.f073ec88d0f64b3eb14592dd3eeeeb5b'
		,target: 'insta'
		,resolution: useResolution
		,filter: useFilter
		,template: useTemplate
	};
	
	var feed = new Instafeed(instaParams);

	feed.run();

	insta.onclick = showPreview;
}
