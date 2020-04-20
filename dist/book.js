"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/local";
mongoose_1.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose_1.model("Book", exports.BookSchema);
exports.default = Book;
