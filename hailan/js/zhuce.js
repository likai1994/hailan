	var num =1;
	var reg = /^1[35784][0-9]{9}$/;	
	
	$(".put6").click(function(){
		//console.log($("#put2")[0].value=="")

		if($("#put1")[0].value=="" || reg.test($("#put1")[0].value==false)){num=0}
		if($("#put2")[0].value=="" || $("#put2")[0].value.length<6){num=0}
		if($("#put2")[0].value!=$("#put3")[0].value){num=0}
		//console.log($("#showCode").text().toLowerCase( ))
		//console.log($(".put4")[0].value.toLowerCase( ))
		//console.log(num)
		if($("#showCode").text().toLowerCase( )!=$(".put4")[0].value.toLowerCase( )){num=0;}
		if(num==0){
				alert("您输入的有误，请检查！！！");
		        location.reload()
		}else{
			$.ajax({
				url:"php/regSave.php",
				async:true,
				data:"userName="+$('#put1').val()+"&userPass="+$("#put2").val(),
				type:"post",
				success:function(data){
					//console.log(data)
					if(data=="1"){
						
						location.href="denglu.html";
					}else{
						alert("注册失败")
					}
				}		
			})
		}
	})
	
	$("#put1").blur(function(){
		$.ajax({
			url:"php/yonghuming.php",
			async:true,
			data:"userName="+this.value,
			type:"get",
			success:function(data){
				if(data=="0" && reg.test($("#put1")[0].value)==true){
					$(".i-1").html("该用户没有人使用");
				}
				if(data=="1" && reg.test($("#put1")[0].value)==true){
					$(".i-1").html("*该手机已注册");
					$(".i-1").css("color","red")
				}
				
			}		
		})
	})

		$('input').keyup(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证用户名
             if($(this).is('.put1')){
             		
             		//var reg = /^1[35784][0-9]{9}$/;								
                    if( reg.test(this.value)==false  ){                   	
                        var errorMsg = '*请输入电话号码';
                       	$(".i-1").html(errorMsg);
                       	$(".i-1").css("color","red")
                    }else{
                        var okMsg = '输入正确';
                        $(".i-1").html(okMsg);
                        $(".i-1").css("color","green")
                    }
             }
            
           	if($(this).is('.put2')){
           		//console.log(this.value.length)
           		
           		if(this.value=="" || this.value.length<6){
           			var errorMsg = '密码最少6位';
                        $parent.append('<span style="color:red;"  id="mima"  class="formtips onError">*'+errorMsg+'</span>');
                     	$("#div1").css("background","red");
           				$("#div2").css("background","white");
           				$("#div3").css("background","white");
                        
           		}else{
           			var errorMsg = '√';
                        $parent.append('<span style="color:green;"  id="mima"  class="formtips onError">*'+errorMsg+'</span>');
           		}
           		if(this.value.length>6 && this.value.length<10){
           			$("#div1").css("background","red");
           			$("#div2").css("background","yellow");
           			$("#div3").css("background","white");
           		}
           		if(this.value.length>=10){
           			$("#div1").css("background","red");
           			$("#div2").css("background","yellow");
           			$("#div3").css("background","green");
           		}
           		if(this.value=="" ||this.value.length==0){
           			$("#div2").css("background","white");
           			$("#div1").css("background","white");
           			$("#div3").css("background","white");
                        
           		}
           }
           	if( $(this).is('.put3') ){
           		
             	if(this.value==($("#put2")[0].value) && this.value!=""){
             		var errorMsg = '√';
                        $parent.append('<span style="color:green;" class="formtips onError">*'+errorMsg+'</span>');
             	}else{
             		var errorMsg = '输入错误';
                        $parent.append('<span style="color:red;"class="formtips onError">*'+errorMsg+'</span>');
             	}
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

