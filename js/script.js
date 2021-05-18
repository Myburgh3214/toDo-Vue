
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

const formatTextWrap = (text, maxLineLength) => {
  var words = text.replace(/[\r\n]+/g, ' ').split(' ')
  var lineLength = 0
  var output = ''
  for (var word of words) {
    if (lineLength + word.length >= maxLineLength) {
      output += `\n${word} `
      lineLength = word.length + 1
    } else {
      output += `${word} `
      lineLength += word.length + 1
    }
  }
  return output
}
function my_fun(j){

var chkbox ="ckb" + j;

var my_span ="my_span" + j;

var msg = chkbox + "  " + my_span;

if(document.getElementById(chkbox).checked){ 

document.getElementById(my_span).style.textDecoration='line-through';

}
else{
document.getElementById(my_span).style.textDecoration='none';
}
}
