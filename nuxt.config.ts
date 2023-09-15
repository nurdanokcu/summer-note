// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css' },
      {rel:'stylesheet', href:"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js' }
    ],
  },
  },
})