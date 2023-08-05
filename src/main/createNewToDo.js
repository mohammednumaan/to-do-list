// creates todo object constructor

class Todo{
    constructor(title, desc, date, priority,project){
        this.title = title
        this.desc = desc
        this.date = date
        this.priority = priority
        this.project = project
        this.completed = false;
        this.id = null;
    }

    generateTodoId(project){
        for(let i =0; i < project.todos.length; i++){
            project.todos[i].id = project.todos.indexOf(project.todos[i])
        }
    }
}

// export 

export {Todo}