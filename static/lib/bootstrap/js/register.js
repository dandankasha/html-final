$(document).ready(function(){
	$("#registerForm").submit(function(){
		var flag=true;
		if (!checkFname()){
       
			flag = false;
		} 
		if (!checkEmail()) {
            
			flag = false;
		} 
		if (!checkPass()) {
           
			flag = false;
		} 
		if (!checkRePass()) {
           
			flag = false;
		} 
		if (!checkPhone()){
           
			flag = false;
		} 
		return flag;
	})
	$("#userName").focus(function(){$(".dd1").addClass("import_prompt")});
    $("#email").focus(function(){$(".dd5").addClass("import_prompt")});
	$("#pwd").focus(function(){$(".dd2").addClass("import_prompt")});
	$("#repwd").focus(function(){$(".dd3").addClass("import_prompt")});
	$("#tel").focus(function(){$(".dd4").addClass("import_prompt")});

	$("#userName").blur(checkFname);
    $("#email").blur(checkEmail);
	$("#pwd").blur(checkPass);
	$("#repwd").blur(checkRePass);
	$("#tel").blur(checkPhone);
})
function checkFname(){
	var $userName = $("#userName");
	var $userNameId = $("#userNameId");
	$userNameId.html("");
	if($userName.val()==""){
		$userNameId.html("用户名不能为空！");
		$("#userNameId").addClass("error_prompt");
		return false;
	}
	var user = $userName.val();
	var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
	if(reg.test(user)==false){
		$userNameId.html("用户名格式错误！");
		$("#userNameId").addClass("error_prompt");
		return false;
	}
	$("#userNameId").addClass("ok_prompt");
	$userNameId.html("用户名输入正确");
}
function checkPass(){
	var $pwd = $("#pwd");
	var $pwdId = $("#pwdId");
	$pwdId.html("");
	if($pwd.val()==""){
		$pwdId.html("密码不能为空！");
		$("#pwdId").addClass("error_prompt");
		return false;
	}
	var pass = $pwd.val();
	var reg = /^[a-zA-Z0-9]{6,16}$/;
	if(reg.test(pass)==false){
		$pwdId.html("密码长度为6-16且只能包含数字与字母！");
		$("#pwdId").addClass("error_prompt");
		return false;
	}
	$("#pwdId").addClass("ok_prompt");
	$pwdId.html("密码输入正确");
}
function checkRePass(){
	var $pwd = $("#pwd");
	var $repwd = $("#repwd");
	var $repwdId = $("#repwdId");
	$repwdId.html("");
	if($repwd.val()==""){
		$repwdId.html("重复密码不能为空！");
		 $("#repwdId").addClass("error_prompt");
		return false;
	}
	if($pwd.val()!=$repwd.val()){
		$repwdId.html("两次密码输入不一致！");
		 $("#repwdId").addClass("error_prompt");
		return false;
	}
	$("#repwdId").addClass("ok_prompt");
	$repwdId.html("重复密码输入正确");
}
function checkPhone(){
	var $tel = $("#tel");
	var $telId = $("#telId");
	$telId.html("");
	if($tel.val()==""){
		$telId.html("请输入你的手机号！");
		 $("#telId").addClass("error_prompt");
		return false;
	}
	var tel = $tel.val();
	var reg = /^1[0-9]{10}$/;
	if(reg.test(tel)==false){
		$telId.html("手机号码不正确！");
		 $("#telId").addClass("error_prompt");
		return false;
	}
	$("#telId").addClass("ok_prompt");
	$telId.html("手机号码输入正确");
}
function checkEmail(){
	var $email = $("#email");
	var $emailId = $("#emailId");
	$emailId.html("");
	if($email.val()==""){
		$emailId.html("请输入你的常用邮箱！");
		$("#emailId").addClass("error_prompt");
		return false;
	}
	var email = $email.val();
	var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
	if(reg.test(email)==false){
		$emailId.html("邮箱格式不正确！");
		$("#emailId").addClass("error_prompt");
		return false;
	}
	$("#emailId").addClass("ok_prompt");
	$emailId.html("邮箱输入正确");
}