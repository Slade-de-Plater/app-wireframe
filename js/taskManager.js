const createTaskHtml = (name, description, assignedTo, dueDate, status) => {

    const html =    
        `<div id="item-list" class="mx-auto" style="width:375px">
            <div class="card" style="width: 25rem;">
                <div class="card-body container">
                        <h5 class="d-flex justify-content-center">${name}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text">${assignedTo}</p>
                        <p class="card-text">${dueDate}</p>
                        <p class="card-text">${status}</p>
                        <a href="#" class="btn btn-primary">Edit</a>
                        <a href="#" class="btn btn-primary">Delete</a>

                </div>
            </div>
        </div>`;
      return html;
};

const taskHtml = createTaskHtml();

console.log(taskHtml);


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
    render() {
        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            
            const task = this.tasks[i]
        
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);

            
            tasksHtmlList.push(taskHtml);    
    }
    const tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.querySelector('#item-list');
    tasksList.innerHTML = tasksHtml;
  }
};