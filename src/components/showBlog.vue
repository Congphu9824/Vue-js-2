<template>
    <div v-theme:column="narrow" id="show-blogs">
        <h1>All Blogs Article</h1>
        <input type="text" v-model="search" placeholder="search blogs" name="" id="">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <!-- v-bind dynamic link with expression / help create URL-->
            <router-link  v-bind:to="'/blog/' + blog.id">
                    <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            </router-link>
            <article>{{ blog.body | snippet }}</article>
        </div>
   </div>
</template>
  
  
<script>
import searchMixin from '../Mixins/searchMixin';

// defines the Vue Component
  export default {
    data () {
      return {
        blogs:[],
        search: ''
      }
    },
    methods:{
      
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);
        })
    },

    // Local  filter
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    mixins:[searchMixin]
}
</script>
  
<style scoped>
     #show-blogs{
            max-width: 800px;
            margin: 0 auto;
        }
        .single-blog{
            padding: 20px;
            margin: 20px 0;
            box-sizing: border-box;
            background-color: #eee;
        }   
</style>