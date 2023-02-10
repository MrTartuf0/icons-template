<template>


<div class="py-40 text-white flex flex-col items-center justify-center bg-cover bg-[url('https://calltoidea.com/application/images/bg-home.jpg')]">
    <div>
        <img class="h-72" src="https://calltoidea.com/application/images//logo-calltoidea-home.png" alt="logo">
    </div>
    <p class="pt-4">Light up your imagination!</p>
    <div class="pt-12 text-xs flex items-end">
        <span>If you like Calltoidea, let's try</span>
        <img class="h-6 px-2" src="https://calltoidea.com/application/images//banner/favinks/logo-home.png">
        <span>the first community for link lovers.</span>
    </div>
</div>

<div class=" max-w-7xl mx-auto py-20 px-7 flex flex-wrap ">
    <nuxt-link :to="`icons/${story.slug}`" v-for="story in stories" class="p-4 flex flex-col items-center">
        {{ story.name }}
        <img :src="story.content.icon" alt="icon">
    </nuxt-link> 

</div>



</template>
  
  
<script setup>
  const route = useRoute()
  
  const stories = ref(null);

  const storyblokApi = useStoryblokApi();
  

  const { data } = await useAsyncData(
    "vue",
    async () =>
      await storyblokApi.get(`cdn/stories/`, {
        "version": "draft",
        "starts_with": "icons/",
      })
  );
  
  stories.value = data.value.data.stories;

  </script>