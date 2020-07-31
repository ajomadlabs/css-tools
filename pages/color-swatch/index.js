export default {
    data () {
        return {
            swatchNumber: '',
            colorSwatch: {},
            hexValue: '',
            hex8Value: '',
            rgbValue: '',
            hslValue: '',
            hsvValue: '',
            colorTitle: '',
            lightShades: [],
            darkShades: [],
            triads: [],
            tetrads: [],
            analogous: [],
            monochromatic: [],
            splitComplement: []
        }
    },
    mounted () {
        this.swatchNumber = this.$route.params.swatch
        this.colorSwatch = this.$store.state.swatch.colorSwatch
        this.viewColorInfo(this.colorSwatch.colorOne)
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
        },
        /**
         * colorDetails
         * @param {String} color
         * Method which provides more
         * details on the color clicked
         * by the user. 
        */
        colorDetails (color) {
            this.colorTitle = color
            this.hexValue = this.$tinycolor(color).toHexString()
            this.hex8Value = this.$tinycolor(color).toHex8String()
            this.rgbValue = this.$tinycolor(color).toRgbString()
            this.hslValue = this.$tinycolor(color).toHslString()
            this.hsvValue = this.$tinycolor(color).toHsvString()
        },
        /**
         * generateLightShades
         * @para {String} color
         * Method which generates lighter
         * shades of the color
        */
        generateLightShades (color) {
            this.lightShades = []
            for (let i = 0; i < 100; i++) {
                this.lightShades.push({
                    name: this.$tinycolor(color).lighten(i).toString()
                })
                i = i + 10
            }
        },
        /**
         * generateDarkShades
         * @para {String} color
         * Method which generates darker
         * shades of the color
        */
        generateDarkShades (color) {
            this.darkShades = []
            for (let i = 0; i < 100; i++) {
                this.darkShades.push({
                    name: this.$tinycolor(color).darken(i).toString()
                })
                i = i + 10
            }
        },
        /**
         * generateTriads
         * @para {String} color
         * Method which generates triad
         * of a particular color
        */
        generateTriads (color) {
            this.triads = []
            let temp = this.$tinycolor(color).triad()
            temp.map((t) => {
                return t
            })
            for (let i = 0; i < temp.length; i++) {
                this.triads.push({
                    name: temp[i].toHexString()
                })
            }
        },
        /**
         * generateTetrad
         * @para {String} color
         * Method which generates tetrad
         * of a particular color
        */
        generateTetrad (color) {
            this.tetrads = []
            let temp = this.$tinycolor(color).tetrad()
            temp.map((t) => {
                return t
            })
            for (let i = 0; i < temp.length; i++) {
                this.tetrads.push({
                    name: temp[i].toHexString()
                })
            }
        },
        /**
         * generateAnalogous
         * @para {String} color
         * Method which generates analogous
         * of a particular color
        */
        generateAnalogous (color) {
            this.analogous = []
            let temp = this.$tinycolor(color).analogous()
            temp.map((t) => {
                return t
            })
            for (let i = 0; i < temp.length; i++) {
                this.analogous.push({
                    name: temp[i].toHexString()
                })
            }
        },
        /**
         * generateMonochromatic
         * @para {String} color
         * Method which generates monochromatic
         * of a particular color
        */
        generateMonochromatic (color) {
            this.monochromatic = []
            let temp = this.$tinycolor(color).monochromatic()
            temp.map((t) => {
                return t
            })
            for (let i = 0; i < temp.length; i++) {
                this.monochromatic.push({
                    name: temp[i].toHexString()
                })
            }
        },
        /**
         * generateSplitComplement
         * @para {String} color
         * Method which generates split complement
         * of a particular color
        */
        generateSplitComplement (color) {
            this.splitComplement = []
            let temp = this.$tinycolor(color).splitcomplement()
            temp.map((t) => {
                return t
            })
            for (let i = 0; i < temp.length; i++) {
                this.splitComplement.push({
                    name: temp[i].toHexString()
                })
            }
        },
        /**
         * viewColorInfo
         * @param {String} color
         * Method to view all the information
         * about a particular color
        */
        viewColorInfo (color) {
            this.colorDetails(color)
            this.generateLightShades(color)
            this.generateDarkShades(color)
            this.generateTriads(color)
            this.generateTetrad(color)
            this.generateAnalogous(color)
            this.generateMonochromatic(color)
            this.generateSplitComplement(color)
        }
    }
}
