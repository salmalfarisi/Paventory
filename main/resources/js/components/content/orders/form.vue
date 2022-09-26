<template>
	<div>
		<div class="p-4 bg-blue-500 hidden">
			1. loaddata dari parent ke child <br>
			2. kalo parentnya punya data, auto load data si child <br>
			3. kalo kagak, cukup load proses crud saja <br>
			4. selama form ini belum submit, jangan lakukan proses simpan data ke dalam database <br>
			5. lakukan submit form dengan mengirimkan parentnya setiap kirim data ke child <br>
			6. auto balik ke index apabila sudah selesai melakukan submit <br>
		</div>
		<div v-if="this.senddata == true">
			<OrderParent v-bind:status="this.status" v-bind:id="this.id"/>
		</div>
	</div>
</template>

<script>
import OrderParent from './parent.vue';

export default{
	name:"OrderForm",
	data(){
		return{
			status:'',
			id:'',
			senddata:false,
		}
	},
	mounted(){
		this.sendData()
	},
	methods:{
		async sendData(){
			this.status = `${this.$route.params.status}`;
			this.id = `${this.$route.params.id}`;
			this.senddata = true;
		}
	},
	components: {
		OrderParent
	}
}
</script>