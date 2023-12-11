<template>
    <h1 v-if="show">If Condition</h1>
    <h1 v-else>Else Condition</h1>
    <ul>
        <li v-for="item in technology" :key = "item">{{ item }}</li>
    </ul>
    <br>
    <ul>
        <li v-for="item in user" :key="item.phone">
        Name is : {{item.name}} and Email is : {{item.email }}
        </li>
    </ul>
    <button v-on:click = "show = !show">Show</button>
</template>
<script>
export default{
    name:'HomePage',
    data(){
        return{
            technology:['java' , 'php' , 'node' , 'html'],
            user:[
                {name:'Anil',phone:'123'},{name:'Shanil',phone:'456'},
                {name:'Panil',phone:'789'},
            ]
        }
    },
    methods:{
 
    }
}
</script>