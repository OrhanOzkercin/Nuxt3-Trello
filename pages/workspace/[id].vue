<template>
  <div>
    <h1>{{ workSpaceName }}</h1>
  </div>
</template>

<script setup>
import { workspaceList } from '~~/store/global';

const route = useRoute();

const board = {
  name: 'board',
  colums: [],
};
let workSpaceName = '';

workSpaceName = workspaceList.value.find((workspace) => workspace.id === route.params.id).name;
</script>

<style lang="scss" scoped></style>
