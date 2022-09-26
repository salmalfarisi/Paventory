<template>
	<div>
        <div class="card">
            <div class="py-2 font-bold text-lg">
                {{ this.title }}
            </div>
            <div class="py-2">
                <div v-if="this.temppilihan == true">
                    <Forms v-model="data.customer_id" v-bind:value="data.customer_id" v-bind:type="'select'" v-bind:labels="'Customer'" v-bind:setid="'customer_id'" v-bind:option="pilihan" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
                </div>
            </div>
        </div>
        <div v-if="this.senddata == true">
            <OrderChild v-bind:status="this.status" v-bind:id="this.id"/>
        </div>
        <div class="flex justify-between">
            <div>
                <router-link :to='{name:"OrderIndex"}' class="btn-lg btn-danger">
                    Back
                </router-link>
            </div>
            <div v-if="this.status != 'show'">
                <button type="button" class="btn-lg btn-primary" v-on:click="submitdata()">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import OrderChild from './child.vue';
import Forms from '../../elements/form.vue';

export default{
    name:'OrderParent',
    props:['status', 'id'],
    data(){
		return {
			data:{
				message:'',
                success:false,
                id:this.id,
                transaction_code : '',
                total_harga : 0,
                shipment_status : false,
                customer_id:0,
            },
            pilihan:[],
            temppilihan:false,
            title : '',
            senddata:false,
        }
    },
    mounted(){
		this.getData();
		this.customerData();
	},
    methods:{
        async getData(){
            if(this.status == 'create')
            {
                this.title = 'Create new data';
            }
            else
            {
                let tokenStr = localStorage.getItem('token');
                await this.axios.get(`/api/orders/parent/detail/` + this.id, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
                    this.data = response.data.data;
                    this.success = response.data.success;
                    this.message = response.data.message;
                }).catch(error=>{
                    console.log(error)
                    this.pilihan = []
                })
                if(this.status == 'edit')
                {
                    this.title = 'Edit data : ' + this.data.transaction_code;
                }
                else
                {
                    this.title = 'Show data : ' + this.data.transaction_code;
                }
            }
            this.senddata = true;
        },
        async customerData(){
            let tokenStr = localStorage.getItem('token');
			await this.axios.get(`/api/customer/index`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
                let temppilihan = response.data.data;
                for(var i = 0; i < temppilihan.length; i++)
                {
                    let tempdata = temppilihan[i];
                    let insertdata = [tempdata.id, tempdata.nama];
                    this.pilihan.push(insertdata);
                }
			    this.temppilihan = true;
			}).catch(error=>{
                console.log(error)
				this.pilihan = []
			})
        },
        async submitdata(){
            this.$root.$emit('submitorderdata', this.status);
        },
    },
    components:{
        OrderChild, Forms
    }
}
</script>