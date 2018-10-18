	window.onload=function(){

			var canvas=document.getElementById("canvas");
			var cx=canvas.getContext("2d");

			cx.fillStyle="rgb(72,122,111)";
			cx.beginPath();
			cx.moveTo(0,0);
			cx.lineTo(119,40);
			cx.lineTo(238,0);
			cx.closePath();
			cx.fill();




			 var wrap3 = document.getElementById('wrap3'),
         pic3 = document.getElementById('pic3'),
         list3 = document.getElementById('list3').getElementsByTagName('li'),
         index3 = 0,
         timer3 = null;

     if (timer3) {
         clearInterval(timer3);
         timer3 = null;
     }

     function changeImg3(curIndex) {
         for (var j = 0; j < list3.length; j++) {
             list3[j].className = "";
         }
         // 改变当前显示索引
         list3[curIndex].className = "on3";
         pic3.style.marginTop = -585 * curIndex + "px";
         index3 = curIndex;
     }


     for (var i = 0; i < list3.length; i++) {
         list3[i].id = i;
         list3[i].onmouseover = function() {
             clearInterval(timer3);
             changeImg3(this.id);
         }
     }



     var wrap4 = document.getElementById('wrap4'),
         pic4 = document.getElementById('pic4'),
         list4 = document.getElementById('list4').getElementsByTagName('li'),
         index4 = 0,
         timer4 = null;

     if (timer4) {
         clearInterval(timer4);
         timer4 = null;
     }

     function changeImg4(curIndex) {
         for (var j = 0; j < list4.length; j++) {
             list4[j].className = "";
         }
         // 改变当前显示索引
         list4[curIndex].className = "on4";
         pic4.style.marginTop = -585 * curIndex + "px";
         index4 = curIndex;
     }


     for (var i = 0; i < list4.length; i++) {
         list4[i].id = i;
         list4[i].onmouseover = function() {
             clearInterval(timer4);
             changeImg4(this.id);
         }
     }


var wrap5 = document.getElementById('wrap5'),
         pic5 = document.getElementById('pic5'),
         list5 = document.getElementById('list5').getElementsByTagName('li'),
         index5 = 0,
         timer5 = null;

     if (timer5) {
         clearInterval(timer5);
         timer5 = null;
     }

     function changeImg5(curIndex) {
         for (var j = 0; j < list5.length; j++) {
             list5[j].className = "";
         }
         // 改变当前显示索引
         list5[curIndex].className = "on5";
         pic5.style.marginTop = -510 * curIndex + "px";
         index5 = curIndex;
     }


     for (var i = 0; i < list5.length; i++) {
         list5[i].id = i;
         list5[i].onmouseover = function() {
             clearInterval(timer5);
             changeImg5(this.id);
         }
     }


var wrap6 = document.getElementById('wrap6'),
         pic6 = document.getElementById('pic6'),
         list6 = document.getElementById('list6').getElementsByTagName('li'),
         index6 = 0,
         timer6 = null;

     if (timer6) {
         clearInterval(timer6);
         timer6 = null;
     }

     function changeImg6(curIndex) {
         for (var j = 0; j < list6.length; j++) {
             list6[j].className = "";
         }
         // 改变当前显示索引
         list6[curIndex].className = "on6";
         pic6.style.marginTop = -595 * curIndex + "px";
         index6 = curIndex;
     }


     for (var i = 0; i < list6.length; i++) {
         list6[i].id = i;
         list6[i].onmouseover = function() {
             clearInterval(timer6);
             changeImg6(this.id);
         }
     }

var wrap7 = document.getElementById('wrap7'),
         pic7 = document.getElementById('pic7'),
         list7 = document.getElementById('list7').getElementsByTagName('li'),
         index7 = 0,
         timer7 = null;

     if (timer7) {
         clearInterval(timer7);
         timer7 = null;
     }

     function changeImg7(curIndex) {
         for (var j = 0; j < list7.length; j++) {
             list7[j].className = "";
         }
         // 改变当前显示索引
         list7[curIndex].className = "on7";
         pic7.style.marginTop = -290 * curIndex + "px";
         index7 = curIndex;
     }


     for (var i = 0; i < list7.length; i++) {
         list7[i].id = i;
         list7[i].onmouseover = function() {
             clearInterval(timer7);
             changeImg7(this.id);
         }
     }




var wrap8 = document.getElementById('wrap8'),
         pic8 = document.getElementById('pic8'),
         list8 = document.getElementById('list8').getElementsByTagName('li'),
         index8 = 0,
         timer8 = null;

     if (timer8) {
         clearInterval(timer8);
         timer8 = null;
     }

     function changeImg8(curIndex) {
         for (var j = 0; j < list8.length; j++) {
             list8[j].className = "";
         }
         // 改变当前显示索引
         list8[curIndex].className = "on8";
         pic8.style.marginTop = -592 * curIndex + "px";
         index8 = curIndex;
     }


     for (var i = 0; i < list8.length; i++) {
         list8[i].id = i;
         list8[i].onmouseover = function() {
             clearInterval(timer8);
             changeImg8(this.id);
         }
     }


var wrap9 = document.getElementById('wrap9'),
         pic9 = document.getElementById('pic9'),
         list9 = document.getElementById('list9').getElementsByTagName('li'),
         index9 = 0,
         timer9 = null;

     if (timer9) {
         clearInterval(timer9);
         timer9 = null;
     }

     function changeImg9(curIndex) {
         for (var j = 0; j < list9.length; j++) {
             list9[j].className = "";
         }
         // 改变当前显示索引
         list9[curIndex].className = "on9";
         pic9.style.marginTop = -592 * curIndex + "px";
         index9 = curIndex;
     }


     for (var i = 0; i < list9.length; i++) {
         list9[i].id = i;
         list9[i].onmouseover = function() {
             clearInterval(timer9);
             changeImg9(this.id);
         }
     }

var wrap10 = document.getElementById('wrap10'),
         pic10 = document.getElementById('pic10'),
         list10 = document.getElementById('list10').getElementsByTagName('li'),
         index10 = 0,
         timer10 = null;

     if (timer10) {
         clearInterval(timer10);
         timer10 = null;
     }

     function changeImg10(curIndex) {
         for (var j = 0; j < list10.length; j++) {
             list10[j].className = "";
         }
         // 改变当前显示索引
         list10[curIndex].className = "on10";
         pic10.style.marginTop = -592 * curIndex + "px";
         index10 = curIndex;
     }


     for (var i = 0; i < list10.length; i++) {
         list10[i].id = i;
         list10[i].onmouseover = function() {
             clearInterval(timer10);
             changeImg10(this.id);
         }
     }




     var wrap2 = document.getElementById('wrap2'),
         pic2 = document.getElementById('pic2'),
         list2 = document.getElementById('list2').getElementsByTagName('li'),
         index2 = 0,
         timer2 = null;

     if (timer2) {
         clearInterval(timer2);
         timer2 = null;
     }

     function changeImg2(curIndex) {
         for (var j = 0; j < list2.length; j++) {
             list2[j].className = "";
         }
         // 改变当前显示索引
         list2[curIndex].className = "on2";
         pic2.style.marginTop = -592 * curIndex + "px";
         index2 = curIndex;
     }


     for (var i = 0; i < list2.length; i++) {
         list2[i].id = i;
         list2[i].onmouseover = function() {
             clearInterval(timer2);
             changeImg2(this.id);
         }
     }


     var wrap = document.getElementById('wrap'),
         pic = document.getElementById('pic'),
         list = document.getElementById('list').getElementsByTagName('li'),
         index = 0,
         timer = null;

     // 若果有在等待的定时器，则清掉
     if (timer) {
         clearInterval(timer);
         timer = null;
     }

     // 自动切换
     timer = setInterval(autoPlay, 2000);

     // 定义并调用自动播放函数
     function autoPlay() {
         index++;
         if (index >= list.length) {
             index = 0;
         }
         changeImg(index);
     }

     // 定义图片切换函数
     function changeImg(curIndex) {
         for (var j = 0; j < list.length; j++) {
             list[j].className = "";
         }
         // 改变当前显示索引
         list[curIndex].className = "on";
         pic.style.marginTop = -315 * curIndex + "px";
         index = curIndex;
     }

     // 鼠标划过整个容器时停止自动播放
     wrap.onmouseover = function() {
         clearInterval(timer);
     }

     // 鼠标离开整个容器时继续播放至下一张
     wrap.onmouseout = function() {
         timer = setInterval(autoPlay, 2000);
     }

     // 遍历所有数字导航实现划过切换至对应的图片
     for (var i = 0; i < list.length; i++) {
         list[i].id = i;
         list[i].onmouseover = function() {
             clearInterval(timer);
             changeImg(this.id);
         }
     }


      var wrap1 = document.getElementById('wrap1'),
         pic1 = document.getElementById('pic1'),
         list1 = document.getElementById('list1').getElementsByTagName('li'),
         index1 = 0,
         timer1 = null;

     // 若果有在等待的定时器，则清掉
     if (timer1) {
         clearInterval(timer1);
         timer1 = null;
     }

     // 自动切换
     // timer1 = setInterval(autoPlay, 2000);

     // 定义并调用自动播放函数
     // function autoPlay() {
     //     index1++;
     //     if (index1 >= list1.length) {
     //         index1 = 0;
     //     }
     //     changeImg(index1);
     // }

     // 定义图片切换函数
     function changeImg1(curIndex) {
         for (var j = 0; j < list1.length; j++) {
             list1[j].className = "";
         }
         // 改变当前显示索引
         list1[curIndex].className = "on1";
         pic1.style.marginTop = -148 * curIndex + "px";
         index1 = curIndex;
     }

     // 鼠标划过整个容器时停止自动播放
     // wrap1.onmouseover = function() {
     //     clearInterval(timer1);
     // }

     // 鼠标离开整个容器时继续播放至下一张
     // wrap1.onmouseout = function() {
     //     timer1 = setInterval(autoPlay, 2000);
     // }

     // 遍历所有数字导航实现划过切换至对应的图片
     for (var i = 0; i < list1.length; i++) {
         list1[i].id = i;
         list1[i].onmouseover = function() {
             clearInterval(timer1);
             changeImg1(this.id);
         }
     }


 
 }