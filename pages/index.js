export default {
    data () {
        return {
            colorPalettes: [
                {
                    colorOne: '#383e56',
                    colorTwo: '#f69e7b',
                    colorThree: '#eedad1',
                    colorFour: '#d4d5b0',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#e4e3e3',
                    colorTwo: '#8489ac',
                    colorThree: '#3b6978',
                    colorFour: '#204051',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#ffdbc5',
                    colorTwo: '#cf1b1b',
                    colorThree: '#900d0d',
                    colorFour: '#423144',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#383e56',
                    colorTwo: '#f69e7b',
                    colorThree: '#eedad1',
                    colorFour: '#d4d5b0',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#ebecf1',
                    colorTwo: '#206a5d',
                    colorThree: '#1f4068',
                    colorFour: '#1b1c25',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#1b262c',
                    colorTwo: '#0f4c75',
                    colorThree: '#3282b8',
                    colorFour: '#bbe1fa',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#111d5e',
                    colorTwo: '#c70039',
                    colorThree: '#f37121',
                    colorFour: '#ffbd69',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#f4f6ff',
                    colorTwo: '#fbd46d',
                    colorThree: '#4f8a8b',
                    colorFour: '#07031a',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#092532',
                    colorTwo: '#89c9b8',
                    colorThree: '#c7e2b2',
                    colorFour: '#e1ffc2',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#333a7b',
                    colorTwo: '#4b6982',
                    colorThree: '#70c6c7',
                    colorFour: '#b4ffd8',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#086972',
                    colorTwo: '#01a9b4',
                    colorThree: '#87dfd6',
                    colorFour: '#fbfd8a',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#184d47',
                    colorTwo: '#96bb7c',
                    colorThree: '#d6efc7',
                    colorFour: '#eebb4d',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#fa1616',
                    colorTwo: '#12cad6',
                    colorThree: '#0fabbc',
                    colorFour: '#e4f9ff',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#1b262c',
                    colorTwo: '#0f4c75',
                    colorThree: '#3282b8',
                    colorFour: '#bbe1fa',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#24a19c',
                    colorTwo: '#6ebfb5',
                    colorThree: '#ffc7c7',
                    colorFour: '#ff5f40',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                },
                {
                    colorOne: '#eeecda',
                    colorTwo: '#f08a5d',
                    colorThree: '#b83b5e',
                    colorFour: '#6a2c70',
                    colorOneActive: false,
                    colorTwoActive: false,
                    colorThreeActive: false,
                    colorFourActive: false
                }
            ]
        }
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
            if (swatch === 1) {
                this.$set(this.colorPalettes[index], 'colorOneActive', true)
                this.$set(this.colorPalettes[index], 'colorTwoActive', false)
                this.$set(this.colorPalettes[index], 'colorThreeActive', false)
                this.$set(this.colorPalettes[index], 'colorFourActive', false)
            }   else if (swatch === 2) {
                this.$set(this.colorPalettes[index], 'colorOneActive', false)
                this.$set(this.colorPalettes[index], 'colorTwoActive', true)
                this.$set(this.colorPalettes[index], 'colorThreeActive', false)
                this.$set(this.colorPalettes[index], 'colorFourActive', false)
            }   else if (swatch === 3) {
                this.$set(this.colorPalettes[index], 'colorOneActive', false)
                this.$set(this.colorPalettes[index], 'colorTwoActive', false)
                this.$set(this.colorPalettes[index], 'colorThreeActive', true)
                this.$set(this.colorPalettes[index], 'colorFourActive', false)
            }   else if (swatch === 4) {
                this.$set(this.colorPalettes[index], 'colorOneActive', false)
                this.$set(this.colorPalettes[index], 'colorTwoActive', false)
                this.$set(this.colorPalettes[index], 'colorThreeActive', false)
                this.$set(this.colorPalettes[index], 'colorFourActive', true)
            }
        },
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
