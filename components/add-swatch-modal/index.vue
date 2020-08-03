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
                <div
                    class="xs:flex xs:items-top xs:justify-between"
                >
                    
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

                </div>
                <!-- END -->
            </div>
        </v-modal>
        <!-- END -->
    </div>
</template>

<script src="./index.js"/>
