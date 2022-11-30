<template>
  <div>
    <header>
      <div>
        <h1><RouterLink to="/">VuePage</RouterLink></h1>
        <nav>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/list">List</RouterLink></li>
          </ul>
          <button type="button" @click="goPage">글쓰기</button>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goPage = () => {
  router.push({ name: "create" });
};
</script>

<style scoped>
header {
  padding: 15px;
  background-color: #222;
  margin-bottom: 15px;
}
header > div {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header > div > h1 > a {
  color: #fff;
  font-size: 32px;
}
nav {
  display: flex;
  align-items: center;
}
nav > ul {
  display: flex;
}
nav > ul > li {
  padding: 0 15px;
  border-left: 1px solid #fff;
}
nav > ul > li:first-child {
  border-left: none;
}
nav > ul > li > a {
  color: #fff;
}
nav button {
  padding: 15px 20px;
  margin-left: 30px;
  border: none;
  background-color: red;
  color: #fff;
}
</style>
