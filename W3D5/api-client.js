const endpointUrl = `https://wincacademydatabase.firebaseio.com/Sean/tasks/`;


const getAllTasks = async () => {
    try {
        const response = await fetch(`${endpointUrl}.json`, {method: 'GET'});
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}


const postTask = async (task) => {
    try {
        const post = await fetch(`${endpointUrl}.json`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(task) });
        return post;
    } catch (error) {
        console.log(error);
    }
}


const deleteTask = async (hash) => {
    try {
        const deleteItem = await fetch(`${endpointUrl}/${hash}.json`, {method: 'DELETE'});
    } catch (error) {
        console.log(error);
    }
}


const putTask = async (hash, task) => {
    try {
        const put = await fetch(`${endpointUrl}/${hash}.json`, {method: 'PUT', body: JSON.stringify(t) });
        const json = await put.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}
  