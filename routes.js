import List from './List.js';
import Leaderboard from './Leaderboard.js';
import Roulette from './Roulette.js';
import ListPacks from './ListPacks.js';

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
    { path: '/list-packs', component: ListPacks },
];