<template>
    <div>
        <!-- MAIN SECTION -->
        <div
            class="w-full xs:px-4 lg:px-0 fixed top-0 bg-css-tools-white shadow-md z-50"
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
                            class="text-left py-6 cursor-pointer font-bold antialiased leading-normal tracking-normal text-20 text-css-tools-black"
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
                    <!-- <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 32 32"><path d="M 6 14 C 4.894531 14 4 14.894531 4 16 C 4 17.105469 4.894531 18 6 18 C 7.105469 18 8 17.105469 8 16 C 8 14.894531 7.105469 14 6 14 Z M 16 14 C 14.894531 14 14 14.894531 14 16 C 14 17.105469 14.894531 18 16 18 C 17.105469 18 18 17.105469 18 16 C 18 14.894531 17.105469 14 16 14 Z M 26 14 C 24.894531 14 24 14.894531 24 16 C 24 17.105469 24.894531 18 26 18 C 27.105469 18 28 17.105469 28 16 C 28 14.894531 27.105469 14 26 14 Z"/></svg>
                    </div> -->
                    <!-- END -->

                </div>
            </center>
            <!-- END -->

        </div>
        <!-- END -->
    </div>
</template>

<script src="./index.js"/>
