<template>
  <button
    class="navbar-toggler"
    type="button"
    @click="toogleMenu"
    aria-controls="sidenav-main"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</template>
<script>
export default {
  methods: {
    toogleMenu() {
      //this.toggle = !this.toggle;
      var element = document.getElementById("sidenav-collapse-main");
      if (element.classList.contains('show')) {
        element.classList.remove("show");
      } else {
        element.classList.add("show");
      }
    }
  }
};
</script>