# Relay_12

## 아이러브스쿨

라떼에는 많이 사용했던 아이러브스쿨을 재해석합니다.

## Week3

### URL : http://localhost:3000/image/upload

### 체크포인트

**프론트엔드**

- 사진 입력 페이지 생성
- 사용자가 사진 두 장을 입력
- 입력받은 사진을 Nodejs 서버에 전송
- 생성된 파일의 이름을 입력받아 이미지 렌더링

**백엔드**

- 프론트로부터 POST 요청으로 사진파일 두 장을 수신
- Python Shell을 통해 사진 합성 파이썬 파일을 실행
- Python FaceSwap 라이브러리를 사용하여 얼굴을 합성
- 합성된 사진을 프론트엔드 프로젝트 폴더 내에 전송
- 구름 컨테이너에 서버를 구축, 외부 접속 가능

### 회고 및 소감

- J160 이지우 : 많은 사람들과 함께 개발해볼 수 있는 기회가 되어 좋았습니다. 잘 모르는 기술에 대해서도 공부하며, 요구사항을 구현하려고 노력하여 완벽하지는 않지만 직접 결과물을 만들어낸 것 이 뿌듯했습니다.
- J090 박진영 : 짧은 시간 안에 온라인 환경속에서 협업을 해야해서 VsCode LiveShare 기능과 ZOOM을 이용했는데 실시간으로 함께 디버깅하고 결과를 확인하는 색다른 경험을 할 수 있어 좋았습니다.

### 1. 인공지능 - 영상인식

예전 모습에 현재 얼굴을 합성하여 보여줍니다.

**DEV** Python3

**Tech** [FaceSwap](https://github.com/wuhuikai/FaceSwap)

### 2. Back-end

Front로부터 이미지를 받아 python 프로그램을 돌린후 합성이미지를 Front-end 프로젝트 내 폴더로 돌려주는 API를 구현했습니다.

Front에서 받아온 이미지는 multer 라이브러리를 활용해 upload폴더에 저장됩니다.

**DEV** Node.js

**TECH** multer

### 3. Front-end

- 풋풋과 늙음 부분에 각각 이미지를 업로드 후, 합성 하기를 클릭 시 NodeJs로 두 사진과 함께 post 요청을 보내게 됩니다.
- 합성된 이미지가 생성되면 위의 경로에 생성된 이미지를 받아와 렌더링하게 됩니다.

![이미지 업로드 페이지]('./image/week3-front.png')

## Week2

### 1. 인공지능 - NLP

게시판 주제에 맞지 않는 글을 필터링하는 기능을 구현하였습니다.

**DEV** Python3, Java

**TECH** Word2vec

> 실행을 위한 Dependency 설치와 기타 관련 내용은 [/server/nlp/README.md](./server/nlp/README.md) 를 확인해주세요.

### 2. Back-end

`admin` 이라는 이름을 가진 user 한 명과 하나의 게시판이 존재한다는 가정하에 구현했습니다.

**DEV** Node.js, Mysql

> - 실행을 위한 Dependency 설치와 기타 관련 내용은 [/server/README.md](./server/README.md) 를 확인해주세요.
> - API 문서는 [Git Wiki](<(https://github.com/boostcamp-2020/relay_12/wiki)>)를 확인해주세요

### 3. Front-end

게시판 페이지, 게시글 상세 페이지, 게시글 등록/수정/삭제를 구현하였습니다.

**DEV** React

> 실행을 위한 Dependency 설치와 기타 관련 내용은 [/front/README.md](./front/README.md) 를 확인해주세요.

**게시판 페이지**
![게시판 페이지](./image/main.png)
