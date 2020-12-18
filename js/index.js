import { TaskManager } from "./taskManager.js";
// let TaskManager = require('./taskManager.js');

const taskManager = new TaskManager;
// taskManager.addTask('jotham',)
// console.log(taskManager.tasks);



// Select the New Task Form
const newTaskForm = document.querySelector('#userForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const taskName = document.querySelector('#taskName');
    const description = document.querySelector('#description');
    const assignedTo = document.querySelector('#assignedTo');
    const dueDate = document.querySelector('#date');

    const errorMessage = document.querySelector('#alertMessage');
    /*
        Validation code here
    */
    

    const name = taskName.value;
    const descriptionVal = description.value;
    const assignedToVal = assignedTo.value;
    const dueDateVal = dueDate.value;

    taskManager.addTask(name, descriptionVal, assignedToVal, dueDateVal);
    taskManager.render();
    


    if (!validFormFieldInput(name)) {
        errorMessage.innerHTML += "Invalid name input";
        errorMessage.style.display = "block"
    } else {
        errorMessage.style.display = "none"
    }

    if (!validFormFieldInput(assignedToVal)) {
        errorMessage.innerHTML += "Invalid assignee";
        errorMessage.style.display = "block"
    } else {
        errorMessage.style.display = "none"
    }


    if (!validFormFieldInput(descriptionVal)) {
        errorMessage.innerHTML += "Invalid description";
        errorMessage.style.display = "block"
    } else {
        errorMessage.style.display = "none"
    }

    if (!validFormFieldInput(dueDateVal)) {
        errorMessage.innerHTML += "Invalid date"
        errorMessage.style.display = "block"
    } else {
        errorMessage.style.display = "none"
    }

    // Get the values of the inputs




});

function validFormFieldInput(data) {
    return data !== null && data !== '';
}




/* console.log(taskManager.tasks);

console.log(taskManager.addTask()); */

  
const tasksList = document.querySelector('#item-list');


tasksList.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('done-button')) {
       
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
console.log(parentTask)
      
        const taskId = Number(parentTask.dataset.taskId);

      
        const task = taskManager.getTaskById(taskId);
console.log(task);
 task.status = 'DONE';
 


 taskManager.render(); 
    
       
    }  
});