	$(".put5").click(function(){
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
	});	
});
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