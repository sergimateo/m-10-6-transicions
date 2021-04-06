<template>
  <div id="app">
    <!-- <button @click="showModalBootstrap = !showModalBootstrap">
      Toggle render
    </button> -->
    <transition name="modal-fader">
      <div v-if="showModalBootstrap">
        <!-- <p>{{ freddieMessage }}</p> -->
        <ModalBootstrap>
          <template v-slot:modalHeader>
            <div class="modal-header">
              <h5 class="modal-title mx-auto">{{ modalTitle }}</h5>
            </div>
          </template>
          <template v-slot:modalBody>
            <div class="modal-body mx-auto">
              <div class="mx-auto" id="input-box">
                <InputBoxCurrency
                  :amountprop="amount"
                  @amountHasChangedEvent="amount = $event"
                ></InputBoxCurrency>
              </div>

              <p class="p-content mt-3">
                Exchange Mercuries
                {{
                  amount
                    | mercs
                    | currency("ℳ ", 2, {
                      thousandsSeparator: ",",
                      decimalSeparator: ".",
                    })
                }}
                to Caballés:
                {{
                  amount
                    | caballes
                    | currency(" ₵", 3, {
                      symbolOnLeft: false,
                      thousandsSeparator: ".",
                      decimalSeparator: "'",
                    })
                }}.
              </p>
            </div>
          </template>
          <template v-slot:modalFooter>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="toggleModalBootstrap"
              >
                Done
              </button>
            </div>
          </template>
        </ModalBootstrap>
      </div>
    </transition>
    <transition name="mercury-msg">
      <div
        v-if="!showModalBootstrap"
        @click="toggleModalBootstrap"
        class="seagull"
      >
        {{ freddieMessage }}
      </div>
    </transition>

    <!-- </transition> -->
    <!-- <div></div> -->
    <!-- <div v-else @click="toggleModalBootstrap" class="seagull">
      <transition name="mercuryIn">
        <div>
          {{ freddieMessage }}
        </div>
      </transition>
    </div> -->
    <!-- </transition> -->
    <!-- <div></div> -->
  </div>
</template>

<script type="text/javascript" src="../src/Scripts/app.js"></script>
<style src="../src/Styles/CSS/app.css" scoped></style>
