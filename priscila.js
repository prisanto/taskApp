//Cria a lista de informacao de tarefas e a lista de elementos dom da tarefa
var taskList = [];
var taskListDOM = [];

function deleteMe(e) {
  e.parentNode.parentNode.removeChild(e.parentNode)
}

/*
function addTask() {
  var clone = document.getElementById("taskTemplate").cloneNode(true);
  var element = document.getElementById("taskList");
  clone.removeAttribute("id");
  element.appendChild(clone);
  document.getElementById("taskDetail").style.display = 'block';
}
*/

function createTask(newTitle, newDescription){
	return {title:newTitle, description:newDescription};
}

function createTaskDOM(){
	var clone = document.getElementById("taskTemplate").cloneNode(true);
  	clone.removeAttribute("id");
    return clone;
}

function updateTaskList(){
    var element = document.getElementById("taskList");
    for (var i = taskList.length - 1; i >= 0; i--) {
        element.appendChild(taskListDOM[i]);
    }
}

function addTask() {
    var task = createTask();
    taskList.push(task);
    var domElement = createTaskDOM();
    taskListDOM.push(domElement);
    updateTaskList();
    //var element = document.getElementById("taskList");
    //element.appendChild(domElement);
    showTaskDetail(task);
}



function showTaskDetail(task){
    var editingTask = taskList.indexOf(task);
	document.getElementById("taskDetail").style.display = 'block';
}

function hideTaskDetail(){
	document.getElementById("taskDetail").style.display = 'none';
}

function updateTask(taskId){
    taskList[taskiId]
}

function updateTaskDom(task){

}

function updTaskName(taskId) {
    var taskName = document.getElementById("taskName").value = "My task";

}



document.getElementById("taskButton").onclick = addTask;
document.getElementById("closeDetail").onclick = hideTaskDetail;
document.getElementById("calendar").onclick = updTaskName;
