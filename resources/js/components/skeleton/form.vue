<template>
  <div>
    <div class="w-25 mb-2">
      <Skeleton />
    </div>
    <div class="mb-2">
      <Skeleton />
    </div>
    <div class="w-25 mb-2">
      <Skeleton />
    </div>
    <div class="mb-2">
      <Skeleton />
    </div>
    <div class="w-25 mb-2">
      <Skeleton />
    </div>
    <div class="mb-2">
      <Skeleton />
    </div>
    <div class="w-25 mb-2">
      <Skeleton />
    </div>
    <div class="mb-2">
      <Skeleton />
    </div>
    <div class="text-right">
      <div class="w-25 ml-auto">
        <Skeleton />
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
export default {
  components: {
    Skeleton,
  },
};
</script>