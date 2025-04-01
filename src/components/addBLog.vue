<template>
    <div id="add-blog">
        <h2>Add a new blogs post</h2>
        <form v-if="!submitted">
            <label>Blogs Title</label>
            <!-- v-model automatically assign input values to data -->
            <input type="text" v-model.lazy="blog.title"> 
            <label>Blog Content</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label>Ninja</label>
                <input type="checkbox" value="Ninja" v-model="blog.categories" name="" id="">
                <label>Wizards</label>
                <input type="checkbox" value="Wizards" v-model="blog.categories" name="" id="">
                <label>Mario</label>
                <input type="checkbox" value="Mario" v-model="blog.categories" name="" id="">
                <label>Cheese</label>
                <input type="checkbox" value="Cheese" v-model="blog.categories" name="" id="">
            </div>

            <div>
                <label>Author select box Binding:</label>
                <select v-model="blog.author">
                    <option v-for="author in authors">{{author}}</option>
                </select>
                <!-- prevent  -->
                <button v-on:click.prevent="post">Add Blog</button>
            </div>

        </form>

        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title:{{ blog.title }}</p>
            <p>Blog Content</p>
            <p> {{ blog.content }}</p>
            <p>Blogs Categories checkbox</p>
            <ul>
                <li v-for="categorie in blog.categories">
                    {{categorie }}
                </li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>  
    </div>

</template>
  
  
<script>

// defines the Vue Component
  export default {
    name: 'app',
    data () {
      return {
        blog:{
            title: "",
            content: "",
            categories:[],
            author: "",
        },
        authors:['The Net ninja','The Angular avenger', 'the vue vindicator'],
        submitted: false,

      }
    },
    methods:{
        post:function(){
            this.$http.post('https://jsonplaceholder.typicode.com/todos',{
                title: this.blog.title,
                content: this.blog.content,
                userId: 1
            }).then(function(data){
                console.log(data);
                this.submitted =true;
            });
        }
    }
}
</script>
  
<style>

#checkboxes input{
    display: inline-block;
    margin-right: 40px;
}
#checkboxes label{
    display: inline-block;
}

#add-blog *{ 
    box-sizing: border-box; 
} 
#add-blog{ 
    margin: 20px auto; 
    max-width: 500px; 
 } 
label{ 
    display: block; 
    margin: 20px 0 10px; 
 } 
input[type="text"], textarea{ 
    display: block; 
    width: 100%; 
    padding: 8px; 
 } 
#preview{ 
    padding: 10px 20px; 
    border: 1px dotted #ccc; 
    margin: 30px 0; 
}
</style>