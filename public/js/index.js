(()=>{"use strict";const e=[{path:"/",component:{template:'<div id="vueDemoHome" class="vue-demo">Home</div>'}},{path:"/about",component:{template:'<div id="vueAboutHome" class="vue-demo">About</div>'}}],t=VueRouter.createRouter({history:VueRouter.createWebHistory(),routes:e}),o=Vue.createApp({});o.use(t),o.mount("#vueApp")})();