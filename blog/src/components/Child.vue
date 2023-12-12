<template>
<h2>Child Component</h2>
<button v-on:click="getChildName(name)">Send Children Name</button>
</template>
<script>
    export default{
        name:'ChildPage',
        data(){
            return{
                name:"Children"
            }
        },
        props:{
            getChildName:Function
        }
    }
</script>