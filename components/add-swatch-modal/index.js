export default {
    components: {
        vModal: () => import('@/components/modal/index.vue')
    },
    data () {
        return {
            showModal: false
        }
    },
    mounted () {
        this.$nuxt.$on('open-add-swatch-modal', (data) => {
            if (data === false) {
                this.showModal = data
            } else {
                this.showModal = data.status
            }
        })
    },
    beforeDestroy() {
        this.showModal = null
        delete this.showModal
        this.$nuxt.$off('open-add-swatch-modal', () => {})
    },
}
