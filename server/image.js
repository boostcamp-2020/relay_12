const express = require("express");
const app = express();
//const mysql = require('mysql');
//const dbconfig = require('./config/database.js');
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const ejs = require("ejs");
const pythonShell = require("python-shell");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const storage = multer.diskStorage({
  destination: "./upload/", // 업로드 이미지 저장경로 지정
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname)); // 업로드된 이미지 파일 이름 형식
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 최대 파일사이즈
});

const pythonReader = (fileName, args) => {
  const options = {
    pythonPath: "python3",
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "../FaceSwap", //FaceSwap path 변경 필요
    args: args,
  };

  pythonShell.PythonShell.run(fileName, options, function (err, results) {
    if (err) throw err;
    else {
      console.log(results);
    }
  });
};
// multer().fields({name : key}, {name : key}, ...) 매칭되는 키로 여러개의 파일을 구분
app.post(
  "/upload",
  upload.fields([{ name: "before" }, { name: "after" }]),
  function (req, res) {
    // api 실행
    console.log(req.files.before[0]);
    console.log(req.files.after[0]);

    let fileName1 = req.files.before[0].filename;
    let fileName2 = req.files.after[0].filename;

    let str = `--src ../server/upload/${fileName1} --dst ../server/upload/${fileName2} --out ../front/src/components/images/${fileName1} --correct_color`; // FaceSwap 돌릴 파일의 위치를 String으로 저장

    pythonReader("main.py", str);

    //pythonReader("is_similar.py", params[1], postId)
    //python main.py --src imgs/test6.jpg --dst imgs/test7.jpg --out results/output6_7.jpg --correct_color

    res.send(`${fileName1}`); // 프론트로 FaceSwap된 파일 보내줌                                             *!!!! 수정필요 !!!!*
    // res.send({
    //     fileName: [req.files.before[0].filename, req.files.after[0].filename]
    // })
  }
);

app.get("/", function (req, res, next) {
  // 정상 동작 확인을 위한 get 방식
  res.send("hello");
});

app.listen(4000, () => console.log("Server is running on port 4000..."));
