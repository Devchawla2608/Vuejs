<template>
    <h1>Slotes</h1>
    <!-- <Child data = "anil sidhu"/> -->
    <!-- For Slots -->
    <!-- <Child>
        <h1>
            Code By Deepanshu
        </h1>
    </Child>
    <Child>
        <a href="">Code By Deepanshu</a>
    </Child>
    <Child>
        <img src="../assets/logo.png" alt="">
    </Child> -->
<Child>
    <template v-slot:header>
        <h1>Peter</h1>
    </template>
    <template v-slot:main>
        <h1>Mid</h1>
    </template>
    <template v-slot:footer>
        <h1>Footer</h1>
    </template>
</Child>

<Child>
    <template v-slot:header>
        <h1>FaceBook</h1>
    </template>
    <template v-slot:main>
        <h1>React</h1>
    </template>
    <template v-slot:footer>
        <h1>Buy Now</h1>
    </template>
</Child>

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