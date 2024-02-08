<template>
  <div class>
    <b-dropdown
      left
      id="dropdown-text"
      :menu-class="['border','shadow-none']"
      ref="dropdown"
      :variant="active.value == 'all' ? 'inverse-light' : 'inverse-primary'"
      :toggle-class="[]"
    >
      <template v-slot:button-content>
        <jam-calendar height="18px" width="18px" style="margin-top: -4px;" class="current-color"></jam-calendar>
        <span class>{{ active.text }}</span>
      </template>
      <b-dropdown-text tag="div" class="px-2" style="width: 16rem;">
        <button
          :class="active.value == i.value ? 'btn-primary' : 'btn-inverse-primary'"
          class="btn mb-1 btn-sm btn-block"
          v-for="i in filters"
          :key="i.value"
          @click.prevent="handleFilter(i)"
        >{{ i.text }}</button>
        <date-picker
          ref="datepicker"
          @change="handleFilterRange"
          placeholder="Personalizado"
          :shortcuts="[]"
          v-model="range"
          lang="es"
          input-class="form-control mt-1"
          format="D MMM YYYY"
          range-separator="-"
          width="100%"
          range
        >
          <jam-calendar height="18" width="18" slot="calendar-icon" class="current-color mt-2"></jam-calendar>
        </date-picker>
      </b-dropdown-text>
    </b-dropdown>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
export default {
  props:{
    activeParent: Object,
    removeParent: String
  },
  components:{
    DatePicker
  },
  data() {
    return {
      range: null,
      filters: [
        { text: "Cualquier Fecha", value: "all" },
        { text: "Hoy", value: "today" },
        { text: "Últimos 7 días", value: "7" },
        { text: "Últimos 30 días", value: "30" },
        { text: "Últimos 90 días", value: "90" },
        { text: "Este Año", value: "this_year" },
      ],
      active: { text: "Cualquier Fecha", value: "all" },
    };
  },
  methods: {
    handleFilterRange() {
      if (!this.range[0]) {
        if(this.removeParent){
          this.active = { text: "Hoy", value: "today" };
        }
        else{
          this.active = { text: "Cualquier Fecha", value: "all" };
        }
        this.handleFilter(this.active);
        return false;
      }
      setTimeout(() => {
        this.active = {
          text: this.$refs.datepicker.text,
          value: "range",
        };
      }, 50);
      this.$refs.dropdown.hide(true);
    },
    handleFilter(i) {
      this.range = [];
      this.active = i;
      this.$refs.dropdown.hide(true);
    },
  },
  watch: {
    activeParent: {
      immediate: true,
      handler: function (newValue) {
        if(newValue){
          this.active = newValue;
        }
      },
    },
    removeParent: {
      immediate: true,
      handler: function (newValue) {
        if(newValue){
          this.filters = this.filters.filter(function (el) {
            return el.value != newValue;
          });
        }
      }
    },
    active: function (newValue, oldValue) {
      this.$emit("update:active", newValue);
      this.$emit("get");
    },
    range: function (newValue, oldValue) {
      this.$emit("update:range", newValue);
    },
  },
};
</script>