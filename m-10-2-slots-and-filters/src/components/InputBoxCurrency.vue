<template>
  <div>
    <input
      type="number"
      step="0.01"
      :value="amountprop"
      @input="changeOfAmount"
    />
  </div>
</template>

<script type="text/javascript" src="@/Scripts/inputBoxCurrency.js"></script>
<style src="@/Styles/CSS/input-box-currency.css"></style>
