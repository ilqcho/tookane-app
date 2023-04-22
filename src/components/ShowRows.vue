<template>
    <div class="form-group">
        <label class="tab-content-label">Mostrar</label>
        <select class="form-control mt-2" style="width:60px" id="perPageSelect" v-model="perPage" @change="onSelectChange">
            <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default{
    name: 'ShowRows',
    props: ['options'],
    data(){
        return{
            perPage: 10,
        }
    },
    methods:{
        onSelectChange(){
            const selectedOption = this.perPage;
            this.$emit("option-selected", selectedOption);
        }
    }
}
</script>