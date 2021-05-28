let app = new Vue({
el: '#app',
data: {
    todoText: '',
    weekday: new Date().toString().slice(0, 3),
    todos: [],
    priorities: [{prio: 2, label: 'priority: low'}, {prio: 1, label: 'priority: medium'}, {prio: 0, label: 'priority: high'}],
    selectedPriority: {priority: 2, label: 'low'},

},
methods: {
    saveTask : function(){
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data);
    JSON.parse(localStorage.getItem("todos"))          
},
addTodo: function() {
    let newTodo = this.todoText.trim();
    if (this.todoText !== '') {
    this.todos.push({
    text: this.todoText,
    wDay: this.weekday,
    priority: this.selectedPriority.label,
    done: false
        //// used to push into list.
});
    this.todoText = ''
}
},
removeItem(todo) {
    this.todos.splice(todo, 1)
},
taskClasses(task) {
    const classes = {
        [task.priority.prio]: true,
}    
return classes;
}
}
});

