//creating new todos

import todoItem from "./todoItems";


//setting todos as complete


//changing todo priority


const Project = (title) =>{
    this._title = title;
    this._toDoItems = [];
    this._itemsCompleted = 0;
    
    const getTitle = () => _title;
    const getToDoItems = () => _toDoItems;

    const addToDoItem = (toDoItem) => {
        toDoItems.push(toDoItem);
    }

    const checkCompleted = () => {
        if(_toDoItems.length == itemsCompleted){
            return true;
        }else{
            return false;
        }
    }

    const completeToDoItem = (index) => {
        _toDoItems[index].changeCompleted();
        if(_toDoItems[index].getCompleted == false){
            _itemsCompleted -= 1;
        }else{
            _itemsCompleted += 1;
        }
    }

    const deleteToDoItem = (index) => {
        toDoItems.delete(index);
        //reload DOM to reassign indeces
    }

    return {getTitle, getToDoItems, addToDoItem, checkCompleted, completeToDoItem, deleteToDoItem};
};

const toDoItem = (title, description, dueDate, priority) => {
    _title = title;
    _description = description;
    _dueDate = dueDate;
    _priority = priority;
    _completed = false;
    

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getCompleted = () => _completed;

    const changeTitle = (title) => {
        _title = title;
    }

    const changeDescription = (description) => {
        _description = description;
    }

    const changeDueDate = (dueDate) => {
        _dueDate = dueDate;
    }

    const changePriority = (priority) => {
        _priority = priority;
    }

    const changeCompleted = (completed) => {
        if(completed == false){
            _completed  = true;
        }else{
            _completed = false;
        }
    }

    return {getTitle, getDescription, getDueDate, getPriority, getCompleted, changeTitle, 
        changeDescription, changeDueDate, changePriority, changeCompleted};
};


//adding projects to DOM
let projects = [];
function loadProjects(){
    let contentDiv = document.getElementById("content");
    var projectDiv;
    var projectTitle;
    var projectDueDate;
    var projectToDoItemsDiv;
    var completeButton;
    var removeButton;

    for(var i =0 ; i < projects.length; i++){
        if(typeof projects[i] !== 'undefined'){
            projectDiv = document.createElement('div');
            projectTitle = document.createElement('div');
            projectDueDate = document.createElement('div');
            projectToDoItemsDiv = document.createElement('div');
            completeButton = document.createElement('button');
            removeButton = document.createElement('button');

            projectDiv.className = "project";
            projectTitle.className = "title";
            projectDueDate.className = "dueDate";

            projectToDoItemsDiv.className = "projectToDoItems"
            loadProjectToDoItems(projects[i].getToDoItems, projectToDoItemsDiv);

            completeButton.className = "completeButton";
            removeButton.className = "removeButton";

            projectTitle.textContent = projects[i].getTitle;
            projectDueDate.textContent = projects[i].getDueDate;

/*             if(projects[i].getCompleted === true){
                completeButton.textContent = "Yes";
            } */

            removeButton.textContent = "X";
            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function() { deleteProject(this); };

            projectDiv.append(projectTitle, projectDueDate, projectToDoItemsDiv, completeButton, removeButton);

            contentDiv.appendChild(projectDiv);
            
        };
    }

}

function loadProjectToDoItems(toDoItems, projectToDoItemsDiv){
    var toDoItem;
    var toDoItemsTitle;
    var toDoItemsDueDate;
    var toDoItemsDescription;
    var completeButton;
    var removeButton;

    for(var i =0 ; i < toDoItems.length; i++){
        if(typeof toDoItems[i] !== 'undefined'){
            toDoItem = document.createElement('div');
            toDoItemsTitle = document.createElement('div');
            toDoItemsDueDate = document.createElement('div');
            toDoItemsDescription = document.createElement('div');
            completeButton = document.createElement('button');
            removeButton = document.createElement('button');

            toDoItem.className = "toDoItem";
            toDoItemsTitle.className = "title";
            toDoItemsDueDate.className = "dueDate";
            toDoItemsDescription.className = "description";

            completeButton.className = "completeButton";
            removeButton.className = "removeButton";

            toDoItemsTitle.textContent = toDoItems[i].getTitle;
            toDoItemsDueDate.textContent = toDoItems[i].getDueDate;
            toDoItemsDescription.textContent = toDoItems[i].getDescription;

/*             if(projects[i].getCompleted === true){
                completeButton.textContent = "Yes";
            } */

            removeButton.textContent = "X";
            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function() { deleteToDoItem(this); };

            toDoItem.append(toDoItemsTitle, toDoItemsDueDate, toDoItemsDescription, completeButton, removeButton);

            projectToDoItemsDiv.appendChild(toDoItem);
            
        }
    }
}