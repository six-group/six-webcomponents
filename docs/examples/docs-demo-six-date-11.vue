<template>
<div>

        <six-date label="Date with help text" help-text="Select your preferred date"></six-date>
        <six-date label="Date with error text" error-text="The date entered is invalid" invalid></six-date>
        <six-date           label="Invalid date example"
          error-text="You can only enter dates starting from 01/01/2025"
          min="2025-01-01"
          max="2025-12-31"
          invalid
        ></six-date>
        <six-date label="Help text slot example">
          <div slot="help-text">This help text is rendered via the <strong>slot</strong>.</div>
        </six-date>
        <six-date label="Error text slot example" invalid>
          <div slot="error-text">This error text is rendered via the <strong>slot</strong>.</div>
        </six-date>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-date-11',
  mounted() {  }
}
</script>