<template>
  <div id="app">
    <div class="banner"></div>
    <div class="header">
      <SearchBar />
      <AvailableRadioButtons />
    </div>
    <transition
      appear
      name="container-app-animation"
      enter-active-class="animate__animated animate__fadeIn animate__slow"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <div class="items-box">
        <Movies />
      </div>
    </transition>
  </div>
</template>

<script>
import AvailableRadioButtons from './components/AvailableRadioButtons.vue'
import Movies from './components/Movies.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',

  components: {
    AvailableRadioButtons,
    Movies,
    SearchBar
  }
}
</script>

<style src="./Styles/CSS/app.css"></style>
