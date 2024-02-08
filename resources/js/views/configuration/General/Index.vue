<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Configuración General" parent="Configuración" active="Configuración General"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
       <Schedules :routeGet="routeGetSchedules" :routeOrder="routeOrderSchedules" route="schedules" :messageOrder="messageOrder"></Schedules>
        <FinancingOptions :routeGet="routeGetFinancingOptions" :routeOrder="routeOrderFinancingOptions" route="financing-options" :messageOrder="messageOrder"></FinancingOptions>
        <TasaSeguro :routeGet="routeGetTasaSeguro" route="schedules" :messageOrder="messageOrder"></TasaSeguro>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../../components/BreadCrumb";
import Schedules from "./Schedules";
import FinancingOptions from "./FinancingOptions";
import TasaSeguro from "./TasaSeguro";
export default {
  components: {
    BreadCrumb,
    Schedules,
    FinancingOptions,
    TasaSeguro
  },
  props: {
    messageOrder: String,
    routeGetSchedules: String,
    routeOrderSchedules: String,
    routeGetFinancingOptions: String,
    routeOrderFinancingOptions: String,
    routeGetTasaSeguro: String
  },
  data() {
    return{
      
    }
  },
  methods: {
  },
  created() {
  },
};
</script>
