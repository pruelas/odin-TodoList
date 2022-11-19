import './meyerWeb.css';
import './style.css';
import {toDoItem, Project, addToDoItemForm, projects, loadProjects, homeLoad, completedLoad, loadProjectSideBar, loadProjectToDoItems, addToDoItem, addProject} from "./brainstorm.js"

let contentDiv = document.getElementById("content");

// //todoList tabs
// let tabDiv = document.createElement("div");
// tabDiv.classList.add('tabDiv');

// /* let todayTab = document.createElement("div");
// todayTab.classList.add('tabs');
// todayTab.classList.add('selected');
// todayTab.id = "today";
// todayTab.textContent = "Today"; */

// /* console.log(todayTab.classList); */

// /* let weeklyTab = document.createElement("div");
// weeklyTab.classList.add('tabs');
// weeklyTab.id = "weekly";
// weeklyTab.textContent = "Weekly"; */

// let projectTab = document.createElement("div");
// projectTab.classList.add('tabs');
// projectTab.classList.add('selected');
// projectTab.id = "project";
// projectTab.textContent = "Projects";

// let completedTab = document.createElement("div");
// completedTab.classList.add('tabs');
// completedTab.id = 'completed';
// completedTab.textContent = "Completed";

// /* tabDiv.append(todayTab);
// tabDiv.append(weeklyTab); */
// tabDiv.append(projectTab);
// tabDiv.append(completedTab);
// contentDiv.prepend(tabDiv);

function addProjectItemForm(){
    console.log("here");
    console.log(projects);
    let newProjectForm = document.getElementById("projectForm");
    newProjectForm.style.visibility = "visible";
    let addProjectForm = document.getElementById("addProjectForm");
    addProjectForm.style.display = "flex";
};

/*
let addProjectButton = document.createElement("button");
addProjectButton.classList.add("addProjectButton");
addProjectButton.textContent = "Add Project";

contentDiv.append(addProjectButton);*/
document.getElementById("home").classList.add('selected');
homeLoad();

const projectButton = document.getElementById("addProjectButton");
projectButton.onclick = function(){ addProjectItemForm();};

const tabs = Array.from(document.getElementsByClassName("tabs"));
tabs.forEach(tab => {
    if(tab.id === "home"){
        tab.addEventListener('click', function(e){
            //deleteContent();
            homeLoad();
            tab.classList.add("selected");
            
        });
    }else if(tab.id === "completed"){
        tab.addEventListener('click', function(e){
         // deleteContent();
          completedLoad();
          console.log("completed + selected");
            tab.classList.add("selected");
            
        });
    }
});

//  let projects = [];

// const addProject = document.getElementById("addProjectForm");
// addProject.addEventListener('submit', function(e){
//     console.log("here2");
//     document.getElementById("projectForm").style.display = "none";
//     document.getElementById("projectForm").style.visibility = "hidden";
//     console.log(addProject.elements['title'].value, addProject.elements['dueDate'].value);
//     projects.push(new Project(addProject.elements['title'].value, addProject.elements['dueDate'].value));
//     console.log(projects);
//     loadProjects(projects);
//     e.preventDefault();
//     e.target.reset();
// });


// function deleteContent(){
//     let contentDiv = document.getElementById('content');
//     /* contentDiv.removeChild(contentDiv.lastChild); */
//     let tabs = Array.from(document.getElementsByClassName("tabs"));
//     tabs.forEach(tab => {
//         tab.classList.remove("selected");
//     });
// }

// if( (e.target.className !=="addBookForm" && e.target.className !=="hasRead" && e.target.className !=="addBook" && e.target instanceof HTMLDivElement) && addBookForm.style.visibility !=="hidden"){
//     addBookForm.style.visibility = 'hidden';
// }

document.body.addEventListener('click', function(e){
    console.log(e.target.className);
    var projectForm = document.getElementById("projectForm")
    var addProjectForm = document.getElementById("addProjectForm");
    if( (e.target.className !== "addProjectForm" && e.target instanceof HTMLDivElement) && projectForm.style.visibility !="hidden" && addProjectForm.style.display != 'none'){
        addProjectForm.style.display = 'none';
        projectForm.style.visibility = "hidden";
        console.log("hidden");
    }
});

document.body.addEventListener('click', function(e){
    console.log(e.target);
    var projectForm = document.getElementById("projectForm")
    var editProjectForm = document.getElementById("editProjectForm");
    if( (e.target.className !== "editProjectForm" && e.target instanceof HTMLDivElement) && projectForm.style.visibility !="hidden" && editProjectForm.style.display != 'none'){
        editProjectForm.style.display = 'none';
        projectForm.style.visibility = "hidden";
        console.log("hidden");
    }
});

document.body.addEventListener('click', function(e){
    console.log(e.target);
    var toDoItemForm = document.getElementById("toDoItemForm");
    var addToDoItemForm = document.getElementById("addToDoItemForm");
    if( (e.target.className !== "addToDoItemForm" && e.target.className !=="priority" && e.target instanceof HTMLDivElement) && toDoItemForm.style.visibility !=="hidden" && addToDoItemForm.style.display != 'none'){
        addToDoItemForm.style.display = 'none';
        toDoItemForm.style.visibility = "hidden";
        console.log("hidden");
    }
});

document.body.addEventListener('click', function(e){
    console.log(e.target);
    var toDoItemForm = document.getElementById("toDoItemForm");
    var editToDoItemForm = document.getElementById("editToDoItemForm");
    if( (e.target.className !== "editToDoItemForm" && e.target.className !=="priority" && e.target instanceof HTMLDivElement) && toDoItemForm.style.visibility !=="hidden" && editToDoItemForm.style.display != 'none'){
        editToDoItemForm.style.display= 'none';
        toDoItemForm.style.visibility = "hidden";
        console.log("hidden");
    }
});