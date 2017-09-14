//Cria a lista de informacao de tarefas e a lista de elementos dom da tarefa
var taskList = [];
var taskListDOM = [];
var taskEditing = 1;

function createTask(newTitle, newDescription){
	return {title:newTitle, description:newDescription};
}

function createTaskDOM(){
    var clone = document.getElementById("taskTemplate").cloneNode(true);
    var taskListLen = taskList.length;
    var taskId = 1;
    if(taskListLen > 1){
        taskId = taskListLen;
    }
    clone.id = taskId;
    clone.addEventListener('click', showTaskDetail(clone.id));
    return clone;
}

function updateTaskList(){
    var element = document.getElementById("taskList");
    for (var i = taskList.length - 1; i >= 0; i--) {
        element.appendChild(taskListDOM[i]);
    }
}

function showTaskDetailPanel(){
    document.getElementById("taskDetail").style.display = 'block';
}

function addTask() {
    var task = createTask("New Task", "Description");
    taskList.push(task);
    var domElement = createTaskDOM();
    taskListDOM.push(domElement);
    updateTaskList();
    showTaskDetailPanel(task);
}

function hideTaskDetail(){
	document.getElementById("taskDetail").style.display = 'none';
}

function updateTask(taskId){
    taskList[taskiId]
}

function updateTaskDom(task){
    var taskName = document.getElementById("taskName");
    var taskDetail = document.getElementById("taskDetail");
    taskName.value = taskList[task].title;
    taskDetail.value = taskList[task].description;
}

function showTaskDetail(task) {
    document.getElementById("taskDetail").style.display = 'block';
    var taskEditing = taskList.indexOf(task);
    updateTaskDom(taskEditing);
}

/*
document.getElementById("taskList").addEventListener("click", function(e){
    var target = e.target;
    alert(e.target.id);
});
*/

function updTaskName(taskId) {
    var taskName = document.getElementById("taskName");
    taskName.value = taskList[taskId].title;
}

function updTaskDetail(taskId) {
    var taskName = document.getElementById("taskName");
    taskName.value = taskList[taskId].title;
    alert("Atualizei o detail");
}

document.getElementById("taskButton").onclick = addTask;
document.getElementById("closeDetail").onclick = hideTaskDetail;
document.getElementById("calendar").onclick = updTaskName;
document.getElementById("taskName").onfocusout = updTaskName(taskEditing);
document.getElementById("taskDetail").onfocusout = updTaskDetail;


function deleteMe(e) {
  e.parentNode.parentNode.removeChild(e.parentNode)
}


function showList(){
    console.log(taskListDOM);
    console.log(taskList);
}

document.getElementById("showArray").onclick = showList;

/*
function addTask() {
  var clone = document.getElementById("taskTemplate").cloneNode(true);
  var element = document.getElementById("taskList");
  clone.removeAttribute("id");
  element.appendChild(clone);
  document.getElementById("taskDetail").style.display = 'block';
}
*/