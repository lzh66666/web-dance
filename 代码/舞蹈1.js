$(function(){
	$('#ab_con .ab_con_tit span').mouseover(function(){
		$(this).addClass('hover').siblings('#ab_con .ab_con_tit span').removeClass('hover');
	})
})


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