<template>
    <div v-theme:column="narrow" id="show-blogs">
        <h1>List Blogs titles</h1>
        <input type="text" v-model="search" placeholder="search blogs" name="" id="">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
        </div>
   </div>
</template>
  
  
<script>

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
    computed:{
         filteredBlogs:function(){
            // duyệt qua arr blogs keep blog.title
             return this.blogs.filter((blog) =>{
                // match check title contain search
                 return blog.title.match(this.search)
             })
         }
    },
    // Local  filter
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        }
    }
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