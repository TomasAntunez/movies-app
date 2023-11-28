import axios from 'axios';

import { MOVIE_DB_BEARER_TOKEN } from '../constants';


const movieDBApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Authorization: MOVIE_DB_BEARER_TOKEN
  },
  params: {
    language: 'es-ES'
  }
});


export { movieDBApi };
