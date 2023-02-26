<template>
  <div class="pt-20 pb-28 max-w-sm mx-auto text-center">
    <img :src="data.content.icon" alt="icon" class="mx-auto py-5 box-content">
    <p class="font-sora pt-2 pb-3 font-semibold text-3xl">{{ data.content.title }}</p>
    <p class="text-darkBlue/50 text-sm ">{{ data.content.description }}</p>
  </div>


  <!-- <div class="flex">

    <div class="lg:px-8 px-2 py-2 bg-sidebar min-h-screen space-y-2">
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

  </div> -->

</template>

<script setup>
  const route = useRoute()

  const data = await useAsyncStoryblok(`icons/${route.params.name}`, { version: 'published' })

  // const icon = computed(() => {
  //   let activeIcon = {}
  //   data.value.data.stories.forEach(element => {
  //     if(element.slug===route.params.name){
  //       activeIcon = element
  //     }
  //   })
  //   return activeIcon
  // })



</script>

