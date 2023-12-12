<template>
    <h1 :class="{green:colorfull}">Class Binding</h1>
    <button v-on:click="colorfull = !colorfull">Color</button>
</template>
<script>
import Child from './Child.vue'
export default{
    name:'HomePage',
    components:{
        Child
    },
    data(){
        return{
            colorfull : true
        }
    },
    computed:{
        applyStyle(){
            return {
                green:this.colorfull,
                err:true,
                other:false
            }
        }
    },
    methods:{
    }
}
</script>
<style>
.green{
    background-color: green;
    width: 200px;
    padding: 10px;
}
.err{
    background-color: red;
}
</style>