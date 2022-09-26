<template>
	<div>
		<div class="m-4 font-semibold text-3xl">
            Colors
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(index2, j) in warna" class="border-solid border-4 text-center border-black" :set="setJ = j*10">
                <div class="p-4">
                    bg-{{ index2 }}
                </div>
                <div :set="setL = ((j+1)*10)">
                    <div v-for="(index1, i) in setwarna.slice(setJ , setL)">
                        <div>
                            <div :class="index1">
                                <div v-if="i >= 4">
                                    <div class="text-white p-4">
                                        {{index1}}
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="p-4">
                                        {{index1}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    export default{
        name:"Formdata",
        data(){
            return {
                warna:['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'red', 'secondary-black-light', 'secondary-black-default', 'secondary-red-light', 'secondary-red-default', 'secondary-red-dark', 'secondary-yellow-light', 'secondary-yellow-default', 'secondary-yellow-dark'],
                angka:['50', '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
                setwarna:[],
            }
        },
        mounted(){
		    this.loadColor()
        },
        methods:{
            async loadColor(){
                for(let i = 0; i < this.warna.length; i++)
                {
                    for(let j = 0; j < this.angka.length; j++)
                    {
                        let setcolor = 'bg-'+this.warna[i]+'-'+this.angka[j];
                        this.setwarna.push(setcolor);
                    }
                }
            },
        },
    }
</script>