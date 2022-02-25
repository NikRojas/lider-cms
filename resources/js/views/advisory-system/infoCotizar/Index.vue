<template>
    <div>
        <div class="header pb-6">
        <div class="container-fluid">
            <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
                <div class="col-6 col-md-7">
                <BreadCrumb title="Información Cotizar" parent="Sistema Asesores" active="Información Cotizar"></BreadCrumb>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="container-fluid mt--6">
          <Navs route="informacion-cotizar" @refreshNavs="getNavs" :messageOrder="messageOrder"></Navs>
          <div class="mb-4">
          <Steps ref="stepsElement" route="informacion-cotizar" :messageOrder="messageOrder"></Steps>
          </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from "../../../components/BreadCrumb";
import Steps from "./Steps";
import Navs from "./Navs";
export default {
  components: {
    BreadCrumb,
    Steps,
    Navs,
  },
  props: {
    messageOrder: String,
  },
  data() {
    return{
      
    }
  },
  methods: {
    getNavs(){
      this.$refs.stepsElement.getNavs();
    }
  },
  created() {
  },
};
</script>
