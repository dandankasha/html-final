$(document).ready(function(){
    $("#form").submit(function(){
        var flag = true;
        if(!checkId()){
            flase = false;
        }
        if(!checkPassword()){
            flase = false;
        }
        return flase;
       
    })
    $(".input1").focus(function(){$(".div3").addClass("import_prompt")});
    $(".input2").focus(function(){$(".div5").addClass("import_prompt")});
    $(".input1").blur(checkId);
    $(".input2").blur(checkPassword);
})
function checkId(){
    var id = $(".input1").val();
    $("#userNameId").html("");
    if(id=="")
    {
        $("#userNameId").addClass("error_prompt");
        $("#userNameId").html("请输入您的账号/邮箱！");
        return false;
    }
    $(".div3").addClass("ok_prompt");
}
function checkPassword(){
    var password = $(".input2").val();
    $("#pwdId").html("");
    if(password=="")
    {
        $("#pwdId").addClass("error_prompt");
        $("#pwdId").html("请输入您的密码！");
        return false;
    }
    $(".div5").addClass("ok_prompt");
}
