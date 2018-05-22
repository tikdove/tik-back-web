let $ = require("jquery");

export function sendAjax(options) {
    $.ajax({
        url: options.url,
        dataType: "json",
        // contentType: "application/json; charset=utf-8",
        headers: options.headers,
        type: options.method || "get",
        data: options.data,
        success: options.success,
        error: options.error,
        beforeSend: options.beforeSend,
        complete: options.complete
    });
}

export function showErrorMsg(id) {
    var ele = $("#" + id);
    ele.msgShow = function (msg) {
        ele.html(msg).show();
        setTimeout(function () {
            ele.fadeOut(300);
        }, 2000);
    }

    return ele;
}