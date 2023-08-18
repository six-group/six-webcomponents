<template>
<div class="demo my-app">

        <div class="avatar-group">
          <six-avatar             id="cat1"
            image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
          ></six-avatar>
          <six-avatar             image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
          ></six-avatar>
          <six-avatar             image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
          ></six-avatar>
          <six-avatar             image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
          ></six-avatar>
        </div>

        
      
</div>
</template>
<style>

          .avatar-group six-avatar:not(:first-of-type) {
            margin-left: -1rem;
          }

          .avatar-group six-avatar::part(base) {
            border: solid 2px white;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-avatar-12',
  mounted() {  }
}
</script>