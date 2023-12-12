<template>
    <h1>Simple Form</h1>
    <h1>{{ form.email }}</h1>
    <h1>{{ form.password }}</h1>
    <form action="">
        <label for="">Email</label>
        <input type="text" placeholder="Enter Email" v-model="form.email">
        <br/>

        <label for="">Password : </label>
        <input type="password" placeholder="Enter Password" v-model="form.password">
        <br>
        <button v-on:click="login">Login</button>
    </form>
</template>
<script>
export default{
    name:'HomePage',
    data(){
        return{
            form:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        login(){
            console.warn("Login Data " , this.form)
        }
    }
}
</script>
<style>

</style>