<template>
  <div class="container mx-auto mt-12 flex flex-col" dir="ltr">
    <f-divider title="Buttons" :logo-divider="false"/>
    <div class="grid grid-cols-8 gap-8 place-items-center font-light text-sm ">
      <div></div>
      <div class="font-bold font-[montserrat]">Primary</div>
      <div class="font-bold font-[montserrat]">Secondary</div>
      <div class="font-bold font-[montserrat]">Success</div>
      <div class="font-bold font-[montserrat]">Danger</div>
      <div class="font-bold font-[montserrat]">Info</div>
      <div class="font-bold font-[montserrat]">Warning</div>
      <div class="font-bold font-[montserrat]">Disabled</div>

      <div class="font-bold font-[montserrat]">Primary</div>
      <div>
        <base-g-button button-type="bg" color="primary">
          Primary
        </base-g-button>
      </div>
      <div>
        <base-g-button button-type="bg" color="secondary">
          Secondary
        </base-g-button>
      </div>
      <div>
        <base-g-button button-type="bg" color="success">
          Success
        </base-g-button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 danger transition-colors duration-200">
          Danger
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 info transition-colors duration-200">
          Info
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 warning transition-colors duration-200">
          Warning
        </button>
      </div>
      <div>
        <base-g-button button-type="bg" disabled >
          Disabled
        </base-g-button>
      </div>

      <div class="font-bold font-[montserrat]">Stroke</div>
      <div>
        <base-g-button button-type="outline" color="primary">
          Primary
        </base-g-button>
      </div>
      <div>
        <base-g-button button-type="outline" color="secondary">
          Secondary
        </base-g-button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 success-stroke transition-colors duration-200">
          Success
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 danger-stroke transition-colors duration-200">
          Danger
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 info-stroke transition-colors duration-200">
          Info
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 warning-stroke transition-colors duration-200">
          Warning
        </button>
      </div>
      <div>
        <base-g-button button-type="outline" disabled >
          Disabled
        </base-g-button>
      </div>

      <div class="font-bold font-[montserrat]">White</div>
      <div>
        <base-g-button button-type="white" color="primary" >
          Primary
        </base-g-button>
      </div>
      <div>
        <base-g-button button-type="white" color="secondary" >
          Secondary
        </base-g-button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 success-white transition-all duration-200">
          Success
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 danger-white transition-all duration-200">
          Danger
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 info-white transition-all duration-200">
          Info
        </button>
      </div>
      <div>
        <button class="rounded-xl px-4 py-2 warning-white transition-colors duration-200">
          Warning
        </button>
      </div>
      <div>
        <base-g-button button-type="white" disabled>
          Disabled
        </base-g-button>
      </div>

    </div>

    <f-divider title="Badges" :logo-divider="false" class="mt-12"/>
    <div class="grid grid-cols-6 gap-8 place-items-center font-light text-sm">
      <div>Primary</div>
      <div>Secondary</div>
      <div>Success</div>
      <div>Danger</div>
      <div>Info</div>
      <div>Warning</div>

      <div class="badge badge-primary badge-square">
        <span>10</span>
      </div>
      <div class="badge badge-secondary badge-square">
        <span>10</span>
      </div>
      <div class="badge badge-success badge-square">
        <span>10</span>
      </div>
      <div class="badge badge-danger badge-square">
        <span>10</span>
      </div>
      <div class="badge badge-info badge-square">
        <span>10</span>
      </div>
      <div class="badge badge-warning badge-square">
        <span>10</span>
      </div>

      <div class="badge badge-primary ">
        <span>+99</span>
      </div>
      <div class="badge badge-secondary ">
        <span>+99</span>
      </div>
      <div class="badge badge-success ">
        <span>+99</span>
      </div>
      <div class="badge badge-danger ">
        <span>+99</span>
      </div>
      <div class="badge badge-info ">
        <span>+99</span>
      </div>
      <div class="badge badge-warning ">
        <span>+99</span>
      </div>

    </div>

    <f-divider title="CheckBox & Toggle" :logo-divider="false" class="mt-12 "/>
    <div class="w-1/3 mx-auto grid grid-cols-3 gap-8 place-content-center">
      <div class="gap-2 flex items-center">
        <input v-model="check1" type="checkbox" name="unchecked" id="unchecked"
               class="form-checkbox checkbox-style rounded-sm outline-brandOrange focus:ring-brandOrange stroke-brandOrange border-2 w-4 h-4 border-[#CACACA] text-brandOrange cursor-pointer">
        <label for="unchecked" class="cursor-pointer font-[Montserrat] text-sm">{{
            check1 ? 'Checked' : 'UnChecked'
          }}</label>
      </div>
      <div class="gap-2 flex items-center">
        <input v-model="check2" type="checkbox" name="Checked" id="Checked"
               class="form-checkbox checkbox-style rounded-sm outline-brandOrange focus:ring-brandOrange stroke-brandOrange border-2 w-4 h-4 border-[#CACACA] text-brandOrange cursor-pointer">
        <label for="Checked" class="cursor-pointer font-[Montserrat] text-sm">{{
            check2 ? 'Checked' : 'UnChecked'
          }}</label>
      </div>
      <div class="gap-2 flex items-center">
        <input type="checkbox" name="Disabled" id="Disabled"
               class="form-checkbox border-transparent rounded-sm text-[#E9E9E9] w-4 h-4 relative flex items-center after:bg-[#B3B3B3] after:h-1 after:rounded-[1px] after:absolute after:inset-x-0.5 cursor-not-allowed"
               indeterminate disabled>
        <label for="Disabled" class="font-[Montserrat] text-sm">Disabled</label>
      </div>
      <div class="gap-2 flex items-center w-screen relative">
        <input type="checkbox" name="animated" id="animated" class="animated-checkbox">
        <label for="animated" class="font-[Montserrat] text-sm">Animated</label>
      </div>
    </div>
    <div class="w-1/3 mx-auto grid grid-cols-3 gap-8 place-content-center mt-8">
      <div class="w-max relative toggle flex items-center gap-2">
        <input v-model="toggle1" type="checkbox" name="toggle" id="toggle"
               class="form-checkbox opacity-0 peer absolute inset-0">
        <label for="toggle" class="flex w-14 h-6 bg-[#F0F0F0] rounded-full items-center relative before:absolute before:h-5 before:w-5 before:rounded-full before:bg-[#BABABA] before:left-1 cursor-pointer
                                peer-checked:toggle-checked peer-checked:bg-brandOrange peer-checked:before:bg-white peer-checked:before:translate-x-7 before:transition-transform before:duration-200"></label>
        <span class="font-[Montserrat]">{{ toggle1 ? 'On' : 'Off' }}</span>
      </div>
      <div class="w-max relative toggle flex items-center gap-2">
        <input v-model="toggle2" type="checkbox" name="toggle-on" id="toggle-on"
               class="form-checkbox opacity-0 peer absolute inset-0">
        <label for="toggle-on" class="flex w-14 h-6 bg-[#F0F0F0] rounded-full items-center relative before:absolute before:h-5 before:w-5 before:rounded-full before:bg-[#BABABA] before:left-1 cursor-pointer
                                peer-checked:toggle-checked peer-checked:bg-brandOrange peer-checked:before:bg-white peer-checked:before:translate-x-7 before:transition-transform before:duration-200"></label>
        <span class="font-[Montserrat]">{{ toggle2 ? 'On' : 'Off' }}</span>
      </div>
      <div class="w-max relative toggle flex items-center gap-2">
        <input type="checkbox" name="toggle-disabled" id="toggle-disabled"
               class="form-checkbox opacity-0 peer absolute inset-0" disabled>
        <label for="toggle-disabled" class="flex w-14 h-6 bg-[#F0F0F0] rounded-full items-center relative before:absolute before:h-5 before:w-5 before:rounded-full before:bg-[#BABABA] before:left-1 opacity-50 cursor-not-allowed
                                peer-checked:toggle-checked peer-checked:bg-brandOrange peer-checked:before:bg-white peer-checked:before:translate-x-7 before:transition-transform before:duration-200"></label>
        <span class="font-[Montserrat]">Disabled</span>
      </div>
    </div>

    <f-divider title="Inputs" :logo-divider="false" class="mt-12 "/>
    <div class="grid grid-cols-3 gap-4 place-items-center mb-12">
      <div class="w-full relative flex items-center">
        <input v-model="text" type="text"
               :class="['peer input',{'input-error':errorValidation},{'input-valid':successValidation}]" required>
        <label for="">name</label>
        <span>Enter the developer's name</span>
        <svg width="12" height="12" viewBox="0 0 12 12" class="icon-error" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.75" stroke="#F42020" stroke-width="0.5"/>
          <path
              d="M5.496 9V5.716H6.192V9H5.496ZM5.852 4.592C5.72667 4.592 5.61867 4.548 5.528 4.46C5.44 4.36933 5.396 4.26133 5.396 4.136C5.396 4.01067 5.44 3.90267 5.528 3.812C5.61867 3.72133 5.72667 3.676 5.852 3.676C5.93467 3.676 6.01067 3.69733 6.08 3.74C6.152 3.78267 6.20933 3.83867 6.252 3.908C6.29467 3.97467 6.316 4.05067 6.316 4.136C6.316 4.26133 6.27067 4.36933 6.18 4.46C6.08933 4.548 5.98 4.592 5.852 4.592Z"
              fill="#F42020"/>
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12" class="icon-success" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.75" fill="currentColor" stroke-width="0.5"/>
          <path
              d="M5.496 9V5.716H6.192V9H5.496ZM5.852 4.592C5.72667 4.592 5.61867 4.548 5.528 4.46C5.44 4.36933 5.396 4.26133 5.396 4.136C5.396 4.01067 5.44 3.90267 5.528 3.812C5.61867 3.72133 5.72667 3.676 5.852 3.676C5.93467 3.676 6.01067 3.69733 6.08 3.74C6.152 3.78267 6.20933 3.83867 6.252 3.908C6.29467 3.97467 6.316 4.05067 6.316 4.136C6.316 4.26133 6.27067 4.36933 6.18 4.46C6.08933 4.548 5.98 4.592 5.852 4.592Z"
              fill="white"/>
        </svg>
      </div>
      <div class="w-full relative flex items-center">
        <input type="text" :class="['peer disabled input']" disabled>
        <label for="">disabled</label>
      </div>
      <div class="w-full relative flex items-center">
        <input v-model="textRtl" type="text"
               :class="['peer rtl input',{'input-error':errorValidationRtl},{'input-valid':successValidationRtl}]"
               required>
        <label for="">نام و نام خانوادگی</label>
        <span>نام سازنده را وارد کنید</span>
        <svg width="12" height="12" viewBox="0 0 12 12" class="icon-error" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.75" stroke="#F42020" stroke-width="0.5"/>
          <path
              d="M5.496 9V5.716H6.192V9H5.496ZM5.852 4.592C5.72667 4.592 5.61867 4.548 5.528 4.46C5.44 4.36933 5.396 4.26133 5.396 4.136C5.396 4.01067 5.44 3.90267 5.528 3.812C5.61867 3.72133 5.72667 3.676 5.852 3.676C5.93467 3.676 6.01067 3.69733 6.08 3.74C6.152 3.78267 6.20933 3.83867 6.252 3.908C6.29467 3.97467 6.316 4.05067 6.316 4.136C6.316 4.26133 6.27067 4.36933 6.18 4.46C6.08933 4.548 5.98 4.592 5.852 4.592Z"
              fill="#F42020"/>
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12" class="icon-success" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.75" fill="currentColor" stroke-width="0.5"/>
          <path
              d="M5.496 9V5.716H6.192V9H5.496ZM5.852 4.592C5.72667 4.592 5.61867 4.548 5.528 4.46C5.44 4.36933 5.396 4.26133 5.396 4.136C5.396 4.01067 5.44 3.90267 5.528 3.812C5.61867 3.72133 5.72667 3.676 5.852 3.676C5.93467 3.676 6.01067 3.69733 6.08 3.74C6.152 3.78267 6.20933 3.83867 6.252 3.908C6.29467 3.97467 6.316 4.05067 6.316 4.136C6.316 4.26133 6.27067 4.36933 6.18 4.46C6.08933 4.548 5.98 4.592 5.852 4.592Z"
              fill="white"/>
        </svg>
      </div>
      <base-g-input label="شماره تلفن" place-holder="09xxxxxxxxx" required type="text"/>
      <input type="text" @keydown="checkInput" class="p-4 border rounded-lg" v-model="priceInput" @input="parseValue">
    </div>

    <div>
      <g-p-saffron-card />
    </div>

  </div>
