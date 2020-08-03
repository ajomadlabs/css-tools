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
            color1: ''
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
    methods: {
        /**
         * addColor
         * @param {section} number
         * Method to select the section 
         * update the color for the section
         * and hide the picker for the section 
        */
        addColor (section) {
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
         * resetColorPicker
         * Method to reset the colorPicker
         * states
        */
        resetColorPicker () {
            this.colorOnePicker = this.colorTwoPicker = this.colorThreePicker = this.colorFourPicker = false
        }

    },
    beforeDestroy() {
        this.showModal = null
        delete this.showModal
        this.colorOnePicker = this.colorTwoPicker = this.colorThreePicker = this.colorFourPicker = "#f8fafb"
        this.$nuxt.$off('open-add-swatch-modal', () => {})
    },
}
