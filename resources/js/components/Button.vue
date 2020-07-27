<template>
    <button class="btn" :class="classes"  @click="click" :disabled="requestServer == true">
        <span v-if="requestServer">
            Cargando 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40" class="ml-1 loading-svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="3">
                        <circle stroke-opacity="1" cx="0" cy="0" r="0"/>
                        <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(83.9974 18 18)">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                        </path>
                    </g>
                </g>
            </svg>
        </span>
        <span v-else>{{ text }}</span>
    </button>
</template>
<style scoped>
.loading-svg{
    fill: currentColor;
    stroke: currentColor;
}
</style>
<script>
    export default {
        props: {
            text: String,
            classes: Array,
            requestServer: Boolean
        },
        methods:{
            click() {
                this.$emit('click');
            }
        }
    }
</script>
