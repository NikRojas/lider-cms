<template>
  <b-dropdown
    left
    id="dropdown-text"
    :menu-class="['border', 'shadow-none']"
    ref="dropdown"
    :variant="!active.length ? 'inverse-light' : 'inverse-primary'"
    :toggle-class="[]"
  >
    <template v-slot:button-content>
      <jam-coin
        height="18px"
        width="18px"
        style="margin-top: -4px"
        class="current-color"
      ></jam-coin>
      <span class>Estado de Pago</span>
    </template>
    <b-dropdown-text tag="div" class="px-2" style="width: 16rem">
      <b-form-checkbox
        :id="'checkboxsta' + i.id"
        v-model="active"
        v-for="i in transactions"
        :key="i.id"
        :value="i.id"
      >
        {{ i.name }}
      </b-form-checkbox>
    </b-dropdown-text>
  </b-dropdown>
</template>
<script>
export default {
  props: {
    activeParent: Object,
    removeParent: String,
    transactions: Array,
  },
  data() {
    return {
      active: [],
    };
  },
  components: {},
  watch: {
    active: function (newValue, oldValue) {
      this.$emit("update:active", newValue);
      this.$emit("get");
    },
  },
};
</script>