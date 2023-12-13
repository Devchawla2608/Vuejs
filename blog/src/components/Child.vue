<template>
    <h1>Slots in Vue js</h1>
    <header>
        <slot name = "header">
            <h1 name = "header">Default Data</h1>
        </slot>
    </header>
    <content>
        <slot name = "main">
            <h1>Default Data</h1>
        </slot>
    </content>
    <footer>
        <slot name = "footer">
            <h1>Default Data</h1>
        </slot>
    </footer>
</template>
<script>
    export default{
        name:'ChildPage',
        props:{
            data:String
        },              
        data(){
            return{
            }
        },
    }
</script>

<!-- Props data is the data which we generally get if we define that attr in props feild  -->
<!-- Non props dat will be that data which we do not define in props that will be non props data -->
<!-- That data will attach to the parent of the whole html . -->
<!-- If we do not want to add that attr to the at most parent then we will write some thing like this -->
<!-- v-bind="$attrs" -->
<!-- If we want that parent  should not get then do this -->
<!-- 
        name:'ChildPage',
        props:{
            data:String
        },
        data(){
            return{
            }
        }, -->