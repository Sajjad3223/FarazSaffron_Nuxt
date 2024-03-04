<template>
  <div
      class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
  >
        <span class="flex items-center col-span-3">
          نمایش
          {{ (paginationData.currentPage - 1) * paginationData.take + 1 }}-{{ (paginationData.currentPage) * paginationData.take }}
          از
          {{paginationData.entityCount}}
        </span>
    <span class="col-span-2"></span>
    <!-- Pagination -->
    <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul class="inline-flex items-center">
                      <li v-if="paginationData.currentPage > 1">
                        <button @click="changePageId(paginationData.currentPage - 1)"
                            class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Previous"
                        >
                          <svg
                              class="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                          >
                            <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                      <li v-for="p in paginationData.pageCount" :key="p">
                        <button v-if="paginationData.currentPage === p" disabled
                            class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          {{p}}
                        </button>
                        <button v-else @click="changePageId(p)"
                            class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          {{p}}
                        </button>
                      </li>
                      <li v-if="paginationData.currentPage < paginationData.pageCount">
                        <button @click="changePageId(paginationData.currentPage + 1)"
                            class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Next"
                        >
                          <svg
                              class="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                          >
                            <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
  </div>
</template>

<script setup lang="ts">
import type {PaginationData} from "~/models/baseFilterResult";

/*const props = defineProps<{ TODO enable after implementing Data grabbing
  paginationData:PaginationData,
  loadDataFn:Function | null
}>();*/

const props = withDefaults(defineProps<{
  paginationData:PaginationData,
  loadDataFn:Function | null
}>(),{
  paginationData:{
    pageCount: 6,
    currentPage:2,
    take:10,
    entityCount:60,
    endPage:6,
    startPage:1
  } as PaginationData,
  loadDataFn:null
})
const route = useRoute();
const router = useRouter();
const changePageId = (pageId:number)=>{
  if(pageId == props.paginationData.currentPage) return;
  const currentPath = route.path;
  const queryParams = route.query;
  router.push({
    path: currentPath,
    query: { ...queryParams, pageId:pageId },
  });
  if(props.loadDataFn != null)
    props.loadDataFn();
}
</script>