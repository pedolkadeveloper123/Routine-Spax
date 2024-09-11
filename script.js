document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-text');
    const locationInput = document.getElementById('task-location');
    const dateInput = document.getElementById('task-date');
    const timeInput = document.getElementById('task-due-time');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('tasks');

    function createTaskElement(taskText, location, date, time) {
        const li = document.createElement('li');

        const taskDescription = document.createElement('div');
        taskDescription.textContent = taskText;
        li.appendChild(taskDescription);

        if (location) {
            const locationInfo = document.createElement('span');
            locationInfo.textContent = `Local: ${location}`;
            li.appendChild(locationInfo);
        }

        if (date) {
            const dateInfo = document.createElement('span');
            dateInfo.textContent = `Data: ${date}`;
            li.appendChild(dateInfo);
        }

        if (time) {
            const timeInfo = document.createElement('span');
            timeInfo.textContent = `Vencimento: ${time}`;
            li.appendChild(timeInfo);
        }

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Excluir';
        removeButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(removeButton);
        return li;
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const location = locationInput.value.trim();
        const date = dateInput.value;
        const time = timeInput.value;

        if (taskText) {
            const taskElement = createTaskElement(taskText, location, date, time);
            taskList.appendChild(taskElement);
            taskInput.value = '';
            locationInput.value = '';
            dateInput.value = '';
            timeInput.value = '';
        }
    });

    // Permite adicionar tarefas ao pressionar Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
