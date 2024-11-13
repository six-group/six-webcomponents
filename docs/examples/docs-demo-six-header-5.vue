<template>
<div>

        <six-button id="search-toggle-attribute-btn">Toggle Search via Attribute</six-button>
        <six-button id="search-toggle-method-btn">Toggle Search via Method</six-button>

        <six-root>
          <six-header show-search slot="header" shift-content open-search="true" id="search-toggle-header">
            <six-search-field slot="search-field" placeholder="Search for something" clearable>
              <div></div>
            </six-search-field>
          </six-header>
        </six-root>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-header-5',
  mounted() { 
          const header = document.getElementById('search-toggle-header');

          const toggleAttributeBtn = document.getElementById('search-toggle-attribute-btn');
          toggleAttributeBtn.addEventListener('click', () => {
            const currentValue = header.attributes['open-search'].value === 'true';
            header.setAttribute('open-search', String(!currentValue));
          });

          const toggleMethodBtn = document.getElementById('search-toggle-method-btn');
          toggleMethodBtn.addEventListener('click', async () => {
            const openState = await header.getIsSearchOpen();
            await header.setSearchOpenState(!openState);
          });
         }
}
</script>