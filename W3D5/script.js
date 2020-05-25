// Function Task Items (Create, Create Text, Create Checkbox, Delete Button)

const createTaskItem = (task) => {
    const div = document.createElement('div');
    div.classList.add('task-item');
    div.setAttribute('id', task.id);

    const p = document.createElement('p');
    p.classList.add('task-text');
    const tasktext = document.createTextNode(task.text);
    p.appendChild(tasktext);
    div.appendChild(p);
    if (task.done) {
        checkbox.checked = true;
        p.classList.add('strikethrough');
    }

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox-done');
    div.appendChild(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    div.appendChild(deleteButton);
    return div;
}



// Eventlistener on Click

const taskContainer = document.querySelector('main');
taskContainer.addEventListener('click', () => {
    handleEventListener(event)
});



// Add Tasks to DOM (Nav)

const addTasksToNav = async () => {
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
    } else if (event.target.matches('.checkbox-done')) {
        const hash = event.target.closest('.task-item').id;
        const text = event.target.closest('.task-item').children[1].textContent;
        const done = event.target.closest('.checkbox-done').checked ? true : false;
        if (done) {
            event.target.closest('.task-item').children[1].classList.add('strikethrough');
        } else {
            event.target.closest('.task-item').children[1].classList.remove('strikethrough');
        }
        const newTask = {
            text: text,
            done: done
        };
        await putTask(hash, newTask);
    } else if (event.target.matches('.task-text')) {

        const button = document.createElement('button');
        button.classList.add('save-button');
        const text = document.createTextNode('Save');
        button.appendChild(text);
        newInput.parentNode.insertBefore(button, newInput.nextSibling);

        const newInput = document.createElement('input');
        newInput.type = "text";
        newInput.classList.add('edit-text');
        newInput.value = event.target.textContent;
        event.target.closest('.task-item').replaceChild(newInput, event.target);



        newInput.focus();
    } else if (event.target.matches('.save-button')) {

        const p = document.createElement('p');
        const textInput = event.target.closest('.task-item').children[1];
        p.classList.add('task-text');

        const text = document.createTextNode(textInput.value);
        const hash = event.target.closest('.task-item').id;
        const done = textInput.closest('.task-item').children[0].checked ? true : false;
        const updatedTask = {
            text: text.textContent,
            done: done
        };
        const x = await putTask(hash, updatedTask);

        p.appendChild(text);
        event.target.closest('.task-item').replaceChild(p, textInput);
        event.target.remove();
    }
}

const navTextInput = document.querySelector('nav input');
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', handleNavInput)

addTasksToNav();