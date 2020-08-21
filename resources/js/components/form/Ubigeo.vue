<template>
  <div class="row mb-4">
    <div class="col-12 col-lg">
      <label class="font-weight-bold" id="department">Departamento:</label>
      <Skeleton height="30px" v-if="requestDepartments" />
      <div v-else>
        <select @change="getProvince" class="form-control" id="department" v-model="codeDepartment">
          <option
            :value="el.code_department"
            v-for="(el,i) in departments"
            :key="i"
          >{{ el.department }}</option>
        </select>
        <label
          v-if="errors && errors.department"
          class="mt-2 text-danger text-sm"
          for="department"
        >{{ errors.department[0] }}</label>
      </div>
    </div>
    <div class="col-12 col-lg">
      <label class="font-weight-bold" for="province">Provincia</label>
      <Skeleton height="30px" v-if="requestProvinces" />
      <div v-else>
        <select
          @change="getDistrict"
          :disabled="provinceDisable"
          class="form-control"
          id="province"
          v-model="codeProvince"
        >
          <option :value="el.code_province" v-for="(el,i) in provinces" :key="i">{{ el.province }}</option>
        </select>
        <label
          v-if="errors && errors.province"
          class="mt-2 text-danger text-sm"
          for="province"
        >{{ errors.province[0] }}</label>
      </div>
    </div>
    <div class="col-12 col-lg">
      <label class="font-weight-bold" for="district">Distrito</label>
      <Skeleton height="30px" v-if="requestDistricts" />
      <div v-else>
        <select
          class="form-control"
          :disabled="districtDisable"
          id="district"
          v-model="codeDistrict"
        >
          <option :value="el.code_district" v-for="(el,i) in districts" :key="i">{{ el.district }}</option>
        </select>
        <label
          v-if="errors && errors.district"
          class="mt-2 text-danger text-sm"
          for="district"
        >{{ errors.district[0] }}</label>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    routeDepartment: String,
    routeDistrict: String,
    routeProvince: String,
    codeUbigeoParent: {
      type: String,
      defautl: false,
    },
    errors: {
      type: Object,
    },
  },
  components: {
    Skeleton,
  },
  data() {
    return {
      // departments
      departments: [],
      requestDepartments: false,
      codeDepartment: "",
      focusDepartment: false,

      // provinces
      provinces: [],
      codeProvince: "",
      provinceDisable: true,
      requestProvinces: false,
      focusProvince: false,

      // district
      districts: [],
      codeDistrict: "",
      districtDisable: true,
      requestDistricts: false,

      setDataProp: true,
    };
  },
  methods: {
    setUbigeo() {
      this.codeDepartment = this.codeUbigeoParent.substr(0, 2);
      this.getProvince();
      this.codeProvince = this.codeUbigeoParent.substr(2, 2);
      this.getDistrict();
      this.codeDistrict = this.codeUbigeoParent.substr(4, 2);
      this.setDataProp = false;
    },
    cleanElements() {
      if (this.setDataProp) {
        this.codeProvince = "";
        this.districts = [];
        this.codeDistrict = "";
        this.districtDisable = true;
        this.requestDistricts = false;
      } else {
        this.setDataProp = true;
      }
    },
    getDepartments() {
      this.requestDepartments = true;
      axios.get(this.routeDepartment).then((response) => {
        this.departments = response.data;
        this.requestDepartments = false;
      });
    },
    getProvince() {
      this.requestProvinces = true;
      axios
        .get(this.routeProvince, {
          params: {
            department: this.codeDepartment,
          },
        })
        .then((response) => {
          this.cleanElements();
          this.provinces = response.data;
          this.requestProvinces = false;
          this.provinceDisable = false;
        });
    },
    getDistrict() {
      this.codeDistrict = "";
      this.requestDistricts = true;
      axios
        .get(this.routeDistrict, {
          params: {
            department: this.codeDepartment,
            province: this.codeProvince,
          },
        })
        .then((response) => {
          this.districts = response.data;
          this.requestDistricts = false;
          this.districtDisable = false;
        });
    },
  },
  created() {
    this.getDepartments();
    if (this.codeUbigeoParent) {
      this.setUbigeo();
    }
  },
  watch: {
    codeDepartment(newValue) {
      this.$emit("update:codeDepartment", newValue);
    },
    codeProvince(newValue) {
      this.$emit("update:codeProvince", newValue);
    },
    codeDistrict(newValue) {
      this.$emit("update:codeDistrict", newValue);
    },
  },
};
</script>