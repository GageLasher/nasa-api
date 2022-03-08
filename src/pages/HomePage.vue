<template>
  <div class="row">
    <SearchPicture />
  </div>
  <div class="row">
   <div class="col-12">
     <div class="card">

     <img :src="pictures.imgUrl" alt="">
     </div>
   </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup(){
    return{
      pictures: computed(() => AppState.picture)
    }
  }
}
</script>

<style scoped lang="scss">
img {
  object-fit: contain;
}
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
