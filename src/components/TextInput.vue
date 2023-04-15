<template>
    <input 
      type="text" 
      class="input" 
      :value="value" 
      @input="updateSelf($event.target.value)" />
</template>
<script>
	export default{
		props: ["value"],
		methods: {
		    updateSelf(name) {
		      this.$emit("input", name);
		    }
		}
	}
</script>
<style scoped>
	input {
		border: 1px solid #9BA3AF;
		border-radius: 9px;
		height: 50px;
		width: 100%;
		padding: 0.375rem 1rem;
	}
	input::placeholder{
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.364px;
		color: #9BA3AF;
	}
</style>