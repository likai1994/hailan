	var num=1;
	$(".put5").click(function(){
	if($("#showCode").text().toLowerCase( )!=$(".put3")[0].value.toLowerCase( )){num=0;}
	if(num==0){
				alert("您输入的有误，请检查！！！");
		        location.reload()
		}else{

			$.ajax({
				url:"php/denglu.php",
				async:true,
				data:"userName="+$('#userId').val()+"&userPass="+$("#passId").val(),
				type:"post",
				success:function(data){
					if(data=="1"){
						//保存cookie
						saveCookie("userId",$("#userId").val(),7);
						//saveCookie("userPass",$("#passId").val(),7);
						location.href="shouye.html";
					}else{
						alert("亲，用户名或者密码错误，登录失败！");
					}
				}		
			})	
		}
	})
function changeyzm(){
		var i=0;
		var str="";
		while(i<4){
			var num1=parseInt(Math.random()*123);
			if(num1>=65 && num1<=90){
				str+=String.fromCharCode(num1);
				i++;
			}
		}
		document.getElementById("showCode").innerHTML=str;	
}