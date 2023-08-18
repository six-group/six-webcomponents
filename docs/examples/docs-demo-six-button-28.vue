<template>
<div class="demo my-app">

        <six-button size="small">
          
          <span slot="prefix"><six-icon size="xSmall">settings</six-icon></span>
          Settings
        </six-button>

        <six-button size="small">
          <span slot="suffix"><six-icon size="xSmall">refresh</six-icon></span>
          Refresh
        </six-button>

        <six-button size="small">
          <span slot="prefix"><six-icon size="xSmall">settings</six-icon></span>
          <span slot="suffix"><six-icon size="xSmall">refresh</six-icon></span>
          Open
        </six-button>

        <br><br>

        <six-button>
          <span slot="prefix"><six-icon size="small">settings</six-icon></span>
          Settings
        </six-button>

        <six-button>
          <span slot="suffix"><six-icon size="small">refresh</six-icon></span>
          Refresh
        </six-button>

        <six-button>
          <span slot="prefix"><six-icon size="small">settings</six-icon></span>
          <span slot="suffix"><six-icon size="small">refresh</six-icon></span>
          Open
        </six-button>

        <br><br>

        <six-button size="large">
          <span slot="prefix"><six-icon size="medium">settings</six-icon></span>
          Settings
        </six-button>

        <six-button size="large">
          <span slot="suffix"><six-icon size="medium">refresh</six-icon></span>
          Refresh
        </six-button>

        <six-button size="large">
          <span slot="prefix"><six-icon size="medium">settings</six-icon></span>
          <span slot="suffix"><six-icon size="medium">refresh</six-icon></span>
          Open
        </six-button>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-button-28',
  mounted() {  }
}
</script>