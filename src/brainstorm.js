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

    const changeTitle = (title) => {
        _title = title;
    }

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
        delete _toDoItems[index];
        //reload DOM to reassign indeces
    }

    return {getTitle, getDueDate, getToDoItems, changeTitle, changeDueDate, addToDoItem, checkCompleted, completeToDoItem, deleteToDoItem};
};

export function addToDoItemForm(project){
    console.log("hereTODOITEMADD");
    
    let toDoItemForm = document.getElementById("toDoItemForm");
    toDoItemForm.style.visibility = "visible";

    let addToDoItemForm = document.getElementById("addToDoItemForm");
    addToDoItemForm.style.display = "flex";

    toDoItemForm.setAttribute('data-projectIndex', project.getAttribute('data-index'));
    console.log(document.querySelector("[data-projectIndex = '" + toDoItemForm.getAttribute('data-projectIndex') + "']"));
    console.log(project, project.getAttribute('data-index'), toDoItemForm.getAttribute('data-projectIndex'));
    
};

/* export let projects = []; */

export function loadProjectToDoItems(toDoItems, projectToDoItemsDiv){
    projectToDoItemsDiv.innerHTML = '';
    let toDoItem;
    let toDoItemPriority;
    let toDoItemTextWrapper;
    let toDoItemInfo;
    let toDoItemTitle;
    let toDoItemDueDate;
    let toDoItemDescription;
    let completeButton;
    let changeButtons;
    let editButton;
    let removeButton;

    for(let i =0 ; i < toDoItems.length; i++){
        if(typeof toDoItems[i] !== 'undefined'){
            toDoItem = document.createElement('div');
            toDoItemPriority = document.createElement('div');
            toDoItemTextWrapper = document.createElement('div');
            toDoItemInfo = document.createElement('div');
            toDoItemTitle = document.createElement('div');
            toDoItemDueDate = document.createElement('div');
            toDoItemDescription = document.createElement('div');
            completeButton = document.createElement('button');
            changeButtons = document.createElement('div');
            editButton = document.createElement('div');
            removeButton = document.createElement('button');

            toDoItem.className = "toDoItem";
            toDoItemPriority.className = "priority";
            toDoItemTextWrapper.className = "toDoItemTextWrapper";
            toDoItemInfo.className = "toDoItemInfo";
            toDoItemTitle.className = "toDoItemTitle";
            toDoItemDueDate.className = "toDoItemDueDate";
            toDoItemDescription.className = "toDoItemDescription";

            completeButton.className = "completeButton";
            changeButtons.className = "changeButtons";
            editButton.className = "editButton";
            removeButton.className = "removeButton";

            toDoItemTitle.textContent = "Title: " + toDoItems[i].getTitle();
            toDoItemDueDate.textContent = "Due Date: " + toDoItems[i].getDueDate();
            toDoItemDescription.textContent = " Description: " + toDoItems[i].getDescription();

            let priority = toDoItems[i].getPriority();
            console.log('priority ' + priority);
            if(priority == "high"){
                toDoItemPriority.classList.add('high');
                console.log('low' + toDoItemPriority.classList.contains('low'));
                // if(toDoItemPriority.classList.contains('low')){
                //     toDoItemPriority.classList.remove('low');
                // }
            }else{
                toDoItemPriority.classList.add('low');
                // if(toDoItemPriority.classList.contains('high')){
                //     toDoItemPriority.classList.remove('high');
                // }
            }

/*             if(projects[i].getCompleted === true){
                completeButton.textContent = "Yes";
            } */

            completeButton.innerHTML = '';
            
            editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24px" height="24px"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>';
            editButton.setAttribute('data-toDoIndex', i);
            editButton.onclick = function(){ console.log('editButton'); editToDoItemForm(this);};
            console.log('added editButton');
            
            removeButton.textContent = "X";
            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function() {deleteToDoItem(this, projectToDoItemsDiv.getAttribute('data-projectIndex')); };

            toDoItemInfo.append(toDoItemTitle, toDoItemDueDate);
            changeButtons.append(editButton, removeButton);

            toDoItemTextWrapper.append(toDoItemInfo, toDoItemDescription);

            toDoItem.append(toDoItemPriority,completeButton, toDoItemTextWrapper ,changeButtons);

            projectToDoItemsDiv.append(toDoItem);
            
        }
    }
}

