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
      <div
        class="d-inline-block ml-auto text-danger mt-1"
        v-if="countErrors"
      >{{ countErrors }} {{ countErrors > 1 ? 'Errores' : 'Error'}}</div>
    </div>
    <div class="mt-2">
      <label class="font-weight-bold" :for="label+random">{{ label }}:</label>
    </div>
    <input type="text" class="form-control" v-model="value[ active ]" />
    <div class="mt-3">
      <small>{{ active == 'es' ? urlEs : urlEn }}{{ (parentSlug ? parentSlug+'/' : '') }}</small>
      <small class="bg-dark text-white" style="letter-spacing: 0.05rem" v-if="!value[ 'editBlock_'+active ]">{{ value[ 'slug_'+active ] }}</small>
      <input
        type="text"
        class="form-control form-control-sm d-inline w-50"
        v-model="value[ 'slug_'+active ]"
        @keydown.enter.prevent="getSlug"
        v-if="value[ 'editBlock_'+active ]"
      />
      <button
        type="button"
        class="btn btn-inverse-info btn-sm ml-2"
        v-if="!value[ 'editBlock_'+active ] && value[ 'slug_'+active ]"
        @click="value[ 'editBlock_'+active ] = !value[ 'editBlock_'+active ]"
      >Editar {{ type }}</button>
      <button type="button" class="btn btn-inverse-info btn-sm ml-2" v-if="value[ 'editBlock_'+active ]" @click="getSlug">Aceptar</button>
    </div>
    <div v-for="(el,i) in errors" :key="i">
      <label class="text-danger text-sm mt-2 d-block" v-if="i == variable+'_'+active">{{ el[0] }}</label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
    urlEs: {
      type: String,
      required: false,
    },
    urlEn: {
      type: String,
      required: false,
    },
    parentSlug: {
      type: String,
      required: false,
    },
    label: String,
    variable: String,
    errors: Object,
    valueEnParent: String,
    valueEsParent: String,
    slugEnParent: String,
    slugEsParent: String,
  },
  data() {
    return {
      active: "es",
      value: {
        en: "",
        es: "",
        slug_es: "",
        slug_en: "",
        editBlock_es: false,
        editBlock_en: false,
        slugEdited_en: false,
        slugEdited_es: false,
      },
      random: Math.ceil(Math.random() * 10),
    };
  },
  methods: {
    toggle(lang) {
      this.active = lang;
    },
    getSlug() {
      this.value['editBlock'+'_'+this.active] = !this.value['editBlock'+'_'+this.active];
      this.value['slugEdited'+'_'+this.active] = !this.value['slugEdited'+'_'+this.active]
    },
  },
  watch: {
    slugEnParent: {
      immediate: true,
      handler: function (newValue) {
        if(newValue){
          this.value.slug_en = newValue;
        }
      },
    },
    slugEsParent: {
      immediate: true,
      handler: function (newValue) {
        if(newValue){
          this.value.slug_es = newValue;
        }
      },
    },
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
      if (!this.value.slugEdited_en) {
        this.value.slug_en = newValue;
      }
      this.$emit("update:valueEn", newValue);
    },
    "value.es": function (newValue, oldValue) {
      if (!this.value.slugEdited_es) {
        this.value.slug_es = newValue;
      }
      this.$emit("update:valueEs", newValue);
    },
    "value.slug_es": function (newVal, oldVal) {
      this.value.slug_es = Slug(newVal);
      this.$emit("update:slugEs", this.value.slug_es);
    },
    "value.slug_en": function (newVal, oldVal) {
      this.value.slug_en = Slug(newVal);
      this.$emit("update:slugEn", this.value.slug_en);
    },
  },
  computed: {
    countErrors: function () {
      if (Object.keys(this.errors).length) {
        let total = 0;
        for (const el in this.errors) {
          if (el == this.variable + "_en" || el == this.variable + "_es") {
            total++;
          }
        }
        return total;
      }
    },
  },
};
</script>