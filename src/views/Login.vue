<template>
    <form @submit.prevent="submitForm" class="">
        <Title class="text-center mb-5" title="Login" />
        <label class="tab-content-label">Email</label>
        <TextInput 
            placeholder="Enter your email" 
            v-model="email" 
            type="email" 
            id="email"
        />
        <label class="tab-content-label mt-3">Password</label>
        <PasswordInput 
            placeholder="Enter your password" 
            v-model="password"
            id="password"
        />
        <div class="text-center">
            <submit-button class="mt-3" type="submit">LOGIN</submit-button>  
        </div>
    </form>
</template>

<script>
export default{
    name: 'Login',
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
            let isValid = true;

            if (!this.validateIncreasingStraight(this.password)) {
                isValid = false;
            }
            if (!this.validateConfusingChars(this.password)) {
                isValid = false;
            }
            if (!this.validatePairsChars(this.password)) {
                isValid = false;
            }
            if (!this.validateLength(this.password)) {
                isValid = false;
            }
            if (!this.validateLowerCase(this.password)) {
                isValid = false;
            }

            if(!this.email){
                alert('Must enter an email');
            }
            
            if(isValid){
                this.$store.dispatch('auth/login', {
                    email: this.email,
                    password: this.password,
                });

                localStorage.email = this.email;
    
                this.resetData();
                this.redirect();
            }
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