var app = new Vue({
	el: '#app',
	data: {
        
		todoText: '',
            weekday: new Date().toString().slice(0, 3),
		todos: [{
        },	
		],
    priorities: [{prio: 2, label: 'priority: low'}, {prio: 1, label: 'priority: medium'}, {prio: 0, label: 'priority: high'}],
      selectedPriority: {priority: 2, label: 'low'},

                  },
	methods: {
        saveTask : function(){
            this.todos.push(this.todo.done);

        },
		addTodo: function() {
			let newTodo = this.todoText.trim();
                 if (this.todoText !== '') {
        this.todos.push({
          text: this.todoText,
          wDay: this.weekday,
        priority: this.selectedPriority.label,
          done: false
        }
			);
			this.todoText = ''
                 }
		},
        removeItem(todo) {
      this.todos.splice(todo, 1)
    },
        taskClasses(task) {
      const classes = {
        done: task.checked,
        [task.priority.prio]: true,
      }
      console.log(classes)
      return classes;
    }
  }
    });

