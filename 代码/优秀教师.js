//页面加载
$(function () {
    //链式编程
    $(".tab>li").click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        //获取li的索引
        var index=$(this).index();
        $(".teabox>ul:eq("+index+")").addClass("selected").siblings("ul").removeClass("selected");
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