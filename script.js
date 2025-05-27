const addBtn = document.getElementById("addTask");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const del = document.createElement("span");
  del.textContent = "❌";
  del.classList.add("delete-btn");
  del.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(del);
  taskList.appendChild(li);

  input.value = "";
});
