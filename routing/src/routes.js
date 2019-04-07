// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'

//COMMENTED THE IMPORTS ABOVE TO LAZY LOADING ROUTES, SHOWN BELOW.

import Home from './components/Home.vue'
import Header from './components/Header.vue'

// Lazy Loading Routes
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};

export const routes = [
    // {path: '', component: Home ,name: 'home'},
    {path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }},
    // {path: '/user',component :User, children: [
    //     {path: '', component: UserStart },
    //     {path: ':id', component: UserDetail},
    //     {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    // ]},
    {path: '/user',components: {
        default: User,
        'header-bottom': Header
    }, children: [
        {path: '', component: UserStart },
        {path: ':id', component: UserDetail, beforeEnter: (to,from,next) => {
            console.log('inside route setup');
            next();
        }},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]},
    {path: '/redirect-me', redirect: '/user'},
    //WE CAN ALSO PASS AN OBJECT TO REDIRECT
    // {path: '/redirect-me', redirect: {name: 'userEdit'}}

    // REDIRECT ALL OTHER PATHS TO THE HOME PAGE
    {path: '*', redirect: '/'}

];