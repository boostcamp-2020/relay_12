
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const pythonReader = require('./pythonReader');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

// console.log(pythonReader("is_similar.py", "d"));


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

/**
 * 전체 게시글 리스트 조회
 */
app.get('/board', function(req,res){
  let data = null;
  const sql = "SELECT b.id AS postId, b.title, b.body, u.name AS username, b.createdAt, b.isChat FROM board AS b JOIN user AS u ON b.userId = u.id";
  
  connection.query(sql, (error, rows) => {
    if (error) {
      data = resObject(400, false, '전체 게시글 리스트 조회 실패', null);
      res.send(data);
      throw error;
    }
      data = resObject(200, true, '전체 게시글 리스트 조회 성공', { list: rows });
      res.send(data);
  });
});

/**
 * 게시글 상세 정보 조회
 * 존재하지 않는 postId 들어오면 400 반환
 */
app.get('/board/:postId', function (req, res) {
  let data = null;
  const postId = req.params.postId;
  const sql = 'SELECT b.id AS postId, b.title, b.body, u.name AS username, b.createdAt, b.isChat FROM board AS b JOIN user AS u ON b.userId = u.id WHERE b.id =?';
  
  connection.query(sql, postId, (error, rows, fields) => {
    if (error) {
      data = resObject(400, false, '게시글 상세 정보 조희 실패', null);
      res.send(data);
      throw error;
    }
    if (rows[0] === undefined) data = resObject(400, false, '게시글 상세 정보 조회 실패', "존재하지 않는 게시글입니다.");
    else data = resObject(200, true, '게시글 상세 정보 조회 성공', rows[0]);
    res.send(data);
  });
});

/**
 * 게시글 등록
 */
app.post('/board', function (req, res) {
  let data = null;
  const params = [req.body.title, req.body.body, req.body.userId];
  const sql = 'INSERT INTO board (title, body, userId) VALUES(?, ?, ?)';
  
  connection.query(sql, params, (error, rows, fields) => {
    if (error) {
      data = resObject(400, false, '게시글 등록 실패', null);
      res.send(data);
      throw error;
    }
    const postId = rows.insertId;
    data = resObject(200, true, '게시글 등록 성공', { postId });
    res.send(data);
  });
});


/**
 * 게시글 수정
 * 존재하지 않는 postId 들어오면 400 반환
 */
app.put('/board/:postId', function (req, res) {
  let data = null;
  const postId = req.params.postId;
  const params = [req.body.title, req.body.body];
  const sql = 'Update board set title = \'' + params[0] + '\', body = \'' + params[1] + '\'where id = \'' + postId + '\'';
  
  connection.query(sql, params, (error, rows) => {
    if (error) {
      data = resObject(400, false, '게시글 수정 실패', null);
      res.send(data);
      throw error;
    }
    if (rows.affectedRows === 0) data = resObject(400, false, '게시글 수정 실패', "존재하지 않는 게시글입니다.");
    else data = resObject(200, true, '게시글 수정 성공', null);
    res.send(data);
  });
});

/**
 * 게시글 삭제 
 * 존재하지 않는 postId 들어오면 400 반환
 */
app.delete('/board/:postId', (req, res) => {
  let data = null;
  const params = req.params.postId;
  const sql = "DELETE FROM board WHERE id = ?";
  
  connection.query(sql, params, (error, rows) => {
    if (error) {
      data = resObject(400, false, '게시글 삭제 실패');
      res.send(data);
      throw error;
    }
    if (rows.affectedRows === 0) data = resObject(400, false, '게시글 삭제 실패', "존재하지 않는 게시글입니다."); 
    else data = resObject(200, true, '게시글 삭제 성공', null);
    res.send(data)
  });
})


app.listen(3000, () => console.log('Server is running on port 3000...'));
