<template>
  <div class="row">
    <div class="col-12 mb-4">
      <slot name="filters"></slot>
      <div class="row d-flex align-items-center" v-if="elements && elements.length">
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <label for="show" class="mb-0">
            <small>Mostrar</small>
            <select
              id="show"
              class="mx-2 form-control bg-white form-control-sm w-auto d-inline-block"
              @change="changePagination()"
              v-model="entries"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <small>entradas</small>
          </label>
        </div>
        <div class="col-12 col-md-6">
          <div class="input-group input-group-merge">
            <div class="input-group-prepend bg-white">
              <span class="input-group-text bg-white" id="search">
                <jam-search class="current-color" height="22" width="22"></jam-search>
              </span>
            </div>
            <input
              type="search"
              class="form-control bg-white"
              :placeholder="'Buscar por ' + placeholder"
              aria-label="search"
              aria-describedby="search"
              v-model="search"
            />
          </div>
        </div>
      </div>
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
                <tr>
                  <th class="border-0" width="3%">#</th>
                  <th class="border-0" v-for="(el,index) in headers" :key="index">{{ el }}</th>
                  <slot name="header_action"></slot>
                  <th class="border-0">Acciones</th>
                </tr>
              </thead>
              <tbody v-if="object.data && object.data.length > 0">
                <tr v-for="(element,i) in object.data" :key="element.id">
                  <td>{{ object.from + i }}</td>
                  <td v-for="(el,j) in elements[i]" :key="j" v-html="el"></td>

                  <slot :name="'td_action_'+element.id"></slot>

                  <td class="table-actions">
                    <a
                      v-if="buttonRead == true"
                      href="#"
                      @click.prevent="clickRead(element.id)"
                      class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
                    >
                      <jam-eye class="current-color" height="18" width="18" />
                    </a>
                    <a
                      v-if="buttonUpdate == true"
                      href="#"
                      @click.prevent="clickUpdate(element.id)"
                      class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
                    >
                      <jam-pencil class="current-color" height="18" width="18" />
                    </a>
                    <a
                      v-if="buttonDisable == true"
                      href="#"
                      @click.prevent="clickDisable(element.id)"
                      class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
                    >
                      <jam-stop-sign class="current-color" height="18" width="18" />
                    </a>
                    <template v-if="buttonDelete == true">
                      <template v-if="typeof element.can_delete !== 'undefined'">
                        <a
                          href="#"
                          v-if="element.can_delete"
                          @click.prevent="clickDelete(element.id)"
                          class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
                        >
                          <jam-trash class="current-color" height="18" width="18" />
                        </a>
                        <button
                          v-else
                          class="btn btn-sm btn-icon-only rounded-circle btn-secondary"
                          v-b-tooltip.hover
                          :title="messageCantDelete"
                        >
                          <jam-info class="current-color" height="18" width="18" />
                        </button>
                      </template>
                      <template v-else>
                        <a
                          href="#"
                          @click.prevent="clickDelete(element.id)"
                          class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
                        >
                          <jam-trash class="current-color" height="18" width="18" />
                        </a>
                      </template>
                      <!--<a
                        v-else
                        href="#"
                        class="btn btn-sm btn-icon-only rounded-circle btn-secondary"
                      >
                        <jam-info class="current-color" height="18" width="18" />
                      </a>-->
                    </template>
                    <template v-else>
                      <a
                        href="#"
                        @click.prevent="clickDelete(element.id)"
                        class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
                      >
                        <jam-trash class="current-color" height="18" width="18" />
                      </a>
                    </template>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td
                    :colspan="object.headers && object.headers.length + 1"
                  >
                    <NoData :show-title="false"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </simplebar>
        </div>
      </div>
      <div class="row mt-4" v-if="!loading">
        <div class="col-6 pt-2">
          <small class v-if="to && from">Mostrando {{ to }} de {{ from }} de {{ total }} entradas</small>
          <small v-else>
            <span v-if="to">{{ total }} entradas</span>
          </small>
        </div>
        <div class="col-6">
          <ul class="pagination justify-content-end mb-0">
            <li class="page-item">
              <a
                href="#"
                class="page-link rounded-circle"
                @click.prevent="clickPrevPage()"
                v-if="currentPage > 1"
              >
                <jam-arrow-left class="current-color" />
              </a>
            </li>
            <li
              class="page-item mx-2"
              v-if="elements && elements.length"
              v-bind:class="[ pageActive == currentPage ? 'active disabled' : '']"
            >
              <select
                id
                @change="clickPage(pageActive)"
                class="form-control bg-white px-2 py-0"
                style="height: 36px"
                v-model="pageActive"
              >
                <option :value="i" v-for="i in lastPage" :key="i">{{ i++ }}</option>
              </select>
            </li>
            <li class="page-item">
              <a
                href="#"
                class="page-link rounded-circle"
                @click.prevent="clickNextPage()"
                v-if="currentPage < lastPage"
              >
                <jam-arrow-right class="current-color" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "./Loader";
