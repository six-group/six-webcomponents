<template>
<div>

        <six-file-upload id="six-file-upload-success-id"></six-file-upload>
        <six-file-list id="six-file-list"> </six-file-list>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-file-upload-0',
  mounted() { 
          const fileUpload = document.getElementById('six-file-upload-success-id');
          const fileList = document.getElementById('six-file-list');
          let counter = 0;

          fileUpload.addEventListener('six-file-upload-success', ({ detail }) => {
            // Since multiple is by default false, we know the array contains only one element
            const file = detail.files[0];

            const item = Object.assign(document.createElement('six-file-list-item'), {
              id: String(counter++),
              name: file.name,
              size: file.size,
              date: new Date().toLocaleDateString(),
            });

            item.addEventListener('six-file-list-item-remove', ({ detail }) => {
              const childToRemove = fileList.querySelector(`[name="${detail.name}"]`);
              fileList.removeChild(childToRemove);
            });

            item.addEventListener('six-file-list-item-download', ({ detail }) => {
              alert(`download file ${detail.name}`);
            });

            fileList.append(item);
          });

          const showEvent = ({ type, detail }) => alert(`[ ${type} ] ${detail.reason}`);
          fileUpload.addEventListener('six-file-upload-failure', showEvent);
         }
}
</script>