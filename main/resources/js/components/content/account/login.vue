<template>
	<div class="flex flex-col gap-4">
		<form @submit.prevent="submitdata">
			<Forms v-model="data.email" v-bind:value="data.email" v-bind:type="'email'" v-bind:labels="'Email'" v-bind:setid="'email'" v-bind:setattribute="''"/>
			<Forms v-model="data.password" v-bind:value="data.password" v-bind:type="'password'" v-bind:labels="'Password'" v-bind:setid="'password'" v-bind:setattribute="''"/>
			<div class="flex justify-between">
				<div>
					<router-link :to='{name:"Forgot",}' class="text-blue-500 hover:text-blue-300 underline">Forgot Password ?</router-link>
				</div>
				<div>
					<button type="submit" class="btn-md btn-primary">
						Login
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import Forms from '../../elements/form.vue';

export default{
	name:"Login",
	data(){
		return {
			data:{
				email:'',
				password:'',
				id:'',
				token:'',
				name:'',
			},
		}
	},
	methods:{
		async submitdata(){
			var urllink = `/api/account/login`;
			await this.axios.post(urllink, {email: this.data.email, password: this.data.password}).then(response=>{
				this.data = response.data.data;
				localStorage.setItem('token', this.data.token);
				localStorage.setItem('name', this.data.name);
				localStorage.setItem('id', this.data.id);
				localStorage.setItem('email', this.data.email);
				localStorage.setItem('is_admin', this.data.is_admin);
				sessionStorage.setItem('typealert', 'success');
				let message = 'Welcome to paventory ' + this.data.name;
				sessionStorage.setItem('messagealert', message);
				this.success = response.data.success
				if(this.success == true){
					this.messagealert = '';
					this.typealert = '';
					location.reload()
					//this.$router.push({name:"Dashboard"})
				}
				else{
					console.log(this.message);
				}
			}).catch(error=>{
				const message = error.response
				const general = message.data.message;
				const geterror = message.data.data
				if(geterror != null)
				{
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
				}

				if(general != '' || general != null)
				{
					alert(general);
				}
			})
		},
	},
	components: {
		'Forms':Forms,
	}
}
</script>