var todo = document.getElementById("everything");
var text = document.getElementById("task");
var done = document.getElementById("done");
var myToDo = document.getElementById("listToDo");
var myDone = document.getElementById("listDone");
//var newTask;
var counter = 0;
var temporalItem = document.getElementsByTagName("li");
text.addEventListener("keypress", enterTask);

///// removing buttons

var rmAll = document.getElementById("rmAll");
var rmDoneList = document.getElementById("rmDoneList");
var rmToDo = document.getElementById("rmToDo");

rmAll.addEventListener("click", removeAll);
rmDoneList.addEventListener("click", removeDoneList);
rmToDo.addEventListener("click", removeToDoList);


function enterTask(e){
	if (e.keyCode === 13){
		var newTask;
		newTask = document.createElement('li');
		newTask.setAttribute("class", "item");
		newTask.setAttribute("id", "notDone");
		newTask.innerHTML =  text.value.trim() // o createTextNode ;
		newTask.addEventListener("click", function(){changeTask(newTask);});
		listToDo.appendChild(newTask);
		e.preventDefault();
		text.value="";
		counter ++;

	}
}

function changeTask(e){
	if (e.id == "notDone"){
		var newRow = document.getElementById("listDone");
		newRow.appendChild(e);
		e.setAttribute("class", "item already-done");
		e.id = "Done";
	} else {
		var newRow = document.getElementById("listToDo");
		newRow.appendChild(e);
		e.setAttribute("class", "item done");
		e.id= "notDone";
	}
}


function removeAll(){
		while (myToDo.firstChild) {
	    myToDo.removeChild(myToDo.firstChild);
	}
		while (myDone.firstChild) {
	    myDone.removeChild(myDone.firstChild);
	}
}

function removeToDoList(){
		while (myToDo.firstChild) {
	    myToDo.removeChild(myToDo.firstChild);
	}
}

function removeDoneList(){
		while (myDone.firstChild) {
	    myDone.removeChild(myDone.firstChild);
	}
}


///// addEventLister("keypress", addTask)

/* 

	function addTask(e) {
		var task = document.getElementById("inputTask").value

		if(task.trim() != ""){
			var liElement = document.createElement("li");
			var taskText = document.creatTextNode(task);
			liElement = appendChild(taskTest)
			document.getElementsByClassName("todo-list").appendChild(liElement)
		}
	}



*/
