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
            default: 'xs:px-75 md:px-10 py-75 md:w-7/12 lg:w-5/12 xl:w-4/12'
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