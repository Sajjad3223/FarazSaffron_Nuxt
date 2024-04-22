<template>
  <div>
    <button :class="['flex items-center justify-center gap-2 rounded-xl px-4 py-2 transition-colors duration-200',
                    buttonColor,{'w-full':wFull}]" :dir="ltr ? 'ltr' : 'rtl'" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color:'primary'|'secondary'|'success'|'info'|'warning'|'danger',
  buttonType:'bg'|'outline'|'white',
  isLoading:boolean,
  disabled:boolean,
  ltr:boolean,
  wFull:boolean
}>() ,{
  color:'primary',
  buttonType:'bg',
  isLoading:false,
  disabled:false,
  ltr:false,
  wFull:false
});

const buttonColor = computed(()=>{
  if(!props.disabled)
  {
    switch (props.buttonType){
      case "bg":
        return props.color;
      case "outline":
        return `${props.color}-stroke`;
      case "white":
        return `${props.color}-white`;
    }
  }
  else{
    switch (props.buttonType){
      case "bg":
        return 'disabled';
      case "outline":
        return `disabled-stroke`;
      case "white":
        return `disabled-white`;
    }
  }
})

</script>

<style scoped>
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
</style>