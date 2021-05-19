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
    }   
    }
	})
function sortAbc() {
    // Declaring Variables
            var geek_list, i, run, li, stop;
  
            // Taking content of list as input
            geek_list = document.getElementById("my_span1");
  
            run = true;
  
            while (run) {
                run = false;
                li = geek_list.getElementsByTagName("LI");
  
                // Loop traversing through all the list items
                for (i = 0; i < (li.length - 1); i++) {
                    stop = false;
                    if (li[i].innerHTML.toLowerCase() > 
                        li[i + 1].innerHTML.toLowerCase()) {
                        stop = true;
                        break;
}
}
  
                /* If the current item is smaller than 
                   the next item then adding it after 
                   it using insertBefore() method */
                if (stop) {
                    li[i].parentNode.insertBefore(
                            li[i + 1], li[i]);
  
                    run = true;
}
}
}


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
