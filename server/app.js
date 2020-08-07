
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const cors = require('cors');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

// const corsOptions = {
//   origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
//   credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
// };

// app.use(cors(corsOptions)); // config 추가

const resObject = (status, success, message, data) => {    
  this.status = status,
  this.success = success,
  this.message = message,
  this.data = data
  return this
}

app.get('/', function (req, res) {
    res.send('ROOT');
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


app.get('/board/:postId', function (req, res) {
  const postId = req.params.postId;

  const sql = 'SELECT * FROM board WHERE ID = ?';
  connection.query(sql, postId, (error, rows, fields) => {
    if (error) throw error;
    console.log(rows); // isChat : false 가 아니라 0이 입력됨 0: false, 1:true로 판단
    const data = resObject(200, true, '게시글 상세 정보 조회 성공', rows);
    res.send(data)
  });
  
});

// post create
app.post('/board', function (req, res) {
  const sql = 'INSERT INTO board (title, body, userId) VALUES(?, ?, ?)';
  const params = [req.body.title, req.body.body, req.body.userId];
  
  connection.query(sql, params, (error, rows, fields) => {
    if (error) throw error;
    const data = resObject(200, true, '게시글 등록 성공');
    res.send(data)
  });
});

// post create
app.put('/board', function(req, res) {
 
  connection.query(sql, params, (error, rows, fields) => {
    if (error) throw error;
    const data = resObject(200, true, '게시글 수정 성공');
    res.send(data)
  });

});

app.delete('/board', (req, res) => {
  const params = req.query.postId;
  const sql = "DELETE FROM board WHERE id =?";
  connection.query(sql, params, (error) => {
    if (error) throw error;
    console.log("삭제 성공");
  });

})


app.listen(3000, () => console.log('Server is running on port 3000...'));
