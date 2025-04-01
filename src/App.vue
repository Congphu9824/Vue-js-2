<template>
    <div>
      <!-- <add-blog></add-blog>
      <show-blog></show-blog> 
      <list-blog></list-blog> -->
      <app-header></app-header>
      
      <router-view></router-view>

    </div>
</template>

<script>
import addBLog  from './components/addBLog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import header from './components/header.vue';

export default {
    components:{
      'add-blog': addBLog,
      'show-blog': showBlog,
      'list-blog': listBlog,
      'app-header': header,
  },

  data () {
    return {
    }
  }
}
</script>

<style>

</style>
