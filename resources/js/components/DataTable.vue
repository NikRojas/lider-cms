<template>
    <div class="row">
        <div class="col-12">
            <div class="card shadow">
                <!--<div class="card-header border-0">
                    <h2 class="mb-0 text-uppercase text-primary">{{ titulo }}</h2>
                </div>  -->
                <div class="card-body">
                    <slot name="filtros"></slot>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3 mb-md-0 mt-md-2 mt-0">
                            <label for="id_mostrar" class="mb-0">
                                <small>Mostrar</small>
                                <select id="id_mostrar" class="form-control form-control-alternative form-control-sm w-auto d-inline-block" @change="cambiarPaginado()" v-model="entradas">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                <small>entradas</small>
                            </label>
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="search" class="form-control form-control-alternative" id="id_buscar" :placeholder="'Buscar por ' + placeholder" v-model="buscar">
                        </div>
                    </div>
                </div>
                <div v-if="cargando">
                    <Loader texto="Cargando..." :iconClasses="['ml-1']" :iconWidth="20" :iconHeight="20" :styles="{ height: '300px' }"/>
                </div>
                <div class="table-responsive" v-if="!cargando">
                    <table class="table align-items-center">
                        <thead class="thead-light">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th v-for="(el,index) in headers" :key="index">
                                    {{ el }}
                                </th>
                                <slot name="cabecera_accion"></slot>
                                <th>Operaciones</th>
                            </tr>
                        </thead>
                        <tbody v-if="object.data && object.data.length > 0">
                            <tr v-for="(elemento,i) in object.data" :key="elemento.id">
                                <td>
                                    {{ object.from + i }}
                                </td>
                                <td v-for="(el,j) in elementos[i]" :key="j" v-html="el"></td>

                                <slot :name="'td_accion_'+elemento.id"></slot>

                                <td class="table-actions">
                                    <a v-if="buttonRead == true" href="#" @click.prevent="clickRead(elemento.id)" class="btn btn-icon-only rounded-circle btn-secondary"><i class="far fa-eye text-primary"></i> </a> 
                                    <a v-if="buttonUpdate == true" href="#" @click.prevent="clickUpdate(elemento.id)" class="btn btn-icon-only rounded-circle btn-secondary"><i class="fas fa-pen-alt text-warning"></i> </a> 
                                    <a v-if="buttonDisable == true" href="#" @click.prevent="clickDisable(elemento.id)" class="btn btn-icon-only rounded-circle btn-secondary"><i class="fas fa-ban text-danger"></i> </a> 
                                    <a v-if="buttonDelete == true" href="#" @click.prevent="clickDelete(elemento.id)" class="btn btn-icon-only rounded-circle btn-secondary"><i class="fas fa-trash-alt text-danger"></i> </a> 
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr> 
                                <td :colspan="object.headers && object.headers.length + 1">
                                    No se encontraron resultados.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
                <div class="card-footer py-4" v-if="!cargando">
                    <div class="row">
                        <div class="col-6 pt-2">
                            <small class="" v-if="desde && hasta">
                                Mostrando {{ desde }} de {{ hasta }} de {{ total }} entradas
                            </small>
                            <small v-else>
                                <span v-if="desde">{{ total }} entradas</span>
                            </small>
                        </div>
                        <div class="col-6">
                            <ul class="pagination justify-content-end mb-0">
                                <li class="page-item"><a href="#" class="page-link rounded" @click.prevent="clickPrevPage()" v-if="pagina_actual > 1"><i class="fas fa-angle-left"></i></a> </li>
                                <li class="page-item" v-for="pagina in cantidad_paginas" :key="pagina" v-bind:class="[ pagina == activo ? 'active' : '']">
                                    <a class="page-link rounded" href="#" @click.prevent="clickPagina(pagina)">{{ pagina }}</a>
                                </li>
                                <li class="page-item"><a href="#" class="page-link rounded" @click.prevent="clickNextPage()" v-if="pagina_actual < ultima_pagina"><i class="fas fa-angle-right"></i></a> </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import Loader from "./Loader"
    export default {
        props: {
            entradasProp: {
                type: Number,
                required: false
            },
            cargandoProp: {
                type: Boolean,
                required: false
            },
            buscarProp: {
                type: String,
                required: false
            },
            object: {
                type: Object,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            buttonRead: {
                type: Boolean,
                required: true
            },
            buttonUpdate: {
                type: Boolean,
                required: true
            },
            buttonDisable: {
                type: Boolean,
                required: false,
                default: false,
            },
            buttonDelete: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                entradas: 5,
                offset: 1,
                buscar: '',
                cargando: true
            }
        },
        components:{
            Loader
        },
        methods:{
            clickDisable(id){
                this.$emit('disable',id);
            },
            clickDelete(id){
                this.$emit('delete',id);
            },
            clickRead(id){
                this.$emit('read',id);
            },
            clickUpdate(id){
                this.$emit('update',id);
            },
            clickNextPage() {
                if(this.buscar){
                    this.$emit('get',this.pagina_actual + 1, this.entradas, this.buscar);
                }
                else{
                    this.$emit('get',this.pagina_actual + 1, this.entradas);
                }
                this.cargando = true;
            },
            clickPrevPage() {
                if(this.buscar){
                    this.$emit('get',this.pagina_actual - 1, this.entradas, this.buscar);
                }
                else{
                    this.$emit('get',this.pagina_actual - 1, this.entradas);
                }
                this.cargando = true;
            },
            clickPagina(pagina) {
                if(this.buscar){
                    this.$emit('get',pagina, this.entradas, this.buscar);
                }
                else{
                    this.$emit('get',pagina, this.entradas);
                }
                this.cargando = true;
            },
            cambiarPaginado(){
                if(this.buscar){
                    this.$emit('get', 1, this.entradas, this.buscar);
                }
                else{
                    this.$emit('get', 1 , this.entradas);    
                }
                this.cargando = true;
            }
        },
        watch: {
            buscar: function (newValue,oldValue) {
                this.$emit('get', 1, this.entradas, newValue);
                this.$emit('update:buscarProp', String(newValue));
                this.cargando = true;
            },
            object: function (newValue,oldValue) {
                this.cargando = true;
                if(newValue){
                    this.cargando = false;
                }
            },
            cargandoProp: function (newValue,oldValue) {
                this.cargando = newValue;
            },
            cargando: function (newValue,oldValue) {
                this.$emit('update:cargandoProp', Boolean(newValue));
            },
            entradasProp: function (newValue,oldValue) {
                this.entradas = newValue;
            },
            entradas: function (newValue,oldValue) {
                this.$emit('update:entradasProp', Number(newValue));
            },
            buscarProp: function (newValue,oldValue) {
                this.buscar = newValue;
            },
            /*buscar: function (newValue,oldValue) {
                this.$emit('update:buscarProp', String(newValue));
            },*/
        },
        computed:{
            headers: function () {
                if(this.object.headers){
                    return this.object.headers.filter((valor,i) => i > 0);
                }
            },
            elementos: function () {
                if(this.object.data){
                    var data = [];
                    let object =  this.object.data;
                    for (const key_object in object) { 
                        let object_2 = object[key_object]; 
                        data[key_object] = [];
                        for (const key_element in object_2) {
                            if(key_element != "id" && key_element != "accion"){
                                data[key_object].push(object_2[key_element]);
                            }
                        } 
                    }
                    return data;
                }
            },
            activo: function () {
                return this.object.current_page;
            },
            desde: function () {
                return this.object.from;
            },
            hasta: function () {
                return this.object.to;
            },
            total: function () {
                return this.object.total;
            },
            ultima_pagina: function () {
                return this.object.last_page;
            },
            pagina_actual: function () {
                return this.object.current_page;
            },
            cantidad_paginas(){
                if (!this.object.to) {
                    return [];
                }
                var desde = this.object.current_page - this.offset;
                if (desde < 1) {
                    desde = 1;
                }
                var hasta = desde + (this.offset * 2);
                if (hasta >= this.object.last_page) {
                    hasta = this.object.last_page;
                }
                var paginas = [];
                while (desde <= hasta) {
                    paginas.push(desde);
                    desde++;
                }
                return paginas;
            }
        }
    }
</script>
