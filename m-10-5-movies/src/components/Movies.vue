<template>
  <div class="movies-display">
    <div v-show="!emptySearch">
      <!-- <div class="movies"> -->
      <transition-group
        enter-active-class="animate__animated animate__bounceInLeft animate__slow"
        leave-to-class="animate__animated animate__bounceOutDown  animate__slow"
        tag="div"
        class="movies"
      >
        <div v-for="movie in showMovies" :key="movie.id" class="movie">
          <div class="movie-header">
            <p class="movie-title">{{ movie.title }}</p>

            <p class="movie-available">Available: {{ movie.available }}</p>
          </div>

          <div class="movie-description">
            {{ movie.description }}
          </div>
        </div>
      </transition-group>
      <!-- </div> -->
    </div>

    <transition
      name="container-toast-animation"
      enter-active-class="animate__animated animate__bounceInUp animate__slow"
      mode="out-in"
    >
      <div v-show="emptySearch" class="alert-banner">
        Oops, no movie title matches your search
      </div>
    </transition>
  </div>
</template>

<script>
// leave-active-class="animate__animated animate__fadeOut"
import Vuex from 'vuex'
export default {
  name: 'Movies',
  computed: {
    ...Vuex.mapGetters({
      showMovies: 'filteredMovies',
      emptySearch: 'getEmptySearch'
    })
  }
}
</script>

<style src="./../Styles/CSS/movies.css" scoped></style>
