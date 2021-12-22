/* Guardar el formulario "task" */
document.getElementById("formTask").addEventListener("submit", saveTask);

function saveTask(e) {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let prioridad = document.getElementById("prioridad").value;

  let task = {
    title,
    description,
    prioridad,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById("formTask").reset();
  e.preventDefault();
}
/* Borrando los Post-it ya realizados */
function deleteTask(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
}
/* Funcion crear los Post-it */



function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    let prioridad = tasks[i].prioridad;
/*     en lugar de un lista vamos a ir creando "div" independientes
 */    
      tasksView.innerHTML += `<div id="${title}" class="ml-5  col-12 col-sm-6 col-md-2 ">
        <div class="${prioridad}  ">
       
        <div class= "text-center">
          <img class="mt-2" src="./styles/img/pushpin-147918_960_720.png" width=20% alt="">
      </div>
          <div class="text-justify h2">
        <h1> ${title}</h1>
          </div>
          <div class="h5 mt-2 mx-2"> 
           ${description}
           <div class="mt-3 mx-2">
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-dark my-3 ml-5">Elimar</a>
          </div>
        </div>
      </div>`;
  }
}

getTasks();