export function projectLoad(project){
    console.log("projectLoad");
    let content = document.getElementById("content");
    let contentWrapper = document.createElement("div");
    let projectInfo = document.createElement("div");
    let projectTitleLabel = document.createElement("div");
    let projectTitle = document.createElement("div");
    let projectDueDate = document.createElement("div");
    let projectEditIcon = document.createElement("div");
    let projectRemoveButton = document.createElement("div");
    let projectToDoItemsWrapper = document.createElement("div");
    let projectToDoItemsLabel = document.createElement("div");
    let addTodoItem = document.createElement("div");
    let projectToDoItemsDiv = document.createElement("div");

    contentWrapper.className = "contentWrapper";
    projectInfo.className = "projectInfo";
    projectDueDate.className = "projectDueDate";
    projectTitle.className = "projectTitle";
    projectEditIcon.className = "projectEdit";
    projectRemoveButton.className = "projectRemove";
    projectToDoItemsWrapper.className = "projectToDoItemsWrapper";
    projectToDoItemsLabel.className = "projectToDoItemsLabel"
    addTodoItem.className = "addToDoItem";


    let index = project.getAttribute('data-index');

    projectToDoItemsDiv.id = "projectToDoItemsDiv";
    projectToDoItemsDiv.setAttribute('data-projectIndex', index)

    projectTitle.textContent = "Project: " +  projects[index].getTitle();
    projectDueDate.textContent = "Due Date: " + projects[index].getDueDate();
    projectEditIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24px" height="24px"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>';
    projectRemoveButton.textContent = 'X';
    //content.innerHTML = "Project content here";

    projectEditIcon.setAttribute('data-index', index)
    projectEditIcon.onclick = function() { editProjectForm(this);};

    projectRemoveButton.setAttribute('data-index', index);
    projectRemoveButton.onclick = function() { deleteProject(this);};

    loadProjectToDoItems(projects[index].getToDoItems(), projectToDoItemsDiv);

    addTodoItem.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" height="24px" width = "24px" viewBox="0 0 512 512" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/></g></svg>';
    addTodoItem.setAttribute('data-index', index);
    addTodoItem.onclick = function() { addToDoItemForm(this);};

    projectToDoItemsLabel.textContent = "ToDo Items";

    projectInfo.append(projectTitle, projectDueDate, projectEditIcon, projectRemoveButton);
    projectToDoItemsWrapper.append(projectToDoItemsLabel, addTodoItem);
    contentWrapper.append(projectInfo, projectToDoItemsWrapper, projectToDoItemsDiv);
    content.append(contentWrapper);
}

export function homeLoad(){
    deleteContent();
    let content = document.getElementById("content");
    document.getElementById('home').classList.add('selected');
    content.innerHTML = "Home Load";
};

export function completedLoad(){
    deleteContent();
    let content = document.getElementById("content");
    content.innerHTML = "Completed Load";
};

export function editProjectForm(project){
    console.log("edit Project");
    let index = project.getAttribute('data-index');
    let projectForm = document.getElementById("projectForm");
    projectForm.style.visibility = "visible";


   // let addProjectForm = document.getElementById('addProjectForm');
   // addProjectForm.style.visibility = "hidden";

    let editProjectForm = document.getElementById('editProjectForm');
    editProjectForm.style.display = "flex";

    let projectTitle = document.getElementById("editProjectTitle");
    projectTitle.setAttribute('value', projects[index].getTitle());

    let projectDueDate = document.getElementById('editProjectDueDate');
    projectDueDate.setAttribute('value', projects[index].getDueDate());

    document.getElementById('editProject').setAttribute('data-index', index);
}

