// creates todo object constructor

class Todo{
    constructor(title, desc, date, priority,project){
        this.title = title
        this.desc = desc
        this.date = date
        this.priority = priority
        this.project = project
        this.id = null;

    }
}

// export 

export {Todo}