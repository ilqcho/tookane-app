<template>
    <button @click="onClick" class="btn-submit">
        <slot></slot>
    </button>
</template>

<script>
export default{
    name: 'SubmitButton',
    props: {
        onClick: {
            type: Function,
            required: false
        }
    }
}
</script>

<style scoped>
.btn-submit{
    height: 45px;
    border-radius: 9px !important;
    border: none !important;
    background: #0d6efd;
    color: #FFFFFF;
    min-width: 200px;
}
</style>