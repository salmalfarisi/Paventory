<template>
	<div>
        <div class="card">
            <div class="flex justify-between pb-2 text-lg font-bold">
                Input item
            </div>
            <div v-if="this.tempform == true">
                <Forms v-model="forms_barang_id" v-bind:value="forms_barang_id" v-bind:type="'select'" v-bind:labels="'Item'" v-bind:setid="'forms_barang_id'" v-bind:option="this.forms_list_barang" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
                <Forms v-model="forms_total_barang" v-bind:value="forms_total_barang" v-bind:type="'number'" v-bind:labels="'Qty'" v-bind:setid="'forms_total_barang'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
                <div v-if="this.status == 'show'">
					<div class="flex flex-col gap-2">
						<label class="flex justify-start text-base font-medium">Promo Status</label>
						<p>{{ forms_is_promo == false ? 'No' : 'Yes' }}</p>
					</div>
				</div>
				<div v-else>
					<Forms v-model="forms_is_promo" v-bind:value="forms_is_promo" v-bind:type="'checkbox'" v-bind:labels="'Discount ?'" v-bind:setid="'forms_is_promo'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>
				</div>
				<div :hidden="forms_is_promo == false ? true : false">
					<Forms v-model="forms_type_promo" v-bind:value="forms_type_promo" v-bind:type="'select'" v-bind:labels="'Type of discount'" v-bind:setid="'type_discount'" v-bind:option="[['persen', 'Percent'],['cash', 'Cash']]" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
					<Forms v-model="forms_total_promo" v-bind:value="forms_total_promo" v-bind:type="'number'" v-bind:labels="'Total of Discount'" v-bind:setid="'forms_total_promo'" v-bind:setattribute="`${this.$route.params.status}` === 'show' ? 'disabled':''"/>			
				</div>
                <Forms v-model="forms_total_harga" v-bind:value="forms_total_harga" v-bind:type="'number'" v-bind:labels="'Total of Price'" v-bind:setid="'forms_total_harga'" v-bind:setattribute="'disabled'"/>
                <div class="flex justify-end pt-2">
                    <div>
                        <button class="btn-md btn-primary float-right" id="sethtml" value="forms_id" v-on:click="crudchilddata()">Create</button>			
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="flex justify-between pb-4">
                <div class="font-bold">
                    List of orders
                </div>
                <div>
                    <div v-if="this.status !== 'show'">
                        <button v-on:click="crudchilddata('create')" class="btn-md btn-primary">Create</button>
                    </div>
                </div>
            </div>
            <!-- sementara pake scroll dulu deh. untuk custom action table kalo ada waktu -->
            <div v-if="this.tempload == true">
                <Tabletailwind v-bind:tableid="'dt_orders_child_2'" v-bind:typefirstcol="'number'" v-bind:theaders="'Item|Qty|Price|Type of Discount|Total Discount|Total Price|Action'">
                    <tr v-for="(items, datas) in tempdata" :key="datas">
                        <td>{{datas+1}}</td>
                        <td>{{items.name}}</td>
                        <td>{{items.total_barang}}</td>
                        <td>{{items.harga_barang}}</td>
                        <td>{{ (items.type_promo == 'persen' ? 'Percent' : (items.type_promo == 'cash' ? 'Cash' : 'No Discount')) }}</td>
                        <td>{{items.total_promo}}</td>
                        <td>{{items.total_harga}}</td>
                        <td class="flex justify-center">
                            <div>
                                <button type="button" class="btn-md btn-warning" v-on:click="editdata(items.id)">Edit</button>
                                <button type="button" class="btn-md btn-danger" v-on:click="deletedata(items.id)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </Tabletailwind>
            </div>
        </div>
    </div>
</template>

<script>
import Tabletailwind from '../../elements/table.vue';
import Forms from '../../elements/form.vue';

export default{
    name:'OrderChild',
    data(){
		return {
			data:{
                success:false,
                message:'',
                data:[],
            },
            tempdata:[],
            tempload:false,
            tempform:false,
            forms_list_barang:[],
            forms_id:0,
            forms_barang_id:'',
            forms_total_barang:0,
            forms_is_promo:false,
            forms_type_promo:'',
            forms_total_promo:0,
            forms_total_harga:0,
        }
    },
    props:['status', 'id'],
    mounted(){
		this.getData();
		this.loadItem();
        this.$root.$on('submitorderdata', (msg) => { this.submitfinaldata(msg) });
	},
    methods:{
        async getData(){
            if(this.status != 'create')
            {
                let tokenStr = localStorage.getItem('token');
                await this.axios.get(`/api/orders/child/index/`+this.id, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
                    this.success = response.data.success;
                    this.data = response.data.data;
                    this.tempdata = response.data.data;
                }).catch(error=>{
                    console.log(error)
                    this.pilihan = []
                })
            }
            this.tempload = true;
        },
        async loadItem(){
            let tokenStr = localStorage.getItem('token');
            await this.axios.get(`/api/barang/index`, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).then(response=>{
                console.log(response.data);
                let temp = response.data.data;
                console.log(temp);
                for(var i = 0; i < temp.length; i++)
                {
                    let gettemp = temp[i];
                    let setinput = [gettemp.id, gettemp.name];
                    this.forms_list_barang.push(setinput);
                }
                this.tempform = true;
            }).catch(error=>{
                alert(error)
                this.forms_list_barang = [];
            })
        },
        async crudchilddata(target){
            let total = this.tempdata.length + parseInt('1');
            this.tempdata.push(total);
        },
        async submitfinaldata(){
            alert('masuk ke dalam child');
            this.$router.push({name:'OrderIndex'})
        },
        async testing(){
            let total = this.tempdata.length;
            this.tempdata.push(total);
        },
        async editdata(target){

        },
        async deletedata(target){

        },
    },
    components:{
        Forms, Tabletailwind
    }
}
</script>