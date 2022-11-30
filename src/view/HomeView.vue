<template>
  <div>
    <h3>Home</h3>
    <p>Home 내용</p>
    <p><button type="button" @click="goAbout()">About 이동</button></p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goAbout = () => {
  router.push("/about");
};
</script>

<style lang="scss" scoped></style>
