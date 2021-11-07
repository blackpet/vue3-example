<script setup lang="ts">
import Backdrop from './Backdrop.vue';
import {ref} from 'vue';

const props = defineProps<{
  title: string
  classes?: string
}>()
const emit = defineEmits(['close'])

const backdrop = ref(null)
const opened = ref(false)
const param = ref<any>()

function open(event, _param = undefined) {
  let p = _param;
  if (event instanceof MouseEvent) {
    event.stopPropagation();
  } else if (event && !_param) {
    p = event;
  }

  param.value = p;
  opened.value = true;
  backdrop.value.open();
}

function close() {
  opened.value = false;
  backdrop.value.close();
  emit('close');
}

defineExpose({
  open,
  close,
})
</script>

<template>
<Backdrop ref="backdrop">
  <div :class="'modal ' + props.classes">
    <div class="h-8 py-2 pl-4 pr-12 text-center text-xl sm:text-2xl font-medium">
      {{ props.title }}
    </div>
    <div class="absolute right-0 top-0 p-2 cursor-pointer"
         @click="close">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
    <div class="flex-1 overflow-y-auto p-4">
      <slot :param="param"/>
    </div>
  </div>
</Backdrop>
</template>

<style scoped>
.modal {@apply relative max-h-[90vh] flex flex-col bg-white rounded-lg shadow-xl}
</style>
