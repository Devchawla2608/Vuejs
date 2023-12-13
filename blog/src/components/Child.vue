<template>
    <div>
        <h2 v-bind="$attrs">Child Component</h2>
        <h3>{{ data }}</h3>
    </div>
</template>
<script>
    export default{
        name:'ChildPage',
        inheritAttrs:false,
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