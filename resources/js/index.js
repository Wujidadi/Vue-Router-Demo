import { vueDemoHomePage, vueDemoAboutPage, vueDemoColorPages } from "./component";

/* 定義 Vue route 元件 */
const vueDemoComponent = {

    home: {
        template: vueDemoHomePage
    },

    about: {
        template: vueDemoAboutPage,
        data() {
            return {
                sec: 0,
                timestamp: null,
                date: null,
                timeCounterInterval: null
            };
        },
        methods: {
            setTime() {
                this.timestamp = dateStamp();
                this.date = dateFormat(this.timestamp);
                this.sec = (this.timestamp - demoVueMount.initTime) / 1000;
            },
            timeCounter() {
                this.setTime();
                echo(this.sec, this.date.split(' ')[1]);
            }
        },
        mounted() {
            this.setTime();
            this.timeCounterInterval = setInterval(() => {
                this.timeCounter();
            }, 1000);
        },
        watch() {
            // this.sec = (dateStamp() - demoVueMount.initTime) / 1000;
        },
        beforeRouteLeave(to, from) {
            clearInterval(this.timeCounterInterval);
        }
    },

    red:    { template: vueDemoColorPages.red    },
    orange: { template: vueDemoColorPages.orange },
    yellow: { template: vueDemoColorPages.yellow },
    green:  { template: vueDemoColorPages.green  },
    blue:   { template: vueDemoColorPages.blue   },
    indigo: { template: vueDemoColorPages.indigo },
    purple: { template: vueDemoColorPages.purple }

};

/* URL 與元件對應 */
const demoVueRoutes = [
    { path: '/',       component: vueDemoComponent.home   },
    { path: '/about',  component: vueDemoComponent.about  },
    { path: '/red',    component: vueDemoComponent.red    },
    { path: '/orange', component: vueDemoComponent.orange },
    { path: '/yellow', component: vueDemoComponent.yellow },
    { path: '/green',  component: vueDemoComponent.green  },
    { path: '/blue',   component: vueDemoComponent.blue   },
    { path: '/indigo', component: vueDemoComponent.indigo },
    { path: '/purple', component: vueDemoComponent.purple }
];

/* Vue Router 實體 */
const demoVueRouter = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: demoVueRoutes
});

/* Vue 實體 */
const demoVueApp = Vue.createApp({
    data() {
        return {
            initTime: dateStamp()
        };
    }
});
demoVueApp.use(demoVueRouter);
const demoVueMount = demoVueApp.mount('#vue-app');
