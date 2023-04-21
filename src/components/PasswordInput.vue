<template>
    <div class="input-container">
        <input
            :type="type" 
            :value="inputValue" 
            :placeholder="placeholder" 
            @input="updateSelf($event.target.value)"
        />
        <i @click="toggleInputType('text')" v-if="type == 'password'">
            <font-awesome-icon icon="fa-eye-slash" />
        </i>
        <i @click="toggleInputType('password')" v-else class="fa fa-eye">
            <font-awesome-icon icon="fa-eye" />
        </i>
    </div>
</template>
  
<script>
export default {
    name: 'PasswordInput',
    props: ['modelValue', 'placeholder'],
    data() {
        return {
            type: 'password',
            inputValue: this.modelValue,
        }
    },
    watch:{
        //Reset input value
        modelValue(){
            if(!this.modelValue){
                this.inputValue = null;
            }
        }
    },
    methods: {
        toggleInputType(type) {
            this.type = type;
            this.$nextTick(() => {
                this.inputValue = this.$refs.input.modelValue;
            });
        },
        updateSelf(value) {
            this.inputValue = value;
            this.$emit("update:modelValue", value);
        }
    }
}
</script>
<style scoped>
.input-container {
    position: relative;
}

.input-container i {
    position: absolute;
    right: 30px;
    top: 15px;
    cursor: pointer;
    color: var(--grayed-color);
}
</style>