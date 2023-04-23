import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HomeView from '@/views/home-view.vue';
import MovieView from '@/views/movie-view.vue';
import MoviesView from '@/views/movies-view.vue';
import TvView from '@/views/tv-view.vue';
import ActorsView from '@/views/actors-view.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MovieView,
  },
  {
    path: '/tv',
    name: 'tv',
    component: TvView,
  },
  {
    path: '/actors',
    name: 'actors',
    component: ActorsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
