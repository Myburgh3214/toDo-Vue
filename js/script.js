var app = new Vue({
	el: '#app',
	data: {
        
		todoText: '',
            weekday: new Date().toString().slice(0, 3),
		todos: [{
            id: 0, title: "todoList", completed: "false"
        },	
		],
    priorities: [{prio: 2, label: 'low'}, {prio: 1, label: 'medium'}, {prio: 0, label: 'high'}],
      selectedPriority: {priority: 2, label: 'low'},

                  },
	methods: {
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

