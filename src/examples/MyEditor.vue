
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
      config: {
        placeholderText: "Edit Your Content Here!",
        events: {
          initialized: function() {
            console.log("initialized", this);
          },
          mousedown: function(event) {
            if (event.currentTarget.tagName === "A") {
              event.preventDefault();
              this.html.insert("inserting new text"); // cool that works
              this.$refs.other.show(); // how can I access Vue instance from here??
            }
          }
        }
      }
    };
  },
  props: {
    value: {
      type: String
    }
  }
};
</script>
