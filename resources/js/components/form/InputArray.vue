<template>
    <div>
        <div v-for="(elemento, index) in arreglo.length" :key="index">
            <div class="row">
                <div class="col-10 col-lg-8">
                    <input type="text" class="form-control form-control-alternative mb-2 d-inline-block" v-model="arreglo[index]" @keydown.enter.prevent="agregarElemento">
                </div>
                <div class="col-auto">
                    <button class="btn btn-icon-only rounded-circle btn-secondary" @click.prevent="agregarElemento(index)" v-if="(arreglo.length - 1) == index">
                        <i class="fas fa-plus text-primary"></i>
                    </button>
                    <button class="btn btn-icon-only rounded-circle btn-secondary" @click.prevent="eliminarElemento(index)" v-if="index != 0">
                        <i class="fas fa-trash text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        arregloEditar: Array
    },
    data(){
        return{
            //arreglo: this.arregloEditar
            arregloData: ['']
        }
    },    
    methods:{
        agregarElemento: function (index) {
            if(!this.arregloData[index]){
                return;
            }
            this.arregloData.push('');
        },
        eliminarElemento: function (index) {
            this.arregloData.splice(index, 1);
        },
    },
    computed: {
        arreglo:{
            get(){
                if(this.arregloEditar){
                    return this.arregloEditar;
                }
                else{
                    return this.arregloData;
                }
            },
            set (value) {
                this.arregloData.push('');
                this.arreglo.push('');
            }
        }
    },
    watch: {
        arreglo: function (newValue,oldValue) {
            if(!newValue[newValue.length - 1]){
                return;
            }
            this.$emit('update:arreglo', newValue);   
        },
        arregloEditar: function (newValue,oldValue) {
            this.arregloData = newValue;
        }
    }
}
</script>

