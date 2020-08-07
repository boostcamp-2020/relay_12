import axios from 'axios';

const endpoint = 'localhost://3000'; // not sure

export const getPosts = async () => {
  const { data } = await axios.get(`${endpoint}/board`);
  return data;
};

export const getPostById = async (postId) => {
  const { data } = await axios.get(`${endpoint}/board/${postId}`);
  return data;
};

export const addPost = async (title, body, userId = 0) => {
  const { data } = await axios.post(`${endpoint}/board`, { title, body });
  return data;
};

export const updatePost = async (postId, title, body) => {
  const { data } = await axios.put(`${endpoint}/board`, { title, body });
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await axios.delete(`${endpoint}/board/${postId}`);
  return data;
};
