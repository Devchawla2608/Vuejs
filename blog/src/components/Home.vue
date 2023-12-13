<template>
    <h1>Watchers</h1>
    <h2>{{ count }}</h2>
    <button v-on:click="count = count + 1">+</button>
    <button v-on:click = "count = count - 1">-</button>
</template>
<script>
export default{
    name:'HomePage',
    data(){
            return{
                count:0
            }
        },
        watch:{
            count(val , prev){
                if(val > 5 && prev < val){
                    alert("Stop Counting")
                }else if(val > 10){
                    this.count = 0
                }
            }
        },
         methods:{
        }
}
</script>
<style>
h1{
    color: orange;
}
</style>