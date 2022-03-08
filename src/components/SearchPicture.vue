<template>
    <form class="col-6" @submit.prevent="getPictures">
    <div class="input-group m-3">
      <input
        type="date"
        class="form-control"
        placeholder="Picture of the Day..."
        aria-label="Picture of the Day..."
        v-model="query"
      />
      <button class="btn btn-success" type="submit">
        <i class="mdi mdi-magnify"></i>
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import { picturesService } from '../services/PicturesService'
export default {
    setup(){
        const query = ref('')
        return {
            query,
            getPictures(){
             picturesService.getPictures(query.value)
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>