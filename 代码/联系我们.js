
$(function () {
    $("#u1>li>ul>li:eq(3)").hide();
    $("#u1>li>ul>li:eq(2)").hide();
    $("#u1>li>ul>li:eq(1)").hide();
    //先获取u1中所有的直接的li,注册点击事件
    $("#u1>li").click(function () {
        //让当前被点击的li的兄弟元素li中的ul中的li都隐藏
        $(this).siblings("li").children("ul").find("li").hide(500);
        $(this).children("ul").find("li").show(500);
    });


	$('#u1 li').click(function(){
		$(this).addClass('f').siblings('#u1 li').removeClass('f');
	});

});

