<template>
    <div>
        <div class="card">
			<div class="flex justify-between pb-2 text-lg font-bold">
                Orders
            </div>
            <ChartHTML v-bind:chartType="this.chartType" v-bind:chartData="this.chartData" v-bind:chartOption="this.chartOption" v-bind:chartId="this.chartId"/>
		</div>
    </div>
</template>

<script>
    import ChartHTML from '../../elements/chart.vue';

    export default{
	    name:"Orders",
        data(){
            return{
                chartType:'line',
                chartData:{
                    labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
                    datasets: [
                        {
                            label: "This week",
                            data:  [4, 8, 5, 2, 7, 2, 4],
                            backgroundColor: "rgba(14, 153, 23, 0.4)",
                            borderColor: "#0e9917",
                            lineTension: 0,
                            pointBackgroundColor: "#0e9917",
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
                    scales:{
                        y:{
                            max:50,
                            ticks: {
                                stepSize: 5
                            }
                        },
                    }
                    //maintainAspectRatio: false,
                },
                chartId:'orders',
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