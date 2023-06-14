<template>
  <div class="form-group">
    <label class="font-weight-bold">Proyectos Relacionados:</label>
    <div v-if="loading">
      <div class="row">
        <div class="col-6 col-sm-3 col-lg-2 mb-3" v-for="i in 4" :key="i">
         <Skeleton height="70px" />
         </div>
      </div>
    </div>
    <div v-else>
      <p v-if="elements && elements.length > 0">Seleccione los proyectos que aparecerán en el apartado "Otros Proyectos"
      </p>
      <div class="row" v-if="elements && elements.length > 0">
        <div
          class="col-6 col-sm-3 col-lg-2 text-center mb-3"
          v-for="element in elements"
          :key="element.id"
          @click="add(element.id)"
        >
          <div class="p-2 element" :class="{'element--selected' : selected && selected.includes(element.id)  }">
            <div v-if="selected && selected.includes(element.id)" class="element__circle text-white d-flex justify-content-center align-items-center">
              <jam-check class="current-color" />
            </div>
            <img
                :src="imagesUrl+'/projects/'+element.images_format[0]"
                class="img-fluid"
                :alt="element.name_es"
              />
            <small class="text-uppercase d-block">{{ element.name_es }}</small>
          </div>
        </div>
        <div class="col-12" v-if="errors && errors.projects_related">
          <label
          class="mt-2 text-danger text-sm"
          for="projects_related"
        >{{ errors.projects_related[0] }}</label>
        </div>
      </div>
      <div  v-else>
        <NoData :showSvg="true" customText="Todavia no hay proyectos registrados" :classes="['mt-2']" :show-title="false"/>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../NoData";
export default {
  props: {
    imagesUrl: String,
    errors: Object,
    routeGetAll: String,
    routeGetAll: String,
    routeCreate: String,
    selectedParent: Array,
    actualId: Number
  },
  components:{
    Skeleton,
    NoData
  },
  data() {
    return {
      selected: [],
      elements: {},
      loading: false
    };
  },
  methods: {
    add(id) {
      if (this.selected.length && this.selected.includes(id)) {
        const index = this.selected.indexOf(id);
        this.selected.splice(index, 1);
      } else {
        this.selected.push(id);
      }
    },
    getAll(){
     this.loading = true;
     let route = this.routeGetAll;
     if(this.actualId){
       route = route + '?not=' + this.actualId;
     }
      axios
        .get(route)
        .then((response) => {
          this.elements = response.data;
            this.loading = false;
        })
        .catch((error) => {});
    }
  },
  created(){
   this.getAll();
  },
  watch: {
    selectedParent: {
      immediate: true,
      handler: function (newValue) {
        if(newValue){
          this.selected = newValue;
        }
      },
    },
    selected: function(newValue, oldValue) {
      this.$emit("update:selected", newValue);
    },
  }
};
</script>