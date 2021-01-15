const TaskManager = require('../js/taskManager.js');
const assert = require ('assert');




console.log(TaskManager);

describe("TaskManager", () => {

  it("should add a task", function () {
    const taskManager = new TaskManager(0);
    let len = taskManager.tasks.length;
    taskManager.addTask("name", "description", "assignedTo", "dueDate")
    if (len < taskManager.tasks.length) {
      assert.ok(taskManager.tasks[0].assignedTo,'assignedTo');
    }
  })
  
  it("delete a task", function () {
    const taskManager = new TaskManager(0);
    taskManager.addTask("name", "description", "assignedTo", "dueDate")
    let len = taskManager.tasks.length;
   
    taskManager.deleteTask(0)
    assert.ok(len > taskManager.tasks.length);
  })

  it("selects the right id for first task added", function () {
    const taskManager = new TaskManager(0);
    taskManager.addTask("name", "description", "assignedTo", "dueDate")
    let id = 0;
    let result = taskManager.getTaskById(0);
   assert.ok(id === result.id);
  })

  it("selects the right id a randomly selected task", function () {
    const taskManager = new TaskManager(0);

    for (let i=0; i<6; i++)
    {
      taskManager.addTask("name", "description", "assignedTo", "dueDate")
    }
    console.log(taskManager.tasks.length);
    
    let random = Math.round(Math.random() * 6);
    let randomId = random;
    let result = taskManager.getTaskById(random);
    console.log(randomId);
    assert.ok(randomId === result.id);
  })

})



