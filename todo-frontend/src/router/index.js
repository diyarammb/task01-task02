import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '@/components/TaskList.vue';
import TaskForm from '@/components/TaskForm.vue';

const routes = [
  { path: '/', component: TaskList },
  { path: '/tasks/new', component: TaskForm },
  { path: '/tasks/:id', component: TaskForm, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
