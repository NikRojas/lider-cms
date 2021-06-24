<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="
                  'Información de plataforma comercial de Proyecto ' +
                  project.name_es
                "
                parent
                active="Proyectos"
              ></BreadCrumb>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6 col-md-5">
              <a
                :href="routeReturn"
                class="btn btn-icon btn-sm btn-inverse-light"
              >
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
      <GeneralInformation
        :routeGetText="routeGetText"
        :routeUpdateText="routeUpdateText"
        :elementParent="elementParent"
      />

      <Location
        :routeLocation="routeLocation"
        :elementParent="elementParent"
        :routeGetAllLocation="routeGetAllLocation"
        :routeOrderLocation="routeOrderLocation"
        :messageOrderLocation="messageOrderLocation"
        :imagesUrlLocation="imagesUrlLocation"
      />

      <Promotion
        :routePromotion="routePromotion"
        :elementParent="elementParent"
        :routeGetAllPromotion="routeGetAllPromotion"
        :routeOrderPromotion="routeOrderPromotion"
        :messageOrderPromotion="messageOrderPromotion"
        :imagesUrlPromotion="imagesUrlPromotion"
      />
    </div>
  </div>
</template>

<script>
import GeneralInformation from "./GeneralInformation";
import Location from "./Location";
import Promotion from "./Promotion";
import BreadCrumb from "../../../components/BreadCrumb";
export default {
  props: {
    elementParent: Object,
    routeReturn: String,
    routeGetText: String,
    routeUpdateText: String,

    routeLocation: String,
    routeGetAllLocation: String,
    routeOrderLocation: String,
    messageOrderLocation: String,
    imagesUrlLocation: String,

    routePromotion: String,
    routeGetAllPromotion: String,
    routeOrderPromotion: String,
    messageOrderPromotion: String,
    imagesUrlPromotion: String,
  },
  components: { BreadCrumb, GeneralInformation, Location, Promotion },
  data() {
    return {
      project: {},
    };
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
  },
};
</script>
