//import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Introduction from './src/views/IntroductionView.vue';
import Encounter from './src/views/EncounterView.vue';
import Conflict from './src/views/ConflictView.vue';
import Climax from './src/views/ClimaxView.vue';
import Final from './src/views/FinalView.vue';
//import { routes } from 'vue-router/auto-routes';

//Vue.use(Router);

export default new createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Introduction},
        {path: '/encounter', component: Encounter},
        {path: '/conflict', component: Conflict},
        {path: '/climax', component: Climax},
        {path: '/final', component: Final}
    ]
});