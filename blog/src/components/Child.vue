<template>
<h2>User Component</h2>
<div>
    <h1>data.name</h1>
    <h2>data.email</h2>
    <button v-on:click="getData(data.name)">Alert Name</button>
</div>

</template>
<script>
    export default{
        name:'ChildPage',
        props:{
            data:Object,
            getData:Function
        },
    }
</script>