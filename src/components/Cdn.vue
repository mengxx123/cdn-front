<template>
    <div class="page page-home">
        <!--<ui-header></ui-header>-->
        <div class="banner">
            <h1 class="title">云设 CDN</h1>
        </div>
        <main class="page-body">
            <div class="container">
                <ul>
                    <li v-for="cdn in cdns">
                        <router-link :to="'/cdns/' + cdn.name">
                            {{ cdn.name }}
                        </router-link>
                    </li>
                </ul>
                <h2>CDN 推荐</h2>
                <ul>
                    <li><a href="http://www.bootcdn.cn/" target="_blank">BootCDN</a> </li>
                    <li><a href="http://cdn.code.baidu.com/" target="_blank">百度静态资源公共库</a> </li>
                    <li><a href="https://www.staticfile.org/" target="_blank">Staticfile CDN</a> </li>
                </ul>
            </div>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    import cdn from '@/cdn.js'
    console.log(cdn)

    export default {
        data () {
            return {
                cdns: cdn.cdns
            }
        }
    }
</script>