</template>

<script setup lang="ts">
import FDivider from "~/components/base/FDivider.vue";


const check1 = ref(false);
const check2 = ref(true);
const toggle1 = ref(false);
const toggle2 = ref(true);
const text = ref('');
const textRtl = ref('');
const priceInput = ref('');
const errorValidation = computed(() => {
  return text.value.toLowerCase() !== 'sajjad' && text.value !== '';
});
const successValidation = computed(() => {
  return text.value.toLowerCase() === 'sajjad' && text.value !== '';
});
const errorValidationRtl = computed(() => {
  return textRtl.value.toLowerCase() !== 'سجاد' && textRtl.value !== '';
});
const successValidationRtl = computed(() => {
  return textRtl.value.toLowerCase() === 'سجاد' && textRtl.value !== '';
});

const checkInput = (event:any)=>{
  const evt = event;
  let key = evt.keyCode >= 96 ? evt.keyCode - 48 : evt.keyCode;
  let res = (/[0123456789,.]/.test(String.fromCharCode(key))) || key == 8 || key == 46 || key == 37 || key == 39 || key == 35 || key == 36 || key == 17 || key == 65;
  if(!res)
    evt.preventDefault();
}

const parseValue = ()=>{
  let pureValue = priceInput.value.replaceAll(',','');
  pureValue = pureValue == '' ? '0' : pureValue;
  priceInput.value = parseInt(pureValue).toLocaleString();
}

