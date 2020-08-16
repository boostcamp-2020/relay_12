# RELAY 12 - SERVER

## 담당자

> week2 : 김다인 김혜지 이기훈 송원석

> week3 : 박진영 이지우 박솔민

## HOW TO START?

### server

1. download repository
2. cd /server
3. npm install
4. npm run start ( = npx nodemon app.js = node app.js) - week2
5. node image.js - week3

(DB 설치 전이라면, node app_beforeSQL.js 로 테스트 가능합니다.)

### DB

1. install [mysql_workbench](https://dev.mysql.com/downloads/workbench/)
2. - 버튼을 클릭해주세요
     ![db_instruction(1)](<./image/server_DBinst(1).png>)
3. 아래와 동일하게 입력해주세요.
   ![db_instruction(2)](<./image/server_DBinst(2).png>)
4. server/sql.sql 내용 복사, 입력
5. 번개 모양 클릭 시 테이블 생성, 완료!
   ![db_instruction(3)](<./image/server_DBinst(3).png>)
