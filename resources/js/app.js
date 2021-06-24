window.Vue = require('vue');
require('./bootstrap-vue');
require('./axios');

import { Timeline } from 'ant-design-vue';
Vue.use(Timeline);

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

        'advisory-system-general-information': () => import('./views/advisory-system/GeneralInformation.vue' /* webpackChunkName: "js/pages/advisory-system/general-information" */),

        'content-general-information': () => import('./views/content/GeneralInformation.vue' /* webpackChunkName: "js/pages/content/general-information" */),
        'content-members': () => import('./views/content/Members.vue' /* webpackChunkName: "js/pages/content/members" */),
        'content-social-networks': () => import('./views/content/SocialNetworks.vue' /* webpackChunkName: "js/pages/content/social-networks" */),
        'content-seo': () => import('./views/content/Seo.vue' /* webpackChunkName: "js/pages/content/seo" */),
        'content-certifications': () => import('./views/content/Certifications.vue' /* webpackChunkName: "js/pages/content/certifications" */),
        'content-about': () => import('./views/content/about/Index.vue' /* webpackChunkName: "js/pages/content/about" */),

        'category': () => import('./views/blog/Category.vue' /* webpackChunkName: "js/pages/blog/category" */),

        'posts': () => import('./views/blog/post/Index.vue' /* webpackChunkName: "js/pages/blog/post" */),
        'posts-create': () => import('./views/blog/post/Create.vue' /* webpackChunkName: "js/pages/blog/post/create" */),
        'posts-edit': () => import('./views/blog/post/Edit.vue' /* webpackChunkName: "js/pages/blog/post/create" */),

        'profile': () => import('./views/Profile.vue' /* webpackChunkName: "js/pages/profile" */),

        'dashboard': () => import('./views/dashboard/Index.vue' /* webpackChunkName: "js/pages/dashboard" */),
        'applicants': () => import('./views/Applicants.vue' /* webpackChunkName: "js/pages/applicants" */),

        //lead
        'online': () => import('./views/lead/online.vue' /* webpackChunkName: "js/pages/lead/online" */),
        'traditional': () => import('./views/lead/traditional.vue' /* webpackChunkName: "js/pages/lead/traditional" */),
        'landsale': () => import('./views/lead/landsale.vue' /* webpackChunkName: "js/pages/lead/landsale" */),

        'cami': () => import('./views/cami.vue' /* webpackChunkName: "js/pages/cami" */),
        'cami-projects': () => import('./views/CamiProjects.vue' /* webpackChunkName: "js/pages/cami-projects" */),

        'testimonials': () => import('./views/Testimonials.vue' /* webpackChunkName: "js/pages/testimonials" */),

        'reset': () => import('./views/auth/Reset.vue' /* webpackChunkName: "js/pages/reset" */),
        'administration-status-project': () => import('./views/administration/StatusProject.vue' /* webpackChunkName: "js/pages/administration/status-project" */),
        'administration-features-project': () => import('./views/administration/FeaturesProject.vue' /* webpackChunkName: "js/pages/administration/features-project" */),
        'slider-index': () => import('./views/slider/Index.vue' /* webpackChunkName: "js/pages/slider/index" */),
        'slider-create': () => import('./views/slider/Create.vue' /* webpackChunkName: "js/pages/slider/create" */),
        'slider-edit': () => import('./views/slider/Edit.vue' /* webpackChunkName: "js/pages/slider/edit" */),
        'administration-financial-entities': () => import('./views/administration/FinancialEntities.vue' /* webpackChunkName: "js/pages/administration/financial-entities" */),
        'administration-advisors': () => import('./views/administration/Advisors.vue' /* webpackChunkName: "js/pages/administration/advisors" */),
        'administration-exchange': () => import('./views/administration/Exchange.vue' /* webpackChunkName: "js/pages/administration/exchange" */),
        'administration-bonds': () => import('./views/administration/Bonds.vue' /* webpackChunkName: "js/pages/administration/bonds" */),

        'administration-views': () => import('./views/administration/Views.vue' /* webpackChunkName: "js/pages/administration/views" */),
        'administration-types': () => import('./views/administration/Types.vue' /* webpackChunkName: "js/pages/administration/types" */),

        'projects-index': () => import('./views/projects/Index.vue' /* webpackChunkName: "js/pages/projects/index" */),
        'projects-create': () => import('./views/projects/Create.vue' /* webpackChunkName: "js/pages/projects/create" */),
        'projects-edit': () => import('./views/projects/Edit.vue' /* webpackChunkName: "js/pages/projects/edit" */),
        'projects-gallery-index': () => import('./views/projects/gallery/Index.vue' /* webpackChunkName: "js/pages/projects/gallery/index" */),
        'projects-banner-index': () => import('./views/projects/banner/Index.vue' /* webpackChunkName: "js/pages/projects/banner/index" */),
        'projects-files-index': () => import('./views/projects/files/Index.vue' /* webpackChunkName: "js/pages/projects/files/index" */),
        'projects-read': () => import('./views/projects/Read.vue' /* webpackChunkName: "js/pages/projects/read" */),
        'projects-tipologies-index': () => import('./views/projects/tipologies/Index.vue' /* webpackChunkName: "js/pages/projects/tipologies/index" */),
        'projects-blueprints-index': () => import('./views/projects/blueprints/Index.vue' /* webpackChunkName: "js/pages/projects/blueprints/index" */),
        'projects-quotations-index': () => import('./views/projects/quotations/Index.vue' /* webpackChunkName: "js/pages/projects/quotations/index" */),
        'projects-virtual-index': () => import('./views/projects/virtual/Index.vue' /* webpackChunkName: "js/pages/projects/virtual/index" */),
        'projects-credentials-index': () => import('./views/projects/credentials/Index.vue' /* webpackChunkName: "js/pages/projects/credentials/index" */),
        'projects-tps-index': () => import('./views/projects/platform-general-information/Index.vue' /* webpackChunkName: "js/pages/projects/platform-general-information/index" */),

        'complaints-book': () => import('./views/ComplaintsBook.vue' /* webpackChunkName: "js/pages/complaints-book" */),
        'suscribers': () => import('./views/Suscribers.vue' /* webpackChunkName: "js/pages/suscribers" */),

        'customers-index': () => import('./views/customers/Index.vue' /* webpackChunkName: "js/pages/customers/index" */),
        'customers-read': () => import('./views/customers/Read.vue' /* webpackChunkName: "js/pages/customers/read" */),

        'orders-index': () => import('./views/orders/Index.vue' /* webpackChunkName: "js/pages/orders/index" */),
        'orders-read': () => import('./views/orders/Read.vue' /* webpackChunkName: "js/pages/orders/read" */),

        'statistics-index': () => import('./views/statistics/Index.vue' /* webpackChunkName: "js/pages/statistics/index" */),
        'configuration-general': () => import('./views/configuration/General/Index.vue' /* webpackChunkName: "js/pages/configuration/general" */),
        "content-general-content": () =>
            import(
                "./views/content/GeneralContent.vue" /* webpackChunkName: "js/pages/content/general-content" */
            ),

        'projects-departments-index': () => import('./views/projects/departments/Index.vue' /* webpackChunkName: "js/pages/projects/departments/index" */),
        'configuration-logs-sap': () => import('./views/configuration/LogsSap.vue' /* webpackChunkName: "js/pages/configuration/logs-sap" */),
    }
});
import Validation from './functions/validation.js'
Vue.use(Validation, { app });
