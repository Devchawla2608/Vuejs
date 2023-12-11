<template>
    <h1 v-if="show">If Condition</h1>
    <h1 v-else>Else Condition</h1>
    <button v-on:click = "show = !show">Show</button>
</template>
<script>
export default{
    name:'HomePage',
    data(){
        return{
            show:false
        }
    },
    methods:{
 
    }
}
</script>