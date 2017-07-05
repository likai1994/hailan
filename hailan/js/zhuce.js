		$('input').keyup(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证用户名
             
             if( $(this).is('#username') ){
             		var reg = /^1[35784][0-9]{9}$/;								
                    if( reg.test(this.value)==false  ){                   	
                        var errorMsg = '请输入电话号码';
                        $parent.append('<span style="color:red;" class="formtips onError">*'+errorMsg+'</span>');
                    }else{
                        var okMsg = '输入正确';
                        $parent.append('<span style="color:green;" class="formtips onSuccess">*'+okMsg+'</span>');
                    }
             }
             //验证密码
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
           		console.log($("#put2")[0].value)
           		console.log(this.value)
             	if(this.value==($("#put2")[0].value) && this.value!=""){
             		var errorMsg = '√';
                        $parent.append('<span style="color:green;" class="formtips onError">*'+errorMsg+'</span>');
             	}else{
             		var errorMsg = '输入错误';
                        $parent.append('<span style="color:red;"class="formtips onError">*'+errorMsg+'</span>');
             	}
             }
         
        })
        
          $(".put5").click(function(){
          	
          		console.log($("#put2")[0].value)
          	    console.log($("#mima").css("color"))
           		if(($("#put2")[0].value)=="" || $("#mima").css("color")=="rgb(255, 0, 0)"){
           			alert("输入错误")
           		}
           
          })