<template>
  <div>
    <label class="font-weight-bold d-block">{{ label }}</label>
    <div class="input-group input-group-merge">
      <div class="input-group-prepend">
        <span class="input-group-text"
          ><jam-search height="14" width="14"></jam-search
        ></span>
      </div>
      <input
        v-model="search"
        class="form-control"
        placeholder="Buscar por descripción, código sap"
        type="text"
      />
    </div>
    <div class="card mt-2">
      <div class="table-responsive">
        <simplebar data-simplebar-auto-hide="false" style="max-height: 400px">
          <table class="table align-items-center">
            <thead class="thead-light">
              <th width="2%" class="border-0"></th>
              <th class="border-0">Descripción</th>
              <th class="border-0">Área</th>
            </thead>
            <tbody>
              <template v-if="elementsfiltered.length">
                <tr
                  v-for="element in elementsfiltered"
                  :key="element.id + 'pw'"
                >
                  <td width="2%">
                    <div
                      class="custom-control custom-checkbox"
                      style="margin-top: -14px"
                    >
                      <input
                        class="custom-control-input"
                        :value="element.id"
                        :id="'items' + element.id"
                        type="checkbox"
                        v-model="selected"
                      />
                      <label
                        class="custom-control-label"
                        :for="'items' + element.id"
                      >
                      </label>
                    </div>
                  </td>
                  <td>
                    <label class="mb-0" style="cursor:pointer;" :for="'items' + element.id">
                      {{ element.description }} <br>
                      {{ element.sap_code}}  
                      <div>
                        <span class="font-weight-bold text-success badge badge-success" style="color: rgb(45, 198, 27) !important; background-color: rgb(204 255 230);" v-if="element.available">En Stock</span>
                        <span class="font-weight-bold text-danger badge badge-danger" v-else>Sin Stock</span>
                      </div>
                    </label>
                  </td>
                  <td>{{ element.area }} m2</td>
                </tr>
              </template>
              <template v-else>
                <tr class="text-center">
                  <td colspan="3" class="py-4">
                    No hay {{ label }} registrados en el Proyecto
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </simplebar>
      </div>
    </div>
  </div>
</template>
<style>
@media (max-width: 992px) {
  .modal-dialog.modal-lg {
    max-width: 90% !important;
  }
}
</style>
<script>
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
export default {
  components: {
    simplebar,
  },
  props: {
    elements: Array,
    selectedParent: Array,
    label: {
      default: "Estacionamientos",
      type: String,
    },
  },
  watch: {
    selectedParent: {
      immediate: true,
      handler: function (newValue) {
        //this.selected = newValue;
        if (newValue) {
          this.selected = newValue;
        }
      },
    },
    selected: function (newValue, oldValue) {
      this.$emit("update:selected", newValue);
    },
  },
  computed: {
    elementsfiltered() {
      let search = this.search
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return this.elements.filter((el) => {
        return el.description
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(search) || el.sap_code
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(search);
      });
    },
  },
  data() {
    return {
      selected: [],
      search: "",
      element: {
        name: "",
      },
    };
  },
};
</script>