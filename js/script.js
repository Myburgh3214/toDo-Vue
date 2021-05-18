var app = new Vue({
	el: '#app',
	data: {
		todoText: '',
		todos: [
			
		]
	},
	methods: {
		addTodo: function() {
			var newTodo = this.todoText.trim();
			if (!newTodo) {return;}
			this.todos.push(
				{text: newTodo, done: false}
			);
			this.todoText = '';
		}
	}
});