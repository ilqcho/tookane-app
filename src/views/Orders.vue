<template>
    <div class="row justify-content-center">
        <Title class="text-center mb-5" :title="title" />
        <div class="col-8">
            <div class="d-flex justify-content-between">
                <ShowRows 
                    :options="options"
                    @option-selected="onShowRowsSelected"
                />
                <button 
                    v-if="isDisabled" 
                    class="btn btn-primary h-75" 
                    @click="toggleDraggable">Enable dragg
                </button>
                <button 
                    v-else
                    class="btn btn-primary h-75" 
                    @click="toggleDraggable">Disable dragg
                </button>
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
                    :disabled="isDisabled"
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
import draggable from 'vuedraggable'
import Paginate from 'vuejs-paginate-next';

export default{
    components: {
        draggable,
        paginate: Paginate,
    },
    data(){
        return{
            currentPage: 1,
            email: null,
            title: null,
            perPage: 10,
            options: [10, 20, 30],
            isDisabled: false,
        }
    },
    mounted(){
        //Fetch orders data from store
        this.$store.dispatch('orders/fetchOrders', {
            limit: this.perPage,
            page: this.currentPage,
        });

        if (localStorage.email) {
            this.email = localStorage.email;
            this.title = 'Welcome ' + this.email;
        }
    },
    watch: {
        //On perPage change fetch data again
        perPage(newPerPage) {
            this.$store.dispatch('orders/fetchOrders', {
            limit: newPerPage,
            page: this.currentPage,
        });
        },
        //On currentPage change fetch data again
        currentPage(newPage){
            this.$store.dispatch('orders/fetchOrders', {
            limit: this.perPage,
            page: newPage,
        });
        }
    },
    computed:{
        totalResults(){
            return this.$store.state.orders.totalResults
        },
        pageCount(){
            return Math.round(this.totalResults / this.perPage);
        },
        orders: {
            get() {
                return this.$store.state.orders.orders
            },
            set(value) {
                this.$store.commit('orders/setOrders', value)
            }
        },
    },
    methods:{
        toggleDraggable(){
            return this.isDisabled ? this.isDisabled = false :  this.isDisabled = true;
        },
        changePage(pageNum){
            this.currentPage = pageNum;
        },
        selectRow(row){
            const routeData = this.$router.resolve({ name: 'order', query: { orderId: row._id } });
            window.open(routeData.href, '_blank');
        },
        onShowRowsSelected(option) {
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
  /* color: black; */
  font-weight: 600;
}
</style>