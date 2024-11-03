  import axios from "axios";
  const csrfToken = document.head.querySelector('meta[name="csrf-token"]');

  const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": csrfToken ? csrfToken.content : '',
    },
    withCredentials: true,
  });

  export default {
    getTasks() {
      return apiClient.get("/tasks").then((response) => response.data);
    },
    createTask(task) {
      return apiClient.post("/tasks", task).then((response) => response.data);
    },
    updateTask(taskId, task) {
      return apiClient
        .put(`/tasks/${taskId}`, task)
        .then((response) => response.data);
    },
    deleteTask(taskId) {
      return apiClient
        .delete(`/tasks/${taskId}`)
        .then((response) => response.data);
    },
  };
