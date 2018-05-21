let $ = require("jquery");
import { showErrorMsg, sendAjax } from "./common";
import { API } from "../../config/config";


import "normalize.css";
import "../css/index.css";

let token = location.search.substring(1);



//{uid: "5b025abd3a9b2f0022c437d0", token: "299cce26963161db4b48f431386cb04f"}
// send ajax, 获取两个参数
sendAjax({
    url: `${API}/v3/remaining`,
    headers: {
        uid: "5b025abd3a9b2f0022c437d0",
        token: "299cce26963161db4b48f431386cb04f"
    },
    success(result) {
        console.log("success", result);
    },
    error(e) {
        console.log(1234, e);
    }
})


// 显示两个参数，决定是否可以提交

var errorMsgMobile = showErrorMsg("errorMsgMobile");
$("#sendBtn").on("click", function () {
    var address = $("#packAddress").val();
    if (!address) {
        errorMsgMobile.msgShow("钱包地址错误，请核对提交");
        return;
    }

    location.href = "/result.html";

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