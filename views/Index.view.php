<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Router Demo</title>
    <link rel="stylesheet" href="/libraries/Bootstrap/bootstrap.min.css">
    <script src="/libraries/Bootstrap/bootstrap.min.js"></script>
    <script src="/libraries/Vue/vue.global.prod.js"></script>
    <script src="/libraries/Vue/vue-router.global.prod.js"></script>
    <link rel="stylesheet" href="<?php echo AssetCachebuster('/css/index.css', CachebusterLength); ?>">
</head>
<body class="demo">
    <main>
        <div id="vue-app">
            <h1>Vue Router Demo</h1>

            <div id="vue-render-area" v-cloak>
                <!-- router-link：渲染後轉為 a，to 屬性指定目標 URL -->
                <router-link class="me-2" to="/">首頁</router-link>
                <router-link class="mx-2" to="/red">紅</router-link>
                <router-link class="mx-2" to="/orange">橙</router-link>
                <router-link class="mx-2" to="/yellow">黃</router-link>
                <router-link class="mx-2" to="/green">綠</router-link>
                <router-link class="mx-2" to="/blue">藍</router-link>
                <router-link class="mx-2" to="/indigo">靛</router-link>
                <router-link class="mx-2" to="/purple">紫</router-link>
                <router-link class="mx-2" to="/about">關於</router-link>

                <!-- router-view：渲染 Vue route -->
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </main>

    <script src="<?php echo AssetCachebuster('/js/index.js', CachebusterLength); ?>"></script>
</body>
</html>