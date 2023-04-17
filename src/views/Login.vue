<template>
    <div class="container login__margin-top">
        <div class="row justify-content-center">
            <form @submit.prevent="submitForm" class="col-md-6">
                <Title class="text-center mb-5" title="Login" />
                <label class="tab-content-label" for="email">Email</label>
                <TextInput 
                    placeholder="Enter your email" 
                    id="email"
                    v-model="email" 
                    type="email" 
                />
                <label class="tab-content-label mt-3" for="password">Password</label>
                <PasswordInput 
                    placeholder="Enter your password" 
                    id="password"
                    v-model="password"
                />
                <div class="text-center">
                    <button class="btn btn-primary btn-large mt-3 text-right" type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods:{
        validateIncreasingStraight(string){

            for (let i = 0; i < string.length - 2; i++) {
                const char1 = string.charCodeAt(i);
                const char2 = string.charCodeAt(i + 1);
                const char3 = string.charCodeAt(i + 2);

                // Consecutive and in ascending order validation
                if (char1 + 1 === char2 && char2 + 1 === char3) {
                    return true;
                }
            }
            alert('The password must contain one increasing straight of at least three letters');
        },
        validateConfusingChars(string) {
            // Regex to search for i, o, l letters
            const regex = /[iol]/g;
            const result = !regex.test(string);
  
            if (!result) {
                alert("The password contains the letters 'i', 'o', or 'l' which can be confusing.");
            }
            
            return result;
        },
        validatePairsChars(string) {
            // Regex to search for non-overlaping pairs of letters
            const regex = /([a-z])\1.*([a-z])\2/;
            const isValid = regex.test(string);
            if (!isValid) {
                alert("The password must contain at least two non-overlapping pairs of letters");
            }
            return isValid;
        },
        validateLength(string) {
            if (string.length > 32) {
                alert('The password must not have more than 32 characters in length');
                return false;
            }
            return true;
        },
        validateLowerCase(string) {
            // Regex to search for uppercase letters
            const regex = /^[a-z]+$/;
            const isValid = regex.test(string);
            if (!isValid) {
                alert("The password can only contain lowercase alphabetic characters");
            }
            return isValid;
        },
        submitForm(){
            this.validateIncreasingStraight(this.password);
            this.validateConfusingChars(this.password);
            this.validatePairsChars(this.password);
            this.validateLength(this.password);
            this.validateLowerCase(this.password);

            if(!this.email){
                alert('Must enter an email');
            }
            this.$store.dispatch('auth/login', {
                email: this.email,
                password: this.password,
            });

            localStorage.email = this.email;

            this.resetData();
            this.redirect();
        },
        resetData(){
            // Reset the fields value to null
            this.email = this.password = null;
        },
        redirect(){
            this.$router.push({ name: 'orders' });
        },
    },
}
</script>
<style scoped>
.login__margin-top{
    margin-top: 20vh;
}
</style>