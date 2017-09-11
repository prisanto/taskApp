function deleteMe(e) {
  e.parentNode.parentNode.removeChild(e.parentNode)
}

function addTask() {
  var clone = document.getElementById("taskTemplate").cloneNode(true);
  var element = document.getElementById("taskList");
  clone.removeAttribute("id");
  element.appendChild(clone);
}

document.getElementById("taskButton").onclick = addTask;

function showDetail(){

}
