<template>
    <div>
        <label class="font-weight-bold" for="id_title">Título</label> 
        <input type="text" class="form-control form-control-alternative" placeholder="Título" v-model="name" id="id_title">    
        <div class="mt-2"> 
            <small>{{ url }}{{ (categorySlug ? categorySlug+'/' : '') }}</small><small class="bg-primary text-white" v-if="!editBlock">{{ slug }}</small> 
            <input type="text" class="form-control form-control-sm d-inline w-50" v-model="slug" @keydown.enter.prevent="getSlug" v-if="editBlock">
            <button type="button" class="btn btn-primary btn-sm" v-if="!editBlock" @click="editBlock = !editBlock">Editar</button>
            <button type="button" class="btn btn-primary btn-sm" v-if="editBlock" @click="getSlug">Aceptar</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        nameProp:{
            type: String,
            required: false
        },
        slugProp:{
            type: String,
            required: false
        },
        categorySlug:{
            type: String,
            required: false
        }
    },
    data(){
        return{
            name: '',
            slug: '',
            editBlock: false,
            slugEdited: false
        }
    },
    methods:{
        getSlug(){
            this.editBlock = !this.editBlock;
            this.slugEdited = true;
        },
    },
    watch: {
        nameProp: function (newVal, oldVal){
            this.name = newVal;
        },
        slugProp: function (newVal, oldVal){
            this.slug = newVal;
        },
        name: function (newVal, oldVal){
            //console.log(newVal)
            if(!this.slugEdited){
                this.slug = newVal;
            }
            this.$emit('update:name', newVal)
        },
        slug: function (newVal, oldVal){
            this.slug = Slug(newVal);
            this.$emit('update:slug', this.slug)
        },
    },
}
</script>