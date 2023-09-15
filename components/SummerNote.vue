<script setup>
import SummernoteEditor from 'vue3-summernote-editor';
import   'jquery'
import 'summernote/dist/summernote-bs5.css';

console.log("SummernoteEditor", SummernoteEditor.props);
    const myValue = ref("Hello World");
    
        function summernoteChange(newValue) {
          console.log("summernoteChange", newValue);
       }
        function summernoteImageLinkInsert(...args) {
          console.log("summernoteImageLinkInsert()", args);
      }
  
</script>

<template>
  <div>
    <SummernoteEditor
      v-model="myValue"
      @update:modelValue="summernoteChange($event)"
      @summernoteImageLinkInsert="summernoteImageLinkInsert"
    />
   
  </div>
</template>
