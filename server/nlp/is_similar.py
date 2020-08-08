import gensim
import sys
from konlpy.tag import Okt

model = gensim.models.Word2Vec.load('./nlp/ko.bin')
with open('./nlp/stopWords.txt', encoding='UTF8') as data :
    stopwords = data.read().splitlines()
movie_list = ['할리우드', '개그', '영화', '연출가', '로맨스', '뮤지컬', '속편', '영화화하', '코믹스', '연속극', '시대극', '기획사',
              '원작', '제작사', '실사', '장편', '영화계', '무협', '로맨틱', '스릴러', '만화', '애니메이션', '단막극', '연극', '서부극', '영화인', '영화사', '코미디', '안무가', '시리즈', '배급사',
              '코미디언', '시트콤', '드라마', '사극', '희극', '히치콕', '소설', '음반사', '픽처스', '방영', '미스터리', '오리지널', '만화책', '다큐멘터리']
okt = Okt()

def main(argv):
    tokenized_data = set([word for word in okt.morphs(argv, stem=True) if not word in stopwords])
    sum = 0
    all = len(movie_list)+len(tokenized_data)
    for token in tokenized_data :
        for movie in movie_list:
            try:
                sum += model.wv.similarity(token, movie)
            except:
                continue
    print((sum/all)>=0.5)

if __name__ == "__main__":
    main(sys.argv[1])
