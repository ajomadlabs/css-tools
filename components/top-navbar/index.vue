<template>
    <div>
        <!-- MAIN SECTION -->
        <div
            class="w-full xs:px-4 lg:px-0 fixed top-0 shadow-md z-50"
            :class="topNavColor"
        >
            <!-- CONTENT SECTION -->
            <center>
                <div
                    class="flex justify-between items-center h-auto"
                    style="max-width: 1180px;"
                >

                    <!-- LEFT SECTION -->
                    <div
                        class="flex items-baseline"
                    >
                        <h1
                            class="text-left py-6 cursor-pointer font-bold antialiased leading-normal tracking-normal text-20"
                            @click="$router.push('/')"
                        >
                            CSSTools.
                        </h1>
                        <div
                            class="flex items-center ml-6"
                        >

                            <div
                                v-for="(menu, i) in menuItems"
                                :key="i"
                            >
                                <!-- ITEM SECTION -->
                                <h1
                                    class="text-left py-6 cursor-pointer font-normal antialiased leading-normal tracking-normal text-14 text-css-tools-black"
                                    :class="[i > 0 ? 'ml-8' : '', menu.active ? 'border-b-4 border-solid border-css-tools-primary' : '']"
                                >
                                    {{ menu.name }}
                                </h1>
                                <!-- END -->

                            </div>
                        </div>
                    </div>
                    <!-- END -->

                    <!-- RIGHT SECTION -->
                    <div
                        class="cursor-pointer"
                        @click="changeMode"
                    >
                        <svg v-if="!showIcon" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 32 32"><path d="M 15 3 L 15 8 L 17 8 L 17 3 Z M 7.5 6.09375 L 6.09375 7.5 L 9.625 11.0625 L 11.0625 9.625 Z M 24.5 6.09375 L 20.9375 9.625 L 22.375 11.0625 L 25.90625 7.5 Z M 16 9 C 12.144531 9 9 12.144531 9 16 C 9 19.855469 12.144531 23 16 23 C 19.855469 23 23 19.855469 23 16 C 23 12.144531 19.855469 9 16 9 Z M 16 11 C 18.773438 11 21 13.226563 21 16 C 21 18.773438 18.773438 21 16 21 C 13.226563 21 11 18.773438 11 16 C 11 13.226563 13.226563 11 16 11 Z M 3 15 L 3 17 L 8 17 L 8 15 Z M 24 15 L 24 17 L 29 17 L 29 15 Z M 9.625 20.9375 L 6.09375 24.5 L 7.5 25.90625 L 11.0625 22.375 Z M 22.375 20.9375 L 20.9375 22.375 L 24.5 25.90625 L 25.90625 24.5 Z M 15 24 L 15 29 L 17 29 L 17 24 Z"/></svg>
                        <svg v-else class="w-6 h-6 fill-current" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6001 11.36C11.2976 11.3453 10.0347 10.9095 9.00031 10.1178C7.96588 9.32612 7.21538 8.22097 6.86093 6.96748C6.50649 5.714 6.56714 4.37948 7.03382 3.16331C7.50049 1.94715 8.34814 0.914618 9.45012 0.22C8.8933 0.0752531 8.32044 0.00133609 7.74512 0C5.8886 0 4.10812 0.737498 2.79537 2.05025C1.48261 3.36301 0.745117 5.14348 0.745117 7C0.745117 8.85652 1.48261 10.637 2.79537 11.9497C4.10812 13.2625 5.8886 14 7.74512 14C8.79683 13.9991 9.83446 13.758 10.7789 13.2953C11.7234 12.8326 12.5498 12.1605 13.1951 11.33C12.9974 11.3501 12.7988 11.3601 12.6001 11.36V11.36Z" fill="black"/>
                        </svg>
                    </div>
                    <!-- END -->

                </div>
            </center>
            <!-- END -->

        </div>
        <!-- END -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            menuItems: []
        }
    },
    computed: {
        topNavColor () {
            if (this.$colorMode.preference === 'light') {
                return 'bg-white text-css-black'
            } else {
                return 'bg-gray-900 text-gray-500'
            }
        },
        showIcon () {
            if (this.$colorMode.preference === 'light') {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        /**
         * changeMode
         * Method to change the mode
         * from light to dark and vice versa 
        */
        changeMode() {
            this.$colorMode.preference = this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
}
</script>
