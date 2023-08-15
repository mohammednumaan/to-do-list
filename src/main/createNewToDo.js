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
        for(let j =0; j < project.todos.length; j++){
            project.todos[j].id = project.todos.indexOf(project.todos[j])
        }
    }
}

// export 

export {Todo}