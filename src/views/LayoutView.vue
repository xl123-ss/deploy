<template>
  <!--  <header>-->
  <!--    <nav>-->
  <!--      <RouterLink to="/">Home</RouterLink>-->
  <!--      <RouterLink to="/todo">TodoList</RouterLink>-->
  <!--      <RouterLink to="/login">Login</RouterLink>-->
  <!--    </nav>-->
  <!--  </header>-->
  <NavigationBar> </NavigationBar>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<style scoped></style>
