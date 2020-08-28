<template>
 <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb :title="'Planos Proyecto '+project.name_es+' - Tipología '+tipology.name" parent active="Proyectos"></BreadCrumb>
            </div>
            <div class="col-6 col-md text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-files class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Plano</span>
              </a>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6 col-md-5">
              <a :href="routeReturn" class="btn btn-icon btn-sm btn-inverse-light">
                <span class="btn-inner--icon">
                  <jam-arrow-left class="current-color" />
                </span>
                <span class="btn-inner--text">Regresar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
    </div>
 </div>
</template>
<script>
import BreadCrumb from "../../../components/BreadCrumb";
export default {
 components:{
  BreadCrumb
 },
 props: {
    elementParent: Object,
    subelementParent: Object,
    messageOrder: String,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    routeOrder: String,
    route: String,
 },
 data(){
  return{
   project: {},
   tipology: {}
  }
 },
 watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
    subelementParent: {
      immediate: true,
      handler: function (newValue) {
        this.tipology = newValue;
      },
    },
  },
}
</script>