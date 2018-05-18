let $ = require("jquery");
import { showErrorMsg, sendAjax } from "./common";

import "normalize.css";
import "../css/index.css";

$(function () {
    // send ajax, 获取两个参数

    // 显示两个参数，决定是否可以提交

    var errorMsgMobile = showErrorMsg("errorMsgMobile");
    $("#sendBtn").on("click", function () {
        var address = $("#packAddress").val();
        if (!address) {
            errorMsgMobile.msgShow("钱包地址错误，请核对提交");
            return;
        }

        location.href = "/three";

        sendAjax({
            url: "/gg",
            method: "post",
            data: {
                address: address
            },
            success: function (result) {

            },
            error: function (e) {
                errorMsgMobile.msgShow(e.statusText);
            }
        })
    });
});