import { Skeleton } from "vue-loading-skeleton";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import NoData from "../components/NoData";
export default {
  props: {
    entriesProp: {
      type: Number,
      required: false,
    },
    loadingProp: {
      type: Boolean,
      required: false,
    },
    searchProp: {
      type: String,
      required: false,
    },
    object: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    buttonRead: {
      type: Boolean,
      required: true,
    },
    buttonUpdate: {
      type: Boolean,
      required: true,
    },
    buttonDisable: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonDelete: {
      type: Boolean,
      required: true,
    },
    messageCantDelete: String,
  },
  data() {
    return {
      entries: 10,
      //offset: 1,
      pageActive: 1,
      search: "",
      loading: true,
    };
  },
  components: {
    Loader,
    Skeleton,
    simplebar,
    NoData
  },
  methods: {
    clickDisable(id) {
      this.$emit("disable", id);
    },
    clickDelete(id) {
      this.$emit("delete", id);
    },
    clickRead(id) {
      this.$emit("read", id);
    },
    clickUpdate(id) {
      this.$emit("update", id);
    },
    clickNextPage() {
      if (this.search) {
        this.$emit("get", this.currentPage + 1, this.entries, this.search);
      } else {
        this.$emit("get", this.currentPage + 1, this.entries);
      }
      this.loading = true;
    },
    clickPrevPage() {
      if (this.search) {
        this.$emit("get", this.currentPage - 1, this.entries, this.search);
      } else {
        this.$emit("get", this.currentPage - 1, this.entries);
      }
      this.loading = true;
    },
    clickPage(page) {
      if (this.search) {
        this.$emit("get", page, this.entries, this.search);
      } else {
        this.$emit("get", page, this.entries);
      }
      this.loading = true;
    },
    changePagination() {
      if (this.search) {
        this.$emit("get", 1, this.entries, this.search);
      } else {
        this.$emit("get", 1, this.entries);
      }
      this.loading = true;
    },
  },
  watch: {
    elementsPerPage: function (newValue, oldValue) {
      if (newValue) {
        this.entries = newValue;
      }
    },
    search: function (newValue, oldValue) {
      this.$emit("get", 1, this.entries, newValue);
      this.$emit("update:searchProp", String(newValue));
      this.loading = true;
    },
    object: function (newValue, oldValue) {
      this.loading = true;
      if (newValue) {
        this.loading = false;
      }
    },
    loadingProp: function (newValue, oldValue) {
      this.loading = newValue;
    },
    loading: function (newValue, oldValue) {
      this.$emit("update:loadingProp", Boolean(newValue));
    },
    entriesProp: function (newValue, oldValue) {
      this.entries = newValue;
    },
    entries: function (newValue, oldValue) {
      this.$emit("update:entriesProp", Number(newValue));
    },
    searchProp: function (newValue, oldValue) {
      this.search = newValue;
    },
    currentPage: function (newValue, oldValue) {
      if (newValue) {
        this.pageActive = newValue;
      }
    },
  },
  computed: {
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
            if (
              key_element != "id" &&
              key_element != "action" &&
              key_element != "can_delete"
            ) {
              data[key_object].push(object_2[key_element]);
            }
          }
        }
        return data;
      }
    },
    to: function () {
      return this.object.from;
    },
    from: function () {
      return this.object.to;
    },
    total: function () {
      return this.object.total;
    },
    lastPage: function () {
      return this.object.last_page;
    },
    currentPage: function () {
      return this.object.current_page;
    },
  },
};
</script>
