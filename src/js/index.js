let $ = require("jquery");
import { showErrorMsg, sendAjax } from "./common";

import "normalize.css";
import "../css/index.css";

$(function () {

    var errorMsgMobile = showErrorMsg('errorMsgMobile');
    var errorMsgCode = showErrorMsg("showErrorMsg");

    var isSendCode = null;
    $("#sendCode").on("click", function (e) {
        e.preventDefault();
        if (isSendCode) {
            return;
        }

        var mobile = $("#mobile").val();
        if (!/\d{11}/.test(mobile)) {
            errorMsgMobile.msgShow("请输入正确的手机号码");
            return;
        }

        sendAjax({
            url: "abc",
            error: function (e) {
                console.log(e.statusText);
                errorMsgMobile.msgShow(e.statusText);
            }
        })

        var times = 10, _this = $(this);
        _this.addClass("regist-code-disable");
        _this.html(times-- + 's');
        isSendCode = setInterval(function () {
            if (times <= 0) {
                clearInterval(isSendCode);
                isSendCode = null;
                _this.html("重新获取");
                return;
            }

            _this.html(times-- + 's');
        }, 1000);
    });

    $("#registGo").on("click", function (e) {
        e.preventDefault();
        var code = $("#inputCode").val(),
            mobile = $("#mobile").val();
        if (!mobile) {
            errorMsgMobile.msgShow("请输入正确的手机号码");
            return;
        }

        if (!code) {
            errorMsgCode.msgShow("请输入验证码");
            return;
        }

        window.location.href = "/two";
        sendAjax({
            url: "/abc",
            method: "post",
            data: {
                mobile: mobile,
                code: code
            },
            success: function (result) {

            },
            error: function (e) {

            }
        })
    });
});