<template>
	<div>
		<div class="m-4 font-semibold flex justify-between">
			<div class="text-3xl">
				{{ titles }}
			</div>
		</div>
		<div class="card">
			<form @submit.prevent="submitdata" enctype="multipart/form-data">
				<Forms v-model="data.name" v-bind:value="data.name" v-bind:type="'text'" v-bind:labels="'Name'" v-bind:setid="'name'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
				<Forms v-model="data.email" v-bind:value="data.email" v-bind:type="'email'" v-bind:labels="'Email'" v-bind:setid="'email'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.telephone" v-bind:value="data.telephone" v-bind:type="'text'" v-bind:labels="'Telephone'" v-bind:setid="'telephone'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<Forms v-model="data.whatsapp" v-bind:value="data.whatsapp" v-bind:type="'text'" v-bind:labels="'Whatsapp'" v-bind:setid="'whatsapp'"  v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				<div v-if="status === 'show'">
					<div class="py-4">
						<center>
							<img v-bind:src="data.image != null ? '/user/' + data.image : '/user.jpg'" height="240px" width="240px" class="img-fluid" alt="Responsive image">
						</center>
					</div>
				</div>
				<div class="flex justify-between pt-2">
					<div>
						<router-link :to='{name:"UserIndex",}' class="float-left btn-danger btn-md">Back</router-link>
					</div>
					<div>
						<div v-if="this.status != 'show'">
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
	name:"UserForm",
	data(){
		return {
			data:{
				success:'',
				message:'',
				name:'',
				email:'',
				whatsapp:'',
				telephone:'',
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
			
			if(this.status == 'show'){
				let tokenStr = localStorage.getItem('token');
				await this.axios.get(`/api/user/detail/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
					this.data = response.data.data
					this.success = response.data.success
					this.message = response.data.message
					this.titles = 'Detail data : ' + this.data.name;
				}).catch(error=>{
					console.log(error)
					this.data = {}
				})
			}
			else{
				this.titles = 'Create new User';
			}
		},
		async submitdata(){
			var urllink = `/api/user/store`;
			const subForm = new FormData();
			subForm.append("name", this.data.name);
			subForm.append("email", this.data.email);
			subForm.append("telephone", this.data.telephone);
			subForm.append("whatsapp", this.data.whatsapp);
			document.getElementById('error_name').innerHTML = '';
			document.getElementById('error_email').innerHTML = '';
			document.getElementById('error_telephone').innerHTML = '';
			document.getElementById('error_whatsapp').innerHTML = '';
			let tokenStr = localStorage.getItem('token');
			await this.axios.post(urllink, subForm, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.success = response.data.success
				if(this.success == true){
					this.$router.push({name:"UserIndex"})
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