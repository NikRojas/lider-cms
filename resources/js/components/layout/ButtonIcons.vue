


<template>
  <button
    class="navbar-toggler d-none d-md-block p-0"
    type="button"
    @click="handleClick"
    aria-controls="sidenav-main"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</template>
<script>
export default {
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    handleClick() {
      this.toggle = !this.toggle;
      var element = document.getElementById("body");
      if (this.toggle) {
        element.classList.add("sidebar-icon-only");
      } else {
        element.classList.remove("sidebar-icon-only");
      }
    },
  },
};
</script>