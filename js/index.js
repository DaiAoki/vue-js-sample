var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js! DaiAoki'
  }
})

Vue.component('todolist', {
  props: ['todos'],
  template:'<div><div v-for="t in todos" v-bind:key="t.id" v-bind:class="[\'todo-default\', t.doing ? \'todo-doing\' : \'\']" v-on:click="begin(t)"> {{t.name}} </div></div>',
  methods: {
    begin: function(todo){
      todo.doing = !todo.doing;
    }
  }
})

var todoApp = new Vue({
  // 対象となるHTML要素
  el: '#todoApp',
  // バインドする値
  data: {
    title: "Welcome to Vue.js",
    fontStyle: {
      fontSize: "20px",
      color: "#db4358",
    },
    todo: "",    // input要素のv-model
    todos: []    // 入力内容配列
  },
  // イベントなどから呼び出す処理
  methods: {
    addTodo: function() {
      // ここのthisはtodoAppのこと???
      this.todos.push({
        id: this.todos.length,
        name: this.todo,
        doing: false,
      })
      this.todo = ""
    },
    hoge: function() {
      //alert("aaa!!!");
    }
  }
})
