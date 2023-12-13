<template>
<h1>Home</h1>
<Java/>
<Button v-on:click = "tab = Java">Load Java</Button>
<Node/>
<Button v-on:click = "tab = Node">Load Node</Button>
<Php/>
<Button v-on:click = "tab = Php">Load Php</Button>

<component :is = "tab"/>
</template>
<script>
import Java from './Java.vue'
import Php from './Php.vue'
import Node from './Node.vue'
export default{
    name:'HomePage',
    components:{
        Java,
        Php,
        Node
    },
    data(){
            return{
                tab:'Java'
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