/* eslint-disable no-useless-escape */
import ConfirmPwdField from './../components/ConfirmPwdField'

export default {
  name: 'app-form-field',
  components: {
    ConfirmPwdField
  },
  props: ['dataitem'],
  data() {
    return {
      confirmpwditem: {
        id: 1,
        checkField: false,
        pwdtoconfirm: '',
        errortext: 'This field is required',
        inputidtag: 'repeat-password-input',
        inputclass: 'form-control form-control-sm',
        type: 'password',
        label: 'Confirm Password',
        labelclass: 'control-label mb-auto',
        placeholder: 'Confirm Password',
        showerror: 'visibility: visible;',
        value: ''
      }
    }
  },
  methods: {
    fieldValidate(event) {
      switch (this.dataitem.inputidtag) {
        case 'your-name-input':
          if (event.target.value === '') {
            this.invalidForm('This field is required')
          } else if (!this.validateName(event.target.value)) {
            this.invalidForm('Your name must have between 6 and 13 characters')
          } else {
            this.validForm()
          }
          this.updateContent(event.target.value)
          break
        case 'mobile-input':
          if (event.target.value === '') {
            this.invalidForm('This field is required')
          } else if (!this.validateMobile(event.target.value)) {
            this.invalidForm('Your phone number must have 9 digits')
          } else {
            this.validForm()
          }
          this.updateContent(event.target.value)
          break
        case 'postal-code-input':
          if (event.target.value === '') {
            this.invalidForm('This field is required')
          } else if (!this.validatePostalCode(event.target.value)) {
            this.invalidForm('Your Postal Code must have 5 digits')
          } else {
            this.validForm()
          }
          this.updateContent(event.target.value)
          break
        case 'email-input':
          if (event.target.value === '') {
            this.invalidForm('This field is required')
          } else if (!this.validateEmail(event.target.value)) {
            this.invalidForm('Please enter a valid email address')
          } else {
            this.validForm()
          }
          this.updateContent(event.target.value)
          break
        case 'password-input':
          if (event.target.value === '') {
            this.invalidForm('This field is required')
          } else if (!this.validatePassword(event.target.value)) {
            this.invalidForm(
              'Password needs to be 6 to 13 characters long, with at least one uppercase and one lowercase'
            )
          } else {
            this.dataitem.errortext = 'Ok'
            this.dataitem.showerror = 'visibility: hidden;'
          }
          this.updateContent(event.target.value)
          this.confirmpwditem.pwdtoconfirm = event.target.value
          break
        default:
          break
      }
    },
    //refactoring functions
    invalidForm(errtxt) {
      this.dataitem.errortext = errtxt
      this.dataitem.checkField = false
      this.dataitem.showerror = 'visibility: visible;'
    },
    validForm() {
      this.dataitem.errortext = 'Ok'
      this.dataitem.checkField = true
      this.dataitem.showerror = 'visibility: hidden;'
    },
    updateContent(val) {
      this.dataitem.value = val
      this.$emit('contentChanged', this.dataitem.value)
    },
    //RegEx test functions
    validateName(name) {
      let regex = /^(?=.*?[a-zA-Z\ñ\ç]).{6,13}$/
      return regex.test(name) ? true : false
    },
    validateMobile(number) {
      let regex = /^(?=.*?[0-9]).{9}$/
      return regex.test(number) ? true : false
    },
    validatePostalCode(number) {
      let regex = /^(?=.*?[0-9]).{5}$/
      return regex.test(number) ? true : false
    },
    validateEmail(email) {
      let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      return regex.test(email) ? true : false
    },
    validatePassword(password) {
      let regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,13}$/
      return regex.test(password) ? true : false
    }
  }
}
