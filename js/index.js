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

// 批量设置cookie
function login() {
    const id = ['stuName', 'stuId', 'departments', 'major', 'stuClass', 'phone', 'outTime1',
        'outTime2', 'locate', 'outReason', 'locationDetail', 'applyTime', 'teacherName'
    ];
    for (let i = 0; i < id.length; i++) {
        let val = document.getElementById(id[i]).value;
        if (val == null || val == "" || val == undefined) {
            alert("请填写完所有信息后再提交！");
            delAllCookie();
            location.reload();
            return;
        }
        setCookie(id[i], val, 1);
    }
    setCookie("cookieState", "1", 1);
    location.href = 'info.html';
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
        location.href = 'info.html';
    }
}

function delAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
    location.reload();
}