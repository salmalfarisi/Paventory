<template>
	<div>
		<div class="m-4 font-semibold flex justify-between">
			<div class="text-3xl">
				{{ titles }}
			</div>
		</div>
		<div class="card">
			<form @submit.prevent="submitdata">
				<Forms v-model="data.name" v-bind:value="data.name" v-bind:type="'text'" v-bind:labels="'Name'" v-bind:setid="'name'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
				<Forms v-model="data.kategori_id" v-bind:value="data.kategori_id" v-bind:type="'select'" v-bind:labels="'Category'" v-bind:setid="'kategori_id'" v-bind:option="this.option" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>	
				<Forms v-model="data.satuan" v-bind:value="data.satuan" v-bind:type="'text'" v-bind:labels="'Unit'" v-bind:setid="'satuan'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.jumlah_barang" v-bind:value="data.jumlah_barang" v-bind:type="'number'" v-bind:labels="'Quantity'" v-bind:setid="'jumlah_barang'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.harga_barang" v-bind:value="data.harga_barang" v-bind:type="'number'" v-bind:labels="'Price'" v-bind:setid="'harga_barang'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<div v-if="this.status == 'show'">
					<div class="flex flex-col gap-2">
						<label class="flex justify-start text-base font-medium">Promo Status</label>
						<p>{{ data.is_promo == false ? 'No' : 'Yes' }}</p>
					</div>
				</div>
				<div v-else>
					<Forms v-model="data.is_promo" v-bind:value="data.is_promo" v-bind:type="'checkbox'" v-bind:labels="'Promo Status'" v-bind:setid="'is_promo'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
				</div>
				<div :hidden="data.is_promo == false ? true : false">
					<Forms v-model="data.type_discount" v-bind:value="data.type_discount" v-bind:type="'select'" v-bind:labels="'Type of discount'" v-bind:setid="'type_discount'" v-bind:option="[['persen', 'Percent'],['cash', 'Cash']]" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
					<Forms v-model="data.discount" v-bind:value="data.discount" v-bind:type="'number'" v-bind:labels="'Total of Discount'" v-bind:setid="'discount'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				</div>
				<div v-if="status === 'edit'">
					<Forms v-model="data.is_opname_op" v-bind:value="data.is_opname_op" v-bind:type="'checkbox'" v-bind:labels="'Edit data for Stock Opname'" v-bind:setid="'is_opname_op'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
				</div>
				<div v-if="status === 'show'">
					<center>
						<img v-bind:src="'/barang/' + data.photo"  class="img-fluid" alt="Responsive image">
					</center>
				</div>
				<div v-else>
					<Forms v-model="newfile" v-bind:type="'file'" v-bind:labels="'Upload Photo'" v-bind:setid="'photo'" v-bind:setattribute="''"/>
				</div>			
				<div class="flex justify-between pt-2">
					<div>
						<router-link :to='{name:"ItemIndex",}' class="float-left btn-danger btn-md">Back</router-link>
					</div>
					<div>
						<div v-if="this.status != 'show'">
							<button type="submit" class="btn-md btn-primary">{{ this.status == 'create' ? 'Create' : 'Update' }}</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Forms from '../../elements/form.vue';

export default{
	name:"ItemForm",
	data(){
		return {
			data:{
				success:'',
				message:'',
				name:'',
				kategori_id:'',
				satuan:'',
				photo:'',
				jumlah_barang:0,
				harga_barang:0,
				is_promo:0,
				type_discount:'kosong',
				discount:0,
				is_opname_op:0,
			},
			option:{
				data:[],
			},
			submitbutton:'',
			titles:'',
			status:'',
			newfile:'',
		}
	},
	mounted(){
		this.getData()
	},
	methods:{
		async getData(){
			this.status = `${this.$route.params.status}`;
			
			let tokenStr = localStorage.getItem('token');
			await this.axios.get(`/api/kategori/index`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.option = response.data.data;
			}).catch(error=>{
				console.log(error)
				this.option = {}
			})

			if(this.status == 'create'){
				this.titles = 'Create new Item';
			}
			else{
				await this.axios.get(`/api/barang/detail/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
					this.data = response.data.data;
					this.success = response.data.success;
					this.message = response.data.message;
					if(this.status == 'show'){
						this.titles = 'Detail data : ' + this.data.name;
					}
					else{
						this.titles = 'Edit data : ' + this.data.name;
					}
				}).catch(error=>{
					console.log(error)
					this.data = {}
				})
			}
		},
		async submitdata(){
			if(this.status == 'create')
			{
				var urllink = `/api/barang/store`;
			}
			else
			{
				var urllink = `/api/barang/update/${this.$route.params.id}`;
			}
			
			document.getElementById('error_name').innerHTML = '';
			document.getElementById('error_kategori_id').innerHTML = '';
			document.getElementById('error_satuan').innerHTML = '';
			document.getElementById('error_jumlah_barang').innerHTML = '';
			document.getElementById('error_harga_barang').innerHTML = '';
			document.getElementById('error_type_discount').innerHTML = '';
			document.getElementById('error_discount').innerHTML = '';
			document.getElementById('error_photo').innerHTML = '';

			const subForm = new FormData();

			subForm.append("name", this.data.name);
			subForm.append("kategori_id", this.data.kategori_id);
			subForm.append("satuan", this.data.satuan);
			subForm.append("jumlah_barang", this.data.jumlah_barang);
			subForm.append("harga_barang", this.data.harga_barang);
			subForm.append("is_promo", this.data.is_promo);
			subForm.append("type_discount", this.data.type_discount);
			subForm.append("discount", this.data.discount);
			if(this.status == 'edit'){
				subForm.append("is_opname_op", this.data.is_opname_op);
			}
			if(this.newfile != null)
			{
				subForm.append("photo", this.newfile);
			}
			let tokenStr = localStorage.getItem('token');
			await this.axios.post(urllink, subForm, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.success = response.data.success
				if(this.success == true){
					this.$router.push({name:"ItemIndex"})
				}
				else{
					console.log(this.message);
				}
			}).catch(error=>{
				const message = error.response
				const geterror = message.data.data
				if(geterror !== null){
					alert(message.data.message);
				}

				if(geterror != []){
					for (let key of Object.keys(geterror)) {
						const setvar = 'error_' + key;
						const sethtml = geterror[key];
						document.getElementById(setvar).innerHTML = sethtml;
					}
				}
			})
		},
	},
	components: {
		Forms,
	}
}
</script>