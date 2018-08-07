import VueRouter from 'vue-router';
import Vue from 'vue';

//侧边组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';

Vue.use(VueRouter);

var router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', redirect: { name: 'heroes' } },
        { name: 'heroes', path: '/heroes', component: HeroesList },
        { name: 'equips', path: '/equips', component: EquipsList },
        { name: 'weapons', path: '/weapons', component: WeaponsList }
    ]
});

export default router;