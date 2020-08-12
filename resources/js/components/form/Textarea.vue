<template>
  <div class="form-group">
    <div class="d-flex">
    <a
      href="#"
      class="btn btn-sm py-0 px-2 btn-icon mr-1"
      :class="active == 'es' ? 'btn-primary' : 'btn-outline-primary'"
      @click.prevent="toggle('es')"
    >
      <span class="btn-inner--icon">
        <gb-flag code="es" size="small" />
      </span>
      <span class="btn-inner--text">Español</span>
    </a>
    <a
      href="#"
      class="btn btn-sm py-0 px-2 btn-icon"
      :class="active == 'en' ? 'btn-primary' : 'btn-outline-primary'"
      @click.prevent="toggle('en')"
    >
      <span class="btn-inner--icon">
        <gb-flag code="gb" size="small" />
      </span>
      <span class="btn-inner--text">Inglés</span>
    </a>
    <div class="d-inline-block ml-auto text-danger mt-1" v-if="countErrors">{{ countErrors }}  {{ countErrors > 1 ? 'Errores' : 'Error'}}</div>
    </div>
    <div class="mt-2">
      <label class="font-weight-bold" :for="label+random">{{ label }}:</label>
    </div>
    <textarea cols="10" class="form-control" v-model="value[ active ]" />
    <div v-for="(el,i) in errors" :key="i">
      <label class="text-danger text-sm d-block" v-if="i == variable+'_'+active">{{ el[0] }}</label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    variable: String,
    errors: Object,
    valueEnParent: String,
    valueEsParent: String,
  },
  data() {
    return {
      active: "es",
      value: {
        en: "",
        es: "",
      },
      random: Math.ceil(Math.random() * 10),
    };
  },
  methods: {
    toggle(lang) {
      this.active = lang;
    },
  },
  watch: {
    valueEnParent: {
      immediate: true,
      handler: function (newValue) {
        this.value.en = newValue;
      },
    },
    valueEsParent: {
      immediate: true,
      handler: function (newValue) {
        this.value.es = newValue;
      },
    },
    "value.en": function (newValue, oldValue) {
      this.$emit("update:valueEn", newValue);
    },
    "value.es": function (newValue, oldValue) {
      this.$emit("update:valueEs", newValue);
    },
  },
  computed: {
    countErrors: function () {
      if (Object.keys(this.errors).length) {
        let total = 0;
        for (const el in this.errors) {
          if (
            el == this.variable + "_en" ||
            el == this.variable + "_es"
          ) {
            total++;
          }
        }
        return total;
      }
    },
  },
};
</script>