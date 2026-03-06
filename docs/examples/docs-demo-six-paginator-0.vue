<template>
<div>

        <div style="width: 100%; height: 200px; background-color: var(--six-color-web-rock-300)">
          <div             id="paginator-page-0"
            style="display: grid; align-items: center; justify-content: center; text-align: center; height: 100%"
          >
            <p>
              This is the content for page one! You can control the pages through the arrows, or by clicking directly on
              the number of the page you need.
            </p>
            <p>For all possible parameters, as well as events, check the docs for more details!</p>
          </div>
          <div id="paginator-page-1" style="display: none">This is page 2</div>
          <div id="paginator-page-2" style="display: none">This is page 3</div>
          <div id="paginator-page-3" style="display: none">This is page 4</div>
          <div id="paginator-page-4" style="display: none">This is page 5</div>
        </div>
        <six-paginator id="paginator-basic" total-pages="5" total-results="20"></six-paginator>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-paginator-0',
  mounted() { 
          const paginatorBasic = document.getElementById('paginator-basic');
          const contentPages = document.querySelectorAll('[id^="paginator-page-"]');

          paginatorBasic.addEventListener('six-paginator-page-changed', (event) => {
            contentPages.forEach((page) => {
              page.style.display = 'none';
            });
            contentPages[event.detail.idx].style.display = 'block';
          });
         }
}
</script>