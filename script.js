const API = "http://localhost:5000/tasks";

function addTask() {
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      description: desc.value,
    }),
  }).then(loadTasks);
}

function loadTasks() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      taskList.innerHTML = "";
      data.forEach((t) => {
        taskList.innerHTML += `
          <li>
            ${t.title}
            <button onclick="deleteTask('${t._id}')">❌</button>
          </li>`;
      });
    });
}

function deleteTask(id) {
  fetch(API + "/" + id, { method: "DELETE" }).then(loadTasks);
}

loadTasks();
