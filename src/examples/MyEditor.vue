
<template>
  <div id="app">
    <div class="sample">
      <h2>My Editor</h2>
      <froala v-model="content" :config="config"></froala>
      <my-other-component ref="other" />
    </div>
  </div>
</template>

<script>
import MyOtherComponent from "./MyOtherComponent";
export default {
  components: { MyOtherComponent },
  computed: {
    content: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        console.log(newValue);
      }
    }
  },
  data() {
    return {
      config: {}
    };
  },
  props: {
    value: {
      type: String
    }
  }
};
</script>
