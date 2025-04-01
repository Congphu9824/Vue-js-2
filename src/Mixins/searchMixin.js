export default{
    computed:{
        filteredBlogs:function(){
           // duyệt qua arr blogs keep blog.title
            return this.blogs.filter((blog) =>{
               // match check title contain search
                return blog.title.match(this.search)
            })
        }
   },
}