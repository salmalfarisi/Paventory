<template>
	<div>
		<div class="m-4 font-semibold flex justify-between">
			<div class="text-3xl">
				{{ titles }}
			</div>
		</div>
		<div class="card">
			<form @submit.prevent="submitdata">
				<Forms v-model="data.nama_kategori" v-bind:value="data.nama_kategori" v-bind:type="'text'" v-bind:labels="'Name'" v-bind:setid="'nama_kategori'" />
				<div class="flex justify-between pt-2">
					<div>
						<router-link :to='{name:"CategoryIndex",}' class="float-left btn-danger btn-md">Back</router-link>
					</div>
					<div>
						<div v-if="this.status == 'edit'">
							<button type="submit" class="btn-md btn-primary">Update</button>
						</div>
						<div v-else>
							<button type="submit" class="btn-md btn-primary">Create</button>
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
	name:"kategoriForm",
	data(){
		return {
			data:{
				success:'',
				message:'',
				nama_kategori:'',
			},
			titles:'',
			status:'',
		}
	},
	mounted(){
		this.getData()
	},
	methods:{
		async getData(){
			this.status = `${this.$route.params.status}`;
			
			if(this.status == 'edit'){
				let tokenStr = localStorage.getItem('token');
				await this.axios.get(`/api/kategori/detail/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
					this.data = response.data.data
					this.success = response.data.success
					this.message = response.data.message
					this.titles = 'Edit data';
				}).catch(error=>{
					console.log(error)
					this.data = {}
				})
			}
			else{
				this.titles = 'Create new Category';
			}
		},
		async submitdata(){
			if(this.status == 'edit')
			{
				var urllink = `/api/kategori/update/${this.$route.params.id}`;
				var typesubmit = this.axios.put;
			}
			else
			{
				var urllink = `/api/kategori/store`;
				var typesubmit = this.axios.post;
			}
			let inputdata = {
				nama_kategori: this.data.nama_kategori,
			};
			document.getElementById('error_nama_kategori').innerHTML = '';
			let tokenStr = localStorage.getItem('token');
			await typesubmit(urllink, inputdata, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.success = response.data.success
				if(this.success == true){
					this.$router.push({name:"CategoryIndex"})
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
				else{
					for (let key of Object.keys(geterror)) {
						const setvar = 'error_' + key + '_navbar';
						const sethtml = 'geterror.' + key;
						document.getElementById(setvar).innerHTML = eval(sethtml);
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