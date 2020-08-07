
const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);



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

    if (!body) { } // 실패
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
app.put('/board/:postId', function (req, res) {
    let body = req.body;

    if (!body) { } // 실패

    let params = [body.title, body.body];
    console.log(params);

    /**
     * DB 
     */

    const data = resObject(200, true, '게시글 수정 성공', null);
    // const data = resObject(400, false, '게시글 등록 실패', null);

    res.send(data)
});

app.delete('/board',(req, res) => {
    const params = req.query.postId;
    const sql = "DELETE FROM board WHERE id =?";
    connection.query(sql, params,(error, rows, fields) => {
        if (error) throw error;
        console.log("삭제 성공");
    });

})


app.get('/', (req, res) => {
    connection.query('SELECT * from User;', (error, rows) => {
        if (error) throw error;
        console.log('User info is: ', rows);
        res.send(rows);
    });
});


app.listen(3000, () => console.log('Server is running on port 3000...'));





