<!-- HTML -->
<template>
    <transition
        name="fade"
    >
        <!-- MODAL -->
        <div
            v-if="active"
            class="fixed inset-0 w-full h-screen flex items-center justify-center"
            style="background-color: rgba(0,0,0,0.85); z-index:999;"
            @click.self="close"
            @keydown.esc="$nuxt.$emit(this.eventName, false)"
        >
                
            <!-- MAIN SECTION -->
            <div
                class="xs:fixed xs:bottom-0 nexus:relative xs:w-full xs:mx-0 lg:mx-0 bg-white shadow-lg xs:rounded-t-10 nexus:rounded-10 md:min-h-64 md:overflow-hidden"
                :class="customStyle"
            >

                <!-- CONTENT -->
                <slot/>
                <!-- END -->

            </div>
            <!-- END -->

        </div>
        <!-- END -->
    </transition>
</template>
<!-- END -->

<!-- JAVASCRIPT -->
<script src="./index.js"/>
<!-- END -->