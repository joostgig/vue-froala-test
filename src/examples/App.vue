
<template>
  <div id="app">
    <div class="sample">
      <my-editor value="This is the first value" />
      <my-editor value="This is the second value <a href='#'>click me</a>" />
    </div>
  </div>
</template>

<script>
import MyEditor from "./MyEditor";
export default {
  name: "app",
  components: { MyEditor }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding: 20px;
}

.sample {
  padding-bottom: 50px;
  margin-left: 30px;
  border-top: 1px solid lightgray;
}

.manual {
  margin-bottom: 20px;
}

.button {
  margin-left: 5px;
}
</style>
