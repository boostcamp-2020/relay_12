# RELAY 12 - SERVER

## 담당자
> week2 : 김다인 김혜지 이기훈 송원석 

## HOW TO START?

### DB
1. install [mysql_workbench](https://dev.mysql.com/downloads/workbench/)
2. click + button
![server_DBinst(1)]()
3. 아래와 맞게 같이 입력해주세요.  (이미지 넣기 전 임시)
module.exports = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'relay12_db'
};
![server_DBinst(2)]()
4. server/sql.sql 내용 복사, 입력 
5. 번개 모양 클릭 시 테이블 생성, 완료!
![server_DBinst(3)]()


### server
1. download repository
2. cd /server
3. npm install
4. npx nodemon app.js