const showModal = ref(true);
</script>


<style lang="scss" scoped>

/* Buttons */
.primary {
  border-radius: 10px;
  background-color: var(--primary);

  &:hover {
    background-color: var(--primary-hover);
  }

  color: white;

  &-stroke {
    background-color: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);

    &:hover {
      border-color: var(--primary-hover);
      color: var(--primary-hover);
    }
  }

  &-white {
    background-color: white;
    color: var(--primary);
    box-shadow: 0 1px 4px 0 #A7A7A740;

    &:hover {
      box-shadow: none;
      background-color: color-mix(in srgb, var(--primary) 20%, transparent);
    }
  }
}

.secondary {
  border-radius: 10px;
  background-color: var(--secondary);

  &:hover {
    background-color: var(--secondary-hover);
  }

  color: var(--secondary-text);

  &-stroke {
    background-color: transparent;
    border: 1px solid var(--secondary);
    color: var(--secondary-text);

    &:hover {
      border-color: var(--secondary-hover);
    }
  }

  &-white {
    background-color: white;
    color: var(--secondary-text);
    box-shadow: 0px 1px 4px 0px #A7A7A740;

    &:hover {
      box-shadow: none;
      background-color: color-mix(in srgb, var(--secondary) 20%, transparent);
    }
  }
}

