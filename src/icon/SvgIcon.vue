<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
    import { ref, computed } from "@vue/composition-api"
    export default {
        name: "svgIcon",
        // props: ['iconClass', 'className'],
        props: {
            iconClass: {
                type: String,
                required: true
            },

            className: {
                 type: String,
                default: ''
            }
         },
        setup(props) {

            // const msg = ref("jjjjjjjjjjj");
            // const number = ref(1);

            /*const plusOne = computed(() => {
                return number.value + 1
            })*/
            /*const plusOne = computed({
                get: () => number.value + 1,
                set: val => {number.value = val - 1}
            })*/
            const iconName = computed(()=> {
                return `#icon-${props.iconClass}`
            })

            const svgClass = computed(() => {
                if(props.className) {
                    return `svg-icon ${props.className}`
                } else {
                    return `svg-icon`
                }
            })

            return {
                iconName,
                svgClass
            }
        }
    }
</script>
<style lang="scss" scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
    }
</style>