export default {
    data () {
        return {
            swatchNumber: ''
        }
    },
    mounted () {
        this.swatchNumber = this.$route.params.swatch
    },
    methods: {
        /**
         * resetColor
         * @param {Number} index
         * Method to reset the active
         * states of the color
        */
        resetColor (index) {
            this.$set(this.colorPalettes[index], 'colorOneActive', false)
            this.$set(this.colorPalettes[index], 'colorTwoActive', false)
            this.$set(this.colorPalettes[index], 'colorThreeActive', false)
            this.$set(this.colorPalettes[index], 'colorFourActive', false)
        }
    }
}
