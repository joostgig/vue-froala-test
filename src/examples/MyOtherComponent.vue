
<template>
  <h1 v-if="visible">Hi</h1>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  created() {
    console.log("other component created");
  },
  methods: {
    show() {
      console.log("show called");
      this.visible = true;
    }
  }
};
</script>
