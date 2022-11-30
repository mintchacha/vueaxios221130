<template>
  <div>
    <h3>List</h3>
    <div v-for="post in posts" :key="post.id">
      <PostItemVue
        :title="post.title"
        :content="post.content"
        :create="post.create"
      ></PostItemVue>
    </div>
  </div>
</template>

<script setup>
import PostItemVue from "./PostItem.vue";
import { getPosts } from "@/api/posts";
import { ref } from "vue";
const posts = ref([]);
const fetchPosts = async () => {
  const { data } = await getPosts();
  posts.value = data;
};
// const fetchPosts = () => {
//   posts.value = getPosts();
// };
fetchPosts();
</script>

<style lang="scss" scoped></style>
