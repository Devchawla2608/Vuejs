<template>
    <h1>Simple Form</h1>
    <ul>
        <li v-for="item in error" v-bind:key = "item">
        {{item}} not valid
    </li>
    </ul>
    <form action="">
        <label for="">Email</label>
        <input type="text" placeholder="Enter Email" v-model="form.email">
        <br/>

        <label for="">Password : </label>
        <input type="password" placeholder="Enter Password" v-model="form.password">
        <br>
        <select v-model = "form.country">
            <option value="">India</option>
            <option value="">China</option>
            <option value="">USA</option>
        </select>
        <br>
        <h3>Technology</h3>
        <label for="">Password : </label>
        <input type="checkbox" v-model="form.technology" value = "java">
        <br>
        <label for="">.Net:</label>
        <input type="checkbox" v-model="form.technology" value = ".net">
        <br>

        <h3>Gender</h3>
        <label for="">Male : </label>
        <input type="radio" value = "male" name="gender" v-model="form.gender"> 
        <br>
        <label for="">Female : </label>
        <input type="radio" value = "female" name="gender" v-model="form.gender"> 
        <br>
        <button v-on:click="login" type="button">Login</button>
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
                country:'',
                technology:'',
                gender:''
            },
            error:[],
        }
    },
    methods:{
        login(){
            this.error = [];
            for(const item in this.form){
                if(this.form[item] === "" || this.form[item].length === 0){
                    this.error.push(item)
                }
            }
            if(this.error.length === 0){
                alert("Data Submitted")
            }
        }
    }
}
</script>
<style>

</style>