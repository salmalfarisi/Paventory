<template>
	<div>
		<div v-html="firstmessage"></div>
		<div class="m-4 font-semibold text-3xl">
            Dashboard
        </div>
		<div class="grid grid-cols-2 gap-2">
			<div>
				<Revenue/>
			</div>
			<div>
				<Stock/>
			</div>
			<div>
				<Orders/>
			</div>
			<div>
				<Information/>
			</div>
		</div>
	</div>
</template>

<script>
import Revenue from './revenue.vue';
import Stock from './stock.vue';
import Orders from './order.vue';
import Information from './information.vue';

export default{
	name:"Dashboard",
	data(){
		return {
			firstmessage:'',
		}
	},
	mounted(){
		this.checkFirstLogin()
	},
	methods:{
		async checkFirstLogin(){
			let getCheckLogin = localStorage.getItem('firstlogin');
			if(getCheckLogin == 'false')
			{
				let message = 'Welcome to Paventory, ' + localStorage.getItem('name');
				sessionStorage.setItem('typealert', 'success');
				sessionStorage.setItem('messagealert', message);
			}
		},
	},
	components:{
    Revenue,
    Stock,
    Orders,
    Information
}
}
</script>