document.addEventListener("DOMContentLoaded", () => {
  const lists = document.getElementById("tasks");
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description").value;

    if (taskInput.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskInput;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.style.marginLeft = "12px";

      deleteButton.addEventListener("click", () => {
        lists.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);
      lists.appendChild(listItem);
      form.reset();
    }
  });
});
