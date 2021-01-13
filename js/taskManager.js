const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {

    const html =    
        `<div id="item-list" class="mx-auto" style="width:375px" data-task-id=${id}>
            <div class="card" style="width: 25rem;" >
                <div class="card-body container">
                        <h5 class="d-flex justify-content-center">${name}</h5>
                        <p class="card-text">${assignedTo}</p>
                        <p class="card-text">${description}</p>
                         <p class="card-text">${dueDate}</p>
                        <p class="card-text">${status}</p>
                        <a href="#" class="btn btn-primary">Edit</a>
                        <a href="#" class="btn btn-primary delete-button">Delete</a>
                        <div class="d-flex w-100 justify-content-end">
                          <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
                       </div>
                </div>
            </div>
        </div>`;
      return html;
};




export class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId
        
       };
      
    
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        
        this.tasks.push(task);

    }
   // Create the deleteTask method
   deleteTask(taskId) {
    // Create an empty array and store it in a new variable, newTasks
    const newTasks = [];

    // Loop over the tasks
    for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];

        // Check if the task id is not the task id passed in as a parameter
        if (task.id !== taskId) {
            // Push the task to the newTasks array
            newTasks.push(task);
        }
    }

    // Set this.tasks to newTasks
    this.tasks = newTasks;
}
    getTaskById(taskId) {
    
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      
       const task = this.tasks[i];


       if (task.id === taskId) {
           
           foundTask = task;
       }
   }
   
   return foundTask;
}

    
    render() {
        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            
            const task = this.tasks[i]
        
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            
            tasksHtmlList.push(taskHtml);    
    }
    const tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.querySelector('#item-list');
    tasksList.innerHTML = tasksHtml;

    
  }

  
   // Create the save method
   save() {
    // Create a JSON string of the tasks
    const tasksJson = JSON.stringify(this.tasks);

    // Store the JSON string in localStorage
    localStorage.setItem('tasks', tasksJson);

    // Convert the currentId to a string;
    const currentId = String(this.currentId);

    // Store the currentId in localStorage
    localStorage.setItem('currentId', currentId);
    }

      // Create the load method
      load() {
        // Check if any tasks are saved in localStorage
        if (localStorage.getItem('tasks')) {
            // Get the JSON string of tasks in localStorage
            const tasksJson = localStorage.getItem('tasks');

            // Convert it to an array and store it in our TaskManager
            this.tasks = JSON.parse(tasksJson);
        }

        // Check if the currentId is saved in localStorage
        if (localStorage.getItem('currentId')) {
            // Get the currentId string in localStorage
            const currentId = localStorage.getItem('currentId');

            // Convert the currentId to a number and store it in our TaskManager
            this.currentId = Number(currentId);
        }
    }
};
