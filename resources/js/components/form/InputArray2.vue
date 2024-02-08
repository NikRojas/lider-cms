<template>
  <div>
     <div class="row">
       <div class="col-12">
         <label
          class="font-weight-bold"
        >{{ label }}</label>
       </div>
     </div>
    <div class="row mb-2" v-for="(el, i) in array.length" :key="'tr'+i">
      <div v-for="(el, j) in headers" class="col-lg-5" :key="'td'+j">
        <label
          class="text-xs font-weight-bold"
          :for="el.variable"
        >{{ el.label.charAt(0).toUpperCase() + el.label.slice(1) }} {{ i + 1 }}</label>
        <input
          type="text"
          v-if="el.variable == 'tag_es' || el.variable == 'text'"
          class="form-control"
          :id="el.variable"
          v-model="array[i][el.variable]"
        />
        <input
          type="text"
          v-if="el.variable == 'tag_en' || el.variable == 'text'"
          class="form-control"
          :id="el.variable"
          v-model="array[i][el.variable]"
        />
        <label
          class="text-danger text-sm mt-2 d-block"
          v-if="errors && errors[fieldName+'.'+i+'.'+el.variable]"
        >{{ errors[fieldName+'.'+i+'.'+el.variable][0] }}</label>
      </div>
      <div class="mb-2 mt-2 mt-lg-0 actions d-flex align-items-end col-lg-2" v-if="!disableEdit">
        <button
          class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
          @click.prevent="addEl(i)"
          v-if="(array.length - 1) == i"
        >
          <jam-plus class="current-color" />
        </button>
        <button
          class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
          @click.prevent="deleteEl(i)"
          v-if="i != 0"
        >
          <jam-trash-alt class="current-color" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /*disableMessageEdit: String,*/
    disableEdit: {
      default: false,
      type: Boolean
    },
    label: String,
    fieldName: String,
    headers: Array,
    arrayProp: Array,
    errorsProp: Object
  },
  data() {
    return {
      arrayData: [{}],
      errorsData: {}
    };
  },
  methods: {
    restore() {
      this.arrayData = [{}];
    },
    addEl: function(i) {
      const isEmpty = Object.values(this.arrayData[i]).every(
        x => x === null || x === ""
      );
      if (isEmpty) {
        return;
      }
      this.arrayData.push({});
    },
    deleteEl: function(i) {
      this.arrayData.splice(i, 1);
    }
  },
  computed: {
    array: {
      get() {
        return this.arrayData;
      },
      set(value) {
        this.arrayData.push({});
        this.array.push({});
      }
    },
    errors: {
      get() {
        return this.errorsData;
      }
    }
  },
  watch: {
    array: {
      deep: true,
      handler(newValue, oldValue) {
        if (!newValue[newValue.length - 1]) {
          return;
        }
        this.$emit("update:array", newValue);
      }
    },
    errorsProp: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.errorsData = newValue;
      }
    },
    arrayProp: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue && newValue.length > 0) {
          this.arrayData = newValue;
        }
      }
    }
  }
};
</script>
