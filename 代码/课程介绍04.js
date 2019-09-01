window.onload=function(){
	var tab=document.getElementById("curriculum");
	var li=tab.getElementsByClassName('kaoji_tit')[0];
	var lis=li.getElementsByTagName('span');
	var cons=tab.getElementsByClassName('kaoji_con');
	//循环，给li加单击事件
	for(var i=0;i<lis.length;i++){
		//给li加序号
		lis[i].xuhao=i;
		//给i号li加移入事件
		lis[i].onmouseover=function(){
			//让所有的con隐藏
			for(var i=0;i<cons.length;i++){
				cons[i].style.display='none';
			}
			//让this.xuhao对应的con显示
			cons[this.xuhao].style.display='block';
		}
	}
}

