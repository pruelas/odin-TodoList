import './meyerWeb.css';
import './style.css';
import {toDoItem, Project, addToDoItemForm, projects, loadProjects, homeLoad, completedLoad, loadProjectSideBar, loadProjectToDoItems, addToDoItem, addProject} from "./brainstorm.js"

function addProjectItemForm(){
    let newProjectForm = document.getElementById("projectForm");
    newProjectForm.style.visibility = "visible";
    let addProjectForm = document.getElementById("addProjectForm");
    addProjectForm.style.display = "flex";
};

document.getElementById("home").classList.add('selected');
homeLoad();

const projectButton = document.getElementById("addProjectButton");
projectButton.onclick = function(){ addProjectItemForm();};

const tabs = Array.from(document.getElementsByClassName("tabs"));
tabs.forEach(tab => {
    if(tab.id === "home"){
        tab.addEventListener('click', function(e){
            homeLoad();
            tab.classList.add("selected");
            
        });
    }
});

document.body.addEventListener('click', function(e){
    var projectForm = document.getElementById("projectForm")
    var addProjectForm = document.getElementById("addProjectForm");
    if( (e.target.className !== "addProjectForm" && e.target instanceof HTMLDivElement) && projectForm.style.visibility !="hidden" && addProjectForm.style.display != 'none'){
        addProjectForm.style.display = 'none';
        projectForm.style.visibility = "hidden";
    }
});

document.body.addEventListener('click', function(e){
    var projectForm = document.getElementById("projectForm")
    var editProjectForm = document.getElementById("editProjectForm");
    if( (e.target.className !== "editProjectForm" && e.target instanceof HTMLDivElement) && projectForm.style.visibility !="hidden" && editProjectForm.style.display != 'none'){
        editProjectForm.style.display = 'none';
        projectForm.style.visibility = "hidden";
    }
});

document.body.addEventListener('click', function(e){
    var toDoItemForm = document.getElementById("toDoItemForm");
    var addToDoItemForm = document.getElementById("addToDoItemForm");
    if( (e.target.className !== "addToDoItemForm" && e.target.className !=="priority" && e.target instanceof HTMLDivElement) && toDoItemForm.style.visibility !=="hidden" && addToDoItemForm.style.display != 'none'){
        addToDoItemForm.style.display = 'none';
        toDoItemForm.style.visibility = "hidden";
    }
});

document.body.addEventListener('click', function(e){
    var toDoItemForm = document.getElementById("toDoItemForm");
    var editToDoItemForm = document.getElementById("editToDoItemForm");
    if( (e.target.className !== "editToDoItemForm" && e.target.className !=="priority" && e.target instanceof HTMLDivElement) && toDoItemForm.style.visibility !=="hidden" && editToDoItemForm.style.display != 'none'){
        editToDoItemForm.style.display= 'none';
        toDoItemForm.style.visibility = "hidden";
    }
});