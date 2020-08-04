import { Chrome } from 'vue-color'

export default {
    components: {
        vModal: () => import('@/components/modal/index.vue'),
        Chrome
    },
    data () {
        return {
            showModal: false,
            colorOne: '#f8fafb',
            colorTwo: '#f8fafb',
            colorThree: '#f8fafb',
            colorFour: '#f8fafb',
            color1: '',
            error: ''
        }
    },
    mounted () {
        this.colorOne = this.colorTwo = this.colorThree = this.colorFour = "#f8fafb"
        this.$nuxt.$on('open-add-swatch-modal', (data) => {
            if (data === false) {
                this.showModal = data
            } else {
                this.showModal = data.status
            }
        })
    },
    methods: {
        /**
         * addColor
         * @param {section} number
         * Method to select the section 
         * update the color for the section
         * and hide the picker for the section 
        */
        addColor (section) {
            this.error = ""
            if (section === 1) {
                this.colorOne = this.color1.hex
            } else if (section === 2) {
                this.colorTwo = this.color1.hex
            } else if (section === 3) {
                this.colorThree = this.color1.hex
            } else if (section === 4) {
                this.colorFour = this.color1.hex
            }
        },
        /**
         * addSwatch
         * Method to save the swatch
        */
        addSwatch () {
            this.error = ""
            if (this.colorOne !== "#f8fafb" && this.colorTwo !== "#f8fafb" && this.colorThree !== "#f8fafb" && this.colorFour !== "#f8fafb") {
                let payload = {
                    color_one: this.colorOne,
                    color_two: this.colorTwo,
                    color_three: this.colorThree,
                    color_four: this.colorFour,
                    color_one_active: false,
                    color_two_active: false,
                    color_three_active: false,
                    color_four_active: false
                }
                this.$store.dispatch("swatch/ADD_COLOR_SWATCH", payload).then(() => {
                    this.colorOne = this.colorTwo = this.colorThree = this.colorFour = "#f8fafb"
                    this.$nuxt.$emit('open-add-swatch-modal', false)
                })
            } else {
                this.error = "Please make sure you have added colors to all the sections"
            }
        }

    },
    beforeDestroy() {
        this.showModal = null
        delete this.showModal
        this.error = this.colorOne = this.colorTwo = this.colorThree = this.colorFour = null
        delete this.colorOne
        delete this.colorTwo
        delete this.colorThree
        delete this.colorFour,
        delete this.error
        this.$nuxt.$off('open-add-swatch-modal', () => {})
    },
}
