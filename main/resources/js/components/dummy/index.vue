<template>
	<div v-if="checktoken == 'true'">
		<router-link :to='{name:"Formdata", params: {status: "create", id: "0"}, }' class="float-right btn btn-primary btn-sm my-2">Create new data</router-link>
		<table class="table table-striped table-hover">
		  <thead class="thead-light">
			<tr>
			  <th scope="col">No</th>
			  <th scope="col">Title</th>
			  <th scope="col">Description</th>
			  <th scope="col">Action</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="(loopdata, key) in data" :key="key">
				<td>{{ key+1 }}</td>
				<td>{{ loopdata.title }}</td>
				<td>{{ loopdata.description }}</td>
				<td class="d-flex justify-content-center">
					<div v-if="loopdata.id != null">
						<router-link :to='{name:"Formdata", params: {status: "show", id: loopdata.id}, }' class="btn btn-info btn-sm mx-1">Show</router-link>
						<router-link :to='{name:"Formdata", params: {status: "edit", id: loopdata.id}, }' class="btn btn-warning btn-sm mx-1">Edit</router-link>
						<button v-on:click="confirmdelete(loopdata.id, loopdata.title)" type="button" class="btn btn-danger btn-sm mx-1" data-toggle="modal" data-target="#exampleModal">Delete</button>
					</div>
				</td>  
			</tr>
		  </tbody>
		</table>
		
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Are you sure want to delete this data ?</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			  </div>
			  <div class="modal-body">
				<div id="judulmodal"></div>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
				<button type="button" id="iddata" v-on:click="deleteData" class="btn btn-primary">Yes</button>
			  </div>
			</div>
		  </div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			data:{
				success:false,
				message:'',
				data:[],
			},
			checktoken:localStorage.getItem('login'),
		}
	},
	mounted(){
		this.loaddata()
	},
	methods:{
		async loaddata(){
			let tokenStr = localStorage.getItem('token');
			await this.axios.get(`/api/index`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.data = response.data.data
				this.success = response.data.success
				this.message = response.data.message
			}).catch(error=>{
				console.log(error)
				this.data = []
			})
		},
		async confirmdelete(id, title){
			document.getElementById('judulmodal').innerHTML = title;
			document.getElementById('iddata').value = id;
		},
		async deleteData(){
			var id = document.getElementById('iddata').value;
			var urllink = `/api/delete/` + id
			let tokenStr = localStorage.getItem('token');
			await this.axios.patch(urllink, '', { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
				this.data = response.data.data
				this.success = response.data.success
				this.message = response.data.message
				location.reload();
				return false;
			}).catch(error=>{
				console.log(error)
				this.data = []
			})
		}
	}
}
</script>