<template>
    <div>
        <!-- MODAL COMPONENT -->
        <v-modal
            :active="showModal"
            event-name="open-add-swatch-modal"
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
                            class="text-left pb-2 border-b border-solid border-css-tools-gray-100 leading-7 antialiased font-bold text-css-tools-black-900 xs:text-20 md:text-24"
                        >
                            Add Swatch
                        </h3>
                    </div>
                    <!-- END -->

                    <!-- PALETTE CARD SECTION -->
                    <div
                        class="mt-10 flex flex-wrap justify-center items-start"
                    >
                        <!-- PALETTE CARD -->
                        <div
                            class="xs:w-9/12 md:w-7/12 ipadPro:w-5/12 px-4 py-6 cursor-pointer h-auto rounded-lg bg-css-tools-white shadow-md"
                        >
                            <!-- FIRST ROW -->
                            <div
                                class="flex items-center justify-between"
                            >
                                <!-- COLOR ONE -->
                                <div
                                    class="w-28 xs:h-18 sm:h-20 md:h-26 rounded-md"
                                    :style="`background-color:${color.color_one}`"
                                >
                                    <div
                                        v-show="color.color_one_active"
                                        class="bg-css-tools-black opacity-50 rounded-t-lg"
                                    >
                                        <h3
                                            class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                                        >
                                            {{ color.color_one }}
                                        </h3>
                                    </div>
                                </div>
                                <!-- END -->

                                <!-- COLOR TWO -->
                                <div
                                    class="w-28 xs:h-18 sm:h-20 md:h-26 rounded-md ml-2"
                                    :style="`background-color:${color.color_two}`"
                
                                >
                                    <div
                                        v-show="color.color_two_active"
                                        class="bg-css-tools-black opacity-50 rounded-t-lg"
                                    >
                                        <h3
                                            class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                                        >
                                            {{ color.color_two }}
                                        </h3>
                                    </div>
                                </div>
                                <!-- END -->
                            </div>
                            <!-- END -->

                            <!-- SECOND ROW -->
                            <div
                                class="flex items-center justify-between mt-2"
                            >
                                <!-- COLOR THREE -->
                                <div
                                    class="w-28 xs:h-18 sm:h-20 md:h-26 rounded-md"
                                    :style="`background-color:${color.color_three}`"
                                >
                                    <div
                                        v-if="color.color_three_active"
                                        class="bg-css-tools-black opacity-50 rounded-t-lg"
                                    >
                                        <h3
                                            class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                                        >
                                            {{ color.color_three }}
                                        </h3>
                                    </div>
                                </div>
                                <!-- END -->

                                <!-- COLOR FOUR -->
                                <div
                                    class="w-28 xs:h-18 sm:h-20 md:h-26 rounded-md ml-2"
                                    :style="`background-color:${color.color_four}`"
                                >
                                    <div
                                        v-show="color.color_four_active"
                                        class="bg-css-tools-black opacity-50 rounded-t-lg"
                                    >
                                        <h3
                                            class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                                        >
                                            {{ color.color_four }}
                                        </h3>
                                    </div>
                                </div>
                                <!-- END -->
                            </div>
                            <!-- END -->
                        </div>
                        <!-- END -->
                    </div>

                </div>
                <!-- END -->
            </div>
        </v-modal>
        <!-- END -->
    </div>
</template>

<script src="./index.js"/>
