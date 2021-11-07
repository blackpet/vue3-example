<script setup lang="ts">
import Backdrop from './components/Backdrop.vue';
import {ref} from 'vue';

const modal1 = ref(null)

</script>

<template>
  <div class="container mx-auto">
    <div class="p-8 bg-green-200 flex gap-8 justify-center">
      <button @click="modal1.open">open modal</button>
      <button @click="modal1.close">close modal</button>
    </div>

    <div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
      <div class="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores nihil ratione suscipit? Architecto at autem deserunt dolor enim esse eveniet facere fugiat odit quia quod sed vel vero, voluptatibus!</div>
    </div>
  </div>

  <Backdrop ref="modal1" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
