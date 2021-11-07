<script setup lang="ts">
import Backdrop from './components/Backdrop.vue';
import Modal from './components/Modal.vue';
import {ref} from 'vue';

const backdrop1 = ref(null)
const backdrop2 = ref(null)
const modal1 = ref(null)
const modal2 = ref(null)

function logClose() {
  console.log('modal is closed')
}

</script>

<template>
  <div class="container mx-auto">
    <div class="p-8 bg-green-200 flex gap-8 justify-center">
      <button @click="backdrop1.open">open backdrop</button>
      <button @click="backdrop2.open">open backdrop with body</button>
      <button @click="modal1.open">open modal</button>
      <button @click="modal2.open">open modal with body</button>
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

  <Backdrop ref="backdrop1" />
  <Backdrop ref="backdrop2">
    <div class="bg-red-500 text-white relative rounded-lg shadow-xl px-8 py-4">
      hi backdrop
    </div>
  </Backdrop>

  <Modal ref="modal1"
         title="modal example1"
         classes="w-[500px]"
         @close="logClose" />
  <Modal ref="modal2" title="modal example2"
         @close="logClose">
    body~ buddy~
  </Modal>
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
