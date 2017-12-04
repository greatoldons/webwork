// 导航栏
var ul=document.getElementsByClassName("unshow");
// console.log(ul);
for(var i=0;i<ul.length;i++){
	ul[i].parentNode.onmouseover=function(){
		this.childNodes[2].className="show";
	}
	ul[i].parentNode.onmouseout=function(){
		this.childNodes[2].className="unshow";
	}
}

//slider_bar
var larr=document.getElementsByClassName("larrow")[0];
var rarr=document.getElementsByClassName("rarrow")[0];
var img=document.getElementsByClassName("imgblock")[0];
var bar=document.getElementsByClassName("bar")[0];
img.onmouseover=function(){
	console.log("1");
	larr.className="larrow_over1";
	rarr.className="rarrow_over1";
}
img.onmouseout=function(){
	console.log("2");
	larr.className="larrow";
	rarr.className="rarrow";
}
larr.onmouseover=function(){
	larr.className="larrow_over2";
}
larr.onmouseout=function(){
	larr.className="larrow";
}
rarr.onmouseover=function(){
	rarr.className="rarrow_over2";
}
rarr.onmouseout=function(){
	rarr.className="rarrow";
}

//bar
var pic=new Array(9);
pic[0]="img\\banner_00.gif";
for(var i=1;i<=9;i++){
	pic[i]="img\\banner0"+i+".jpg";
}
var index=1;
var show=img.childNodes[1].firstChild;
var timer=setInterval("change()",3000);
function change(){
	show.src=pic[index];
	index=(index+1)%9;
}

larr.onclick=function(){
	index=(index-1+9)%9;
	show.src=pic[index];
}
rarr.onclick=function(){
	index=(index+1)%9;
	show.src=pic[index];
}