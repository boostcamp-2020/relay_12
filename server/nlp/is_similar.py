import gensim
import sys
from konlpy.tag import Okt

model = gensim.models.Word2Vec.load('./nlp/ko.bin')
with open('./nlp/stopWords.txt', encoding='UTF8') as data :
    stop_words = data.read().splitlines()
with open('./nlp/movieList.txt', encoding='UTF8') as data :
    movie_list = data.read().splitlines()

okt = Okt()

def main(argv):
    tokenized_data = set([word for word in okt.morphs(argv, stem=True) if not word in stop_words])
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