.success {
  border-radius: 10px;
  background-color: var(--success);

  &:hover {
    background-color: var(--success-hover);
  }

  color: white;

  &-stroke {
    background-color: transparent;
    border: 1px solid var(--success);
    color: var(--success);

    &:hover {
      border-color: var(--success-hover);
      color: var(--success-hover);
    }
  }

  &-white {
    background-color: white;
    color: var(--success);
    box-shadow: 0px 1px 4px 0px #A7A7A740;

    &:hover {
      box-shadow: none;
      background-color: color-mix(in srgb, var(--success) 20%, transparent);
    }
  }
}

.danger {
  border-radius: 10px;
  background-color: var(--danger);

  &:hover {
    background-color: var(--danger-hover);
  }

  color: white;

  &-stroke {
    background-color: transparent;
    border: 1px solid var(--danger);
    color: var(--danger);

    &:hover {
      border-color: var(--danger-hover);
      color: var(--danger-hover);
    }
  }

  &-white {
    background-color: white;
    color: var(--danger);
    box-shadow: 0px 1px 4px 0px #A7A7A740;

    &:hover {
      box-shadow: none;
      background-color: color-mix(in srgb, var(--danger) 20%, transparent);
    }
  }
}

.info {
  border-radius: 10px;
  background-color: var(--info);

  &:hover {
    background-color: var(--info-hover);
  }

  color: white;

  &-stroke {
    background-color: transparent;
    border: 1px solid var(--info);
    color: var(--info);

    &:hover {
      border-color: var(--info-hover);
      color: var(--info-hover);
    }
  }

  &-white {
    background-color: white;
    color: var(--info);
    box-shadow: 0px 1px 4px 0px #A7A7A740;

    &:hover {
      box-shadow: none;
      background-color: color-mix(in srgb, var(--info) 20%, transparent);
    }
  }
}

.warning {
  border-radius: 10px;
  background-color: var(--warning);

  &:hover {
    background-color: var(--warning-hover);
  }

  color: var(--warning-text);

  &-stroke {
    background-color: transparent;
    border: 1px solid var(--warning);

    &:hover {
      border-color: var(--warning-hover);
      color: var(--warning-text);
    }
  }

  &-white {
    background-color: white;
    color: var(--warning-text);
    box-shadow: 0px 1px 4px 0px #A7A7A740;

    &:hover {
      box-shadow: none;
      background-color: color-mix(in srgb, var(--warning) 20%, transparent);
    }
  }
}

.disabled {
  border-radius: 10px;
  background-color: var(--disabled);
  color: var(--disabled-text);
  cursor: not-allowed;

  &-stroke {
    background-color: transparent;
    border: 1px solid var(--disabled);
    color: var(--disabled-text);
    cursor: not-allowed;
  }

  &-white {
    background-color: white;
    color: var(--disabled-text);
    cursor: not-allowed;
  }
}

