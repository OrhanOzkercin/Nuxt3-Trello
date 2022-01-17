<script lang="ts" setup>
import { ref } from 'vue';

interface Workspace {
  id: string;
  name: string;
}

const newWorkspaceName = ref('');
const workspaceList = ref<Workspace[]>([]);
const createWorkspace = () => {
  const newWorkspace = {
    id: Math.floor(Math.random() * 100).toString(),
    name: newWorkspaceName.value,
  };
  workspaceList.value.push(newWorkspace);
  newWorkspaceName.value = '';
};
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <h2>Recently Viewed</h2>
    <h2>Workspaces</h2>
    <input type="text" v-model="newWorkspaceName" @keyup.enter="createWorkspace" />
    <button @click="createWorkspace">Create Workspace</button>
    <ul>
      <li v-for="workspace in workspaceList" :key="workspace.id.toString()" class="workspace-card">
        {{ workspace.id }}: {{ workspace.name }}
      </li>
    </ul>
  </div>
</template>

<style>
.workspace-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}
</style>
