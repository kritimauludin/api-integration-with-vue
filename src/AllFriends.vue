<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <div v-for="friend in friends" :key="friend">
            <span @click="unfriend(friend.id)">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AllFriendsItem',
        props: ['friends'],
        data(){
            return{
            }
        },
        methods: {
            unfriend(id){
                this.$emit('delete', {id})
            }
        }
    }
</script>

<style>
</style>