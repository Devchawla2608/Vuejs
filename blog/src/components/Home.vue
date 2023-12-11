<template>
<h1>Get input feild Value
</h1>
<br/>
<input type="text" placeholder="Enter Email" v-model="email">
<br/>
<input type="text" placeholder="Enter Password" v-model="password">
<br /> 
<br/>
<button v-on:click="getData()" type="button">Get Values</button>
<h1>Get Checkbox & Radio Button Value</h1>
<label for="java">Java</label>
<input type="checkbox" value="java" v-model="technology" id="java"> 
<br/>
<label for="php">Php</label>
<input type="checkbox" value="php" v-model="technology" id="php"> 
<br /> 
<label for="node">Node</label>
<input type="checkbox" value="node" v-model="technology" id="node"> 

<h4>
    Selected Technology : {{technology}}
</h4>

<label for="student">Student</label>
<input type="radio" value="student" id="student"
name="who" v-model="who"
>

<label for="developer">Developer</label>
<input type="radio" value="developer" id="developer"
name="who" v-model="who"
>

<h4>
    Who i am : {{who}}
</h4>

<br /> 
</template>
<script>
export default{
    name:'HomePage',
    data(){
        return{
            email:null,
            password:null,
            technology:[],
            who:null,
        }
    },
    methods:{
        getData(){
            console.log("Function Called" , this.email , this.password)
        }
    }
}
</script>