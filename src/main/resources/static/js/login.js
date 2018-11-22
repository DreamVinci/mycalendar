/**
 * Created by Administrator on 2018/10/23.
 */
$("#loginname").focus(function(){
	focusInput('errorInfo');
});
$("#loginname").blur(function(){
	blurInput('loginname','用户名为空，请填写...','errorInfo');
});
$("#loginpwd").focus(function(){
	focusInput('errorInfo');
});
$("#loginpwd").blur(function(){
	blurInput('loginpwd','密码为空，请填写...','errorInfo');
});
$("#login").click(function(){
    var name = $("#loginname").val();
    var pwd = $("#loginpwd").val();
    //验证
    var info = "";
    if(name == null || name == ""){
		info = "用户名为空，请填写...";
    }else if(pwd == null || pwd == ""){
    	info = "密码为空，请填写...";
    }
    if(info != ""){
	    $("#errorInfo").html(info);
	    $("#errorInfo").removeClass("hidden");
    }else{
    	//验证用户名，密码
    	$.ajax({
		  type: 'POST',
		  url: basePath+'/user/login',
		  data: {//这是参数
		    loginName:name,
		    loginPwd:pwd
		    },
		  success: function(data){
		  	if(data){
		  			$("#errorInfo").removeClass("hidden");
		  		if(data.status == false){
		  			$("#errorInfo").html(data.msg);
		  		}else{
		  			$("#errorInfo").html('登录成功，正在跳转...');
		  			location.href = basePath+'home';
		  		}
		  	}
		  	
		  },
		  dataType:'json'
		});
    }
});

//获得焦点，隐藏错误信息
//errorid 错误信息显示位置id
function focusInput(errorid){
	$("#"+errorid).html("").addClass("hidden");
}
//失去焦点验证非空，显示错误信息
//id 验证输入框id msg 错误信息 errorid 错误信息显示位置id
function blurInput(id,msg,errorid){
	var arg = $("#"+id).val();
	//验证
    var info = "";
    if(arg == null || arg == ""){
		info = msg;
    }
    if(info != ""){
	    $("#"+errorid).html(info).removeClass("hidden");
    }
}
