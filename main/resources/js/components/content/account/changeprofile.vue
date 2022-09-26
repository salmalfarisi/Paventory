<template>
	<div>
        <div class="m-4 font-semibold text-3xl">
            Profile
        </div>
        <div class="card">
            <div class="flex flex-col gap-4">
                <form @submit.prevent="submitdata">
                    <Forms v-model="data.name" v-bind:value="data.name" v-bind:type="'text'" v-bind:labels="'Name'" v-bind:setid="'name'" v-bind:setattribute="''"/>
                    <Forms v-model="data.email" v-bind:value="data.email" v-bind:type="'email'" v-bind:labels="'Email'" v-bind:setid="'email'" v-bind:setattribute="''"/>
                    <Forms v-model="data.telephone" v-bind:value="data.telephone" v-bind:type="'text'" v-bind:labels="'Telephone'" v-bind:setid="'telephone'" v-bind:setattribute="''"/>
                    <Forms v-model="data.whatsapp" v-bind:value="data.whatsapp" v-bind:type="'text'" v-bind:labels="'Whatsapp'" v-bind:setid="'whatsapp'" v-bind:setattribute="''"/>
                    <Forms v-model="newfile" v-bind:value="newfile" v-bind:type="'file'" v-bind:labels="'Foto'" v-bind:setid="'photo'" v-bind:setattribute="''"/>
                    <div class="flex justify-between pt-4">
                        <div>
                            <router-link :to='{name:"Dashboard",}' class="btn-md btn-danger">Cancel</router-link>
                        </div>
                        <div>
                            <button type="submit" class="btn-md btn-primary">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Forms from '../../elements/form.vue';

export default{
    name:"UpdateProfile",
	data(){
		return {
			data:{
                success:false,
                message:'',
				name:'',
				email:'',
				photo:'',
				telephone:'',
				whatsapp:'',
			},
			newfile:'',
		}
	},
	mounted(){
		this.loaddata()		
	},
	methods:{
		async loaddata(){
			//cara supaya profile seolah" lagi ngerefresh halaman yang sama
			var urllink = `/api/user/detail/` + localStorage.getItem('id');
            let tokenStr = localStorage.getItem('token');
			await this.axios.get(urllink, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.data = response.data.data;
			}).catch(error=>{
				const message = error.response
				const general = message.data.message;
				const geterror = message.data.data
				alert(general);
			})
		},
		async submitdata(){
			const subForm = new FormData();
			subForm.append("name", this.data.name);
			subForm.append("email", this.data.email);
			subForm.append("telephone", this.data.telephone);
			subForm.append("whatsapp", this.data.whatsapp);
			if(this.newfile != null)
			{
				subForm.append("photo", this.newfile);
			}

			var urllink = `/api/account/profile`;
            let tokenStr = localStorage.getItem('token');
			await this.axios.post(urllink, subForm, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.success = response.data.success;
				this.message = response.data.message;
				localStorage.setItem('name', this.data.name);
				localStorage.setItem('email', this.data.email);
				sessionStorage.setItem('typealert', 'success');
				sessionStorage.setItem('messagealert', response.data.message);
				this.$router.push({name:"Dashboard"})
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