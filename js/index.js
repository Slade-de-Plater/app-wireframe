

const taskManager = new TaskManager();

taskManager.load();


taskManager.render();

const newTaskForm = document.querySelector('#userForm');


newTaskForm.addEventListener('submit', (event) => {
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
    
   const taskNameVal = taskName.value;
   const descriptionVal = description.value;
   const assignedToVal = assignedTo.value;
   const dueDateVal = dueDate.value;


    taskManager.addTask(taskNameVal, descriptionVal, assignedToVal, dueDateVal);

    taskManager.save();

    taskManager.render();

    taskName.value = '';
    description.value = '';
    assignedTo.value = '';
    dueDate.value  = '';
    

  
    


    if (!validFormFieldInput(taskNameVal)) {
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


  
const tasksList = document.querySelector('#item-list');


tasksList.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('done-button')) {
       
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
console.log(parentTask)
      
        const taskId = Number(parentTask.dataset.taskId);

      
        const task = taskManager.getTaskById(taskId);
console.log(task);
 task.status = 'DONE';
 
 
 taskManager.save();

 taskManager.render(); 
    
       
    }  

    
    if (event.target.classList.contains('delete-button')) {
     console.log("hey")
        const parentTask = event.target.parentElement.parentElement.parentElement;
console.log(parentTask)
    
        const taskId = Number(parentTask.dataset.taskId);

     
        taskManager.deleteTask(taskId);

     
        taskManager.save();

      
        taskManager.render();
    }    

});