const tasksList = document.querySelector('.tasks__list');
const btn = document.querySelector('.tasks__add');
const tasksInput = document.querySelector('.tasks__input');

window.addEventListener('load', loadTasks);

btn.addEventListener('click', e => {
	e.preventDefault();

	if (tasksInput.value.trim() != '') {
		addTask(tasksInput.value);
		tasksInput.value = '';
	}
});

tasksList.addEventListener('click', e => {
	let target = e.target;
	if (target.classList.contains('task__remove')) {
		let parent = target.parentNode;
		parent.remove();
		saveTasks();
	}
});

function addTask(taskText) {
	tasksList.insertAdjacentHTML('beforeEnd', `<div class="task">
        <div class="task__title">
          ${taskText}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);
	saveTasks();
}

function saveTasks() {
	const tasks = [];
	document.querySelectorAll('.task__title').forEach(task => {
		tasks.push(task.textContent.trim());
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
	const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	tasks.forEach(task => {
		addTask(task);
	});
}