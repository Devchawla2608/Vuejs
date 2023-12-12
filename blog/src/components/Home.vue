<template>
    <h1>Pass data to child</h1>
    <ul>
        <li v-for="item in user" :key = "item.name">
            <Child :data="item" :getData="getData"/>
        </li>
    </ul>
    <div v-html="tag">

    </div>
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
            user:[
            {
                name:'Peter',
                email:'peter@gmail.com'
            },
            {
                name:'Sam',
                email:'Sam@gmail.com'
            },
            {
                name:'DEV',
                email:'DEV@gmail.com'
            },

        ],
        tag:"<h1>Dev Chawla</h1>"
        }
    },
    methods:{
            getData(name){
                alert("Name :" , name)
            }
    }
}
</script>