<template>
  
  <!-- {{ $route.params.name }} -->
  <div class="flex">

    <div class="lg:px-8 px-2 py-2 bg-sidebar min-h-screen space-y-2">
      <nuxt-link :to="'/'" class="flex gap-4 hover:bg-sidebarActive">
        <img class="h-6" :src="index.story.content.homeIcon">
        <span class="lg:inline-block hidden"> home </span>
      </nuxt-link> 
      <nuxt-link :to="element.slug" class="flex gap-4 hover:bg-sidebarActive" v-for="element in data.data.stories" >
        <img class="h-6" :src="element.content.icon">
        <span class="lg:inline-block hidden">{{ element.name }}</span>
      </nuxt-link>
    </div>

    
    <div class="columns-2 md:columns-3 lg:columns-4 container mx-auto">
      <div v-for="image in icon.content.gallery"  class="pb-4">
          <div >
            <img :src="image.filename" alt="image" class="rounded-lg" >
          </div>
      </div>
    </div>

  </div>

</template>

<script setup>
const route = useRoute()
const storyblokApi = useStoryblokApi();

const { data } = await useAsyncData(
    "vue",
    async () =>
      await storyblokApi.get(`cdn/stories/`, {
        "version": "draft",
        "starts_with": "icons/",
      })
  );

  const { data: index } = await useFetch('https://api.storyblok.com/v2/cdn/stories/index?&version=published&token=uiHAQzxUn1tVtEmEZRrKZwtt')

  const icon = computed(() => {
    let activeIcon = {}
    data.value.data.stories.forEach(element => {
      if(element.slug===route.params.name){
        activeIcon = element
      }
    })
    return activeIcon
  })



</script>


<style scoped>
  .router-link-active{
    font-weight: 700;
    background-color: #e9e9eb;
  }
</style>