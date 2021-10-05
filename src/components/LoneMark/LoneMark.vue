<template>
  <div v-html="renderMark"></div>
</template>
<script>
import marked from "marked";
import hljs from "highlight.js";
export default {
  name: "LoneMark",
  props: {
    content: {
      type: String,
      require: true,
    },
  },
  computed: {
    renderMark() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, lang) {
          const language = hljs.getLanguage(lang) ? lang : "plaintext";
          return hljs.highlight(code, { language }).value;
        },
        langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      });
      return marked(this.content);
    },
  },
};
</script>

<style>
@import "~highlight.js/styles/stackoverflow-light.css";
.markdown-body > p > img {
  max-width: 100%;
  display: flex;
  margin: auto;
}
</style>
