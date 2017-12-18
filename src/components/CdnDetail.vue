<template>
    <div class="page page-home">
        <ui-header></ui-header>
        <main class="page-body">
            <div class="container" v-if="cdn">
                <div>{{ cdn.name }}</div>
                <div>{{ cdn.desc }}</div>
                <ul>
                    <li v-for="version in cdn.versions">
                        <h3>{{ version.version }}</h3>
                        <ul>
                            <li v-for="url in version.urls">
                                {{ url }}
                                <button class="btn" :data-clipboard-text="url">复制链接</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    import cdn from '@/cdn.js'
    const Clipboard = window.Clipboard
    const ui = window.ui

    console.log(cdn)
    let cdns = cdn.cdns

    export default {
        data () {
            return {
                cdn: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let name = this.$route.params.name
                for (let i = 0; i < cdns.length; i++) {
                    if (cdns[i].name === name) {
                        this.cdn = cdns[i]
                    }
                }

                var clipboard = new Clipboard('.btn')

                clipboard.on('success', function(e) {
                    console.info('Action:', e.action)
                    console.info('Text:', e.text)
                    console.info('Trigger:', e.trigger)

                    e.clearSelection()

                    ui.msg('复制成功')
                })

                clipboard.on('error', function(e) {
                    console.error('Action:', e.action)
                    console.error('Trigger:', e.trigger)
                })
            }
        }
    }
</script>
