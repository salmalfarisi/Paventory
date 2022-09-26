<template>
    <div class="grid grid-cols-2 gap-2">
        <div class="card min-h-full">
            <div class="flex justify-between pb-2 text-lg font-bold">
                Orders on Process
            </div>
            <div class="grid grid-rows-2 place-content-center gap-2">
                <div class="text-center">
                    <i class="fa-solid fa-truck fa-5x"></i>
                </div>
                <div class="text-3xl text-center">
                    5 Orders
                </div>
            </div>
        </div>
        <div class="card min-h-full">
            <div class="flex justify-between pb-2 text-lg font-bold">
                Orders on Return
            </div>
            <div class="grid grid-rows-2 place-content-center gap-2">
                <div class="text-center">
                    <i class="fa-solid fa-times fa-5x"></i>
                </div>
                <div class="text-3xl text-center">
                    1 Orders
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
	    name:"Information",
        data(){
            return{
                test : true,
            }
        },
    }
</script>