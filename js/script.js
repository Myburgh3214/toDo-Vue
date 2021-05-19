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
		},
       del (todos) {
      // this.arr.splice(index, 1)
      this.$delete(this.todos, todos)
    },
     sortObject: function(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});    
        
    }
	})


/////localstorage JSON
function getInputValueTask(){
            // Selecting the input element and get its value 
           let listVal = document.getElementById("Task").value;
            // Displaying the value
           console.log(listVal);   


let obj = document.getElementById("Task").value;

let myData = JSON.stringify(obj);
localStorage.setItem("userData", myData);

myText = localStorage.getItem("userData");
newObj = JSON.parse(myText);
}
