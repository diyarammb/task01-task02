import { defineStore } from "pinia";
import taskService from "../services/taskService";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      this.tasks = await taskService.getTasks();
    },
    async addTask(task) {
      const newTask = await taskService.createTask(task);
      this.tasks.push(newTask);
    },
    async updateTask(task) {
      await taskService.updateTask(task.id, task);
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) this.tasks[index] = task;
    },
    async deleteTask(taskId) {
      await taskService.deleteTask(taskId);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
  },
});
