var todos = [];


function createToDo(title, description, dueDate, priority)
{
    return { title,description,dueDate,priority};
}

function addToDo()
{
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#date").value;
    const priority = document.querySelector("#priority").value;

    let newToDo = createToDo(title, description, dueDate, priority);

    console.log("TEST");
    todos.push(newToDo);
    console.log(todos);
}



export default addToDo;
export var todos;