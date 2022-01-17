import { ref } from 'vue';

interface Workspace {
  id: string;
  name: string;
}

export const workspaceList = ref<Workspace[]>([]);
