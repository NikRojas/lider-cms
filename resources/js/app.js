window.Vue = require('vue');
require('./bootstrap-vue');
require('./axios');



import Sweetalert2 from 'sweetalert2/src/sweetalert2.js';
window.Swal = Sweetalert2;
window.Slug = require('slug');
Slug.defaults.mode = "rfc3986";

import VueJamIcons from 'vue-jam-icons'
Vue.use(VueJamIcons)

import VueFlags from "@growthbunker/vueflags";
Vue.use(VueFlags, {
    // Specify the path of the folder where the flags are stored.
    iconPath: '/files/img/flags/',
});

const app = new Vue({
    el: '#app',
    components: {
        login: () => import('./views/auth/Login.vue' /* webpackChunkName: "js/pages/login" */),
        'button-menu': () => import('./components/layout/ButtonMenu.vue' /* webpackChunkName: "js/components/button-menu" */),
        'button-close': () => import('./components/layout/ButtonClose.vue' /* webpackChunkName: "js/components/button-close" */),
        'button-icons': () => import('./components/layout/ButtonIcons.vue' /* webpackChunkName: "js/components/button-icons" */),

        'users': () => import('./views/configuration/Users.vue' /* webpackChunkName: "js/pages/users" */),

        'content-general-information': () => import('./views/content/GeneralInformation.vue' /* webpackChunkName: "js/pages/content/general-information" */),
        'content-members': () => import('./views/content/Members.vue' /* webpackChunkName: "js/pages/content/members" */),
        'content-social-networks': () => import('./views/content/SocialNetworks.vue' /* webpackChunkName: "js/pages/content/social-networks" */),
        //'seo': () => import('./views/info/Seo.vue' /* webpackChunkName: "js/seo" */),

        //'category': () => import('./views/blog/Category.vue' /* webpackChunkName: "js/category" */),
        //'posts': () => import('./views/blog/Post.vue' /* webpackChunkName: "js/posts" */),
        
        'profile': () => import('./views/Profile.vue' /* webpackChunkName: "js/pages/profile" */),

        //'dashboard': () => import('./views/Dashboard.vue' /* webpackChunkName: "js/dashboard" */),
        //'applicants': () => import('./views/Applicants.vue' /* webpackChunkName: "js/applicants" */),

        //'testimonials': () => import('./views/Testimonials.vue' /* webpackChunkName: "js/testimonials" */),

        'reset': () => import('./views/auth/Reset.vue' /* webpackChunkName: "js/pages/reset" */),
        'administration-status-project': () => import('./views/administration/StatusProject.vue' /* webpackChunkName: "js/pages/administration/status-project" */),
        'administration-features-project': () => import('./views/administration/FeaturesProject.vue' /* webpackChunkName: "js/pages/administration/features-project" */),
        'slider-index': () => import('./views/slider/Index.vue' /* webpackChunkName: "js/pages/slider/index" */),
        'slider-create': () => import('./views/slider/Create.vue' /* webpackChunkName: "js/pages/slider/create" */),
        'slider-edit': () => import('./views/slider/Edit.vue' /* webpackChunkName: "js/pages/slider/edit" */),
        'administration-financial-entities': () => import('./views/administration/FinancialEntities.vue' /* webpackChunkName: "js/pages/administration/financial-entities" */),
        'administration-advisors': () => import('./views/administration/Advisors.vue' /* webpackChunkName: "js/pages/administration/advisors" */),
        'administration-exchange': () => import('./views/administration/Exchange.vue' /* webpackChunkName: "js/pages/administration/exchange" */),
    }
});
import Validation from './functions/validation.js'
Vue.use(Validation,{ app });
