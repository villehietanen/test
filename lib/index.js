"use strict";
var axios = require('axios');
var baseUrl = 'http://localhost:3000/bookings';
axios.get(baseUrl + "/5bf6aef57c7b2cc029e95aee").then(function (res) {
    console.log(res.data);
});
axios.get(baseUrl + "?uid=5bf6aef57c7b2cc029e95aee").then(function (res) {
    console.log(res.data);
});
