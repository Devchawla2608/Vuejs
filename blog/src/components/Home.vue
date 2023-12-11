<template>
    <h1>Pass data to child</h1>
    <Child name = "anil sidhu" :user = "user" :getData = "getData"/>
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
            user:{
                name:'Peter',
                email:'peter@gmail.com'
            }
        }
    },
    methods:{
        getData()
        {
            alert("parent function called")
        }
    }
}
</script>