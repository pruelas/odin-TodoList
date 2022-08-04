//creating new todos

import todoItem from "./todoItems";


//setting todos as complete


//changing todo priority
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

const Project = (title, dueDate) =>{
    this._title = title;
    this._dueDate = dueDate
    this._toDoItems = [];
    this._itemsCompleted = 0;
    
    const getTitle = () => _title;
    const getDueDate = () => _dueDate;
    const getToDoItems = () => _toDoItems;

    const changeDueDate = (dueDate) => {
        _dueDate = dueDate;
    }

    const addToDoItem = (toDoItem) => {
        _toDoItems.push(toDoItem);
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

    return {getTitle, getDueDate, getToDoItems, changeDueDate, addToDoItem, checkCompleted, completeToDoItem, deleteToDoItem};
};

function addToDoItemForm(projec){
    var toDoItemForm = docment.getElementById("toDoItemForm");
    toDoItemForm.setAttribute('data-projectIndex', project.getAttribute('data-index'));
    toDoItemForm.style.visibilty = "visible";
}

//adding projects to DOM
let projects = [];
function loadProjects(){
    let contentDiv = document.getElementById("content");
    var projectDiv;
    var projectTitle;
    var projectDueDate;
    var projectToDoItemsDiv;
    var addToDoItemButton;
    var completeButton;
    var removeButton;

    for(var i =0 ; i < projects.length; i++){
        if(typeof projects[i] !== 'undefined'){
            projectDiv = document.createElement('div');
            projectTitle = document.createElement('div');
            projectDueDate = document.createElement('div');
            projectToDoItemsDiv = document.createElement('div');
            addToDoItemButton = document.createElement('button');
            completeButton = document.createElement('button');
            removeButton = document.createElement('button');

            projectDiv.className = "project";
            projectTitle.className = "title";
            projectDueDate.className = "dueDate";

            projectToDoItemsDiv.className = "projectToDoItems";
            projectToDoItemsDiv.setAttribute('data-projectIndex', i);
            loadProjectToDoItems(projects[i].getToDoItems, projectToDoItemsDiv);
            addToDoItemButton.className = "addToDoItemButton";
            addToDoItemButton.textContent = "Add Todo Item";
            addToDoItemButton.setAttribute('data-index', i);
            addToDoItemButton.onclick = function() { addToDoItemForm(this);};
            projectToDoItemsDiv.appendChild(addToDoItemButton);

            completeButton.className = "completeButton";
            removeButton.className = "removeButton";

            projectTitle.textContent = projects[i].getTitle;
            projectDueDate.textContent = projects[i].getDueDate;

/*             if(projects[i].getCompleted === true){
                completeButton.textContent = "Yes";
            } */

            completeButton.textContent = "Complete Placeholder";

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

const addToDoItem = document.getElementById("addToDoItemForm");
addToDoItem.addEventListener('submit', function(e){
    let toDoItemForm = document.getElementById("toDoItemForm").style.visibility = "hidden";
    let projectToDoItemsDiv = document.querySelector('[data-projectIndex =' + toDoItemForm.getAttribute('data-projectIndex') + ']');
    projects[toDoItemForm.getAttribute('data-projectIndex')].addToDoItem(new todoItem(addToDoItem.elements['title'].value, addToDoItem.elements['description'].value, addToDoItem.elements['dueDate'].value, addToDoItem.elements['priority'].value));
    /* addBookToLibrary(); */
    loadProjectToDoItems(projects[toDoItemForm.getAttribute('data-projectIndex')].getToDoItems(), projectToDoItemsDiv);
    e.preventDefault();
    e.target.reset();
})

const addProject = document.getElementById("addProjectForm");
addToDoItem.addEventListener('submit', function(e){
    document.getElementById("projectForm").style.visibility = "hidden";
    projects.push(new Project(addProject.elements['title'].value, addProject.elements['dueDate'].value));
    loadProjects();
    e.preventDefault();
    e.target.reset();
})