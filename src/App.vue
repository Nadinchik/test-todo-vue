<template>
  <div id="app">
    <div class="todo-container flex-center">
      <h1>Todo List</h1>
      <newItem />
      <list />
    </div>
  </div>
</template>

<script>
import List from "./components/List";
import NewItem from "./components/Input";

export default {
  name: 'App',
  components: {
    List,
    NewItem
  }
}
</script>
