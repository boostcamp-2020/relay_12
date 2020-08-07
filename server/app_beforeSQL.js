const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

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
  console.log("전체 게시글 리스트 조회 API")
  const data = resObject(200, true, 'TEST', "TEST");
  res.send(suc)
});

// 게시글 상세 조회
app.get('/board/:postId', function (req, res) {
    const postId = req.params.postId;
    console.log("게시글 상세 조회 API")
    console.log("postId: ", postId)
    const data = resObject(200, true, 'TEST', "TEST");
    res.send(data)
  
});

// 게시글 등록
app.post('/board', function (req, res) {
  const params = [req.body.title, req.body.body, req.body.userId];
  console.log("게시글 등록 API")
  console.log(params)
  const data = resObject(200, true, 'TEST');
  res.send(data)
});

// 게시글 수정
app.put('/board/:postId', function(req, res) {
  console.log("게시글 수정 API")
  console.log(req.body.title, req.body.body)
  
  const data = resObject(200, true, 'TEST');
  res.send(data)

});

app.delete('/board/:postId', (req, res) => {
  const params = req.params.postId;
  console.log("게시글 삭제 API");
  console.log("params: ", params, req.query)
  const data = resObject(200, true, 'TEST');
  res.send(data) 
})


app.listen(3000, () => console.log('Server is running on port 3000...'));
