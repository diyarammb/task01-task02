<script setup>
import TaskList from "./components/TaskList.vue";
import TaskForm from "./components/TaskForm.vue";
import { ref } from "vue";

const showForm = ref(false); // Control when to show TaskForm

const toggleForm = () => {
  showForm.value = !showForm.value;
};
</script>

<template>
  <header class="app-header">
    <div class="wrapper">
      <button @click="toggleForm" class="toggle-form-button">
        {{ showForm ? "Close Form" : "Add New Task" }}
      </button>

      <TaskList />
      <TaskForm v-if="showForm" />
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  border-bottom: 2px solid #e0e0e0;
}

.logo {
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.wrapper {
  width: 100%;
  max-width: 600px;
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.toggle-form-button {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-form-button:hover {
  background-color: #0056b3;
}
</style>
