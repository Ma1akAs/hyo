function formonload() {

}

function formonsubmit() {
    //return false to exit submit
}

function SaveDocumentCallBack(btnAction, rs) {
    //保存成功后的回调函数
    alert(rs.msg);
    try {
        opener.$('#dg').datagrid('reload');
    } catch (e) {}
    window.close();
}

//获取cookie代码
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
//formatDate(new Date().getTime());2017-05-12 10:05:44
//formatDate(new Date().getTime(),'YY年MM月DD日');2017年05月12日
//formatDate(new Date().getTime(),'今天是YY/MM/DD hh:mm:ss');今天是2017/05/12 10:07:45

//传入cookie名、目标id来修改目标元素内容
function setText(cookieName, id) {
    var setter = getCookie(cookieName);
    document.getElementById(id).innerText = setter;
}

function applySet() {
    const index_id = ['stuName', 'stuId', 'departments', 'major', 'stuClass', 'phone', 'outTime1',
        'outTime2', 'locate', 'outReason', 'locationDetail'
    ];
    const info_id = ['XM', 'XH', 'XY', 'ZY', 'BJ', 'LXDH', 'KSSJ', 'JSSJ', 'MDD', 'WCSY', 'BZ'];
    for (i = 0; i < index_id.length; i++) {
        setText(index_id[i], info_id[i]);
    }
    let teacherInfo = getCookie("teacherName") + "/教职工/教学部门/" + getCookie("departments");
    document.getElementById("JSM").innerText = teacherInfo;
    fixApplyTime();
    document.getElementById("applyer").innerText = getCookie("stuName");
}

//从cookie取得设置的applyTime值，操作字符串后赋值给申请时间
function fixApplyTime() {
    let hm = getCookie("applyTime");
    let ym = getCookie("outTime1");
    var none = " ";
    var fixedApplyTime = ym.concat(none, hm);
    document.getElementById("AT").innerText = fixedApplyTime;
    //设置审批时间为申请时间的30分钟后
    var fixedApplyTimeTimestamp = new Date(fixedApplyTime);
    fixedApplyTimeTimestamp.setMinutes(fixedApplyTimeTimestamp.getMinutes() + 41)
    var voa = formatDate(new Date(fixedApplyTimeTimestamp).getTime(), 'YY-MM-DD hh:mm');
    document.getElementById("JSTGSJ").innerText = voa;
}