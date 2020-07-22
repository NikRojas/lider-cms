<template>
    <div>
    <h6 class="h2 text-primary text-uppercase d-inline-block mb-0">{{ title }}</h6>
              <nav aria-label="breadcrumb" class="d-none d-lg-inline-block ml-md-4">
                <ol class="breadcrumb p-0 m-0 breadcrumb-links bg-transparent">
                  <li class="breadcrumb-item"><a href="/dashboard"><i class="fas fa-chart-bar"></i></a></li>
                  <li class="breadcrumb-item" v-if="parent"><a>{{ parent }}</a></li>
                  <li class="breadcrumb-item text-primary" aria-current="page" v-if="active">{{ active }}</li>
                </ol>
              </nav>
              </div>
</template>
<style scoped>
.breadcrumb-dark .breadcrumb-item+.breadcrumb-item::before {
    color: #adb5bd;
}
.breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    content: '-';
    color: #8898aa;
}
.bg-transparent{
  background: transparent;
}
</style>
<script>
export default {
    props:{
        title: String,
        parent: String,
        active: String
    }
}
</script>