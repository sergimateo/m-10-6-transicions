import FormField from './../components/FormField'

export default {
  name: 'app-form-container',
  components: {
    FormField
  },
  data() {
    return {
      registermsg: 'v ole como mola',
      showForm: true,
      show1: true,
      falseForm: false,
      items: [
        {
          id: 1,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'your-name-input',
          inputclass: 'form-control form-control-sm',
          type: 'text',
          label: 'Your Name',
          labelclass: 'control-label mb-auto',
          placeholder: 'John Doe / Jane Doe',
          showerror: 'visibility: visible;',
          value: ''
        },
        {
          id: 2,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'mobile-input',
          inputclass: 'form-control form-control-sm',
          type: 'text',
          label: 'Mobile Phone Number',
          labelclass: 'control-label mb-auto',
          placeholder: '123456789',
          showerror: 'visibility: visible;',
          value: ''
        },
        {
          id: 3,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'postal-code-input',
          inputclass: 'form-control form-control-sm',
          type: 'text',
          label: 'Postal/Zip Code',
          labelclass: 'control-label mb-auto',
          placeholder: '08080',
          showerror: 'visibility: visible;',
          value: ''
        },
        {
          id: 4,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'email-input',
          inputclass: 'form-control form-control-sm',
          type: 'email',
          label: 'E-mail',
          labelclass: 'control-label mb-auto',
          placeholder: 'mail@domain.com',
          showerror: 'visibility: visible;',
          value: ''
        },
        {
          id: 5,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'password-input',
          inputclass: 'form-control form-control-sm',
          type: 'password',
          label: 'Password',
          labelclass: 'control-label mb-auto',
          placeholder: 'Password',
          showerror: 'visibility: visible;',
          value: ''
        }
      ]
    }
  },
  methods: {
    checkForm(event) {
      event.preventDefault()
      this.falseForm = false
      this.items.forEach(item => {
        if (!item.checkField) {
          this.falseForm = true
          console.log('holi')
        } else {
          console.log('true')
        }
      })
      if (!this.falseForm) {
        this.toggleForm()
      }
    },
    toggleForm() {
      this.showForm = !this.showForm
    }
  }
}
