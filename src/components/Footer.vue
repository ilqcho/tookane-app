<template>
    <div class="container border-top">
        <footer class="py-3 footer__container">
            <p class="text-center text-muted">&copy; {{ brandName }}</p>
        </footer>
    </div>
</template>

<script>
export default{
    name: 'Footer',
    props: {
        brandName: {
            type: String,
            required: false,
        }
    },
}
</script>

<style scoped>
.footer__container{
    max-height: 70px !important;
}
</style>