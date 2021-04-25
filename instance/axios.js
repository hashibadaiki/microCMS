import Axios from 'axios';

// functions 使用の際に利用
// こちらも利用時に確認する

const api = Axios.create({
  baseURL: `https://${process.env.SERVICE_ID}.microcms.io/api/v1/`,
  headers: { 'X-API-KEY': process.env.API_KEY },
});

export default api;
