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

    if(!validFormFieldInput(name)){
        errorMessage.innerHTML += "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

    if(!validFormFieldInput(assignedToVal)){
        errorMessage.innerHTML += "Invalid assignee";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }


    if(!validFormFieldInput(descriptionVal)){
        errorMessage.innerHTML += "Invalid description";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

 if(!validFormFieldInput(descriptionVal)){
        errorMessage.innerHTML += "Invalid description";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }
  
    // Get the values of the inputs
  


  
    

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}