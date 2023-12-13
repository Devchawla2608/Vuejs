<template>
    <h1>Computed Property</h1>
    <h2>Computed Property : {{ getResult }}</h2>
    <h2>Methods : {{ getResultMethod() }}</h2>
</template>
<script>
export default{
    name:'HomePage',
    data(){
            return{
                dollors:100,
                rupeesValue:70,
                discount:10
            }
        },
        computed:{
            getResult(){
                return (this.dollors*this.rupeesValue)-this.discount;
            }
        },
        methods:{
            getResultMethod(){
                return (this.dollors*this.rupeesValue)-this.discount;
            }
        }
}
</script>
<style>
h1{
    color: orange;
}
</style>