<template>
<div class="container mx-auto mt-24 flex flex-col" dir="ltr">
  <f-divider title="Buttons" :logo-divider="false" />
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
      <button :class="[`rounded-xl px-4 py-2 primary transition-colors duration-200`]">
        Primary
      </button>
    </div>
    <div>
      <button class="rounded-xl px-4 py-2 secondary transition-colors duration-200">
        Secondary
      </button>
    </div>
    <div>
      <button class="rounded-xl px-4 py-2 success transition-colors duration-200">
        Success
      </button>
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
      <button class="rounded-xl px-4 py-2 disabled ">
        Disabled
      </button>
    </div>

    <div class="font-bold font-[montserrat]">Stroke</div>
    <div>
      <button class="rounded-xl px-4 py-2 primary-stroke transition-colors duration-200">
        Primary
      </button>
    </div>
    <div>
      <button class="rounded-xl px-4 py-2 secondary-stroke transition-colors duration-200">
        Secondary
      </button>
    </div><div>
    <button class="rounded-xl px-4 py-2 success-stroke transition-colors duration-200">
      Success
    </button>
  </div><div>
    <button class="rounded-xl px-4 py-2 danger-stroke transition-colors duration-200">
      Danger
    </button>
  </div><div>
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
      <button class="rounded-xl px-4 py-2 disabled-stroke ">
        Disabled
      </button>
    </div>

    <div class="font-bold font-[montserrat]">White</div>
    <div>
      <button class="rounded-xl px-4 py-2 primary-white transition-all duration-200">
        Primary
      </button>
    </div>
    <div>
      <button class="rounded-xl px-4 py-2 secondary-white transition-all duration-200">
        Secondary
      </button>
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
      <button class="rounded-xl px-4 py-2 disabled-white">
        Disabled
      </button>
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
      <input type="checkbox" name="unchecked" id="unchecked" class="form-checkbox checkbox-style rounded-sm outline-brandOrange focus:ring-brandOrange stroke-brandOrange border-2 w-4 h-4 border-[#CACACA] text-brandOrange">
      <label for="unchecked" class="font-[Montserrat] text-sm">UnChecked</label>
    </div>
    <div class="gap-2 flex items-center">
      <input type="checkbox" name="Checked" id="Checked" class="form-checkbox checkbox-style rounded-sm outline-brandOrange focus:ring-brandOrange stroke-brandOrange border-2 w-4 h-4 border-[#CACACA] text-brandOrange" checked>
      <label for="Checked" class="font-[Montserrat] text-sm">Checked</label>
    </div>
    <div class="gap-2 flex items-center">
      <input type="checkbox" name="Disabled" id="Disabled" class="form-checkbox border-transparent rounded-sm text-[#E9E9E9] w-4 h-4 relative flex items-center after:bg-[#B3B3B3] after:h-1 after:rounded-[1px] after:absolute after:inset-x-0.5 " indeterminate disabled>
      <label for="Disabled" class="font-[Montserrat] text-sm">Disabled</label>
    </div>
  </div>
  <div class="w-1/3 mx-auto grid grid-cols-2 gap-8 place-content-center mt-8">
    <div class="w-max relative toggle flex items-center gap-2">
      <input v-model="toggle1" type="checkbox" name="toggle" id="toggle" class="form-checkbox opacity-0 peer absolute inset-0">
      <label for="toggle" class="flex w-14 h-6 bg-[#F0F0F0] rounded-full items-center relative before:absolute before:h-5 before:w-5 before:rounded-full before:bg-[#BABABA] before:left-1
                                peer-checked:toggle-checked peer-checked:bg-brandOrange peer-checked:before:bg-white peer-checked:before:translate-x-7 before:transition-transform before:duration-200"></label>
      <span class="font-[Montserrat]">{{toggle1 ? 'On' : 'Off'}}</span>
    </div>
    <div class="w-max relative toggle flex items-center gap-2">
      <input v-model="toggle2" type="checkbox" name="toggle-on" id="toggle-on" class="form-checkbox opacity-0 peer absolute inset-0">
      <label for="toggle-on" class="flex w-14 h-6 bg-[#F0F0F0] rounded-full items-center relative before:absolute before:h-5 before:w-5 before:rounded-full before:bg-[#BABABA] before:left-1
                                peer-checked:toggle-checked peer-checked:bg-brandOrange peer-checked:before:bg-white peer-checked:before:translate-x-7 before:transition-transform before:duration-200"></label>
      <span class="font-[Montserrat]">{{toggle2 ? 'On' : 'Off'}}</span>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import FDivider from "~/components/base/FDivider.vue";

definePageMeta({
  layout:""
})

const toggle1 = ref(false);
const toggle2 = ref(true);
</script>

<style>
:root{
  --primary: #F04623;
  --primary-hover: #CE3415;
  --primary-text: white;

  --secondary: #E0E0E0;
  --secondary-hover: #C6BFBF;
  --secondary-text: #847A7A;

  --success: #38C157;
  --success-hover: #1E9E3A;
  --success-text: white;

  --danger: #F42020;
  --danger-hover: #D31212;
  --danger-text: white;

  --info: #5E8EEA;
  --info-hover: #275DC5;
  --info-text: white;

  --warning: #FFFC0D;
  --warning-hover: #E8E505;
  --warning-text: #555454;

  --disabled: #F5F5F5;
  --disabled-text: #BABABA;

}
</style>
<style lang="scss">

