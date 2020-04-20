"use strict";
exports.__esModule = true;
var express_1 = require("express");
// Our Express APP config
var app = express_1["default"]();
app.use(express_1["default"].json());
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get("/", function (req, res, res, send) { return ; }, ("hi"));
var server = app.listen(app.get("port"), function () {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
