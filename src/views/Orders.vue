<template>
    <div class="row justify-content-center">
        <Title class="text-center mb-3 mt-3" title="Orders list" />
        <div class="col-8">
            <div class="d-flex justify-content-between align-items-baseline">
                <ShowRows 
                    :options="options"
                    @option-selected="showRowsSelected"
                />
                <div>
                    <label class="tab-content-label">Enable Drag</label>
                    <SwitchButton class="mt-2 ml-2" v-model="checkboxValue" />
                </div>
            </div>
            <table class="table table-striped table-hover mt-3">
                <thead>
                    <tr class="text-center">
                        <th scope="col">ORIGIN</th>
                        <th scope="col">DESTINATION</th>
                        <th scope="col">ID</th>
                    </tr>
                </thead>
                <draggable 
                    v-model="orders" 
                    :itemKey="(order, index) => order._id || index" 
                    tag="tbody"
                    :disabled="!checkboxValue"
                    >
                    <template #item="{element, index}">
                        <tr class="text-center" @click="selectRow(element)" style="cursor:pointer">
                            <td>
                                {{ element.origin.street }}
                            </td>
                            <td>
                                {{ element.destination.street }}
                            </td>
                            <td>
                                {{ element._id }}
                            </td>
                        </tr>
                    </template>
                </draggable>
            </table>
            <paginate
                :page-count="pageCount"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :click-handler="changePage"
                >
            </paginate>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable';
import paginate from 'vuejs-paginate-next';

export default{
    name: 'Orders',
    components: {
        draggable,
        paginate,
    },
    data(){
        return{
            currentPage: 1,
            email: null,
            perPage: 10,
            options: [10, 20, 30],
            checkboxValue: false,
        }
    },
    mounted(){
        this.fetchOrders(this.perPage, this.currentPage);
    },
    watch: {
        // React to changes in perPage and currentPage
        perPage(newPerPage) {
            this.fetchOrders(newPerPage, this.currentPage);
        },
        currentPage(newPage) {
            this.fetchOrders(this.perPage, newPage);
        }
    },
    computed:{
        orders: {
            get() {
                return this.$store.state.orders.orders;
            },
            set(value) {
                this.$store.commit('orders/setOrders', value);
            }
        },
        totalResults(){
            return this.$store.state.orders.totalResults;
        },
        pageCount(){
            return Math.round(this.totalResults / this.perPage);
        },
    },
    methods:{
        fetchOrders(limit, page) {
            this.$store.dispatch('orders/fetchOrders', { limit, page });
        },
        changePage(pageNum){
            this.currentPage = pageNum;
        },
        selectRow(row){
            const routeData = this.$router.resolve({ name: 'order', query: { orderId: row._id } });
            window.open(routeData.href, '_blank');
        },
        showRowsSelected(option) {
            this.perPage = option;
        },
    }
}
</script>

<style scoped>
ul{
    display:flex;
    justify-content: center;
}
table,
thead,
th {
  font-weight: 600;
}
</style>