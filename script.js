// Get DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
  // Validate input is not empty
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // Create new list item with task text
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    
    // Add delete button (x) to list item
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // Clear input field and save to storage
  inputBox.value = "";
  saveData();
}

// Event listener for clicking tasks and delete buttons
listContainer.addEventListener(
  "click",
  function (e) {
    // Toggle checked state when clicking task
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } 
    // Remove task when clicking delete button
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Save tasks to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Load and display saved tasks from localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
