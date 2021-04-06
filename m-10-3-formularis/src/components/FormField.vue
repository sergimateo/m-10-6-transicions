<template>
  <div>
    <div class="form-row">
      <div class="form-group col-lg mb-1">
        <label :class="dataitem.labelclass" :for="dataitem.inputidtag">
          {{ dataitem.label }}
        </label>
        <div class="col">
          <input
            :id="dataitem.inputidtag"
            :name="dataitem.idtag"
            :type="dataitem.type"
            :placeholder="dataitem.placeholder"
            :class="dataitem.inputclass"
            @input="fieldValidate"
            :value="dataitem.value"
          />
          <div class="help-block" :style="dataitem.showerror" id="error-text">
            {{ dataitem.errortext }}
          </div>
        </div>
      </div>
    </div>
    <ConfirmPwdField
      v-if="dataitem.inputidtag === 'password-input'"
      :key="confirmpwditem.id"
      :dataconfirmpwditem="confirmpwditem"
      @pwdContentChanged="confirmpwditem.value = $event"
    >
    </ConfirmPwdField>
  </div>
</template>

<script type="text/javascript" src="./../Scripts/formField.js"></script>
<style src="./../Styles/CSS/form-field.css"></style>

<!-- </div>
:value="dataitem.value"

    <ConfirmPwdField
      v-if="dataitem.inputidtag === 'password-input'"
      :key="confirmpwditem.id"
      :dataconfirmpwditem="confirmpwditem"
    >
    </ConfirmPwdField> -->

<!-- <div v-if="dataitem.inputidtag === 'password-input'">
          <ConfirmPwdField
            v-for="item of confirmpwditems"
            :key="item.id"
            :dataconfirmpwditem="item"
          >
          </ConfirmPwdField>

          {{ cosita }}
        </div> -->
