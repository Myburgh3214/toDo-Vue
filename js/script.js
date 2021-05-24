var app = new Vue({
	el: '#app',
	data: {
		todoText: '',
		todos: [{
            id: 0, title: "todoList", completed: "false"
        },
            
			
		],
        priorities: [{prio: 2, label: 'low'}, {prio: 1, label: 'medium'}, {prio: 0, label: 'high'}],
      selectedPriority: {prio: 2, label: 'low'},

                  },
	methods: {
		addTodo: function() {
			let newTodo = this.todoText.trim();
			if (!newTodo) {return;}
			this.todos.push(
				{text: newTodo, done: false}
			);
			this.todoText = '';
		},
       del (todo) {
      this.$delete(this.todoText, todos)
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

