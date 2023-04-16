<template>
    <h1 class="title">{{ title }}</h1>
</template>
<script>
export default{
    props: ['title'],
    data(){
        return{}
    }
}
</script>
<style scoped>
.title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
</style>