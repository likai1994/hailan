
       var btn = document.getElementById("btn").children;//获取底部圆圈
      
       /* 右按钮*/
      var num = 0;
   
       document.getElementById("right").onclick = function(){
       	     num++   
       	     if(num>= document.getElementById("wrap").children.length){
       	     	num=0;
       	     }
       	     //console.log(num)
       	   for (var j =0;j< document.getElementById("wrap").children.length;j++) {
       	   	 
       	   	 	document.getElementById("wrap").children[j].style.opacity =0;
     		}
       	     document.getElementById("wrap").children[num].style.opacity =1;
       	     /*圆按钮*/
           for (var j =0;j<  document.getElementById("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
         /* 左按钮*/
       document.getElementById("left").onclick = function(){
       	   num--;
       	  
       	  if(num<0){
       	     	num=document.getElementById("wrap").children.length-1;
       	     }
       	  //console.log(num)
       	   for (var j =0;j<  document.getElementById("wrap").children.length;j++) {
       	   	 	
       	   	 	 document.getElementById("wrap").children[j].style.opacity =0;
     		}
       	     document.getElementById("wrap").children[num].style.opacity =1;
       	        /*元按钮*/
           for (var j =0;j<  document.getElementById("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
      /* 底部小圆圈鼠标移入*/
     
     for (var i in btn) {
     	btn[i].className="ccc";
     	btn[0].className="black";
     	btn[i].index = i;
     	btn[i].onclick = function(){
     		for (var j =0;j<  document.getElementById("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			 document.getElementById("wrap").children[j].style.opacity =0;
     		}
     		btn[this.index].className="black";
     		//console.log(this.index)
     		  document.getElementById("wrap").children[this.index].style.opacity =1; 
     	}
     }
    /*让轮播图自己走，设置定时器*/
    var time = null;  
   time = setInterval(document.getElementById("right").onclick,3000)
    
    /* 左右按钮的显示与隐藏*/
       document.getElementById("box").onmouseover= function(){
       	  document.getElementById("left").style.display = "block";
       	  document.getElementById("right").style.display = "block";
       	  clearInterval(time)
       	};
      document.getElementById("box").onmouseout = function(){
       	document.getElementById("left").style.display = "none";
       	document.getElementById("right").style.display = "none";
       	  //clearInterval(time)
        time = setInterval(document.getElementById("right").onclick,3000);
         //console.log("鼠标移出，打开定时器,自动播放")
       };
