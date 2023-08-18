<template>
<div class="demo my-app">

        <six-file-upload id="six-file-upload-success-id-2" multiple></six-file-upload>
        <six-file-list id="six-file-list-2"> </six-file-list>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-file-upload-110',
  mounted() { 
          const fileUpload = document.getElementById('six-file-upload-success-id-2');
          const fileList = document.getElementById('six-file-list-2');
          let counter = 0;

          fileUpload.addEventListener('six-file-upload-success', ({ detail }) => {
            const files = detail.files;

            for (const file of files) {
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
            }
          });

          const showEvent = ({ type, detail }) => alert(`[ ${type} ] ${detail.reason}`);
          fileUpload.addEventListener('six-file-upload-failure', showEvent);
         }
}
</script>