$(function () {
	$('.ttnav ul li').click(function(){
			$(this).addClass('on').siblings('.ttnav ul li').removeClass('on');
		});
});

	//给浏览器加滚动条事件
$(window).scroll(function(){
	//获得当前已经滚动上去的距离
	var t=$(document).scrollTop();
//	document.title=t;
	if(t>378){
		//让导航条固定定位
		$(".nav").css({'top':'50%'})
	}
	else{
		$(".nav").css({'top':'200%'})
	}
})