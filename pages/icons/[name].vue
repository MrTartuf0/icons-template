<template>
  
  <div class="bg-lightGray absolute w-full">


    <div class="bg-white">
      <div class="pt-20 pb-28 max-w-md mx-auto text-center">
        <img :src="data.content.icon" alt="icon" class="mx-auto py-5 box-content">
        <p class="font-sora pt-2 pb-3 font-semibold text-3xl">{{ data.content.title }}</p>
        <p class="text-darkBlue/50 text-sm ">{{ data.content.description }}</p>
      </div>
    </div>
      
    <div class="columns-2 md:columns-3 lp:columns-5 lg:columns-4 px-14 relative bottom-10 gap-8">
      <div v-for="image,index in data.content.gallery"  class="mb-8 border-8 border-white" @click="openModal(index)">
          <nuxt-img provider="storyblok" loading="lazy" :src="image?.filename ?? '#'" alt="image" class="bg-white w-full border border-innerShadow" />
      </div>
    </div>

  </div>

  <div v-show="showModal" class="w-full h-full fixed flex items-center bg-darkBlue/50" @click="closeModal()">
    <div class="flex w-full" @click.stop="">
      <button class="bg-white" @click="previousImage()">Immagine Precendente</button>
      <div class="max-w-3xl w-full relative mx-auto border-15 border-white">
        <nuxt-img provider="storyblok" loading="lazy" :src="data.content.gallery[selectedImage]?.filename ?? '#'" alt="image" class="w-full border border-innerShadow bg-white" />
      </div>
      <button class="bg-white" @click="nextImage()">Immagine Successiva</button>
    </div>
  </div>

</template>

<script setup>
  const route = useRoute()
  const data = await useAsyncStoryblok(`icons/${route.params.name}`, { version: 'published' })

  const showModal = ref(false)
  const selectedImage = ref(0)

  function openModal(index){
    showModal.value = true
    selectedImage.value = index
    console.log(showModal.value);
    console.log(index);
  }
  function closeModal(){
    showModal.value = false
    console.log(showModal.value);
  }
  function previousImage(){
    if(selectedImage.value > 0)
      selectedImage.value--
  }
  function nextImage(){
    if(selectedImage.value < data.value.content.gallery.length)
      selectedImage.value++
  }

  document.onkeydown = (e) => {
    e = e || window.event
    if (e.key === "ArrowLeft") {
      previousImage()
    } 
    else if (e.key === "ArrowRight") {
      nextImage()
    }
    else if(e.key === "Escape"){
      closeModal()
    }
  };



</script>


