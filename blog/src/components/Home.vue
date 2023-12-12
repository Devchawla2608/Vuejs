<template>
    <h1>{{ childUser }}</h1>
<Child :getChildName = "getChildName"/>  
</template>
<script>
import Child from './Child.vue'
export default{
    name:'HomePage',
    components:{
        Child,
    },
    data(){
        return{
            childUser:""
        }
    },
    methods:{
        getChildName(name){
            this.childUser = name
        }
    }
}
</script>
<style>

</style>