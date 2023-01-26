var express = require("express");
var router = express.Router();
// 引入数据库
let db = require("../db/sql");
// 引入token
let jwt = require("jsonwebtoken");
/* GET home page. */
// 测试主页
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
    next();
});

module.exports = router;
