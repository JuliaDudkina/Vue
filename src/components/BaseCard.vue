<template>
  <div>
    <!-- to not render a certain el if it does not have content-->
    <header v-if="$slots.header">
      <slot name="header">
<!--        <h2>The Default</h2>-->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard"
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
</style>