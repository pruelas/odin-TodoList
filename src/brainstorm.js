//creating new todos


//setting todos as complete


//changing todo priority


const Project = (title) =>{
    let title = title;
    let toDoItems = [];
    let itemsCompleted = 0;
    
    const getTitle = () => title;
    const getToDoItems = () => toDoItems;

    const addToDoItem = (toDoItem) => {
        toDoItems.push(toDoItem);
    }

    const checkCompleted = () => {
        if(toDoItems.length == itemsCompleted){
            return true;
        }else{
            return false;
        }
    }

    const completeToDoItem = (index) => {
        toDoItems[index].changeCompleted();
        if(toDoItems[index].getCompleted == false){
            itemsCompleted -= 1;
        }else{
            itemsCompleted += 1;
        }
    }

    const deleteToDoItem = (index) => {
        toDoItems.delete(index);
        //reload DOM to reassign indeces
    }

    return {getTitle, getToDoItems, addToDoItem, checkCompleted, completeToDoItem, deleteToDoItem};
};

const toDoItem = (title, description, dueDate, priority) => {
    let title = title;
    let description = description;
    let dueDate = dueDate;
    let priority = priority;
    let completed = false;
    

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCompleted = () => completed;

    const changeTitle = (title) => {
        this.title = title;
    }

    const changeDescription = (description) => {
        this.description = description;
    }

    const changeDueDate = (dueDate) => {
        this.dueDate = dueDate;
    }

    const changePriority = (priority) => {
        this.priority = priority;
    }

    const changeCompleted = (completed) => {
        if(completed == false){
            this.completed  = true;
        }else{
            this.completed = false;
        }
    }

    return {getTitle, getDescription, getDueDate, getPriority, getCompleted, changeTitle, 
        changeDescription, changeDueDate, changePriority, changeCompleted};
};