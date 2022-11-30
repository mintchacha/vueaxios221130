<template>
  <dl>
    <dt>{{ title }}</dt>
    <dd>{{ content }}</dd>
    <dd>{{ create }}</dd>
  </dl>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  create: {
    type: [String, Date, Number],
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
