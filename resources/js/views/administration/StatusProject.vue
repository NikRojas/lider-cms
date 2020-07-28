<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Estado de Proyectos" parent="Administración" active="Estado de Proyectos"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-neutral" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <i class="fas fa-newspaper"></i>
                </span>
                <span class="btn-inner--text">Nuevo Estado</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb"
export default {
  components:{
    BreadCrumb
  },
  methods:{
    newEl(){

    }
  }
}
</script>