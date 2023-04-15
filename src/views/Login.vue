<template>
    <div>Login</div>
    <TextInput v-model="email" type="email" />
    {{ email }}
    <input v-model="password" type="password">
    {{ password }}
    <Test></Test>
</template>

<script>
export default{
    data(){
        return{
            password: null,
        }
    },
    mounted(){
        if(localStorage.email){
            this.email = localStorage.email;
        }
    },
    watch: {
        email(newEmail){
            localStorage.email = newEmail;
        }
    },
    computed: {
        email:{
            get(){
                return this.$store.getters.email;
            },
            set(value){
                this.$store.commit('setEmail', value);
            }
        }
    }
}
</script>