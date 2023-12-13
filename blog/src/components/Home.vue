<template>
    <h1>Non Props Data</h1>
    <Child data = "some data" id="child_cmp"/>
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