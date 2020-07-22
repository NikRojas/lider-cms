<template>
  <button
    type="button"
    class="navbar-toggler"
    @click="toogleMenu"
    aria-controls="sidenav-main"
    aria-label="Toggle sidenav"
  >
    <span></span>
    <span></span>
  </button>
</template>
<script>
export default {
  /*data() {
    return {
      toggle: false
    };
  },*/
  methods: {
    toogleMenu() {
      //this.toggle = !this.toggle;
      var element = document.getElementById("sidenav-collapse-main");
      //if (this.toggle) {
      if(element.classList.contains('show')){
        element.classList.remove("show");
      } else {
        element.classList.add("show");
      }
    }
  }
};
</script>