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
    var stuName = document.getElementById("stuName").value
    var stuId = document.getElementById("stuId").value;
    var departments = document.getElementById("departments").value;
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
    setCookie('departments', departments, 0);
    setCookie('stuClass', stuClass, 0);
    setCookie('phone', phone, 0);
    setCookie('outTime1', outTime1, 0);
    setCookie('outTime2', outTime2, 0);
    setCookie('Location', Location, 0);
    setCookie('outReason', outReason, 0);
    setCookie('locationDetail', locationDetail, 0);
    setCookie('applyTime', applyTime, 0);
    setCookie('teacherName', teacherName, 0);
    location.href = 'index.html';
}

function deletecookie() {
    delCookie('userName', ' ', -1);
}