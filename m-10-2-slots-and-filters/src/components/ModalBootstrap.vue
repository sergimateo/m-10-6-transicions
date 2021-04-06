<template>
  <div class="modal" id="m-show-it" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <slot name="modalHeader"></slot>
        <slot name="modalBody"></slot>
        <slot name="modalFooter"></slot>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script type="text/javascript" src="@/Scripts/modalBootstrap.js"></script>
<style src="@/Styles/CSS/modal-bootstrap.css"></style>