export function editToDoItemForm(toDoItem){
    console.log("edit TodoItem Form");
    let toDoItemIndex = toDoItem.getAttribute('data-toDoIndex');
    let projectIndex = document.getElementById("projectToDoItemsDiv").getAttribute('data-projectIndex');
    let toDoItems = projects[projectIndex].getToDoItems();
    
    let toDoItemForm = document.getElementById("toDoItemForm");
    toDoItemForm.style.visibility = "visible";

    let editToDoItemForm = document.getElementById("editToDoItemForm");
    editToDoItemForm.style.display = "flex";

    let toDoItemTitle = document.getElementById('editToDoItemTitle');
    toDoItemTitle.setAttribute('value', toDoItems[toDoItemIndex].getTitle());

    let toDoItemDescription = document.getElementById('editToDoItemDescription');
    toDoItemDescription.setAttribute('value', toDoItems[toDoItemIndex].getDescription());

    let toDoItemDueDate = document.getElementById('editToDoItemDueDate');
    toDoItemDueDate.setAttribute('value', toDoItems[toDoItemIndex].getDueDate());

    let toDoItemPriority = document.getElementById('editToDoItemPriority');
    toDoItemPriority.setAttribute('value', toDoItems[toDoItemIndex].getPriority());

    document.getElementById('editToDoItemButton').setAttribute('data-toDoIndex', toDoItemIndex);

}

