<template>
  <section id="validation-section">
    <!-- <div class="container-fluid"> -->
    <!-- <transition
      appear
      name="animatd-class"
      appear-active-class="animate__animated animate__fadeInDown"
    > -->
    <transition
      appear
      name="container-animation"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <div v-if="showForm" key="view1" class="container-fluid">
        <img
          id="visitors-v-logo"
          alt="Vue logo"
          src="./../assets/images/visitors-logo.jpg"
        />

        <form
          class="form-horizontal pt-2"
          id="validation-form"
          action="register-complete.html"
        >
          <legend class="register-text pb-2">{{ registermsg }}</legend>
          <transition-group
            appear
            name="list-formgroup"
            enter-active-class="animate__animated animate__fadeInDown"
            tag="div"
          >
            <FormField
              v-for="item of items"
              :key="item.id"
              :dataitem="item"
              @contentChanged="item.value = $event"
            >
            </FormField>
          </transition-group>
          <div class="">
            <button
              id="submit-register-button"
              type="submit"
              @click="checkForm"
              class="btn btn-danger mt-2"
            >
              Join Us
            </button>
            <!-- <button
              id="submit-register-button"
              type="button"
              @click="toggleForm"
              class="btn btn-danger mt-2"
            >
              Join Us
            </button> -->
          </div>
        </form>
        <footer class="pt-3 mb-4">© 2021 smc designs</footer>
      </div>

      <div v-else @click="toggleForm" key="view2" class="thankyou"></div>
    </transition>
  </section>
</template>

<script type="text/javascript" src="./../Scripts/formContainer.js"></script>
<style src="./../Styles/CSS/form-container.css"></style>

<!-- appear-active-class="animate__animated animate__bounceOutRight" -->

<!-- <h1 v-show="show1">An animated element</h1> -->

<!-- <button
              id="submit-register-button2"
              type="button"
              @click="show1 = !show1"
              class="btn btn-danger mt-2"
            >
              Join Us
            </button> -->

<!-- <button
            id="submit-register-button"
            type="submit"
            @click="checkForm"
            class="btn btn-danger mt-2"
          >
            Join Us
          </button> -->
<!-- <p
              v-show="show1"
              v-for="item of items"
              :key="item.id"
              :dataitem="item"
              @contentChanged="item.value = $event"
            >
              {{ item.label }}
            </p> -->
