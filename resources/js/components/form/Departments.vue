<template>
  <div>
    <div class="row" v-if="object && object.length > 0">
      <div
        class="col-6 col-sm-3 col-lg-auto text-center"
        v-for="element in object"
        :key="element.id"
        @click="clickElement(element.id)"
      >
        <div class="department pr-2 py-2" :class="{'department-selected' : element.id == indexData }">
          <img
            :src="'https://storage.googleapis.com/playgroup-web/img/departments/'+element.logo"
            height="40"
            width="auto"
            :alt="element.title"
            v-if="element.logo"
          />
          <small class="text-uppercase d-block font-weight-bold">{{ element.title }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.department-selected {
  border: 2px solid #007bff;
  padding: 1%;
  border-radius: 0.25rem;
}
.department {
  cursor: pointer;
}
</style>
<script>
export default {
  props: {
    index: {
      type: Number
    },
    object: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      indexData: ""
    };
  },
  methods: {
    clickElement(id) {
      this.indexData = id;
    }
  },
  watch: {
    index: function(newValue, oldValue) {
      if(newValue){
        this.indexData = newValue;
      }
    },
    indexData: function(newValue, oldValue) {
      if(newValue){
        this.$emit("click", newValue);
      }
    }
  }
};
</script>