<script>
import { defineComponent, ref } from 'vue';
import { SixInput } from '@six-group/ui-library-vue';

export default defineComponent({
  name: 'Input',
  components: {
    SixInput,
  },
  setup() {
    const inputEvent = ref('');
    const changeEvent = ref('');

    const handleInput = (ev) => {
      console.log('handleInput', ev.target.value);
      inputEvent.value = ev.target.value;
    };

    const handleChange = (ev) => {
      console.log('handleChange', ev.target.value);
      changeEvent.value = ev.detail.value;
    };

    return {
      inputEvent,
      changeEvent,
      handleInput,
      handleChange,
    };
  },
  data() {
    return {
      activeColor: 'red',
      fontSize: 30,
    };
  },
});
</script>

<style scoped>
.inputResult {
  color: green;
}
</style>

<template>
  <div>
    <SixInput @myInput="handleInput" @myChange="handleChange"> </SixInput>
    <div class="inputResult" :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      <p>Input Event: {{ inputEvent }}</p>
      <p>Change Event: {{ changeEvent }}</p>
    </div>
  </div>
</template>
