import axios from 'axios';

const endpoint = 'http://localhost:3000'; // not sure

// 전체 게시글 리스트 조회
export const getPosts = async () => {
  const { data } = await axios.get(`${endpoint}/board`);
  return data;
};

// 게시글 상세 정보 조회
export const getPostById = async (postId) => {
  const { data } = await axios.get(`${endpoint}/board/${postId}`);
  return data;
};

// 게시글 등록
export const addPost = async (title, body, userId = 0) => {
  const { data } = await axios.post(`${endpoint}/board`, { title, body, userId });
  return data;
};

// 게시글 수정
export const updatePost = async (postId, title, body) => {
  const { data } = await axios.put(`${endpoint}/board/${postId}`, { title, body });
  return data;
};

// 게시글 삭제
export const deletePost = async (postId) => {
  const { data } = await axios.delete(`${endpoint}/board/${postId}`);
  return data;
};
