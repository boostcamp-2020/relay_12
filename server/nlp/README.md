# RELAY 12 - NLP

## 담당자

> week2 : 임현유, 김남진, 탁성건, 하이현

## dependency

> gensim, konlpy

```
pip install gensim
pip install konlpy
```

### konlpy 설치 오류 시
- Java 가 설치되어 있는지 확인한다.
-- konlpy의 의존성인 JPype1이 JAVA_HOME 환경변수를 필요로 한다.
- pip 버전을 업그레이드 한다.
- JPype1 버전을 업그레이드 한다. 

## HOW TO START?
```
python is_similar.py "문화 컨텐츠 관련글"
```

## Nodejs 연동
> Python Shell 을 통해 is_similar.py 를 실행할 때 매개변수로 게시물의 본문을 받는다.
> is_similar.py 가 실행될 때 출력된 사항들이 `배열`에 담겨 callback 의 매개변수로 넘어온다.
> 배열안에 True 라는 문자열이 담겨 있으면 모임과 관련된 글이고
> False 이면 연관성이 떨어지는 글이다.

### 실행 예시
```
const pythonShell = require('python-shell').PythonShell

const options = {
    mode:'text',
    pythonPath: "",
    scriptPath: '',
    pythonOptions: ['-u'],
    args:["오늘 영화 어땟어?"]
}

pythonShell.run("is_similar.py", options, (err, result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})
```

> 출력 결과 : [ 'True' ]

### spawn py ENOENT 오류 시

```
> npx nodemon app.js

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node app.js`
undefined
events.js:292
      throw er; // Unhandled 'error' event
      ^

Error: spawn py ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)
    at onErrorNT (internal/child_process.js:469:16)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
Emitted 'error' event on ChildProcess instance at:
    at Process.ChildProcess._handle.onexit (internal/child_process.js:273:12)
    at onErrorNT (internal/child_process.js:469:16)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  errno: 'ENOENT',
  code: 'ENOENT',
  syscall: 'spawn py',
  path: 'py',
  spawnargs: [ '-u', 'nlp\\is_similar.py', 'd' ]
}
[nodemon] app crashed - waiting for file changes before starting...
```

위와 같은 오류 발생 시 `pythonPath`를 'python' 으로 설정하면 된다.

```
const options = {
    mode:'text',
    pythonPath: "python",
    scriptPath: '',
    pythonOptions: ['-u'],
    args:["오늘 영화 어땟어?"]
}
```

