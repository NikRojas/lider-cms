<template>
  <div>
    <nav aria-label="breadcrumb" class="d-lg-inline-block" v-if="showBreadCrumb">
      <ol class="breadcrumb p-0 m-0 breadcrumb-links bg-transparent">
        <li class="breadcrumb-item">
          <a href="/dashboard">
            <jam-pie-chart height="16" width="16"></jam-pie-chart>
          </a>
        </li>
        <li class="breadcrumb-item" v-if="parent">
          <a>{{ parent }}</a>
        </li>
        <li class="breadcrumb-item text-primary" aria-current="page" v-if="active">{{ active }}</li>
      </ol>
    </nav>
    <h1 class="h1 font-weight-bold mb-0">{{ title }}</h1>
  </div>
</template>
<style scoped>
.breadcrumb-dark .breadcrumb-item + .breadcrumb-item::before {
  color: #adb5bd;
}
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  content: "-";
  color: #8898aa;
}
.bg-transparent {
  background: transparent;
}
</style>
<script>
export default {
  props: {
    showBreadCrumb:{
      default: true,
      type:Boolean
    },
    title: String,
    parent: String,
    active: String,
  },
};
</script>