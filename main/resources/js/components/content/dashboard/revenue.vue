<template>
    <div>
        <div class="card">
			<div class="flex justify-between pb-2 text-lg font-bold">
                Revenue (in mil.)
            </div>
            <ChartHTML v-bind:chartType="this.chartType" v-bind:chartData="this.chartData" v-bind:chartOption="this.chartOption" v-bind:chartId="this.chartId"/>
		</div>
    </div>
</template>

<script>
    import ChartHTML from '../../elements/chart.vue';

    export default{
	    name:"Revenue",
        data(){
            return{
                chartType:'line',
                chartData:{
                    labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
                    datasets: [
                        {
                            label: "This week",
                            data:  [10, 20, 50, 20, 75, 80, 40],
                            backgroundColor: "rgba(224, 248, 255, 0.4)",
                            borderColor: "#5cddff",
                            lineTension: 0,
                            pointBackgroundColor: "#5cddff",
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
                            max:100,
                            ticks: {
                                stepSize: 20
                            }
                        },
                    }
                    //maintainAspectRatio: false,
                },
                chartId:'revenue',
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