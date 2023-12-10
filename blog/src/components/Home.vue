<template>
    <h1> {{ "Hello".length }} Home Component</h1>
    <button v-on:click="getData()">Click Me</button>
    <button v-on:dblclick = "getData()">Double Click Me</button>
    <button v-on:mousemove = "getConsole()">Mouse Move</button>
    <h2>{{ count }}</h2>
</template>
<script>
export default{
    name:'HomePage',
    data(){
        return{
            count:0
        }
    },
    methods:{
        getData(){
            this.count = this.count + 1
        },
        getConsole(){
            console.log("Mouse Moved")
        }
    }
}
</script>