const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {

    const html =
        `<div id="item-list" class="mx-auto d-flex" data-task-id=${id}>
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





 class TaskManager {
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

    deleteTask(taskId) {
        const newTasks = [];


        for (let i = 0; i < this.tasks.length; i++) {

            const task = this.tasks[i];

            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }

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


    save() {
        const tasksJson = JSON.stringify(this.tasks);

        localStorage.setItem('tasks', tasksJson);

        const currentId = String(this.currentId);

        localStorage.setItem('currentId', currentId);
    }

    load() {

        if (localStorage.getItem('tasks')) {

            const tasksJson = localStorage.getItem('tasks');

            this.tasks = JSON.parse(tasksJson);
        }


        if (localStorage.getItem('currentId')) {

            const currentId = localStorage.getItem('currentId');


            this.currentId = Number(currentId);
        }
    }
}
module.exports = TaskManager