/* Badges */
.badge {
  @apply grid place-items-center rounded-full px-2;
  & > * {
    font-family: "Cascadia Mono" !important;
  }

  font-size: 12px;

  &-square {
    padding: 0;
    width: 20px;
    height: 20px;
  }

  &-primary {
    background-color: var(--primary);
    color: var(--primary-text)
  }

  &-danger {
    background-color: var(--danger);
    color: var(--danger-text)
  }

  &-secondary {
    background-color: var(--secondary);
    color: var(--secondary-text)
  }

  &-success {
    background-color: var(--success);
    color: var(--success-text)
  }

  &-info {
    background-color: var(--info);
    color: var(--info-text)
  }

  &-warning {
    background-color: var(--warning);
    color: var(--warning-text)
  }
}

/* CheckBox And Toggle */
.checkbox-style {
  border-radius: 3px;
  accent-color: var(--primary);
  outline: none;

  &:checked {
    box-shadow: 0 0 5px 0 #F0462380
  }
}

.animated-checkbox {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;

  border: 1px solid var(--secondary);
  outline: none;
  stroke: none;
  width: 20px;
  height: 20px;
  background-color: white;
  accent-color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:checked {
    border-color: var(--primary);
    background-color: var(--primary);
  }

  &:before {
    position: absolute;
    background-color: var(--primary-text);
    content: '';
    width: 0;
    height: 3px;
    border-radius: 5px;
    transform: translate(7px, 12px) rotate(-45deg);
    transform-origin: left;
    transition: all 0.3s ease;
    transition-delay: 0ms;
  }

  &:after {
    position: absolute;
    background-color: var(--primary-text);
    content: '';
    width: 0;
    height: 3px;
    border-radius: 5px;
    transform: translate(3px, 6px) rotate(45deg);
    transform-origin: left;
    transition: all 0.3s ease;
    transition-delay: 170ms;
  }

  &:checked:before {
    width: 12px;
    transition-delay: 170ms;
  }

  &:checked:after {
    width: 8px;
    transition-delay: 0ms;
  }
}

@keyframes tick {
  to {
    stroke-dashoffset: 0;
    stroke-dasharray: 0;
  }
}

.toggle {
  input:checked + label {
    box-shadow: 0 0 5px 0 #F0462380;
  }
}

/* Inputs */
.input {
  @apply form-input transition-all duration-200;
  width: 100%;
  max-height: 50px;
  outline: none;
  border-radius: 1rem;
  border: 1px solid #BABABA;
  font-weight: lighter;
  font-size: 14px;

  &.rtl {
    direction: rtl;
  }

  &.disabled {
    @apply bg-[#F5F5F5] opacity-50 cursor-not-allowed;
    & + label {
      background-color: transparent !important;
      opacity: 50%;
    }
  }

  &:hover {
    box-shadow: 0px 5px 5px 0px #BABABA40;
  }

  & + label {
    @apply absolute left-4 text-sm font-light font-[montserrat] text-opacity-70 px-2 bg-transparent transition-all duration-200 rounded-full pointer-events-none;

  }

  &.rtl + label {
    @apply font-vazir left-auto right-4;
  }

  &:focus, &:valid {
    @apply border-brandOrange ring-transparent;
    & + label {
      @apply text-brandOrange font-medium bg-white -translate-y-full top-2 text-xs;
    }
  }

  & + label + span {
    color: var(--danger);
    @apply absolute text-xs bottom-0 translate-y-full p-2 font-light hidden;
  }

  & + label + span + svg.icon-error {
    @apply absolute hidden right-4 scale-150;
  }

  & + label + span + svg + svg.icon-success {
    @apply absolute hidden right-4 scale-150;
  }

  &.rtl + label + span {
    @apply right-2;
  }

  &.rtl + label + span + svg.icon-error {
    @apply right-auto left-4;
  }

  &.rtl + label + span + svg + svg.icon-success {
    @apply right-auto left-4;
  }

  &-error {
    border-color: var(--danger) !important;

    & + label {
      color: var(--danger) !important;
      font-weight: normal;
    }

    & + label + span {
      @apply block;
    }

    & + label + span + svg.icon-error {
      @apply block;
    }
  }

  &-valid {
    border-color: var(--success) !important;

    & + label {
      color: var(--success) !important;
      font-weight: normal;
    }

    & + label + span + svg + svg.icon-success {
      @apply block;
      color: var(--success);
    }
  }
}
</style>