import ModalBootstrap from "@/components/ModalBootstrap.vue";
import InputBoxCurrency from "@/components/InputBoxCurrency.vue";
import Vue2Filters from "vue2-filters";

export default {
  name: "App",
  components: {
    ModalBootstrap,
    InputBoxCurrency,
  },
  data() {
    return {
      amount: "",
      modalTitle: "Mercuries to Caballés Converter",
      freddieMessage: "Por tí seré gaviota de tu bella mar",
      showModalBootstrap: true,
    };
  },
  filters: {
    caballes(cabs) {
      return (cabs * 1.23).toFixed(2);
    },
    mercs(mcs) {
      return (mcs * 1).toFixed(2);
    },
  },

  methods: {
    toggleModalBootstrap() {
      this.showModalBootstrap = !this.showModalBootstrap;
    },
  },
  mixins: [Vue2Filters.mixin],
};
