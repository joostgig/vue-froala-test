// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins/char_counter.min.js";

import App from "./examples/App";
import Vue from "vue";
import VueFroala from "vue-froala-wysiwyg";

Vue.use(VueFroala);
new Vue({
  render: h => h(App)
}).$mount("#app");