/* Buttons */
.primary{
  border-radius: 10px;
  background-color: var(--primary);
  &:hover{
    background-color: var(--primary-hover);
  }
  color:white;
  &-stroke{
    background-color: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    &:hover{
      border-color: var(--primary-hover);
      color:var(--primary-hover);
    }
  }
  &-white{
    background-color: white;
    color:var(--primary);
    box-shadow: 0 1px 4px 0 #A7A7A740;
    &:hover{
      box-shadow: none;
      background-color: color-mix(in srgb,var(--primary) 20%,transparent);
    }
  }
}
.secondary{
  border-radius: 10px;
  background-color: var(--secondary);
  &:hover{
    background-color: var(--secondary-hover);
  }
  color:var(--secondary-text);
  &-stroke{
    background-color: transparent;
    border: 1px solid var(--secondary);
    color: var(--secondary-text);
    &:hover{
      border-color: var(--secondary-hover);
    }
  }
  &-white{
    background-color: white;
    color:var(--secondary-text);
    box-shadow: 0px 1px 4px 0px #A7A7A740;
    &:hover{
      box-shadow: none;
      background-color: color-mix(in srgb,var(--secondary) 20%,transparent);
    }
  }
}
.success{
  border-radius: 10px;
  background-color: var(--success);
  &:hover{
    background-color: var(--success-hover);
  }
  color:white;
  &-stroke{
    background-color: transparent;
    border: 1px solid var(--success);
    color: var(--success);
    &:hover{
      border-color: var(--success-hover);
      color:var(--success-hover);
    }
  }
  &-white{
    background-color: white;
    color:var(--success);
    box-shadow: 0px 1px 4px 0px #A7A7A740;
    &:hover{
      box-shadow: none;
      background-color: color-mix(in srgb,var(--success) 20%,transparent);
    }
  }
}
.danger{
  border-radius: 10px;
  background-color: var(--danger);
  &:hover{
    background-color: var(--danger-hover);
  }
  color:white;
  &-stroke{
    background-color: transparent;
    border: 1px solid var(--danger);
    color: var(--danger);
    &:hover{
      border-color: var(--danger-hover);
      color:var(--danger-hover);
    }
  }
  &-white{
    background-color: white;
    color:var(--danger);
    box-shadow: 0px 1px 4px 0px #A7A7A740;
    &:hover{
      box-shadow: none;
      background-color: color-mix(in srgb,var(--danger) 20%,transparent);
    }
  }
}
.info{
  border-radius: 10px;
  background-color: var(--info);
  &:hover{
    background-color: var(--info-hover);
  }
  color:white;
  &-stroke{
    background-color: transparent;
    border: 1px solid var(--info);
    color: var(--info);
    &:hover{
      border-color: var(--info-hover);
      color:var(--info-hover);
    }
  }
  &-white{
    background-color: white;
    color:var(--info);
    box-shadow: 0px 1px 4px 0px #A7A7A740;
    &:hover{
      box-shadow: none;
      background-color: color-mix(in srgb,var(--info) 20%,transparent);
    }
  }
}
.warning{
  border-radius: 10px;
  background-color: var(--warning);
  &:hover{
    background-color: var(--warning-hover);
  }
  color:var(--warning-text);
  &-stroke{
    background-color: transparent;
    border: 1px solid var(--warning);
    &:hover{
      border-color: var(--warning-hover);
      color:var(--warning-text);
    }
  }
  &-white{
    background-color: white;
    color:var(--warning-text);
    box-shadow: 0px 1px 4px 0px #A7A7A740;
    &:hover{
      box-shadow: none;
      background-color: color-mix(in srgb,var(--warning) 20%,transparent);
    }
  }
}
.disabled{
  border-radius: 10px;
  background-color: var(--disabled);
  color:var(--disabled-text);
  cursor: not-allowed;
  &-stroke{
    background-color: transparent;
    border: 1px solid var(--disabled);
    color:var(--disabled-text);
    cursor: not-allowed;
  }
  &-white{
    background-color: white;
    color:var(--disabled-text);
    cursor: not-allowed;
  }
}

/* Badges */
.badge{
  @apply grid place-items-center rounded-full px-2;
  & > *{
    font-family: "Cascadia Mono" !important;
  }
  font-size: 12px;
  &-square{
    padding: 0;
    width: 20px;
    height: 20px;
  }
  &-primary{
    background-color: var(--primary);
    color:var(--primary-text)
  }
  &-danger{
    background-color: var(--danger);
    color:var(--danger-text)
  }
  &-secondary{
    background-color: var(--secondary);
    color:var(--secondary-text)
  }
  &-success{
    background-color: var(--success);
    color:var(--success-text)
  }
  &-info{
    background-color: var(--info);
    color:var(--info-text)
  }
  &-warning{
    background-color: var(--warning);
    color:var(--warning-text)
  }
}

/* CheckBox And Toggle */
.checkbox-style{
  &:checked{
    box-shadow: 0 0 5px 0 #F0462380
  }
}

.toggle{
  input:checked + label {
    box-shadow: 0 0 5px 0 #F0462380;
  }
}
</style>