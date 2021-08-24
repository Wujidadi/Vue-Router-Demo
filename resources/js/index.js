import { vueDemoHomePage, vueDemoAboutPage } from "./component";

/* 定義 Vue route 元件 */
const demoVueHome  = { template: vueDemoHomePage  },
      demoVueAbout = { template: vueDemoAboutPage };

/* URL 與元件對應 */
const demoVueRoutes = [
    { path: '/',      component: demoVueHome  },
    { path: '/about', component: demoVueAbout }
];

/* Vue Router 實體 */
const demoVueRouter = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: demoVueRoutes
});

/* Vue 實體 */
const demoVueApp = Vue.createApp({});
demoVueApp.use(demoVueRouter);
demoVueApp.mount('#vue-app');
