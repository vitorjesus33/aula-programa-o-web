document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Adiciona nova tarefa
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });
  
    // Delegação de eventos para remover tarefas
    taskList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.remove();
      }
    });
  });
  