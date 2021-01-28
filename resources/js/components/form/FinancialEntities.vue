<template>
  <div class="form-group">
    <label class="font-weight-bold">Entidades Financieras:</label>
    <div v-if="loading">
      <div class="row">
        <div class="col-6 col-sm-3 col-lg-4 mb-3" v-for="i in 4" :key="i">
         <Skeleton height="70px" />
         </div>
      </div>
    </div>
    <div v-else>
      <p v-if="elements && elements.length > 0">Seleccione las entidades financieras con las que se podra financiar el Proyecto</p>
      <div class="row" v-if="elements && elements.length > 0">
        <div
          class="col-6 col-sm-3 col-lg-4 text-center mb-3"
          v-for="element in elements"
          :key="element.id"
          @click="add(element.id)"
        >
          <div class="p-2 element" :class="{'element--selected' : selected && selected.includes(element.id)  }">
            <div v-if="selected && selected.includes(element.id)" class="element__circle text-white d-flex justify-content-center align-items-center">
              <jam-check class="current-color" />
            </div>
            <img
                :src="imagesUrl+'/banks/'+element.logo"
                class="img-fluid p-2 bg-dark"
                :alt="element.name"
              />
            <small class="text-uppercase d-block">{{ element.name }}</small>
          </div>
        </div>
        <div class="col-12" v-if="errors && errors.financial_entities">
          <label
          class="mt-2 text-danger text-sm"
          for="financial_entities"
        >{{ errors.financial_entities[0] }}</label>
        </div>
      </div>
      <div v-else>
        <NoData
          :showSvg="false"
          :showButton="true"
          elementTextButton="una Entidad Financiera"
          :route-button="routeCreate"
          :classes="['mt-2']"
          :show-title="false"
        />
        <div class="row">
          <div class="col-12" v-if="errors && errors.financial_entities">
            <label class="mt-2 text-danger text-sm" for="financial_entities">{{
              errors.financial_entities[0]
            }}</label>
          </div>
        </div>
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
    selectedParent: Array
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
      axios
        .get(this.routeGetAll)
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
    }
  }
};
</script>