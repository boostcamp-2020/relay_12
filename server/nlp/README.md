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
> is_similar.py 가 실행될 때 출력된 사항들이 callback 에 담겨 반환된다.
> True 라는 문자열이 반환되면 모임과 관련된 글이고
> False 이면 연관성이 떨어지는 글이다.