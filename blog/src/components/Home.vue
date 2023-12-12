<template>
<Child :name = "name" />  
<Teacher :name = "name"/>
</template>
<script>
import Child from './Child.vue'
import Teacher from './Teacher.vue'
export default{
    name:'HomePage',
    components:{
        Child,
        Teacher
    },
    data(){
        return{
            name:"Burce"
        }
    },
    methods:{
    }
}
</script>
<style>

</style>