export default {
  name: "input-currency",
  components: {},
  props: ["amountprop"],
  data() {
    return {
      amount: "1234",

      showModalBootstrap: true,
    };
  },
  methods: {
    changeOfAmount(event) {
      let value = event.target.value;
      if (String(value).length <= 8) {
        this.amount = value;
        this.$emit("amountHasChangedEvent", this.amount);
      }
      this.$forceUpdate();
    },
  },
  mixins: [],
};
