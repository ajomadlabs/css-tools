<template>
    <div>
        <!-- PALETTE CONTAINER -->
        <div
          class="mt-10 flex flex-wrap justify-center items-start"
        >
            <!-- PALETTE CARD -->
            <div
                v-for="i in swatchNumber"
                :key="i"
                class="xs:w-5/12 md:w-1/5 xs:ml-2 md:ml-4 px-4 py-6 cursor-pointer mb-8 h-auto rounded-lg bg-css-tools-white shadow-md"
            >
                <!-- FIRST ROW -->
                <div
                    class="flex items-center justify-between"
                >
                    <!-- COLOR ONE -->
                    <div
                        class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md"
                        :style="`background-color:#f8fafb`"
                    />
                    <!-- END -->

                    <!-- COLOR TWO -->
                    <div
                        class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md ml-2"
                        :style="`background-color:#f8fafb`"
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
                        class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md"
                        :style="`background-color:#f8fafb`"
                    />
                    <!-- END -->

                    <!-- COLOR FOUR -->
                    <div
                        class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md ml-2"
                        :style="`background-color:#f8fafb`"
                    />
                    <!-- END -->
                </div>
                <!-- END -->
            </div>
            <!-- END -->
        </div>
        <!-- END -->
    </div>
</template>

<script>
export default {
    props: {
        swatchNumber: {
            type: Number,
            default: 20
        }
    }
}
</script>
