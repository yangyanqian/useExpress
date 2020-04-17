import Express from 'express'
let app = Express();

// ? yangqian
/* app.get('/', (req, res) => {
    res.send('Hello world yoyoyfef');
}) */

var es6Test = require('./importExportText/index');
app.get('/', es6Test);

app.listen(8888, () => {
    console.log('starting at part 8888');
})