<template>
	<div>
		<div class="m-4 font-semibold flex justify-between">
            <div class="text-3xl">
				Orders List
			</div>
			<div>
				<router-link :to='{name:"OrderForm", params: {status: "create", id: "0"}, }' class="btn-lg btn-primary">
					Create new Data
				</router-link>
			</div>
        </div>
		<div v-if="loadtable === true">
			<div class="card">
				<Tabletailwind v-bind:tableid="'dt_orders'" v-bind:data="data" v-bind:typefirstcol="'number'" v-bind:dataPerPage="'2'" v-bind:theaders="'Transaction Code|Total Price|Shipment Status'" v-bind:labels="'transaction_code|total_harga|shipment_status'" v-bind:option="'show|edit|delete'" v-bind:baseurl="'OrderForm'" v-bind:uniqueid="'id'" />
			</div>
		</div>
		<div v-else>
			Data not found
		</div>
	</div>
</template>

<script>
import Tabletailwind from '../../elements/table.vue';

export default {
	data(){
		return {
			data:{
				success:false,
				message:'',
				data:[],
			},
			loadtable:false,
			is_admin:localStorage.getItem('is_admin'),
		}
	},
	mounted(){
		this.loaddata(),
		this.$root.$on('commanddelete', (objectdata) => { this.deleteData(objectdata) });		
	},
	methods:{
		async loaddata(){
			let tokenStr = localStorage.getItem('token');
			await this.axios.get(`/api/orders/parent/index`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.data = response.data.data
				this.success = response.data.success
				this.message = response.data.message
				this.loadtable = this.success
			}).catch(error=>{
				console.log(error)
				this.data = {}
			})
		},
		async confirmdelete(id, title, row){
			document.getElementById('judulmodal').innerHTML = title;
			document.getElementById('iddata').value = id;
			document.getElementById('rowsdata').value = row;
		},
		async deleteData(command){
			if(command.table == 'dt_orders'){
				if(confirm('are you sure want to delete this data')){
					var urllink = `/api/user/destroy/` + command.id;
					let tokenStr = localStorage.getItem('token');
					await this.axios.patch(urllink, '', { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
						this.success = response.data.success;
						this.message = response.data.message;
						//this.$router.push({name:"UserIndex"})
						//location.replace('/');
						//location.reload();
						return false;
					}).catch(error=>{
						alert(error.data.message)
					})

					if(this.success == true){
						this.loaddata();
					}
				}
			}
		},
	},
	components:{
		Tabletailwind
	},
}
</script>