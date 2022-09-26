<template>
		<main class="h-screen">
			<div v-if="loginsession === true">
				<div class="bg-gray-200">
					<Navbar/>
					<div class="grid sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-8" style="min-height:83vh; max-height:92vh;" v-on:click="closeaccount()">
						<div id="sidebar" :class="setsidebar">
							<Sidebar/>
						</div>
						<div id="content" style="height: 82vh;" :class="setcontent">
							<Alert/>
							<router-view></router-view>
						</div>
					</div>
					<div v-on:click="closeaccount()">
						<Footer />
					</div>
				</div>
			</div>
			<div v-else>
				<div class="flex h-screen justify-center items-center text-center bg-secondary-black-light-100">
					<div class="w-5/6 md:w-1/2 lg:1/4 bg-white p-8 rounded rounded-md shadow-lg">
						<center>
							<img v-bind:src="'/icon/favicon-96x96.png'"/>
						</center>
						<Alert/>
						<router-view></router-view>
					</div>
				</div>
			</div>
		</main>
</template>

<script>
	import { useRouter } from 'vue-router';
	import Footer from './components/elements/footer.vue';
	import Navbar from './components/elements/navbar.vue';
	import Sidebar from './components/elements/sidebar.vue';
	import Alert from './components/elements/alert.vue';
	
	export default{
		data(){
			return {
				loginsession:false,
				check:true,
				setsidebar:'hidden lg:block bg-secondary-black-default-600 lg:col-span-1 xl:col-span-2 col-span-0',
				setcontent:'overflow-y-auto lg:col-span-3 xl:col-span-6 p-4',
			}
		},
		mounted(){
			this.loadSession(),
			this.$root.$on('sendsidebar', (msg) => { this.modificationnavigation(msg) });
		},
		methods:{
			async loadSession(){
				let sessiondata = localStorage.getItem('token');
				let url = window.location.href;
				if(sessiondata != null)
				{
					this.loginsession = true;
					let listurl = ['http://127.0.0.1:8000/forgot', 'http://127.0.0.1:8000/createnewpassword'];
					for(var i = 0; i < 2; i++)
					{
						let getdata = listurl[i];
						let result = getdata.indexOf(url);
						if(result != -1)
						{
							this.check = false;
							this.$router.push({name:"Dashboard"});
						}
					}
					if(this.check == true)
					{
						if(url == 'http://127.0.0.1:8000/')
						{
							this.check = false;
							this.$router.push({name:"Dashboard"});
						}
					}
				}
			},
			async modificationnavigation(getnav){
				if(getnav == true){
					this.setsidebar = 'hidden lg:hidden bg-secondary-black-default-600 col-span-0';
					this.setcontent = 'overflow-y-auto lg:col-span-4 xl:col-span-8 p-4';
				}
				else{
					this.setsidebar = 'hidden lg:block bg-secondary-black-default-600 lg:col-span-1 xl:col-span-2 col-span-0';
					this.setcontent = 'overflow-y-auto lg:col-span-3 xl:col-span-6 p-4';
				}
			},
			async closeaccount(){
				this.$root.$emit('closeaccountpanel', false);
			}
		},
		components:{
			Footer, Navbar, Sidebar, Alert
		},
	};
</script>