<template>
    <h1>Modifiers</h1>
    <input type="text" v-model="data">
    <input type="text" v-model.lazy="data">
    <!-- <input type="text" v-model.trim="data"> -->
    <input type="text" v-model.number="data">
    <input type="text" v-model.number.lazy="data">
    <h2>Data is:{{ data }}</h2>
</template>
<script>
export default{
    name:'HomePage',
    data(){
        return{
            data:''
        }
    },
    methods:{

    }
}
</script>
<style>

</style>