<template>
  <div class="summernote" id="summernote">Hello Summernote</div>
  <button @click="getContent">Get Summernote Content</button> 
</template>

<script setup>
onMounted(() => {
  $(document).ready(function() {
    $('#summernote').summernote({
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
      styleTags: [
    'p',
        { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
        'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
	],
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['fontNames', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['link', 'picture', 'table', 'hr']],
        ['view', ['fullscreen', 'codeview', 'help']],
      ]
    });
    });
})
  const getContent = () => {
    const content = $('#summernote').summernote('code');
    console.log(content);
  }
</script>

<style>
  .btn-default {
    background: linear-gradient(134deg, #2400FF 0%, #EB6F0E 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>