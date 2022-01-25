// JavaScript Document
//获取页面元素
var div = document.getElementById('box'),
	img = document.querySelector('#box img'),
	link = document.querySelector('#box a'),
	lis = document.querySelectorAll('li'),
	spans = document.querySelectorAll('span');

var index = 0;//index表示的是图片或HTML页面的下标



//启动定时器
var timer = setInterval(autoChange,1000);

//设置鼠标移入DIV的效果
div.addEventListener('mouseover',function(){
	//停止图片轮播
	clearInterval(timer);
	
	//显示左右按钮
	spans[0].style.display = 'block'; 
	spans[1].style.display = 'block'; 
},false);

//设置鼠标移出效果
div.addEventListener('mouseout',function(){
	//重新启动定时器，使图片轮播
	timer = setInterval(autoChange,1000);
	
	//隐藏左右按钮
	spans[0].style.display = 'none'; 
	spans[1].style.display = 'none'; 
},false);


//设置左边按钮被点击的效果
spans[0].addEventListener('click',function(){
	index--;
	if(index < 0){
		index = 6;
	}
	
	change();
},false);


//设置右边按钮被点击的效果
spans[1].addEventListener('click',function(){
	index++;
	if(index == 7){
		index = 0;
	}
	
	change();
},false);


//设置鼠标移入到li编号上时的效果
for(var i=0;i<lis.length;i++){
	lis[i].id = i;
	//为li设置鼠标移入事件
	lis[i].onmousemove = function(){
		index = this.id;
		change();
	};
}








//定义一个方法，该方法的功能是切换图片，li的背景色，以及超链接
function change(){
	//更改图片
	img.src = 'images/' + index +'.jpg';
	
	for(var i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = '#00f';
	};
	
	//更改li的背景色
	lis[index].style.backgroundColor = '#f00';
	
	//更改超链接
	link.href = 'html/' + index +'.html';
	
};

//定义一个方法，该方法作用是自动切换图片，li的背景色，以及超链接
function autoChange(){
	//修正index的值
	index++;
	//判断index的值是否到达边界值
	if(index == 7){
		index = 0;
	}
	//调用change方法，根据index的值自动切换
	change();
};