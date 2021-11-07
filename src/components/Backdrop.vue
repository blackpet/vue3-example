<script setup lang="ts">
import {ref, watch} from 'vue';

const opened = ref(false)

watch(opened, (_opened, _) => {
  _opened ? freezeBackground() : unfreezeBackground()
})

function open() {
  opened.value = true
}

function close() {
  opened.value = false;
}
function freezeBackground() {
  console.log('freezeBackground', document.body.classList)
  document.body.classList.add('freeze-body');

}
function unfreezeBackground() {
  document.body.classList.remove('freeze-body');
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <div v-if="opened" class="wrapper">
    <div class="backdrop"></div>
    <slot>
      <div class="relative bg-white rounded-lg shadow-xl text-center px-8 py-4">
        <button @click="close">close</button>
      </div>
    </slot>
  </div>
</template>

<style scoped>
.wrapper {@apply fixed z-40 inset-0 grid place-content-center;}
.backdrop {@apply absolute inset-0 opacity-50 bg-gray-900 h-full w-full;}
</style>
