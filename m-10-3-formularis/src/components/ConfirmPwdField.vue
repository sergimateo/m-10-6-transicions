<template>
  <div class="form-row">
    <div class="form-group col-lg mb-1">
      <label
        :class="dataconfirmpwditem.labelclass"
        :for="dataconfirmpwditem.inputidtag"
      >
        {{ dataconfirmpwditem.label }}
      </label>
      <div class="col">
        <input
          :id="dataconfirmpwditem.inputidtag"
          :name="dataconfirmpwditem.idtag"
          :type="dataconfirmpwditem.type"
          :placeholder="dataconfirmpwditem.placeholder"
          :class="dataconfirmpwditem.inputclass"
          @input="confirmPwd"
          :value="dataconfirmpwditem.value"
        />
        <span
          class="help-block"
          :style="dataconfirmpwditem.showerror"
          id="city-error"
        >
          {{ dataconfirmpwditem.errortext }}</span
        >
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./../Scripts/confirmPwdField.js"></script>
<style src="./../Styles/CSS/confirm-pwd-field.css"></style>
