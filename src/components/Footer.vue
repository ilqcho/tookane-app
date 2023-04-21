<template>
    <div class="container border-top">
        <footer class="py-3">
            <p class="text-center text-muted">&copy; {{ brandName }}</p>
        </footer>
    </div>
</template>

<script>
export default{
    name: 'Footer',
    props: ['brandName'],
}
</script>