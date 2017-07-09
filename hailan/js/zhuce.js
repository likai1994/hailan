	$(".put6").click(function(){
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
		});	
	});
	
	$("#put1").keyup(function(){
		$.ajax({
			url:"php/yonghuming.php",
			async:true,
			data:"userName="+this.value,
			type:"get",
			success:function(data){
				if(data=="1"){
					$(".i-1").html("该用户已经被注册了");
				}else{
					$(".i-1").html("该用户没有人使用");
				}
			}		
		});	
	});

		$('input').keyup(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证用户名
             if($(this).is('.put1')){
             		
             		var reg = /^1[35784][0-9]{9}$/;								
                    if( reg.test(this.value)==false  ){                   	
                        var errorMsg = '请输入电话号码';
                        $parent.append('<span style="color:red;" class="formtips onError">*'+errorMsg+'</span>');
                    }else{
                        var okMsg = '输入正确';
                        $parent.append('<span style="color:green;" class="formtips onSuccess">*'+okMsg+'</span>');
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
           
			if($(this).is('.put6')){
				if(($("#put2")[0].value)==""){
					alert("ssss")
				}
			}
         
        })