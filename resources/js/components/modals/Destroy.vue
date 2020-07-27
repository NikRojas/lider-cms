<template>
  <b-modal
    v-model="open"
    @close="cancelCustom"
    no-close-on-esc
    no-close-on-backdrop
    centered
    footer-class="border-0 pt-0"
    body-class="pt-0"
  >
    <template slot="modal-title">
      <div class="text-primary h2">Eliminar {{ element.charAt(0).toUpperCase() + element.slice(1) }}</div>
    </template>
    <template slot="modal-header-close">
      <button type="button" class="btn p-0 bg-transparent" @click="cancelCustom">
        <jam-close></jam-close>
      </button>
    </template>
    <div v-if="loadingGet">
      <Skeleton/>
      <div class="w-25 mb-1">
        <Skeleton/>
      </div>
      <div class="w-75">
        <Skeleton/>
      </div>
    </div>
    <div v-else>
      <p>Esta apunto de eliminar un {{ element }}, una vez que realice esta acción no se puede deshacer</p>
      <p class="mb-2">
        Escribe
        <b>ELIMINAR</b> para confirmar
      </p>
      <input type="text" class="form-control" v-model="inputDestroy" />
    </div>
    <template v-slot:modal-footer="{ ok }">
      <Button
        :classes="['btn-danger']"
        text="Eliminar"
        @click="submit"
        :request-server="loadingSubmit"
        :disabled="buttonDestroy"
        v-show="!loadingGet"
      ></Button>
      <button type="button" class="btn btn-secondary" @click="cancelCustom">Cancelar</button>
    </template>
  </b-modal>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import Button from "../Button";
export default {
  props: {
    open: Boolean,
    loadingGet: Boolean,
    element: String,
    loadingSubmit: Boolean,
  },
  components: {
    Button,
    Skeleton,
  },
  data() {
    return {
      requestSubmit: false,
      requestGet: false,
      inputDestroy: "",
      buttonDestroy: true,
    };
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
    cancelCustom() {
      this.$emit("cancel");
    },
    restore() {
      this.requestSubmit = false;
      this.requestGet = false;
      this.inputDestroy = "";
      this.buttonDestroy = true;
    },
  },
  watch: {
    open: function (val) {
      if (val == false) {
        this.restore();
      }
    },
    inputDestroy: function (val) {
      if (val === val.toUpperCase() && val === "ELIMINAR") {
        this.buttonDestroy = false;
      } else {
        this.buttonDestroy = true;
      }
    },
  },
};
</script>