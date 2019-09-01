//注意：多个方式控制同一块元素效果的时候，一定要走同一个变量
window.onload=function(){
	var lunbo=document.getElementById("lunbo");
	var imgs=lunbo.getElementsByTagName('img');
	var lis=lunbo.getElementsByTagName('li');
	
	var c=0;//大总管变量
	function run(){
			c++;
			if(c==3){
				c=0;
			}
			//循环，让所有的图片隐藏，让所有的li变灰
			for(var i=0;i<3;i++){
				imgs[i].style.display='none';
				lis[i].style.background="white";
			}
			//让C号图片显示，C号li变白
			imgs[c].style.display='block';
			lis[c].style.background='red';
	}
	var timer=setInterval(run,3000);
	//循环，给li加事件
	for(var i=0;i<lis.length;i++){
		//给i号li加序号
		lis[i].xuhao=i;
		//给i号li加鼠标移入事件
		lis[i].onmouseover=function(){
			c=this.xuhao;
			//停止定时器
			clearInterval(timer);
			//循环，让所有的图片隐藏，让所有的li变灰
			for(var i=0;i<3;i++){
			imgs[i].style.display='none';
			lis[i].style.background="white";
			}
			imgs[c].style.display='block';
			lis[c].style.background='red';
		}
		lis[i].onmouseout=function(){
			timer=setInterval(run,3000);
		}
	}
	
	
	var tab=document.getElementById("ab_con");
	var spans=tab.getElementsByClassName('f');
	var cons=tab.getElementsByClassName('con');
	for(var i=0;i<spans.length;i++){
		spans[i].xuhao=i;
		spans[i].onmouseover=function(){
			for(var i=0;i<cons.length;i++){
				cons[i].style.display='none';
			}
			cons[this.xuhao].style.display='block';
		}
	}			
}			
