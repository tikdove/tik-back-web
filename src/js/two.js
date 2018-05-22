let $ = require("jquery");
import { showErrorMsg, sendAjax } from "./common";
import { API } from "../../config/config";


import "normalize.css";
import "../css/index.css";

let token = location.search.substring(1);
token = token.split("_").join(" ");


// send ajax, 获取两个参数
if (location.href.indexOf("path.html") > -1) {
    sendAjax({
        url: `${API}/v3/remaining`,
        headers: {
            authorization: token
        },
        success(result) {
            console.log("success", result);
            if (result.code != 0) {
                alert(result.message);
                window.location.href = "/";
            }
            let rest = result.data;
            if (rest <= 0) {
                $("#sendBtn").hide();
                $("#overBtn").show();
            }

            $("#gaven").html(100000 - rest);
            $("#rest").html(rest);
        },
        error(e) {
            console.log(1234, e);
        }
    })
}


// 显示两个参数，决定是否可以提交

var errorMsgMobile = showErrorMsg("errorMsgMobile");
$("#sendBtn").on("click", function () {
    var address = $("#packAddress").val();
    if (!address) {
        errorMsgMobile.msgShow("钱包地址错误，请核对提交");
        return;
    }

    sendAjax({
        url: `${API}/v3/wallet`,
        method: "put",
        headers: {
            authorization: token
        },
        data: {
            wallet: address
        },
        success: function (result) {
            if (result.code == 0) {
                // location.href = "/result.html" + location.search;
            } else {
                alert(result.message);
            }
        },
        error: function (e) {
            console.log(123445, e);
            errorMsgMobile.msgShow(e.statusText);
        }
    })
});

/* result.html */
if (location.href.indexOf("result.html") > 0) {
    if (!token) {
        alert("token不存在");
    }

    sendAjax({
        url: `${API}/v3/user_profile`,
        headers: {
            authorization: token
        },
        success(result) {
            console.log(11111, result);
        },
        error(e) {
            console.log(4444, e);
            alert(e.statusText)
        }
    })
}