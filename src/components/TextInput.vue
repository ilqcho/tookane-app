<template>
    <input 
		type="text" 
		class="input" 
		:value="modelValue" 
		@input="updateSelf($event.target.value)" 
	/>
</template>
<script>
export default {
	props: ["modelValue"],
	methods: {
		updateSelf(name) {
			this.$emit("update:modelValue", name);
		}
	}
}
</script>