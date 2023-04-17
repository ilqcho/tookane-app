<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <Title class="text-center" :title="title" />
            <div class="d-flex justify-content-center mt-5">
                <div class="card" style="width: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">Origin</h5>
                        <div>
                            <b class="text-secondary">City:&nbsp;</b>
                            <label>{{ order?.origin?.city}}</label>
                        </div>
                        <div>
                            <b class="text-secondary mr-2">Street:&nbsp;</b>
                            <label>{{ order?.origin?.street}}, {{ order.origin?.number }}</label>
                        </div>
                        <div>
                            <b class="text-secondary">Postal code:&nbsp;</b>
                            <label>{{ order?.origin?.postalCode }}</label>
                        </div>
                        <h5 class="card-title mt-3">Destination</h5>
                        <div>
                            <b class="text-secondary">City:&nbsp;</b>
                            <label>{{ order?.destination?.city}}</label>
                        </div>
                        <div>
                            <b class="text-secondary">Street:&nbsp;</b>
                            <label>{{ order?.destination?.street}}, {{ order.destination?.number }}</label>
                        </div>
                        <div>
                            <b class="text-secondary">Postal code:&nbsp;</b>
                            <label>{{ order?.destination?.postalCode }}</label>
                        </div>
                        <h5 class="card-title mt-3">Products</h5>
                        <div v-for="(product, index) in order.products" :key="index">
                            <div>{{ product }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default{
    data(){
        return{
            title: null,
        }
    },
    mounted(){
        //Catch id from router query
        const id = this.$route.query.orderId;
        this.title = `Details #${id}`
        this.$store.dispatch('orders/fetchOrder', id);
    },
    computed:{
        //Fetch order state from store
        ...mapState('orders', ['order'])
    }
}
</script>