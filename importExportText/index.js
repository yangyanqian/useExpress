const express = require('express');
var router = express.Router();

import { dogSay, catSay } from './testEs6Export' //export方式导出
import m from './testEs6Export' //export default方式导出的
import * as testModule from './testEs6Export' //as 集合成对象导出

/* GET home page */
router.get('/', (req, res, next) => {
    dogSay();
    catSay();
    console.log(m);
    testModule.dogSay();
    console.log(testModule.m);
    console.log(testModule.default);
    res.send('Home Page');
})

module.exports = router;