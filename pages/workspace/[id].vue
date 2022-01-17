<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <h1>{{ workSpaceName }}</h1>
  </div>
</template>

<script setup>
import { workspaceList } from '~~/store/global';

const route = useRoute();

let workSpaceName = '';

workSpaceName = workspaceList.value.find((workspace) => workspace.id === route.params.id).name;
</script>

<style lang="scss" scoped></style>
