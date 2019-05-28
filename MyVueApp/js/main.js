(function(){
    'use strict';

    // two way data binding (to UI)
    var vm = new Vue({
        el: '#app',
        data: {
            todos: [
                {
                    title: "task1",
                    isDone: false
                },
                {
                    title: "task2",
                    isDone: false
                },
                {
                    title: "task3",
                    isDone: false
                },
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