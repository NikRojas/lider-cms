<template>
  <div class="row">
    <div class="col-12 mb-4">
      <p class="mb-0">{{ messageOrder }}</p>
    </div>
    <div class="col-12">
      <div class="card">
        <div v-if="loading">
          <table class="table align-items-center">
            <thead class="thead-light">
              <tr>
                <th class="border-0" v-for="i in 5" :key="i">
                  <Skeleton />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 5" :key="i">
                <td v-for="j in 5" :key="j">
                  <Skeleton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      <div class="table-responsive" v-if="!loading">
        <simplebar data-simplebar-auto-hide="false">
          <table class="table align-items-center">
            <thead class="thead-light">
              <th class="border-0" width="3%">#</th>
              <th class="border-0" v-for="(el,index) in headers" :key="index">{{ el }}</th>
              <th class="border-0">Acciones</th>
            </thead>
            <draggable
              tag="tbody"
              v-model="orderElements"
              v-if="object.data && object.data.length > 0"
              @change="handleDrag"
            >
              <tr v-for="(element,i) in object.data" :key="element.id">
                <td>{{ 1 + i }}</td>
                <td v-for="(el,j) in elements[i]" :key="j" v-html="el"></td>
                <td class="table-actions">
                  <a
                    v-if="buttonDetail == true"
                    href="#"
                    @click.prevent="clickDetail(element.id)"
                    class="btn btn-icon-only rounded-circle btn-inverse-info"
                  >
                    <jam-eye class="current-color" height="18" width="18" />
                  </a>
                  <a
                    v-if="buttonUpdate == true"
                    href="#"
                    @click.prevent="clickEdit(element.id)"
                    class="btn btn-icon-only rounded-circle btn-inverse-info"
                  >
                    <jam-pencil class="current-color" height="18" width="18" />
                  </a>
                  <a
                    v-if="buttonDelete == true"
                    href="#"
                    @click.prevent="clickDelete(element.id)"
                    class="btn btn-icon-only rounded-circle btn-inverse-danger"
                  >
                    <jam-trash class="current-color" height="18" width="18" />
                  </a>
                </td>
              </tr>
            </draggable>
            <tbody v-else>
              <tr>
                <td
                  :colspan="object.headers && object.headers.length + 1"
                >No se encontraron resultados.</td>
              </tr>
            </tbody>
          </table>
        </simplebar>
      </div>
      </div>
      <div class="row" v-if="!loading">
        <div class="col-12 mt-4 text-right">
          <p class="mb-0" v-if="!total == 0">Mostrando {{ total }} entrada(s)</p>
          <p class="mb-0" v-else>{{ total }} entradas</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { Skeleton } from "vue-loading-skeleton";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
export default {
  props: {
    messageOrder: String,
    title: {
      type: String,
    },
    object: {
      type: Object,
      required: true,
    },
    buttonDetail: {
      type: Boolean,
      required: true,
    },
    buttonUpdate: {
      type: Boolean,
      required: true,
    },
    buttonDelete: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      orderElements: [],
    };
  },
  methods: {
    handleDrag() {
      this.$emit("drag", this.orderElements);
      this.loading = true;
    },
    clickDelete(id) {
      this.$emit("delete", id);
    },
    clickDetail(id) {
      this.$emit("detail", id);
    },
    clickEdit(id) {
      this.$emit("edit", id);
    },
  },
  components: {
    draggable,
    simplebar,
    Skeleton
  },
  watch: {
    object: function (newValue, oldValue) {
      if (newValue) {
        this.orderElements = newValue.data;
        this.loading = false;
      }
    },
  },
  computed: {
    total: function () {
      if (this.object.data) {
        return this.object.data.length;
      }
      return 0;
    },
    headers: function () {
      if (this.object.headers) {
        return this.object.headers.filter((value, i) => i > 0);
      }
    },
    elements: function () {
      if (this.object.data) {
        var data = [];
        let object = this.object.data;
        for (const key_object in object) {
          let object_2 = object[key_object];
          data[key_object] = [];
          for (const key_element in object_2) {
            if (key_element != "id") {
              data[key_object].push(object_2[key_element]);
            }
          }
        }
        return data;
      }
    },
  },
};
</script>
