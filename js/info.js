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

function setText(cookieName, id) {
    var setter = getCookie(cookieName);
    document.getElementById(id).innerText = setter;
}

//点击获取按钮之后调用的函数
function applySet() {
    setText("stuName", "XM");
}