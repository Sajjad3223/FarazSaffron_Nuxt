<template>
  <div class="flex flex-col gap-1 row-span-3">
    <label for="title" class="font-light text-sm">{{ label }}</label>
    <label for="image" class="relative overflow-hidden w-full flex-1 flex items-center justify-center border border-dashed rounded-lg cursor-pointer">
      <input @change="imageSelected" type="file" name="image" id="image" class="opacity-0 hidden" :multiple="multiple" accept="image/*">
      <span v-if="selectedImage == null && selectedImagesPreviews.length <= 0" class="w-full flex flex-col items-center gap-4">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M18.45 8.19805C17.19 8.10805 15.8624 8.06325 14.4787 8.052H12.7912C11.4299 8.06325 10.0125 8.1193 8.55 8.19805H8.5275C3.99375 8.6143 2.53125 10.673 2.53125 16.6355C2.53125 25.1855 5.7375 25.1855 13.5 25.1855C21.2625 25.1855 24.4688 25.1855 24.4688 16.6355C24.4688 10.673 23.0063 8.6143 18.45 8.19805Z" fill="#9A9A9A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3433 4.69023L16.1872 6.53861C16.3514 6.70399 16.5686 6.78723 16.7846 6.78723C16.9994 6.78723 17.2154 6.70398 17.3797 6.54086C17.7104 6.21124 17.7104 5.67686 17.3819 5.34723L14.0969 2.05323C13.7808 1.73486 13.2183 1.73486 12.9022 2.05323L9.61719 5.34723C9.28869 5.67686 9.28869 6.21124 9.61944 6.54086C9.95019 6.86936 10.4834 6.86936 10.8119 6.53861L12.6558 4.69023V16.2067C12.6558 16.6698 13.0445 17.0417 13.5077 17.0417C13.9711 17.0417 14.3433 16.6694 14.3433 16.206V4.69023Z" fill="#9A9A9A"/>
                </svg>
                <span class="text-sm font-light opacity-70">برای <b>آپلود</b> عکس کلیک کنید</span>
              </span>
      <span class="absolute inset-0 pointer-events-none flex items-center justify-center" v-else-if="!multiple">
        <img :src="selectedImage" alt="selected Image" class="object-contain h-full">
      </span>
      <span v-else class="w-full m-4 grid grid-cols-5 self-start gap-4">
        <span v-for="preview in selectedImagesPreviews" class="relative h-full">
          <img :src="preview.src" alt="selected Image" class="object-contain rounded-lg">
          <button type="button" class="absolute left-2 top-2 bg-danger/50 hover:bg-danger/70 rounded-md text-white p-1" @click="deleteImage(preview.id)">
            <svg class="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </span>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue:any,
  label:string,
  multiple?:boolean
}>();

const emits = defineEmits(['update:modelValue']);

const selectedImage:Ref<string | null> = ref(null);
const selectedImagesPreviews:Ref<any[]> = ref([]);
const selectedImages:Ref<[]> = ref([]);
const imageSelected = ($event:any)=>{
  let image:File | null = $event.target.files[0];
  if(image == null) return;
  let imageUrl = URL.createObjectURL(image);
  if(!props.multiple) {
    selectedImage.value = imageUrl;
    emits('update:modelValue',image);
  }
  else
  {
    for(let imageFile of $event.target.files) {
      selectedImages.value.push(imageFile);
      imageUrl = URL.createObjectURL(imageFile);
      selectedImagesPreviews.value.push({
        src: imageUrl,
        id: Math.ceil(Math.random() * 10000),
        file: imageFile
      });
    }

    emits('update:modelValue',selectedImages.value);
  }
}
const deleteImage = (id:number)=>{
  const preview = selectedImagesPreviews.value.find(p=>p.id == id);
  const previewIndex = selectedImagesPreviews.value.findIndex(p=>p.id == id);
  const imageIndex = selectedImages.value.findIndex(i=>i == preview.file);
  selectedImages.value.splice(imageIndex,1);
  selectedImagesPreviews.value.splice(previewIndex,1);

  emits('update:modelValue',selectedImages.value);
}
</script>