export function loadProjectSidebar(index){
    let projectSidebar = document.getElementById("projects");
    projectSidebar.innerHTML = ""; //remove any previous existing projects
    let projectWrapper;
    let projectIcon;
    let projectTitle;
    let removeButton;
    console.log(index);
    for(let i = 0; i < projects.length; i++){
        console.log(i);
        /*let currProject = typeof(projects[i]);
        console.log(currProject + " ? "+ (currProject !== "undefined"));
        console.log("after asssignment " + typeof(currProject));*/
        if(typeof projects[i] !== "undefined"){
            console.log("in if statement" + " " +  typeof projects[i]);
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
            projectWrapper.onclick = function() { deleteContent(); this.classList.add("selected"); projectLoad(this);};
            // projectWrapper.addEventListener('click', function(e){
            //     deleteContent();
            //     projectLoad();d
            //     projectWrapper.classList.add("selected");

            
            // });

            if(index == i){
                projectWrapper.classList.add("selected");
                console.log('index == i');
            }


            projectIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24px" height="24px"><path d="M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h11c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5ZM6.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H6.5Zm11.5,4.5c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5ZM8.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Z"/></svg>';
            projectTitle.textContent = projects[i].getTitle();
            removeButton.textContent = "X";

            removeButton.setAttribute('data-index', i);
            removeButton.onclick = function(e){ e.stopPropagation(); deleteProject(this); };

            

            projectWrapper.append(projectIcon, projectTitle, removeButton);
            projectSidebar.appendChild(projectWrapper);

        }else{
            console.log("skipped");
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
            projectDiv = document.createElement('div');
            projectLabels = document.createElement('div');
            titleLabel = document.createElement('div');
            dueDateLabel = document.createElement('div');
            projectInfo = document.createElement('div');
            projectTitle = document.createElement('div');
            projectDueDate = document.createElement('div');
            projectEditIcon = document.createElement('div');
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
            projectEditIcon.className = "projectEdit"
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
    document.getElementById("addToDoItemForm").style.display = "none";
    let projectToDoItems = document.getElementById("projectToDoItemsDiv");
    console.log(projectToDoItems);
    let projectToDoItemsDiv = document.querySelector("[data-projectIndex = '" + toDoItemForm.getAttribute('data-projectIndex') + "']");
    projects[toDoItemForm.getAttribute('data-projectIndex')].addToDoItem(new toDoItem(addToDoItem.elements['title'].value, addToDoItem.elements['description'].value, addToDoItem.elements['dueDate'].value, addToDoItem.elements['priority'].value));
    /* addBookToLibrary(); */
    loadProjectToDoItems(projects[toDoItemForm.getAttribute('data-projectIndex')].getToDoItems(), projectToDoItems);
    e.preventDefault();
    /* e.target.reset(); */
});

export const editToDoItem = document.getElementById("editToDoItemForm");
editToDoItem.addEventListener('submit', function(e){
    console.log('editToDoItem');
    document.getElementById("toDoItemForm").style.visibility = "hidden";
    document.getElementById("editToDoItemForm").style.display = "none";
    let projectToDoItemsDiv = document.getElementById('projectToDoItemsDiv');
    let projectIndex = projectToDoItemsDiv.getAttribute('data-projectIndex');
    let toDoItemIndex = document.getElementById('editToDoItemButton').getAttribute('data-toDoIndex');
    let toDoItems = projects[projectIndex].getToDoItems();
    toDoItems[toDoItemIndex].changeTitle(editToDoItem.elements['editToDoItemTitle'].value);
    toDoItems[toDoItemIndex].changeDescription(editToDoItem.elements['editToDoItemDescription'].value);
    toDoItems[toDoItemIndex].changeDueDate(editToDoItem.elements['editToDoItemDueDate'].value);
    toDoItems[toDoItemIndex].changePriority(editToDoItem.elements['editToDoItemPriority'].value);
    loadProjectToDoItems(toDoItems,projectToDoItemsDiv);
    e.preventDefault();
});

export const addProject = document.getElementById("addProjectForm");
addProject.addEventListener('submit', function(e){
    // console.log(e);
    console.log("here2");
    document.getElementById("projectForm").style.visibility = "hidden";
    document.getElementById("addProjectForm").style.display = "none";
    projects.push(new Project(addProject.elements['projectTitle'].value, addProject.elements['projectDueDate'].value));
    console.log(addProject.elements['projectDueDate'].value);
    loadProjectSidebar(-1);
    
    e.preventDefault();
    /* e.target.reset(); */
});

export const editProject = document.getElementById("editProjectForm");
editProject.addEventListener('submit', function(e){
    console.log('edit');
    document.getElementById("projectForm").style.visibility = "hidden";
    document.getElementById("editProjectForm").style.display = "none";
    let index = document.getElementById('editProject').getAttribute('data-index');
    projects[index].changeTitle(editProject.elements['projectTitle'].value);
    projects[index].changeDueDate(editProject.elements['projectDueDate'].value);
    deleteContent();
    loadProjectSidebar(index);
    projectLoad(document.getElementById('editProject'));
    e.preventDefault();
});

export function deleteProject(project){
    console.log(project.getAttribute('data-index'));
    delete projects[project.getAttribute("data-index")];
    console.log('deleting project');
    deleteSidebarContent();
    let selectedTab = document.querySelector("selected");
    let indexOfSelectedTab = selectedTab.getAttribute('data-index');
    if(indexOfSelectedTab == project.getAttribute('data-index')){
        deleteContent();
    }
    console.log('selected');
    console.log(selectedTab);
    
    loadProjectSidebar(-1);
    
}

export function deleteToDoItem(toDoItem, projectIndex){
    console.log(toDoItem + "  " + projectIndex);
    projects[projectIndex].deleteToDoItem(toDoItem.getAttribute("data-index"));
    console.log('deleting toDoItem');
    let  projectToDoItemsDiv = document.getElementById('projectToDoItemsDiv');
    loadProjectToDoItems(projects[projectIndex].getToDoItems(), projectToDoItemsDiv);
    
}

export function deleteContent(){
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
    let tabs = Array.from(document.getElementsByClassName("tabs"));
    tabs.forEach(tab => {
        tab.classList.remove("selected");
    });
}

export function deleteSidebarContent(){
    let projectSidebar = document.getElementById('projectSidebar');
    projectSidebar.innerHTML = '';
}

export function deleteToDoItemContent(){
    let toDoItemDiv = document.getElementById('projectToDoItemsDiv');
    toDoItemDiv.innerHTML = "";
}