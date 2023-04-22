<template>
    <input 
		class="form-control"
		type="text" 
		:value="modelValue" 
		@input="updateSelf($event.target.value)" 
	/>
</template>
<script>
export default {
	name: 'TextInput',
	props: ["modelValue"],
	methods: {
		updateSelf(name) {
			this.$emit("update:modelValue", name);
		}
	}
}
</script>

