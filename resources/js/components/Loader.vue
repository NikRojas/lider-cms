<template>
    <div class="component-loader text-sm w-100" :style="styles">
        <div class="d-flex align-items-center justify-content-center h-100">
            <span v-if="texto">{{ texto }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" :width="iconWidth" :height="iconHeight" viewBox="0 0 40 40" stroke="#525f7f" :style="iconoEstilos" :class="iconClasses">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity="1" cx="0" cy="0" r="0"/>
                        <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(83.9974 18 18)">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                        </path>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        iconClasses: Array,
        iconoEstilos: Object,
        texto: String,
        styles: Object,
        iconWidth: {
            type: Number,
            required: true
        },
        iconHeight: {
            type: Number,
            required: true
        },
    }
}
</script>
