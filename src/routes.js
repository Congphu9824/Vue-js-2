import showBlog from "./components/showBlog.vue"
import addBLog from "./components/addBLog.vue"
import signleBlog from "./components/singleBlog.vue"


export default[
    {path: '/', component:showBlog},
    {path: '/add', component:addBLog},
    {path: '/blog/:id', component:signleBlog},
]