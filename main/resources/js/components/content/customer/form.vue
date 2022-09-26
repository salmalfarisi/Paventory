<template>
	<div>
		<div class="m-4 font-semibold flex justify-between">
			<div class="text-3xl">
				{{ titles }}
			</div>
		</div>
		<div class="card">
			<form @submit.prevent="submitdata" enctype="multipart/form-data">
				<Forms v-model="data.nama" v-bind:value="data.nama" v-bind:type="'text'" v-bind:labels="'Name'" v-bind:setid="'nama'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
				<Forms v-model="data.ktp" v-bind:value="data.ktp" v-bind:type="'text'" v-bind:labels="'Identity Number'" v-bind:setid="'ktp'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.email" v-bind:value="data.email" v-bind:type="'email'" v-bind:labels="'Email'" v-bind:setid="'email'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.telephone" v-bind:value="data.telephone" v-bind:type="'text'" v-bind:labels="'Telephone'" v-bind:setid="'telephone'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.whatsapp" v-bind:value="data.whatsapp" v-bind:type="'text'" v-bind:labels="'Whatsapp'" v-bind:setid="'whatsapp'"  v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.type_discount" v-bind:value="data.type_discount" v-bind:type="'select'" v-bind:labels="'Type of Discount'" v-bind:setid="'type_discount'" v-bind:option="[['cash', 'Cash'],['persen', 'Percent'],['kosong', 'No Discount'],]" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
				<div v-if="data.type_discount == 'kosong' && this.status == 'show'">
				</div>
				<div v-else>
					<Forms v-model="data.discount" v-bind:value="data.discount" v-bind:type="'number'" v-bind:labels="'Total of Discount'" v-bind:setid="'discount'"  v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				</div>
				<div class="flex justify-between pt-2">
					<div>
						<router-link :to='{name:"CustomerIndex",}' class="float-left btn-danger btn-md">Back</router-link>
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
	name:"CustomerForm",
	data(){
		return {
			data:{
				success:'',
				message:'',
				nama:'',
				ktp:'',
				email:'',
				whatsapp:'',
				telephone:'',
				type_discount:'',
				discount:'',
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
			
			if(this.status == 'create'){
				this.titles = 'Create new Customer';
			}
			else{
				let tokenStr = localStorage.getItem('token');
				await this.axios.get(`/api/customer/detail/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
					this.data = response.data.data
					this.success = response.data.success
					this.message = response.data.message
					if(this.status == 'show')
					{
						this.titles = 'Detail Customer data : ' + this.data.nama;
					}
					else
					{
						this.titles = 'Edit Customer data : ' + this.data.nama;
					}
				}).catch(error=>{
					console.log(error)
					this.data = {}
				})
			}
		},
		async submitdata(){
			if(this.status == 'store')
			{
				var urllink = `/api/customer/store`;
				var typeform = this.axios.post;
			}
			else
			{
				var urllink = `/api/customer/update/${this.$route.params.id}`;
				var typeform = this.axios.put;
			}

			let subForm = {
				nama : this.data.nama, 
				ktp : this.data.ktp, 
				email : this.data.email, 
				telephone : this.data.telephone, 
				whatsapp : this.data.whatsapp, 
				type_discount : this.data.type_discount, 
				discount : this.data.discount, 
			}

			document.getElementById('error_nama').innerHTML = '';
			document.getElementById('error_ktp').innerHTML = '';
			document.getElementById('error_email').innerHTML = '';
			document.getElementById('error_telephone').innerHTML = '';
			document.getElementById('error_whatsapp').innerHTML = '';
			document.getElementById('error_discount').innerHTML = '';
			let tokenStr = localStorage.getItem('token');
			await typeform(urllink, subForm, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.success = response.data.success
				if(this.success == true){
					this.$router.push({name:"CustomerIndex"})
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