<template>
  <div class="task-form-container">
    <h1>{{ isEdit ? "Edit Task" : "New Task" }}</h1>
    <form @submit.prevent="saveTask" class="task-form">
      <label for="task">Task</label>
      <input id="task" v-model="task.task" required />

      <label for="description">Description</label>
      <textarea id="description" v-model="task.description"></textarea>

      <button type="submit" class="submit-button">Save</button>
    </form>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/taskStore";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const taskStore = useTaskStore();
    const router = useRouter();
    const route = useRoute();
    const isEdit = !!route.params.id;
    const task = ref({ task: "", description: "" });

    onMounted(async () => {
      if (isEdit) {
        const existingTask = taskStore.tasks.find(
          (t) => t.id === +route.params.id
        );
        if (existingTask) task.value = { ...existingTask };
      }
    });

    const saveTask = async () => {
      if (isEdit) {
        await taskStore.updateTask(task.value);
      } else {
        await taskStore.addTask(task.value);
      }
      router.push("/");
    };

    return { task, saveTask, isEdit };
  },
};
</script>

<style scoped>
.task-form-container {
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
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.task-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.task-form input,
.task-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.task-form textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #218838;
}
</style>
