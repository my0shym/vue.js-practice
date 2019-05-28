(function(){
    'use strict';

    // two way data binding (to UI)
    var vm = new Vue({
        el: '#app',
        data: {
            todos: [
                'task1',
                'task2',
                'task3'            
            ]
        },
        methods: {
            addItem: function(){
                this.todos.push(this.newItem);
                this.newItem = '';
            },
            deleteItem: function(index){
                if (confirm('are you sure?')){
                    this.todos.splice(index, 1);
                }
            }
        }
    });
})();