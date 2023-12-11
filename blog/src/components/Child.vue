<template>
<h2>Props : {{ name }}</h2>
<h2>Props : {{ user.name }}</h2>
<button v-on:click="getData()">Call Function</button>
</template>
<script>
    export default{
        name:'ChildPage',
        props:{
            name:String,
            user:Object,
            getData:Function,
        }
    }
</script>