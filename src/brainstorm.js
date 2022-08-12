//creating new todos

/* import todoItem from "./todoItems"; */


//setting todos as complete


//changing todo priority
export const toDoItem = (title, description, dueDate, priority) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _completed = false;
    

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

export const Project = (title, dueDate) =>{
    let _title = title;
    let _dueDate = dueDate
    let _toDoItems = [];
    let _itemsCompleted = 0;
    
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
        if(_toDoItems.length == _itemsCompleted){
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

export function addToDoItemForm(project){
    console.log("hereTODOITEMADD");
    
    let toDoItemForm = document.getElementById("toDoItemForm");
    toDoItemForm.style.visibility = "visible";
    toDoItemForm.setAttribute('data-projectIndex', project.getAttribute('data-index'));
    console.log(document.querySelector("[data-projectIndex = '" + toDoItemForm.getAttribute('data-projectIndex') + "']"));
    console.log(project, project.getAttribute('data-index'), toDoItemForm.getAttribute('data-projectIndex'));
    
};

/* export let projects = []; */

export function loadProjectToDoItems(toDoItems, projectToDoItemsDiv){
    let toDoItem;
    let toDoItemInfo;
    let toDoItemTitle;
    let toDoItemDueDate;
    let toDoItemDescription;
    let completeButton;
    let removeButton;

    for(let i =0 ; i < toDoItems.length; i++){
        if(typeof toDoItems[i] !== 'undefined'){
            toDoItem = document.createElement('div');
            toDoItemInfo = document.createElement('div');
            toDoItemTitle = document.createElement('div');
            toDoItemDueDate = document.createElement('div');
            toDoItemDescription = document.createElement('div');
            completeButton = document.createElement('button');
            removeButton = document.createElement('button');

            toDoItem.className = "toDoItem";
            toDoItemInfo.className = "toDoItemInfo";
            toDoItemTitle.className = "title";
            toDoItemDueDate.className = "dueDate";
            toDoItemDescription.className = "description";

            completeButton.className = "completeButton";
            removeButton.className = "removeButton";

            toDoItemTitle.textContent = toDoItems[i].getTitle();
            toDoItemDueDate.textContent = toDoItems[i].getDueDate();
            toDoItemDescription.textContent = toDoItems[i].getDescription();

/*             if(projects[i].getCompleted === true){
                completeButton.textContent = "Yes";
            } */

            completeButton.textContent = "Complete Placeholder";

            removeButton.textContent = "X";
            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function() { deleteToDoItem(this); };

            toDoItemInfo.append(toDoItemTitle, toDoItemDueDate, toDoItemDescription, completeButton);

            toDoItem.append(removeButton, toDoItemInfo);

            projectToDoItemsDiv.appendChild(toDoItem);
            
        }
    }
}

//adding projects to DOM
export function loadProjects(projects){
    let contentDiv = document.getElementById("content");
    let projectLabels;
    let titleLabel;
    let dueDateLabel;
    let projectInfo;
    let projectDiv;
    let projectTitle;
    let projectDueDate;
    let projectToDoItemsDiv;
    let addToDoItemButton;
    let completeButton;
    let removeButton;

    for(let i =0 ; i < projects.length; i++){
        if(typeof projects[i] !== 'undefined'){
            projectLabels = document.createElement('div');
            titleLabel = document.createElement('div');
            dueDateLabel = document.createElement('div');
            projectInfo = document.createElement('div');
            projectDiv = document.createElement('div');
            projectTitle = document.createElement('div');
            projectDueDate = document.createElement('div');
            projectToDoItemsDiv = document.createElement('div');
            addToDoItemButton = document.createElement('button');
            completeButton = document.createElement('button');
            removeButton = document.createElement('button');

            projectLabels.className = "projectLabels";
            titleLabel.className = "titleLabel";
            dueDateLabel.className = "dueDateLabel";
            projectInfo.className = "projectInfo";
            projectDiv.className = "project";
            projectTitle.className = "title";
            projectDueDate.className = "dueDate";

            titleLabel.textContent = "Project: ";
            dueDateLabel.textContent = "Due Date:";
            projectLabels.append(titleLabel, dueDateLabel);

            projectToDoItemsDiv.className = "projectToDoItems";
            projectToDoItemsDiv.setAttribute('data-projectIndex', i);
            loadProjectToDoItems(projects[i].getToDoItems(), projectToDoItemsDiv);
            
            addToDoItemButton.className = "addToDoItemButton";
            addToDoItemButton.textContent = "Add Todo Item";
            addToDoItemButton.setAttribute('data-index', i);
            addToDoItemButton.onclick = function() { addToDoItemForm(this);};
            /* projectToDoItemsDiv.appendChild(addToDoItemButton); */

            completeButton.className = "completeButton";
            removeButton.className = "removeButton";

            projectTitle.textContent = projects[i].getTitle();
            projectDueDate.textContent = projects[i].getDueDate();

/*             if(projects[i].getCompleted === true){
                completeButton.textContent = "Yes";
            } */

            completeButton.textContent = "Complete Placeholder";

            removeButton.textContent = "X";
            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function() { deleteProject(this); };

            projectInfo.append(projectTitle, projectDueDate, addToDoItemButton, removeButton);

            projectDiv.append(projectLabels, projectInfo, projectToDoItemsDiv, completeButton);

            contentDiv.appendChild(projectDiv);
            
        }
    }

};

export let projects = [];
export const addToDoItem = document.getElementById("addToDoItemForm");
addToDoItem.addEventListener('submit', function(e){
    console.log("addToDoItem");
    let toDoItemForm = document.getElementById("toDoItemForm");
    toDoItemForm.style.visibility = "hidden";
    let projectToDoItemsDiv = document.querySelector("[data-projectIndex = '" + toDoItemForm.getAttribute('data-projectIndex') + "']");
    projects[toDoItemForm.getAttribute('data-projectIndex')].addToDoItem(new toDoItem(addToDoItem.elements['title'].value, addToDoItem.elements['description'].value, addToDoItem.elements['dueDate'].value, addToDoItem.elements['priority'].value));
    /* addBookToLibrary(); */
    loadProjectToDoItems(projects[toDoItemForm.getAttribute('data-projectIndex')].getToDoItems(), projectToDoItemsDiv);
    e.preventDefault();
    /* e.target.reset(); */
})

export const addProject = document.getElementById("addProjectForm");
addProject.addEventListener('submit', function(e){
    console.log("here2");
    document.getElementById("projectForm").style.visibility = "hidden";
    projects.push(new Project(addProject.elements['title'].value, addProject.elements['dueDate'].value));
    loadProjects(projects);
    e.preventDefault();
    /* e.target.reset(); */
});