const btn = document.getElementById("btn");
  btn.addEventListener("click",add)
  let container = document.getElementById("container");
  
  function add(){
      
    let todo = document.createElement("div");
    todo.innerHTML="todo";

    container.append(todo)
  }