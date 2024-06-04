<template>
<div>

        <six-root>
          <six-header show-search slot="header" shift-content>
            <img               slot="logo"
              class="custom-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            >
          </six-header>
          <section slot="main"></section>
        </six-root>
        
      
</div>
</template>
<style>

          .custom-logo {
            overflow: visible;
            height: 20px;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-header-2',
  mounted() {  }
}
</script>