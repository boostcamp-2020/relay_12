import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/Post/Posts';
import Pagination from '../components/Post/Pagination';
import { getPosts } from '../lib/api';
import './mainpage.css';

const MainPage = () => {
  const [TotalPosts, setTotalPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [flag, setFlag] = useState(true);

  const FilterChat = () => {
    if (flag) {
      let filtered = TotalPosts.filter((e) => {
        return !e.isChat;
      });
      setPosts(filtered);
      setCurrentPage(1);
    } else {
      setPosts(TotalPosts);
      setCurrentPage(1);
    }
    setFlag(!flag);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await getPosts();
      setTotalPosts(res.data.list);
      setPosts(res.data.list);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container ">
        <div className="FilterbtnContainer">
          <Link to="/write">
            <button>글쓰기</button>
          </Link>
          <button onClick={FilterChat}>{flag ? '잡담거르기' : '잡담보기'}</button>
        </div>

        {loading ? (
          <div>로딩 중...</div>
        ) : (
          <table className="BoardContainer">
            <thead>
              <tr>
                <th>No.</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              <Posts posts={currentPosts} />
            </tbody>
          </table>
        )}

        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};
export default MainPage;
