<template>
  <div class="task-list-container">
    <h1>Task List</h1>
    <!-- <router-link class="add-task-link" to="/tasks/new">Add New Task</router-link> -->
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <span class="task-info">
          <strong>{{ task.task }}</strong> - {{ task.description }}
        </span>
        <div class="task-actions">
          <button @click="deleteTask(task.id)" class="delete-button">Delete</button>
          <router-link :to="`/tasks/${task.id}`" class="edit-link">Edit</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore';
import { onMounted } from 'vue';

export default {
  setup() {
    const taskStore = useTaskStore();
    onMounted(() => {
      taskStore.fetchTasks();
    });

    return {
      tasks: taskStore.tasks,
      deleteTask: taskStore.deleteTask,
    };
  }
};
</script>

<style scoped>
.task-list-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
}

.add-task-link {
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s;
}

.add-task-link:hover {
  color: #0056b3;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.task-info {
  font-size: 16px;
  color: #333;
}

.task-actions {
  display: flex;
  gap: 10px;
}

.delete-button {
  padding: 5px 10px;
  background-color: #e3342f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #cc1f1a;
}

.edit-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s;
}

.edit-link:hover {
  color: #0056b3;
}
</style>
