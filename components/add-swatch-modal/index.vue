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
                            class="text-left leading-7 antialiased font-bold text-css-tools-black-900 xs:text-20 md:text-24"
                        >
                            Add Swatch
                        </h3>
                        <!-- SUB PARA SECTION -->
                        <p
                            class="antialiased font-normal leading-normal tracking-normal text-left xs:text-12 lg:text-14 text-css-tools-gray-700"
                        >
                            Fill your swatch with your favourite colors by clicking on each section.
                        </p>
                        <!-- END -->
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
                                    class="w-28 xs:h-26 rounded-md"
                                    :style="`background-color:${color.color_one}`"
                                />
                                <!-- END -->

                                <!-- COLOR TWO -->
                                <div
                                    class="w-28 xs:h-26 rounded-md ml-2"
                                    :style="`background-color:${color.color_two}`"
                
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
                                    class="w-28 xs:h-26 rounded-md"
                                    :style="`background-color:${color.color_three}`"
                                />
                                <!-- END -->

                                <!-- COLOR FOUR -->
                                <div
                                    class="w-28 xs:h-26 rounded-md ml-2"
                                    :style="`background-color:${color.color_four}`"
                                />
                                <!-- END -->
                            </div>
                            <!-- END -->
                        </div>
                        <!-- END -->
                    </div>
                    <!-- END -->

                    <!-- BUTTON SECTION -->
                    <div
                        class="mt-6"
                    >
                        <button
                            class="md:w-5/12 bg-css-tools-black-900 w-full text-css-tools-white text-16 py-3 text-center rounded leading-normal tracking-wide"
                        >
                            ADD SWATCH
                        </button>
                    </div>
                    <!-- END -->

                </div>
                <!-- END -->
            </div>
        </v-modal>
        <!-- END -->
    </div>
</template>

<script src="./index.js"/>
