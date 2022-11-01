//creating new todos

/* import todoItem from "./todoItems"; */

//setting todos as complete


//changing todo priority
export const toDoItem = (title, description, dueDate, priority, project) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _completed = false;
    let _project = project

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getCompleted = () => _completed;
    const getProject = () => _project;

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

    const changeProject = (project) => {
        _project = project
    }

    return {getTitle, getDescription, getDueDate, getPriority, getCompleted, getProject, changeTitle, 
        changeDescription, changeDueDate, changePriority, changeCompleted, changeProject};
};

export const Project = (title, dueDate) =>{
    let _title = title;
    let _dueDate = dueDate;
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
            toDoItemTitle.className = "toDoItemTitle";
            toDoItemDueDate.className = "toDoItemDueDate";
            toDoItemDescription.className = "toDoItemDescription";

            completeButton.className = "completeButton";
            removeButton.className = "removeButton";

            toDoItemTitle.textContent = "Title: " + toDoItems[i].getTitle();
            toDoItemDueDate.textContent = "Due Date: " + toDoItems[i].getDueDate();
            toDoItemDescription.textContent = " Description: " + toDoItems[i].getDescription();

/*             if(projects[i].getCompleted === true){
                completeButton.textContent = "Yes";
            } */

            completeButton.innerHTML = '';

            removeButton.textContent = "X";
            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function() { deleteToDoItem(this, projectToDoItemsDiv.getAttribute('data-projectIndex')); };

            toDoItemInfo.append(toDoItemTitle, toDoItemDueDate);

            toDoItem.append(removeButton, toDoItemInfo, toDoItemDescription, completeButton);

            projectToDoItemsDiv.append(toDoItem);
            
        }
    }
}

export function projectLoad(project){
    deleteContent();
    let content = document.getElementById("content");
    let contentWrapper = document.createElement("div");
    let projectInfo = document.createElement("div");
    let projectTitleLabel = document.createElement("div");
    let projectTitle = document.createElement("div");
    let projectDueDate = document.createElement("div");
    let addTodoItem = document.createElement("button");
    let projectToDoItems = document.createElement("div");
    let projectToDoItemsDiv = document.createElement("div");

    contentWrapper.className = "contentWrapper";
    projectInfo.className = "projectInfo";
    projectDueDate.className = "projectDueDate";
    addTodoItem.className = "addToDoItem";
    projectTitle.className = "projectTitle";
    projectToDoItems.className = "projectToDoItems";
    project.classList.add("selected");

    projectToDoItemsDiv.id = "projectToDoItemsDiv";

    let index = project.getAttribute('data-index');

    projectTitle.textContent = "Project: " +  projects[index].getTitle();
    projectDueDate.textContent = "Due Date: " + projects[index].getDueDate();
    //content.innerHTML = "Project content here";

    loadProjectToDoItems(projects[index].getToDoItems(), projectToDoItemsDiv);

    addTodoItem.textContent = "Add Todo Item";
    addTodoItem.setAttribute('data-index', index);
    addTodoItem.onclick = function() { addToDoItemForm(this);};

    projectToDoItems.innerHTML = "ToDo Items";

    projectInfo.append(projectTitle, projectDueDate, addTodoItem);
    contentWrapper.append(projectInfo, projectToDoItems, projectToDoItemsDiv);
    content.append(contentWrapper);
}

export function homeLoad(){
    deleteContent();
    let content = document.getElementById("content");
    content.innerHTML = "Home Load";
};

export function completedLoad(){
    deleteContent();
    let content = document.getElementById("content");
    content.innerHTML = "Completed Load";
};

export function loadProjectSidebar(){
    let projectSidebar = document.getElementById("projects");
    projectSidebar.innerHTML = ""; //remove any previous existing projects
    let projectWrapper;
    let projectIcon;
    let projectTitle;
    let removeButton;

    for(let i = 0; i < projects.length; i++){
        /*
        console.log(i + "  " + typeof projects[i] );
        let currProject = typeof(projects[i]);
        console.log(currProject + " ? "+ (currProject !== "undefined"));
        console.log("after asssignment " + typeof(currProject));*/
        if(typeof projects[i] !== "undefined"){
            console.log("in if statement");
            projectWrapper = document.createElement('div');
            projectIcon = document.createElement('div');
            projectTitle = document.createElement('div');
            removeButton = document.createElement('button');
            
            projectWrapper.className = "projectWrapper tabs";
            //project
            projectIcon.className = "projectIcon";
            projectTitle.className = "title";
            removeButton.className = "removeProjectButton";

            //add eventListener to display project contents when clicked
            projectWrapper.setAttribute('data-index', i);
            projectWrapper.onclick = function() { projectLoad(this);};
            // projectWrapper.addEventListener('click', function(e){
            //     deleteContent();
            //     projectLoad();d
            //     projectWrapper.classList.add("selected");

            // });

            projectIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24px" height="24px"><path d="M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h11c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5ZM6.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H6.5Zm11.5,4.5c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5ZM8.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Z"/></svg>';
            projectTitle.textContent = projects[i].getTitle();
            removeButton.textContent = "X";

            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function(){deleteProject(this); };

            

            projectWrapper.append(projectIcon, projectTitle, removeButton);
            projectSidebar.appendChild(projectWrapper);

        }
    }

};

//adding projects to DOM
export function loadProjects(projects){
    let contentDiv = document.getElementById("projectContent");
    contentDiv.innerHTML = "";
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

    for(let i = 0; i < projects.length; i++){
        if(typeof projects[i] !== undefined){
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

            projectInfo.append(projectTitle, projectDueDate, addToDoItemButton);

            projectDiv.append(projectLabels, projectInfo, projectToDoItemsDiv, completeButton, removeButton);

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
    let projectToDoItems = document.getElementById("projectToDoItemsDiv");
    console.log(projectToDoItems);
    let projectToDoItemsDiv = document.querySelector("[data-projectIndex = '" + toDoItemForm.getAttribute('data-projectIndex') + "']");
    projects[toDoItemForm.getAttribute('data-projectIndex')].addToDoItem(new toDoItem(addToDoItem.elements['title'].value, addToDoItem.elements['description'].value, addToDoItem.elements['dueDate'].value, addToDoItem.elements['priority'].value));
    /* addBookToLibrary(); */
    loadProjectToDoItems(projects[toDoItemForm.getAttribute('data-projectIndex')].getToDoItems(), projectToDoItems);
    e.preventDefault();
    /* e.target.reset(); */
})

export const addProject = document.getElementById("addProjectForm");
addProject.addEventListener('submit', function(e){
    console.log("here2");
    document.getElementById("projectForm").style.visibility = "hidden";
    projects.push(new Project(addProject.elements['title'].value, addProject.elements['dueDate'].value));
    console.log(addProject.elements['dueDate'].value);
    loadProjectSidebar(projects);
    e.preventDefault();
    /* e.target.reset(); */
});

export function deleteProject(project){
    console.log(project.getAttribute('data-index'));
    delete projects[project.getAttribute("data-index")];
    console.log('deleting project');
    loadProjectSidebar();
    
}

export function deleteToDoItem(toDoItem, projectIndex){
    projects[projectIndex].deleteToDoItem(toDoItem.getAttribute("data-index"));
    console.log('deleting toDoItem');
    loadProjects;
    
}

export function deleteContent(){
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
    let tabs = Array.from(document.getElementsByClassName("tabs"));
    tabs.forEach(tab => {
        tab.classList.remove("selected");
    });
}
