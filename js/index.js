//设置cookie
function setCookie(name, value, daysToLive) {
    // 对 cookie 值进行编码以转义其中的分号、逗号和空格
    var cookie = name + "=" + encodeURIComponent(value);

    if (typeof daysToLive === "number") {
        /* 设置 max-age 属性 */
        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);
    }
    document.cookie = cookie;
}
//删除cookie
var delCookie = function(name) {
    setCookie(name, ' ', -1);
};

//传递cookie
function login() {
    var Val = $("#container > table > tbody > tr > td > input").val();
    if (Val == null || Val == "" || Val == undefined) {
        alert("请填写所有信息！");
    } else {
        var stuName = document.getElementById("stuName").value
        var stuId = document.getElementById("stuId").value;
        var departments = document.getElementById("departments").value;
        var major = document.getElementById("major").value;
        var stuClass = document.getElementById("class").value;
        var phone = document.getElementById("phone").value;
        var outTime1 = document.getElementById("outTime1").value;
        var outTime2 = document.getElementById("outTime2").value;
        var Location = document.getElementById("location").value;
        var outReason = document.getElementById("outReason").value;
        var locationDetail = document.getElementById("locationDetail").value;
        var applyTime = document.getElementById("applyTime").value;
        var teacherName = document.getElementById("teacherName").value;
        setCookie('stuName', stuName, 1);
        setCookie('stuId', stuId, 1);
        setCookie('departments', departments, 1);
        setCookie('major', major, 1);
        setCookie('stuClass', stuClass, 1);
        setCookie('phone', phone, 1);
        setCookie('outTime1', outTime1, 1);
        setCookie('outTime2', outTime2, 1);
        setCookie('Location', Location, 1);
        setCookie('outReason', outReason, 1);
        setCookie('locationDetail', locationDetail, 1);
        setCookie('applyTime', applyTime, 1);
        setCookie('teacherName', teacherName, 1);
        setCookie('cookieState', 1, 1);
        location.href = 'info.html';
    }

}

function deletecookie() {
    delCookie('userName', ' ', -1);
}

//获取cookie
function getCookie(name) {
    // 拆分 cookie 字符串
    var cookieArr = document.cookie.split(";");

    // 循环遍历数组元素
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
        if (name == cookiePair[0].trim()) {
            // 解码cookie值并返回
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // 如果未找到，则返回null
    return null;
}

//获取状态码cookie
function checkCookie() {
    if (getCookie("cookieState") != "1") {
        alert("Cookie不存在,请填写下列表单进入！");
    } else {
        nextPage();
    }
}

function nextPage() {
    return location.href = 'info.html';
}

function delAllCookie() {
    delCookie('stuId');
    delCookie('stuName');
    delCookie('departments');
    delCookie('major');
    delCookie('stuClass');
    delCookie('phone');
    delCookie('outTime1');
    delCookie('outTime2');
    delCookie('Location');
    delCookie('outReason');
    delCookie('locationDetail');
    delCookie('applyTime');
    delCookie('teacherName');
    delCookie('cookieState');
    alert("清除成功");
    location.reload();
}