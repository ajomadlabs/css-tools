export default {
    data () {
        return {
            swatchNumber: '',
            colorSwatch: {}
        }
    },
    mounted () {
        this.swatchNumber = this.$route.params.swatch
        this.colorSwatch = this.$store.state.swatch.colorSwatch
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
