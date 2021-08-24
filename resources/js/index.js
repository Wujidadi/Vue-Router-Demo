import { vueDemoHomePage, vueDemoAboutPage, vueDemoColorPages } from "./component";

/* 定義 Vue route 元件 */
const demoVueHome   = { template: vueDemoHomePage          },
      demoVueAbout  = { template: vueDemoAboutPage         },
      demoVueRed    = { template: vueDemoColorPages.red    },
      demoVueOrange = { template: vueDemoColorPages.orange },
      demoVueYellow = { template: vueDemoColorPages.yellow },
      demoVueGreen  = { template: vueDemoColorPages.green  },
      demoVueBlue   = { template: vueDemoColorPages.blue   },
      demoVueIndigo = { template: vueDemoColorPages.indigo },
      demoVuePurple = { template: vueDemoColorPages.purple };

/* URL 與元件對應 */
const demoVueRoutes = [
    { path: '/',       component: demoVueHome   },
    { path: '/about',  component: demoVueAbout  },
    { path: '/red',    component: demoVueRed    },
    { path: '/orange', component: demoVueOrange },
    { path: '/yellow', component: demoVueYellow },
    { path: '/green',  component: demoVueGreen  },
    { path: '/blue',   component: demoVueBlue   },
    { path: '/indigo', component: demoVueIndigo },
    { path: '/purple', component: demoVuePurple }
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
