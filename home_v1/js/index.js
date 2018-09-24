$(document).ready(function(){
	let image1 = $("#image1");
	let image2 = $("#image2");

	image1.hover(function(event){
		$(this).attr("src","http://image.fiftykg.com/100jin/20180916/WechatIMG105.jpeg");
	});

	let left = $("#left");
	let right = $("#right");
	let avatar = $("#avatar");

	let setBlackFace = function(event){
		avatar.attr("src","http://image.fiftykg.com/www/WechatIMG95.jpeg");
	};

	let setWhiteFace = function(event){
		avatar.attr("src","http://image.fiftykg.com/www/WechatIMG165.jpeg");
	};

	left.hover(setBlackFace);
	left.click(setBlackFace);
	right.hover(setWhiteFace);
	right.hover(setWhiteFace);
});
