import axios from 'axios';
// import dotenv from 'dotenv'
// dotenv.config({path: "./config.env"})
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'dba5695473msh794e53f06df4a46p1831ecjsn3b93f750bf6a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;


};