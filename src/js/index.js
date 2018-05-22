let $ = require("jquery");
import { showErrorMsg, sendAjax } from "./common";
import { API } from "../../config/config";

import "normalize.css";
import "../css/index.css";

$(function () {

    var errorMsgMobile = showErrorMsg('errorMsgMobile');
    var errorMsgCode = showErrorMsg("errorMsgCode");

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
            url: `${API}/v3/sms`,
            method: "post",
            data: {
                countryCode: 86,
                mobile
            },
            beforeSend() {

            },
            complete() {

            },
            success(result) {
                console.log(result);
            },
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
            console.log("code not right");
            errorMsgCode.msgShow("请输入验证码");
            return;
        }

        sendAjax({
            url: `${API}/v3/auth`,
            method: "post",
            data: {
                mobile,
                code,
                authType: "sms",
                countryCode: 86
            },
            success: function (result) {
                if (result.code != 0) {
                    errorMsgCode.msgShow(result.message);
                    return;
                }
                window.location.href = `/path.html?${result.data.uid}_${result.data.token}`;
            },
            error: function (e) {
                console.log(e.statusText);
                errorMsgMobile.msgShow(e.statusText);
            }
        })
    });
});