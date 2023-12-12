<template>
    <h2>Teacher Component</h2>
    <h1>{{ name }}</h1>
    </template>
    <script>
        export default{
            name:'TeacherPage',
            props:{
                name:String
            }
        }
    </script>