<template>
    
    <div class="row">
        <div class="col-12">
            
            <div class="card">
                <div class="card-header border-0" v-if="title">
                    <h2 class="mb-0 text-uppercase text-primary">{{ title }}</h2>
                </div>  

                <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <p class="mb-0">Arrastré los elementos en el orden que desee mostrarlos</p>
                    </div>
                </div>
            </div>

            <div v-if="loading">
                <Loader texto="Cargando..." :iconClasses="['ml-1']" :iconWidth="20" :iconHeight="20" :styles="{ height: '300px' }"/>
            </div>
            <div class="table-responsive" v-if="!loading">
                <table class="table align-items-center">
                        <thead class="thead-light">
                            <th class="py-3">
                                #
                            </th>
                            <th class="py-3" v-for="(el,index) in headers" :key="index">
                                    {{ el }}
                            </th>
                            <th class="py-3">Operaciones</th>
                        </thead>
                        <draggable tag="tbody" v-model="orderElements" v-if="object.data && object.data.length > 0" @change="handleDrag">
                            <tr v-for="(elemento,i) in object.data" :key="elemento.id">
                                <td>
                                    {{ 1 + i }}
                                </td>
                                <td v-for="(el,j) in elements[i]" :key="j" v-html="el"></td>
                                <td class="table-actions">
                                    <a v-if="botonDetail == true" href="#" @click.prevent="clickDetail(elemento.id)" class="btn btn-icon-only rounded-circle btn-secondary">
                                        <i class="far fa-eye text-primary"></i>
                                    </a> 
                                    <a v-if="buttonUpdate == true" href="#" @click.prevent="clickEdit(elemento.id)" class="btn btn-icon-only rounded-circle btn-secondary">
                                        <i class="fas fa-pen-alt text-warning"></i>
                                    </a> 
                                    <a v-if="buttonDelete == true" href="#" @click.prevent="clickDelete(elemento.id)" class="btn btn-icon-only rounded-circle btn-secondary">
                                        <i class="fas fa-trash-alt text-danger"></i>
                                    </a> 
                                </td>
                            </tr>
                        </draggable>
                        <tbody v-else>
                            <tr> 
                                <td :colspan="object.headers && object.headers.length + 1">
                                    No se encontraron resultados.
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>

            <div class="card-footer" v-if="!loading">
                <div class="col-12 mt-3 text-right">
                    <p class="mb-0" v-if="!total == 0"> Mostrando {{ total }} entrada(s) </p>
                    <p class="mb-0" v-else> {{ total }} entradas</p>
                </div>
            </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
import Loader from "./Loader"
export default {
    props: {
         title: {
                type: String
            },
        object: {
            type: Object,
            required: true
        },
        botonDetail: {
                type: Boolean,
                required: true
            },
            buttonUpdate: {
                type: Boolean,
                required: true
            },
            buttonDelete: {
                type: Boolean,
                required: true
            }
    },
    data() {
        return {
            loading: true,
            orderElements: []
        }
    },
    methods:{
        handleDrag(){
            this.$emit('drag',this.orderElements);
            this.loading = true;
        },
        clickDelete(id){
            this.$emit('delete',id);
        },
        clickDetail(id){
            this.$emit('detail',id);
        },
        clickEdit(id){
            this.$emit('edit',id);
        },
    },
    components:{
        Loader,
        draggable
    },
    watch: {
        object: function (newValue,oldValue) {
            if(newValue){
                this.orderElements = newValue.data;
                this.loading = false;
            }
        }
    },
    computed:{
        total: function () {
            if(this.object.data){
                return this.object.data.length;
            }
            return 0;
        },
        headers: function () {
            if(this.object.headers){
                return this.object.headers.filter((valor,i) => i > 0);
            }
        },
        elements: function () {
            if(this.object.data){
                var data = [];
                let object =  this.object.data;
                for (const key_object in object) { 
                    let object_2 = object[key_object]; 
                    data[key_object] = [];
                    for (const key_element in object_2) {
                        if(key_element != "id" ){
                            data[key_object].push(object_2[key_element]);
                        }
                    } 
                }
                return data;
            }
        },
    }
}
</script>
