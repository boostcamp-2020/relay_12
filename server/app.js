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

// get board
app.get('/board', function(req,res){
    function list(postId, title, username, createAt, isChat){
        this.postId = postId
        this.title = title
        this.username = username
        this.createAt = createAt
        this.isChat = isChat
    }
    let suc = {
      status: 200,
      success: true,  
      message: '전체 게시글 리스트 조회 성공',
      data: {
        list: []
      }
    }
    let fail = {
      status: 400,
      success: false,  
      message: '전체 게시글 리스트 조회 실패',
      data: null
    }
    // connection.connect();
    // connection.query('SELECT postId, title, username, createAt, isChat from Post', (error, rows, fields) => {
    //   if (error)res.send(fail);
    //   else
    //       suc.data.list.push(new list(rows.postId, rows.title,rows.username, rows.createAt, rows.isChat))
    // });
    res.send(suc)
});

app.listen(3000, () => console.log('Server is running on port 3000...'));
