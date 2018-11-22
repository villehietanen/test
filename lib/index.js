"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var baseUrl = 'http://localhost:3000/bookings';
axios_1.default.get("" + baseUrl).then(function (res) {
    console.log(res.data);
    console.log('find first');
    axios_1.default.get(baseUrl + "/" + res.data[0]._id).then(function (res) {
        console.log(res.data);
    });
});
axios_1.default.get(baseUrl + "/5bf6aef57c7b2cc029e95aee").then(function (res) {
    console.log(res.data);
});
axios_1.default.get(baseUrl + "?uid=5bf6aef57c7b2cc029e95aee").then(function (res) {
});
