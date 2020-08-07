var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function (req, res) {
    res.send('ROOT');
});


const resObject = (status, success, message, data) => {    
        this.status = status,
        this.success = success,
        this.message = message,
        this.data = data
        return this
}
    
// post create
app.post('/board', function (req, res) {
    let body = req.body;

    if (!body) {} // 실패
    console.log(body);
    
    let params = [body.title, body.body, body.userId];
    console.log(params);

    /** 
     * DB query
     */

    const data = resObject(200, true, '게시글 등록 성공', { postId: 1234 });
    // const data = resObject(400, false, '게시글 등록 실패', null);


    res.send(data)
});

// post create
app.put('/board/:postId', function(req, res) {
    let body = req.body;
    
    if(!body) {} // 실패

    let params = [body.title, body.body];
    console.log(params);

    /**
     * DB 
     */

    const data = resObject(200, true, '게시글 수정 성공', null);
    // const data = resObject(400, false, '게시글 등록 실패', null);

    res.send(data)
});

app.listen(3000, () => console.log('Server is running on port 3000...'));
