<template>

<!-- Schermata di caricamento -->
<!-- 
<div v-if="pending" class="w-screen h-screen bg-black flex items-center justify-center text-white text-9xl">
    Loading ...
</div> -->
<div class="w-full flex-col flex py-20 items-center bg-gradient-to-b from-topGradient">
    <img :src="index.content.logo" alt="" class="w-20">
    <img :src="index.content.title" alt="" class="w-64 pt-3 pb-1">
    <p class="font-medium text-darkBlue/50 text-sm ">{{ index.content.description }}</p>
</div>


<div class="max-w-6xl mx-auto lg:px-7 grid grid-cols-3 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 pb-48">
    <nuxt-link :to="`/icons/${story.slug}`" v-for="story in icons.stories" class="flex flex-col items-center pb-4 h-36 rounded-xl hover:border border-darkBlue/10 ">
        <div class="h-full grid items-center">
            <img :src="story.content.icon" alt="icon" class="">
        </div>
        <p class="text-sm">{{ story.content.title }}</p>
    </nuxt-link> 
</div>

<footer class="max-w-6xl mx-auto flex pb-8 pt-7 border-t border-darkBlue/10 text-xs text-darkBlue/50 justify-between">
    <div class="space-x-7">
        <nuxt-link class="font-semibold text-darkBlue">
            2022 CallToInspiration · Tutti i diriti riservati
        </nuxt-link>
        <nuxt-link class="font-medium">About CTI</nuxt-link>
        <a class="font-medium">Privacy</a>
    </div>
    <div class="flex">
        <p>by</p>
        <img src="#" alt="profile picture">
        <p class="font-medium">Alexis Hill</p>
    </div>
</footer>

</template>
  
  
<script setup>
  const baseUrl = 'https://api.storyblok.com/v2/cdn/stories/'
  const token = '&token=uiHAQzxUn1tVtEmEZRrKZwtt'
  const version = '&version=published'

  const { data: icons } = await useFetch(`${baseUrl}?starts_with=icons${version+token}&per_page=100`)
  const index = await useAsyncStoryblok('index', { version: 'published' })
//   const prova = await useStoryblok('icons/', { version: 'published' , starts_with: 'icons/' })
//   console.log(prova);
//   const story = await useAsyncStoryblok('home', { version: 'published' })

//   const home = await useStoryblok("index", { version: "published" });
//   const icons = await useStoryblok("", { "version": "published", "starts_with": "icons/" , "cv": 1676039583 });
//   const { data: icons2 } = await useFetch('/api/count')


//   const stories = ref(null);

//   const storyblokApi = useStoryblokApi();
  

//   const { data } = await useAsyncData(
//     "vue",
//     async () =>
//       await storyblokApi.get(`cdn/stories/`, {
//         "version": "published",
//         "starts_with": "icons/",
//       })
//   );


//   const {data} = await useAsyncData(
//     "vue",
//     async () =>
//       await storyblokApi.get(`cdn/stories/index`, {
//         "version": "published",
//       })
//   );
//   console.log(otherData.data);

  
//   stories.value = data.value.data.stories;

  </script>

