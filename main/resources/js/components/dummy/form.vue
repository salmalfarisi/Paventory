<template>
	<div>
		<div class="h3 text-center">{{ titles }}</div>
		<form @submit.prevent="submitdata" enctype="multipart/form-data">
			<Forms v-model="data.title" v-bind:value="data.title" v-bind:type="'text'" v-bind:labels="'Title'" v-bind:setid="'title'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
			<Forms v-model="data.description" v-bind:value="data.description" v-bind:type="'textarea'" v-bind:labels="'Description'" v-bind:setid="'description'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
			<div v-if="status === 'edit' || status === 'create'">
				<Forms v-model="newfile" v-bind:type="'file'" v-bind:labels="'Upload File'" v-bind:setid="'file'" v-bind:setattribute="''"/>
				<div v-html="submitbutton"></div>
			</div>
			<div v-else>
				<center>
					<img v-bind:src="'/file/' + data.file"  class="img-fluid" alt="Responsive image">
				</center>
			</div>
		</form>
		<router-link :to='{name:"Index",}' class="float-left btn-danger btn-md">Back</router-link>
	</div>
</template>

<script>
import Forms from '../elements/form.vue';

export default{
	name:"Formdata",
	data(){
		return {
			data:{
				success:'',
				message:'',
				title:'',
				description:'',
				file:'',
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
			
			if(this.status == 'show' || this.status == 'edit'){
				let tokenStr = localStorage.getItem('token');
				await this.axios.get(`/api/detail/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
					this.data = response.data.data
					this.success = response.data.success
					this.message = response.data.message
					if(this.status == 'show'){
						this.titles = 'Detail data : ' + this.data.title;
					}
					else{
						this.titles = 'Edit data : ' + this.data.title;
						this.submitbutton = `<button type="submit" class="float-right btn btn-primary btn-sm mx-2" value="update">Save</button>`;
					}
				}).catch(error=>{
					console.log(error)
					this.data = {}
				})
			}
			else{
				this.titles = 'Create new data';
				this.submitbutton = `<button type="submit" class="float-right btn btn-primary btn-sm mx-2" value="create">Save</button>`;
			}
		},
		async submitdata(){
			if(this.status == 'edit'){
				var urllink = `/api/update/${this.$route.params.id}`;
			}
			else{
				var urllink = `/api/store`;
			}
			
			const subForm = new FormData();
			subForm.append("title", this.data.title);
			subForm.append("description", this.data.description);
			if(this.newfile != null)
			{
				subForm.append("file", this.newfile);
			}
			
			let tokenStr = localStorage.getItem('token');
			await this.axios.post(urllink, subForm, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.success = response.data.success
				if(this.success == true){
					this.$router.push({name:"Index"})
				}
				else{
					console.log(this.message);
				}
			}).catch(error=>{
				const message = error.response
				const geterror = message.data.data
				var i = parseInt('0')
				for (let key of Object.keys(geterror)) {
					const setvar = 'error_' + key
					var j = parseInt('0')
					for (let message of Object.values(geterror)) {
						if(i == j){
							document.getElementById(setvar).innerHTML = message;
						}
						j++;
					}
					i++;
				}
			})
		},
	},
	components: {
		'Forms':Forms,
	}
}
</script>