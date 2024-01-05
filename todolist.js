let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [{
        text: "consistency is a key",
        uniqueNo: 1
    },
    {
        text: "meditation in morning",
        uniqueNo: 2
    },
    {
        text: "DSA question ",
        uniqueNo: 3
    },
    {
        text: "HOT shower and break fast",
        uniqueNo: 4
    },
    {
        text: "web development in first half",
        uniqueNo: 5
    },
    {
        text: "python remaining question in second half",
        uniqueNo: 6
    },
    {
        text: "web development in 3rd half",
        uniqueNo: 7
    },
    {
        text: "Dinner and talking to home",
        uniqueNo: 8
    },
    {
        text: "Revesion DSA question",
        uniqueNo: 9
    },
    {
        text: "sleeping",
        uniqueNo: 10
    },

];
let todoCounts = todoList.length;

function onaddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter your challenges");
        return;
    }
    todoCounts = todoCounts + 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCounts
    }
    createAndAppendTodo(newTodo);
    userInputElement.value = "";

}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked")
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    let checkboxId = "checkbox" + todo.uniqueNo;
    inputElement.id = "checkboxInput";
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer);



    let labelElement = document.createElement("label");
    labelElement.id = labelId;
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}
for (let eachtodo of todoList) {
    createAndAppendTodo(eachtodo);
}
addTodoButton.onclick = function() {
    onaddTodo();
}