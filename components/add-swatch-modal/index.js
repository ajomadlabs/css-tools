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
            color2: '',
            color3: '',
            color4: '',
            colorOnePicker: true,
            colorTwoPicker: false,
            colorThreePicker: false,
            colorFourPicker: false
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
                // this.colorOnePicker = true
                this.colorOne = this.color1.hex
                // this.colorTwoPicker = this.colorThreePicker = this.colorFourPicker = false
            } else if (section === 2) {
                // this.colorTwoPicker = true
                this.colorTwo = this.color1.hex
                // this.colorOnePicker = this.colorThreePicker = this.colorFourPicker = false
            } else if (section === 3) {
                // this.colorThreePicker = true
                this.colorThree = this.color1.hex
                // this.colorTwoPicker = this.colorOnePicker = this.colorFourPicker = false
            } else if (section === 4) {
                // this.colorFourPicker = true
                this.colorFour = this.color1.hex
                // this.colorTwoPicker = this.colorThreePicker = this.colorOnePicker = false
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
