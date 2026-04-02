const { apiClient } = require('../utils/axiosInstance.js');

const getAllPosts = () => apiClient.get('/posts');
const getPostById = (id) => apiClient.get(`/posts/${id}`);
const getCommentsByPostId = (id) => apiClient.get(`/posts/${id}/comments`);
const getAllPhotos = () => apiClient.get('/photos');
const createPost = (body) => apiClient.post('/posts', body);

module.exports = {
    getAllPosts,
    getPostById,
    getCommentsByPostId,
    getAllPhotos,
    createPost
}