<template>
<div>

        <div>
          <div style="width: 100%; height: 200px; background-color: var(--six-color-web-rock-300)">
            <div               id="paginator-page-0"
              style="display: grid; align-items: center; justify-content: center; text-align: center; height: 100%"
            >
              <p>
                This is the content for page one! You can control the pages through the arrows, or by clicking directly
                on the number of the page you need.
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
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-paginator-0',
  mounted() {  }
}
</script>