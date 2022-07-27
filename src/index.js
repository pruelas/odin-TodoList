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

contentDiv.appendChild(tabDiv);