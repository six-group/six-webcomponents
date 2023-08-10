<template>
<div class="demo my-app">

        <div class="tooltip-placement-example">
          <div class="tooltip-placement-example-row">
            <six-tooltip content="top-start" placement="top-start">
              <six-button></six-button>
            </six-tooltip>

            <six-tooltip content="top" placement="top">
              <six-button></six-button>
            </six-tooltip>

            <six-tooltip content="top-end" placement="top-end">
              <six-button></six-button>
            </six-tooltip>
          </div>

          <div class="tooltip-placement-example-row">
            <six-tooltip content="left-start" placement="left-start">
              <six-button></six-button>
            </six-tooltip>

            <six-tooltip content="right-start" placement="right-start" style="margin-left: 400px">
              <six-button></six-button>
            </six-tooltip>
          </div>

          <div class="tooltip-placement-example-row">
            <six-tooltip content="left" placement="left">
              <six-button></six-button>
            </six-tooltip>

            <six-tooltip content="right" placement="right">
              <six-button></six-button>
            </six-tooltip>
          </div>

          <div class="tooltip-placement-example-row">
            <six-tooltip content="left-end" placement="left-end">
              <six-button></six-button>
            </six-tooltip>

            <six-tooltip content="right-end" placement="right-end">
              <six-button></six-button>
            </six-tooltip>
          </div>

          <div class="tooltip-placement-example-row">
            <six-tooltip content="bottom-start" placement="bottom-start">
              <six-button></six-button>
            </six-tooltip>

            <six-tooltip content="bottom" placement="bottom">
              <six-button></six-button>
            </six-tooltip>

            <six-tooltip content="bottom-end" placement="bottom-end">
              <six-button></six-button>
            </six-tooltip>
          </div>
        </div>

        
      
</div>
</template>
<style>

          .tooltip-placement-example {
            width: 250px;
          }

          .tooltip-placement-example-row::after {
            content: '';
            display: table;
            clear: both;
          }

          .tooltip-placement-example six-button {
            float: left;
            width: 2.5rem;
            margin-right: 0.25rem;
            margin-bottom: 0.25rem;
          }

          .tooltip-placement-example [placement='top-start'] six-button,
          .tooltip-placement-example [placement='bottom-start'] six-button {
            margin-left: calc(40px + 0.25rem);
          }

          .tooltip-placement-example [placement^='right'] six-button {
            margin-left: calc((40px * 3) + (0.25rem * 3));
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-tooltip-319',
  mounted() {  }
}
</script>