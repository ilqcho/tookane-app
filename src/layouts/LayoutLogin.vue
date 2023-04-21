
<template>
    <div class="container layout-login__margin-top">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default{ name: 'LayoutLogin' }
</script>

<style scoped>
.layout-login__margin-top{
    margin-top: 25vh;
}
</style>