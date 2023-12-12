<template>
<h2>Student Component</h2>
<h1>Student Price : {{name}}</h1>
</template>
<script>
    export default{
        name:'ChildPage',
        props:{
            name:String
        }
    }
</script>