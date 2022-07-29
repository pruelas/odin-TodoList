import './meyerWeb.css';
import './style.css';

let contentDiv = document.getElementById("content");

//todoList tabs
let tabDiv = document.createElement("div");
tabDiv.classList.add('tabDiv');

let todayTab = document.createElement("div");
todayTab.classList.add('tabs');
todayTab.classList.add('selected');
todayTab.id = "today";
todayTab.textContent = "Today";

console.log(todayTab.classList);

let weeklyTab = document.createElement("div");
weeklyTab.classList.add('tabs');
weeklyTab.id = "weekly";
weeklyTab.textContent = "Weekly";

let projectTab = document.createElement("div");
projectTab.classList.add('tabs');
projectTab.id = "project";
projectTab.textContent = "Projects";

let completedTab = document.createElement("div");
completedTab.classList.add('tabs');
completedTab.id = 'completed';
completedTab.textContent = "Completed";

tabDiv.append(todayTab);
tabDiv.append(weeklyTab);
tabDiv.append(projectTab);
tabDiv.append(completedTab);

contentDiv.append(tabDiv);

const tabs = Array.from(document.getElementsByClassName("tabs"));
tabs.forEach(tab => {
    if(tab.id === "today"){
        tab.addEventListener('click', function(e){
            deleteContent();
            /* pageLoad(Food); */
            tab.classList.add("selected");
            
        });
    }else if(tab.id === "weekly"){
        tab.addEventListener('click', function(e){
            deleteContent();
            /* menuLoad(); */
            tab.classList.add("selected");
            
        });

    }else if(tab.id === "projects"){
        tab.addEventListener('click', function(e){
            deleteContent();
            /* menuLoad(); */
            tab.classList.add("selected");
            
        });
    
    }else{
        tab.addEventListener('click', function(e){
            deleteContent();
            /* contactLoad(); */
            tab.classList.add("selected");
        });
    }  
});

function deleteContent(){
    let contentDiv = document.getElementById('content');
    /* contentDiv.removeChild(contentDiv.lastChild); */
    let tabs = Array.from(document.getElementsByClassName("tabs"));
    tabs.forEach(tab => {
        tab.classList.remove("selected");
    });
}