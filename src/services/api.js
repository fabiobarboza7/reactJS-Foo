import axios from 'axios';

function query(q) {
  return q;
}

const api = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/search?api_key=jU6ab4lFD2HaKsegBe5HFVT4v1Yc54tx&q=${query()}&limit=10&offset=0&rating=G&lang=en`,
});

export default { api, query };
