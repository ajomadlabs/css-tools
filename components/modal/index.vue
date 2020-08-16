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
                class="xs:px-75 md:px-10 py-75 md:w-8/12 lg:w-5/12 xl:w-4/12 xs:fixed xs:bottom-0 nexus:relative xs:w-full xs:mx-0 lg:mx-0 shadow-lg xs:rounded-t-10 nexus:rounded-10 md:min-h-64 md:overflow-hidden"
                :class="cardColor"
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
<script>
export default {
    props: {
        active: {
            required: true,
            type: Boolean
        },
        eventName: {
            required: false,
            type: String
        },
        customStyle: {
            required: false,
            type: String,
            default: 'xs:px-75 md:px-10 py-75 md:w-8/12 lg:w-5/12 xl:w-4/12'
        }
    },
    watch: {
        active(value) {
            if (value) {
                return document.querySelector('body').classList.add('overflow-hidden');
            }
            document.querySelector('body').classList.remove('overflow-hidden');
        }
    },
    computed: {
        cardColor () {
            if (this.$colorMode.preference === 'light') {
                return 'bg-white'
            } else {
                return 'bg-gray-900'
            }
        }
    },
    methods: {
        /**
         * close
         * Method which emits an event
         * to close the modal
         */
        close () {
            this.$nuxt.$emit(this.eventName, false)
            // this.$emit('close')
        }
    },
}
</script>
<!-- END -->