var todoList = document.querySelector("#todo-list");
var todoInput = document.querySelector("#todo-text");
var todoCount = document.querySelector("#todo-count")
var todoForm = document.querySelector("#todo-form") 





var todos = []


function renderTodos( ) {

todoList.innerHTML = "";
todoCount.textContent = todos.length;

for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li")
    li.textContent = todo;
    li.setAttribute("data-index", i)
    
    var button = document.createElement("button")
    button.textContent = " ☑️ "

    li.appendChild(button);
    todoList.appendChild(li);
}
} 


  


function init() {
    var storeTodos = JSON.parse(localStorage.getItem("todos"))
    if(storeTodos !== null){
        todos =storeTodos;
    }
    renderTodos()
}

function storeTodos( ) {
    localStorage.setItem("todos", JSON.stringify(todos))
}

todoForm.addEventListener("submit", function(event) {
   event.preventDefault();
   
   var todoText = todoInput.value.trim()
   
   if(todoText === " ") {
       return;
   }
   todos.push(todoText);
   todoInput.value = " "

   storeTodos()
   renderTodos()
}) 

todoList.addEventListener("click", function(event){
    var element =event.target;
    if (element.matches("button") === true) {
       var index = element.parentElement.getAttribute("data-index");
       todos.splice(index, 1)


       storeTodos()
       renderTodos()
    }
    
})

init() 


