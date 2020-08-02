export default {
    data () {
        return {
            colorPalettes: []
        }
    },
    mounted () {
        this.colorPalettes = this.$store.getters['swatch/getColorPalettes']
    },
    methods: {
        /**
         * setActiveColor
         * @param {Number} index
         * @param {Number} swatch
         * Method to show the color-
         * code of the active color
        */
        setActiveColor (index, swatch) {
            let payload = {
                swatch: swatch,
                index: index
            }
            this.$store.dispatch("swatch/SET_ACTIVE_COLOR", payload)
        },
        /**
         * resetColor
         * @param {Number} index
         * Method to reset the active
         * states of the color
        */
        resetColor (index) {
            let payload = {
                index: index
            }
            this.$store.dispatch("swatch/RESET_ACTIVE_COLOR", payload)
        },
        /**
         * goTO
         * @param {Number} index
         * Method to route to the respective
         * swatch pages 
        */
        goTo (index) {
            let payload = {
                colorOne: this.colorPalettes[index].colorOne,
                colorTwo: this.colorPalettes[index].colorTwo,
                colorThree: this.colorPalettes[index].colorThree,
                colorFour: this.colorPalettes[index].colorFour
            }
            this.$store.dispatch("swatch/SET_COLOR_SWATCH", payload)
            this.$router.push(`/color-swatch/${index + 1}`)
        }
    }
}
