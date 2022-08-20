<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <input type="text" v-model="searchTerm" class="input">
        <div v-for="post in filterPost" :key="post.id" class="post">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
        <!-- <button @click="changeTitle">Change Title</button> -->
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'BlogsItem',
    data(){
        return {
            blogTitle: 'Blog',
            posts:[

            ],
            searchTerm: ''
        }
    },
    methods: {
        // changeTitle(){
        //     this.blogTitle = 'Updated Hook'
        // }
    },
    computed:{
        filterPost(){
            return  this.posts.filter(post =>{
                return post.title.match(this.searchTerm)
            })
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log(response)
            this.posts = response.data
        })
    }
    // beforeCreate(){
    //     alert('before create hook')
    // },
    // created(){
    //     alert('created hook')
    // },
    // beforeUpdate(){
    //     alert('Before update hook')
    // }
}
</script>

<style>
    .blogs{
        width: 900px;
        margin: auto;
        background-color: aqua;
    }
    .post{
        margin-left: 20px;
        margin-right: 20px;
    }
    .post:hover{
        background-color: aliceblue;
    }
    .input{
        width: 200px;
        height: 30px;
        margin-left: 30px;
        border-radius: 50px;
    }
</style>