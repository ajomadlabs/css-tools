<template>
    <div>
        <!-- MODAL COMPONENT -->
        <v-modal
            :active="showModal"
            event-name="open-add-swatch-modal"
            custom-style="xs:px-75 md:px-10 py-75 md:w-8/12 lg:w-5/12 xl:w-4/12"
        >
            <!-- SWATCH CARD SECTION -->
            <div>

                <!-- HEADER SECTION -->
                <div>
                    
                    <!-- HEADER SECTION -->
                    <div
                        class="xs:w-full mb-2"
                    >
                        <h3
                            class="text-left lg:pb-1 leading-7 antialiased font-bold text-css-tools-black-900 xs:text-20 md:text-24"
                        >
                            Create your Swatch
                        </h3>
                        <!-- SUB PARA SECTION -->
                        <p
                            class="antialiased font-normal leading-normal tracking-normal text-left xs:text-12 lg:text-14 text-css-tools-gray-700"
                        >
                            Fill your swatch with your favourite colors by picking a color using color picker and clicking on section which you want see the color.
                        </p>
                        <!-- END -->
                    </div>
                    <!-- END -->

                    <!-- PALETTE CARD SECTION -->
                    <div
                        class="mt-10 flex md:flex-wrap gap-2 justify-between items-center"
                    >
                        <!-- PALETTE CARD -->
                        <div
                            class="xs:w-5/12 md:w-4/12 ipadPro:w-5/12 px-4 py-6 cursor-pointer h-auto rounded-lg bg-css-tools-white shadow-md"
                        >
                            <!-- FIRST ROW -->
                            <div
                                class="flex items-center justify-between"
                            >
                                <!-- COLOR ONE -->
                                <div
                                    class="w-28 xs:h-12 sm:h-14 md:h-26 rounded-md"
                                    :style="`background-color:${colorOne}`"
                                    @click.stop="addColor(1)"
                                />
                                <!-- END -->

                                <!-- COLOR TWO -->
                                <div
                                    class="w-28 xs:h-12 sm:h-14 md:h-26 rounded-md ml-2"
                                    :style="`background-color:${colorTwo}`"
                                    @click.stop="addColor(2)"
                                />
                                <!-- END -->
                            </div>
                            <!-- END -->

                            <!-- SECOND ROW -->
                            <div
                                class="flex items-center justify-between mt-2"
                            >
                                <!-- COLOR THREE -->
                                <div
                                    class="w-28 xs:h-12 sm:h-14 md:h-26 rounded-md"
                                    :style="`background-color:${colorThree}`"
                                    @click.stop="addColor(3)"
                                />
                                <!-- END -->

                                <!-- COLOR FOUR -->
                                <div
                                    class="w-28 xs:h-12 sm:h-14 md:h-26 rounded-md ml-2"
                                    :style="`background-color:${colorFour}`"
                                    @click.stop="addColor(4)"
                                />
                                <!-- END -->
                            </div>
                            <!-- END -->
                        </div>
                        <!-- END -->
                        <!-- COLOR PICKER -->
                        <client-only>
                            <chrome
                                ref="COLORONE"
                                v-model="color1"
                            />
                        </client-only>
                        <!-- END -->
                    </div>
                    <!-- END -->

                    <!-- BUTTON SECTION -->
                    <div
                        class="mt-6"
                    >
                        <button
                            v-if="!buttonLoading"
                            class="md:w-5/12 bg-css-tools-black-900 w-full text-css-tools-white text-16 py-3 text-center rounded leading-normal tracking-wide"
                            @click="addSwatch"
                        >
                            ADD SWATCH
                        </button>
                        <button
                            v-if="buttonLoading"
                            class="md:w-5/12 bg-css-tools-gray-100 w-full text-css-tools-gray-200 text-16 py-3 text-center rounded leading-normal tracking-wide"
                        >
                            ADDING SWATCH
                        </button>
                    </div>
                    <!-- END -->
                    <!-- ERROR -->
                    <p
                        v-if="error"
                        class="leading-normal tracking-normal text-12 text-center text-css-tools-danger font-normal my-1"
                    >
                        {{ error }}
                    </p>
                    <!-- END -->
                </div>
                <!-- END -->
            </div>
        </v-modal>
        <!-- END -->
    </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
    components: {
        vModal: () => import('@/components/modal/index.vue'),
        Chrome
    },
    data () {
        return {
            buttonLoading: false,
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
            this.buttonLoading = true
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
                    this.buttonLoading = false
                    this.$nuxt.$emit('open-add-swatch-modal', false)
                })
            } else {
                this.error = "Please make sure you have added colors to all the sections"
                this.buttonLoading = false
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
</script>
