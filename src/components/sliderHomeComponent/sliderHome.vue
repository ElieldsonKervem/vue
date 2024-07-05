<template>
  <div id="slider">
    <h3 class='text-light text' :class="{ fade: isTransitioning }">{{ mensagem }}</h3>
    <h3 class='text-light' :class="{ fade: isTransitioning }">
      {{ commentName }}
      <img :src="srlImgSlide" class="circular--square" :class="{ fade: isTransitioning }" alt="Slide Image">
    </h3>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'SliderComponent',
  setup() {
    const mensagens = [
      "Boost your productivity! Start your tasks now.",
      "Boost your projects! Start your tasks now."
    ];

    const commentNames = [
      "John Doe",
      "Jane Smith"
    ];

    const listurlImgs = [
      "/imgs/pexels-photo-2218786.jpeg",
      "/imgs/pexels-photo-1239291.jpeg"
    ];

    const mensagem = ref(mensagens[0]);
    const commentName = ref(commentNames[0]);
    const srlImgSlide = ref(listurlImgs[0]);
    const isTransitioning = ref(false);
    let currentIndex = 0;

    const updateMessage = () => {
      isTransitioning.value = true;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % mensagens.length;
        mensagem.value = mensagens[currentIndex];
        commentName.value = commentNames[currentIndex];
        srlImgSlide.value = listurlImgs[currentIndex];
        isTransitioning.value = false;
      }, 1000); // Tempo da transição
    };

    onMounted(() => {
      setInterval(updateMessage, 9000);
    });

    return {
      mensagem,
      commentName,
      srlImgSlide,
      isTransitioning
    };
  }
};
</script>

<style scoped>
.circular--square { 
  border-radius: 50%; 
  height: 5rem;
  width: 5rem;
  margin-left: 3rem;
}

#slider {
  text-align: center;
}

.fade {
  transition: all 1s ease;
  opacity: 0;
}

h3:not(.fade) {
  opacity: 1;
}

img:not(.fade) {
  opacity: 1;
}
</style>
