<template>
    <div>
        <div class="card">
			<div class="flex justify-between pb-2 text-lg font-bold">
                Stock
            </div>
            <ChartHTML v-bind:chartType="this.chartType" v-bind:chartData="this.chartData" v-bind:chartOption="this.chartOption" v-bind:chartId="this.chartId"/>
		</div>
    </div>
</template>

<script>
    import ChartHTML from '../../elements/chart.vue';

    export default{
	    name:"Stock",
        data(){
            return{
                chartType:'bar',
                chartData:{
                    labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
                    datasets: [
                        {
                            label: "This week",
                            data:  [10, 25, 3, 25, 17, 4, 9],
                            backgroundColor: "rgba(153, 103, 15, 0.4)",
                            borderColor: "#ffc764",
                            lineTension: 0,
                            pointBackgroundColor: "#ffc764",
                        },
                    ],
                },
                chartOption:{
                    tooltips: {
                        mode: "label",
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return (
                                    data.datasets[tooltipItem.datasetIndex].label +
                                    ": " +
                                    tooltipItem.xLabel
                                );
                            },
                        },
                    },
                    responsive: true, 
                    legend:{
                        display:false,
                    },
                    //maintainAspectRatio: false,
                },
                chartId:'stock',
            }
        },
        mounted(){
            this.loaddata();
        },
        methods:{
            async loaddata(){
                //ceritanya load data disini
            }
        },
        components:{
            ChartHTML
        }
    }
</script>