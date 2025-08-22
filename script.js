function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  
  if (taskText === "") return; // ignore empty input

  // create <li>
  let li = document.createElement("li");
  li.textContent = taskText;

  // toggle completed when clicked
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = ""; // clear input
}
