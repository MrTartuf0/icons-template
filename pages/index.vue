<template>


<div v-if="pending" class="w-screen h-screen bg-black flex items-center justify-center text-white text-9xl">
    Loading ...
</div>

<div v-else class="py-40 text-white flex flex-col items-center justify-center bg-cover bg-[url('https://calltoidea.com/application/images/bg-home.jpg')]">
    <div>
        <img class="h-72" :src="index.story.content.logo" alt="logo">
    </div>
    <p class="pt-4">{{ index.story.content.title }}</p>
    <div class="pt-12 text-xs flex items-end">
        <span>{{ index.story.content.description }}</span>
    </div>
</div>

<div class=" max-w-7xl mx-auto py-20 px-7 flex flex-wrap ">
    <nuxt-link :to="`icons/${story.slug}`" v-for="story in icons.stories" class="p-4 flex flex-col items-center">
        {{ story.name }}
        <img :src="story.content.icon" alt="icon">
    </nuxt-link> 
</div>

</template>
  
  
<script setup>
  const baseUrl = 'https://api.storyblok.com/v2/cdn/stories/'
  const version = '&version=published'
  const token = '&token=uiHAQzxUn1tVtEmEZRrKZwtt'

  const { pending , data: icons } = useLazyFetch(`${baseUrl}?starts_with=icons${version+token}`)
  const { data: index } = await useFetch(`${baseUrl}index?${version+token}`)

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

