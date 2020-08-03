export default {
    components: {
        vModal: () => import('@/components/modal/index.vue')
    },
    data () {
        return {
            showModal: false,
            color: {
                color_one: '#f8fafb',
                color_two: '#f8fafb',
                color_three: '#f8fafb',
                color_four: '#f8fafb',
                color_one_active: true,
                color_two_active: true,
                color_three_active: true,
                color_four_active: true
            }
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
