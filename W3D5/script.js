const createTaskItem = (task) => {
    const div = document.createElement('div');
    div.classList.add('task-item');
    div.setAttribute('id', task.id);

    const p = document.createElement('p');
    p.classList.add('task-text');
    const tasktext = document.createTextNode(task.text);
    p.appendChild(tasktext);
    div.appendChild(p);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    div.appendChild(deleteButton);
    return div;
}


const taskContainer = document.querySelector('content');
taskContainer.addEventListener('click', () => {
    handleEventListener(event)
});


const addTasksToMain = async () => {
    const tasks = await convertResponse();
    const taskItems = tasks.map(item => {
        const taskItem = createTaskItem(item);
        return taskItem;
    });
    taskItems.forEach(item => {
        taskContainer.appendChild(item);
    });
}


const convertResponse = async () => {
    const result = await getAllTasks();
    let tasks = Object.keys(result).map(key => ({
        id: key,
        text: result[key].text,
        done: result[key].done
    }));
    return tasks;
}


const handleNavInput = async () => {
    const taskText = navTextInput.value;
    const task = {
        text: taskText,
        done: false
    };
    const post = await postTask(task);
    const json = await post.json();
    task.id = json.name;
    const taskItem = createTaskItem(task);
    taskContainer.appendChild(taskItem);
}


const handleEventListener = async (event) => {
    if (event.target.matches('.delete-button')) {
        const hash = event.target.closest('.task-item').id;
        await deleteTask(hash);
        event.target.closest('.task-item').remove();
    } 
}


const navTextInput = document.querySelector('nav input');
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', handleNavInput)

addTasksToMain();