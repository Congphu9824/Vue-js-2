<template>
    <!-- adding router links -->
    <nav>
        <ul>
            <!-- exact when want click just activate URL Exactly with To -->
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a new Blog</router-link></li>
        </ul>
    </nav>
</template>
  
  
<script>

// defines the Vue Component
  export default {
    data () {
      return {
      
      }
    }
 
}
</script>
  
<style scoped>
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }
    nav{
        background: #444;
        padding: 14px 0;
        margin-bottom: 40px;
    }

    .router-link-active{
        background-color: #eee;
        color: #444;
    }
</style>