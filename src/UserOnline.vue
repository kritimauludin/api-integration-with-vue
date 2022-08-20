<template>
    <div id="online-friends">
        <h2>Online Friends</h2>
        <div v-for="friend in friends" :key="friend">
            <span v-if="friend.online">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'UserOnlineItem',
        props: ['friends'],
        data(){
            return{
            }
        }
    }
</script>

<style>
</style>