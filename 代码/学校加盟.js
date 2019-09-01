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






//页面加载的方法
$(function () {
    //显示遮挡层和对话框的层
     $(".btnAdd").click(function () {
        $("#j_formAdd").show();
     });
     function closeDiv() {
        $("#j_formAdd").hide();
    }
    //点X关闭对话框和遮挡层
     $("#j_hideFormAdd").click(function () {
        closeDiv();
    });
    //点击添加按钮创建一行加入到tbody中
    // $("#j_btnAdd").click(function () {
    //     //获取课程和学科
    //     var lesson=$("#j_txtLesson").val();
    //     var belSch=$("#j_txtBelSch").val();
    //     var tt='<a class="btnAdd">加盟学校</a>';
    //     //创建一行
    //     $("<tr><td>"+lesson+"</td><td>"+belSch+"</td><td>"+tt+"</td></tr>").appendTo($("#j_tb"));
    //     $("#j_txtLesson").val("");
    //     closeDiv();
    // });
});
