<template>
  <div class="form-group">
    <label class="font-weight-bold">Estado del Proyecto:</label>
    <div v-if="loading">
      <div class="row">
        <div class="col-12 mb-1" v-for="i in 3" :key="i">
          <Skeleton height="60px" />
        </div>
      </div>
    </div>
    <div v-else>
      <p
        v-if="elements && elements.length > 0"
      >Seleccione el estado en el que se encuentra el Proyecto</p>
      <div v-if="elements && elements.length > 0">
        <b-form-radio-group
          v-model="selected"
          :options="elements"
          text-field="name_es"
          value-field="id"
          size="lg"
          name="radios"
          plain
          stacked
        />
        <div class="row"  v-if="errors && errors.project_status_id">
          <div class="col-12">
            <label class="mt-2 text-danger text-sm" for="project_status_id">{{ errors.project_status_id[0] }}</label>
          </div>
        </div>
      </div>
      <NoData
        :showSvg="false"
        :showButton="true"
        elementTextButton="un Estado del Proyecto"
        :route-button="routeCreate"
        :classes="['mt-2']"
        :show-title="false"
        v-else
      />
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
    selectedParent: Number,
  },
  components: {
    Skeleton,
    NoData,
  },
  data() {
    return {
      selected: 0,
      elements: {},
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" },
      ],
      loading: false,
    };
  },
  methods: {
    getAll() {
      this.loading = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data.data;
          this.loading = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getAll();
  },
  watch: {
    selectedParent: function (newValue, oldValue) {
      this.selected = newValue;
    },
    selected: function (newValue, oldValue) {
      this.$emit("update:selected", newValue);
    },
  },
};
</script>