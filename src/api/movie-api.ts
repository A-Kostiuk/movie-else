import axios, {InternalAxiosRequestConfig} from 'axios';
import {ExtendedDescMovie, InCinemaRes} from '@/interfaces/movie-api';

export const api = axios.create({
  baseURL: process.env.VUE_APP_MOVIE_API_BASE_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Authorization'] = `Bearer ${process.env.VUE_APP_MOVIE_API_KEY}`;
  config.url = config.url + '&language=uk';
  return config;
});

const movieApi = {
  fetchInCinema: async (page = 1) => {
    try {
      const res = await api.get<InCinemaRes>(`/movie/now_playing?page=${page}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  fetchMovie: async (id: string) => {
    try {
      const res = await api.get<ExtendedDescMovie>(`/movie/${id}?`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default movieApi;
