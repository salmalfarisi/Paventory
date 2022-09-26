<template>
	<div>
        <div class="m-4 font-semibold text-3xl">
            Change Password
        </div>
        <div class="card">
            <div class="flex flex-col gap-4">
                <form @submit.prevent="submitdata">
                    <Forms v-model="data.password" v-bind:value="data.password" v-bind:type="'password'" v-bind:labels="'Password'" v-bind:setid="'password'" v-bind:setattribute="''"/>
                    <Forms v-model="data.repeat_password" v-bind:value="data.repeat_password" v-bind:type="'password'" v-bind:labels="'Repeat Password'" v-bind:setid="'repeat_password'" v-bind:setattribute="''"/>
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
    name:"ChangePassword",
	data(){
		return {
			data:{
                success:false,
                message:'',
				password:'',
				repeat_password:'',
			},
		}
	},
	methods:{
		async submitdata(){
            var urllink = `/api/account/password`;
            let tokenStr = localStorage.getItem('token');
			await this.axios.put(urllink, {password: this.data.password, repeat_password: this.data.repeat_password}, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.success = response.data.success;
				this.message = response.data.message;
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