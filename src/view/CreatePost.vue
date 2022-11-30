<template>
  <div>
    <h3>CreateList</h3>
    <div>
      <p>
        <label for="title">제목</label>
        <input type="text" id="title" v-model="form.title" />
      </p>
      <p>
        <label for="content">내용</label>
        <textarea id="content" v-model="form.content"></textarea>
      </p>
      <p>
        <button type="button" @click="goList">목록</button>
        <button type="button" @click="save">저장</button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { creatPost } from "@/api/posts";
const router = useRouter();
const form = ref({
  title: null,
  content: null,
});

const save = () => {
  try {
    creatPost({
      ...form.value,
      create: Date.now(),
    });
    router.push({ name: "list" });
  } catch (error) {
    console.log("에러입니다.");
  }
};
const goList = () => router.push({ name: "list" });
</script>

<style scoped></style>
