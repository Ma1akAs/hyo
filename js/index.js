const id = ['stuName', 'stuId', 'departments', 'major', 'stuClass', 'phone', 'outTime1',
    'outTime2', 'locate', 'outReason', 'locationDetail', 'applyTime', 'teacherName'
];
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
function genDetail() {
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

function genAuto() {
    const stuName = document.getElementById('userName').value;
    const stuId = '2020120' + Math.floor(Math.random() * 1000);
    const departments = '电子与信息工程学院';
    const majorList = [
        '应用电子技术',
        '建筑智能化工程技术',
        '计算机网络技术',
        '现代移动通信技术',
        '电子信息工程',
        '数字媒体技术',
        '软件技术',
        '电气自动化技术',
        '嵌入式技术应用',
        '大数据技术与应用'
    ];
    const major = majorList[Math.floor(Math.random() * 10)];
    const stuClass = '20' + major + '1班';
    const phone = getMobile();
    const now = new Date();
    const outTime1 = formatDate(new Date(now).getTime(), 'YY-MM-DD');
    const outTime2 = formatDate(new Date(now.setHours(now.getHours() + 24)).getTime(), 'YY-MM-DD');
    const locate = '商业街';
    const outReason = '拿快递';
    const locationDetail = '具体地点：\n 河职院外商业街';
    const applyTime = formatDate(new Date(now.setMinutes(now.getMinutes() - 100)).getTime(), 'hh:mm');
    const teacherName = '谢晨';
    if (document.getElementById("userName").value == 'null' || document.getElementById("userName").value == '') {
        alert('你妈妈的吻，一个都懒得填是吧？');
    } else {
        for (let i = 0; i < id.length; i++) {
            setCookie(id[i], eval(id[i]), 1);
        }
        setCookie("cookieState", "1", 1);
        location.href = 'info.html';
    }
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

//随机生成手机号
function getMobile() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
}

//用于清空cookie
function delAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
    location.reload();
}

//用于格式化时间，用例如下：
//formatDate(new Date().getTime());2017-05-12 10:05:44
//formatDate(new Date().getTime(),'YY年MM月DD日');2017年05月12日
//formatDate(new Date().getTime(),'今天是YY/MM/DD hh:mm:ss');今天是2017/05/12 10:07:45
function formatDate(time, format = 'YY-MM-DD hh:mm:ss') {
    var date = new Date(time);

    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    var preArr = Array.apply(null, Array(10)).map(function(elem, index) {
        return '0' + index;
    });

    var newTime = format.replace(/YY/g, year)
        .replace(/MM/g, preArr[month] || month)
        .replace(/DD/g, preArr[day] || day)
        .replace(/hh/g, preArr[hour] || hour)
        .replace(/mm/g, preArr[min] || min)
        .replace(/ss/g, preArr[sec] || sec);

    return newTime;
}

//监听radio并切换不同的提交表单
$(document).ready(function() {
    $('input[type=radio][name=put]').change(function() {
        var detailform = document.getElementById("detailform");
        var autoform = document.getElementById("autoform");
        if (this.value == 'auto') {
            detailform.style.display = 'none';
            autoform.style.display = 'table';
        } else if (this.value == 'detail') {
            autoform.style.display = 'none';
            detailform.style.display = 'table';
        }
    });
});