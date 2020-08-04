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
                            class="md:w-5/12 bg-css-tools-black-900 w-full text-css-tools-white text-16 py-3 text-center rounded leading-normal tracking-wide"
                            @click="addSwatch"
                        >
                            ADD SWATCH
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

<script src="./index.js"/>
