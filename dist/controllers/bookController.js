"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = __importDefault(require("./../book"));
// We'll start with allBooks which will return
// every we have from our database
exports.allBooks = function (req, res) {
    var books = book_1.default.find(function (err, books) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.getBook = function (req, res) {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid ObjectId, proceed with `findById` call.
        var book = book_1.default.findById(req.params.id, function (err, book) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(book);
            }
        });
    }
    else {
        var s = "Nope for " + req.params.id;
        res.send(s);
    }
};
exports.deleteBook = function (req, res) {
    var book = book_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Book");
        }
    });
};
exports.updateBook = function (req, res) {
    console.log(req.body);
    var book = book_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated book!");
        }
    });
};
exports.addBook = function (req, res) {
    var book = new book_1.default(req.body);
    console.log(req.body);
    console.log(book);
    book.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(book);
            res.send(book);
        }
    });
};
