/*  
    Date: September 2017
    Author: Priscila Santos
    Do: Cretes a task list and a DOM elements list and manipulates it
*/

// Properties ------------------------------------------------------------------
var taskList = {};
var taskListDOMElements = {};
var editingTask = null;
var taskCount = 0;

// Dom Elements ----------------------------------------------------------------

var taskTemplate = document.getElementById("taskTemplate");

var taskListDomContainer = document.getElementById("taskList");
var taskDetails = document.getElementById("taskDetail");

var taskDetailTitle = document.getElementById("taskName");
var taskDetailDescription = document.getElementById("taskDescription");

var addTaskButton = document.getElementById("taskButton");

var closeDetailButton = document.getElementById("closeDetail"); 
var deleteItem = document.getElementById("deleteItem"); 

// Add new Task to list --------------------------------------------------------

function addTask() {

    var taskId = "task_" + taskCount++;

    var task = createTask(taskId, "", "");
    taskList[taskId] = task;

    var domElement = createNewTaskDOMElement(task);
    taskListDOMElements[taskId] = domElement;

    showTaskDetail(task);
}

function createTask(taskId, newTitle, newDescription) {
    return {
        id: taskId,
        title: newTitle,
        description: newDescription
    };
}

function createNewTaskDOMElement(task) {
    var domElement = taskTemplate.cloneNode(true);

    taskListDomContainer.appendChild(domElement);

    domElement.addEventListener('click',
        function () {
            showTaskDetail(task)
        }
    );

    domElement.id = task.id;
    return domElement;
}

// Task Detail -----------------------------------------------------------------

function showTaskDetail(task) {
    editingTask = task
    taskDetails.style.display = 'block';
    taskDetailTitle.value = task.title;
    taskDetailDescription.value = task.description;
    taskDetailTitle.focus();
}

function hideTaskDetail() {
    document.getElementById("taskDetail").style.display = 'none';
}

function updateListDOMElement(task) {
    var element = getDOMElementByTaskId(task.id);
    var domInput = element.getElementsByTagName('span')[0];
    domInput.innerHTML = task.title;
}

function updateEditingTask() {
    editingTask.title = taskDetailTitle.value;
    editingTask.description = taskDetailDescription.value;
    updateListDOMElement(editingTask)
}
 
function deleteMe(e) {
    // Falta deletar nos dicionários
    e.parentNode.parentNode.removeChild(e.parentNode)
}

// Helpers ---------------------------------------------------------------------

function getTaskByTaskId(taskId) {
    return taskList[taskId];
}

function getDOMElementByTaskId(taskId) {
    return taskListDOMElements[taskId];
}

// Event Handlers -------------------------------------------------------------------------

addTaskButton.onclick = addTask;
closeDetailButton.onclick = hideTaskDetail;
taskDetails.onfocusout = updateEditingTask;

taskDetailTitle.onchange = updateEditingTask;
taskDetailTitle.onblur = updateEditingTask;

taskDetailDescription.onchange = updateEditingTask;
taskDetailDescription.onblur = updateEditingTask;

